## API Report File for "@azure/arm-webpubsub"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export type ACLAction = string;

// @public
export type CreatedByType = string;

// @public
export interface DiagnosticConfiguration {
    enableConnectivityLogs?: string;
    enableLiveTrace?: string;
    enableMessagingLogs?: string;
}

// @public
export interface Dimension {
    displayName?: string;
    internalName?: string;
    name?: string;
    toBeExportedForShoebox?: boolean;
}

// @public
export interface ErrorAdditionalInfo {
    readonly info?: Record<string, unknown>;
    readonly type?: string;
}

// @public
export interface ErrorDetail {
    readonly additionalInfo?: ErrorAdditionalInfo[];
    readonly code?: string;
    readonly details?: ErrorDetail[];
    readonly message?: string;
    readonly target?: string;
}

// @public
export interface ErrorResponse {
    error?: ErrorDetail;
}

// @public
export interface EventHandlerSettings {
    items?: {
        [propertyName: string]: EventHandlerTemplate[];
    };
}

// @public
export interface EventHandlerTemplate {
    auth?: UpstreamAuthSettings;
    systemEventPattern?: string;
    urlTemplate: string;
    userEventPattern?: string;
}

// @public
type KeyType_2 = string;
export { KeyType_2 as KeyType }

// @public
export enum KnownACLAction {
    // (undocumented)
    Allow = "Allow",
    // (undocumented)
    Deny = "Deny"
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
export enum KnownKeyType {
    // (undocumented)
    Primary = "Primary",
    // (undocumented)
    Secondary = "Secondary"
}

// @public
export enum KnownManagedIdentityType {
    // (undocumented)
    None = "None",
    // (undocumented)
    SystemAssigned = "SystemAssigned",
    // (undocumented)
    UserAssigned = "UserAssigned"
}

// @public
export enum KnownPrivateLinkServiceConnectionStatus {
    // (undocumented)
    Approved = "Approved",
    // (undocumented)
    Disconnected = "Disconnected",
    // (undocumented)
    Pending = "Pending",
    // (undocumented)
    Rejected = "Rejected"
}

// @public
export enum KnownProvisioningState {
    // (undocumented)
    Canceled = "Canceled",
    // (undocumented)
    Creating = "Creating",
    // (undocumented)
    Deleting = "Deleting",
    // (undocumented)
    Failed = "Failed",
    // (undocumented)
    Moving = "Moving",
    // (undocumented)
    Running = "Running",
    // (undocumented)
    Succeeded = "Succeeded",
    // (undocumented)
    Unknown = "Unknown",
    // (undocumented)
    Updating = "Updating"
}

// @public
export enum KnownSharedPrivateLinkResourceStatus {
    // (undocumented)
    Approved = "Approved",
    // (undocumented)
    Disconnected = "Disconnected",
    // (undocumented)
    Pending = "Pending",
    // (undocumented)
    Rejected = "Rejected",
    // (undocumented)
    Timeout = "Timeout"
}

// @public
export enum KnownUpstreamAuthType {
    // (undocumented)
    ManagedIdentity = "ManagedIdentity",
    // (undocumented)
    None = "None"
}

// @public
export enum KnownWebPubSubRequestType {
    // (undocumented)
    ClientConnection = "ClientConnection",
    // (undocumented)
    Restapi = "RESTAPI",
    // (undocumented)
    ServerConnection = "ServerConnection",
    // (undocumented)
    Trace = "Trace"
}

// @public
export enum KnownWebPubSubSkuTier {
    // (undocumented)
    Basic = "Basic",
    // (undocumented)
    Free = "Free",
    // (undocumented)
    Premium = "Premium",
    // (undocumented)
    Standard = "Standard"
}

// @public
export interface LogSpecification {
    displayName?: string;
    name?: string;
}

// @public
export interface ManagedIdentity {
    readonly principalId?: string;
    readonly tenantId?: string;
    type?: ManagedIdentityType;
    userAssignedIdentities?: {
        [propertyName: string]: UserAssignedIdentityProperty;
    };
}

// @public
export interface ManagedIdentitySettings {
    resource?: string;
}

// @public
export type ManagedIdentityType = string;

// @public
export interface MetricSpecification {
    aggregationType?: string;
    category?: string;
    dimensions?: Dimension[];
    displayDescription?: string;
    displayName?: string;
    fillGapWithZero?: string;
    name?: string;
    unit?: string;
}

// @public
export interface NameAvailability {
    message?: string;
    nameAvailable?: boolean;
    reason?: string;
}

// @public
export interface NameAvailabilityParameters {
    name: string;
    type: string;
}

// @public
export interface NetworkACL {
    allow?: WebPubSubRequestType[];
    deny?: WebPubSubRequestType[];
}

// @public
export interface Operation {
    display?: OperationDisplay;
    isDataAction?: boolean;
    name?: string;
    origin?: string;
    properties?: OperationProperties;
}

// @public
export interface OperationDisplay {
    description?: string;
    operation?: string;
    provider?: string;
    resource?: string;
}

// @public
export interface OperationList {
    nextLink?: string;
    value?: Operation[];
}

// @public
export interface OperationProperties {
    serviceSpecification?: ServiceSpecification;
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationList;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationList;

// @public
export interface PrivateEndpoint {
    id?: string;
}

// @public
export type PrivateEndpointACL = NetworkACL & {
    name: string;
};

// @public
export type PrivateEndpointConnection = ProxyResource & {
    readonly systemData?: SystemData;
    readonly provisioningState?: ProvisioningState;
    privateEndpoint?: PrivateEndpoint;
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
};

// @public
export interface PrivateEndpointConnectionList {
    nextLink?: string;
    value?: PrivateEndpointConnection[];
}

// @public
export type PrivateLinkResource = ProxyResource & {
    groupId?: string;
    requiredMembers?: string[];
    requiredZoneNames?: string[];
    shareablePrivateLinkResourceTypes?: ShareablePrivateLinkResourceType[];
};

// @public
export interface PrivateLinkResourceList {
    nextLink?: string;
    value?: PrivateLinkResource[];
}

// @public
export interface PrivateLinkServiceConnectionState {
    actionsRequired?: string;
    description?: string;
    status?: PrivateLinkServiceConnectionStatus;
}

// @public
export type PrivateLinkServiceConnectionStatus = string;

// @public
export type ProvisioningState = string;

// @public
export type ProxyResource = Resource & {};

// @public
export interface RegenerateKeyParameters {
    keyType?: KeyType_2;
}

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export interface ResourceSku {
    capacity?: number;
    readonly family?: string;
    name: string;
    readonly size?: string;
    tier?: WebPubSubSkuTier;
}

// @public
export interface ServiceSpecification {
    logSpecifications?: LogSpecification[];
    metricSpecifications?: MetricSpecification[];
}

// @public
export interface ShareablePrivateLinkResourceProperties {
    description?: string;
    groupId?: string;
    type?: string;
}

// @public
export interface ShareablePrivateLinkResourceType {
    name?: string;
    properties?: ShareablePrivateLinkResourceProperties;
}

// @public
export type SharedPrivateLinkResource = ProxyResource & {
    readonly systemData?: SystemData;
    groupId?: string;
    privateLinkResourceId?: string;
    readonly provisioningState?: ProvisioningState;
    requestMessage?: string;
    readonly status?: SharedPrivateLinkResourceStatus;
};

// @public
export interface SharedPrivateLinkResourceList {
    nextLink?: string;
    value?: SharedPrivateLinkResource[];
}

// @public
export type SharedPrivateLinkResourceStatus = string;

// @public
export interface SignalRServiceUsage {
    currentValue?: number;
    id?: string;
    limit?: number;
    name?: SignalRServiceUsageName;
    unit?: string;
}

// @public
export interface SignalRServiceUsageList {
    nextLink?: string;
    value?: SignalRServiceUsage[];
}

// @public
export interface SignalRServiceUsageName {
    localizedValue?: string;
    value?: string;
}

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
export type TrackedResource = Resource & {
    location?: string;
    tags?: {
        [propertyName: string]: string;
    };
};

// @public
export interface UpstreamAuthSettings {
    managedIdentity?: ManagedIdentitySettings;
    type?: UpstreamAuthType;
}

// @public
export type UpstreamAuthType = string;

// @public
export interface Usages {
    list(location: string, options?: UsagesListOptionalParams): PagedAsyncIterableIterator<SignalRServiceUsage>;
}

// @public
export interface UsagesListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type UsagesListNextResponse = SignalRServiceUsageList;

// @public
export interface UsagesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type UsagesListResponse = SignalRServiceUsageList;

// @public
export interface UserAssignedIdentityProperty {
    readonly clientId?: string;
    readonly principalId?: string;
}

// @public
export interface WebPubSub {
    beginCreateOrUpdate(resourceGroupName: string, resourceName: string, parameters: WebPubSubResource, options?: WebPubSubCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<WebPubSubCreateOrUpdateResponse>, WebPubSubCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, resourceName: string, parameters: WebPubSubResource, options?: WebPubSubCreateOrUpdateOptionalParams): Promise<WebPubSubCreateOrUpdateResponse>;
    beginDelete(resourceGroupName: string, resourceName: string, options?: WebPubSubDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, resourceName: string, options?: WebPubSubDeleteOptionalParams): Promise<void>;
    beginRegenerateKey(resourceGroupName: string, resourceName: string, parameters: RegenerateKeyParameters, options?: WebPubSubRegenerateKeyOptionalParams): Promise<PollerLike<PollOperationState<WebPubSubRegenerateKeyResponse>, WebPubSubRegenerateKeyResponse>>;
    beginRegenerateKeyAndWait(resourceGroupName: string, resourceName: string, parameters: RegenerateKeyParameters, options?: WebPubSubRegenerateKeyOptionalParams): Promise<WebPubSubRegenerateKeyResponse>;
    beginRestart(resourceGroupName: string, resourceName: string, options?: WebPubSubRestartOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginRestartAndWait(resourceGroupName: string, resourceName: string, options?: WebPubSubRestartOptionalParams): Promise<void>;
    beginUpdate(resourceGroupName: string, resourceName: string, parameters: WebPubSubResource, options?: WebPubSubUpdateOptionalParams): Promise<PollerLike<PollOperationState<WebPubSubUpdateResponse>, WebPubSubUpdateResponse>>;
    beginUpdateAndWait(resourceGroupName: string, resourceName: string, parameters: WebPubSubResource, options?: WebPubSubUpdateOptionalParams): Promise<WebPubSubUpdateResponse>;
    checkNameAvailability(location: string, parameters: NameAvailabilityParameters, options?: WebPubSubCheckNameAvailabilityOptionalParams): Promise<WebPubSubCheckNameAvailabilityResponse>;
    get(resourceGroupName: string, resourceName: string, options?: WebPubSubGetOptionalParams): Promise<WebPubSubGetResponse>;
    listByResourceGroup(resourceGroupName: string, options?: WebPubSubListByResourceGroupOptionalParams): PagedAsyncIterableIterator<WebPubSubResource>;
    listBySubscription(options?: WebPubSubListBySubscriptionOptionalParams): PagedAsyncIterableIterator<WebPubSubResource>;
    listKeys(resourceGroupName: string, resourceName: string, options?: WebPubSubListKeysOptionalParams): Promise<WebPubSubListKeysResponse>;
}

// @public
export interface WebPubSubCheckNameAvailabilityOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubCheckNameAvailabilityResponse = NameAvailability;

// @public
export interface WebPubSubCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type WebPubSubCreateOrUpdateResponse = WebPubSubResource;

// @public
export interface WebPubSubDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface WebPubSubGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubGetResponse = WebPubSubResource;

// @public
export interface WebPubSubKeys {
    primaryConnectionString?: string;
    primaryKey?: string;
    secondaryConnectionString?: string;
    secondaryKey?: string;
}

// @public
export interface WebPubSubListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubListByResourceGroupNextResponse = WebPubSubResourceList;

// @public
export interface WebPubSubListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubListByResourceGroupResponse = WebPubSubResourceList;

// @public
export interface WebPubSubListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubListBySubscriptionNextResponse = WebPubSubResourceList;

// @public
export interface WebPubSubListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubListBySubscriptionResponse = WebPubSubResourceList;

// @public
export interface WebPubSubListKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubListKeysResponse = WebPubSubKeys;

// @public (undocumented)
export class WebPubSubManagementClient extends WebPubSubManagementClientContext {
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: WebPubSubManagementClientOptionalParams);
    // (undocumented)
    operations: Operations;
    // (undocumented)
    usages: Usages;
    // (undocumented)
    webPubSub: WebPubSub;
    // (undocumented)
    webPubSubPrivateEndpointConnections: WebPubSubPrivateEndpointConnections;
    // (undocumented)
    webPubSubPrivateLinkResources: WebPubSubPrivateLinkResources;
    // (undocumented)
    webPubSubSharedPrivateLinkResources: WebPubSubSharedPrivateLinkResources;
}

// @public (undocumented)
export class WebPubSubManagementClientContext extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: WebPubSubManagementClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface WebPubSubManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface WebPubSubNetworkACLs {
    defaultAction?: ACLAction;
    privateEndpoints?: PrivateEndpointACL[];
    publicNetwork?: NetworkACL;
}

// @public
export interface WebPubSubPrivateEndpointConnections {
    beginDelete(privateEndpointConnectionName: string, resourceGroupName: string, resourceName: string, options?: WebPubSubPrivateEndpointConnectionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(privateEndpointConnectionName: string, resourceGroupName: string, resourceName: string, options?: WebPubSubPrivateEndpointConnectionsDeleteOptionalParams): Promise<void>;
    get(privateEndpointConnectionName: string, resourceGroupName: string, resourceName: string, options?: WebPubSubPrivateEndpointConnectionsGetOptionalParams): Promise<WebPubSubPrivateEndpointConnectionsGetResponse>;
    list(resourceGroupName: string, resourceName: string, options?: WebPubSubPrivateEndpointConnectionsListOptionalParams): PagedAsyncIterableIterator<PrivateEndpointConnection>;
    update(privateEndpointConnectionName: string, resourceGroupName: string, resourceName: string, parameters: PrivateEndpointConnection, options?: WebPubSubPrivateEndpointConnectionsUpdateOptionalParams): Promise<WebPubSubPrivateEndpointConnectionsUpdateResponse>;
}

// @public
export interface WebPubSubPrivateEndpointConnectionsDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface WebPubSubPrivateEndpointConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubPrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

// @public
export interface WebPubSubPrivateEndpointConnectionsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubPrivateEndpointConnectionsListNextResponse = PrivateEndpointConnectionList;

// @public
export interface WebPubSubPrivateEndpointConnectionsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubPrivateEndpointConnectionsListResponse = PrivateEndpointConnectionList;

// @public
export interface WebPubSubPrivateEndpointConnectionsUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubPrivateEndpointConnectionsUpdateResponse = PrivateEndpointConnection;

// @public
export interface WebPubSubPrivateLinkResources {
    list(resourceGroupName: string, resourceName: string, options?: WebPubSubPrivateLinkResourcesListOptionalParams): PagedAsyncIterableIterator<PrivateLinkResource>;
}

// @public
export interface WebPubSubPrivateLinkResourcesListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubPrivateLinkResourcesListNextResponse = PrivateLinkResourceList;

// @public
export interface WebPubSubPrivateLinkResourcesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubPrivateLinkResourcesListResponse = PrivateLinkResourceList;

// @public
export interface WebPubSubRegenerateKeyOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type WebPubSubRegenerateKeyResponse = WebPubSubKeys;

// @public
export type WebPubSubRequestType = string;

// @public
export type WebPubSubResource = TrackedResource & {
    sku?: ResourceSku;
    identity?: ManagedIdentity;
    readonly systemData?: SystemData;
    readonly provisioningState?: ProvisioningState;
    readonly externalIP?: string;
    readonly hostName?: string;
    readonly publicPort?: number;
    readonly serverPort?: number;
    readonly version?: string;
    readonly privateEndpointConnections?: PrivateEndpointConnection[];
    readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[];
    tls?: WebPubSubTlsSettings;
    diagnosticConfiguration?: DiagnosticConfiguration;
    eventHandler?: EventHandlerSettings;
    networkACLs?: WebPubSubNetworkACLs;
    publicNetworkAccess?: string;
    disableLocalAuth?: boolean;
    disableAadAuth?: boolean;
};

// @public
export interface WebPubSubResourceList {
    nextLink?: string;
    value?: WebPubSubResource[];
}

// @public
export interface WebPubSubRestartOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface WebPubSubSharedPrivateLinkResources {
    beginCreateOrUpdate(sharedPrivateLinkResourceName: string, resourceGroupName: string, resourceName: string, parameters: SharedPrivateLinkResource, options?: WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse>, WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(sharedPrivateLinkResourceName: string, resourceGroupName: string, resourceName: string, parameters: SharedPrivateLinkResource, options?: WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOptionalParams): Promise<WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse>;
    beginDelete(sharedPrivateLinkResourceName: string, resourceGroupName: string, resourceName: string, options?: WebPubSubSharedPrivateLinkResourcesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(sharedPrivateLinkResourceName: string, resourceGroupName: string, resourceName: string, options?: WebPubSubSharedPrivateLinkResourcesDeleteOptionalParams): Promise<void>;
    get(sharedPrivateLinkResourceName: string, resourceGroupName: string, resourceName: string, options?: WebPubSubSharedPrivateLinkResourcesGetOptionalParams): Promise<WebPubSubSharedPrivateLinkResourcesGetResponse>;
    list(resourceGroupName: string, resourceName: string, options?: WebPubSubSharedPrivateLinkResourcesListOptionalParams): PagedAsyncIterableIterator<SharedPrivateLinkResource>;
}

// @public
export interface WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse = SharedPrivateLinkResource;

// @public
export interface WebPubSubSharedPrivateLinkResourcesDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface WebPubSubSharedPrivateLinkResourcesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubSharedPrivateLinkResourcesGetResponse = SharedPrivateLinkResource;

// @public
export interface WebPubSubSharedPrivateLinkResourcesListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubSharedPrivateLinkResourcesListNextResponse = SharedPrivateLinkResourceList;

// @public
export interface WebPubSubSharedPrivateLinkResourcesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type WebPubSubSharedPrivateLinkResourcesListResponse = SharedPrivateLinkResourceList;

// @public
export type WebPubSubSkuTier = string;

// @public
export interface WebPubSubTlsSettings {
    clientCertEnabled?: boolean;
}

// @public
export interface WebPubSubUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type WebPubSubUpdateResponse = WebPubSubResource;

// (No @packageDocumentation comment for this package)

```