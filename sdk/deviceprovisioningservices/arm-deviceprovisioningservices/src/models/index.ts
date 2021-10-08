/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * Error response containing message and code.
 */
export interface ErrorMesssage {
  /**
   * standard error code
   */
  code?: string;
  /**
   * standard error description
   */
  message?: string;
  /**
   * detailed summary of error
   */
  details?: string;
}

/**
 * Result of a long running operation.
 */
export interface AsyncOperationResult {
  /**
   * current status of a long running operation.
   */
  status?: string;
  /**
   * Error message containing code, description and details
   */
  error?: ErrorMesssage;
}

/**
 * The description of an X509 CA Certificate.
 */
export interface CertificateProperties {
  /**
   * The certificate's subject name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly subject?: string;
  /**
   * The certificate's expiration date and time.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly expiry?: Date;
  /**
   * The certificate's thumbprint.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly thumbprint?: string;
  /**
   * Determines whether certificate has been verified.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly isVerified?: boolean;
  /**
   * base-64 representation of X509 certificate .cer file or just .pem file content.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly certificate?: Uint8Array;
  /**
   * The certificate's creation date and time.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly created?: Date;
  /**
   * The certificate's last update date and time.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly updated?: Date;
}

/**
 * The X509 Certificate.
 */
export interface CertificateResponse extends BaseResource {
  /**
   * properties of a certificate
   */
  properties?: CertificateProperties;
  /**
   * The resource identifier.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the certificate.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The entity tag.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly etag?: string;
  /**
   * The resource type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The JSON-serialized array of Certificate objects.
 */
export interface CertificateListDescription {
  /**
   * The array of Certificate objects.
   */
  value?: CertificateResponse[];
}

/**
 * The JSON-serialized X509 Certificate.
 */
export interface CertificateBodyDescription {
  /**
   * Base-64 representation of the X509 leaf certificate .cer file or just .pem file content.
   */
  certificate?: string;
  /**
   * True indicates that the certificate will be created in verified state and proof of possession
   * will not be required.
   */
  isVerified?: boolean;
}

/**
 * List of possible provisioning service SKUs.
 */
export interface IotDpsSkuInfo {
  /**
   * Sku name. Possible values include: 'S1'
   */
  name?: IotDpsSku;
  /**
   * Pricing tier name of the provisioning service.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tier?: string;
  /**
   * The number of units to provision
   */
  capacity?: number;
}

/**
 * The IP filter rules for a provisioning Service.
 */
export interface IpFilterRule {
  /**
   * The name of the IP filter rule.
   */
  filterName: string;
  /**
   * The desired action for requests captured by this rule. Possible values include: 'Accept',
   * 'Reject'
   */
  action: IpFilterActionType;
  /**
   * A string that contains the IP address range in CIDR notation for the rule.
   */
  ipMask: string;
  /**
   * Target for requests captured by this rule. Possible values include: 'all', 'serviceApi',
   * 'deviceApi'
   */
  target?: IpFilterTargetType;
}

/**
 * The private endpoint property of a private endpoint connection
 */
export interface PrivateEndpoint {
  /**
   * The resource identifier.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
}

/**
 * The current state of a private endpoint connection
 */
export interface PrivateLinkServiceConnectionState {
  /**
   * The status of a private endpoint connection. Possible values include: 'Pending', 'Approved',
   * 'Rejected', 'Disconnected'
   */
  status: PrivateLinkServiceConnectionStatus;
  /**
   * The description for the current state of a private endpoint connection
   */
  description: string;
  /**
   * Actions required for a private endpoint connection
   */
  actionsRequired?: string;
}

/**
 * The properties of a private endpoint connection
 */
export interface PrivateEndpointConnectionProperties {
  /**
   * The private endpoint property of a private endpoint connection
   */
  privateEndpoint?: PrivateEndpoint;
  /**
   * The current state of a private endpoint connection
   */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}

/**
 * The private endpoint connection of a provisioning service
 */
export interface PrivateEndpointConnection extends BaseResource {
  /**
   * The resource identifier.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The resource name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The resource type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The properties of a private endpoint connection
   */
  properties: PrivateEndpointConnectionProperties;
}

/**
 * Description of the IoT hub.
 */
export interface IotHubDefinitionDescription {
  /**
   * flag for applying allocationPolicy or not for a given iot hub.
   */
  applyAllocationPolicy?: boolean;
  /**
   * weight to apply for a given iot h.
   */
  allocationWeight?: number;
  /**
   * Host name of the IoT hub.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Connection string of the IoT hub.
   */
  connectionString: string;
  /**
   * ARM region of the IoT hub.
   */
  location: string;
}

/**
 * Description of the shared access key.
 */
export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescription {
  /**
   * Name of the key.
   */
  keyName: string;
  /**
   * Primary SAS key value.
   */
  primaryKey?: string;
  /**
   * Secondary SAS key value.
   */
  secondaryKey?: string;
  /**
   * Rights that this key has. Possible values include: 'ServiceConfig', 'EnrollmentRead',
   * 'EnrollmentWrite', 'DeviceConnect', 'RegistrationStatusRead', 'RegistrationStatusWrite'
   */
  rights: AccessRightsDescription;
}

/**
 * the service specific properties of a provisioning service, including keys, linked iot hubs,
 * current state, and system generated properties such as hostname and idScope
 */
export interface IotDpsPropertiesDescription {
  /**
   * Current state of the provisioning service. Possible values include: 'Activating', 'Active',
   * 'Deleting', 'Deleted', 'ActivationFailed', 'DeletionFailed', 'Transitioning', 'Suspending',
   * 'Suspended', 'Resuming', 'FailingOver', 'FailoverFailed'
   */
  state?: State;
  /**
   * Whether requests from Public Network are allowed. Possible values include: 'Enabled',
   * 'Disabled'
   */
  publicNetworkAccess?: PublicNetworkAccess;
  /**
   * The IP filter rules.
   */
  ipFilterRules?: IpFilterRule[];
  /**
   * Private endpoint connections created on this IotHub
   */
  privateEndpointConnections?: PrivateEndpointConnection[];
  /**
   * The ARM provisioning state of the provisioning service.
   */
  provisioningState?: string;
  /**
   * List of IoT hubs associated with this provisioning service.
   */
  iotHubs?: IotHubDefinitionDescription[];
  /**
   * Allocation policy to be used by this provisioning service. Possible values include: 'Hashed',
   * 'GeoLatency', 'Static'
   */
  allocationPolicy?: AllocationPolicy;
  /**
   * Service endpoint for provisioning service.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly serviceOperationsHostName?: string;
  /**
   * Device endpoint for this provisioning service.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly deviceProvisioningHostName?: string;
  /**
   * Unique identifier of this provisioning service.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly idScope?: string;
  /**
   * List of authorization keys for a provisioning service.
   */
  authorizationPolicies?: SharedAccessSignatureAuthorizationRuleAccessRightsDescription[];
}

/**
 * The common properties of an Azure resource.
 */
export interface Resource extends BaseResource {
  /**
   * The resource identifier.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The resource name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The resource type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The resource location.
   */
  location: string;
  /**
   * The resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The description of the provisioning service.
 */
export interface ProvisioningServiceDescription extends Resource {
  /**
   * The Etag field is *not* required. If it is provided in the response body, it must also be
   * provided as a header per the normal ETag convention.
   */
  etag?: string;
  /**
   * Service specific properties for a provisioning service
   */
  properties: IotDpsPropertiesDescription;
  /**
   * Sku info for a provisioning Service.
   */
  sku: IotDpsSkuInfo;
}

/**
 * The properties for a group information object
 */
export interface GroupIdInformationProperties {
  /**
   * The group id
   */
  groupId?: string;
  /**
   * The required members for a specific group id
   */
  requiredMembers?: string[];
  /**
   * The required DNS zones for a specific group id
   */
  requiredZoneNames?: string[];
}

/**
 * The group information for creating a private endpoint on a provisioning service
 */
export interface GroupIdInformation {
  /**
   * The resource identifier.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The resource name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The resource type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The properties for a group information object
   */
  properties: GroupIdInformationProperties;
}

/**
 * The available private link resources for a provisioning service
 */
export interface PrivateLinkResources {
  /**
   * The list of available private link resources for a provisioning service
   */
  value?: GroupIdInformation[];
}

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft Devices.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provider?: string;
  /**
   * Resource Type: ProvisioningServices.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resource?: string;
  /**
   * Name of the operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operation?: string;
}

/**
 * Provisioning Service REST API operation.
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{read | write | action | delete}
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The object that represents the operation.
   */
  display?: OperationDisplay;
}

/**
 * Error details.
 */
export interface ErrorDetails {
  /**
   * The error code.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * The HTTP status code.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly httpStatusCode?: string;
  /**
   * The error message.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * The error details.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly details?: string;
}

/**
 * Available SKUs of tier and units.
 */
export interface IotDpsSkuDefinition {
  /**
   * Sku name. Possible values include: 'S1'
   */
  name?: IotDpsSku;
}

/**
 * Input values for operation results call.
 */
export interface OperationInputs {
  /**
   * The name of the Provisioning Service to check.
   */
  name: string;
}

/**
 * Description of name availability.
 */
export interface NameAvailabilityInfo {
  /**
   * specifies if a name is available or not
   */
  nameAvailable?: boolean;
  /**
   * specifies the reason a name is unavailable. Possible values include: 'Invalid',
   * 'AlreadyExists'
   */
  reason?: NameUnavailabilityReason;
  /**
   * message containing a detailed reason name is unavailable
   */
  message?: string;
}

/**
 * A container holding only the Tags for a resource, allowing the user to update the tags on a
 * Provisioning Service instance.
 */
export interface TagsResource {
  /**
   * Resource tags
   */
  tags?: { [propertyName: string]: string };
}

/**
 * An interface representing VerificationCodeResponseProperties.
 */
export interface VerificationCodeResponseProperties {
  /**
   * Verification code.
   */
  verificationCode?: string;
  /**
   * Certificate subject.
   */
  subject?: string;
  /**
   * Code expiry.
   */
  expiry?: string;
  /**
   * Certificate thumbprint.
   */
  thumbprint?: string;
  /**
   * Indicate if the certificate is verified by owner of private key.
   */
  isVerified?: boolean;
  /**
   * base-64 representation of X509 certificate .cer file or just .pem file content.
   */
  certificate?: Uint8Array;
  /**
   * Certificate created time.
   */
  created?: string;
  /**
   * Certificate updated time.
   */
  updated?: string;
}

/**
 * Description of the response of the verification code.
 */
export interface VerificationCodeResponse extends BaseResource {
  /**
   * Name of certificate.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Request etag.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly etag?: string;
  /**
   * The resource identifier.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The resource type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  properties?: VerificationCodeResponseProperties;
}

/**
 * The JSON-serialized leaf certificate
 */
export interface VerificationCodeRequest {
  /**
   * base-64 representation of X509 certificate .cer file or just .pem file content.
   */
  certificate?: string;
}

/**
 * Optional Parameters.
 */
export interface DpsCertificateGetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * ETag of the certificate.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface DpsCertificateCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * ETag of the certificate. This is required to update an existing certificate, and ignored while
   * creating a brand new certificate.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface DpsCertificateDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * This is optional, and it is the Common Name of the certificate.
   */
  certificatename?: string;
  /**
   * Raw data within the certificate.
   */
  certificaterawBytes?: Uint8Array;
  /**
   * Indicates if certificate has been verified by owner of the private key.
   */
  certificateisVerified?: boolean;
  /**
   * A description that mentions the purpose of the certificate. Possible values include:
   * 'clientAuthentication', 'serverAuthentication'
   */
  certificatepurpose?: CertificatePurpose;
  /**
   * Time the certificate is created.
   */
  certificatecreated?: Date;
  /**
   * Time the certificate is last updated.
   */
  certificatelastUpdated?: Date;
  /**
   * Indicates if the certificate contains a private key.
   */
  certificatehasPrivateKey?: boolean;
  /**
   * Random number generated to indicate Proof of Possession.
   */
  certificatenonce?: string;
}

/**
 * Optional Parameters.
 */
export interface DpsCertificateGenerateVerificationCodeOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Common Name for the certificate.
   */
  certificatename?: string;
  /**
   * Raw data of certificate.
   */
  certificaterawBytes?: Uint8Array;
  /**
   * Indicates if the certificate has been verified by owner of the private key.
   */
  certificateisVerified?: boolean;
  /**
   * Description mentioning the purpose of the certificate. Possible values include:
   * 'clientAuthentication', 'serverAuthentication'
   */
  certificatepurpose?: CertificatePurpose;
  /**
   * Certificate creation time.
   */
  certificatecreated?: Date;
  /**
   * Certificate last updated time.
   */
  certificatelastUpdated?: Date;
  /**
   * Indicates if the certificate contains private key.
   */
  certificatehasPrivateKey?: boolean;
  /**
   * Random number generated to indicate Proof of Possession.
   */
  certificatenonce?: string;
}

/**
 * Optional Parameters.
 */
export interface DpsCertificateVerifyCertificateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Common Name for the certificate.
   */
  certificatename?: string;
  /**
   * Raw data of certificate.
   */
  certificaterawBytes?: Uint8Array;
  /**
   * Indicates if the certificate has been verified by owner of the private key.
   */
  certificateisVerified?: boolean;
  /**
   * Describe the purpose of the certificate. Possible values include: 'clientAuthentication',
   * 'serverAuthentication'
   */
  certificatepurpose?: CertificatePurpose;
  /**
   * Certificate creation time.
   */
  certificatecreated?: Date;
  /**
   * Certificate last updated time.
   */
  certificatelastUpdated?: Date;
  /**
   * Indicates if the certificate contains private key.
   */
  certificatehasPrivateKey?: boolean;
  /**
   * Random number generated to indicate Proof of Possession.
   */
  certificatenonce?: string;
}

/**
 * An interface representing IotDpsClientOptions.
 */
export interface IotDpsClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Result of the request to list provisioning service operations. It contains a list of operations
 * and a URL link to get the next set of results.
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * URL to get the next set of operation list results if there are any.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * List of provisioning service descriptions.
 * @extends Array<ProvisioningServiceDescription>
 */
export interface ProvisioningServiceDescriptionListResult extends Array<ProvisioningServiceDescription> {
  /**
   * the next link
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * List of available SKUs.
 * @extends Array<IotDpsSkuDefinition>
 */
export interface IotDpsSkuDefinitionListResult extends Array<IotDpsSkuDefinition> {
  /**
   * The next link.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * List of shared access keys.
 * @extends Array<SharedAccessSignatureAuthorizationRuleAccessRightsDescription>
 */
export interface SharedAccessSignatureAuthorizationRuleListResult extends Array<SharedAccessSignatureAuthorizationRuleAccessRightsDescription> {
  /**
   * The next link.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for IotDpsSku.
 * Possible values include: 'S1'
 * @readonly
 * @enum {string}
 */
export type IotDpsSku = 'S1';

/**
 * Defines values for State.
 * Possible values include: 'Activating', 'Active', 'Deleting', 'Deleted', 'ActivationFailed',
 * 'DeletionFailed', 'Transitioning', 'Suspending', 'Suspended', 'Resuming', 'FailingOver',
 * 'FailoverFailed'
 * @readonly
 * @enum {string}
 */
export type State = 'Activating' | 'Active' | 'Deleting' | 'Deleted' | 'ActivationFailed' | 'DeletionFailed' | 'Transitioning' | 'Suspending' | 'Suspended' | 'Resuming' | 'FailingOver' | 'FailoverFailed';

/**
 * Defines values for PublicNetworkAccess.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type PublicNetworkAccess = 'Enabled' | 'Disabled';

/**
 * Defines values for IpFilterActionType.
 * Possible values include: 'Accept', 'Reject'
 * @readonly
 * @enum {string}
 */
export type IpFilterActionType = 'Accept' | 'Reject';

/**
 * Defines values for IpFilterTargetType.
 * Possible values include: 'all', 'serviceApi', 'deviceApi'
 * @readonly
 * @enum {string}
 */
export type IpFilterTargetType = 'all' | 'serviceApi' | 'deviceApi';

/**
 * Defines values for PrivateLinkServiceConnectionStatus.
 * Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected'
 * @readonly
 * @enum {string}
 */
export type PrivateLinkServiceConnectionStatus = 'Pending' | 'Approved' | 'Rejected' | 'Disconnected';

/**
 * Defines values for AllocationPolicy.
 * Possible values include: 'Hashed', 'GeoLatency', 'Static'
 * @readonly
 * @enum {string}
 */
export type AllocationPolicy = 'Hashed' | 'GeoLatency' | 'Static';

/**
 * Defines values for AccessRightsDescription.
 * Possible values include: 'ServiceConfig', 'EnrollmentRead', 'EnrollmentWrite', 'DeviceConnect',
 * 'RegistrationStatusRead', 'RegistrationStatusWrite'
 * @readonly
 * @enum {string}
 */
export type AccessRightsDescription = 'ServiceConfig' | 'EnrollmentRead' | 'EnrollmentWrite' | 'DeviceConnect' | 'RegistrationStatusRead' | 'RegistrationStatusWrite';

/**
 * Defines values for NameUnavailabilityReason.
 * Possible values include: 'Invalid', 'AlreadyExists'
 * @readonly
 * @enum {string}
 */
export type NameUnavailabilityReason = 'Invalid' | 'AlreadyExists';

/**
 * Defines values for CertificatePurpose.
 * Possible values include: 'clientAuthentication', 'serverAuthentication'
 * @readonly
 * @enum {string}
 */
export type CertificatePurpose = 'clientAuthentication' | 'serverAuthentication';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type DpsCertificateGetResponse = CertificateResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CertificateResponse;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type DpsCertificateCreateOrUpdateResponse = CertificateResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CertificateResponse;
    };
};

/**
 * Contains response data for the list operation.
 */
export type DpsCertificateListResponse = CertificateListDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CertificateListDescription;
    };
};

/**
 * Contains response data for the generateVerificationCode operation.
 */
export type DpsCertificateGenerateVerificationCodeResponse = VerificationCodeResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VerificationCodeResponse;
    };
};

