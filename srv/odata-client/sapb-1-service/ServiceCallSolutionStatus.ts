/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceCallSolutionStatusRequestBuilder } from './ServiceCallSolutionStatusRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ServiceCallSolutionStatus" of service "SAPB1".
 */
export class ServiceCallSolutionStatus extends Entity implements ServiceCallSolutionStatusType {
  /**
   * Technical entity name for ServiceCallSolutionStatus.
   */
  static _entityName = 'ServiceCallSolutionStatus';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ServiceCallSolutionStatus.
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
   * One-to-many navigation property to the [[KnowledgeBaseSolutions]] entity.
   */
  knowledgeBaseSolutions!: KnowledgeBaseSolutions[];

  /**
   * Returns an entity builder to construct instances `ServiceCallSolutionStatus`.
   * @returns A builder that constructs instances of entity type `ServiceCallSolutionStatus`.
   */
  static builder(): EntityBuilderType<ServiceCallSolutionStatus, ServiceCallSolutionStatusTypeForceMandatory> {
    return Entity.entityBuilder(ServiceCallSolutionStatus);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ServiceCallSolutionStatus` entity type.
   * @returns A `ServiceCallSolutionStatus` request builder.
   */
  static requestBuilder(): ServiceCallSolutionStatusRequestBuilder {
    return new ServiceCallSolutionStatusRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallSolutionStatus`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ServiceCallSolutionStatus`.
   */
  static customField(fieldName: string): CustomField<ServiceCallSolutionStatus> {
    return Entity.customFieldSelector(fieldName, ServiceCallSolutionStatus);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { KnowledgeBaseSolutions, KnowledgeBaseSolutionsType } from './KnowledgeBaseSolutions';

export interface ServiceCallSolutionStatusType {
  statusId?: number;
  name?: string;
  description?: string;
  knowledgeBaseSolutions: KnowledgeBaseSolutionsType[];
}

export interface ServiceCallSolutionStatusTypeForceMandatory {
  statusId: number;
  name: string;
  description: string;
  knowledgeBaseSolutions: KnowledgeBaseSolutionsType[];
}

export namespace ServiceCallSolutionStatus {
  /**
   * Static representation of the [[statusId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_ID: NumberField<ServiceCallSolutionStatus> = new NumberField('StatusId', ServiceCallSolutionStatus, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ServiceCallSolutionStatus> = new StringField('Name', ServiceCallSolutionStatus, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ServiceCallSolutionStatus> = new StringField('Description', ServiceCallSolutionStatus, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[knowledgeBaseSolutions]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KNOWLEDGE_BASE_SOLUTIONS: OneToManyLink<ServiceCallSolutionStatus, KnowledgeBaseSolutions> = new OneToManyLink('KnowledgeBaseSolutions', ServiceCallSolutionStatus, KnowledgeBaseSolutions);
  /**
   * All fields of the ServiceCallSolutionStatus entity.
   */
  export const _allFields: Array<NumberField<ServiceCallSolutionStatus> | StringField<ServiceCallSolutionStatus> | OneToManyLink<ServiceCallSolutionStatus, KnowledgeBaseSolutions>> = [
    ServiceCallSolutionStatus.STATUS_ID,
    ServiceCallSolutionStatus.NAME,
    ServiceCallSolutionStatus.DESCRIPTION,
    ServiceCallSolutionStatus.KNOWLEDGE_BASE_SOLUTIONS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ServiceCallSolutionStatus> = new AllFields('*', ServiceCallSolutionStatus);
  /**
   * All key fields of the ServiceCallSolutionStatus entity.
   */
  export const _keyFields: Array<Field<ServiceCallSolutionStatus>> = [ServiceCallSolutionStatus.STATUS_ID];
  /**
   * Mapping of all key field names to the respective static field property ServiceCallSolutionStatus.
   */
  export const _keys: { [keys: string]: Field<ServiceCallSolutionStatus> } = ServiceCallSolutionStatus._keyFields.reduce((acc: { [keys: string]: Field<ServiceCallSolutionStatus> }, field: Field<ServiceCallSolutionStatus>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
