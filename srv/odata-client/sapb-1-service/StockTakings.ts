/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { StockTakingsRequestBuilder } from './StockTakingsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "StockTakings" of service "SAPB1".
 */
export class StockTakings extends EntityV4 implements StockTakingsType {
  /**
   * Technical entity name for StockTakings.
   */
  static _entityName = 'StockTakings';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
  /**
   * Counted.
   * @nullable
   */
  counted?: number;
  /**
   * One-to-one navigation property to the [[Items]] entity.
   */
  item!: Items;
  /**
   * One-to-one navigation property to the [[Warehouses]] entity.
   */
  warehouse!: Warehouses;

  /**
   * Returns an entity builder to construct instances of `StockTakings`.
   * @returns A builder that constructs instances of entity type `StockTakings`.
   */
  static builder(): EntityBuilderType<StockTakings, StockTakingsType> {
    return EntityV4.entityBuilder(StockTakings);
  }

  /**
   * Returns a request builder to construct requests for operations on the `StockTakings` entity type.
   * @returns A `StockTakings` request builder.
   */
  static requestBuilder(): StockTakingsRequestBuilder {
    return new StockTakingsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `StockTakings`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `StockTakings`.
   */
  static customField(fieldName: string): CustomFieldV4<StockTakings> {
    return EntityV4.customFieldSelector(fieldName, StockTakings);
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
import { Warehouses, WarehousesType } from './Warehouses';

export interface StockTakingsType {
  itemCode?: string | null;
  warehouseCode?: string | null;
  counted?: number | null;
  item: ItemsType;
  warehouse: WarehousesType;
}

export namespace StockTakings {
  /**
   * Static representation of the [[itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_CODE: StringField<StockTakings> = new StringField('ItemCode', StockTakings, 'Edm.String');
  /**
   * Static representation of the [[warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_CODE: StringField<StockTakings> = new StringField('WarehouseCode', StockTakings, 'Edm.String');
  /**
   * Static representation of the [[counted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTED: NumberField<StockTakings> = new NumberField('Counted', StockTakings, 'Edm.Double');
  /**
   * Static representation of the one-to-one navigation property [[item]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM: OneToOneLink<StockTakings, Items> = new OneToOneLink('Item', StockTakings, Items);
  /**
   * Static representation of the one-to-one navigation property [[warehouse]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE: OneToOneLink<StockTakings, Warehouses> = new OneToOneLink('Warehouse', StockTakings, Warehouses);
  /**
   * All fields of the StockTakings entity.
   */
  export const _allFields: Array<StringField<StockTakings> | NumberField<StockTakings> | OneToOneLink<StockTakings, Items> | OneToOneLink<StockTakings, Warehouses>> = [
    StockTakings.ITEM_CODE,
    StockTakings.WAREHOUSE_CODE,
    StockTakings.COUNTED,
    StockTakings.ITEM,
    StockTakings.WAREHOUSE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<StockTakings> = new AllFields('*', StockTakings);
  /**
   * All key fields of the StockTakings entity.
   */
  export const _keyFields: Array<Field<StockTakings>> = [StockTakings.ITEM_CODE, StockTakings.WAREHOUSE_CODE];
  /**
   * Mapping of all key field names to the respective static field property StockTakings.
   */
  export const _keys: { [keys: string]: Field<StockTakings> } = StockTakings._keyFields.reduce((acc: { [keys: string]: Field<StockTakings> }, field: Field<StockTakings>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
