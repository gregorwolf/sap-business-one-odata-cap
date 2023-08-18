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
 * FixedAssetEndBalance
 */
export interface FixedAssetEndBalance<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Historical Apc.
   * @nullable
   */
  historicalApc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Acquisition Cost.
   * @nullable
   */
  acquisitionCost?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Net Book Value.
   * @nullable
   */
  netBookValue?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Historical Nbv.
   * @nullable
   */
  historicalNbv?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Ordinary Depreciation Value.
   * @nullable
   */
  ordinaryDepreciationValue?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Unplaned Depreciation Value.
   * @nullable
   */
  unplanedDepreciationValue?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Special Depreciation Value.
   * @nullable
   */
  specialDepreciationValue?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Write Up.
   * @nullable
   */
  writeUp?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Salvage Value.
   * @nullable
   */
  salvageValue?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * FixedAssetEndBalanceField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class FixedAssetEndBalanceField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  FixedAssetEndBalance,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link FixedAssetEndBalance.historicalApc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  historicalApc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('HistoricalAPC', 'Edm.Double', true);
  /**
   * Representation of the {@link FixedAssetEndBalance.acquisitionCost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  acquisitionCost: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AcquisitionCost',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link FixedAssetEndBalance.netBookValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netBookValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NetBookValue', 'Edm.Double', true);
  /**
   * Representation of the {@link FixedAssetEndBalance.historicalNbv} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  historicalNbv: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('HistoricalNBV', 'Edm.Double', true);
  /**
   * Representation of the {@link FixedAssetEndBalance.ordinaryDepreciationValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ordinaryDepreciationValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OrdinaryDepreciationValue',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link FixedAssetEndBalance.unplanedDepreciationValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unplanedDepreciationValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UnplanedDepreciationValue',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link FixedAssetEndBalance.specialDepreciationValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialDepreciationValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SpecialDepreciationValue',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link FixedAssetEndBalance.writeUp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  writeUp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WriteUp', 'Edm.Double', true);
  /**
   * Representation of the {@link FixedAssetEndBalance.salvageValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salvageValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SalvageValue', 'Edm.Double', true);
  /**
   * Representation of the {@link FixedAssetEndBalance.quantity} property for query construction.
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
   * Creates an instance of FixedAssetEndBalanceField.
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
      FixedAssetEndBalance,
      fieldOptions
    );
  }
}

export namespace FixedAssetEndBalance {
  /**
   * Metadata information on all properties of the `FixedAssetEndBalance` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FixedAssetEndBalance>[] = [
    {
      originalName: 'HistoricalAPC',
      name: 'historicalApc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AcquisitionCost',
      name: 'acquisitionCost',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'NetBookValue',
      name: 'netBookValue',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'HistoricalNBV',
      name: 'historicalNbv',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'OrdinaryDepreciationValue',
      name: 'ordinaryDepreciationValue',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'UnplanedDepreciationValue',
      name: 'unplanedDepreciationValue',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SpecialDepreciationValue',
      name: 'specialDepreciationValue',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WriteUp',
      name: 'writeUp',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SalvageValue',
      name: 'salvageValue',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Quantity',
      name: 'quantity',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
