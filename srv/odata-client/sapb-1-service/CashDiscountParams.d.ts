import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CashDiscountParams
 */
export interface CashDiscountParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CashDiscountParams.build]] instead.
 */
export declare function createCashDiscountParams(json: any): CashDiscountParams;
/**
 * CashDiscountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CashDiscountParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CashDiscountParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CashDiscountParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CashDiscountParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CashDiscountParams;
}
//# sourceMappingURL=CashDiscountParams.d.ts.map