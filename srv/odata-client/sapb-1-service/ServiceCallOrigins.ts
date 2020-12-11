/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceCallOriginsRequestBuilder } from './ServiceCallOriginsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ServiceCallOrigins" of service "SAPB1".
 */
export class ServiceCallOrigins extends EntityV4 implements ServiceCallOriginsType {
  /**
   * Technical entity name for ServiceCallOrigins.
   */
  static _entityName = 'ServiceCallOrigins';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Origin Id.
   * @nullable
   */
  originId?: number;
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
   * Returns an entity builder to construct instances of `ServiceCallOrigins`.
   * @returns A builder that constructs instances of entity type `ServiceCallOrigins`.
   */
  static builder(): EntityBuilderType<ServiceCallOrigins, ServiceCallOriginsType> {
    return EntityV4.entityBuilder(ServiceCallOrigins);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ServiceCallOrigins` entity type.
   * @returns A `ServiceCallOrigins` request builder.
   */
  static requestBuilder(): ServiceCallOriginsRequestBuilder {
    return new ServiceCallOriginsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallOrigins`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ServiceCallOrigins`.
   */
  static customField(fieldName: string): CustomFieldV4<ServiceCallOrigins> {
    return EntityV4.customFieldSelector(fieldName, ServiceCallOrigins);
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

export interface ServiceCallOriginsType {
  originId?: number | null;
  name?: string | null;
  description?: string | null;
  serviceCalls: ServiceCallsType[];
}

export namespace ServiceCallOrigins {
  /**
   * Static representation of the [[originId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGIN_ID: NumberField<ServiceCallOrigins> = new NumberField('OriginID', ServiceCallOrigins, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ServiceCallOrigins> = new StringField('Name', ServiceCallOrigins, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ServiceCallOrigins> = new StringField('Description', ServiceCallOrigins, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALLS: OneToManyLink<ServiceCallOrigins, ServiceCalls> = new OneToManyLink('ServiceCalls', ServiceCallOrigins, ServiceCalls);
  /**
   * All fields of the ServiceCallOrigins entity.
   */
  export const _allFields: Array<NumberField<ServiceCallOrigins> | StringField<ServiceCallOrigins> | OneToManyLink<ServiceCallOrigins, ServiceCalls>> = [
    ServiceCallOrigins.ORIGIN_ID,
    ServiceCallOrigins.NAME,
    ServiceCallOrigins.DESCRIPTION,
    ServiceCallOrigins.SERVICE_CALLS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ServiceCallOrigins> = new AllFields('*', ServiceCallOrigins);
  /**
   * All key fields of the ServiceCallOrigins entity.
   */
  export const _keyFields: Array<Field<ServiceCallOrigins>> = [ServiceCallOrigins.ORIGIN_ID];
  /**
   * Mapping of all key field names to the respective static field property ServiceCallOrigins.
   */
  export const _keys: { [keys: string]: Field<ServiceCallOrigins> } = ServiceCallOrigins._keyFields.reduce((acc: { [keys: string]: Field<ServiceCallOrigins> }, field: Field<ServiceCallOrigins>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
