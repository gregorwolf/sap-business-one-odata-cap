import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CreditPaymentMethodParams
 */
export interface CreditPaymentMethodParams {
    /**
     * Payment Method Code.
     * @nullable
     */
    paymentMethodCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CreditPaymentMethodParams.build]] instead.
 */
export declare function createCreditPaymentMethodParams(json: any): CreditPaymentMethodParams;
/**
 * CreditPaymentMethodParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CreditPaymentMethodParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CreditPaymentMethodParams.paymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentMethodCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace CreditPaymentMethodParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CreditPaymentMethodParams;
}
//# sourceMappingURL=CreditPaymentMethodParams.d.ts.map