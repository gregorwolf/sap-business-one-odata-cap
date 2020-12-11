/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LandedCostBaseDocumentTypeEnum } from './LandedCostBaseDocumentTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * LandedCostItemLine
 */
export interface LandedCostItemLine {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Base Document Type.
   * @nullable
   */
  baseDocumentType?: LandedCostBaseDocumentTypeEnum;
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: number;
  /**
   * Number.
   * @nullable
   */
  number?: string;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: string;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Base Document Price.
   * @nullable
   */
  baseDocumentPrice?: number;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
  /**
   * Projected Customs.
   * @nullable
   */
  projectedCustoms?: number;
  /**
   * Projected Customs Fc.
   * @nullable
   */
  projectedCustomsFc?: number;
  /**
   * Expenditure.
   * @nullable
   */
  expenditure?: number;
  /**
   * Expenditure Fc.
   * @nullable
   */
  expenditureFc?: number;
  /**
   * Warehouse Price.
   * @nullable
   */
  warehousePrice?: number;
  /**
   * Warehouse Price Fc.
   * @nullable
   */
  warehousePriceFc?: number;
  /**
   * Line Total.
   * @nullable
   */
  lineTotal?: number;
  /**
   * Line Total Fc.
   * @nullable
   */
  lineTotalFc?: number;
  /**
   * Volume.
   * @nullable
   */
  volume?: number;
  /**
   * Volume Uo M.
   * @nullable
   */
  volumeUoM?: number;
  /**
   * Weight 1.
   * @nullable
   */
  weight1?: number;
  /**
   * Weight 1 Unit Code.
   * @nullable
   */
  weight1UnitCode?: number;
  /**
   * Weight 2.
   * @nullable
   */
  weight2?: number;
  /**
   * Weight 2 Unit Code.
   * @nullable
   */
  weight2UnitCode?: number;
  /**
   * Vendor Code.
   * @nullable
   */
  vendorCode?: string;
  /**
   * Reference.
   * @nullable
   */
  reference?: string;
  /**
   * Factor Without Customs.
   * @nullable
   */
  factorWithoutCustoms?: number;
  /**
   * Factor With Customs.
   * @nullable
   */
  factorWithCustoms?: number;
  /**
   * Inventory Uo M.
   * @nullable
   */
  inventoryUoM?: string;
  /**
   * Block Number.
   * @nullable
   */
  blockNumber?: string;
  /**
   * Import Log.
   * @nullable
   */
  importLog?: string;
  /**
   * Original Warehouse.
   * @nullable
   */
  originalWarehouse?: string;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: string;
  /**
   * Release Number.
   * @nullable
   */
  releaseNumber?: number;
  /**
   * Variant Costs.
   * @nullable
   */
  variantCosts?: number;
  /**
   * Fix Costs.
   * @nullable
   */
  fixCosts?: number;
  /**
   * Variant Costs Fc.
   * @nullable
   */
  variantCostsFc?: number;
  /**
   * Fix Costs Fc.
   * @nullable
   */
  fixCostsFc?: number;
  /**
   * Customs.
   * @nullable
   */
  customs?: number;
  /**
   * Customs Fc.
   * @nullable
   */
  customsFc?: number;
  /**
   * Base Document Value Line Total.
   * @nullable
   */
  baseDocumentValueLineTotal?: number;
  /**
   * Base Document Value Line Total Fc.
   * @nullable
   */
  baseDocumentValueLineTotalFc?: number;
  /**
   * Allocated Unit Costs Line Total.
   * @nullable
   */
  allocatedUnitCostsLineTotal?: number;
  /**
   * Allocated Unit Costs Line Total Fc.
   * @nullable
   */
  allocatedUnitCostsLineTotalFc?: number;
  /**
   * Customs Value.
   * @nullable
   */
  customsValue?: number;
  /**
   * Customs Value Fc.
   * @nullable
   */
  customsValueFc?: number;
  /**
   * Total Costs.
   * @nullable
   */
  totalCosts?: number;
  /**
   * Total Costs Fc.
   * @nullable
   */
  totalCostsFc?: number;
  /**
   * Total Volume.
   * @nullable
   */
  totalVolume?: number;
  /**
   * Base Line.
   * @nullable
   */
  baseLine?: number;
  /**
   * Total Line Projected Customs.
   * @nullable
   */
  totalLineProjectedCustoms?: number;
  /**
   * Allocated Costs Line Total.
   * @nullable
   */
  allocatedCostsLineTotal?: number;
  /**
   * Fo Band Included Costs.
   * @nullable
   */
  foBandIncludedCosts?: number;
  /**
   * Fo Band Included Costs Fc.
   * @nullable
   */
  foBandIncludedCostsFc?: number;
  /**
   * Project.
   * @nullable
   */
  project?: string;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: string;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: string;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: string;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: string;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: string;
  /**
   * Price List.
   * @nullable
   */
  priceList?: number;
  /**
   * Automatic Expenditure.
   * @nullable
   */
  automaticExpenditure?: BoYesNoEnum;
  /**
   * Inventory Valuation.
   * @nullable
   */
  inventoryValuation?: BoYesNoEnum;
  /**
   * Origin Line.
   * @nullable
   */
  originLine?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Customs Group Rate.
   * @nullable
   */
  customsGroupRate?: number;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: string;
  /**
   * Vat Percent.
   * @nullable
   */
  vatPercent?: number;
  /**
   * Excise Sum.
   * @nullable
   */
  exciseSum?: number;
  /**
   * Excise Sum Fc.
   * @nullable
   */
  exciseSumFc?: number;
  /**
   * Excise Affect Stock.
   * @nullable
   */
  exciseAffectStock?: BoYesNoEnum;
  /**
   * Customs Cost.
   * @nullable
   */
  customsCost?: number;
  /**
   * Customs Cost Fc.
   * @nullable
   */
  customsCostFc?: number;
  /**
   * Customs Affect Stock.
   * @nullable
   */
  customsAffectStock?: BoYesNoEnum;
  /**
   * Customs Vat.
   * @nullable
   */
  customsVat?: number;
  /**
   * Customs Vat Fc.
   * @nullable
   */
  customsVatFc?: number;
  /**
   * Customs Vat Affect Stock.
   * @nullable
   */
  customsVatAffectStock?: BoYesNoEnum;
  /**
   * Ccd Number.
   * @nullable
   */
  ccdNumber?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[LandedCostItemLine.build]] instead.
 */
