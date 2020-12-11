/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LocalEraRequestBuilder } from './LocalEraRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "LocalEra" of service "SAPB1".
 */
export class LocalEra extends EntityV4 implements LocalEraType {
  /**
   * Technical entity name for LocalEra.
   */
  static _entityName = 'LocalEra';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * Returns an entity builder to construct instances of `LocalEra`.
   * @returns A builder that constructs instances of entity type `LocalEra`.
   */
  static builder(): EntityBuilderType<LocalEra, LocalEraType> {
    return EntityV4.entityBuilder(LocalEra);
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
  static customField(fieldName: string): CustomFieldV4<LocalEra> {
    return EntityV4.customFieldSelector(fieldName, LocalEra);
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
  eraName?: string | null;
  startDate?: Moment | null;
  code?: string | null;
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
