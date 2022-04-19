// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StorageClientContext } from "./generated/src/storageClientContext";
import { Pipeline } from "./Pipeline";
import { getAccountNameFromUrl, getStorageClientContext } from "./utils/utils.common";
import { OperationTracingOptions } from "@azure/core-tracing";
import { Credential } from "./credentials/Credential";
import { AnonymousCredential } from "./credentials/AnonymousCredential";
import { isNode } from "@azure/core-http";
import { StorageSharedKeyCredential } from "./credentials/StorageSharedKeyCredential";

/**
 * An interface for options common to every remote operation.
 */
export interface CommonOptions {
  /**
   * Options to configure spans created when tracing is enabled.
   */
  tracingOptions?: OperationTracingOptions;
}

/**
 * A StorageClient represents a based client class for {@link QueueServiceClient}, {@link QueueClient} and etc.
 */
export abstract class StorageClient {
  /**
   * URL string value.
   */
  public readonly url: string;
  public readonly accountName: string;

  /**
   * Request policy pipeline.
   *
   * @internal
   */
  protected readonly pipeline: Pipeline;

  /**
   * Credential factory in the pipleline to authenticate requests to the service, such as AnonymousCredential, StorageSharedKeyCredential.
   * Initialized to an AnonymousCredential if not able to retrieve it from the pipeline.
   *
   * @internal
   */
  protected readonly credential: Credential;

  /**
   * StorageClientContext is a reference to protocol layer operations entry, which is
   * generated by AutoRest generator.
   */
  protected readonly storageClientContext: StorageClientContext;

  /**
   * Creates an instance of StorageClient.
   * @param url -
   * @param pipeline -
   */
  protected constructor(url: string, pipeline: Pipeline) {
    this.url = url;
    this.accountName = getAccountNameFromUrl(url);
    this.pipeline = pipeline;
    this.storageClientContext = getStorageClientContext(url, pipeline);

    // Retrieve credential from the pipeline.
    this.credential = new AnonymousCredential();
    for (const factory of this.pipeline.factories) {
      if (
        (isNode && factory instanceof StorageSharedKeyCredential) ||
        factory instanceof AnonymousCredential
      ) {
        this.credential = factory;
        break;
      } else {
        try {
          const authPolicy = (factory as any).create();
          if (authPolicy.constructor.name === "BearerTokenAuthenticationPolicy") {
            this.credential = factory;
            break;
          }
        } catch (err: any) {
          // ignore errors in creating policy, the client instance may still work without the policy.
        }
      }
    }
  }
}

// The following type is introduced to avoid a breaking change during the
// migration of V6 SDK generator. Can be removed later when a really
// breaking change is released.

/**
 * Defines values for ListQueuesIncludeType.
 * Possible values include: 'metadata'
 * @readonly
 */
export type ListQueuesIncludeType = "metadata";
