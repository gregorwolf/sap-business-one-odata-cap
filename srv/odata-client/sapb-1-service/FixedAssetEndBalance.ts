/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class FixedAssetEndBalanceField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace FixedAssetEndBalance {
  export function build(json: { [keys: string]: FieldType }): FixedAssetEndBalance {
    return createComplexType(json, {
      HistoricalAPC: (historicalApc: number) => ({ historicalApc: edmToTs(historicalApc, 'Edm.Double') }),
      AcquisitionCost: (acquisitionCost: number) => ({ acquisitionCost: edmToTs(acquisitionCost, 'Edm.Double') }),
      NetBookValue: (netBookValue: number) => ({ netBookValue: edmToTs(netBookValue, 'Edm.Double') }),
      HistoricalNBV: (historicalNbv: number) => ({ historicalNbv: edmToTs(historicalNbv, 'Edm.Double') }),
      OrdinaryDepreciationValue: (ordinaryDepreciationValue: number) => ({ ordinaryDepreciationValue: edmToTs(ordinaryDepreciationValue, 'Edm.Double') }),
      UnplanedDepreciationValue: (unplanedDepreciationValue: number) => ({ unplanedDepreciationValue: edmToTs(unplanedDepreciationValue, 'Edm.Double') }),
      SpecialDepreciationValue: (specialDepreciationValue: number) => ({ specialDepreciationValue: edmToTs(specialDepreciationValue, 'Edm.Double') }),
      WriteUp: (writeUp: number) => ({ writeUp: edmToTs(writeUp, 'Edm.Double') }),
      SalvageValue: (salvageValue: number) => ({ salvageValue: edmToTs(salvageValue, 'Edm.Double') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') })
    });
  }
}
