import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PaymentInvoice
 */
export interface PaymentInvoice {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Sum Applied.
     * @nullable
     */
    sumApplied?: number;
    /**
     * Applied Fc.
     * @nullable
     */
    appliedFc?: number;
    /**
     * Applied Sys.
     * @nullable
     */
    appliedSys?: number;
    /**
     * Doc Rate.
     * @nullable
     */
    docRate?: number;
    /**
     * Doc Line.
     * @nullable
     */
    docLine?: number;
    /**
     * Discount Percent.
     * @nullable
     */
    discountPercent?: number;
    /**
     * Paid Sum.
     * @nullable
     */
    paidSum?: number;
    /**
     * Installment Id.
     * @nullable
     */
    installmentId?: number;
    /**
     * Witholding Tax Applied.
     * @nullable
     */
    witholdingTaxApplied?: number;
    /**
     * Witholding Tax Applied Fc.
     * @nullable
     */
    witholdingTaxAppliedFc?: number;
    /**
     * Witholding Tax Applied Sc.
     * @nullable
     */
    witholdingTaxAppliedSc?: number;
    /**
     * Link Date.
     * @nullable
     */
    linkDate?: Moment;
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
     * Total Discount.
     * @nullable
     */
    totalDiscount?: number;
    /**
     * Total Discount Fc.
     * @nullable
     */
    totalDiscountFc?: number;
    /**
     * Total Discount Sc.
     * @nullable
     */
    totalDiscountSc?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PaymentInvoice.build]] instead.
 */
export declare function createPaymentInvoice(json: any): PaymentInvoice;
/**
 * PaymentInvoiceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentInvoiceField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PaymentInvoice.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.sumApplied]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumApplied: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.appliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.appliedSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.docRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.docLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discountPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.paidSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paidSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.installmentId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    installmentId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.witholdingTaxApplied]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    witholdingTaxApplied: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.witholdingTaxAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    witholdingTaxAppliedFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.witholdingTaxAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    witholdingTaxAppliedSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.linkDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    linkDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalDiscount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalDiscountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoice.totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalDiscountSc: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PaymentInvoice {
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentInvoice;
}
//# sourceMappingURL=PaymentInvoice.d.ts.map