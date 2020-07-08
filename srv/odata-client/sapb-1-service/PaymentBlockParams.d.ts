import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PaymentBlockParams
 */
export interface PaymentBlockParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Payment Block Code.
     * @nullable
     */
    paymentBlockCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PaymentBlockParams.build]] instead.
 */
export declare function createPaymentBlockParams(json: any): PaymentBlockParams;
/**
 * PaymentBlockParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentBlockParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PaymentBlockParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentBlockParams.paymentBlockCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentBlockCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace PaymentBlockParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentBlockParams;
}
//# sourceMappingURL=PaymentBlockParams.d.ts.map