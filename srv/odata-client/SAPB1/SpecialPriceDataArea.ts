/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpecialPriceQuantityArea } from './SpecialPriceQuantityArea';
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
 * SpecialPriceDataArea
 */
export interface SpecialPriceDataArea<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Price Currency.
   * @nullable
   */
  priceCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Auto Update.
   * @nullable
   */
  autoUpdate?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Dateto.
   * @nullable
   */
  dateto?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Discount.
   * @nullable
   */
  discount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Special Price.
   * @nullable
   */
  specialPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Date From.
   * @nullable
   */
  dateFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Price List No.
   * @nullable
   */
  priceListNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Special Price Quantity Areas.
   * @nullable
   */
  specialPriceQuantityAreas?: DeserializedType<
    DeSerializersT,
    'SAPB1.SpecialPriceQuantityArea'
  >;
}

/**
 * SpecialPriceDataAreaField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SpecialPriceDataAreaField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SpecialPriceDataArea,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SpecialPriceDataArea.priceCurrency} property for query construction.
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
   * Representation of the {@link SpecialPriceDataArea.autoUpdate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  autoUpdate: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('AutoUpdate', BoYesNoEnum, true);
  /**
   * Representation of the {@link SpecialPriceDataArea.dateto} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateto: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'Dateto',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link SpecialPriceDataArea.discount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Discount', 'Edm.Double', true);
  /**
   * Representation of the {@link SpecialPriceDataArea.specialPrice} property for query construction.
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
   * Representation of the {@link SpecialPriceDataArea.dateFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DateFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link SpecialPriceDataArea.bpCode} property for query construction.
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
   * Representation of the {@link SpecialPriceDataArea.priceListNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceListNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PriceListNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link SpecialPriceDataArea.itemNo} property for query construction.
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
   * Representation of the {@link SpecialPriceDataArea.rowNumber} property for query construction.
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
   * Representation of the {@link SpecialPriceDataArea.specialPriceQuantityAreas} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialPriceQuantityAreas: CollectionField<
    EntityT,
    DeSerializersT,
    SpecialPriceQuantityArea,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'SpecialPriceQuantityAreas',
    SpecialPriceQuantityArea,
    true
  );

  /**
   * Creates an instance of SpecialPriceDataAreaField.
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
      SpecialPriceDataArea,
      fieldOptions
    );
  }
}

export namespace SpecialPriceDataArea {
  /**
   * Metadata information on all properties of the `SpecialPriceDataArea` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SpecialPriceDataArea>[] = [
    {
      originalName: 'PriceCurrency',
      name: 'priceCurrency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AutoUpdate',
      name: 'autoUpdate',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Dateto',
      name: 'dateto',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Discount',
      name: 'discount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SpecialPrice',
      name: 'specialPrice',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DateFrom',
      name: 'dateFrom',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'BPCode',
      name: 'bpCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PriceListNo',
      name: 'priceListNo',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ItemNo',
      name: 'itemNo',
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
      originalName: 'SpecialPriceQuantityAreas',
      name: 'specialPriceQuantityAreas',
      type: SpecialPriceQuantityArea,
      isCollection: true
    }
  ];
}
