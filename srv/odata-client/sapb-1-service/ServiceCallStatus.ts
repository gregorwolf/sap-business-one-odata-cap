/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceCallStatusRequestBuilder } from './ServiceCallStatusRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ServiceCallStatus" of service "SAPB1".
 */
export class ServiceCallStatus extends Entity implements ServiceCallStatusType {
  /**
   * Technical entity name for ServiceCallStatus.
   */
  static _entityName = 'ServiceCallStatus';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ServiceCallStatus.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Status Id.
   * @nullable
   */
  statusId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * One-to-many navigation property to the [[ServiceCalls]] entity.
   */
  serviceCalls!: ServiceCalls[];

  /**
   * Returns an entity builder to construct instances `ServiceCallStatus`.
   * @returns A builder that constructs instances of entity type `ServiceCallStatus`.
   */
  static builder(): EntityBuilderType<ServiceCallStatus, ServiceCallStatusTypeForceMandatory> {
    return Entity.entityBuilder(ServiceCallStatus);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ServiceCallStatus` entity type.
   * @returns A `ServiceCallStatus` request builder.
   */
  static requestBuilder(): ServiceCallStatusRequestBuilder {
    return new ServiceCallStatusRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallStatus`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ServiceCallStatus`.
   */
  static customField(fieldName: string): CustomField<ServiceCallStatus> {
    return Entity.customFieldSelector(fieldName, ServiceCallStatus);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ServiceCalls, ServiceCallsType } from './ServiceCalls';

export interface ServiceCallStatusType {
  statusId?: number;
  name?: string;
  description?: string;
  serviceCalls: ServiceCallsType[];
}

export interface ServiceCallStatusTypeForceMandatory {
  statusId: number;
  name: string;
  description: string;
  serviceCalls: ServiceCallsType[];
}

export namespace ServiceCallStatus {
  /**
   * Static representation of the [[statusId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_ID: NumberField<ServiceCallStatus> = new NumberField('StatusId', ServiceCallStatus, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ServiceCallStatus> = new StringField('Name', ServiceCallStatus, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ServiceCallStatus> = new StringField('Description', ServiceCallStatus, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALLS: OneToManyLink<ServiceCallStatus, ServiceCalls> = new OneToManyLink('ServiceCalls', ServiceCallStatus, ServiceCalls);
  /**
   * All fields of the ServiceCallStatus entity.
   */
  export const _allFields: Array<NumberField<ServiceCallStatus> | StringField<ServiceCallStatus> | OneToManyLink<ServiceCallStatus, ServiceCalls>> = [
    ServiceCallStatus.STATUS_ID,
    ServiceCallStatus.NAME,
    ServiceCallStatus.DESCRIPTION,
    ServiceCallStatus.SERVICE_CALLS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ServiceCallStatus> = new AllFields('*', ServiceCallStatus);
  /**
   * All key fields of the ServiceCallStatus entity.
   */
  export const _keyFields: Array<Field<ServiceCallStatus>> = [ServiceCallStatus.STATUS_ID];
  /**
   * Mapping of all key field names to the respective static field property ServiceCallStatus.
   */
  export const _keys: { [keys: string]: Field<ServiceCallStatus> } = ServiceCallStatus._keyFields.reduce((acc: { [keys: string]: Field<ServiceCallStatus> }, field: Field<ServiceCallStatus>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
