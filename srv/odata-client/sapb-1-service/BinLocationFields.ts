/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BinLocationFieldsRequestBuilder } from './BinLocationFieldsRequestBuilder';
import { BinLocationFieldTypeEnum } from './BinLocationFieldTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BinLocationFields" of service "SAPB1".
 */
export class BinLocationFields extends EntityV4 implements BinLocationFieldsType {
  /**
   * Technical entity name for BinLocationFields.
   */
  static _entityName = 'BinLocationFields';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Field Type.
   * @nullable
   */
  fieldType?: BinLocationFieldTypeEnum;
  /**
   * Field Number.
   * @nullable
   */
  fieldNumber?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Activated.
   * @nullable
   */
  activated?: BoYesNoEnum;
  /**
   * Default Field Name.
   * @nullable
   */
  defaultFieldName?: string;
  /**
   * One-to-many navigation property to the [[BinLocationAttributes]] entity.
   */
  binLocationAttributes!: BinLocationAttributes[];
  /**
   * One-to-many navigation property to the [[WarehouseSublevelCodes]] entity.
   */
  warehouseSublevelCodes!: WarehouseSublevelCodes[];

  /**
   * Returns an entity builder to construct instances of `BinLocationFields`.
   * @returns A builder that constructs instances of entity type `BinLocationFields`.
   */
  static builder(): EntityBuilderType<BinLocationFields, BinLocationFieldsType> {
    return EntityV4.entityBuilder(BinLocationFields);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BinLocationFields` entity type.
   * @returns A `BinLocationFields` request builder.
   */
  static requestBuilder(): BinLocationFieldsRequestBuilder {
    return new BinLocationFieldsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BinLocationFields`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BinLocationFields`.
   */
  static customField(fieldName: string): CustomFieldV4<BinLocationFields> {
    return EntityV4.customFieldSelector(fieldName, BinLocationFields);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BinLocationAttributes, BinLocationAttributesType } from './BinLocationAttributes';
import { WarehouseSublevelCodes, WarehouseSublevelCodesType } from './WarehouseSublevelCodes';

export interface BinLocationFieldsType {
  absEntry?: number | null;
  fieldType?: BinLocationFieldTypeEnum | null;
  fieldNumber?: number | null;
  name?: string | null;
  activated?: BoYesNoEnum | null;
  defaultFieldName?: string | null;
  binLocationAttributes: BinLocationAttributesType[];
  warehouseSublevelCodes: WarehouseSublevelCodesType[];
}

export namespace BinLocationFields {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<BinLocationFields> = new NumberField('AbsEntry', BinLocationFields, 'Edm.Int32');
  /**
   * Static representation of the [[fieldType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_TYPE: EnumField<BinLocationFields> = new EnumField('FieldType', BinLocationFields);
  /**
   * Static representation of the [[fieldNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_NUMBER: NumberField<BinLocationFields> = new NumberField('FieldNumber', BinLocationFields, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<BinLocationFields> = new StringField('Name', BinLocationFields, 'Edm.String');
  /**
   * Static representation of the [[activated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVATED: EnumField<BinLocationFields> = new EnumField('Activated', BinLocationFields);
  /**
   * Static representation of the [[defaultFieldName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_FIELD_NAME: StringField<BinLocationFields> = new StringField('DefaultFieldName', BinLocationFields, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[binLocationAttributes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIN_LOCATION_ATTRIBUTES: OneToManyLink<BinLocationFields, BinLocationAttributes> = new OneToManyLink('BinLocationAttributes', BinLocationFields, BinLocationAttributes);
  /**
   * Static representation of the one-to-many navigation property [[warehouseSublevelCodes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_SUBLEVEL_CODES: OneToManyLink<BinLocationFields, WarehouseSublevelCodes> = new OneToManyLink('WarehouseSublevelCodes', BinLocationFields, WarehouseSublevelCodes);
  /**
   * All fields of the BinLocationFields entity.
   */
  export const _allFields: Array<NumberField<BinLocationFields> | EnumField<BinLocationFields> | StringField<BinLocationFields> | OneToManyLink<BinLocationFields, BinLocationAttributes> | OneToManyLink<BinLocationFields, WarehouseSublevelCodes>> = [
    BinLocationFields.ABS_ENTRY,
    BinLocationFields.FIELD_TYPE,
    BinLocationFields.FIELD_NUMBER,
    BinLocationFields.NAME,
    BinLocationFields.ACTIVATED,
    BinLocationFields.DEFAULT_FIELD_NAME,
    BinLocationFields.BIN_LOCATION_ATTRIBUTES,
    BinLocationFields.WAREHOUSE_SUBLEVEL_CODES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BinLocationFields> = new AllFields('*', BinLocationFields);
  /**
   * All key fields of the BinLocationFields entity.
   */
  export const _keyFields: Array<Field<BinLocationFields>> = [BinLocationFields.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property BinLocationFields.
   */
  export const _keys: { [keys: string]: Field<BinLocationFields> } = BinLocationFields._keyFields.reduce((acc: { [keys: string]: Field<BinLocationFields> }, field: Field<BinLocationFields>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
