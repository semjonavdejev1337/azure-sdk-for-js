// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpOperationResponse, URLBuilder } from "@azure/core-http";
import { DefaultHttpClient, WebResource, WebResourceLike } from "@azure/core-http";

export class RecordingHttpClient extends DefaultHttpClient {
  private static s_recordingServerUri = "http://localhost:5000";
  private static s_startPlaybackUri = RecordingHttpClient.s_recordingServerUri + "/playback/start";
  private static s_stopPlaybackUri = RecordingHttpClient.s_recordingServerUri + "/playback/stop";
  private static s_startRecordUri = RecordingHttpClient.s_recordingServerUri + "/record/start";
  private static s_stopRecordUri = RecordingHttpClient.s_recordingServerUri + "/record/stop";

  private _httpClient: DefaultHttpClient;
  private _recordingId?: string;
  private _sessionFile: string;
  private _startUri: string;
  private _stopUri: string;
  private _mode: string;

  constructor(sessionFile: string, playback: boolean) {
    super();
    this._sessionFile = sessionFile;
    this._startUri = playback
      ? RecordingHttpClient.s_startPlaybackUri
      : RecordingHttpClient.s_startRecordUri;
    this._stopUri = playback
      ? RecordingHttpClient.s_stopPlaybackUri
      : RecordingHttpClient.s_stopRecordUri;
    this._mode = playback ? "playback" : "record";
    this._httpClient = new DefaultHttpClient();
    console.log("in the RecordingHttpClient constructor");
  }

  async sendRequest(request: WebResourceLike): Promise<HttpOperationResponse> {
    console.log("in the RecordingHttpClient: prepareRequest (browser)");
    await this.start();

    if (!request.headers.contains("x-recording-id")) {
      request.headers.set("x-recording-id", this._recordingId!);
      request.headers.set("x-recording-mode", this._mode);

      const upstreamUrl = URLBuilder.parse(request.url);
      const redirectedUrl: URLBuilder = URLBuilder.parse(request.url);
      redirectedUrl.setHost("localhost:5000");
      redirectedUrl.setScheme("http");
      upstreamUrl.setPath(undefined);
      request.headers.set("x-recording-upstream-base-uri", upstreamUrl.toString());
      request.url = redirectedUrl.toString();
    }

    console.log("in the RecordingHttpClient: callign super.prepareRequest");
    return await super.sendRequest(request);
  }

  async start(): Promise<void> {
    if (this._recordingId === undefined) {
      const req = this._createRecordingRequest(this._startUri);
      console.log("in the RecordingHttpClient: inside start - calling _httpClient.sendRequest");
      const rsp = await this._httpClient.sendRequest(req);
      if (rsp.status !== 200) {
        throw new Error("Start request failed.");
      }
      const id = rsp.headers.get("x-recording-id");
      if (!id) {
        throw new Error("No recording ID returned.");
      }
      this._recordingId = id;
    }
  }

  async stop(): Promise<void> {
    if (this._recordingId !== undefined) {
      const req = this._createRecordingRequest(this._stopUri);
      req.headers.set("x-recording-save", "true");
      console.log("in the RecordingHttpClient: inside stop - calling _httpClient.sendRequest");

      await this._httpClient.sendRequest(req);
    }
  }

  private _createRecordingRequest(uri: string) {
    const req = new WebResource(uri, "POST");
    req.headers.set("x-recording-file", this._sessionFile);
    if (this._recordingId !== undefined) {
      req.headers.set("x-recording-id", this._recordingId);
    }
    return req;
  }
}