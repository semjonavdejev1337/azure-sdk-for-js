/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Mappers from "../models/storageTargetOperationsMappers";
import * as Parameters from "../models/parameters";
import { StorageCacheManagementClientContext } from "../storageCacheManagementClientContext";

/** Class representing a StorageTargetOperations. */
export class StorageTargetOperations {
  private readonly client: StorageCacheManagementClientContext;

  /**
   * Create a StorageTargetOperations.
   * @param {StorageCacheManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageCacheManagementClientContext) {
    this.client = client;
  }

  /**
   * Tells the cache to write all dirty data to the Storage Target's backend storage. Client requests
   * to this storage target's namespace will return errors until the flush operation completes.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be
   * from the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  flush(resourceGroupName: string, cacheName: string, storageTargetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginFlush(resourceGroupName,cacheName,storageTargetName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Suspends client access to a storage target.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be
   * from the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  suspend(resourceGroupName: string, cacheName: string, storageTargetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginSuspend(resourceGroupName,cacheName,storageTargetName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Resumes client access to a previously suspended storage target.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be
   * from the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  resume(resourceGroupName: string, cacheName: string, storageTargetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginResume(resourceGroupName,cacheName,storageTargetName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Tells the cache to write all dirty data to the Storage Target's backend storage. Client requests
   * to this storage target's namespace will return errors until the flush operation completes.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be
   * from the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginFlush(resourceGroupName: string, cacheName: string, storageTargetName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cacheName,
        storageTargetName,
        options
      },
      beginFlushOperationSpec,
      options);
  }

  /**
   * Suspends client access to a storage target.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be
   * from the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginSuspend(resourceGroupName: string, cacheName: string, storageTargetName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cacheName,
        storageTargetName,
        options
      },
      beginSuspendOperationSpec,
      options);
  }

  /**
   * Resumes client access to a previously suspended storage target.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be
   * from the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginResume(resourceGroupName: string, cacheName: string, storageTargetName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cacheName,
        storageTargetName,
        options
      },
      beginResumeOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginFlushOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}/flush",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cacheName,
    Parameters.storageTargetName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginSuspendOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}/suspend",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cacheName,
    Parameters.storageTargetName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginResumeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}/resume",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cacheName,
    Parameters.storageTargetName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};