/**
 * Contains response data for the verifyCertificate operation.
 */
export type DpsCertificateVerifyCertificateResponse = CertificateResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CertificateResponse;
    };
};

/**
 * Contains response data for the get operation.
 */
export type IotDpsResourceGetResponse = ProvisioningServiceDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProvisioningServiceDescription;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type IotDpsResourceCreateOrUpdateResponse = ProvisioningServiceDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProvisioningServiceDescription;
    };
};

/**
 * Contains response data for the update operation.
 */
export type IotDpsResourceUpdateResponse = ProvisioningServiceDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProvisioningServiceDescription;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type IotDpsResourceListBySubscriptionResponse = ProvisioningServiceDescriptionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProvisioningServiceDescriptionListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type IotDpsResourceListByResourceGroupResponse = ProvisioningServiceDescriptionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProvisioningServiceDescriptionListResult;
    };
};

/**
 * Contains response data for the getOperationResult operation.
 */
export type IotDpsResourceGetOperationResultResponse = AsyncOperationResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AsyncOperationResult;
    };
};

/**
 * Contains response data for the listValidSkus operation.
 */
export type IotDpsResourceListValidSkusResponse = IotDpsSkuDefinitionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IotDpsSkuDefinitionListResult;
    };
};

/**
 * Contains response data for the checkProvisioningServiceNameAvailability operation.
 */
