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
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare function createDocumentLine(json: any): DocumentLine;
/**
 * DocumentLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DocumentLine.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.shipDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.price]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    price: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.priceAfterVat]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceAfterVat: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discountPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.vendorNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vendorNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.serialNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serialNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesPersonCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.commisionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    commisionPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.supplierCatNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    supplierCatNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.costingCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    projectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.barCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    barCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.vatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatGroup: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.height1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    height1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.hight1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    hight1Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.height2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    height2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.height2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    height2Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.lengh1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lengh1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.lengh1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lengh1Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.lengh2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lengh2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.lengh2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lengh2Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.weight1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.weight1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight1Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.weight2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.weight2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weight2Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.factor1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.factor2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.factor3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor3: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.factor4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor4: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.baseType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.baseEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.baseLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.volume]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    volume: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.volumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    volumeUnit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.width1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.width1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width1Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.width2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.width2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width2Unit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.address]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    address: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.pickQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pickQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.pickListIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pickListIdNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.originalItem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    originalItem: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.freeText]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freeText: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.shippingMethod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shippingMethod: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.poTargetNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    poTargetNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.poTargetEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    poTargetEntry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.poTargetRowNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    poTargetRowNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.corrInvAmountToStock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    corrInvAmountToStock: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.corrInvAmountToDiffAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    corrInvAmountToDiffAcct: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.appliedTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedTax: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.appliedTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedTaxFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.appliedTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedTaxSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.equalizationTaxPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equalizationTaxPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalEqualizationTax: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalEqualizationTaxFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalEqualizationTaxSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.netTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    netTaxAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.netTaxAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    netTaxAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.netTaxAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    netTaxAmountSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.measureUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    measureUnit: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.unitsOfMeasurment]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unitsOfMeasurment: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.lineTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.taxPercentagePerRow]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxPercentagePerRow: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.taxTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.exciseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exciseAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.taxPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxPerUnit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.totalInclTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalInclTax: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.countryOrg]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countryOrg: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.sww]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sww: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.rowTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowTotalFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.rowTotalSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowTotalSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.lastBuyInmPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastBuyInmPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.lastBuyDistributeSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastBuyDistributeSumFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.lastBuyDistributeSumSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastBuyDistributeSumSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.lastBuyDistributeSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastBuyDistributeSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.stockDistributesumForeign]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stockDistributesumForeign: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.stockDistributesumSystem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stockDistributesumSystem: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.stockDistributesum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stockDistributesum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.stockInmPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stockInmPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.taxBeforeDpm]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxBeforeDpm: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.taxBeforeDpmfc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxBeforeDpmfc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.taxBeforeDpmsc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxBeforeDpmsc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.cfopCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cfopCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.cstCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cstCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.usage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    usage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.visualOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    visualOrder: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.baseOpenQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseOpenQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.unitPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unitPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.packageQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    packageQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.text]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    text: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.cogsCostingCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cogsCostingCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.cogsAccountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cogsAccountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.changeAssemlyBoMWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changeAssemlyBoMWarehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.grossBuyPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossBuyPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.grossBase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossBase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.grossProfitTotalBasePrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossProfitTotalBasePrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.costingCode2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.costingCode3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.costingCode4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.costingCode5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.itemDetails]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemDetails: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.locationCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    locationCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.actualDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualDeliveryDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.remainingOpenQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remainingOpenQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.openAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.openAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.openAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openAmountSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.exLineNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exLineNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.requiredDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    requiredDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.requiredQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    requiredQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.cogsCostingCode2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cogsCostingCode2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.cogsCostingCode3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cogsCostingCode3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.cogsCostingCode4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cogsCostingCode4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.cogsCostingCode5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cogsCostingCode5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.csTforIpi]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    csTforIpi: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.csTforPis]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    csTforPis: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.csTforCofins]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    csTforCofins: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.creditOriginCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditOriginCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.agreementNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.agreementRowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementRowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.shipToDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.actualBaseEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualBaseEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.actualBaseLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualBaseLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.surpluses]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    surpluses: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.defectAndBreakup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defectAndBreakup: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.shortages]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shortages: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.retirementQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    retirementQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.retirementApc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    retirementApc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.expenseType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expenseType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.receiptNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    receiptNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    federalTaxId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.returnCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    returnCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.lineVendor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineVendor: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.stgSeqNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stgSeqNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.stgEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stgEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.stgDesc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stgDesc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.uoMCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.inventoryQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.remainingOpenInventoryQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remainingOpenInventoryQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.parentLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    parentLineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.incoterms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    incoterms: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.transportMode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transportMode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.sacEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sacEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.hsnEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    hsnEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.grossPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.grossTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.grossTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossTotalFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.grossTotalSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossTotalSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.ncmCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ncmCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.lineTaxJurisdictions]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineTaxJurisdictions: LineTaxJurisdictionField<EntityT>;
    /**
     * Representation of the [[DocumentLine.generatedAssets]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    generatedAssets: GeneratedAssetField<EntityT>;
    /**
     * Representation of the [[DocumentLine.documentLineAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentLineAdditionalExpenses: DocumentLineAdditionalExpenseField<EntityT>;
    /**
     * Representation of the [[DocumentLine.withholdingTaxLines]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    withholdingTaxLines: WithholdingTaxLineField<EntityT>;
    /**
     * Representation of the [[DocumentLine.serialNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serialNumbers: SerialNumberField<EntityT>;
    /**
     * Representation of the [[DocumentLine.batchNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    batchNumbers: BatchNumberField<EntityT>;
    /**
     * Representation of the [[DocumentLine.documentLinesBinAllocations]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentLinesBinAllocations: DocumentLinesBinAllocationField<EntityT>;
    /**
     * Representation of the [[DocumentLine.exportProcesses]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exportProcesses: ExportProcessField<EntityT>;
    /**
     * Representation of the [[DocumentLine.returnAction]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    returnAction: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.returnReason]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    returnReason: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLine.importProcesses]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    importProcesses: ImportProcessField<EntityT>;
}
export declare namespace DocumentLine {
    function build(json: {
        [keys: string]: FieldType | BatchNumber | DocumentLineAdditionalExpense | DocumentLinesBinAllocation | ExportProcess | GeneratedAsset | ImportProcess | LineTaxJurisdiction | SerialNumber | WithholdingTaxLine;
    }): DocumentLine;
}
//# sourceMappingURL=DocumentLine.d.ts.map