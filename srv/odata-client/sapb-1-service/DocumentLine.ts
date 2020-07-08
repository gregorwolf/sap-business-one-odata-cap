/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { LineTaxJurisdiction, LineTaxJurisdictionField } from './LineTaxJurisdiction';
import { GeneratedAsset, GeneratedAssetField } from './GeneratedAsset';
import { DocumentLineAdditionalExpense, DocumentLineAdditionalExpenseField } from './DocumentLineAdditionalExpense';
import { WithholdingTaxLine, WithholdingTaxLineField } from './WithholdingTaxLine';
import { SerialNumber, SerialNumberField } from './SerialNumber';
import { BatchNumber, BatchNumberField } from './BatchNumber';
import { DocumentLinesBinAllocation, DocumentLinesBinAllocationField } from './DocumentLinesBinAllocation';
import { ExportProcess, ExportProcessField } from './ExportProcess';
import { ImportProcess, ImportProcessField } from './ImportProcess';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DocumentLine
 */
export interface DocumentLine {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
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
   * Ship Date.
   * @nullable
   */
  shipDate?: Moment;
  /**
   * Price.
   * @nullable
   */
  price?: number;
  /**
   * Price After Vat.
   * @nullable
   */
  priceAfterVat?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
  /**
   * Discount Percent.
   * @nullable
   */
  discountPercent?: number;
  /**
   * Vendor Num.
   * @nullable
   */
  vendorNum?: string;
  /**
   * Serial Num.
   * @nullable
   */
  serialNum?: string;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
  /**
   * Sales Person Code.
   * @nullable
   */
  salesPersonCode?: number;
  /**
   * Commision Percent.
   * @nullable
   */
  commisionPercent?: number;
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: string;
  /**
   * Supplier Cat Num.
   * @nullable
   */
  supplierCatNum?: string;
  /**
   * Costing Code.
   * @nullable
   */
  costingCode?: string;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: string;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: string;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: string;
  /**
   * Height 1.
   * @nullable
   */
  height1?: number;
  /**
   * Hight 1 Unit.
   * @nullable
   */
  hight1Unit?: number;
  /**
   * Height 2.
   * @nullable
   */
  height2?: number;
  /**
   * Height 2 Unit.
   * @nullable
   */
  height2Unit?: number;
  /**
   * Lengh 1.
   * @nullable
   */
  lengh1?: number;
  /**
   * Lengh 1 Unit.
   * @nullable
   */
  lengh1Unit?: number;
  /**
   * Lengh 2.
   * @nullable
   */
  lengh2?: number;
  /**
   * Lengh 2 Unit.
   * @nullable
   */
  lengh2Unit?: number;
  /**
   * Weight 1.
   * @nullable
   */
  weight1?: number;
  /**
   * Weight 1 Unit.
   * @nullable
   */
  weight1Unit?: number;
  /**
   * Weight 2.
   * @nullable
   */
  weight2?: number;
  /**
   * Weight 2 Unit.
   * @nullable
   */
  weight2Unit?: number;
  /**
   * Factor 1.
   * @nullable
   */
  factor1?: number;
  /**
   * Factor 2.
   * @nullable
   */
  factor2?: number;
  /**
   * Factor 3.
   * @nullable
   */
  factor3?: number;
  /**
   * Factor 4.
   * @nullable
   */
  factor4?: number;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: number;
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: number;
  /**
   * Base Line.
   * @nullable
   */
  baseLine?: number;
  /**
   * Volume.
   * @nullable
   */
  volume?: number;
  /**
   * Volume Unit.
   * @nullable
   */
  volumeUnit?: number;
  /**
   * Width 1.
   * @nullable
   */
  width1?: number;
  /**
   * Width 1 Unit.
   * @nullable
   */
  width1Unit?: number;
  /**
   * Width 2.
   * @nullable
   */
  width2?: number;
  /**
   * Width 2 Unit.
   * @nullable
   */
  width2Unit?: number;
  /**
   * Address.
   * @nullable
   */
  address?: string;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: string;
  /**
   * Pick Quantity.
   * @nullable
   */
  pickQuantity?: number;
  /**
   * Pick List Id Number.
   * @nullable
   */
  pickListIdNumber?: number;
  /**
   * Original Item.
   * @nullable
   */
  originalItem?: string;
  /**
   * Free Text.
   * @nullable
   */
  freeText?: string;
  /**
   * Shipping Method.
   * @nullable
   */
  shippingMethod?: number;
  /**
   * Po Target Num.
   * @nullable
   */
  poTargetNum?: number;
  /**
   * Po Target Entry.
   * @nullable
   */
  poTargetEntry?: string;
  /**
   * Po Target Row Num.
   * @nullable
   */
  poTargetRowNum?: number;
  /**
   * Corr Inv Amount To Stock.
   * @nullable
   */
  corrInvAmountToStock?: number;
  /**
   * Corr Inv Amount To Diff Acct.
   * @nullable
   */
  corrInvAmountToDiffAcct?: number;
  /**
   * Applied Tax.
   * @nullable
   */
  appliedTax?: number;
  /**
   * Applied Tax Fc.
   * @nullable
   */
  appliedTaxFc?: number;
  /**
   * Applied Tax Sc.
   * @nullable
   */
  appliedTaxSc?: number;
  /**
   * Equalization Tax Percent.
   * @nullable
   */
  equalizationTaxPercent?: number;
  /**
   * Total Equalization Tax.
   * @nullable
   */
  totalEqualizationTax?: number;
  /**
   * Total Equalization Tax Fc.
   * @nullable
   */
  totalEqualizationTaxFc?: number;
  /**
   * Total Equalization Tax Sc.
   * @nullable
   */
  totalEqualizationTaxSc?: number;
  /**
   * Net Tax Amount.
   * @nullable
   */
  netTaxAmount?: number;
  /**
   * Net Tax Amount Fc.
   * @nullable
   */
  netTaxAmountFc?: number;
  /**
   * Net Tax Amount Sc.
   * @nullable
   */
  netTaxAmountSc?: number;
  /**
   * Measure Unit.
   * @nullable
   */
  measureUnit?: string;
  /**
   * Units Of Measurment.
   * @nullable
   */
  unitsOfMeasurment?: number;
  /**
   * Line Total.
   * @nullable
   */
  lineTotal?: number;
  /**
   * Tax Percentage Per Row.
   * @nullable
   */
  taxPercentagePerRow?: number;
  /**
   * Tax Total.
   * @nullable
   */
  taxTotal?: number;
  /**
   * Excise Amount.
   * @nullable
   */
  exciseAmount?: number;
  /**
   * Tax Per Unit.
   * @nullable
   */
  taxPerUnit?: number;
  /**
   * Total Incl Tax.
   * @nullable
   */
  totalInclTax?: number;
  /**
   * Country Org.
   * @nullable
   */
  countryOrg?: string;
  /**
   * Sww.
   * @nullable
   */
  sww?: string;
  /**
   * Ship To Code.
   * @nullable
   */
  shipToCode?: string;
  /**
   * Row Total Fc.
   * @nullable
   */
  rowTotalFc?: number;
  /**
   * Row Total Sc.
   * @nullable
   */
  rowTotalSc?: number;
  /**
   * Last Buy Inm Price.
   * @nullable
   */
  lastBuyInmPrice?: number;
  /**
   * Last Buy Distribute Sum Fc.
   * @nullable
   */
  lastBuyDistributeSumFc?: number;
  /**
   * Last Buy Distribute Sum Sc.
   * @nullable
   */
  lastBuyDistributeSumSc?: number;
  /**
   * Last Buy Distribute Sum.
   * @nullable
   */
  lastBuyDistributeSum?: number;
  /**
   * Stock Distributesum Foreign.
   * @nullable
   */
  stockDistributesumForeign?: number;
  /**
   * Stock Distributesum System.
   * @nullable
   */
  stockDistributesumSystem?: number;
  /**
   * Stock Distributesum.
   * @nullable
   */
  stockDistributesum?: number;
  /**
   * Stock Inm Price.
   * @nullable
   */
  stockInmPrice?: number;
  /**
   * Tax Before Dpm.
   * @nullable
   */
  taxBeforeDpm?: number;
  /**
   * Tax Before Dpmfc.
   * @nullable
   */
  taxBeforeDpmfc?: number;
  /**
   * Tax Before Dpmsc.
   * @nullable
   */
  taxBeforeDpmsc?: number;
  /**
   * Cfop Code.
   * @nullable
   */
  cfopCode?: string;
  /**
   * Cst Code.
   * @nullable
   */
  cstCode?: string;
  /**
   * Usage.
   * @nullable
   */
  usage?: number;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: number;
  /**
   * Base Open Quantity.
   * @nullable
   */
  baseOpenQuantity?: number;
  /**
   * Unit Price.
   * @nullable
   */
  unitPrice?: number;
  /**
   * Package Quantity.
   * @nullable
   */
  packageQuantity?: number;
  /**
   * Text.
   * @nullable
   */
  text?: string;
  /**
   * Cogs Costing Code.
   * @nullable
   */
  cogsCostingCode?: string;
  /**
   * Cogs Account Code.
   * @nullable
   */
  cogsAccountCode?: string;
  /**
   * Change Assemly Bo M Warehouse.
   * @nullable
   */
  changeAssemlyBoMWarehouse?: string;
  /**
   * Gross Buy Price.
   * @nullable
   */
  grossBuyPrice?: number;
  /**
   * Gross Base.
   * @nullable
   */
  grossBase?: number;
  /**
   * Gross Profit Total Base Price.
   * @nullable
   */
  grossProfitTotalBasePrice?: number;
  /**
   * Costing Code 2.
   * @nullable
   */
  costingCode2?: string;
  /**
   * Costing Code 3.
   * @nullable
   */
  costingCode3?: string;
  /**
   * Costing Code 4.
   * @nullable
   */
  costingCode4?: string;
  /**
   * Costing Code 5.
   * @nullable
   */
  costingCode5?: string;
  /**
   * Item Details.
   * @nullable
   */
  itemDetails?: string;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: number;
  /**
   * Actual Delivery Date.
   * @nullable
   */
  actualDeliveryDate?: Moment;
  /**
   * Remaining Open Quantity.
   * @nullable
   */
  remainingOpenQuantity?: number;
  /**
   * Open Amount.
   * @nullable
   */
  openAmount?: number;
  /**
   * Open Amount Fc.
   * @nullable
   */
  openAmountFc?: number;
  /**
   * Open Amount Sc.
   * @nullable
   */
  openAmountSc?: number;
  /**
   * Ex Line No.
   * @nullable
   */
  exLineNo?: string;
  /**
   * Required Date.
   * @nullable
   */
  requiredDate?: Moment;
  /**
   * Required Quantity.
   * @nullable
   */
  requiredQuantity?: number;
  /**
   * Cogs Costing Code 2.
   * @nullable
   */
  cogsCostingCode2?: string;
  /**
   * Cogs Costing Code 3.
   * @nullable
   */
  cogsCostingCode3?: string;
  /**
   * Cogs Costing Code 4.
   * @nullable
   */
  cogsCostingCode4?: string;
  /**
   * Cogs Costing Code 5.
   * @nullable
   */
  cogsCostingCode5?: string;
  /**
   * Cs Tfor Ipi.
   * @nullable
   */
  csTforIpi?: string;
  /**
   * Cs Tfor Pis.
   * @nullable
   */
  csTforPis?: string;
  /**
   * Cs Tfor Cofins.
   * @nullable
   */
  csTforCofins?: string;
  /**
   * Credit Origin Code.
   * @nullable
   */
  creditOriginCode?: string;
  /**
   * Agreement No.
   * @nullable
   */
  agreementNo?: number;
  /**
   * Agreement Row Number.
   * @nullable
   */
  agreementRowNumber?: number;
  /**
   * Ship To Description.
   * @nullable
   */
  shipToDescription?: string;
  /**
   * Actual Base Entry.
   * @nullable
   */
  actualBaseEntry?: number;
  /**
   * Actual Base Line.
   * @nullable
   */
  actualBaseLine?: number;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Surpluses.
   * @nullable
   */
  surpluses?: number;
  /**
   * Defect And Breakup.
   * @nullable
   */
  defectAndBreakup?: number;
  /**
   * Shortages.
   * @nullable
   */
  shortages?: number;
  /**
   * Retirement Quantity.
   * @nullable
   */
  retirementQuantity?: number;
  /**
   * Retirement Apc.
   * @nullable
   */
  retirementApc?: number;
  /**
   * Expense Type.
   * @nullable
   */
  expenseType?: string;
  /**
   * Receipt Number.
   * @nullable
   */
  receiptNumber?: string;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: string;
  /**
   * Return Cost.
   * @nullable
   */
  returnCost?: number;
  /**
   * Line Vendor.
   * @nullable
   */
  lineVendor?: string;
  /**
   * Stg Seq Num.
   * @nullable
   */
  stgSeqNum?: number;
  /**
   * Stg Entry.
   * @nullable
   */
  stgEntry?: number;
  /**
   * Stg Desc.
   * @nullable
   */
  stgDesc?: string;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: string;
  /**
   * Inventory Quantity.
   * @nullable
   */
  inventoryQuantity?: number;
  /**
   * Remaining Open Inventory Quantity.
   * @nullable
   */
  remainingOpenInventoryQuantity?: number;
  /**
   * Parent Line Num.
   * @nullable
   */
  parentLineNum?: number;
  /**
   * Incoterms.
   * @nullable
   */
  incoterms?: number;
  /**
   * Transport Mode.
   * @nullable
   */
  transportMode?: number;
  /**
   * Sac Entry.
   * @nullable
   */
  sacEntry?: number;
  /**
   * Hsn Entry.
   * @nullable
   */
  hsnEntry?: number;
  /**
   * Gross Price.
   * @nullable
   */
  grossPrice?: number;
  /**
   * Gross Total.
   * @nullable
   */
  grossTotal?: number;
  /**
   * Gross Total Fc.
   * @nullable
   */
  grossTotalFc?: number;
  /**
   * Gross Total Sc.
   * @nullable
   */
  grossTotalSc?: number;
  /**
   * Ncm Code.
   * @nullable
   */
  ncmCode?: number;
  /**
   * Line Tax Jurisdictions.
   * @nullable
   */
  lineTaxJurisdictions?: LineTaxJurisdiction;
  /**
   * Generated Assets.
   * @nullable
   */
  generatedAssets?: GeneratedAsset;
  /**
   * Document Line Additional Expenses.
   * @nullable
   */
  documentLineAdditionalExpenses?: DocumentLineAdditionalExpense;
  /**
   * Withholding Tax Lines.
   * @nullable
   */
  withholdingTaxLines?: WithholdingTaxLine;
  /**
   * Serial Numbers.
   * @nullable
   */
  serialNumbers?: SerialNumber;
  /**
   * Batch Numbers.
   * @nullable
   */
  batchNumbers?: BatchNumber;
  /**
   * Document Lines Bin Allocations.
   * @nullable
   */
  documentLinesBinAllocations?: DocumentLinesBinAllocation;
  /**
   * Export Processes.
   * @nullable
   */
  exportProcesses?: ExportProcess;
  /**
   * Return Action.
   * @nullable
   */
  returnAction?: number;
  /**
   * Return Reason.
   * @nullable
   */
  returnReason?: number;
  /**
   * Import Processes.
   * @nullable
   */
  importProcesses?: ImportProcess;
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentLine.build]] instead.
 */
