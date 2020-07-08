/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * FixedAssetValues
 */
export interface FixedAssetValues {
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
export class FixedAssetValuesField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace FixedAssetValues {
  export function build(json: { [keys: string]: FieldType }): FixedAssetValues {
    return createComplexType(json, {
      AcquisitionCost: (acquisitionCost: number) => ({ acquisitionCost: edmToTs(acquisitionCost, 'Edm.Double') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      DepreciationValue: (depreciationValue: number) => ({ depreciationValue: edmToTs(depreciationValue, 'Edm.Double') }),
      NetBookValue: (netBookValue: number) => ({ netBookValue: edmToTs(netBookValue, 'Edm.Double') }),
      OrdinaryDepreciationValue: (ordinaryDepreciationValue: number) => ({ ordinaryDepreciationValue: edmToTs(ordinaryDepreciationValue, 'Edm.Double') }),
      UnplanedDepreciationValue: (unplanedDepreciationValue: number) => ({ unplanedDepreciationValue: edmToTs(unplanedDepreciationValue, 'Edm.Double') }),
      SpecialDepreciationValue: (specialDepreciationValue: number) => ({ specialDepreciationValue: edmToTs(specialDepreciationValue, 'Edm.Double') }),
      WriteUp: (writeUp: number) => ({ writeUp: edmToTs(writeUp, 'Edm.Double') }),
      Appreciation: (appreciation: number) => ({ appreciation: edmToTs(appreciation, 'Edm.Double') })
    });
  }
}
