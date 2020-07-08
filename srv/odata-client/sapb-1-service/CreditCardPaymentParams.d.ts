import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CreditCardPaymentParams
 */
export interface CreditCardPaymentParams {
    /**
     * Due Date Code.
     * @nullable
     */
    dueDateCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CreditCardPaymentParams.build]] instead.
 */
export declare function createCreditCardPaymentParams(json: any): CreditCardPaymentParams;
/**
 * CreditCardPaymentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CreditCardPaymentParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CreditCardPaymentParams.dueDateCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDateCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CreditCardPaymentParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CreditCardPaymentParams;
}
//# sourceMappingURL=CreditCardPaymentParams.d.ts.map