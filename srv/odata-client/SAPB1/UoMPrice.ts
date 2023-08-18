/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * UoMPrice
 */
export interface UoMPrice<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Price List.
   * @nullable
   */
  priceList?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Reduce By.
   * @nullable
   */
  reduceBy?: DeserializedType<DeSerializersT, 'Edm.Double'>;
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
   * Additional Reduce By 1.
   * @nullable
   */
  additionalReduceBy1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
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
   * Additional Reduce By 2.
   * @nullable
   */
  additionalReduceBy2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
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
   * Auto.
   * @nullable
   */
  auto?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * UoMPriceField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UoMPriceField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UoMPrice,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UoMPrice.priceList} property for query construction.
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
   * Representation of the {@link UoMPrice.uoMEntry} property for query construction.
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
   * Representation of the {@link UoMPrice.reduceBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reduceBy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ReduceBy', 'Edm.Double', true);
  /**
   * Representation of the {@link UoMPrice.price} property for query construction.
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
   * Representation of the {@link UoMPrice.currency} property for query construction.
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
   * Representation of the {@link UoMPrice.additionalReduceBy1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalReduceBy1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalReduceBy1',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link UoMPrice.additionalPrice1} property for query construction.
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
   * Representation of the {@link UoMPrice.additionalCurrency1} property for query construction.
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
   * Representation of the {@link UoMPrice.additionalReduceBy2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalReduceBy2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalReduceBy2',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link UoMPrice.additionalPrice2} property for query construction.
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
   * Representation of the {@link UoMPrice.additionalCurrency2} property for query construction.
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
   * Representation of the {@link UoMPrice.auto} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  auto: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Auto', BoYesNoEnum, true);

  /**
   * Creates an instance of UoMPriceField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, UoMPrice, fieldOptions);
  }
}

export namespace UoMPrice {
  /**
   * Metadata information on all properties of the `UoMPrice` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UoMPrice>[] = [
    {
      originalName: 'PriceList',
      name: 'priceList',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UoMEntry',
      name: 'uoMEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ReduceBy',
      name: 'reduceBy',
      type: 'Edm.Double',
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
      originalName: 'AdditionalReduceBy1',
      name: 'additionalReduceBy1',
      type: 'Edm.Double',
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
      originalName: 'AdditionalReduceBy2',
      name: 'additionalReduceBy2',
      type: 'Edm.Double',
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
      originalName: 'Auto',
      name: 'auto',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
