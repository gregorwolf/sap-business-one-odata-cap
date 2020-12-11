import { LineExpenseTaxJurisdiction } from './LineExpenseTaxJurisdiction';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAdEpnsTaxTypes } from './BoAdEpnsTaxTypes';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DocumentLineAdditionalExpense
 */
export interface DocumentLineAdditionalExpense {
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Group Code.
     * @nullable
     */
    groupCode?: number;
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
     * Wt Liable.
     * @nullable
     */
    wtLiable?: BoYesNoEnum;
    /**
     * Base Group.
     * @nullable
     */
    baseGroup?: number;
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
     * Line Expense Tax Jurisdictions.
     * @nullable
     */
    lineExpenseTaxJurisdictions?: LineExpenseTaxJurisdiction[];
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentLineAdditionalExpense.build]] instead.
 */
export declare function createDocumentLineAdditionalExpense(json: any): DocumentLineAdditionalExpense;
/**
 * DocumentLineAdditionalExpenseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentLineAdditionalExpenseField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentLineAdditionalExpense> {
    /**
     * Representation of the [[DocumentLineAdditionalExpense.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.groupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.expenseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expenseCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.lineTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.lineTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineTotalFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.lineTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineTotalSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.paidToDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paidToDate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.paidToDateFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paidToDateFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.paidToDateSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paidToDateSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.taxLiable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxLiable: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.vatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatGroup: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.taxPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.taxSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.taxSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxSumFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.taxSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxSumSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.deductibleTaxSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deductibleTaxSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.deductibleTaxSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deductibleTaxSumFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.deductibleTaxSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deductibleTaxSumSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.aquisitionTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aquisitionTax: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.taxType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.taxPaid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxPaid: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.taxPaidFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxPaidFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.taxPaidSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxPaidSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equalizationTaxPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equalizationTaxSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equalizationTaxFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equalizationTaxSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.taxTotalSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxTotalSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.taxTotalSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxTotalSumFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.taxTotalSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxTotalSumSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.wtLiable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtLiable: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.baseGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseGroup: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.project]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    project: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLineAdditionalExpense.lineExpenseTaxJurisdictions]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineExpenseTaxJurisdictions: CollectionField<EntityT, LineExpenseTaxJurisdiction>;
    /**
     * Creates an instance of DocumentLineAdditionalExpenseField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DocumentLineAdditionalExpense {
    /**
     * Metadata information on all properties of the `DocumentLineAdditionalExpense` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DocumentLineAdditionalExpense>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | LineExpenseTaxJurisdiction;
    }): DocumentLineAdditionalExpense;
}
//# sourceMappingURL=DocumentLineAdditionalExpense.d.ts.map