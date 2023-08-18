/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UoMPrice } from './UoMPrice';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * ItemPrice
 */
export interface ItemPrice<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Price List.
   * @nullable
   */
  priceList?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Price.
   * @nullable
   */
  price?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Additional Price 1.
   * @nullable
   */
  additionalPrice1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Additional Currency 1.
   * @nullable
   */
  additionalCurrency1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Additional Price 2.
   * @nullable
   */
  additionalPrice2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Additional Currency 2.
   * @nullable
   */
  additionalCurrency2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Base Price List.
   * @nullable
   */
  basePriceList?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Factor.
   * @nullable
   */
  factor?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Uo M Prices.
   * @nullable
   */
  uoMPrices?: DeserializedType<DeSerializersT, 'SAPB1.UoMPrice'>;
}

/**
 * ItemPriceField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemPriceField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ItemPrice,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ItemPrice.priceList} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceList: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PriceList', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemPrice.price} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Price', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemPrice.currency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true);
  /**
   * Representation of the {@link ItemPrice.additionalPrice1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalPrice1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalPrice1',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ItemPrice.additionalCurrency1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalCurrency1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalCurrency1',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemPrice.additionalPrice2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalPrice2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalPrice2',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ItemPrice.additionalCurrency2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalCurrency2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalCurrency2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemPrice.basePriceList} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  basePriceList: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BasePriceList', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemPrice.factor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemPrice.uoMPrices} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMPrices: CollectionField<EntityT, DeSerializersT, UoMPrice, true, false> =
    this._fieldBuilder.buildCollectionField('UoMPrices', UoMPrice, true);

  /**
   * Creates an instance of ItemPriceField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ItemPrice, fieldOptions);
  }
}

export namespace ItemPrice {
  /**
   * Metadata information on all properties of the `ItemPrice` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemPrice>[] = [
    {
      originalName: 'PriceList',
      name: 'priceList',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Price',
      name: 'price',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Currency',
      name: 'currency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AdditionalPrice1',
      name: 'additionalPrice1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AdditionalCurrency1',
      name: 'additionalCurrency1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AdditionalPrice2',
      name: 'additionalPrice2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AdditionalCurrency2',
      name: 'additionalCurrency2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BasePriceList',
      name: 'basePriceList',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Factor',
      name: 'factor',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'UoMPrices',
      name: 'uoMPrices',
      type: UoMPrice,
      isCollection: true
    }
  ];
}
