/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DatasetOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClient } from "../artifactsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DatasetResource,
  DatasetGetDatasetsByWorkspaceNextOptionalParams,
  DatasetGetDatasetsByWorkspaceOptionalParams,
  DatasetGetDatasetsByWorkspaceResponse,
  DatasetCreateOrUpdateDatasetOptionalParams,
  DatasetCreateOrUpdateDatasetResponse,
  DatasetGetDatasetOptionalParams,
  DatasetGetDatasetResponse,
  DatasetDeleteDatasetOptionalParams,
  ArtifactRenameRequest,
  DatasetRenameDatasetOptionalParams,
  DatasetGetDatasetsByWorkspaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DatasetOperations operations. */
export class DatasetOperationsImpl implements DatasetOperations {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class DatasetOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * Lists datasets.
   * @param options The options parameters.
   */
  public listDatasetsByWorkspace(
    options?: DatasetGetDatasetsByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<DatasetResource> {
    const iter = this.getDatasetsByWorkspacePagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getDatasetsByWorkspacePagingPage(options);
      }
    };
  }

  private async *getDatasetsByWorkspacePagingPage(
    options?: DatasetGetDatasetsByWorkspaceOptionalParams
  ): AsyncIterableIterator<DatasetResource[]> {
    let result = await this._getDatasetsByWorkspace(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getDatasetsByWorkspaceNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getDatasetsByWorkspacePagingAll(
    options?: DatasetGetDatasetsByWorkspaceOptionalParams
  ): AsyncIterableIterator<DatasetResource> {
    for await (const page of this.getDatasetsByWorkspacePagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists datasets.
   * @param options The options parameters.
   */
  private async _getDatasetsByWorkspace(
    options?: DatasetGetDatasetsByWorkspaceOptionalParams
  ): Promise<DatasetGetDatasetsByWorkspaceResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getDatasetsByWorkspace",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        getDatasetsByWorkspaceOperationSpec
      );
      return result as DatasetGetDatasetsByWorkspaceResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Creates or updates a dataset.
   * @param datasetName The dataset name.
   * @param dataset Dataset resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateDataset(
    datasetName: string,
    dataset: DatasetResource,
    options?: DatasetCreateOrUpdateDatasetOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DatasetCreateOrUpdateDatasetResponse>,
      DatasetCreateOrUpdateDatasetResponse
    >
  > {
    const { span } = createSpan(
      "ArtifactsClient-beginCreateOrUpdateDataset",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DatasetCreateOrUpdateDatasetResponse> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as DatasetCreateOrUpdateDatasetResponse;
      } catch (error: any) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { datasetName, dataset, options },
      createOrUpdateDatasetOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a dataset.
   * @param datasetName The dataset name.
   * @param dataset Dataset resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateDatasetAndWait(
    datasetName: string,
    dataset: DatasetResource,
    options?: DatasetCreateOrUpdateDatasetOptionalParams
  ): Promise<DatasetCreateOrUpdateDatasetResponse> {
    const poller = await this.beginCreateOrUpdateDataset(
      datasetName,
      dataset,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a dataset.
   * @param datasetName The dataset name.
   * @param options The options parameters.
   */
  async getDataset(
    datasetName: string,
    options?: DatasetGetDatasetOptionalParams
  ): Promise<DatasetGetDatasetResponse> {
    const { span } = createSpan("ArtifactsClient-getDataset", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { datasetName, options },
        getDatasetOperationSpec
      );
      return result as DatasetGetDatasetResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Deletes a dataset.
   * @param datasetName The dataset name.
   * @param options The options parameters.
   */
  async beginDeleteDataset(
    datasetName: string,
    options?: DatasetDeleteDatasetOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginDeleteDataset",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error: any) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { datasetName, options },
      deleteDatasetOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a dataset.
   * @param datasetName The dataset name.
   * @param options The options parameters.
   */
  async beginDeleteDatasetAndWait(
    datasetName: string,
    options?: DatasetDeleteDatasetOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteDataset(datasetName, options);
    return poller.pollUntilDone();
  }

  /**
   * Renames a dataset.
   * @param datasetName The dataset name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  async beginRenameDataset(
    datasetName: string,
    request: ArtifactRenameRequest,
    options?: DatasetRenameDatasetOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginRenameDataset",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error: any) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { datasetName, request, options },
      renameDatasetOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Renames a dataset.
   * @param datasetName The dataset name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  async beginRenameDatasetAndWait(
    datasetName: string,
    request: ArtifactRenameRequest,
    options?: DatasetRenameDatasetOptionalParams
  ): Promise<void> {
    const poller = await this.beginRenameDataset(datasetName, request, options);
    return poller.pollUntilDone();
  }

  /**
   * GetDatasetsByWorkspaceNext
   * @param nextLink The nextLink from the previous successful call to the GetDatasetsByWorkspace method.
   * @param options The options parameters.
   */
  private async _getDatasetsByWorkspaceNext(
    nextLink: string,
    options?: DatasetGetDatasetsByWorkspaceNextOptionalParams
  ): Promise<DatasetGetDatasetsByWorkspaceNextResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getDatasetsByWorkspaceNext",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { nextLink, options },
        getDatasetsByWorkspaceNextOperationSpec
      );
      return result as DatasetGetDatasetsByWorkspaceNextResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getDatasetsByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/datasets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatasetListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateDatasetOperationSpec: coreClient.OperationSpec = {
  path: "/datasets/{datasetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DatasetResource
    },
    201: {
      bodyMapper: Mappers.DatasetResource
    },
    202: {
      bodyMapper: Mappers.DatasetResource
    },
    204: {
      bodyMapper: Mappers.DatasetResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.dataset,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.datasetName],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const getDatasetOperationSpec: coreClient.OperationSpec = {
  path: "/datasets/{datasetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatasetResource
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.datasetName],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deleteDatasetOperationSpec: coreClient.OperationSpec = {
  path: "/datasets/{datasetName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.datasetName],
  headerParameters: [Parameters.accept],
  serializer
};
const renameDatasetOperationSpec: coreClient.OperationSpec = {
  path: "/datasets/{datasetName}/rename",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.datasetName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDatasetsByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatasetListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
