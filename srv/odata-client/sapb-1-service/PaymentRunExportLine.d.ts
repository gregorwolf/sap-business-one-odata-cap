import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PaymentRunExportLine
 */
export interface PaymentRunExportLine {
    /**
     * Row Number.
     * @nullable
     */
    rowNumber?: number;
    /**
     * Date Of Payment Run.
     * @nullable
     */
    dateOfPaymentRun?: Moment;
    /**
     * Payment Wizard Code.
     * @nullable
     */
    paymentWizardCode?: number;
    /**
     * Vendor Number.
     * @nullable
     */
    vendorNumber?: string;
    /**
     * Customer Number.
     * @nullable
     */
    customerNumber?: string;
    /**
     * Payment Means.
     * @nullable
     */
    paymentMeans?: string;
    /**
     * Payment Doc Num.
     * @nullable
     */
    paymentDocNum?: number;
    /**
     * Fiscal Year.
     * @nullable
     */
    fiscalYear?: Moment;
    /**
     * Vendor Ref Num.
     * @nullable
     */
    vendorRefNum?: string;
    /**
     * Document Object Type.
     * @nullable
     */
    documentObjectType?: string;
    /**
     * Document Posting Date.
     * @nullable
     */
    documentPostingDate?: Moment;
    /**
     * Document Tax Date.
     * @nullable
     */
    documentTaxDate?: Moment;
    /**
     * Bp Debit Payable Account.
     * @nullable
     */
    bpDebitPayableAccount?: string;
    /**
     * Document Currency.
     * @nullable
     */
    documentCurrency?: string;
    /**
     * Document Rate.
     * @nullable
     */
    documentRate?: number;
    /**
     * Document Total.
     * @nullable
     */
    documentTotal?: number;
    /**
     * Document Total Fc.
     * @nullable
     */
    documentTotalFc?: number;
    /**
     * Document Tax Amount.
     * @nullable
     */
    documentTaxAmount?: number;
    /**
     * Document Tax Amount Fc.
     * @nullable
     */
    documentTaxAmountFc?: number;
    /**
     * Document Remarks.
     * @nullable
     */
    documentRemarks?: string;
    /**
     * Document Payment Terms.
     * @nullable
     */
    documentPaymentTerms?: number;
    /**
     * Payment Doc Reference.
     * @nullable
     */
    paymentDocReference?: string;
    /**
     * Document Local Currency.
     * @nullable
     */
    documentLocalCurrency?: string;
    /**
     * Payment Terms Period.
     * @nullable
     */
    paymentTermsPeriod?: number;
    /**
     * Document Object Type Ex.
     * @nullable
     */
    documentObjectTypeEx?: string;
    /**
     * Document Number.
     * @nullable
     */
    documentNumber?: number;
    /**
     * Payment Number.
     * @nullable
     */
    paymentNumber?: number;
    /**
     * Payment Order Num.
     * @nullable
     */
    paymentOrderNum?: number;
    /**
     * Free Text 1.
     * @nullable
     */
    freeText1?: string;
    /**
     * Free Text 2.
     * @nullable
     */
    freeText2?: string;
    /**
     * Free Text 3.
     * @nullable
     */
    freeText3?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PaymentRunExportLine.build]] instead.
 */
export declare function createPaymentRunExportLine(json: any): PaymentRunExportLine;
/**
 * PaymentRunExportLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentRunExportLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentRunExportLine> {
    /**
     * Representation of the [[PaymentRunExportLine.rowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.dateOfPaymentRun]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateOfPaymentRun: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.paymentWizardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentWizardCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.vendorNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vendorNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.customerNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customerNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.paymentMeans]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentMeans: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.paymentDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentDocNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.fiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fiscalYear: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.vendorRefNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vendorRefNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentObjectType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentPostingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentPostingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentTaxDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentTaxDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.bpDebitPayableAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpDebitPayableAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentTotalFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentTaxAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentTaxAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentTaxAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentRemarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentPaymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentPaymentTerms: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.paymentDocReference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentDocReference: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentLocalCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentLocalCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.paymentTermsPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentTermsPeriod: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentObjectTypeEx]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentObjectTypeEx: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.paymentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.paymentOrderNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentOrderNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.freeText1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freeText1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.freeText2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freeText2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentRunExportLine.freeText3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freeText3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of PaymentRunExportLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PaymentRunExportLine {
    /**
     * Metadata information on all properties of the `PaymentRunExportLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PaymentRunExportLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentRunExportLine;
}
//# sourceMappingURL=PaymentRunExportLine.d.ts.map