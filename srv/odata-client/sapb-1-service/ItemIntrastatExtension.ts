/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoDocumentTypes } from './BoDocumentTypes';
import { BoServiceSupplyMethods } from './BoServiceSupplyMethods';
import { BoServicePaymentMethods } from './BoServicePaymentMethods';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Type.
   * @nullable
   */
  type?: BoDocumentTypes;
  /**
   * Service Supply Method.
   * @nullable
   */
  serviceSupplyMethod?: BoServiceSupplyMethods;
  /**
   * Service Payment Method.
   * @nullable
   */
  servicePaymentMethod?: BoServicePaymentMethods;
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
   * Use Weight In Calculation.
   * @nullable
   */
  useWeightInCalculation?: BoYesNoEnum;
  /**
   * Intrastat Relevant.
   * @nullable
   */
  intrastatRelevant?: BoYesNoEnum;
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
export class ItemIntrastatExtensionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemIntrastatExtension> {
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
   * Representation of the [[ItemIntrastatExtension.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Type', this);
  /**
   * Representation of the [[ItemIntrastatExtension.serviceSupplyMethod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceSupplyMethod: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ServiceSupplyMethod', this);
  /**
   * Representation of the [[ItemIntrastatExtension.servicePaymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  servicePaymentMethod: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ServicePaymentMethod', this);
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
   * Representation of the [[ItemIntrastatExtension.useWeightInCalculation]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useWeightInCalculation: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('UseWeightInCalculation', this);
  /**
   * Representation of the [[ItemIntrastatExtension.intrastatRelevant]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  intrastatRelevant: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IntrastatRelevant', this);
  /**
   * Representation of the [[ItemIntrastatExtension.statisticalCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statisticalCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StatisticalCode', this, 'Edm.String');

  /**
   * Creates an instance of ItemIntrastatExtensionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemIntrastatExtension);
  }
}

export namespace ItemIntrastatExtension {
  /**
   * Metadata information on all properties of the `ItemIntrastatExtension` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemIntrastatExtension>[] = [{
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CommodityCode',
    name: 'commodityCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SupplementaryUnit',
    name: 'supplementaryUnit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FactorOfSupplementaryUnit',
    name: 'factorOfSupplementaryUnit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ImportRegionState',
    name: 'importRegionState',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ExportRegionState',
    name: 'exportRegionState',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ImportNatureOfTransaction',
    name: 'importNatureOfTransaction',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ExportNatureOfTransaction',
    name: 'exportNatureOfTransaction',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ImportStatisticalProcedure',
    name: 'importStatisticalProcedure',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ExportStatisticalProcedure',
    name: 'exportStatisticalProcedure',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CountryOfOrigin',
    name: 'countryOfOrigin',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ServiceCode',
    name: 'serviceCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ServiceSupplyMethod',
    name: 'serviceSupplyMethod',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ServicePaymentMethod',
    name: 'servicePaymentMethod',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ImportRegionCountry',
    name: 'importRegionCountry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ExportRegionCountry',
    name: 'exportRegionCountry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UseWeightInCalculation',
    name: 'useWeightInCalculation',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'IntrastatRelevant',
    name: 'intrastatRelevant',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'StatisticalCode',
    name: 'statisticalCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemIntrastatExtension {
    return deserializeComplexTypeV4(json, ItemIntrastatExtension);
  }
}
