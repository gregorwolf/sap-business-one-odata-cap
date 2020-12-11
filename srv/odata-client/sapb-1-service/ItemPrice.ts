/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UoMPrice } from './UoMPrice';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ItemPrice
 */
export interface ItemPrice {
  /**
   * Price List.
   * @nullable
   */
  priceList?: number;
  /**
   * Price.
   * @nullable
   */
  price?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Additional Price 1.
   * @nullable
   */
  additionalPrice1?: number;
  /**
   * Additional Currency 1.
   * @nullable
   */
  additionalCurrency1?: string;
  /**
   * Additional Price 2.
   * @nullable
   */
  additionalPrice2?: number;
  /**
   * Additional Currency 2.
   * @nullable
   */
  additionalCurrency2?: string;
  /**
   * Base Price List.
   * @nullable
   */
  basePriceList?: number;
  /**
   * Factor.
   * @nullable
   */
  factor?: number;
  /**
   * Uo M Prices.
   * @nullable
   */
  uoMPrices?: UoMPrice[];
}

/**
 * @deprecated Since v1.6.0. Use [[ItemPrice.build]] instead.
 */
export function createItemPrice(json: any): ItemPrice {
  return ItemPrice.build(json);
}

/**
 * ItemPriceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemPriceField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemPrice> {
  /**
   * Representation of the [[ItemPrice.priceList]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceList: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceList', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemPrice.price]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Price', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPrice.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[ItemPrice.additionalPrice1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalPrice1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalPrice1', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPrice.additionalCurrency1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalCurrency1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AdditionalCurrency1', this, 'Edm.String');
  /**
   * Representation of the [[ItemPrice.additionalPrice2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalPrice2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalPrice2', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPrice.additionalCurrency2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalCurrency2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AdditionalCurrency2', this, 'Edm.String');
  /**
   * Representation of the [[ItemPrice.basePriceList]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  basePriceList: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BasePriceList', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemPrice.factor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPrice.uoMPrices]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMPrices: CollectionField<EntityT, UoMPrice> = new CollectionField('UoMPrices', this, UoMPrice);

  /**
   * Creates an instance of ItemPriceField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemPrice);
  }
}

export namespace ItemPrice {
  /**
   * Metadata information on all properties of the `ItemPrice` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemPrice>[] = [{
    originalName: 'PriceList',
    name: 'priceList',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Price',
    name: 'price',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Currency',
    name: 'currency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AdditionalPrice1',
    name: 'additionalPrice1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AdditionalCurrency1',
    name: 'additionalCurrency1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AdditionalPrice2',
    name: 'additionalPrice2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AdditionalCurrency2',
    name: 'additionalCurrency2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BasePriceList',
    name: 'basePriceList',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Factor',
    name: 'factor',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UoMPrices',
    name: 'uoMPrices',
    type: UoMPrice,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | UoMPrice }): ItemPrice {
    return deserializeComplexTypeV4(json, ItemPrice);
  }
}
