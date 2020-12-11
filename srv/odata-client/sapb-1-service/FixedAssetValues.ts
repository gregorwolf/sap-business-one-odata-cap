/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetTransactionTypeEnum } from './AssetTransactionTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * FixedAssetValues
 */
export interface FixedAssetValues {
  /**
   * Transaction Type.
   * @nullable
   */
  transactionType?: AssetTransactionTypeEnum;
  /**
   * Acquisition Cost.
   * @nullable
   */
  acquisitionCost?: number;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Depreciation Value.
   * @nullable
   */
  depreciationValue?: number;
  /**
   * Net Book Value.
   * @nullable
   */
  netBookValue?: number;
  /**
   * Ordinary Depreciation Value.
   * @nullable
   */
  ordinaryDepreciationValue?: number;
  /**
   * Unplaned Depreciation Value.
   * @nullable
   */
  unplanedDepreciationValue?: number;
  /**
   * Special Depreciation Value.
   * @nullable
   */
  specialDepreciationValue?: number;
  /**
   * Write Up.
   * @nullable
   */
  writeUp?: number;
  /**
   * Appreciation.
   * @nullable
   */
  appreciation?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[FixedAssetValues.build]] instead.
 */
export function createFixedAssetValues(json: any): FixedAssetValues {
  return FixedAssetValues.build(json);
}

/**
 * FixedAssetValuesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FixedAssetValuesField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FixedAssetValues> {
  /**
   * Representation of the [[FixedAssetValues.transactionType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('TransactionType', this);
  /**
   * Representation of the [[FixedAssetValues.acquisitionCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  acquisitionCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AcquisitionCost', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetValues.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetValues.depreciationValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationValue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DepreciationValue', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetValues.netBookValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netBookValue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NetBookValue', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetValues.ordinaryDepreciationValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ordinaryDepreciationValue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OrdinaryDepreciationValue', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetValues.unplanedDepreciationValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unplanedDepreciationValue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnplanedDepreciationValue', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetValues.specialDepreciationValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialDepreciationValue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SpecialDepreciationValue', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetValues.writeUp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  writeUp: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WriteUp', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetValues.appreciation]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appreciation: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Appreciation', this, 'Edm.Double');

  /**
   * Creates an instance of FixedAssetValuesField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, FixedAssetValues);
  }
}

export namespace FixedAssetValues {
  /**
   * Metadata information on all properties of the `FixedAssetValues` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FixedAssetValues>[] = [{
    originalName: 'TransactionType',
    name: 'transactionType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AcquisitionCost',
    name: 'acquisitionCost',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DepreciationValue',
    name: 'depreciationValue',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'NetBookValue',
    name: 'netBookValue',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'OrdinaryDepreciationValue',
    name: 'ordinaryDepreciationValue',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UnplanedDepreciationValue',
    name: 'unplanedDepreciationValue',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SpecialDepreciationValue',
    name: 'specialDepreciationValue',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WriteUp',
    name: 'writeUp',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Appreciation',
    name: 'appreciation',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): FixedAssetValues {
    return deserializeComplexTypeV4(json, FixedAssetValues);
  }
}
