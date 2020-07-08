/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceCallProblemSubTypesRequestBuilder } from './ServiceCallProblemSubTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ServiceCallProblemSubTypes" of service "SAPB1".
 */
export class ServiceCallProblemSubTypes extends Entity implements ServiceCallProblemSubTypesType {
  /**
   * Technical entity name for ServiceCallProblemSubTypes.
   */
  static _entityName = 'ServiceCallProblemSubTypes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ServiceCallProblemSubTypes.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Problem Sub Type Id.
   * @nullable
   */
  problemSubTypeId?: number;
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
   * Returns an entity builder to construct instances `ServiceCallProblemSubTypes`.
   * @returns A builder that constructs instances of entity type `ServiceCallProblemSubTypes`.
   */
  static builder(): EntityBuilderType<ServiceCallProblemSubTypes, ServiceCallProblemSubTypesTypeForceMandatory> {
    return Entity.entityBuilder(ServiceCallProblemSubTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ServiceCallProblemSubTypes` entity type.
   * @returns A `ServiceCallProblemSubTypes` request builder.
   */
  static requestBuilder(): ServiceCallProblemSubTypesRequestBuilder {
    return new ServiceCallProblemSubTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallProblemSubTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ServiceCallProblemSubTypes`.
   */
  static customField(fieldName: string): CustomField<ServiceCallProblemSubTypes> {
    return Entity.customFieldSelector(fieldName, ServiceCallProblemSubTypes);
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

export interface ServiceCallProblemSubTypesType {
  problemSubTypeId?: number;
  name?: string;
  description?: string;
  serviceCalls: ServiceCallsType[];
}

export interface ServiceCallProblemSubTypesTypeForceMandatory {
  problemSubTypeId: number;
  name: string;
  description: string;
  serviceCalls: ServiceCallsType[];
}

export namespace ServiceCallProblemSubTypes {
  /**
   * Static representation of the [[problemSubTypeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROBLEM_SUB_TYPE_ID: NumberField<ServiceCallProblemSubTypes> = new NumberField('ProblemSubTypeID', ServiceCallProblemSubTypes, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ServiceCallProblemSubTypes> = new StringField('Name', ServiceCallProblemSubTypes, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ServiceCallProblemSubTypes> = new StringField('Description', ServiceCallProblemSubTypes, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALLS: OneToManyLink<ServiceCallProblemSubTypes, ServiceCalls> = new OneToManyLink('ServiceCalls', ServiceCallProblemSubTypes, ServiceCalls);
  /**
   * All fields of the ServiceCallProblemSubTypes entity.
   */
  export const _allFields: Array<NumberField<ServiceCallProblemSubTypes> | StringField<ServiceCallProblemSubTypes> | OneToManyLink<ServiceCallProblemSubTypes, ServiceCalls>> = [
    ServiceCallProblemSubTypes.PROBLEM_SUB_TYPE_ID,
    ServiceCallProblemSubTypes.NAME,
    ServiceCallProblemSubTypes.DESCRIPTION,
    ServiceCallProblemSubTypes.SERVICE_CALLS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ServiceCallProblemSubTypes> = new AllFields('*', ServiceCallProblemSubTypes);
  /**
   * All key fields of the ServiceCallProblemSubTypes entity.
   */
  export const _keyFields: Array<Field<ServiceCallProblemSubTypes>> = [ServiceCallProblemSubTypes.PROBLEM_SUB_TYPE_ID];
  /**
   * Mapping of all key field names to the respective static field property ServiceCallProblemSubTypes.
   */
  export const _keys: { [keys: string]: Field<ServiceCallProblemSubTypes> } = ServiceCallProblemSubTypes._keyFields.reduce((acc: { [keys: string]: Field<ServiceCallProblemSubTypes> }, field: Field<ServiceCallProblemSubTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
