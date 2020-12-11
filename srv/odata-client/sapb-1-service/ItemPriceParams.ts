/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ItemPriceParams
 */
export interface ItemPriceParams {
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
  /**
   * Blanket Agreement Number.
   * @nullable
   */
  blanketAgreementNumber?: number;
  /**
   * Blanket Agreement Line.
   * @nullable
   */
  blanketAgreementLine?: number;
  /**
   * Uo M Quantity.
   * @nullable
   */
  uoMQuantity?: number;
  /**
   * Inventory Quantity.
   * @nullable
   */
  inventoryQuantity?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Price List.
   * @nullable
   */
  priceList?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemPriceParams.build]] instead.
 */
export function createItemPriceParams(json: any): ItemPriceParams {
  return ItemPriceParams.build(json);
}

/**
 * ItemPriceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemPriceParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemPriceParams> {
  /**
   * Representation of the [[ItemPriceParams.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemPriceParams.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemPriceParams.blanketAgreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blanketAgreementNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BlanketAgreementNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemPriceParams.blanketAgreementLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blanketAgreementLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BlanketAgreementLine', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemPriceParams.uoMQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPriceParams.inventoryQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InventoryQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPriceParams.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[ItemPriceParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[ItemPriceParams.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');
  /**
   * Representation of the [[ItemPriceParams.priceList]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceList: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceList', this, 'Edm.Int32');

  /**
   * Creates an instance of ItemPriceParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemPriceParams);
  }
}

export namespace ItemPriceParams {
  /**
   * Metadata information on all properties of the `ItemPriceParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemPriceParams>[] = [{
    originalName: 'Date',
    name: 'date',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'UoMEntry',
    name: 'uoMEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BlanketAgreementNumber',
    name: 'blanketAgreementNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BlanketAgreementLine',
    name: 'blanketAgreementLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UoMQuantity',
    name: 'uoMQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'InventoryQuantity',
    name: 'inventoryQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Currency',
    name: 'currency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CardCode',
    name: 'cardCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PriceList',
    name: 'priceList',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemPriceParams {
    return deserializeComplexTypeV4(json, ItemPriceParams);
  }
}
