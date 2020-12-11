/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { LineTaxJurisdiction } from './LineTaxJurisdiction';
import { GeneratedAsset } from './GeneratedAsset';
import { DocumentLineAdditionalExpense } from './DocumentLineAdditionalExpense';
import { WithholdingTaxLine } from './WithholdingTaxLine';
import { SerialNumber } from './SerialNumber';
import { BatchNumber } from './BatchNumber';
import { DocumentLinesBinAllocation } from './DocumentLinesBinAllocation';
import { ExportProcess } from './ExportProcess';
import { ImportProcess } from './ImportProcess';
import { BoItemTreeTypes } from './BoItemTreeTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoTaxTypes } from './BoTaxTypes';
import { BoCorInvItemStatus } from './BoCorInvItemStatus';
import { BoTransactionTypeEnum } from './BoTransactionTypeEnum';
import { BoDocumentLinePickStatus } from './BoDocumentLinePickStatus';
import { BoStatus } from './BoStatus';
import { BoDocLineType } from './BoDocLineType';
import { BoExpenseOperationTypeEnum } from './BoExpenseOperationTypeEnum';
import { BoDocItemType } from './BoDocItemType';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Tree Type.
   * @nullable
   */
  treeType?: BoItemTreeTypes;
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: string;
  /**
   * Use Base Units.
   * @nullable
   */
  useBaseUnits?: BoYesNoEnum;
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
   * Tax Type.
   * @nullable
   */
  taxType?: BoTaxTypes;
  /**
   * Tax Liable.
   * @nullable
   */
  taxLiable?: BoYesNoEnum;
  /**
   * Pick Status.
   * @nullable
   */
  pickStatus?: BoYesNoEnum;
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
   * Back Order.
   * @nullable
   */
  backOrder?: BoYesNoEnum;
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
   * Correction Invoice Item.
   * @nullable
   */
  correctionInvoiceItem?: BoCorInvItemStatus;
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
   * Wt Liable.
   * @nullable
   */
  wtLiable?: BoYesNoEnum;
  /**
   * Deferred Tax.
   * @nullable
   */
  deferredTax?: BoYesNoEnum;
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
   * Consumer Sales Forecast.
   * @nullable
   */
  consumerSalesForecast?: BoYesNoEnum;
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
   * Transaction Type.
   * @nullable
   */
  transactionType?: BoTransactionTypeEnum;
  /**
   * Distribute Expense.
   * @nullable
   */
  distributeExpense?: BoYesNoEnum;
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
   * Pick Status Ex.
   * @nullable
   */
  pickStatusEx?: BoDocumentLinePickStatus;
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
   * Tax Only.
   * @nullable
   */
  taxOnly?: BoYesNoEnum;
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
   * Line Status.
   * @nullable
   */
  lineStatus?: BoStatus;
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
   * Line Type.
   * @nullable
   */
  lineType?: BoDocLineType;
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
   * Without Inventory Movement.
   * @nullable
   */
  withoutInventoryMovement?: BoYesNoEnum;
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
   * Consider Quantity.
   * @nullable
   */
  considerQuantity?: BoYesNoEnum;
  /**
   * Partial Retirement.
   * @nullable
   */
  partialRetirement?: BoYesNoEnum;
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
   * Third Party.
   * @nullable
   */
  thirdParty?: BoYesNoEnum;
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
   * Expense Operation Type.
   * @nullable
   */
  expenseOperationType?: BoExpenseOperationTypeEnum;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: string;
  /**
   * Enable Return Cost.
   * @nullable
   */
  enableReturnCost?: BoYesNoEnum;
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
   * Item Type.
   * @nullable
   */
  itemType?: BoDocItemType;
  /**
   * Change Inventory Quantity Independently.
   * @nullable
   */
  changeInventoryQuantityIndependently?: BoYesNoEnum;
  /**
   * Free Of Charge Bp.
   * @nullable
   */
  freeOfChargeBp?: BoYesNoEnum;
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
  lineTaxJurisdictions?: LineTaxJurisdiction[];
  /**
   * Generated Assets.
   * @nullable
   */
  generatedAssets?: GeneratedAsset[];
  /**
   * Document Line Additional Expenses.
   * @nullable
   */
  documentLineAdditionalExpenses?: DocumentLineAdditionalExpense[];
  /**
   * Withholding Tax Lines.
   * @nullable
   */
  withholdingTaxLines?: WithholdingTaxLine[];
  /**
   * Serial Numbers.
   * @nullable
   */
  serialNumbers?: SerialNumber[];
  /**
   * Batch Numbers.
   * @nullable
   */
  batchNumbers?: BatchNumber[];
  /**
   * Document Lines Bin Allocations.
   * @nullable
   */
  documentLinesBinAllocations?: DocumentLinesBinAllocation[];
  /**
   * Export Processes.
   * @nullable
   */
  exportProcesses?: ExportProcess[];
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
  importProcesses?: ImportProcess[];
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
export class DocumentLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentLine> {
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
   * Representation of the [[DocumentLine.treeType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  treeType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('TreeType', this);
  /**
   * Representation of the [[DocumentLine.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.useBaseUnits]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useBaseUnits: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('UseBaseUnits', this);
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
   * Representation of the [[DocumentLine.taxType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('TaxType', this);
  /**
   * Representation of the [[DocumentLine.taxLiable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxLiable: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('TaxLiable', this);
  /**
   * Representation of the [[DocumentLine.pickStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pickStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PickStatus', this);
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
   * Representation of the [[DocumentLine.backOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  backOrder: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BackOrder', this);
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
   * Representation of the [[DocumentLine.correctionInvoiceItem]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  correctionInvoiceItem: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CorrectionInvoiceItem', this);
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
   * Representation of the [[DocumentLine.wtLiable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtLiable: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('WTLiable', this);
  /**
   * Representation of the [[DocumentLine.deferredTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deferredTax: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DeferredTax', this);
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
   * Representation of the [[DocumentLine.consumerSalesForecast]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  consumerSalesForecast: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ConsumerSalesForecast', this);
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
   * Representation of the [[DocumentLine.transactionType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('TransactionType', this);
  /**
   * Representation of the [[DocumentLine.distributeExpense]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributeExpense: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DistributeExpense', this);
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
   * Representation of the [[DocumentLine.pickStatusEx]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pickStatusEx: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PickStatusEx', this);
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
   * Representation of the [[DocumentLine.taxOnly]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxOnly: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('TaxOnly', this);
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
   * Representation of the [[DocumentLine.lineStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('LineStatus', this);
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
   * Representation of the [[DocumentLine.lineType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('LineType', this);
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
   * Representation of the [[DocumentLine.withoutInventoryMovement]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withoutInventoryMovement: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('WithoutInventoryMovement', this);
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
   * Representation of the [[DocumentLine.considerQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  considerQuantity: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ConsiderQuantity', this);
  /**
   * Representation of the [[DocumentLine.partialRetirement]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  partialRetirement: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PartialRetirement', this);
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
   * Representation of the [[DocumentLine.thirdParty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  thirdParty: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ThirdParty', this);
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
   * Representation of the [[DocumentLine.expenseOperationType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseOperationType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ExpenseOperationType', this);
  /**
   * Representation of the [[DocumentLine.federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FederalTaxID', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLine.enableReturnCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableReturnCost: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableReturnCost', this);
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
   * Representation of the [[DocumentLine.itemType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ItemType', this);
  /**
   * Representation of the [[DocumentLine.changeInventoryQuantityIndependently]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeInventoryQuantityIndependently: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ChangeInventoryQuantityIndependently', this);
  /**
   * Representation of the [[DocumentLine.freeOfChargeBp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeOfChargeBp: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('FreeOfChargeBP', this);
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
  lineTaxJurisdictions: CollectionField<EntityT, LineTaxJurisdiction> = new CollectionField('LineTaxJurisdictions', this, LineTaxJurisdiction);
  /**
   * Representation of the [[DocumentLine.generatedAssets]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  generatedAssets: CollectionField<EntityT, GeneratedAsset> = new CollectionField('GeneratedAssets', this, GeneratedAsset);
  /**
   * Representation of the [[DocumentLine.documentLineAdditionalExpenses]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentLineAdditionalExpenses: CollectionField<EntityT, DocumentLineAdditionalExpense> = new CollectionField('DocumentLineAdditionalExpenses', this, DocumentLineAdditionalExpense);
  /**
   * Representation of the [[DocumentLine.withholdingTaxLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxLines: CollectionField<EntityT, WithholdingTaxLine> = new CollectionField('WithholdingTaxLines', this, WithholdingTaxLine);
  /**
   * Representation of the [[DocumentLine.serialNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumbers: CollectionField<EntityT, SerialNumber> = new CollectionField('SerialNumbers', this, SerialNumber);
  /**
   * Representation of the [[DocumentLine.batchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumbers: CollectionField<EntityT, BatchNumber> = new CollectionField('BatchNumbers', this, BatchNumber);
  /**
   * Representation of the [[DocumentLine.documentLinesBinAllocations]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentLinesBinAllocations: CollectionField<EntityT, DocumentLinesBinAllocation> = new CollectionField('DocumentLinesBinAllocations', this, DocumentLinesBinAllocation);
  /**
   * Representation of the [[DocumentLine.exportProcesses]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportProcesses: CollectionField<EntityT, ExportProcess> = new CollectionField('ExportProcesses', this, ExportProcess);
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
  importProcesses: CollectionField<EntityT, ImportProcess> = new CollectionField('ImportProcesses', this, ImportProcess);

  /**
   * Creates an instance of DocumentLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocumentLine);
  }
}

export namespace DocumentLine {
  /**
   * Metadata information on all properties of the `DocumentLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentLine>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemCode',
    name: 'itemCode',
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
    originalName: 'ShipDate',
    name: 'shipDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Price',
    name: 'price',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PriceAfterVAT',
    name: 'priceAfterVat',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Currency',
    name: 'currency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Rate',
    name: 'rate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DiscountPercent',
    name: 'discountPercent',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VendorNum',
    name: 'vendorNum',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SerialNum',
    name: 'serialNum',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WarehouseCode',
    name: 'warehouseCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SalesPersonCode',
    name: 'salesPersonCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CommisionPercent',
    name: 'commisionPercent',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TreeType',
    name: 'treeType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AccountCode',
    name: 'accountCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UseBaseUnits',
    name: 'useBaseUnits',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SupplierCatNum',
    name: 'supplierCatNum',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode',
    name: 'costingCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ProjectCode',
    name: 'projectCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BarCode',
    name: 'barCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'VatGroup',
    name: 'vatGroup',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Height1',
    name: 'height1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Hight1Unit',
    name: 'hight1Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Height2',
    name: 'height2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Height2Unit',
    name: 'height2Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Lengh1',
    name: 'lengh1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Lengh1Unit',
    name: 'lengh1Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Lengh2',
    name: 'lengh2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Lengh2Unit',
    name: 'lengh2Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Weight1',
    name: 'weight1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Weight1Unit',
    name: 'weight1Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Weight2',
    name: 'weight2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Weight2Unit',
    name: 'weight2Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Factor1',
    name: 'factor1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Factor2',
    name: 'factor2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Factor3',
    name: 'factor3',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Factor4',
    name: 'factor4',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseType',
    name: 'baseType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseEntry',
    name: 'baseEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseLine',
    name: 'baseLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Volume',
    name: 'volume',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VolumeUnit',
    name: 'volumeUnit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Width1',
    name: 'width1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Width1Unit',
    name: 'width1Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Width2',
    name: 'width2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Width2Unit',
    name: 'width2Unit',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Address',
    name: 'address',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxCode',
    name: 'taxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxType',
    name: 'taxType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'TaxLiable',
    name: 'taxLiable',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PickStatus',
    name: 'pickStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PickQuantity',
    name: 'pickQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PickListIdNumber',
    name: 'pickListIdNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'OriginalItem',
    name: 'originalItem',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BackOrder',
    name: 'backOrder',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'FreeText',
    name: 'freeText',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShippingMethod',
    name: 'shippingMethod',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'POTargetNum',
    name: 'poTargetNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'POTargetEntry',
    name: 'poTargetEntry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'POTargetRowNum',
    name: 'poTargetRowNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CorrectionInvoiceItem',
    name: 'correctionInvoiceItem',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CorrInvAmountToStock',
    name: 'corrInvAmountToStock',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CorrInvAmountToDiffAcct',
    name: 'corrInvAmountToDiffAcct',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AppliedTax',
    name: 'appliedTax',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AppliedTaxFC',
    name: 'appliedTaxFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AppliedTaxSC',
    name: 'appliedTaxSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WTLiable',
    name: 'wtLiable',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DeferredTax',
    name: 'deferredTax',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EqualizationTaxPercent',
    name: 'equalizationTaxPercent',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalEqualizationTax',
    name: 'totalEqualizationTax',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalEqualizationTaxFC',
    name: 'totalEqualizationTaxFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalEqualizationTaxSC',
    name: 'totalEqualizationTaxSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'NetTaxAmount',
    name: 'netTaxAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'NetTaxAmountFC',
    name: 'netTaxAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'NetTaxAmountSC',
    name: 'netTaxAmountSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'MeasureUnit',
    name: 'measureUnit',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UnitsOfMeasurment',
    name: 'unitsOfMeasurment',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineTotal',
    name: 'lineTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxPercentagePerRow',
    name: 'taxPercentagePerRow',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxTotal',
    name: 'taxTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ConsumerSalesForecast',
    name: 'consumerSalesForecast',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ExciseAmount',
    name: 'exciseAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxPerUnit',
    name: 'taxPerUnit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalInclTax',
    name: 'totalInclTax',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CountryOrg',
    name: 'countryOrg',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SWW',
    name: 'sww',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TransactionType',
    name: 'transactionType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DistributeExpense',
    name: 'distributeExpense',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ShipToCode',
    name: 'shipToCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RowTotalFC',
    name: 'rowTotalFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'RowTotalSC',
    name: 'rowTotalSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LastBuyInmPrice',
    name: 'lastBuyInmPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LastBuyDistributeSumFc',
    name: 'lastBuyDistributeSumFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LastBuyDistributeSumSc',
    name: 'lastBuyDistributeSumSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LastBuyDistributeSum',
    name: 'lastBuyDistributeSum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'StockDistributesumForeign',
    name: 'stockDistributesumForeign',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'StockDistributesumSystem',
    name: 'stockDistributesumSystem',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'StockDistributesum',
    name: 'stockDistributesum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'StockInmPrice',
    name: 'stockInmPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PickStatusEx',
    name: 'pickStatusEx',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'TaxBeforeDPM',
    name: 'taxBeforeDpm',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxBeforeDPMFC',
    name: 'taxBeforeDpmfc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxBeforeDPMSC',
    name: 'taxBeforeDpmsc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CFOPCode',
    name: 'cfopCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CSTCode',
    name: 'cstCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Usage',
    name: 'usage',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TaxOnly',
    name: 'taxOnly',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'VisualOrder',
    name: 'visualOrder',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseOpenQuantity',
    name: 'baseOpenQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UnitPrice',
    name: 'unitPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineStatus',
    name: 'lineStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PackageQuantity',
    name: 'packageQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Text',
    name: 'text',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LineType',
    name: 'lineType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'COGSCostingCode',
    name: 'cogsCostingCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'COGSAccountCode',
    name: 'cogsAccountCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ChangeAssemlyBoMWarehouse',
    name: 'changeAssemlyBoMWarehouse',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'GrossBuyPrice',
    name: 'grossBuyPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'GrossBase',
    name: 'grossBase',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'GrossProfitTotalBasePrice',
    name: 'grossProfitTotalBasePrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CostingCode2',
    name: 'costingCode2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode3',
    name: 'costingCode3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode4',
    name: 'costingCode4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode5',
    name: 'costingCode5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemDetails',
    name: 'itemDetails',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LocationCode',
    name: 'locationCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ActualDeliveryDate',
    name: 'actualDeliveryDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'RemainingOpenQuantity',
    name: 'remainingOpenQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'OpenAmount',
    name: 'openAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'OpenAmountFC',
    name: 'openAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'OpenAmountSC',
    name: 'openAmountSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ExLineNo',
    name: 'exLineNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RequiredDate',
    name: 'requiredDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'RequiredQuantity',
    name: 'requiredQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'COGSCostingCode2',
    name: 'cogsCostingCode2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'COGSCostingCode3',
    name: 'cogsCostingCode3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'COGSCostingCode4',
    name: 'cogsCostingCode4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'COGSCostingCode5',
    name: 'cogsCostingCode5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CSTforIPI',
    name: 'csTforIpi',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CSTforPIS',
    name: 'csTforPis',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CSTforCOFINS',
    name: 'csTforCofins',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CreditOriginCode',
    name: 'creditOriginCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WithoutInventoryMovement',
    name: 'withoutInventoryMovement',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AgreementNo',
    name: 'agreementNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AgreementRowNumber',
    name: 'agreementRowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ShipToDescription',
    name: 'shipToDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ActualBaseEntry',
    name: 'actualBaseEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ActualBaseLine',
    name: 'actualBaseLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Surpluses',
    name: 'surpluses',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DefectAndBreakup',
    name: 'defectAndBreakup',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Shortages',
    name: 'shortages',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ConsiderQuantity',
    name: 'considerQuantity',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PartialRetirement',
    name: 'partialRetirement',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'RetirementQuantity',
    name: 'retirementQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'RetirementAPC',
    name: 'retirementApc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ThirdParty',
    name: 'thirdParty',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ExpenseType',
    name: 'expenseType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReceiptNumber',
    name: 'receiptNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ExpenseOperationType',
    name: 'expenseOperationType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'FederalTaxID',
    name: 'federalTaxId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'EnableReturnCost',
    name: 'enableReturnCost',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ReturnCost',
    name: 'returnCost',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineVendor',
    name: 'lineVendor',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StgSeqNum',
    name: 'stgSeqNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StgEntry',
    name: 'stgEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StgDesc',
    name: 'stgDesc',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UoMEntry',
    name: 'uoMEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UoMCode',
    name: 'uoMCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'InventoryQuantity',
    name: 'inventoryQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'RemainingOpenInventoryQuantity',
    name: 'remainingOpenInventoryQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ParentLineNum',
    name: 'parentLineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Incoterms',
    name: 'incoterms',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TransportMode',
    name: 'transportMode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemType',
    name: 'itemType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ChangeInventoryQuantityIndependently',
    name: 'changeInventoryQuantityIndependently',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'FreeOfChargeBP',
    name: 'freeOfChargeBp',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SACEntry',
    name: 'sacEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'HSNEntry',
    name: 'hsnEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'GrossPrice',
    name: 'grossPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'GrossTotal',
    name: 'grossTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'GrossTotalFC',
    name: 'grossTotalFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'GrossTotalSC',
    name: 'grossTotalSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'NCMCode',
    name: 'ncmCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineTaxJurisdictions',
    name: 'lineTaxJurisdictions',
    type: LineTaxJurisdiction,
    isCollection: true
  }, {
    originalName: 'GeneratedAssets',
    name: 'generatedAssets',
    type: GeneratedAsset,
    isCollection: true
  }, {
    originalName: 'DocumentLineAdditionalExpenses',
    name: 'documentLineAdditionalExpenses',
    type: DocumentLineAdditionalExpense,
    isCollection: true
  }, {
    originalName: 'WithholdingTaxLines',
    name: 'withholdingTaxLines',
    type: WithholdingTaxLine,
    isCollection: true
  }, {
    originalName: 'SerialNumbers',
    name: 'serialNumbers',
    type: SerialNumber,
    isCollection: true
  }, {
    originalName: 'BatchNumbers',
    name: 'batchNumbers',
    type: BatchNumber,
    isCollection: true
  }, {
    originalName: 'DocumentLinesBinAllocations',
    name: 'documentLinesBinAllocations',
    type: DocumentLinesBinAllocation,
    isCollection: true
  }, {
    originalName: 'ExportProcesses',
    name: 'exportProcesses',
    type: ExportProcess,
    isCollection: true
  }, {
    originalName: 'ReturnAction',
    name: 'returnAction',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ReturnReason',
    name: 'returnReason',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ImportProcesses',
    name: 'importProcesses',
    type: ImportProcess,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | BatchNumber | DocumentLineAdditionalExpense | DocumentLinesBinAllocation | ExportProcess | GeneratedAsset | ImportProcess | LineTaxJurisdiction | SerialNumber | WithholdingTaxLine }): DocumentLine {
    return deserializeComplexTypeV4(json, DocumentLine);
  }
}
