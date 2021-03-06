/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceCallProblemTypesRequestBuilder } from './ServiceCallProblemTypesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ServiceCallProblemTypes" of service "SAPB1".
 */
export class ServiceCallProblemTypes extends EntityV4 implements ServiceCallProblemTypesType {
  /**
   * Technical entity name for ServiceCallProblemTypes.
   */
  static _entityName = 'ServiceCallProblemTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Problem Type Id.
   * @nullable
   */
  problemTypeId?: number;
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
   * Returns an entity builder to construct instances of `ServiceCallProblemTypes`.
   * @returns A builder that constructs instances of entity type `ServiceCallProblemTypes`.
   */
  static builder(): EntityBuilderType<ServiceCallProblemTypes, ServiceCallProblemTypesType> {
    return EntityV4.entityBuilder(ServiceCallProblemTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ServiceCallProblemTypes` entity type.
   * @returns A `ServiceCallProblemTypes` request builder.
   */
  static requestBuilder(): ServiceCallProblemTypesRequestBuilder {
    return new ServiceCallProblemTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallProblemTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ServiceCallProblemTypes`.
   */
  static customField(fieldName: string): CustomFieldV4<ServiceCallProblemTypes> {
    return EntityV4.customFieldSelector(fieldName, ServiceCallProblemTypes);
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

export interface ServiceCallProblemTypesType {
  problemTypeId?: number | null;
  name?: string | null;
  description?: string | null;
  serviceCalls: ServiceCallsType[];
}

export namespace ServiceCallProblemTypes {
  /**
   * Static representation of the [[problemTypeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROBLEM_TYPE_ID: NumberField<ServiceCallProblemTypes> = new NumberField('ProblemTypeID', ServiceCallProblemTypes, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ServiceCallProblemTypes> = new StringField('Name', ServiceCallProblemTypes, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ServiceCallProblemTypes> = new StringField('Description', ServiceCallProblemTypes, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALLS: OneToManyLink<ServiceCallProblemTypes, ServiceCalls> = new OneToManyLink('ServiceCalls', ServiceCallProblemTypes, ServiceCalls);
  /**
   * All fields of the ServiceCallProblemTypes entity.
   */
  export const _allFields: Array<NumberField<ServiceCallProblemTypes> | StringField<ServiceCallProblemTypes> | OneToManyLink<ServiceCallProblemTypes, ServiceCalls>> = [
    ServiceCallProblemTypes.PROBLEM_TYPE_ID,
    ServiceCallProblemTypes.NAME,
    ServiceCallProblemTypes.DESCRIPTION,
    ServiceCallProblemTypes.SERVICE_CALLS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ServiceCallProblemTypes> = new AllFields('*', ServiceCallProblemTypes);
  /**
   * All key fields of the ServiceCallProblemTypes entity.
   */
  export const _keyFields: Array<Field<ServiceCallProblemTypes>> = [ServiceCallProblemTypes.PROBLEM_TYPE_ID];
  /**
   * Mapping of all key field names to the respective static field property ServiceCallProblemTypes.
   */
  export const _keys: { [keys: string]: Field<ServiceCallProblemTypes> } = ServiceCallProblemTypes._keyFields.reduce((acc: { [keys: string]: Field<ServiceCallProblemTypes> }, field: Field<ServiceCallProblemTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
