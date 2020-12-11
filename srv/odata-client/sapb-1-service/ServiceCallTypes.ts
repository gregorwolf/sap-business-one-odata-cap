/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceCallTypesRequestBuilder } from './ServiceCallTypesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ServiceCallTypes" of service "SAPB1".
 */
export class ServiceCallTypes extends EntityV4 implements ServiceCallTypesType {
  /**
   * Technical entity name for ServiceCallTypes.
   */
  static _entityName = 'ServiceCallTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Call Type Id.
   * @nullable
   */
  callTypeId?: number;
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
   * Returns an entity builder to construct instances of `ServiceCallTypes`.
   * @returns A builder that constructs instances of entity type `ServiceCallTypes`.
   */
  static builder(): EntityBuilderType<ServiceCallTypes, ServiceCallTypesType> {
    return EntityV4.entityBuilder(ServiceCallTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ServiceCallTypes` entity type.
   * @returns A `ServiceCallTypes` request builder.
   */
  static requestBuilder(): ServiceCallTypesRequestBuilder {
    return new ServiceCallTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ServiceCallTypes`.
   */
  static customField(fieldName: string): CustomFieldV4<ServiceCallTypes> {
    return EntityV4.customFieldSelector(fieldName, ServiceCallTypes);
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

export interface ServiceCallTypesType {
  callTypeId?: number | null;
  name?: string | null;
  description?: string | null;
  serviceCalls: ServiceCallsType[];
}

export namespace ServiceCallTypes {
  /**
   * Static representation of the [[callTypeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALL_TYPE_ID: NumberField<ServiceCallTypes> = new NumberField('CallTypeID', ServiceCallTypes, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ServiceCallTypes> = new StringField('Name', ServiceCallTypes, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ServiceCallTypes> = new StringField('Description', ServiceCallTypes, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALLS: OneToManyLink<ServiceCallTypes, ServiceCalls> = new OneToManyLink('ServiceCalls', ServiceCallTypes, ServiceCalls);
  /**
   * All fields of the ServiceCallTypes entity.
   */
  export const _allFields: Array<NumberField<ServiceCallTypes> | StringField<ServiceCallTypes> | OneToManyLink<ServiceCallTypes, ServiceCalls>> = [
    ServiceCallTypes.CALL_TYPE_ID,
    ServiceCallTypes.NAME,
    ServiceCallTypes.DESCRIPTION,
    ServiceCallTypes.SERVICE_CALLS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ServiceCallTypes> = new AllFields('*', ServiceCallTypes);
  /**
   * All key fields of the ServiceCallTypes entity.
   */
  export const _keyFields: Array<Field<ServiceCallTypes>> = [ServiceCallTypes.CALL_TYPE_ID];
  /**
   * Mapping of all key field names to the respective static field property ServiceCallTypes.
   */
  export const _keys: { [keys: string]: Field<ServiceCallTypes> } = ServiceCallTypes._keyFields.reduce((acc: { [keys: string]: Field<ServiceCallTypes> }, field: Field<ServiceCallTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