export type IotDpsResourceCheckProvisioningServiceNameAvailabilityResponse = NameAvailabilityInfo & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NameAvailabilityInfo;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type IotDpsResourceListKeysResponse = SharedAccessSignatureAuthorizationRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SharedAccessSignatureAuthorizationRuleListResult;
    };
};

/**
 * Contains response data for the listKeysForKeyName operation.
 */
export type IotDpsResourceListKeysForKeyNameResponse = SharedAccessSignatureAuthorizationRuleAccessRightsDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SharedAccessSignatureAuthorizationRuleAccessRightsDescription;
    };
};

/**
 * Contains response data for the listPrivateLinkResources operation.
 */
export type IotDpsResourceListPrivateLinkResourcesResponse = PrivateLinkResources & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateLinkResources;
    };
};

/**
 * Contains response data for the getPrivateLinkResources operation.
 */
export type IotDpsResourceGetPrivateLinkResourcesResponse = GroupIdInformation & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: GroupIdInformation;
    };
};

/**
 * Contains response data for the listPrivateEndpointConnections operation.
 */
export type IotDpsResourceListPrivateEndpointConnectionsResponse = Array<PrivateEndpointConnection> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection[];
    };
};

/**
 * Contains response data for the getPrivateEndpointConnection operation.
 */
