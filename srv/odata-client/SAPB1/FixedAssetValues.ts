/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetTransactionTypeEnum } from './AssetTransactionTypeEnum';
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
 * FixedAssetValues
 */
export interface FixedAssetValues<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Transaction Type.
   * @nullable
   */
  transactionType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Acquisition Cost.
   * @nullable
   */
  acquisitionCost?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Depreciation Value.
   * @nullable
   */
  depreciationValue?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Net Book Value.
   * @nullable
   */
  netBookValue?: DeserializedType<DeSerializersT, 'Edm.Double'>;
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
   * Appreciation.
   * @nullable
   */
  appreciation?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * FixedAssetValuesField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class FixedAssetValuesField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  FixedAssetValues,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link FixedAssetValues.transactionType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionType: EnumField<
    EntityT,
    DeSerializersT,
    AssetTransactionTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'TransactionType',
    AssetTransactionTypeEnum,
    true
  );
  /**
   * Representation of the {@link FixedAssetValues.acquisitionCost} property for query construction.
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
   * Representation of the {@link FixedAssetValues.quantity} property for query construction.
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
   * Representation of the {@link FixedAssetValues.depreciationValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DepreciationValue',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link FixedAssetValues.netBookValue} property for query construction.
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
   * Representation of the {@link FixedAssetValues.ordinaryDepreciationValue} property for query construction.
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
   * Representation of the {@link FixedAssetValues.unplanedDepreciationValue} property for query construction.
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
   * Representation of the {@link FixedAssetValues.specialDepreciationValue} property for query construction.
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
   * Representation of the {@link FixedAssetValues.writeUp} property for query construction.
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
   * Representation of the {@link FixedAssetValues.appreciation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appreciation: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Appreciation', 'Edm.Double', true);

  /**
   * Creates an instance of FixedAssetValuesField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, FixedAssetValues, fieldOptions);
  }
}

export namespace FixedAssetValues {
  /**
   * Metadata information on all properties of the `FixedAssetValues` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FixedAssetValues>[] = [
    {
      originalName: 'TransactionType',
      name: 'transactionType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AcquisitionCost',
      name: 'acquisitionCost',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Quantity',
      name: 'quantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DepreciationValue',
      name: 'depreciationValue',
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
      originalName: 'Appreciation',
      name: 'appreciation',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
