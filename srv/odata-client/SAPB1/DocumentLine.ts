/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LineTaxJurisdiction } from './LineTaxJurisdiction';
import { GeneratedAsset } from './GeneratedAsset';
import { EBooksDetail } from './EBooksDetail';
import { DocumentLineAdditionalExpense } from './DocumentLineAdditionalExpense';
import { WithholdingTaxLine } from './WithholdingTaxLine';
import { SerialNumber } from './SerialNumber';
import { BatchNumber } from './BatchNumber';
import { DocumentLinesBinAllocation } from './DocumentLinesBinAllocation';
import { ExportProcess } from './ExportProcess';
import { CcdNumber } from './CcdNumber';
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
import { DocumentPriceSourceEnum } from './DocumentPriceSourceEnum';
import { BoDocItemType } from './BoDocItemType';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * DocumentLine
 */
export interface DocumentLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Ship Date.
   * @nullable
   */
  shipDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Price.
   * @nullable
   */
  price?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Price After Vat.
   * @nullable
   */
  priceAfterVat?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Discount Percent.
   * @nullable
   */
  discountPercent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Vendor Num.
   * @nullable
   */
  vendorNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Serial Num.
   * @nullable
   */
  serialNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales Person Code.
   * @nullable
   */
  salesPersonCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Commision Percent.
   * @nullable
   */
  commisionPercent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tree Type.
   * @nullable
   */
  treeType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Use Base Units.
   * @nullable
   */
  useBaseUnits?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Supplier Cat Num.
   * @nullable
   */
  supplierCatNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code.
   * @nullable
   */
  costingCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Height 1.
   * @nullable
   */
  height1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Hight 1 Unit.
   * @nullable
   */
  hight1Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Height 2.
   * @nullable
   */
  height2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Height 2 Unit.
   * @nullable
   */
  height2Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Lengh 1.
   * @nullable
   */
  lengh1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Lengh 1 Unit.
   * @nullable
   */
  lengh1Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Lengh 2.
   * @nullable
   */
  lengh2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Lengh 2 Unit.
   * @nullable
   */
  lengh2Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Weight 1.
   * @nullable
   */
  weight1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Weight 1 Unit.
   * @nullable
   */
  weight1Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Weight 2.
   * @nullable
   */
  weight2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Weight 2 Unit.
   * @nullable
   */
  weight2Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Factor 1.
   * @nullable
   */
  factor1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Factor 2.
   * @nullable
   */
  factor2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Factor 3.
   * @nullable
   */
  factor3?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Factor 4.
   * @nullable
   */
  factor4?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Line.
   * @nullable
   */
  baseLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Volume.
   * @nullable
   */
  volume?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Volume Unit.
   * @nullable
   */
  volumeUnit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Width 1.
   * @nullable
   */
  width1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Width 1 Unit.
   * @nullable
   */
  width1Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Width 2.
   * @nullable
   */
  width2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Width 2 Unit.
   * @nullable
   */
  width2Unit?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Address.
   * @nullable
   */
  address?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Type.
   * @nullable
   */
  taxType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Liable.
   * @nullable
   */
  taxLiable?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Pick Status.
   * @nullable
   */
  pickStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Pick Quantity.
   * @nullable
   */
  pickQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Pick List Id Number.
   * @nullable
   */
  pickListIdNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Original Item.
   * @nullable
   */
  originalItem?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Back Order.
   * @nullable
   */
  backOrder?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Free Text.
   * @nullable
   */
  freeText?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Shipping Method.
   * @nullable
   */
  shippingMethod?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Po Target Num.
   * @nullable
   */
  poTargetNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Po Target Entry.
   * @nullable
   */
  poTargetEntry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Po Target Row Num.
   * @nullable
   */
  poTargetRowNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Correction Invoice Item.
   * @nullable
   */
  correctionInvoiceItem?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Corr Inv Amount To Stock.
   * @nullable
   */
  corrInvAmountToStock?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Corr Inv Amount To Diff Acct.
   * @nullable
   */
  corrInvAmountToDiffAcct?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Applied Tax.
   * @nullable
   */
  appliedTax?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Applied Tax Fc.
   * @nullable
   */
  appliedTaxFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Applied Tax Sc.
   * @nullable
   */
  appliedTaxSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Wt Liable.
   * @nullable
   */
  wtLiable?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Deferred Tax.
   * @nullable
   */
  deferredTax?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Equalization Tax Percent.
   * @nullable
   */
  equalizationTaxPercent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Equalization Tax.
   * @nullable
   */
  totalEqualizationTax?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Equalization Tax Fc.
   * @nullable
   */
  totalEqualizationTaxFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Equalization Tax Sc.
   * @nullable
   */
  totalEqualizationTaxSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Net Tax Amount.
   * @nullable
   */
  netTaxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Net Tax Amount Fc.
   * @nullable
   */
  netTaxAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Net Tax Amount Sc.
   * @nullable
   */
  netTaxAmountSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Measure Unit.
   * @nullable
   */
  measureUnit?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Units Of Measurment.
   * @nullable
   */
  unitsOfMeasurment?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Total.
   * @nullable
   */
  lineTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Percentage Per Row.
   * @nullable
   */
  taxPercentagePerRow?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Total.
   * @nullable
   */
  taxTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Consumer Sales Forecast.
   * @nullable
   */
  consumerSalesForecast?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Excise Amount.
   * @nullable
   */
  exciseAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Per Unit.
   * @nullable
   */
  taxPerUnit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Incl Tax.
   * @nullable
   */
  totalInclTax?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Country Org.
   * @nullable
   */
  countryOrg?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sww.
   * @nullable
   */
  sww?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  transactionType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Distribute Expense.
   * @nullable
   */
  distributeExpense?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Row Total Fc.
   * @nullable
   */
  rowTotalFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Row Total Sc.
   * @nullable
   */
  rowTotalSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Last Buy Inm Price.
   * @nullable
   */
  lastBuyInmPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Last Buy Distribute Sum Fc.
   * @nullable
   */
  lastBuyDistributeSumFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Last Buy Distribute Sum Sc.
   * @nullable
   */
  lastBuyDistributeSumSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Last Buy Distribute Sum.
   * @nullable
   */
  lastBuyDistributeSum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Stock Distributesum Foreign.
   * @nullable
   */
  stockDistributesumForeign?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Stock Distributesum System.
   * @nullable
   */
  stockDistributesumSystem?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Stock Distributesum.
   * @nullable
   */
  stockDistributesum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Stock Inm Price.
   * @nullable
   */
  stockInmPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Pick Status Ex.
   * @nullable
   */
  pickStatusEx?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Before Dpm.
   * @nullable
   */
  taxBeforeDpm?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Before Dpmfc.
   * @nullable
   */
  taxBeforeDpmfc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Before Dpmsc.
   * @nullable
   */
  taxBeforeDpmsc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cfop Code.
   * @nullable
   */
  cfopCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cst Code.
   * @nullable
   */
  cstCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Usage.
   * @nullable
   */
  usage?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tax Only.
   * @nullable
   */
  taxOnly?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Open Quantity.
   * @nullable
   */
  baseOpenQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Unit Price.
   * @nullable
   */
  unitPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Status.
   * @nullable
   */
  lineStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Package Quantity.
   * @nullable
   */
  packageQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Text.
   * @nullable
   */
  text?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Line Type.
   * @nullable
   */
  lineType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Cogs Costing Code.
   * @nullable
   */
  cogsCostingCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cogs Account Code.
   * @nullable
   */
  cogsAccountCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Change Assemly Bo M Warehouse.
   * @nullable
   */
  changeAssemlyBoMWarehouse?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gross Buy Price.
   * @nullable
   */
  grossBuyPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Base.
   * @nullable
   */
  grossBase?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Gross Profit Total Base Price.
   * @nullable
   */
  grossProfitTotalBasePrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Costing Code 2.
   * @nullable
   */
  costingCode2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 3.
   * @nullable
   */
  costingCode3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 4.
   * @nullable
   */
  costingCode4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 5.
   * @nullable
   */
  costingCode5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Details.
   * @nullable
   */
  itemDetails?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Actual Delivery Date.
   * @nullable
   */
  actualDeliveryDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Remaining Open Quantity.
   * @nullable
   */
  remainingOpenQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Open Amount.
   * @nullable
   */
  openAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Open Amount Fc.
   * @nullable
   */
  openAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Open Amount Sc.
   * @nullable
   */
  openAmountSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Ex Line No.
   * @nullable
   */
  exLineNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Required Date.
   * @nullable
   */
  requiredDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Required Quantity.
   * @nullable
   */
  requiredQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cogs Costing Code 2.
   * @nullable
   */
  cogsCostingCode2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cogs Costing Code 3.
   * @nullable
   */
  cogsCostingCode3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cogs Costing Code 4.
   * @nullable
   */
  cogsCostingCode4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cogs Costing Code 5.
   * @nullable
   */
  cogsCostingCode5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cs Tfor Ipi.
   * @nullable
   */
  csTforIpi?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cs Tfor Pis.
   * @nullable
   */
  csTforPis?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cs Tfor Cofins.
   * @nullable
   */
  csTforCofins?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Credit Origin Code.
   * @nullable
   */
  creditOriginCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Without Inventory Movement.
   * @nullable
   */
  withoutInventoryMovement?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Agreement No.
   * @nullable
   */
  agreementNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Agreement Row Number.
   * @nullable
   */
  agreementRowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Actual Base Entry.
   * @nullable
   */
  actualBaseEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Actual Base Line.
   * @nullable
   */
  actualBaseLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Surpluses.
   * @nullable
   */
  surpluses?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Defect And Breakup.
   * @nullable
   */
  defectAndBreakup?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Shortages.
   * @nullable
   */
  shortages?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Consider Quantity.
   * @nullable
   */
  considerQuantity?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Partial Retirement.
   * @nullable
   */
  partialRetirement?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Retirement Quantity.
   * @nullable
   */
  retirementQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Retirement Apc.
   * @nullable
   */
  retirementApc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Third Party.
   * @nullable
   */
  thirdParty?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Po Num.
   * @nullable
   */
  poNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Po Itm Num.
   * @nullable
   */
  poItmNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Expense Type.
   * @nullable
   */
  expenseType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Receipt Number.
   * @nullable
   */
  receiptNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Expense Operation Type.
   * @nullable
   */
  expenseOperationType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gross Profit.
   * @nullable
   */
  grossProfit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Profit Fc.
   * @nullable
   */
  grossProfitFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Profit Sc.
   * @nullable
   */
  grossProfitSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Price Source.
   * @nullable
   */
  priceSource?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Return Cost.
   * @nullable
   */
  enableReturnCost?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Return Cost.
   * @nullable
   */
  returnCost?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Vendor.
   * @nullable
   */
  lineVendor?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Return Action.
   * @nullable
   */
  returnAction?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Return Reason.
   * @nullable
   */
  returnReason?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Stg Seq Num.
   * @nullable
   */
  stgSeqNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Stg Entry.
   * @nullable
   */
  stgEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Stg Desc.
   * @nullable
   */
  stgDesc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Inventory Quantity.
   * @nullable
   */
  inventoryQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Remaining Open Inventory Quantity.
   * @nullable
   */
  remainingOpenInventoryQuantity?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Parent Line Num.
   * @nullable
   */
  parentLineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Incoterms.
   * @nullable
   */
  incoterms?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Transport Mode.
   * @nullable
   */
  transportMode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Nature Of Transaction.
   * @nullable
   */
  natureOfTransaction?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Destination Country For Import.
   * @nullable
   */
  destinationCountryForImport?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Destination Region For Import.
   * @nullable
   */
  destinationRegionForImport?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Origin Country For Export.
   * @nullable
   */
  originCountryForExport?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Origin Region For Export.
   * @nullable
   */
  originRegionForExport?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item Type.
   * @nullable
   */
  itemType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Change Inventory Quantity Independently.
   * @nullable
   */
  changeInventoryQuantityIndependently?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Free Of Charge Bp.
   * @nullable
   */
  freeOfChargeBp?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Sac Entry.
   * @nullable
   */
  sacEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Hsn Entry.
   * @nullable
   */
  hsnEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Gross Price.
   * @nullable
   */
  grossPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Total.
   * @nullable
   */
  grossTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Total Fc.
   * @nullable
   */
  grossTotalFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Total Sc.
   * @nullable
   */
  grossTotalSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Ncm Code.
   * @nullable
   */
  ncmCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Nve Code.
   * @nullable
   */
  nveCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ind Escala.
   * @nullable
   */
  indEscala?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Ctr Seal Qty.
   * @nullable
   */
  ctrSealQty?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cnjp Man.
   * @nullable
   */
  cnjpMan?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cest Code.
   * @nullable
   */
  cestCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Uf Fiscal Benefit Code.
   * @nullable
   */
  ufFiscalBenefitCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reverse Charge.
   * @nullable
   */
  reverseCharge?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Ship To Code.
   * @nullable
   */
  shipToCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Description.
   * @nullable
   */
  shipToDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship From Code.
   * @nullable
   */
  shipFromCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship From Description.
   * @nullable
   */
  shipFromDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * External Calc Tax Rate.
   * @nullable
   */
  externalCalcTaxRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * External Calc Tax Amount.
   * @nullable
   */
  externalCalcTaxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * External Calc Tax Amount Fc.
   * @nullable
   */
  externalCalcTaxAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * External Calc Tax Amount Sc.
   * @nullable
   */
  externalCalcTaxAmountSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Standard Item Identification.
   * @nullable
   */
  standardItemIdentification?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Commodity Classification.
   * @nullable
   */
  commodityClassification?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Weight Of Recycled Plastic.
   * @nullable
   */
  weightOfRecycledPlastic?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Plastic Package Exemption Reason.
   * @nullable
   */
  plasticPackageExemptionReason?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Unencumbered Reason.
   * @nullable
   */
  unencumberedReason?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Cu Split.
   * @nullable
   */
  cuSplit?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * List Num.
   * @nullable
   */
  listNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Recognized Tax Code.
   * @nullable
   */
  recognizedTaxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Bp Ctry.
   * @nullable
   */
  uBnBpCtry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Ori Ctr.
   * @nullable
   */
  uBnOriCtr?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Ori Sta.
   * @nullable
   */
  uBnOriSta?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Dst Sta.
   * @nullable
   */
  uBnDstSta?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Inc Trm.
   * @nullable
   */
  uBnIncTrm?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bnta Type.
   * @nullable
   */
  uBntaType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Trn Mod.
   * @nullable
   */
  uBnTrnMod?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Port.
   * @nullable
   */
  uBnPort?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Cst Prc.
   * @nullable
   */
  uBnCstPrc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Tax Ext.
   * @nullable
   */
  uBnTaxExt?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Brd Val.
   * @nullable
   */
  uBnBrdVal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bn Com Cod.
   * @nullable
   */
  uBnComCod?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Sup Unt.
   * @nullable
   */
  uBnSupUnt?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Sup Mas.
   * @nullable
   */
  uBnSupMas?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bn Rel Dec.
   * @nullable
   */
  uBnRelDec?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bn Dom Frg.
   * @nullable
   */
  uBnDomFrg?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Nettopr.
   * @nullable
   */
  uNettopr?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bld Ly Id.
   * @nullable
   */
  uBldLyId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Bld N Cps.
   * @nullable
   */
  uBldNCps?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Penka Montage.
   * @nullable
   */
  uPenkaMontage?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Penka Iltis Status.
   * @nullable
   */
  uPenkaIltisStatus?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Stl.
   * @nullable
   */
  uStl?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Stl Preis.
   * @nullable
   */
  uStlPreis?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bezeichnung 2.
   * @nullable
   */
  uBezeichnung2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Projektpreis Position.
   * @nullable
   */
  uProjektpreisPosition?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Lvoz.
   * @nullable
   */
  uLvoz?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Line Tax Jurisdictions.
   * @nullable
   */
  lineTaxJurisdictions?: DeserializedType<
    DeSerializersT,
    'SAPB1.LineTaxJurisdiction'
  >;
  /**
   * Generated Assets.
   * @nullable
   */
  generatedAssets?: DeserializedType<DeSerializersT, 'SAPB1.GeneratedAsset'>;
  /**
   * E Books Details.
   * @nullable
   */
  eBooksDetails?: DeserializedType<DeSerializersT, 'SAPB1.EBooksDetail'>;
  /**
   * Document Line Additional Expenses.
   * @nullable
   */
  documentLineAdditionalExpenses?: DeserializedType<
    DeSerializersT,
    'SAPB1.DocumentLineAdditionalExpense'
  >;
  /**
   * Withholding Tax Lines.
   * @nullable
   */
  withholdingTaxLines?: DeserializedType<
    DeSerializersT,
    'SAPB1.WithholdingTaxLine'
  >;
  /**
   * Serial Numbers.
   * @nullable
   */
  serialNumbers?: DeserializedType<DeSerializersT, 'SAPB1.SerialNumber'>;
  /**
   * Batch Numbers.
   * @nullable
   */
  batchNumbers?: DeserializedType<DeSerializersT, 'SAPB1.BatchNumber'>;
  /**
   * Document Lines Bin Allocations.
   * @nullable
   */
  documentLinesBinAllocations?: DeserializedType<
    DeSerializersT,
    'SAPB1.DocumentLinesBinAllocation'
  >;
  /**
   * Export Processes.
   * @nullable
   */
  exportProcesses?: DeserializedType<DeSerializersT, 'SAPB1.ExportProcess'>;
  /**
   * Ccd Numbers.
   * @nullable
   */
  ccdNumbers?: DeserializedType<DeSerializersT, 'SAPB1.CCDNumber'>;
  /**
   * Owner Code.
   * @nullable
   */
  ownerCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Import Processes.
   * @nullable
   */
  importProcesses?: DeserializedType<DeSerializersT, 'SAPB1.ImportProcess'>;
}

