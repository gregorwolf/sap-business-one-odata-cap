import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
     * Minimum Amount For Appndix Op.
     * @nullable
     */
    minimumAmountForAppndixOp?: number;
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
     * Max Number Of Documents In Pmt.
     * @nullable
     */
    maxNumberOfDocumentsInPmt?: number;
    /**
     * Company Name.
     * @nullable
     */
    companyName?: string;
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
export declare class CompanyInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CompanyInfo.version]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    version: ComplexTypeNumberPropertyField<EntityT>;
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
     * Representation of the [[CompanyInfo.minimumAmountForAppndixOp]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    minimumAmountForAppndixOp: ComplexTypeNumberPropertyField<EntityT>;
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
     * Representation of the [[CompanyInfo.maxNumberOfDocumentsInPmt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maxNumberOfDocumentsInPmt: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.companyName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    companyName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CompanyInfo.b1ITimeOut]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    b1ITimeOut: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace CompanyInfo {
    function build(json: {
        [keys: string]: FieldType;
    }): CompanyInfo;
}
//# sourceMappingURL=CompanyInfo.d.ts.map