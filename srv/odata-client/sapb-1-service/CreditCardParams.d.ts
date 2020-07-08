import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CreditCardParams
 */
export interface CreditCardParams {
    /**
     * Credit Card Code.
     * @nullable
     */
    creditCardCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CreditCardParams.build]] instead.
 */
export declare function createCreditCardParams(json: any): CreditCardParams;
/**
 * CreditCardParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CreditCardParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CreditCardParams.creditCardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditCardCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace CreditCardParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CreditCardParams;
}
//# sourceMappingURL=CreditCardParams.d.ts.map