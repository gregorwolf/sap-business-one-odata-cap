/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BinLocationAttributesRequestBuilder } from './BinLocationAttributesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BinLocationAttributes" of service "SAPB1".
 */
export class BinLocationAttributes extends EntityV4 implements BinLocationAttributesType {
  /**
   * Technical entity name for BinLocationAttributes.
   */
  static _entityName = 'BinLocationAttributes';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Attribute.
   * @nullable
   */
  attribute?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * One-to-one navigation property to the [[BinLocationFields]] entity.
   */
  binLocationField!: BinLocationFields;

  /**
   * Returns an entity builder to construct instances of `BinLocationAttributes`.
   * @returns A builder that constructs instances of entity type `BinLocationAttributes`.
   */
  static builder(): EntityBuilderType<BinLocationAttributes, BinLocationAttributesType> {
    return EntityV4.entityBuilder(BinLocationAttributes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BinLocationAttributes` entity type.
   * @returns A `BinLocationAttributes` request builder.
   */
  static requestBuilder(): BinLocationAttributesRequestBuilder {
    return new BinLocationAttributesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BinLocationAttributes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BinLocationAttributes`.
   */
  static customField(fieldName: string): CustomFieldV4<BinLocationAttributes> {
    return EntityV4.customFieldSelector(fieldName, BinLocationAttributes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BinLocationFields, BinLocationFieldsType } from './BinLocationFields';

export interface BinLocationAttributesType {
  attribute?: number | null;
  code?: string | null;
  absEntry?: number | null;
  binLocationField: BinLocationFieldsType;
}

export namespace BinLocationAttributes {
  /**
   * Static representation of the [[attribute]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTRIBUTE: NumberField<BinLocationAttributes> = new NumberField('Attribute', BinLocationAttributes, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<BinLocationAttributes> = new StringField('Code', BinLocationAttributes, 'Edm.String');
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<BinLocationAttributes> = new NumberField('AbsEntry', BinLocationAttributes, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[binLocationField]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIN_LOCATION_FIELD: OneToOneLink<BinLocationAttributes, BinLocationFields> = new OneToOneLink('BinLocationField', BinLocationAttributes, BinLocationFields);
  /**
   * All fields of the BinLocationAttributes entity.
   */
  export const _allFields: Array<NumberField<BinLocationAttributes> | StringField<BinLocationAttributes> | OneToOneLink<BinLocationAttributes, BinLocationFields>> = [
    BinLocationAttributes.ATTRIBUTE,
    BinLocationAttributes.CODE,
    BinLocationAttributes.ABS_ENTRY,
    BinLocationAttributes.BIN_LOCATION_FIELD
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BinLocationAttributes> = new AllFields('*', BinLocationAttributes);
  /**
   * All key fields of the BinLocationAttributes entity.
   */
  export const _keyFields: Array<Field<BinLocationAttributes>> = [BinLocationAttributes.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property BinLocationAttributes.
   */
  export const _keys: { [keys: string]: Field<BinLocationAttributes> } = BinLocationAttributes._keyFields.reduce((acc: { [keys: string]: Field<BinLocationAttributes> }, field: Field<BinLocationAttributes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
