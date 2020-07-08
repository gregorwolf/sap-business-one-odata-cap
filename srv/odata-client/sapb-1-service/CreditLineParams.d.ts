import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CreditLineParams
 */
export interface CreditLineParams {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CreditLineParams.build]] instead.
 */
export declare function createCreditLineParams(json: any): CreditLineParams;
/**
 * CreditLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CreditLineParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CreditLineParams.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace CreditLineParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CreditLineParams;
}
//# sourceMappingURL=CreditLineParams.d.ts.map