export type IotDpsResourceGetPrivateEndpointConnectionResponse = PrivateEndpointConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the createOrUpdatePrivateEndpointConnection operation.
 */
export type IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse = PrivateEndpointConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the deletePrivateEndpointConnection operation.
 */
export type IotDpsResourceDeletePrivateEndpointConnectionResponse = PrivateEndpointConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type IotDpsResourceBeginCreateOrUpdateResponse = ProvisioningServiceDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProvisioningServiceDescription;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type IotDpsResourceBeginUpdateResponse = ProvisioningServiceDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProvisioningServiceDescription;
    };
};

/**
 * Contains response data for the beginCreateOrUpdatePrivateEndpointConnection operation.
 */
export type IotDpsResourceBeginCreateOrUpdatePrivateEndpointConnectionResponse = PrivateEndpointConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the beginDeletePrivateEndpointConnection operation.
 */
export type IotDpsResourceBeginDeletePrivateEndpointConnectionResponse = PrivateEndpointConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type IotDpsResourceListBySubscriptionNextResponse = ProvisioningServiceDescriptionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProvisioningServiceDescriptionListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type IotDpsResourceListByResourceGroupNextResponse = ProvisioningServiceDescriptionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProvisioningServiceDescriptionListResult;
    };
};

/**
 * Contains response data for the listValidSkusNext operation.
 */
export type IotDpsResourceListValidSkusNextResponse = IotDpsSkuDefinitionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IotDpsSkuDefinitionListResult;
    };
};

/**
 * Contains response data for the listKeysNext operation.
 */
export type IotDpsResourceListKeysNextResponse = SharedAccessSignatureAuthorizationRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SharedAccessSignatureAuthorizationRuleListResult;
    };
};
