import { PaymentInvoiceTypeEnum } from './PaymentInvoiceTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PaymentAmountParams
 */
export interface PaymentAmountParams {
    /**
     * Doc Type.
     * @nullable
     */
    docType?: PaymentInvoiceTypeEnum;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Installment Id.
     * @nullable
     */
    installmentId?: number;
    /**
     * Cash Discount Percentage.
     * @nullable
     */
    cashDiscountPercentage?: number;
    /**
     * Cash Discount Amount.
     * @nullable
     */
    cashDiscountAmount?: number;
    /**
     * Cash Discount Amount Fc.
     * @nullable
     */
    cashDiscountAmountFc?: number;
    /**
     * Cash Discount Amount Sc.
     * @nullable
     */
    cashDiscountAmountSc?: number;
    /**
     * Total Payment Amount.
     * @nullable
     */
    totalPaymentAmount?: number;
    /**
     * Total Payment Amount Fc.
     * @nullable
     */
    totalPaymentAmountFc?: number;
    /**
     * Total Payment Amount Sc.
     * @nullable
     */
    totalPaymentAmountSc?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PaymentAmountParams.build]] instead.
 */
export declare function createPaymentAmountParams(json: any): PaymentAmountParams;
/**
 * PaymentAmountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentAmountParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentAmountParams> {
    /**
     * Representation of the [[PaymentAmountParams.docType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAmountParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAmountParams.installmentId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    installmentId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAmountParams.cashDiscountPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cashDiscountPercentage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAmountParams.cashDiscountAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cashDiscountAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAmountParams.cashDiscountAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cashDiscountAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAmountParams.cashDiscountAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cashDiscountAmountSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAmountParams.totalPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalPaymentAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAmountParams.totalPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalPaymentAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAmountParams.totalPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalPaymentAmountSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PaymentAmountParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PaymentAmountParams {
    /**
     * Metadata information on all properties of the `PaymentAmountParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PaymentAmountParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentAmountParams;
}
//# sourceMappingURL=PaymentAmountParams.d.ts.map