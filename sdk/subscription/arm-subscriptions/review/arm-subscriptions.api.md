## API Report File for "@azure/arm-subscriptions"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export type AcceptOwnership = string;

// @public
export interface AcceptOwnershipRequest {
    properties?: AcceptOwnershipRequestProperties;
}

// @public
export interface AcceptOwnershipRequestProperties {
    displayName: string;
    managementGroupId?: string;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface AcceptOwnershipStatusResponse {
    readonly acceptOwnershipState?: AcceptOwnership;
    readonly billingOwner?: string;
    displayName?: string;
    readonly subscriptionId?: string;
    subscriptionTenantId?: string;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface Alias {
    beginCreate(aliasName: string, body: PutAliasRequest, options?: AliasCreateOptionalParams): Promise<PollerLike<PollOperationState<AliasCreateResponse>, AliasCreateResponse>>;
    beginCreateAndWait(aliasName: string, body: PutAliasRequest, options?: AliasCreateOptionalParams): Promise<AliasCreateResponse>;
    delete(aliasName: string, options?: AliasDeleteOptionalParams): Promise<void>;
    get(aliasName: string, options?: AliasGetOptionalParams): Promise<AliasGetResponse>;
    list(options?: AliasListOptionalParams): Promise<AliasListResponse>;
}

// @public
export interface AliasCreateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type AliasCreateResponse = SubscriptionAliasResponse;

// @public
export interface AliasDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface AliasGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AliasGetResponse = SubscriptionAliasResponse;

// @public
export interface AliasListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AliasListResponse = SubscriptionAliasListResult;

// @public
export interface BillingAccount {
    getPolicy(billingAccountId: string, options?: BillingAccountGetPolicyOptionalParams): Promise<BillingAccountGetPolicyResponse>;
}

// @public
export interface BillingAccountGetPolicyOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BillingAccountGetPolicyResponse = BillingAccountPoliciesResponse;

// @public
export interface BillingAccountPoliciesResponse {
    readonly id?: string;
    readonly name?: string;
    properties?: BillingAccountPoliciesResponseProperties;
    readonly systemData?: SystemData;
    readonly type?: string;
}

// @public
export interface BillingAccountPoliciesResponseProperties {
    allowTransfers?: boolean;
    serviceTenants?: ServiceTenantResponse[];
}

// @public
export interface CanceledSubscriptionId {
    readonly subscriptionId?: string;
}

// @public
export type CreatedByType = string;

// @public
export interface EnabledSubscriptionId {
    readonly subscriptionId?: string;
}

// @public
export interface ErrorResponse {
    code?: string;
    message?: string;
}

// @public
export interface ErrorResponseBody {
    code?: string;
    error?: ErrorResponse;
    message?: string;
}

// @public
export interface GetTenantPolicyListResponse {
    readonly nextLink?: string;
    readonly value?: GetTenantPolicyResponse[];
}

// @public
export interface GetTenantPolicyResponse {
    readonly id?: string;
    readonly name?: string;
    properties?: TenantPolicy;
    readonly systemData?: SystemData;
    readonly type?: string;
}

// @public
export enum KnownAcceptOwnership {
    // (undocumented)
    Completed = "Completed",
    // (undocumented)
    Expired = "Expired",
    // (undocumented)
    Pending = "Pending"
}

// @public
export enum KnownCreatedByType {
    // (undocumented)
    Application = "Application",
    // (undocumented)
    Key = "Key",
    // (undocumented)
    ManagedIdentity = "ManagedIdentity",
    // (undocumented)
    User = "User"
}

// @public
export enum KnownProvisioningState {
    // (undocumented)
    Accepted = "Accepted",
    // (undocumented)
    Failed = "Failed",
    // (undocumented)
    Succeeded = "Succeeded"
}

// @public
export enum KnownWorkload {
    // (undocumented)
    DevTest = "DevTest",
    // (undocumented)
    Production = "Production"
}

// @public
interface Location_2 {
    readonly displayName?: string;
    readonly id?: string;
    readonly latitude?: string;
    readonly longitude?: string;
    readonly name?: string;
    readonly subscriptionId?: string;
}
export { Location_2 as Location }

// @public
export interface LocationListResult {
    value?: Location_2[];
}

// @public
export interface Operation {
    display?: OperationDisplay;
    isDataAction?: boolean;
    name?: string;
}

// @public
export interface OperationDisplay {
    description?: string;
    operation?: string;
    provider?: string;
    resource?: string;
}

// @public
export interface OperationListResult {
    nextLink?: string;
    value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationListResult;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export type ProvisioningState = string;

// @public
export interface PutAliasRequest {
    properties?: PutAliasRequestProperties;
}

// @public
export interface PutAliasRequestAdditionalProperties {
    managementGroupId?: string;
    subscriptionOwnerId?: string;
    subscriptionTenantId?: string;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface PutAliasRequestProperties {
    additionalProperties?: PutAliasRequestAdditionalProperties;
    billingScope?: string;
    displayName?: string;
    resellerId?: string;
    subscriptionId?: string;
    workload?: Workload;
}

// @public
export interface PutTenantPolicyRequestProperties {
    blockSubscriptionsIntoTenant?: boolean;
    blockSubscriptionsLeavingTenant?: boolean;
    exemptedPrincipals?: string[];
}

// @public
export interface RenamedSubscriptionId {
    readonly subscriptionId?: string;
}

// @public
export interface ServiceTenantResponse {
    tenantId?: string;
    tenantName?: string;
}

// @public
export type SpendingLimit = "On" | "Off" | "CurrentPeriodOff";

// @public
export interface Subscription {
    authorizationSource?: string;
    readonly displayName?: string;
    readonly id?: string;
    readonly state?: SubscriptionState;
    readonly subscriptionId?: string;
    subscriptionPolicies?: SubscriptionPolicies;
}

// @public
export interface SubscriptionAcceptOwnershipHeaders {
    location?: string;
    retryAfter?: number;
}

// @public
export interface SubscriptionAcceptOwnershipOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type SubscriptionAcceptOwnershipResponse = SubscriptionAcceptOwnershipHeaders;

// @public
export interface SubscriptionAcceptOwnershipStatusOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SubscriptionAcceptOwnershipStatusResponse = AcceptOwnershipStatusResponse;

// @public
export interface SubscriptionAliasListResult {
    readonly nextLink?: string;
    readonly value?: SubscriptionAliasResponse[];
}

// @public
export interface SubscriptionAliasResponse {
    readonly id?: string;
    readonly name?: string;
    properties?: SubscriptionAliasResponseProperties;
    readonly systemData?: SystemData;
    readonly type?: string;
}

// @public
export interface SubscriptionAliasResponseProperties {
    readonly acceptOwnershipState?: AcceptOwnership;
    readonly acceptOwnershipUrl?: string;
    billingScope?: string;
    createdTime?: string;
    displayName?: string;
    managementGroupId?: string;
    provisioningState?: ProvisioningState;
    resellerId?: string;
    readonly subscriptionId?: string;
    subscriptionOwnerId?: string;
    tags?: {
        [propertyName: string]: string;
    };
    workload?: Workload;
}

// @public
export interface SubscriptionCancelOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SubscriptionCancelResponse = CanceledSubscriptionId;

// @public (undocumented)
export class SubscriptionClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, options?: SubscriptionClientOptionalParams);
    // (undocumented)
    alias: Alias;
    // (undocumented)
    billingAccount: BillingAccount;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    subscriptionOperations: SubscriptionOperations;
    // (undocumented)
    subscriptionPolicy: SubscriptionPolicy;
    // (undocumented)
    subscriptions: Subscriptions;
    // (undocumented)
    tenants: Tenants;
}

// @public
export interface SubscriptionClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    endpoint?: string;
}

// @public
export interface SubscriptionEnableOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SubscriptionEnableResponse = EnabledSubscriptionId;

// @public
export interface SubscriptionListResult {
    nextLink: string;
    value?: Subscription[];
}

// @public
export interface SubscriptionName {
    subscriptionName?: string;
}

// @public
export interface SubscriptionOperations {
    acceptOwnershipStatus(subscriptionId: string, options?: SubscriptionAcceptOwnershipStatusOptionalParams): Promise<SubscriptionAcceptOwnershipStatusResponse>;
    beginAcceptOwnership(subscriptionId: string, body: AcceptOwnershipRequest, options?: SubscriptionAcceptOwnershipOptionalParams): Promise<PollerLike<PollOperationState<SubscriptionAcceptOwnershipResponse>, SubscriptionAcceptOwnershipResponse>>;
    beginAcceptOwnershipAndWait(subscriptionId: string, body: AcceptOwnershipRequest, options?: SubscriptionAcceptOwnershipOptionalParams): Promise<SubscriptionAcceptOwnershipResponse>;
    cancel(subscriptionId: string, options?: SubscriptionCancelOptionalParams): Promise<SubscriptionCancelResponse>;
    enable(subscriptionId: string, options?: SubscriptionEnableOptionalParams): Promise<SubscriptionEnableResponse>;
    rename(subscriptionId: string, body: SubscriptionName, options?: SubscriptionRenameOptionalParams): Promise<SubscriptionRenameResponse>;
}

// @public
export interface SubscriptionPolicies {
    readonly locationPlacementId?: string;
    readonly quotaId?: string;
    readonly spendingLimit?: SpendingLimit;
}

// @public
export interface SubscriptionPolicy {
    addUpdatePolicyForTenant(body: PutTenantPolicyRequestProperties, options?: SubscriptionPolicyAddUpdatePolicyForTenantOptionalParams): Promise<SubscriptionPolicyAddUpdatePolicyForTenantResponse>;
    getPolicyForTenant(options?: SubscriptionPolicyGetPolicyForTenantOptionalParams): Promise<SubscriptionPolicyGetPolicyForTenantResponse>;
    listPolicyForTenant(options?: SubscriptionPolicyListPolicyForTenantOptionalParams): PagedAsyncIterableIterator<GetTenantPolicyResponse>;
}

// @public
export interface SubscriptionPolicyAddUpdatePolicyForTenantOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SubscriptionPolicyAddUpdatePolicyForTenantResponse = GetTenantPolicyResponse;

// @public
export interface SubscriptionPolicyGetPolicyForTenantOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SubscriptionPolicyGetPolicyForTenantResponse = GetTenantPolicyResponse;

// @public
export interface SubscriptionPolicyListPolicyForTenantNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SubscriptionPolicyListPolicyForTenantNextResponse = GetTenantPolicyListResponse;

// @public
export interface SubscriptionPolicyListPolicyForTenantOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SubscriptionPolicyListPolicyForTenantResponse = GetTenantPolicyListResponse;

// @public
export interface SubscriptionRenameOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SubscriptionRenameResponse = RenamedSubscriptionId;

// @public
export interface Subscriptions {
    get(subscriptionId: string, options?: SubscriptionsGetOptionalParams): Promise<SubscriptionsGetResponse>;
    list(options?: SubscriptionsListOptionalParams): PagedAsyncIterableIterator<Subscription>;
    listLocations(subscriptionId: string, options?: SubscriptionsListLocationsOptionalParams): PagedAsyncIterableIterator<Location_2>;
}

// @public
export interface SubscriptionsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SubscriptionsGetResponse = Subscription;

// @public
export interface SubscriptionsListLocationsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SubscriptionsListLocationsResponse = LocationListResult;

// @public
export interface SubscriptionsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SubscriptionsListNextResponse = SubscriptionListResult;

// @public
export interface SubscriptionsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SubscriptionsListResponse = SubscriptionListResult;

// @public
export type SubscriptionState = "Enabled" | "Warned" | "PastDue" | "Disabled" | "Deleted";

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// @public
export interface TenantIdDescription {
    readonly id?: string;
    readonly tenantId?: string;
}

// @public
export interface TenantListResult {
    nextLink: string;
    value?: TenantIdDescription[];
}

// @public
export interface TenantPolicy {
    blockSubscriptionsIntoTenant?: boolean;
    blockSubscriptionsLeavingTenant?: boolean;
    exemptedPrincipals?: string[];
    readonly policyId?: string;
}

// @public
export interface Tenants {
    list(options?: TenantsListOptionalParams): PagedAsyncIterableIterator<TenantIdDescription>;
}

// @public
export interface TenantsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type TenantsListNextResponse = TenantListResult;

// @public
export interface TenantsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type TenantsListResponse = TenantListResult;

// @public
export type Workload = string;

// (No @packageDocumentation comment for this package)

```