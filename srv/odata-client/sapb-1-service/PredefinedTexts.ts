/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PredefinedTextsRequestBuilder } from './PredefinedTextsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PredefinedTexts" of service "SAPB1".
 */
export class PredefinedTexts extends EntityV4 implements PredefinedTextsType {
  /**
   * Technical entity name for PredefinedTexts.
   */
  static _entityName = 'PredefinedTexts';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Numerator.
   * @nullable
   */
  numerator?: number;
  /**
   * Text Code.
   * @nullable
   */
  textCode?: string;
  /**
   * Text.
   * @nullable
   */
  text?: string;

  /**
   * Returns an entity builder to construct instances of `PredefinedTexts`.
   * @returns A builder that constructs instances of entity type `PredefinedTexts`.
   */
  static builder(): EntityBuilderType<PredefinedTexts, PredefinedTextsType> {
    return EntityV4.entityBuilder(PredefinedTexts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PredefinedTexts` entity type.
   * @returns A `PredefinedTexts` request builder.
   */
  static requestBuilder(): PredefinedTextsRequestBuilder {
    return new PredefinedTextsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PredefinedTexts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PredefinedTexts`.
   */
  static customField(fieldName: string): CustomFieldV4<PredefinedTexts> {
    return EntityV4.customFieldSelector(fieldName, PredefinedTexts);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface PredefinedTextsType {
  numerator?: number | null;
  textCode?: string | null;
  text?: string | null;
}

export namespace PredefinedTexts {
  /**
   * Static representation of the [[numerator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMERATOR: NumberField<PredefinedTexts> = new NumberField('Numerator', PredefinedTexts, 'Edm.Int32');
  /**
   * Static representation of the [[textCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT_CODE: StringField<PredefinedTexts> = new StringField('TextCode', PredefinedTexts, 'Edm.String');
  /**
   * Static representation of the [[text]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT: StringField<PredefinedTexts> = new StringField('Text', PredefinedTexts, 'Edm.String');
  /**
   * All fields of the PredefinedTexts entity.
   */
  export const _allFields: Array<NumberField<PredefinedTexts> | StringField<PredefinedTexts>> = [
    PredefinedTexts.NUMERATOR,
    PredefinedTexts.TEXT_CODE,
    PredefinedTexts.TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PredefinedTexts> = new AllFields('*', PredefinedTexts);
  /**
   * All key fields of the PredefinedTexts entity.
   */
  export const _keyFields: Array<Field<PredefinedTexts>> = [PredefinedTexts.NUMERATOR];
  /**
   * Mapping of all key field names to the respective static field property PredefinedTexts.
   */
  export const _keys: { [keys: string]: Field<PredefinedTexts> } = PredefinedTexts._keyFields.reduce((acc: { [keys: string]: Field<PredefinedTexts> }, field: Field<PredefinedTexts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
