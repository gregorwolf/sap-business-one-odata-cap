/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BarCodesRequestBuilder } from './BarCodesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BarCodes" of service "SAPB1".
 */
export class BarCodes extends EntityV4 implements BarCodesType {
  /**
   * Technical entity name for BarCodes.
   */
  static _entityName = 'BarCodes';
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
   * Item No.
   * @nullable
   */
  itemNo?: string;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
  /**
   * Barcode.
   * @nullable
   */
  barcode?: string;
  /**
   * Free Text.
   * @nullable
   */
  freeText?: string;
  /**
   * One-to-one navigation property to the [[Items]] entity.
   */
  item!: Items;
  /**
   * One-to-one navigation property to the [[UnitOfMeasurements]] entity.
   */
  unitOfMeasurement!: UnitOfMeasurements;

  /**
   * Returns an entity builder to construct instances of `BarCodes`.
   * @returns A builder that constructs instances of entity type `BarCodes`.
   */
  static builder(): EntityBuilderType<BarCodes, BarCodesType> {
    return EntityV4.entityBuilder(BarCodes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BarCodes` entity type.
   * @returns A `BarCodes` request builder.
   */
  static requestBuilder(): BarCodesRequestBuilder {
    return new BarCodesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BarCodes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BarCodes`.
   */
  static customField(fieldName: string): CustomFieldV4<BarCodes> {
    return EntityV4.customFieldSelector(fieldName, BarCodes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Items, ItemsType } from './Items';
import { UnitOfMeasurements, UnitOfMeasurementsType } from './UnitOfMeasurements';

export interface BarCodesType {
  absEntry?: number | null;
  itemNo?: string | null;
  uoMEntry?: number | null;
  barcode?: string | null;
  freeText?: string | null;
  item: ItemsType;
  unitOfMeasurement: UnitOfMeasurementsType;
}

export namespace BarCodes {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<BarCodes> = new NumberField('AbsEntry', BarCodes, 'Edm.Int32');
  /**
   * Static representation of the [[itemNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_NO: StringField<BarCodes> = new StringField('ItemNo', BarCodes, 'Edm.String');
  /**
   * Static representation of the [[uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UO_M_ENTRY: NumberField<BarCodes> = new NumberField('UoMEntry', BarCodes, 'Edm.Int32');
  /**
   * Static representation of the [[barcode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BARCODE: StringField<BarCodes> = new StringField('Barcode', BarCodes, 'Edm.String');
  /**
   * Static representation of the [[freeText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREE_TEXT: StringField<BarCodes> = new StringField('FreeText', BarCodes, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[item]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM: OneToOneLink<BarCodes, Items> = new OneToOneLink('Item', BarCodes, Items);
  /**
   * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASUREMENT: OneToOneLink<BarCodes, UnitOfMeasurements> = new OneToOneLink('UnitOfMeasurement', BarCodes, UnitOfMeasurements);
  /**
   * All fields of the BarCodes entity.
   */
  export const _allFields: Array<NumberField<BarCodes> | StringField<BarCodes> | OneToOneLink<BarCodes, Items> | OneToOneLink<BarCodes, UnitOfMeasurements>> = [
    BarCodes.ABS_ENTRY,
    BarCodes.ITEM_NO,
    BarCodes.UO_M_ENTRY,
    BarCodes.BARCODE,
    BarCodes.FREE_TEXT,
    BarCodes.ITEM,
    BarCodes.UNIT_OF_MEASUREMENT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BarCodes> = new AllFields('*', BarCodes);
  /**
   * All key fields of the BarCodes entity.
   */
  export const _keyFields: Array<Field<BarCodes>> = [BarCodes.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property BarCodes.
   */
  export const _keys: { [keys: string]: Field<BarCodes> } = BarCodes._keyFields.reduce((acc: { [keys: string]: Field<BarCodes> }, field: Field<BarCodes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
