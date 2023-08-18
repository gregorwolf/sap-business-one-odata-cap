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
 * SpecialPriceQuantityArea
 */
export interface SpecialPriceQuantityArea<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Spda Row Number.
   * @nullable
   */
  spdaRowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Special Price.
   * @nullable
   */
  specialPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Price Currency.
   * @nullable
   */
  priceCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Discountin.
   * @nullable
   */
  discountin?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * SpecialPriceQuantityAreaField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SpecialPriceQuantityAreaField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SpecialPriceQuantityArea,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SpecialPriceQuantityArea.quantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Double', true);
  /**
   * Representation of the {@link SpecialPriceQuantityArea.spdaRowNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  spdaRowNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SPDARowNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link SpecialPriceQuantityArea.specialPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SpecialPrice', 'Edm.Double', true);
  /**
   * Representation of the {@link SpecialPriceQuantityArea.itemNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemNo', 'Edm.String', true);
  /**
   * Representation of the {@link SpecialPriceQuantityArea.bpCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true);
  /**
   * Representation of the {@link SpecialPriceQuantityArea.rowNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link SpecialPriceQuantityArea.priceCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PriceCurrency', 'Edm.String', true);
  /**
   * Representation of the {@link SpecialPriceQuantityArea.discountin} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountin: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Discountin', 'Edm.Double', true);
  /**
   * Representation of the {@link SpecialPriceQuantityArea.uoMEntry} property for query construction.
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
   * Creates an instance of SpecialPriceQuantityAreaField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      SpecialPriceQuantityArea,
      fieldOptions
    );
  }
}

export namespace SpecialPriceQuantityArea {
  /**
   * Metadata information on all properties of the `SpecialPriceQuantityArea` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SpecialPriceQuantityArea>[] =
    [
      {
        originalName: 'Quantity',
        name: 'quantity',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'SPDARowNumber',
        name: 'spdaRowNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'SpecialPrice',
        name: 'specialPrice',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ItemNo',
        name: 'itemNo',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BPCode',
        name: 'bpCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'RowNumber',
        name: 'rowNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'PriceCurrency',
        name: 'priceCurrency',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Discountin',
        name: 'discountin',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'UoMEntry',
        name: 'uoMEntry',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