/**
 * DocumentLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocumentLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DocumentLine.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.itemDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ItemDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.quantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.shipDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link DocumentLine.price} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Price', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.priceAfterVat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceAfterVat: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PriceAfterVAT', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.currency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.rate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Rate', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.discountPercent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountPercent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DiscountPercent',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.vendorNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VendorNum', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.serialNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SerialNum', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.warehouseCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WarehouseCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.salesPersonCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesPersonCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SalesPersonCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentLine.commisionPercent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commisionPercent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CommisionPercent',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.treeType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  treeType: EnumField<EntityT, DeSerializersT, BoItemTreeTypes, true, false> =
    this._fieldBuilder.buildEnumField('TreeType', BoItemTreeTypes, true);
  /**
   * Representation of the {@link DocumentLine.accountCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.useBaseUnits} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useBaseUnits: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('UseBaseUnits', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.supplierCatNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  supplierCatNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SupplierCatNum',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.costingCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.projectCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProjectCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.barCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BarCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.vatGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VatGroup', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.height1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Height1', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.hight1Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hight1Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Hight1Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.height2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Height2', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.height2Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height2Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Height2Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.lengh1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lengh1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Lengh1', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.lengh1Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lengh1Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Lengh1Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.lengh2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lengh2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Lengh2', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.lengh2Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lengh2Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Lengh2Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.weight1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Weight1', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.weight1Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Weight1Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.weight2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Weight2', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.weight2Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Weight2Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.factor1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor1', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.factor2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor2', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.factor3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor3', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.factor4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor4', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.baseType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseType', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.baseEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.baseLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseLine', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.volume} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volume: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Volume', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.volumeUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volumeUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VolumeUnit', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.width1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Width1', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.width1Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width1Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Width1Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.width2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Width2', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.width2Unit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width2Unit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Width2Unit', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.address} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.taxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.taxType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxType: EnumField<EntityT, DeSerializersT, BoTaxTypes, true, false> =
    this._fieldBuilder.buildEnumField('TaxType', BoTaxTypes, true);
  /**
   * Representation of the {@link DocumentLine.taxLiable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxLiable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('TaxLiable', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.pickStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pickStatus: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('PickStatus', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.pickQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pickQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PickQuantity', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.pickListIdNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pickListIdNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PickListIdNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentLine.originalItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originalItem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OriginalItem', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.backOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  backOrder: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('BackOrder', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.freeText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FreeText', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.shippingMethod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shippingMethod: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShippingMethod', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.poTargetNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poTargetNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('POTargetNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.poTargetEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poTargetEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('POTargetEntry', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.poTargetRowNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poTargetRowNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('POTargetRowNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.correctionInvoiceItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  correctionInvoiceItem: EnumField<
    EntityT,
    DeSerializersT,
    BoCorInvItemStatus,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CorrectionInvoiceItem',
    BoCorInvItemStatus,
    true
  );
  /**
   * Representation of the {@link DocumentLine.corrInvAmountToStock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  corrInvAmountToStock: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CorrInvAmountToStock',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.corrInvAmountToDiffAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  corrInvAmountToDiffAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CorrInvAmountToDiffAcct',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.appliedTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AppliedTax', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.appliedTaxFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedTaxFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AppliedTaxFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.appliedTaxSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedTaxSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AppliedTaxSC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.wtLiable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtLiable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('WTLiable', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.deferredTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deferredTax: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('DeferredTax', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.equalizationTaxPercent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxPercent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EqualizationTaxPercent',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.totalEqualizationTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalEqualizationTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalEqualizationTax',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.totalEqualizationTaxFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalEqualizationTaxFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalEqualizationTaxFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.totalEqualizationTaxSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalEqualizationTaxSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalEqualizationTaxSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.netTaxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netTaxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NetTaxAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.netTaxAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netTaxAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NetTaxAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.netTaxAmountSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netTaxAmountSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NetTaxAmountSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.measureUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  measureUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MeasureUnit', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.unitsOfMeasurment} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitsOfMeasurment: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UnitsOfMeasurment',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.lineTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineTotal', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.taxPercentagePerRow} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPercentagePerRow: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxPercentagePerRow',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.taxTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxTotal', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.consumerSalesForecast} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  consumerSalesForecast: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ConsumerSalesForecast',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link DocumentLine.exciseAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exciseAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExciseAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.taxPerUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPerUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxPerUnit', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.totalInclTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalInclTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalInclTax', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.countryOrg} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countryOrg: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CountryOrg', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.sww} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sww: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SWW', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.transactionType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionType: EnumField<
    EntityT,
    DeSerializersT,
    BoTransactionTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'TransactionType',
    BoTransactionTypeEnum,
    true
  );
  /**
   * Representation of the {@link DocumentLine.distributeExpense} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributeExpense: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('DistributeExpense', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.rowTotalFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowTotalFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowTotalFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.rowTotalSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowTotalSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowTotalSC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.lastBuyInmPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastBuyInmPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LastBuyInmPrice',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.lastBuyDistributeSumFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastBuyDistributeSumFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LastBuyDistributeSumFc',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.lastBuyDistributeSumSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastBuyDistributeSumSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LastBuyDistributeSumSc',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.lastBuyDistributeSum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastBuyDistributeSum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LastBuyDistributeSum',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.stockDistributesumForeign} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockDistributesumForeign: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StockDistributesumForeign',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.stockDistributesumSystem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockDistributesumSystem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StockDistributesumSystem',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.stockDistributesum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockDistributesum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StockDistributesum',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.stockInmPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockInmPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StockInmPrice', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.pickStatusEx} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pickStatusEx: EnumField<
    EntityT,
    DeSerializersT,
    BoDocumentLinePickStatus,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'PickStatusEx',
    BoDocumentLinePickStatus,
    true
  );
  /**
   * Representation of the {@link DocumentLine.taxBeforeDpm} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxBeforeDpm: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxBeforeDPM', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.taxBeforeDpmfc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxBeforeDpmfc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxBeforeDPMFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.taxBeforeDpmsc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxBeforeDpmsc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxBeforeDPMSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.cfopCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cfopCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CFOPCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.cstCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cstCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CSTCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.usage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  usage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Usage', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.taxOnly} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxOnly: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('TaxOnly', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.visualOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VisualOrder', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.baseOpenQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseOpenQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BaseOpenQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.unitPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UnitPrice', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.lineStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineStatus: EnumField<EntityT, DeSerializersT, BoStatus, true, false> =
    this._fieldBuilder.buildEnumField('LineStatus', BoStatus, true);
  /**
   * Representation of the {@link DocumentLine.packageQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  packageQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PackageQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.text} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  text: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.lineType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineType: EnumField<EntityT, DeSerializersT, BoDocLineType, true, false> =
    this._fieldBuilder.buildEnumField('LineType', BoDocLineType, true);
  /**
   * Representation of the {@link DocumentLine.cogsCostingCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cogsCostingCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'COGSCostingCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.cogsAccountCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cogsAccountCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'COGSAccountCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.changeAssemlyBoMWarehouse} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeAssemlyBoMWarehouse: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ChangeAssemlyBoMWarehouse',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.grossBuyPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossBuyPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossBuyPrice', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.grossBase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossBase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossBase', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.grossProfitTotalBasePrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossProfitTotalBasePrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GrossProfitTotalBasePrice',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.costingCode2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode2', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.costingCode3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode3', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.costingCode4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode4', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.costingCode5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode5', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.itemDetails} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDetails: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemDetails', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.locationCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LocationCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.actualDeliveryDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualDeliveryDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ActualDeliveryDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link DocumentLine.remainingOpenQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingOpenQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RemainingOpenQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.openAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OpenAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.openAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OpenAmountFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.openAmountSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmountSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OpenAmountSC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.exLineNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exLineNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExLineNo', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.requiredDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  requiredDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RequiredDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link DocumentLine.requiredQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  requiredQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RequiredQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.cogsCostingCode2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cogsCostingCode2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'COGSCostingCode2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.cogsCostingCode3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cogsCostingCode3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'COGSCostingCode3',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.cogsCostingCode4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cogsCostingCode4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'COGSCostingCode4',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.cogsCostingCode5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cogsCostingCode5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'COGSCostingCode5',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.csTforIpi} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  csTforIpi: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CSTforIPI', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.csTforPis} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  csTforPis: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CSTforPIS', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.csTforCofins} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  csTforCofins: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CSTforCOFINS', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.creditOriginCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditOriginCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreditOriginCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.withoutInventoryMovement} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withoutInventoryMovement: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'WithoutInventoryMovement',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link DocumentLine.agreementNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AgreementNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.agreementRowNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementRowNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AgreementRowNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentLine.actualBaseEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualBaseEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ActualBaseEntry',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentLine.actualBaseLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualBaseLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActualBaseLine', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.surpluses} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  surpluses: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Surpluses', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.defectAndBreakup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defectAndBreakup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefectAndBreakup',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.shortages} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shortages: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Shortages', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.considerQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  considerQuantity: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('ConsiderQuantity', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.partialRetirement} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  partialRetirement: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('PartialRetirement', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.retirementQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  retirementQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RetirementQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.retirementApc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  retirementApc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RetirementAPC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.thirdParty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  thirdParty: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ThirdParty', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.poNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PoNum', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.poItmNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poItmNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PoItmNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.expenseType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExpenseType', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.receiptNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receiptNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ReceiptNumber', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.expenseOperationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseOperationType: EnumField<
    EntityT,
    DeSerializersT,
    BoExpenseOperationTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ExpenseOperationType',
    BoExpenseOperationTypeEnum,
    true
  );
  /**
   * Representation of the {@link DocumentLine.federalTaxId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FederalTaxID', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.grossProfit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossProfit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossProfit', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.grossProfitFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossProfitFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossProfitFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.grossProfitSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossProfitSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossProfitSC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.priceSource} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceSource: EnumField<
    EntityT,
    DeSerializersT,
    DocumentPriceSourceEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'PriceSource',
    DocumentPriceSourceEnum,
    true
  );
  /**
   * Representation of the {@link DocumentLine.enableReturnCost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableReturnCost: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('EnableReturnCost', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.returnCost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  returnCost: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ReturnCost', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.lineVendor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineVendor: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineVendor', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.returnAction} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  returnAction: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ReturnAction', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.returnReason} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  returnReason: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ReturnReason', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.stgSeqNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stgSeqNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StgSeqNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.stgEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stgEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StgEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.stgDesc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stgDesc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StgDesc', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uoMEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.uoMCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.inventoryQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.remainingOpenInventoryQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingOpenInventoryQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RemainingOpenInventoryQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.parentLineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  parentLineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ParentLineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.incoterms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  incoterms: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Incoterms', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.transportMode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transportMode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TransportMode', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.natureOfTransaction} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  natureOfTransaction: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NatureOfTransaction',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentLine.destinationCountryForImport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  destinationCountryForImport: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DestinationCountryForImport',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.destinationRegionForImport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  destinationRegionForImport: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DestinationRegionForImport',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentLine.originCountryForExport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originCountryForExport: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OriginCountryForExport',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.originRegionForExport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originRegionForExport: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OriginRegionForExport',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentLine.itemType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemType: EnumField<EntityT, DeSerializersT, BoDocItemType, true, false> =
    this._fieldBuilder.buildEnumField('ItemType', BoDocItemType, true);
  /**
   * Representation of the {@link DocumentLine.changeInventoryQuantityIndependently} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeInventoryQuantityIndependently: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ChangeInventoryQuantityIndependently',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link DocumentLine.freeOfChargeBp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeOfChargeBp: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('FreeOfChargeBP', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.sacEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sacEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SACEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.hsnEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hsnEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('HSNEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.grossPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossPrice', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.grossTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossTotal', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.grossTotalFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotalFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossTotalFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.grossTotalSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossTotalSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossTotalSC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.ncmCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ncmCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NCMCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.nveCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nveCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NVECode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.indEscala} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  indEscala: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IndEscala', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.ctrSealQty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ctrSealQty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CtrSealQty', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.cnjpMan} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cnjpMan: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CNJPMan', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.cestCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cestCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CESTCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.ufFiscalBenefitCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ufFiscalBenefitCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UFFiscalBenefitCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.reverseCharge} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reverseCharge: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ReverseCharge', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.shipToCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.shipToDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.shipFromCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipFromCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipFromCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.shipFromDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipFromDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipFromDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.externalCalcTaxRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCalcTaxRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalCalcTaxRate',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.externalCalcTaxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCalcTaxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalCalcTaxAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.externalCalcTaxAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCalcTaxAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalCalcTaxAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.externalCalcTaxAmountSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCalcTaxAmountSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalCalcTaxAmountSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.standardItemIdentification} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  standardItemIdentification: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StandardItemIdentification',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentLine.commodityClassification} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commodityClassification: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CommodityClassification',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentLine.weightOfRecycledPlastic} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weightOfRecycledPlastic: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WeightOfRecycledPlastic',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentLine.plasticPackageExemptionReason} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plasticPackageExemptionReason: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PlasticPackageExemptionReason',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.unencumberedReason} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unencumberedReason: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UnencumberedReason',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentLine.cuSplit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cuSplit: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('CUSplit', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLine.listNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  listNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ListNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.recognizedTaxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  recognizedTaxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RecognizedTaxCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.uBnBpCtry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnBpCtry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNBpCtry', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uBnOriCtr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnOriCtr: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNOriCtr', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uBnOriSta} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnOriSta: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNOriSta', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uBnDstSta} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnDstSta: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNDstSta', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uBnIncTrm} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnIncTrm: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNIncTrm', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uBntaType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBntaType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNTAType', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uBnTrnMod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnTrnMod: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNTrnMod', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uBnPort} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnPort: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNPort', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uBnCstPrc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnCstPrc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNCstPrc', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uBnTaxExt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnTaxExt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNTaxExt', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uBnBrdVal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnBrdVal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNBrdVal', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.uBnComCod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnComCod: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNComCod', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uBnSupUnt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnSupUnt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNSupUnt', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uBnSupMas} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnSupMas: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNSupMas', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.uBnRelDec} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnRelDec: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNRelDec', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uBnDomFrg} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBnDomFrg: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BNDomFrg', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uNettopr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uNettopr: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_nettopr', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.uBldLyId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBldLyId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BLD_LyID', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.uBldNCps} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBldNCps: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BLD_NCps', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.uPenkaMontage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uPenkaMontage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_Penka_Montage',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.uPenkaIltisStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uPenkaIltisStatus: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_Penka_Iltis_Status',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.uStl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uStl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_STL', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.uStlPreis} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uStlPreis: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_STL_PREIS', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentLine.uBezeichnung2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBezeichnung2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_Bezeichnung2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.uProjektpreisPosition} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uProjektpreisPosition: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_ProjektpreisPosition',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentLine.uLvoz} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uLvoz: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_LVOZ', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentLine.lineTaxJurisdictions} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTaxJurisdictions: CollectionField<
    EntityT,
    DeSerializersT,
    LineTaxJurisdiction,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'LineTaxJurisdictions',
    LineTaxJurisdiction,
    true
  );
  /**
   * Representation of the {@link DocumentLine.generatedAssets} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  generatedAssets: CollectionField<
    EntityT,
    DeSerializersT,
    GeneratedAsset,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'GeneratedAssets',
    GeneratedAsset,
    true
  );
  /**
   * Representation of the {@link DocumentLine.eBooksDetails} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eBooksDetails: CollectionField<
    EntityT,
    DeSerializersT,
    EBooksDetail,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'EBooksDetails',
    EBooksDetail,
    true
  );
  /**
   * Representation of the {@link DocumentLine.documentLineAdditionalExpenses} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentLineAdditionalExpenses: CollectionField<
    EntityT,
    DeSerializersT,
    DocumentLineAdditionalExpense,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'DocumentLineAdditionalExpenses',
    DocumentLineAdditionalExpense,
    true
  );
  /**
   * Representation of the {@link DocumentLine.withholdingTaxLines} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxLines: CollectionField<
    EntityT,
    DeSerializersT,
    WithholdingTaxLine,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WithholdingTaxLines',
    WithholdingTaxLine,
    true
  );
  /**
   * Representation of the {@link DocumentLine.serialNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    SerialNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'SerialNumbers',
    SerialNumber,
    true
  );
  /**
   * Representation of the {@link DocumentLine.batchNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    BatchNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'BatchNumbers',
    BatchNumber,
    true
  );
  /**
   * Representation of the {@link DocumentLine.documentLinesBinAllocations} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentLinesBinAllocations: CollectionField<
    EntityT,
    DeSerializersT,
    DocumentLinesBinAllocation,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'DocumentLinesBinAllocations',
    DocumentLinesBinAllocation,
    true
  );
  /**
   * Representation of the {@link DocumentLine.exportProcesses} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportProcesses: CollectionField<
    EntityT,
    DeSerializersT,
    ExportProcess,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'ExportProcesses',
    ExportProcess,
    true
  );
  /**
   * Representation of the {@link DocumentLine.ccdNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ccdNumbers: CollectionField<EntityT, DeSerializersT, CcdNumber, true, false> =
    this._fieldBuilder.buildCollectionField('CCDNumbers', CcdNumber, true);
  /**
   * Representation of the {@link DocumentLine.ownerCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ownerCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OwnerCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLine.importProcesses} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importProcesses: CollectionField<
    EntityT,
    DeSerializersT,
    ImportProcess,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'ImportProcesses',
    ImportProcess,
    true
  );

  /**
   * Creates an instance of DocumentLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DocumentLine, fieldOptions);
  }
}

export namespace DocumentLine {
  /**
   * Metadata information on all properties of the `DocumentLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentLine>[] = [
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ItemCode',
      name: 'itemCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemDescription',
      name: 'itemDescription',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Quantity',
      name: 'quantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ShipDate',
      name: 'shipDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Price',
      name: 'price',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PriceAfterVAT',
      name: 'priceAfterVat',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Currency',
      name: 'currency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Rate',
      name: 'rate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DiscountPercent',
      name: 'discountPercent',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VendorNum',
      name: 'vendorNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SerialNum',
      name: 'serialNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WarehouseCode',
      name: 'warehouseCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SalesPersonCode',
      name: 'salesPersonCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CommisionPercent',
      name: 'commisionPercent',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TreeType',
      name: 'treeType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AccountCode',
      name: 'accountCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UseBaseUnits',
      name: 'useBaseUnits',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SupplierCatNum',
      name: 'supplierCatNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode',
      name: 'costingCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ProjectCode',
      name: 'projectCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BarCode',
      name: 'barCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VatGroup',
      name: 'vatGroup',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Height1',
      name: 'height1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Hight1Unit',
      name: 'hight1Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Height2',
      name: 'height2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Height2Unit',
      name: 'height2Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Lengh1',
      name: 'lengh1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Lengh1Unit',
      name: 'lengh1Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Lengh2',
      name: 'lengh2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Lengh2Unit',
      name: 'lengh2Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Weight1',
      name: 'weight1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Weight1Unit',
      name: 'weight1Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Weight2',
      name: 'weight2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Weight2Unit',
      name: 'weight2Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Factor1',
      name: 'factor1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Factor2',
      name: 'factor2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Factor3',
      name: 'factor3',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Factor4',
      name: 'factor4',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseType',
      name: 'baseType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseEntry',
      name: 'baseEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseLine',
      name: 'baseLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Volume',
      name: 'volume',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VolumeUnit',
      name: 'volumeUnit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Width1',
      name: 'width1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Width1Unit',
      name: 'width1Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Width2',
      name: 'width2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Width2Unit',
      name: 'width2Unit',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Address',
      name: 'address',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxCode',
      name: 'taxCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxType',
      name: 'taxType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TaxLiable',
      name: 'taxLiable',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PickStatus',
      name: 'pickStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PickQuantity',
      name: 'pickQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PickListIdNumber',
      name: 'pickListIdNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'OriginalItem',
      name: 'originalItem',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BackOrder',
      name: 'backOrder',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'FreeText',
      name: 'freeText',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShippingMethod',
      name: 'shippingMethod',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'POTargetNum',
      name: 'poTargetNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'POTargetEntry',
      name: 'poTargetEntry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'POTargetRowNum',
      name: 'poTargetRowNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CorrectionInvoiceItem',
      name: 'correctionInvoiceItem',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CorrInvAmountToStock',
      name: 'corrInvAmountToStock',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CorrInvAmountToDiffAcct',
      name: 'corrInvAmountToDiffAcct',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AppliedTax',
      name: 'appliedTax',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AppliedTaxFC',
      name: 'appliedTaxFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AppliedTaxSC',
      name: 'appliedTaxSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WTLiable',
      name: 'wtLiable',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DeferredTax',
      name: 'deferredTax',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EqualizationTaxPercent',
      name: 'equalizationTaxPercent',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalEqualizationTax',
      name: 'totalEqualizationTax',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalEqualizationTaxFC',
      name: 'totalEqualizationTaxFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalEqualizationTaxSC',
      name: 'totalEqualizationTaxSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'NetTaxAmount',
      name: 'netTaxAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'NetTaxAmountFC',
      name: 'netTaxAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'NetTaxAmountSC',
      name: 'netTaxAmountSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'MeasureUnit',
      name: 'measureUnit',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UnitsOfMeasurment',
      name: 'unitsOfMeasurment',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LineTotal',
      name: 'lineTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxPercentagePerRow',
      name: 'taxPercentagePerRow',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxTotal',
      name: 'taxTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ConsumerSalesForecast',
      name: 'consumerSalesForecast',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ExciseAmount',
      name: 'exciseAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxPerUnit',
      name: 'taxPerUnit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalInclTax',
      name: 'totalInclTax',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CountryOrg',
      name: 'countryOrg',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SWW',
      name: 'sww',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TransactionType',
      name: 'transactionType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DistributeExpense',
      name: 'distributeExpense',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'RowTotalFC',
      name: 'rowTotalFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'RowTotalSC',
      name: 'rowTotalSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LastBuyInmPrice',
      name: 'lastBuyInmPrice',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LastBuyDistributeSumFc',
      name: 'lastBuyDistributeSumFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LastBuyDistributeSumSc',
      name: 'lastBuyDistributeSumSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LastBuyDistributeSum',
      name: 'lastBuyDistributeSum',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'StockDistributesumForeign',
      name: 'stockDistributesumForeign',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'StockDistributesumSystem',
      name: 'stockDistributesumSystem',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'StockDistributesum',
      name: 'stockDistributesum',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'StockInmPrice',
      name: 'stockInmPrice',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PickStatusEx',
      name: 'pickStatusEx',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TaxBeforeDPM',
      name: 'taxBeforeDpm',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxBeforeDPMFC',
      name: 'taxBeforeDpmfc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxBeforeDPMSC',
      name: 'taxBeforeDpmsc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CFOPCode',
      name: 'cfopCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CSTCode',
      name: 'cstCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Usage',
      name: 'usage',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TaxOnly',
      name: 'taxOnly',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'VisualOrder',
      name: 'visualOrder',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseOpenQuantity',
      name: 'baseOpenQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'UnitPrice',
      name: 'unitPrice',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LineStatus',
      name: 'lineStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PackageQuantity',
      name: 'packageQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Text',
      name: 'text',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LineType',
      name: 'lineType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'COGSCostingCode',
      name: 'cogsCostingCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'COGSAccountCode',
      name: 'cogsAccountCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ChangeAssemlyBoMWarehouse',
      name: 'changeAssemlyBoMWarehouse',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GrossBuyPrice',
      name: 'grossBuyPrice',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossBase',
      name: 'grossBase',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GrossProfitTotalBasePrice',
      name: 'grossProfitTotalBasePrice',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CostingCode2',
      name: 'costingCode2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode3',
      name: 'costingCode3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode4',
      name: 'costingCode4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode5',
      name: 'costingCode5',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemDetails',
      name: 'itemDetails',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LocationCode',
      name: 'locationCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ActualDeliveryDate',
      name: 'actualDeliveryDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'RemainingOpenQuantity',
      name: 'remainingOpenQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'OpenAmount',
      name: 'openAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'OpenAmountFC',
      name: 'openAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'OpenAmountSC',
      name: 'openAmountSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ExLineNo',
      name: 'exLineNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RequiredDate',
      name: 'requiredDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'RequiredQuantity',
      name: 'requiredQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'COGSCostingCode2',
      name: 'cogsCostingCode2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'COGSCostingCode3',
      name: 'cogsCostingCode3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'COGSCostingCode4',
      name: 'cogsCostingCode4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'COGSCostingCode5',
      name: 'cogsCostingCode5',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CSTforIPI',
      name: 'csTforIpi',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CSTforPIS',
      name: 'csTforPis',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CSTforCOFINS',
      name: 'csTforCofins',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CreditOriginCode',
      name: 'creditOriginCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WithoutInventoryMovement',
      name: 'withoutInventoryMovement',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AgreementNo',
      name: 'agreementNo',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AgreementRowNumber',
      name: 'agreementRowNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ActualBaseEntry',
      name: 'actualBaseEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ActualBaseLine',
      name: 'actualBaseLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Surpluses',
      name: 'surpluses',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DefectAndBreakup',
      name: 'defectAndBreakup',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Shortages',
      name: 'shortages',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ConsiderQuantity',
      name: 'considerQuantity',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PartialRetirement',
      name: 'partialRetirement',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'RetirementQuantity',
      name: 'retirementQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'RetirementAPC',
      name: 'retirementApc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ThirdParty',
      name: 'thirdParty',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PoNum',
      name: 'poNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PoItmNum',
      name: 'poItmNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExpenseType',
      name: 'expenseType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReceiptNumber',
      name: 'receiptNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExpenseOperationType',
      name: 'expenseOperationType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'FederalTaxID',
      name: 'federalTaxId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GrossProfit',
      name: 'grossProfit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossProfitFC',
      name: 'grossProfitFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossProfitSC',
      name: 'grossProfitSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PriceSource',
      name: 'priceSource',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableReturnCost',
      name: 'enableReturnCost',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ReturnCost',
      name: 'returnCost',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LineVendor',
      name: 'lineVendor',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReturnAction',
      name: 'returnAction',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ReturnReason',
      name: 'returnReason',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StgSeqNum',
      name: 'stgSeqNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StgEntry',
      name: 'stgEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StgDesc',
      name: 'stgDesc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UoMEntry',
      name: 'uoMEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UoMCode',
      name: 'uoMCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InventoryQuantity',
      name: 'inventoryQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'RemainingOpenInventoryQuantity',
      name: 'remainingOpenInventoryQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ParentLineNum',
      name: 'parentLineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Incoterms',
      name: 'incoterms',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TransportMode',
      name: 'transportMode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NatureOfTransaction',
      name: 'natureOfTransaction',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DestinationCountryForImport',
      name: 'destinationCountryForImport',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DestinationRegionForImport',
      name: 'destinationRegionForImport',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'OriginCountryForExport',
      name: 'originCountryForExport',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'OriginRegionForExport',
      name: 'originRegionForExport',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ItemType',
      name: 'itemType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ChangeInventoryQuantityIndependently',
      name: 'changeInventoryQuantityIndependently',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'FreeOfChargeBP',
      name: 'freeOfChargeBp',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SACEntry',
      name: 'sacEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'HSNEntry',
      name: 'hsnEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GrossPrice',
      name: 'grossPrice',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossTotal',
      name: 'grossTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossTotalFC',
      name: 'grossTotalFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossTotalSC',
      name: 'grossTotalSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'NCMCode',
      name: 'ncmCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NVECode',
      name: 'nveCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IndEscala',
      name: 'indEscala',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CtrSealQty',
      name: 'ctrSealQty',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CNJPMan',
      name: 'cnjpMan',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CESTCode',
      name: 'cestCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UFFiscalBenefitCode',
      name: 'ufFiscalBenefitCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReverseCharge',
      name: 'reverseCharge',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ShipToCode',
      name: 'shipToCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToDescription',
      name: 'shipToDescription',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipFromCode',
      name: 'shipFromCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipFromDescription',
      name: 'shipFromDescription',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExternalCalcTaxRate',
      name: 'externalCalcTaxRate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ExternalCalcTaxAmount',
      name: 'externalCalcTaxAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ExternalCalcTaxAmountFC',
      name: 'externalCalcTaxAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ExternalCalcTaxAmountSC',
      name: 'externalCalcTaxAmountSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'StandardItemIdentification',
      name: 'standardItemIdentification',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CommodityClassification',
      name: 'commodityClassification',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'WeightOfRecycledPlastic',
      name: 'weightOfRecycledPlastic',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PlasticPackageExemptionReason',
      name: 'plasticPackageExemptionReason',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UnencumberedReason',
      name: 'unencumberedReason',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CUSplit',
      name: 'cuSplit',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ListNum',
      name: 'listNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RecognizedTaxCode',
      name: 'recognizedTaxCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNBpCtry',
      name: 'uBnBpCtry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNOriCtr',
      name: 'uBnOriCtr',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNOriSta',
      name: 'uBnOriSta',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNDstSta',
      name: 'uBnDstSta',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNIncTrm',
      name: 'uBnIncTrm',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNTAType',
      name: 'uBntaType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNTrnMod',
      name: 'uBnTrnMod',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNPort',
      name: 'uBnPort',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNCstPrc',
      name: 'uBnCstPrc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNTaxExt',
      name: 'uBnTaxExt',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNBrdVal',
      name: 'uBnBrdVal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_BNComCod',
      name: 'uBnComCod',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNSupUnt',
      name: 'uBnSupUnt',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNSupMas',
      name: 'uBnSupMas',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_BNRelDec',
      name: 'uBnRelDec',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BNDomFrg',
      name: 'uBnDomFrg',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_nettopr',
      name: 'uNettopr',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_BLD_LyID',
      name: 'uBldLyId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'U_BLD_NCps',
      name: 'uBldNCps',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'U_Penka_Montage',
      name: 'uPenkaMontage',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_Penka_Iltis_Status',
      name: 'uPenkaIltisStatus',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_STL',
      name: 'uStl',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_STL_PREIS',
      name: 'uStlPreis',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_Bezeichnung2',
      name: 'uBezeichnung2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_ProjektpreisPosition',
      name: 'uProjektpreisPosition',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_LVOZ',
      name: 'uLvoz',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LineTaxJurisdictions',
      name: 'lineTaxJurisdictions',
      type: LineTaxJurisdiction,
      isCollection: true
    },
    {
      originalName: 'GeneratedAssets',
      name: 'generatedAssets',
      type: GeneratedAsset,
      isCollection: true
    },
    {
      originalName: 'EBooksDetails',
      name: 'eBooksDetails',
      type: EBooksDetail,
      isCollection: true
    },
    {
      originalName: 'DocumentLineAdditionalExpenses',
      name: 'documentLineAdditionalExpenses',
      type: DocumentLineAdditionalExpense,
      isCollection: true
    },
    {
      originalName: 'WithholdingTaxLines',
      name: 'withholdingTaxLines',
      type: WithholdingTaxLine,
      isCollection: true
    },
    {
      originalName: 'SerialNumbers',
      name: 'serialNumbers',
      type: SerialNumber,
      isCollection: true
    },
    {
      originalName: 'BatchNumbers',
      name: 'batchNumbers',
      type: BatchNumber,
      isCollection: true
    },
    {
      originalName: 'DocumentLinesBinAllocations',
      name: 'documentLinesBinAllocations',
      type: DocumentLinesBinAllocation,
      isCollection: true
    },
    {
      originalName: 'ExportProcesses',
      name: 'exportProcesses',
      type: ExportProcess,
      isCollection: true
    },
    {
      originalName: 'CCDNumbers',
      name: 'ccdNumbers',
      type: CcdNumber,
      isCollection: true
    },
    {
      originalName: 'OwnerCode',
      name: 'ownerCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ImportProcesses',
      name: 'importProcesses',
      type: ImportProcess,
      isCollection: true
    }
  ];
}
