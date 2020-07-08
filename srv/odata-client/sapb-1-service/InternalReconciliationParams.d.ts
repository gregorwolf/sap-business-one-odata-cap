import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * InternalReconciliationParams
 */
export interface InternalReconciliationParams {
    /**
     * Recon Num.
     * @nullable
     */
    reconNum?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationParams.build]] instead.
 */
export declare function createInternalReconciliationParams(json: any): InternalReconciliationParams;
/**
 * InternalReconciliationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InternalReconciliationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InternalReconciliationParams.reconNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconNum: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace InternalReconciliationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): InternalReconciliationParams;
}
//# sourceMappingURL=InternalReconciliationParams.d.ts.map