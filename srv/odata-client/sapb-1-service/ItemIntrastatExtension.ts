/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ItemIntrastatExtension
 */
export interface ItemIntrastatExtension {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Commodity Code.
   * @nullable
   */
  commodityCode?: number;
  /**
   * Supplementary Unit.
   * @nullable
   */
  supplementaryUnit?: number;
  /**
   * Factor Of Supplementary Unit.
   * @nullable
   */
  factorOfSupplementaryUnit?: number;
  /**
   * Import Region State.
   * @nullable
   */
  importRegionState?: number;
  /**
   * Export Region State.
   * @nullable
   */
  exportRegionState?: number;
  /**
   * Import Nature Of Transaction.
   * @nullable
   */
  importNatureOfTransaction?: number;
  /**
   * Export Nature Of Transaction.
   * @nullable
   */
  exportNatureOfTransaction?: number;
  /**
   * Import Statistical Procedure.
   * @nullable
   */
  importStatisticalProcedure?: number;
  /**
   * Export Statistical Procedure.
   * @nullable
   */
  exportStatisticalProcedure?: number;
  /**
   * Country Of Origin.
   * @nullable
   */
  countryOfOrigin?: string;
  /**
   * Service Code.
   * @nullable
   */
  serviceCode?: number;
  /**
   * Import Region Country.
   * @nullable
   */
  importRegionCountry?: string;
  /**
   * Export Region Country.
   * @nullable
   */
  exportRegionCountry?: string;
  /**
   * Statistical Code.
   * @nullable
   */
  statisticalCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemIntrastatExtension.build]] instead.
 */
export function createItemIntrastatExtension(json: any): ItemIntrastatExtension {
  return ItemIntrastatExtension.build(json);
}

/**
 * ItemIntrastatExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemIntrastatExtensionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ItemIntrastatExtension.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[ItemIntrastatExtension.commodityCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commodityCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CommodityCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemIntrastatExtension.supplementaryUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  supplementaryUnit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SupplementaryUnit', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemIntrastatExtension.factorOfSupplementaryUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factorOfSupplementaryUnit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FactorOfSupplementaryUnit', this, 'Edm.Double');
  /**
   * Representation of the [[ItemIntrastatExtension.importRegionState]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importRegionState: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ImportRegionState', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemIntrastatExtension.exportRegionState]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportRegionState: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExportRegionState', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemIntrastatExtension.importNatureOfTransaction]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importNatureOfTransaction: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ImportNatureOfTransaction', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemIntrastatExtension.exportNatureOfTransaction]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportNatureOfTransaction: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExportNatureOfTransaction', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemIntrastatExtension.importStatisticalProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importStatisticalProcedure: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ImportStatisticalProcedure', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemIntrastatExtension.exportStatisticalProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportStatisticalProcedure: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExportStatisticalProcedure', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemIntrastatExtension.countryOfOrigin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countryOfOrigin: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CountryOfOrigin', this, 'Edm.String');
  /**
   * Representation of the [[ItemIntrastatExtension.serviceCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ServiceCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemIntrastatExtension.importRegionCountry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importRegionCountry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ImportRegionCountry', this, 'Edm.String');
  /**
   * Representation of the [[ItemIntrastatExtension.exportRegionCountry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportRegionCountry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExportRegionCountry', this, 'Edm.String');
  /**
   * Representation of the [[ItemIntrastatExtension.statisticalCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statisticalCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StatisticalCode', this, 'Edm.String');
}

export namespace ItemIntrastatExtension {
  export function build(json: { [keys: string]: FieldType }): ItemIntrastatExtension {
    return createComplexType(json, {
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      CommodityCode: (commodityCode: number) => ({ commodityCode: edmToTs(commodityCode, 'Edm.Int32') }),
      SupplementaryUnit: (supplementaryUnit: number) => ({ supplementaryUnit: edmToTs(supplementaryUnit, 'Edm.Int32') }),
      FactorOfSupplementaryUnit: (factorOfSupplementaryUnit: number) => ({ factorOfSupplementaryUnit: edmToTs(factorOfSupplementaryUnit, 'Edm.Double') }),
      ImportRegionState: (importRegionState: number) => ({ importRegionState: edmToTs(importRegionState, 'Edm.Int32') }),
      ExportRegionState: (exportRegionState: number) => ({ exportRegionState: edmToTs(exportRegionState, 'Edm.Int32') }),
      ImportNatureOfTransaction: (importNatureOfTransaction: number) => ({ importNatureOfTransaction: edmToTs(importNatureOfTransaction, 'Edm.Int32') }),
      ExportNatureOfTransaction: (exportNatureOfTransaction: number) => ({ exportNatureOfTransaction: edmToTs(exportNatureOfTransaction, 'Edm.Int32') }),
      ImportStatisticalProcedure: (importStatisticalProcedure: number) => ({ importStatisticalProcedure: edmToTs(importStatisticalProcedure, 'Edm.Int32') }),
      ExportStatisticalProcedure: (exportStatisticalProcedure: number) => ({ exportStatisticalProcedure: edmToTs(exportStatisticalProcedure, 'Edm.Int32') }),
      CountryOfOrigin: (countryOfOrigin: string) => ({ countryOfOrigin: edmToTs(countryOfOrigin, 'Edm.String') }),
      ServiceCode: (serviceCode: number) => ({ serviceCode: edmToTs(serviceCode, 'Edm.Int32') }),
      ImportRegionCountry: (importRegionCountry: string) => ({ importRegionCountry: edmToTs(importRegionCountry, 'Edm.String') }),
      ExportRegionCountry: (exportRegionCountry: string) => ({ exportRegionCountry: edmToTs(exportRegionCountry, 'Edm.String') }),
      StatisticalCode: (statisticalCode: string) => ({ statisticalCode: edmToTs(statisticalCode, 'Edm.String') })
    });
  }
}