export function createLandedCostItemLine(json: any): LandedCostItemLine {
  return LandedCostItemLine.build(json);
}

/**
 * LandedCostItemLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LandedCostItemLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LandedCostItemLine> {
  /**
   * Representation of the [[LandedCostItemLine.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[LandedCostItemLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[LandedCostItemLine.baseDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocumentType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BaseDocumentType', this);
  /**
   * Representation of the [[LandedCostItemLine.baseEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[LandedCostItemLine.number]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  number: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Number', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDescription', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.baseDocumentPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocumentPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocumentPrice', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.projectedCustoms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectedCustoms: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ProjectedCustoms', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.projectedCustomsFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectedCustomsFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ProjectedCustomsFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.expenditure]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenditure: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Expenditure', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.expenditureFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenditureFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExpenditureFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.warehousePrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehousePrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WarehousePrice', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.warehousePriceFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehousePriceFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WarehousePriceFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.lineTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineTotal', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.lineTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineTotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.volume]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volume: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Volume', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.volumeUoM]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volumeUoM: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VolumeUoM', this, 'Edm.Int32');
  /**
   * Representation of the [[LandedCostItemLine.weight1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight1', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.weight1UnitCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1UnitCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight1UnitCode', this, 'Edm.Int32');
  /**
   * Representation of the [[LandedCostItemLine.weight2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight2', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.weight2UnitCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2UnitCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight2UnitCode', this, 'Edm.Int32');
  /**
   * Representation of the [[LandedCostItemLine.vendorCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VendorCode', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.reference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reference: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Reference', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.factorWithoutCustoms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factorWithoutCustoms: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FactorWithoutCustoms', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.factorWithCustoms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factorWithCustoms: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FactorWithCustoms', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.inventoryUoM]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryUoM: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InventoryUoM', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.blockNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BlockNumber', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.importLog]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importLog: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ImportLog', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.originalWarehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originalWarehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OriginalWarehouse', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Warehouse', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.releaseNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  releaseNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReleaseNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[LandedCostItemLine.variantCosts]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variantCosts: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VariantCosts', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.fixCosts]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fixCosts: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FixCosts', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.variantCostsFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variantCostsFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VariantCostsFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.fixCostsFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fixCostsFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FixCostsFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.customs]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customs: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Customs', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.customsFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CustomsFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.baseDocumentValueLineTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocumentValueLineTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocumentValueLineTotal', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.baseDocumentValueLineTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocumentValueLineTotalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocumentValueLineTotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.allocatedUnitCostsLineTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allocatedUnitCostsLineTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AllocatedUnitCostsLineTotal', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.allocatedUnitCostsLineTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allocatedUnitCostsLineTotalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AllocatedUnitCostsLineTotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.customsValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsValue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CustomsValue', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.customsValueFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsValueFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CustomsValueFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.totalCosts]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalCosts: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalCosts', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.totalCostsFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalCostsFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalCostsFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.totalVolume]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalVolume: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalVolume', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.baseLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLine', this, 'Edm.Int32');
  /**
   * Representation of the [[LandedCostItemLine.totalLineProjectedCustoms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalLineProjectedCustoms: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalLineProjectedCustoms', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.allocatedCostsLineTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allocatedCostsLineTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AllocatedCostsLineTotal', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.foBandIncludedCosts]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foBandIncludedCosts: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FOBandIncludedCosts', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.foBandIncludedCostsFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foBandIncludedCostsFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FOBandIncludedCostsFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.project]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Project', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule2', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule3', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule4', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule5', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.priceList]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceList: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceList', this, 'Edm.Int32');
  /**
   * Representation of the [[LandedCostItemLine.automaticExpenditure]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  automaticExpenditure: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AutomaticExpenditure', this);
  /**
   * Representation of the [[LandedCostItemLine.inventoryValuation]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryValuation: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('InventoryValuation', this);
  /**
   * Representation of the [[LandedCostItemLine.originLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OriginLine', this, 'Edm.Int32');
  /**
   * Representation of the [[LandedCostItemLine.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.customsGroupRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsGroupRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CustomsGroupRate', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.vatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroup: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VatGroup', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostItemLine.vatPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VatPercent', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.exciseSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exciseSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExciseSum', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.exciseSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exciseSumFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExciseSumFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.exciseAffectStock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exciseAffectStock: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ExciseAffectStock', this);
  /**
   * Representation of the [[LandedCostItemLine.customsCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CustomsCost', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.customsCostFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsCostFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CustomsCostFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.customsAffectStock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsAffectStock: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CustomsAffectStock', this);
  /**
   * Representation of the [[LandedCostItemLine.customsVat]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsVat: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CustomsVat', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.customsVatFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsVatFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CustomsVatFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostItemLine.customsVatAffectStock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsVatAffectStock: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CustomsVatAffectStock', this);
  /**
   * Representation of the [[LandedCostItemLine.ccdNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ccdNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CCDNumber', this, 'Edm.String');

  /**
   * Creates an instance of LandedCostItemLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, LandedCostItemLine);
  }
}

export namespace LandedCostItemLine {
  /**
   * Metadata information on all properties of the `LandedCostItemLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<LandedCostItemLine>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseDocumentType',
    name: 'baseDocumentType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BaseEntry',
    name: 'baseEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Number',
    name: 'number',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemDescription',
    name: 'itemDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseDocumentPrice',
    name: 'baseDocumentPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Rate',
    name: 'rate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ProjectedCustoms',
    name: 'projectedCustoms',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ProjectedCustomsFC',
    name: 'projectedCustomsFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Expenditure',
    name: 'expenditure',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ExpenditureFC',
    name: 'expenditureFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WarehousePrice',
    name: 'warehousePrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WarehousePriceFC',
    name: 'warehousePriceFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineTotal',
    name: 'lineTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineTotalFC',
    name: 'lineTotalFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Volume',
    name: 'volume',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VolumeUoM',
    name: 'volumeUoM',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Weight1',
    name: 'weight1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Weight1UnitCode',
    name: 'weight1UnitCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Weight2',
    name: 'weight2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Weight2UnitCode',
    name: 'weight2UnitCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'VendorCode',
    name: 'vendorCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Reference',
    name: 'reference',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FactorWithoutCustoms',
    name: 'factorWithoutCustoms',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FactorWithCustoms',
    name: 'factorWithCustoms',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'InventoryUoM',
    name: 'inventoryUoM',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BlockNumber',
    name: 'blockNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ImportLog',
    name: 'importLog',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'OriginalWarehouse',
    name: 'originalWarehouse',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Warehouse',
    name: 'warehouse',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReleaseNumber',
    name: 'releaseNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'VariantCosts',
    name: 'variantCosts',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FixCosts',
    name: 'fixCosts',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VariantCostsFC',
    name: 'variantCostsFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FixCostsFC',
    name: 'fixCostsFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Customs',
    name: 'customs',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CustomsFC',
    name: 'customsFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseDocumentValueLineTotal',
    name: 'baseDocumentValueLineTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseDocumentValueLineTotalFC',
    name: 'baseDocumentValueLineTotalFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AllocatedUnitCostsLineTotal',
    name: 'allocatedUnitCostsLineTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AllocatedUnitCostsLineTotalFC',
    name: 'allocatedUnitCostsLineTotalFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CustomsValue',
    name: 'customsValue',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CustomsValueFC',
    name: 'customsValueFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalCosts',
    name: 'totalCosts',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalCostsFC',
    name: 'totalCostsFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalVolume',
    name: 'totalVolume',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseLine',
    name: 'baseLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TotalLineProjectedCustoms',
    name: 'totalLineProjectedCustoms',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AllocatedCostsLineTotal',
    name: 'allocatedCostsLineTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FOBandIncludedCosts',
    name: 'foBandIncludedCosts',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FOBandIncludedCostsFC',
    name: 'foBandIncludedCostsFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Project',
    name: 'project',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule',
    name: 'distributionRule',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule2',
    name: 'distributionRule2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule3',
    name: 'distributionRule3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule4',
    name: 'distributionRule4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule5',
    name: 'distributionRule5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PriceList',
    name: 'priceList',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AutomaticExpenditure',
    name: 'automaticExpenditure',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'InventoryValuation',
    name: 'inventoryValuation',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'OriginLine',
    name: 'originLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Currency',
    name: 'currency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CustomsGroupRate',
    name: 'customsGroupRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VatGroup',
    name: 'vatGroup',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'VatPercent',
    name: 'vatPercent',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ExciseSum',
    name: 'exciseSum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ExciseSumFC',
    name: 'exciseSumFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ExciseAffectStock',
    name: 'exciseAffectStock',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CustomsCost',
    name: 'customsCost',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CustomsCostFC',
    name: 'customsCostFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CustomsAffectStock',
    name: 'customsAffectStock',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CustomsVat',
    name: 'customsVat',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CustomsVatFC',
    name: 'customsVatFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CustomsVatAffectStock',
    name: 'customsVatAffectStock',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CCDNumber',
    name: 'ccdNumber',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): LandedCostItemLine {
    return deserializeComplexTypeV4(json, LandedCostItemLine);
  }
}
