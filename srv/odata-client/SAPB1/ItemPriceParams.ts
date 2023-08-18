/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * ItemPriceParams
 */
export interface ItemPriceParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Blanket Agreement Number.
   * @nullable
   */
  blanketAgreementNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Blanket Agreement Line.
   * @nullable
   */
  blanketAgreementLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Uo M Quantity.
   * @nullable
   */
  uoMQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Inventory Quantity.
   * @nullable
   */
  inventoryQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Price List.
   * @nullable
   */
  priceList?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ItemPriceParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemPriceParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ItemPriceParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ItemPriceParams.date} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Date', 'Edm.DateTimeOffset', true);
  /**
   * Representation of the {@link ItemPriceParams.uoMEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemPriceParams.blanketAgreementNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blanketAgreementNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BlanketAgreementNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ItemPriceParams.blanketAgreementLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blanketAgreementLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BlanketAgreementLine',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ItemPriceParams.uoMQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMQuantity', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemPriceParams.inventoryQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ItemPriceParams.currency} property for query construction.
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
   * Representation of the {@link ItemPriceParams.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link ItemPriceParams.cardCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CardCode', 'Edm.String', true);
  /**
   * Representation of the {@link ItemPriceParams.priceList} property for query construction.
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
   * Creates an instance of ItemPriceParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ItemPriceParams, fieldOptions);
  }
}

export namespace ItemPriceParams {
  /**
   * Metadata information on all properties of the `ItemPriceParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemPriceParams>[] = [
    {
      originalName: 'Date',
      name: 'date',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'UoMEntry',
      name: 'uoMEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BlanketAgreementNumber',
      name: 'blanketAgreementNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BlanketAgreementLine',
      name: 'blanketAgreementLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UoMQuantity',
      name: 'uoMQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'InventoryQuantity',
      name: 'inventoryQuantity',
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
      originalName: 'ItemCode',
      name: 'itemCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CardCode',
      name: 'cardCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PriceList',
      name: 'priceList',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
