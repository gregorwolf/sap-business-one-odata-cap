/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class LandedCostItemLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
   * Representation of the [[LandedCostItemLine.ccdNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ccdNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CCDNumber', this, 'Edm.String');
}

export namespace LandedCostItemLine {
  export function build(json: { [keys: string]: FieldType }): LandedCostItemLine {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      BaseEntry: (baseEntry: number) => ({ baseEntry: edmToTs(baseEntry, 'Edm.Int32') }),
      Number: (number: string) => ({ number: edmToTs(number, 'Edm.String') }),
      ItemDescription: (itemDescription: string) => ({ itemDescription: edmToTs(itemDescription, 'Edm.String') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      BaseDocumentPrice: (baseDocumentPrice: number) => ({ baseDocumentPrice: edmToTs(baseDocumentPrice, 'Edm.Double') }),
      Rate: (rate: number) => ({ rate: edmToTs(rate, 'Edm.Double') }),
      ProjectedCustoms: (projectedCustoms: number) => ({ projectedCustoms: edmToTs(projectedCustoms, 'Edm.Double') }),
      ProjectedCustomsFC: (projectedCustomsFc: number) => ({ projectedCustomsFc: edmToTs(projectedCustomsFc, 'Edm.Double') }),
      Expenditure: (expenditure: number) => ({ expenditure: edmToTs(expenditure, 'Edm.Double') }),
      ExpenditureFC: (expenditureFc: number) => ({ expenditureFc: edmToTs(expenditureFc, 'Edm.Double') }),
      WarehousePrice: (warehousePrice: number) => ({ warehousePrice: edmToTs(warehousePrice, 'Edm.Double') }),
      WarehousePriceFC: (warehousePriceFc: number) => ({ warehousePriceFc: edmToTs(warehousePriceFc, 'Edm.Double') }),
      LineTotal: (lineTotal: number) => ({ lineTotal: edmToTs(lineTotal, 'Edm.Double') }),
      LineTotalFC: (lineTotalFc: number) => ({ lineTotalFc: edmToTs(lineTotalFc, 'Edm.Double') }),
      Volume: (volume: number) => ({ volume: edmToTs(volume, 'Edm.Double') }),
      VolumeUoM: (volumeUoM: number) => ({ volumeUoM: edmToTs(volumeUoM, 'Edm.Int32') }),
      Weight1: (weight1: number) => ({ weight1: edmToTs(weight1, 'Edm.Double') }),
      Weight1UnitCode: (weight1UnitCode: number) => ({ weight1UnitCode: edmToTs(weight1UnitCode, 'Edm.Int32') }),
      Weight2: (weight2: number) => ({ weight2: edmToTs(weight2, 'Edm.Double') }),
      Weight2UnitCode: (weight2UnitCode: number) => ({ weight2UnitCode: edmToTs(weight2UnitCode, 'Edm.Int32') }),
      VendorCode: (vendorCode: string) => ({ vendorCode: edmToTs(vendorCode, 'Edm.String') }),
      Reference: (reference: string) => ({ reference: edmToTs(reference, 'Edm.String') }),
      FactorWithoutCustoms: (factorWithoutCustoms: number) => ({ factorWithoutCustoms: edmToTs(factorWithoutCustoms, 'Edm.Double') }),
      FactorWithCustoms: (factorWithCustoms: number) => ({ factorWithCustoms: edmToTs(factorWithCustoms, 'Edm.Double') }),
      InventoryUoM: (inventoryUoM: string) => ({ inventoryUoM: edmToTs(inventoryUoM, 'Edm.String') }),
      BlockNumber: (blockNumber: string) => ({ blockNumber: edmToTs(blockNumber, 'Edm.String') }),
      ImportLog: (importLog: string) => ({ importLog: edmToTs(importLog, 'Edm.String') }),
      OriginalWarehouse: (originalWarehouse: string) => ({ originalWarehouse: edmToTs(originalWarehouse, 'Edm.String') }),
      Warehouse: (warehouse: string) => ({ warehouse: edmToTs(warehouse, 'Edm.String') }),
      ReleaseNumber: (releaseNumber: number) => ({ releaseNumber: edmToTs(releaseNumber, 'Edm.Int32') }),
      VariantCosts: (variantCosts: number) => ({ variantCosts: edmToTs(variantCosts, 'Edm.Double') }),
      FixCosts: (fixCosts: number) => ({ fixCosts: edmToTs(fixCosts, 'Edm.Double') }),
      VariantCostsFC: (variantCostsFc: number) => ({ variantCostsFc: edmToTs(variantCostsFc, 'Edm.Double') }),
      FixCostsFC: (fixCostsFc: number) => ({ fixCostsFc: edmToTs(fixCostsFc, 'Edm.Double') }),
      Customs: (customs: number) => ({ customs: edmToTs(customs, 'Edm.Double') }),
      CustomsFC: (customsFc: number) => ({ customsFc: edmToTs(customsFc, 'Edm.Double') }),
      BaseDocumentValueLineTotal: (baseDocumentValueLineTotal: number) => ({ baseDocumentValueLineTotal: edmToTs(baseDocumentValueLineTotal, 'Edm.Double') }),
      BaseDocumentValueLineTotalFC: (baseDocumentValueLineTotalFc: number) => ({ baseDocumentValueLineTotalFc: edmToTs(baseDocumentValueLineTotalFc, 'Edm.Double') }),
      AllocatedUnitCostsLineTotal: (allocatedUnitCostsLineTotal: number) => ({ allocatedUnitCostsLineTotal: edmToTs(allocatedUnitCostsLineTotal, 'Edm.Double') }),
      AllocatedUnitCostsLineTotalFC: (allocatedUnitCostsLineTotalFc: number) => ({ allocatedUnitCostsLineTotalFc: edmToTs(allocatedUnitCostsLineTotalFc, 'Edm.Double') }),
      CustomsValue: (customsValue: number) => ({ customsValue: edmToTs(customsValue, 'Edm.Double') }),
      CustomsValueFC: (customsValueFc: number) => ({ customsValueFc: edmToTs(customsValueFc, 'Edm.Double') }),
      TotalCosts: (totalCosts: number) => ({ totalCosts: edmToTs(totalCosts, 'Edm.Double') }),
      TotalCostsFC: (totalCostsFc: number) => ({ totalCostsFc: edmToTs(totalCostsFc, 'Edm.Double') }),
      TotalVolume: (totalVolume: number) => ({ totalVolume: edmToTs(totalVolume, 'Edm.Double') }),
      BaseLine: (baseLine: number) => ({ baseLine: edmToTs(baseLine, 'Edm.Int32') }),
      TotalLineProjectedCustoms: (totalLineProjectedCustoms: number) => ({ totalLineProjectedCustoms: edmToTs(totalLineProjectedCustoms, 'Edm.Double') }),
      AllocatedCostsLineTotal: (allocatedCostsLineTotal: number) => ({ allocatedCostsLineTotal: edmToTs(allocatedCostsLineTotal, 'Edm.Double') }),
      FOBandIncludedCosts: (foBandIncludedCosts: number) => ({ foBandIncludedCosts: edmToTs(foBandIncludedCosts, 'Edm.Double') }),
      FOBandIncludedCostsFC: (foBandIncludedCostsFc: number) => ({ foBandIncludedCostsFc: edmToTs(foBandIncludedCostsFc, 'Edm.Double') }),
      Project: (project: string) => ({ project: edmToTs(project, 'Edm.String') }),
      DistributionRule: (distributionRule: string) => ({ distributionRule: edmToTs(distributionRule, 'Edm.String') }),
      DistributionRule2: (distributionRule2: string) => ({ distributionRule2: edmToTs(distributionRule2, 'Edm.String') }),
      DistributionRule3: (distributionRule3: string) => ({ distributionRule3: edmToTs(distributionRule3, 'Edm.String') }),
      DistributionRule4: (distributionRule4: string) => ({ distributionRule4: edmToTs(distributionRule4, 'Edm.String') }),
      DistributionRule5: (distributionRule5: string) => ({ distributionRule5: edmToTs(distributionRule5, 'Edm.String') }),
      PriceList: (priceList: number) => ({ priceList: edmToTs(priceList, 'Edm.Int32') }),
      OriginLine: (originLine: number) => ({ originLine: edmToTs(originLine, 'Edm.Int32') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') }),
      CustomsGroupRate: (customsGroupRate: number) => ({ customsGroupRate: edmToTs(customsGroupRate, 'Edm.Double') }),
      VatGroup: (vatGroup: string) => ({ vatGroup: edmToTs(vatGroup, 'Edm.String') }),
      VatPercent: (vatPercent: number) => ({ vatPercent: edmToTs(vatPercent, 'Edm.Double') }),
      ExciseSum: (exciseSum: number) => ({ exciseSum: edmToTs(exciseSum, 'Edm.Double') }),
      ExciseSumFC: (exciseSumFc: number) => ({ exciseSumFc: edmToTs(exciseSumFc, 'Edm.Double') }),
      CustomsCost: (customsCost: number) => ({ customsCost: edmToTs(customsCost, 'Edm.Double') }),
      CustomsCostFC: (customsCostFc: number) => ({ customsCostFc: edmToTs(customsCostFc, 'Edm.Double') }),
      CustomsVat: (customsVat: number) => ({ customsVat: edmToTs(customsVat, 'Edm.Double') }),
      CustomsVatFC: (customsVatFc: number) => ({ customsVatFc: edmToTs(customsVatFc, 'Edm.Double') }),
      CCDNumber: (ccdNumber: string) => ({ ccdNumber: edmToTs(ccdNumber, 'Edm.String') })
    });
  }
}
