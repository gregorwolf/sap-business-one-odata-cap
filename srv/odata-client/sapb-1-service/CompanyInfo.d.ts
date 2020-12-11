import { BoYesNoEnum } from './BoYesNoEnum';
import { BoBaseDateRateEnum } from './BoBaseDateRateEnum';
import { BoManageMethod } from './BoManageMethod';
import { TaxCalcSysEnum } from './TaxCalcSysEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CompanyInfo
 */
export interface CompanyInfo {
    /**
     * Version.
     * @nullable
     */
    version?: number;
    /**
     * Enable Expenses Management.
     * @nullable
     */
    enableExpensesManagement?: BoYesNoEnum;
    /**
     * Enable Account Segmentation.
     * @nullable
     */
    enableAccountSegmentation?: BoYesNoEnum;
    /**
     * Enable Bill Of Exchange.
     * @nullable
     */
    enableBillOfExchange?: BoYesNoEnum;
    /**
     * Base Date For Exchange Rate.
     * @nullable
     */
    baseDateForExchangeRate?: BoBaseDateRateEnum;
    /**
     * Bisr Bank Act Key.
     * @nullable
     */
    bisrBankActKey?: number;
    /**
     * Bisr Bank Country.
     * @nullable
     */
    bisrBankCountry?: string;
    /**
     * Bisr Bank No.
     * @nullable
     */
    bisrBankNo?: string;
    /**
     * Bisr Bank Account.
     * @nullable
     */
    bisrBankAccount?: string;
    /**
     * Bisr Branch.
     * @nullable
     */
    bisrBranch?: string;
    /**
     * Max Records In Choose From List.
     * @nullable
     */
    maxRecordsInChooseFromList?: number;
    /**
     * Enable Check Quantity In Rdr.
     * @nullable
     */
    enableCheckQuantityInRdr?: BoYesNoEnum;
    /**
     * Sri Management System.
     * @nullable
     */
    sriManagementSystem?: BoManageMethod;
    /**
     * Auto Sri Creation On Receipt.
     * @nullable
     */
    autoSriCreationOnReceipt?: BoYesNoEnum;
    /**
     * Ieps Payer.
     * @nullable
     */
    iepsPayer?: BoYesNoEnum;
    /**
     * Default Days For Ord Canc.
     * @nullable
     */
    defaultDaysForOrdCanc?: number;
    /**
     * Percent Of Total Acquisition.
     * @nullable
     */
    percentOfTotalAcquisition?: number;
    /**
     * Minimum Base Amount Per Doc.
     * @nullable
     */
    minimumBaseAmountPerDoc?: number;
    /**
     * Enable Sharing Series.
     * @nullable
     */
    enableSharingSeries?: BoYesNoEnum;
    /**
     * Data Ownership Indication.
     * @nullable
     */
    dataOwnershipIndication?: BoYesNoEnum;
    /**
     * Minimum Amount For Appndix Op.
     * @nullable
     */
    minimumAmountForAppndixOp?: number;
    /**
     * Display Transactions By Dflt.
     * @nullable
     */
    displayTransactionsByDflt?: BoYesNoEnum;
    /**
     * Default Stamp Tax.
     * @nullable
     */
    defaultStampTax?: string;
    /**
     * Minimum Amount For Annual List.
     * @nullable
     */
    minimumAmountForAnnualList?: number;
    /**
     * Block Stock Negative Quantity.
     * @nullable
     */
    blockStockNegativeQuantity?: BoYesNoEnum;
    /**
     * Auto Create Customer Eq Card.
     * @nullable
     */
    autoCreateCustomerEqCard?: BoYesNoEnum;
    /**
     * Max Number Of Documents In Pmt.
     * @nullable
     */
    maxNumberOfDocumentsInPmt?: number;
    /**
     * Enable Stock Rel No Cost Price.
     * @nullable
     */
    enableStockRelNoCostPrice?: BoYesNoEnum;
    /**
     * Company Name.
     * @nullable
     */
    companyName?: string;
    /**
     * Group Lines In Vat Calculation.
     * @nullable
     */
    groupLinesInVatCalculation?: BoYesNoEnum;
    /**
     * Tax Calculation System.
     * @nullable
     */
    taxCalculationSystem?: TaxCalcSysEnum;
    /**
     * Enable Transaction Notification.
     * @nullable
     */
    enableTransactionNotification?: BoYesNoEnum;
    /**
     * Enable Conversion Different Acct.
     * @nullable
     */
    enableConversionDifferentAcct?: BoYesNoEnum;
    /**
     * B 1 I Time Out.
     * @nullable
     */
    b1ITimeOut?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CompanyInfo.build]] instead.
 */
export declare function createCompanyInfo(json: any): CompanyInfo;
/**
 * CompanyInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CompanyInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CompanyInfo> {
    /**
     * Representation of the [[CompanyInfo.version]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    version: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.enableExpensesManagement]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableExpensesManagement: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.enableAccountSegmentation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableAccountSegmentation: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.enableBillOfExchange]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableBillOfExchange: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.baseDateForExchangeRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDateForExchangeRate: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.bisrBankActKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bisrBankActKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.bisrBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bisrBankCountry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.bisrBankNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bisrBankNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.bisrBankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bisrBankAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.bisrBranch]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bisrBranch: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.maxRecordsInChooseFromList]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maxRecordsInChooseFromList: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.enableCheckQuantityInRdr]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableCheckQuantityInRdr: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.sriManagementSystem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sriManagementSystem: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.autoSriCreationOnReceipt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    autoSriCreationOnReceipt: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.iepsPayer]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    iepsPayer: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.defaultDaysForOrdCanc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultDaysForOrdCanc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.percentOfTotalAcquisition]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    percentOfTotalAcquisition: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.minimumBaseAmountPerDoc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    minimumBaseAmountPerDoc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.enableSharingSeries]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableSharingSeries: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.dataOwnershipIndication]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dataOwnershipIndication: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.minimumAmountForAppndixOp]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    minimumAmountForAppndixOp: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.displayTransactionsByDflt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayTransactionsByDflt: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.defaultStampTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultStampTax: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.minimumAmountForAnnualList]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    minimumAmountForAnnualList: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.blockStockNegativeQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockStockNegativeQuantity: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.autoCreateCustomerEqCard]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    autoCreateCustomerEqCard: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.maxNumberOfDocumentsInPmt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maxNumberOfDocumentsInPmt: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.enableStockRelNoCostPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableStockRelNoCostPrice: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.companyName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    companyName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.groupLinesInVatCalculation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupLinesInVatCalculation: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.taxCalculationSystem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCalculationSystem: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.enableTransactionNotification]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableTransactionNotification: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.enableConversionDifferentAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableConversionDifferentAcct: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.b1ITimeOut]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    b1ITimeOut: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of CompanyInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CompanyInfo {
    /**
     * Metadata information on all properties of the `CompanyInfo` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CompanyInfo>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CompanyInfo;
}
//# sourceMappingURL=CompanyInfo.d.ts.map