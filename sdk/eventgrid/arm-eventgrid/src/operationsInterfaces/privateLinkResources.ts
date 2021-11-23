/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PrivateLinkResource,
  PrivateLinkResourcesListByResourceOptionalParams,
  PrivateLinkResourcesGetOptionalParams,
  PrivateLinkResourcesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateLinkResources. */
export interface PrivateLinkResources {
  /**
   * List all the private link resources under a topic or domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param parentType The type of the parent resource. This can be either \'topics\' or \'domains\'.
   * @param parentName The name of the parent resource (namely, either, the topic name or domain name).
   * @param options The options parameters.
   */
  listByResource(
    resourceGroupName: string,
    parentType: string,
    parentName: string,
    options?: PrivateLinkResourcesListByResourceOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource>;
  /**
   * Get properties of a private link resource.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param parentType The type of the parent resource. This can be either \'topics\' or \'domains\'.
   * @param parentName The name of the parent resource (namely, either, the topic name or domain name).
   * @param privateLinkResourceName The name of private link resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    parentType: string,
    parentName: string,
    privateLinkResourceName: string,
    options?: PrivateLinkResourcesGetOptionalParams
  ): Promise<PrivateLinkResourcesGetResponse>;
}