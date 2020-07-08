/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseSublevelCodesRequestBuilder } from './WarehouseSublevelCodesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "WarehouseSublevelCodes" of service "SAPB1".
 */
export class WarehouseSublevelCodes extends Entity implements WarehouseSublevelCodesType {
  /**
   * Technical entity name for WarehouseSublevelCodes.
   */
  static _entityName = 'WarehouseSublevelCodes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WarehouseSublevelCodes.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Warehouse Sublevel.
   * @nullable
   */
  warehouseSublevel?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
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
   * Returns an entity builder to construct instances `WarehouseSublevelCodes`.
   * @returns A builder that constructs instances of entity type `WarehouseSublevelCodes`.
   */
  static builder(): EntityBuilderType<WarehouseSublevelCodes, WarehouseSublevelCodesTypeForceMandatory> {
    return Entity.entityBuilder(WarehouseSublevelCodes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WarehouseSublevelCodes` entity type.
   * @returns A `WarehouseSublevelCodes` request builder.
   */
  static requestBuilder(): WarehouseSublevelCodesRequestBuilder {
    return new WarehouseSublevelCodesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WarehouseSublevelCodes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WarehouseSublevelCodes`.
   */
  static customField(fieldName: string): CustomField<WarehouseSublevelCodes> {
    return Entity.customFieldSelector(fieldName, WarehouseSublevelCodes);
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

export interface WarehouseSublevelCodesType {
  warehouseSublevel?: number;
  code?: string;
  description?: string;
  absEntry?: number;
  binLocationField: BinLocationFieldsType;
}

export interface WarehouseSublevelCodesTypeForceMandatory {
  warehouseSublevel: number;
  code: string;
  description: string;
  absEntry: number;
  binLocationField: BinLocationFieldsType;
}

export namespace WarehouseSublevelCodes {
  /**
   * Static representation of the [[warehouseSublevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_SUBLEVEL: NumberField<WarehouseSublevelCodes> = new NumberField('WarehouseSublevel', WarehouseSublevelCodes, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<WarehouseSublevelCodes> = new StringField('Code', WarehouseSublevelCodes, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<WarehouseSublevelCodes> = new StringField('Description', WarehouseSublevelCodes, 'Edm.String');
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<WarehouseSublevelCodes> = new NumberField('AbsEntry', WarehouseSublevelCodes, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[binLocationField]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIN_LOCATION_FIELD: OneToOneLink<WarehouseSublevelCodes, BinLocationFields> = new OneToOneLink('BinLocationField', WarehouseSublevelCodes, BinLocationFields);
  /**
   * All fields of the WarehouseSublevelCodes entity.
   */
  export const _allFields: Array<NumberField<WarehouseSublevelCodes> | StringField<WarehouseSublevelCodes> | OneToOneLink<WarehouseSublevelCodes, BinLocationFields>> = [
    WarehouseSublevelCodes.WAREHOUSE_SUBLEVEL,
    WarehouseSublevelCodes.CODE,
    WarehouseSublevelCodes.DESCRIPTION,
    WarehouseSublevelCodes.ABS_ENTRY,
    WarehouseSublevelCodes.BIN_LOCATION_FIELD
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WarehouseSublevelCodes> = new AllFields('*', WarehouseSublevelCodes);
  /**
   * All key fields of the WarehouseSublevelCodes entity.
   */
  export const _keyFields: Array<Field<WarehouseSublevelCodes>> = [WarehouseSublevelCodes.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property WarehouseSublevelCodes.
   */
  export const _keys: { [keys: string]: Field<WarehouseSublevelCodes> } = WarehouseSublevelCodes._keyFields.reduce((acc: { [keys: string]: Field<WarehouseSublevelCodes> }, field: Field<WarehouseSublevelCodes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
