/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * FixedAssetEndBalance
 */
export interface FixedAssetEndBalance {
  /**
   * Historical Apc.
   * @nullable
   */
  historicalApc?: number;
  /**
   * Acquisition Cost.
   * @nullable
   */
  acquisitionCost?: number;
  /**
   * Net Book Value.
   * @nullable
   */
  netBookValue?: number;
  /**
   * Historical Nbv.
   * @nullable
   */
  historicalNbv?: number;
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
   * Salvage Value.
   * @nullable
   */
  salvageValue?: number;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[FixedAssetEndBalance.build]] instead.
 */
export function createFixedAssetEndBalance(json: any): FixedAssetEndBalance {
  return FixedAssetEndBalance.build(json);
}

/**
 * FixedAssetEndBalanceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FixedAssetEndBalanceField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FixedAssetEndBalance> {
  /**
   * Representation of the [[FixedAssetEndBalance.historicalApc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  historicalApc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('HistoricalAPC', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetEndBalance.acquisitionCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  acquisitionCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AcquisitionCost', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetEndBalance.netBookValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netBookValue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NetBookValue', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetEndBalance.historicalNbv]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  historicalNbv: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('HistoricalNBV', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetEndBalance.ordinaryDepreciationValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ordinaryDepreciationValue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OrdinaryDepreciationValue', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetEndBalance.unplanedDepreciationValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unplanedDepreciationValue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnplanedDepreciationValue', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetEndBalance.specialDepreciationValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialDepreciationValue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SpecialDepreciationValue', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetEndBalance.writeUp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  writeUp: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WriteUp', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetEndBalance.salvageValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salvageValue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SalvageValue', this, 'Edm.Double');
  /**
   * Representation of the [[FixedAssetEndBalance.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');

  /**
   * Creates an instance of FixedAssetEndBalanceField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, FixedAssetEndBalance);
  }
}

export namespace FixedAssetEndBalance {
  /**
   * Metadata information on all properties of the `FixedAssetEndBalance` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FixedAssetEndBalance>[] = [{
    originalName: 'HistoricalAPC',
    name: 'historicalApc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AcquisitionCost',
    name: 'acquisitionCost',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'NetBookValue',
    name: 'netBookValue',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'HistoricalNBV',
    name: 'historicalNbv',
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
    originalName: 'SalvageValue',
    name: 'salvageValue',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): FixedAssetEndBalance {
    return deserializeComplexTypeV4(json, FixedAssetEndBalance);
  }
}
