import { DocExpenseTaxJurisdiction } from './DocExpenseTaxJurisdiction';
import { BoAdEpnsDistribMethods } from './BoAdEpnsDistribMethods';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAdEpnsTaxTypes } from './BoAdEpnsTaxTypes';
import { BoStatus } from './BoStatus';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DocumentAdditionalExpense
 */
export interface DocumentAdditionalExpense {
    /**
     * Expense Code.
     * @nullable
     */
    expenseCode?: number;
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
     * Line Total Sys.
     * @nullable
     */
    lineTotalSys?: number;
    /**
     * Paid To Date.
     * @nullable
     */
    paidToDate?: number;
    /**
     * Paid To Date Fc.
     * @nullable
     */
    paidToDateFc?: number;
    /**
     * Paid To Date Sys.
     * @nullable
     */
    paidToDateSys?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Distribution Method.
     * @nullable
     */
    distributionMethod?: BoAdEpnsDistribMethods;
    /**
     * Tax Liable.
     * @nullable
     */
    taxLiable?: BoYesNoEnum;
    /**
     * Vat Group.
     * @nullable
     */
    vatGroup?: string;
    /**
     * Tax Percent.
     * @nullable
     */
    taxPercent?: number;
    /**
     * Tax Sum.
     * @nullable
     */
    taxSum?: number;
    /**
     * Tax Sum Fc.
     * @nullable
     */
    taxSumFc?: number;
    /**
     * Tax Sum Sys.
     * @nullable
     */
    taxSumSys?: number;
    /**
     * Deductible Tax Sum.
     * @nullable
     */
    deductibleTaxSum?: number;
    /**
     * Deductible Tax Sum Fc.
     * @nullable
     */
    deductibleTaxSumFc?: number;
    /**
     * Deductible Tax Sum Sys.
     * @nullable
     */
    deductibleTaxSumSys?: number;
    /**
     * Aquisition Tax.
     * @nullable
     */
    aquisitionTax?: BoYesNoEnum;
    /**
     * Tax Code.
     * @nullable
     */
    taxCode?: string;
    /**
     * Tax Type.
     * @nullable
     */
    taxType?: BoAdEpnsTaxTypes;
    /**
     * Tax Paid.
     * @nullable
     */
    taxPaid?: number;
    /**
     * Tax Paid Fc.
     * @nullable
     */
    taxPaidFc?: number;
    /**
     * Tax Paid Sys.
     * @nullable
     */
    taxPaidSys?: number;
    /**
     * Equalization Tax Percent.
     * @nullable
     */
    equalizationTaxPercent?: number;
    /**
     * Equalization Tax Sum.
     * @nullable
     */
    equalizationTaxSum?: number;
    /**
     * Equalization Tax Fc.
     * @nullable
     */
    equalizationTaxFc?: number;
    /**
     * Equalization Tax Sys.
     * @nullable
     */
    equalizationTaxSys?: number;
    /**
     * Tax Total Sum.
     * @nullable
     */
    taxTotalSum?: number;
    /**
     * Tax Total Sum Fc.
     * @nullable
     */
    taxTotalSumFc?: number;
    /**
     * Tax Total Sum Sys.
     * @nullable
     */
    taxTotalSumSys?: number;
    /**
     * Base Doc Entry.
     * @nullable
     */
    baseDocEntry?: number;
    /**
     * Base Doc Line.
     * @nullable
     */
    baseDocLine?: number;
    /**
     * Base Doc Type.
     * @nullable
     */
    baseDocType?: number;
    /**
     * Base Document Reference.
     * @nullable
     */
    baseDocumentReference?: number;
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Last Purchase Price.
     * @nullable
     */
    lastPurchasePrice?: BoYesNoEnum;
    /**
     * Status.
     * @nullable
     */
    status?: BoStatus;
    /**
     * Stock.
     * @nullable
     */
    stock?: BoYesNoEnum;
    /**
     * Target Abs Entry.
     * @nullable
     */
    targetAbsEntry?: number;
    /**
     * Target Type.
     * @nullable
     */
    targetType?: number;
    /**
     * Wt Liable.
     * @nullable
     */
    wtLiable?: BoYesNoEnum;
    /**
     * Distribution Rule.
     * @nullable
     */
    distributionRule?: string;
    /**
     * Project.
     * @nullable
     */
    project?: string;
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
     * Line Gross.
     * @nullable
     */
    lineGross?: number;
    /**
     * Line Gross Sys.
     * @nullable
     */
    lineGrossSys?: number;
    /**
     * Line Gross Fc.
     * @nullable
     */
    lineGrossFc?: number;
    /**
     * Doc Expense Tax Jurisdictions.
     * @nullable
     */
    docExpenseTaxJurisdictions?: DocExpenseTaxJurisdiction[];
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentAdditionalExpense.build]] instead.
 */
export declare function createDocumentAdditionalExpense(json: any): DocumentAdditionalExpense;
/**
 * DocumentAdditionalExpenseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentAdditionalExpenseField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentAdditionalExpense> {
    /**
     * Representation of the [[DocumentAdditionalExpense.expenseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expenseCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.lineTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.lineTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineTotalFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.lineTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineTotalSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.paidToDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paidToDate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.paidToDateFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paidToDateFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.paidToDateSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paidToDateSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.distributionMethod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionMethod: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.taxLiable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxLiable: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.vatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatGroup: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.taxPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.taxSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.taxSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxSumFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.taxSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxSumSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.deductibleTaxSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deductibleTaxSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.deductibleTaxSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deductibleTaxSumFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.deductibleTaxSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deductibleTaxSumSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.aquisitionTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aquisitionTax: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.taxType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.taxPaid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxPaid: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.taxPaidFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxPaidFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.taxPaidSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxPaidSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.equalizationTaxPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equalizationTaxPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.equalizationTaxSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equalizationTaxSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.equalizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equalizationTaxFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.equalizationTaxSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equalizationTaxSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.taxTotalSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxTotalSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.taxTotalSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxTotalSumFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.taxTotalSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxTotalSumSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.baseDocEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.baseDocLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.baseDocType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.baseDocumentReference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocumentReference: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.lastPurchasePrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastPurchasePrice: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.stock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stock: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.targetAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetAbsEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.targetType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.wtLiable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtLiable: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.project]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    project: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.lineGross]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineGross: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.lineGrossSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineGrossSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.lineGrossFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineGrossFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentAdditionalExpense.docExpenseTaxJurisdictions]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docExpenseTaxJurisdictions: CollectionField<EntityT, DocExpenseTaxJurisdiction>;
    /**
     * Creates an instance of DocumentAdditionalExpenseField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DocumentAdditionalExpense {
    /**
     * Metadata information on all properties of the `DocumentAdditionalExpense` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DocumentAdditionalExpense>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | DocExpenseTaxJurisdiction;
    }): DocumentAdditionalExpense;
}
//# sourceMappingURL=DocumentAdditionalExpense.d.ts.map