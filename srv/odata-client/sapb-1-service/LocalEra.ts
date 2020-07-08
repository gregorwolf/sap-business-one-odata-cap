/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LocalEraRequestBuilder } from './LocalEraRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "LocalEra" of service "SAPB1".
 */
export class LocalEra extends Entity implements LocalEraType {
  /**
   * Technical entity name for LocalEra.
   */
  static _entityName = 'LocalEra';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for LocalEra.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Era Name.
   * @nullable
   */
  eraName?: string;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Code.
   * @nullable
   */
  code?: string;

  /**
   * Returns an entity builder to construct instances `LocalEra`.
   * @returns A builder that constructs instances of entity type `LocalEra`.
   */
  static builder(): EntityBuilderType<LocalEra, LocalEraTypeForceMandatory> {
    return Entity.entityBuilder(LocalEra);
  }

  /**
   * Returns a request builder to construct requests for operations on the `LocalEra` entity type.
   * @returns A `LocalEra` request builder.
   */
  static requestBuilder(): LocalEraRequestBuilder {
    return new LocalEraRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `LocalEra`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `LocalEra`.
   */
  static customField(fieldName: string): CustomField<LocalEra> {
    return Entity.customFieldSelector(fieldName, LocalEra);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface LocalEraType {
  eraName?: string;
  startDate?: Moment;
  code?: string;
}

export interface LocalEraTypeForceMandatory {
  eraName: string;
  startDate: Moment;
  code: string;
}

export namespace LocalEra {
  /**
   * Static representation of the [[eraName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ERA_NAME: StringField<LocalEra> = new StringField('EraName', LocalEra, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<LocalEra> = new DateField('StartDate', LocalEra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<LocalEra> = new StringField('Code', LocalEra, 'Edm.String');
  /**
   * All fields of the LocalEra entity.
   */
  export const _allFields: Array<StringField<LocalEra> | DateField<LocalEra>> = [
    LocalEra.ERA_NAME,
    LocalEra.START_DATE,
    LocalEra.CODE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<LocalEra> = new AllFields('*', LocalEra);
  /**
   * All key fields of the LocalEra entity.
   */
  export const _keyFields: Array<Field<LocalEra>> = [LocalEra.CODE];
  /**
   * Mapping of all key field names to the respective static field property LocalEra.
   */
  export const _keys: { [keys: string]: Field<LocalEra> } = LocalEra._keyFields.reduce((acc: { [keys: string]: Field<LocalEra> }, field: Field<LocalEra>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
