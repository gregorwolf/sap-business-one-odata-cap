import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CancelCheckRowParams
 */
export interface CancelCheckRowParams {
    /**
     * Deposit Id.
     * @nullable
     */
    depositId?: number;
    /**
     * Check Id.
     * @nullable
     */
    checkId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CancelCheckRowParams.build]] instead.
 */
export declare function createCancelCheckRowParams(json: any): CancelCheckRowParams;
/**
 * CancelCheckRowParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CancelCheckRowParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CancelCheckRowParams.depositId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depositId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CancelCheckRowParams.checkId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace CancelCheckRowParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CancelCheckRowParams;
}
//# sourceMappingURL=CancelCheckRowParams.d.ts.map