export function createDocumentLine(json: any): DocumentLine {
  return DocumentLine.build(json);
}

/**
 * DocumentLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DocumentLine.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDescription', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.shipDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ShipDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[DocumentLine.price]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Price', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.priceAfterVat]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceAfterVat: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceAfterVAT', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DiscountPercent', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.vendorNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VendorNum', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.serialNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SerialNum', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesPersonCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SalesPersonCode', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.commisionPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commisionPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CommisionPercent', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.supplierCatNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  supplierCatNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SupplierCatNum', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.costingCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProjectCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.barCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BarCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.vatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroup: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VatGroup', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.height1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Height1', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.hight1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hight1Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Hight1Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.height2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Height2', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.height2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height2Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Height2Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.lengh1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lengh1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Lengh1', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.lengh1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lengh1Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Lengh1Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.lengh2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lengh2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Lengh2', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.lengh2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lengh2Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Lengh2Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.weight1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight1', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.weight1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight1Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.weight2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight2', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.weight2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Weight2Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.factor1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor1', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.factor2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor2', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.factor3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor3: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor3', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.factor4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor4: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor4', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.baseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseType', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.baseEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.baseLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLine', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.volume]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volume: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Volume', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.volumeUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volumeUnit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VolumeUnit', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.width1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width1', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.width1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width1Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width1Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.width2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width2', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.width2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width2Unit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width2Unit', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.address]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Address', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.pickQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pickQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PickQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.pickListIdNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pickListIdNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PickListIdNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.originalItem]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originalItem: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OriginalItem', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.freeText]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FreeText', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.shippingMethod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shippingMethod: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ShippingMethod', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.poTargetNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poTargetNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('POTargetNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.poTargetEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poTargetEntry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('POTargetEntry', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.poTargetRowNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poTargetRowNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('POTargetRowNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.corrInvAmountToStock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  corrInvAmountToStock: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CorrInvAmountToStock', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.corrInvAmountToDiffAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  corrInvAmountToDiffAcct: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CorrInvAmountToDiffAcct', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.appliedTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedTax: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedTax', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.appliedTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedTaxFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedTaxFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.appliedTaxSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedTaxSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedTaxSC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.equalizationTaxPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EqualizationTaxPercent', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.totalEqualizationTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalEqualizationTax: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalEqualizationTax', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.totalEqualizationTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalEqualizationTaxFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalEqualizationTaxFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.totalEqualizationTaxSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalEqualizationTaxSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalEqualizationTaxSC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.netTaxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netTaxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NetTaxAmount', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.netTaxAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netTaxAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NetTaxAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.netTaxAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netTaxAmountSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NetTaxAmountSC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.measureUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  measureUnit: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('MeasureUnit', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.unitsOfMeasurment]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitsOfMeasurment: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnitsOfMeasurment', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.lineTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineTotal', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.taxPercentagePerRow]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPercentagePerRow: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxPercentagePerRow', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.taxTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxTotal', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.exciseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exciseAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExciseAmount', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.taxPerUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPerUnit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxPerUnit', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.totalInclTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalInclTax: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalInclTax', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.countryOrg]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countryOrg: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CountryOrg', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.sww]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sww: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SWW', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.rowTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowTotalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowTotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.rowTotalSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowTotalSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowTotalSC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.lastBuyInmPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastBuyInmPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LastBuyInmPrice', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.lastBuyDistributeSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastBuyDistributeSumFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LastBuyDistributeSumFc', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.lastBuyDistributeSumSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastBuyDistributeSumSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LastBuyDistributeSumSc', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.lastBuyDistributeSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastBuyDistributeSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LastBuyDistributeSum', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.stockDistributesumForeign]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockDistributesumForeign: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StockDistributesumForeign', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.stockDistributesumSystem]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockDistributesumSystem: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StockDistributesumSystem', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.stockDistributesum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockDistributesum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StockDistributesum', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.stockInmPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockInmPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StockInmPrice', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.taxBeforeDpm]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxBeforeDpm: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxBeforeDPM', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.taxBeforeDpmfc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxBeforeDpmfc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxBeforeDPMFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.taxBeforeDpmsc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxBeforeDpmsc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxBeforeDPMSC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.cfopCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cfopCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CFOPCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.cstCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cstCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CSTCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.usage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  usage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Usage', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.visualOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VisualOrder', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.baseOpenQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseOpenQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseOpenQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.unitPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnitPrice', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.packageQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  packageQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PackageQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.text]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  text: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Text', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.cogsCostingCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cogsCostingCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('COGSCostingCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.cogsAccountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cogsAccountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('COGSAccountCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.changeAssemlyBoMWarehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeAssemlyBoMWarehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ChangeAssemlyBoMWarehouse', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.grossBuyPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossBuyPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossBuyPrice', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.grossBase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossBase: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossBase', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.grossProfitTotalBasePrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossProfitTotalBasePrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossProfitTotalBasePrice', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.costingCode2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode2', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.costingCode3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode3', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.costingCode4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode4', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.costingCode5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode5', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.itemDetails]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDetails: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDetails', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.locationCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LocationCode', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.actualDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualDeliveryDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ActualDeliveryDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[DocumentLine.remainingOpenQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingOpenQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RemainingOpenQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.openAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpenAmount', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.openAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpenAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.openAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmountSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpenAmountSC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.exLineNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exLineNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExLineNo', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.requiredDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  requiredDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('RequiredDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[DocumentLine.requiredQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  requiredQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RequiredQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.cogsCostingCode2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cogsCostingCode2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('COGSCostingCode2', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.cogsCostingCode3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cogsCostingCode3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('COGSCostingCode3', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.cogsCostingCode4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cogsCostingCode4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('COGSCostingCode4', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.cogsCostingCode5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cogsCostingCode5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('COGSCostingCode5', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.csTforIpi]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  csTforIpi: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CSTforIPI', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.csTforPis]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  csTforPis: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CSTforPIS', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.csTforCofins]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  csTforCofins: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CSTforCOFINS', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.creditOriginCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditOriginCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CreditOriginCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.agreementNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AgreementNo', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.agreementRowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementRowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AgreementRowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.shipToDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToDescription', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.actualBaseEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualBaseEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualBaseEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.actualBaseLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualBaseLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualBaseLine', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.surpluses]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  surpluses: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Surpluses', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.defectAndBreakup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defectAndBreakup: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DefectAndBreakup', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.shortages]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shortages: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Shortages', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.retirementQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  retirementQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RetirementQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.retirementApc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  retirementApc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RetirementAPC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.expenseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExpenseType', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.receiptNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receiptNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReceiptNumber', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FederalTaxID', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.returnCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  returnCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReturnCost', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.lineVendor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineVendor: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LineVendor', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.stgSeqNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stgSeqNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StgSeqNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.stgEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stgEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StgEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.stgDesc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stgDesc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StgDesc', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.uoMCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UoMCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.inventoryQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InventoryQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.remainingOpenInventoryQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingOpenInventoryQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RemainingOpenInventoryQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.parentLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  parentLineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ParentLineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.incoterms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  incoterms: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Incoterms', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.transportMode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transportMode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransportMode', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.sacEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sacEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SACEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.hsnEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hsnEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('HSNEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.grossPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossPrice', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.grossTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossTotal', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.grossTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossTotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.grossTotalSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotalSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossTotalSC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLine.ncmCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ncmCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NCMCode', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.lineTaxJurisdictions]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTaxJurisdictions: LineTaxJurisdictionField<EntityT> = new LineTaxJurisdictionField('LineTaxJurisdictions', this);
  /**
   * Representation of the [[DocumentLine.generatedAssets]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  generatedAssets: GeneratedAssetField<EntityT> = new GeneratedAssetField('GeneratedAssets', this);
  /**
   * Representation of the [[DocumentLine.documentLineAdditionalExpenses]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentLineAdditionalExpenses: DocumentLineAdditionalExpenseField<EntityT> = new DocumentLineAdditionalExpenseField('DocumentLineAdditionalExpenses', this);
  /**
   * Representation of the [[DocumentLine.withholdingTaxLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxLines: WithholdingTaxLineField<EntityT> = new WithholdingTaxLineField('WithholdingTaxLines', this);
  /**
   * Representation of the [[DocumentLine.serialNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumbers: SerialNumberField<EntityT> = new SerialNumberField('SerialNumbers', this);
  /**
   * Representation of the [[DocumentLine.batchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumbers: BatchNumberField<EntityT> = new BatchNumberField('BatchNumbers', this);
  /**
   * Representation of the [[DocumentLine.documentLinesBinAllocations]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentLinesBinAllocations: DocumentLinesBinAllocationField<EntityT> = new DocumentLinesBinAllocationField('DocumentLinesBinAllocations', this);
  /**
   * Representation of the [[DocumentLine.exportProcesses]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportProcesses: ExportProcessField<EntityT> = new ExportProcessField('ExportProcesses', this);
  /**
   * Representation of the [[DocumentLine.returnAction]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  returnAction: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReturnAction', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.returnReason]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  returnReason: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReturnReason', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLine.importProcesses]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importProcesses: ImportProcessField<EntityT> = new ImportProcessField('ImportProcesses', this);
}

export namespace DocumentLine {
  export function build(json: { [keys: string]: FieldType | BatchNumber | DocumentLineAdditionalExpense | DocumentLinesBinAllocation | ExportProcess | GeneratedAsset | ImportProcess | LineTaxJurisdiction | SerialNumber | WithholdingTaxLine }): DocumentLine {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      ItemDescription: (itemDescription: string) => ({ itemDescription: edmToTs(itemDescription, 'Edm.String') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      ShipDate: (shipDate: Moment) => ({ shipDate: edmToTs(shipDate, 'Edm.DateTimeOffset') }),
      Price: (price: number) => ({ price: edmToTs(price, 'Edm.Double') }),
      PriceAfterVAT: (priceAfterVat: number) => ({ priceAfterVat: edmToTs(priceAfterVat, 'Edm.Double') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') }),
      Rate: (rate: number) => ({ rate: edmToTs(rate, 'Edm.Double') }),
      DiscountPercent: (discountPercent: number) => ({ discountPercent: edmToTs(discountPercent, 'Edm.Double') }),
      VendorNum: (vendorNum: string) => ({ vendorNum: edmToTs(vendorNum, 'Edm.String') }),
      SerialNum: (serialNum: string) => ({ serialNum: edmToTs(serialNum, 'Edm.String') }),
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') }),
      SalesPersonCode: (salesPersonCode: number) => ({ salesPersonCode: edmToTs(salesPersonCode, 'Edm.Int32') }),
      CommisionPercent: (commisionPercent: number) => ({ commisionPercent: edmToTs(commisionPercent, 'Edm.Double') }),
      AccountCode: (accountCode: string) => ({ accountCode: edmToTs(accountCode, 'Edm.String') }),
      SupplierCatNum: (supplierCatNum: string) => ({ supplierCatNum: edmToTs(supplierCatNum, 'Edm.String') }),
      CostingCode: (costingCode: string) => ({ costingCode: edmToTs(costingCode, 'Edm.String') }),
      ProjectCode: (projectCode: string) => ({ projectCode: edmToTs(projectCode, 'Edm.String') }),
      BarCode: (barCode: string) => ({ barCode: edmToTs(barCode, 'Edm.String') }),
      VatGroup: (vatGroup: string) => ({ vatGroup: edmToTs(vatGroup, 'Edm.String') }),
      Height1: (height1: number) => ({ height1: edmToTs(height1, 'Edm.Double') }),
      Hight1Unit: (hight1Unit: number) => ({ hight1Unit: edmToTs(hight1Unit, 'Edm.Int32') }),
      Height2: (height2: number) => ({ height2: edmToTs(height2, 'Edm.Double') }),
      Height2Unit: (height2Unit: number) => ({ height2Unit: edmToTs(height2Unit, 'Edm.Int32') }),
      Lengh1: (lengh1: number) => ({ lengh1: edmToTs(lengh1, 'Edm.Double') }),
      Lengh1Unit: (lengh1Unit: number) => ({ lengh1Unit: edmToTs(lengh1Unit, 'Edm.Int32') }),
      Lengh2: (lengh2: number) => ({ lengh2: edmToTs(lengh2, 'Edm.Double') }),
      Lengh2Unit: (lengh2Unit: number) => ({ lengh2Unit: edmToTs(lengh2Unit, 'Edm.Int32') }),
      Weight1: (weight1: number) => ({ weight1: edmToTs(weight1, 'Edm.Double') }),
      Weight1Unit: (weight1Unit: number) => ({ weight1Unit: edmToTs(weight1Unit, 'Edm.Int32') }),
      Weight2: (weight2: number) => ({ weight2: edmToTs(weight2, 'Edm.Double') }),
      Weight2Unit: (weight2Unit: number) => ({ weight2Unit: edmToTs(weight2Unit, 'Edm.Int32') }),
      Factor1: (factor1: number) => ({ factor1: edmToTs(factor1, 'Edm.Double') }),
      Factor2: (factor2: number) => ({ factor2: edmToTs(factor2, 'Edm.Double') }),
      Factor3: (factor3: number) => ({ factor3: edmToTs(factor3, 'Edm.Double') }),
      Factor4: (factor4: number) => ({ factor4: edmToTs(factor4, 'Edm.Double') }),
      BaseType: (baseType: number) => ({ baseType: edmToTs(baseType, 'Edm.Int32') }),
      BaseEntry: (baseEntry: number) => ({ baseEntry: edmToTs(baseEntry, 'Edm.Int32') }),
      BaseLine: (baseLine: number) => ({ baseLine: edmToTs(baseLine, 'Edm.Int32') }),
      Volume: (volume: number) => ({ volume: edmToTs(volume, 'Edm.Double') }),
      VolumeUnit: (volumeUnit: number) => ({ volumeUnit: edmToTs(volumeUnit, 'Edm.Int32') }),
      Width1: (width1: number) => ({ width1: edmToTs(width1, 'Edm.Double') }),
      Width1Unit: (width1Unit: number) => ({ width1Unit: edmToTs(width1Unit, 'Edm.Int32') }),
      Width2: (width2: number) => ({ width2: edmToTs(width2, 'Edm.Double') }),
      Width2Unit: (width2Unit: number) => ({ width2Unit: edmToTs(width2Unit, 'Edm.Int32') }),
      Address: (address: string) => ({ address: edmToTs(address, 'Edm.String') }),
      TaxCode: (taxCode: string) => ({ taxCode: edmToTs(taxCode, 'Edm.String') }),
      PickQuantity: (pickQuantity: number) => ({ pickQuantity: edmToTs(pickQuantity, 'Edm.Double') }),
      PickListIdNumber: (pickListIdNumber: number) => ({ pickListIdNumber: edmToTs(pickListIdNumber, 'Edm.Int32') }),
      OriginalItem: (originalItem: string) => ({ originalItem: edmToTs(originalItem, 'Edm.String') }),
      FreeText: (freeText: string) => ({ freeText: edmToTs(freeText, 'Edm.String') }),
      ShippingMethod: (shippingMethod: number) => ({ shippingMethod: edmToTs(shippingMethod, 'Edm.Int32') }),
      POTargetNum: (poTargetNum: number) => ({ poTargetNum: edmToTs(poTargetNum, 'Edm.Int32') }),
      POTargetEntry: (poTargetEntry: string) => ({ poTargetEntry: edmToTs(poTargetEntry, 'Edm.String') }),
      POTargetRowNum: (poTargetRowNum: number) => ({ poTargetRowNum: edmToTs(poTargetRowNum, 'Edm.Int32') }),
      CorrInvAmountToStock: (corrInvAmountToStock: number) => ({ corrInvAmountToStock: edmToTs(corrInvAmountToStock, 'Edm.Double') }),
      CorrInvAmountToDiffAcct: (corrInvAmountToDiffAcct: number) => ({ corrInvAmountToDiffAcct: edmToTs(corrInvAmountToDiffAcct, 'Edm.Double') }),
      AppliedTax: (appliedTax: number) => ({ appliedTax: edmToTs(appliedTax, 'Edm.Double') }),
      AppliedTaxFC: (appliedTaxFc: number) => ({ appliedTaxFc: edmToTs(appliedTaxFc, 'Edm.Double') }),
      AppliedTaxSC: (appliedTaxSc: number) => ({ appliedTaxSc: edmToTs(appliedTaxSc, 'Edm.Double') }),
      EqualizationTaxPercent: (equalizationTaxPercent: number) => ({ equalizationTaxPercent: edmToTs(equalizationTaxPercent, 'Edm.Double') }),
      TotalEqualizationTax: (totalEqualizationTax: number) => ({ totalEqualizationTax: edmToTs(totalEqualizationTax, 'Edm.Double') }),
      TotalEqualizationTaxFC: (totalEqualizationTaxFc: number) => ({ totalEqualizationTaxFc: edmToTs(totalEqualizationTaxFc, 'Edm.Double') }),
      TotalEqualizationTaxSC: (totalEqualizationTaxSc: number) => ({ totalEqualizationTaxSc: edmToTs(totalEqualizationTaxSc, 'Edm.Double') }),
      NetTaxAmount: (netTaxAmount: number) => ({ netTaxAmount: edmToTs(netTaxAmount, 'Edm.Double') }),
      NetTaxAmountFC: (netTaxAmountFc: number) => ({ netTaxAmountFc: edmToTs(netTaxAmountFc, 'Edm.Double') }),
      NetTaxAmountSC: (netTaxAmountSc: number) => ({ netTaxAmountSc: edmToTs(netTaxAmountSc, 'Edm.Double') }),
      MeasureUnit: (measureUnit: string) => ({ measureUnit: edmToTs(measureUnit, 'Edm.String') }),
      UnitsOfMeasurment: (unitsOfMeasurment: number) => ({ unitsOfMeasurment: edmToTs(unitsOfMeasurment, 'Edm.Double') }),
      LineTotal: (lineTotal: number) => ({ lineTotal: edmToTs(lineTotal, 'Edm.Double') }),
      TaxPercentagePerRow: (taxPercentagePerRow: number) => ({ taxPercentagePerRow: edmToTs(taxPercentagePerRow, 'Edm.Double') }),
      TaxTotal: (taxTotal: number) => ({ taxTotal: edmToTs(taxTotal, 'Edm.Double') }),
      ExciseAmount: (exciseAmount: number) => ({ exciseAmount: edmToTs(exciseAmount, 'Edm.Double') }),
      TaxPerUnit: (taxPerUnit: number) => ({ taxPerUnit: edmToTs(taxPerUnit, 'Edm.Double') }),
      TotalInclTax: (totalInclTax: number) => ({ totalInclTax: edmToTs(totalInclTax, 'Edm.Double') }),
      CountryOrg: (countryOrg: string) => ({ countryOrg: edmToTs(countryOrg, 'Edm.String') }),
      SWW: (sww: string) => ({ sww: edmToTs(sww, 'Edm.String') }),
      ShipToCode: (shipToCode: string) => ({ shipToCode: edmToTs(shipToCode, 'Edm.String') }),
      RowTotalFC: (rowTotalFc: number) => ({ rowTotalFc: edmToTs(rowTotalFc, 'Edm.Double') }),
      RowTotalSC: (rowTotalSc: number) => ({ rowTotalSc: edmToTs(rowTotalSc, 'Edm.Double') }),
      LastBuyInmPrice: (lastBuyInmPrice: number) => ({ lastBuyInmPrice: edmToTs(lastBuyInmPrice, 'Edm.Double') }),
      LastBuyDistributeSumFc: (lastBuyDistributeSumFc: number) => ({ lastBuyDistributeSumFc: edmToTs(lastBuyDistributeSumFc, 'Edm.Double') }),
      LastBuyDistributeSumSc: (lastBuyDistributeSumSc: number) => ({ lastBuyDistributeSumSc: edmToTs(lastBuyDistributeSumSc, 'Edm.Double') }),
      LastBuyDistributeSum: (lastBuyDistributeSum: number) => ({ lastBuyDistributeSum: edmToTs(lastBuyDistributeSum, 'Edm.Double') }),
      StockDistributesumForeign: (stockDistributesumForeign: number) => ({ stockDistributesumForeign: edmToTs(stockDistributesumForeign, 'Edm.Double') }),
      StockDistributesumSystem: (stockDistributesumSystem: number) => ({ stockDistributesumSystem: edmToTs(stockDistributesumSystem, 'Edm.Double') }),
      StockDistributesum: (stockDistributesum: number) => ({ stockDistributesum: edmToTs(stockDistributesum, 'Edm.Double') }),
      StockInmPrice: (stockInmPrice: number) => ({ stockInmPrice: edmToTs(stockInmPrice, 'Edm.Double') }),
      TaxBeforeDPM: (taxBeforeDpm: number) => ({ taxBeforeDpm: edmToTs(taxBeforeDpm, 'Edm.Double') }),
      TaxBeforeDPMFC: (taxBeforeDpmfc: number) => ({ taxBeforeDpmfc: edmToTs(taxBeforeDpmfc, 'Edm.Double') }),
      TaxBeforeDPMSC: (taxBeforeDpmsc: number) => ({ taxBeforeDpmsc: edmToTs(taxBeforeDpmsc, 'Edm.Double') }),
      CFOPCode: (cfopCode: string) => ({ cfopCode: edmToTs(cfopCode, 'Edm.String') }),
      CSTCode: (cstCode: string) => ({ cstCode: edmToTs(cstCode, 'Edm.String') }),
      Usage: (usage: number) => ({ usage: edmToTs(usage, 'Edm.Int32') }),
      VisualOrder: (visualOrder: number) => ({ visualOrder: edmToTs(visualOrder, 'Edm.Int32') }),
      BaseOpenQuantity: (baseOpenQuantity: number) => ({ baseOpenQuantity: edmToTs(baseOpenQuantity, 'Edm.Double') }),
      UnitPrice: (unitPrice: number) => ({ unitPrice: edmToTs(unitPrice, 'Edm.Double') }),
      PackageQuantity: (packageQuantity: number) => ({ packageQuantity: edmToTs(packageQuantity, 'Edm.Double') }),
      Text: (text: string) => ({ text: edmToTs(text, 'Edm.String') }),
      COGSCostingCode: (cogsCostingCode: string) => ({ cogsCostingCode: edmToTs(cogsCostingCode, 'Edm.String') }),
      COGSAccountCode: (cogsAccountCode: string) => ({ cogsAccountCode: edmToTs(cogsAccountCode, 'Edm.String') }),
      ChangeAssemlyBoMWarehouse: (changeAssemlyBoMWarehouse: string) => ({ changeAssemlyBoMWarehouse: edmToTs(changeAssemlyBoMWarehouse, 'Edm.String') }),
      GrossBuyPrice: (grossBuyPrice: number) => ({ grossBuyPrice: edmToTs(grossBuyPrice, 'Edm.Double') }),
      GrossBase: (grossBase: number) => ({ grossBase: edmToTs(grossBase, 'Edm.Int32') }),
      GrossProfitTotalBasePrice: (grossProfitTotalBasePrice: number) => ({ grossProfitTotalBasePrice: edmToTs(grossProfitTotalBasePrice, 'Edm.Double') }),
      CostingCode2: (costingCode2: string) => ({ costingCode2: edmToTs(costingCode2, 'Edm.String') }),
      CostingCode3: (costingCode3: string) => ({ costingCode3: edmToTs(costingCode3, 'Edm.String') }),
      CostingCode4: (costingCode4: string) => ({ costingCode4: edmToTs(costingCode4, 'Edm.String') }),
      CostingCode5: (costingCode5: string) => ({ costingCode5: edmToTs(costingCode5, 'Edm.String') }),
      ItemDetails: (itemDetails: string) => ({ itemDetails: edmToTs(itemDetails, 'Edm.String') }),
      LocationCode: (locationCode: number) => ({ locationCode: edmToTs(locationCode, 'Edm.Int32') }),
      ActualDeliveryDate: (actualDeliveryDate: Moment) => ({ actualDeliveryDate: edmToTs(actualDeliveryDate, 'Edm.DateTimeOffset') }),
      RemainingOpenQuantity: (remainingOpenQuantity: number) => ({ remainingOpenQuantity: edmToTs(remainingOpenQuantity, 'Edm.Double') }),
      OpenAmount: (openAmount: number) => ({ openAmount: edmToTs(openAmount, 'Edm.Double') }),
      OpenAmountFC: (openAmountFc: number) => ({ openAmountFc: edmToTs(openAmountFc, 'Edm.Double') }),
      OpenAmountSC: (openAmountSc: number) => ({ openAmountSc: edmToTs(openAmountSc, 'Edm.Double') }),
      ExLineNo: (exLineNo: string) => ({ exLineNo: edmToTs(exLineNo, 'Edm.String') }),
      RequiredDate: (requiredDate: Moment) => ({ requiredDate: edmToTs(requiredDate, 'Edm.DateTimeOffset') }),
      RequiredQuantity: (requiredQuantity: number) => ({ requiredQuantity: edmToTs(requiredQuantity, 'Edm.Double') }),
      COGSCostingCode2: (cogsCostingCode2: string) => ({ cogsCostingCode2: edmToTs(cogsCostingCode2, 'Edm.String') }),
      COGSCostingCode3: (cogsCostingCode3: string) => ({ cogsCostingCode3: edmToTs(cogsCostingCode3, 'Edm.String') }),
      COGSCostingCode4: (cogsCostingCode4: string) => ({ cogsCostingCode4: edmToTs(cogsCostingCode4, 'Edm.String') }),
      COGSCostingCode5: (cogsCostingCode5: string) => ({ cogsCostingCode5: edmToTs(cogsCostingCode5, 'Edm.String') }),
      CSTforIPI: (csTforIpi: string) => ({ csTforIpi: edmToTs(csTforIpi, 'Edm.String') }),
      CSTforPIS: (csTforPis: string) => ({ csTforPis: edmToTs(csTforPis, 'Edm.String') }),
      CSTforCOFINS: (csTforCofins: string) => ({ csTforCofins: edmToTs(csTforCofins, 'Edm.String') }),
      CreditOriginCode: (creditOriginCode: string) => ({ creditOriginCode: edmToTs(creditOriginCode, 'Edm.String') }),
      AgreementNo: (agreementNo: number) => ({ agreementNo: edmToTs(agreementNo, 'Edm.Int32') }),
      AgreementRowNumber: (agreementRowNumber: number) => ({ agreementRowNumber: edmToTs(agreementRowNumber, 'Edm.Int32') }),
      ShipToDescription: (shipToDescription: string) => ({ shipToDescription: edmToTs(shipToDescription, 'Edm.String') }),
      ActualBaseEntry: (actualBaseEntry: number) => ({ actualBaseEntry: edmToTs(actualBaseEntry, 'Edm.Int32') }),
      ActualBaseLine: (actualBaseLine: number) => ({ actualBaseLine: edmToTs(actualBaseLine, 'Edm.Int32') }),
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      Surpluses: (surpluses: number) => ({ surpluses: edmToTs(surpluses, 'Edm.Double') }),
      DefectAndBreakup: (defectAndBreakup: number) => ({ defectAndBreakup: edmToTs(defectAndBreakup, 'Edm.Double') }),
      Shortages: (shortages: number) => ({ shortages: edmToTs(shortages, 'Edm.Double') }),
      RetirementQuantity: (retirementQuantity: number) => ({ retirementQuantity: edmToTs(retirementQuantity, 'Edm.Double') }),
      RetirementAPC: (retirementApc: number) => ({ retirementApc: edmToTs(retirementApc, 'Edm.Double') }),
      ExpenseType: (expenseType: string) => ({ expenseType: edmToTs(expenseType, 'Edm.String') }),
      ReceiptNumber: (receiptNumber: string) => ({ receiptNumber: edmToTs(receiptNumber, 'Edm.String') }),
      FederalTaxID: (federalTaxId: string) => ({ federalTaxId: edmToTs(federalTaxId, 'Edm.String') }),
      ReturnCost: (returnCost: number) => ({ returnCost: edmToTs(returnCost, 'Edm.Double') }),
      LineVendor: (lineVendor: string) => ({ lineVendor: edmToTs(lineVendor, 'Edm.String') }),
      StgSeqNum: (stgSeqNum: number) => ({ stgSeqNum: edmToTs(stgSeqNum, 'Edm.Int32') }),
      StgEntry: (stgEntry: number) => ({ stgEntry: edmToTs(stgEntry, 'Edm.Int32') }),
      StgDesc: (stgDesc: string) => ({ stgDesc: edmToTs(stgDesc, 'Edm.String') }),
      UoMEntry: (uoMEntry: number) => ({ uoMEntry: edmToTs(uoMEntry, 'Edm.Int32') }),
      UoMCode: (uoMCode: string) => ({ uoMCode: edmToTs(uoMCode, 'Edm.String') }),
      InventoryQuantity: (inventoryQuantity: number) => ({ inventoryQuantity: edmToTs(inventoryQuantity, 'Edm.Double') }),
      RemainingOpenInventoryQuantity: (remainingOpenInventoryQuantity: number) => ({ remainingOpenInventoryQuantity: edmToTs(remainingOpenInventoryQuantity, 'Edm.Double') }),
      ParentLineNum: (parentLineNum: number) => ({ parentLineNum: edmToTs(parentLineNum, 'Edm.Int32') }),
      Incoterms: (incoterms: number) => ({ incoterms: edmToTs(incoterms, 'Edm.Int32') }),
      TransportMode: (transportMode: number) => ({ transportMode: edmToTs(transportMode, 'Edm.Int32') }),
      SACEntry: (sacEntry: number) => ({ sacEntry: edmToTs(sacEntry, 'Edm.Int32') }),
      HSNEntry: (hsnEntry: number) => ({ hsnEntry: edmToTs(hsnEntry, 'Edm.Int32') }),
      GrossPrice: (grossPrice: number) => ({ grossPrice: edmToTs(grossPrice, 'Edm.Double') }),
      GrossTotal: (grossTotal: number) => ({ grossTotal: edmToTs(grossTotal, 'Edm.Double') }),
      GrossTotalFC: (grossTotalFc: number) => ({ grossTotalFc: edmToTs(grossTotalFc, 'Edm.Double') }),
      GrossTotalSC: (grossTotalSc: number) => ({ grossTotalSc: edmToTs(grossTotalSc, 'Edm.Double') }),
      NCMCode: (ncmCode: number) => ({ ncmCode: edmToTs(ncmCode, 'Edm.Int32') }),
      LineTaxJurisdictions: (lineTaxJurisdictions: LineTaxJurisdiction) => ({ lineTaxJurisdictions: LineTaxJurisdiction.build(lineTaxJurisdictions) }),
      GeneratedAssets: (generatedAssets: GeneratedAsset) => ({ generatedAssets: GeneratedAsset.build(generatedAssets) }),
      DocumentLineAdditionalExpenses: (documentLineAdditionalExpenses: DocumentLineAdditionalExpense) => ({ documentLineAdditionalExpenses: DocumentLineAdditionalExpense.build(documentLineAdditionalExpenses) }),
      WithholdingTaxLines: (withholdingTaxLines: WithholdingTaxLine) => ({ withholdingTaxLines: WithholdingTaxLine.build(withholdingTaxLines) }),
      SerialNumbers: (serialNumbers: SerialNumber) => ({ serialNumbers: SerialNumber.build(serialNumbers) }),
      BatchNumbers: (batchNumbers: BatchNumber) => ({ batchNumbers: BatchNumber.build(batchNumbers) }),
      DocumentLinesBinAllocations: (documentLinesBinAllocations: DocumentLinesBinAllocation) => ({ documentLinesBinAllocations: DocumentLinesBinAllocation.build(documentLinesBinAllocations) }),
      ExportProcesses: (exportProcesses: ExportProcess) => ({ exportProcesses: ExportProcess.build(exportProcesses) }),
      ReturnAction: (returnAction: number) => ({ returnAction: edmToTs(returnAction, 'Edm.Int32') }),
      ReturnReason: (returnReason: number) => ({ returnReason: edmToTs(returnReason, 'Edm.Int32') }),
      ImportProcesses: (importProcesses: ImportProcess) => ({ importProcesses: ImportProcess.build(importProcesses) })
    });
  }
}
