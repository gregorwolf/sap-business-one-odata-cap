import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * InternalReconciliationBp
 */
export interface InternalReconciliationBp {
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationBp.build]] instead.
 */
export declare function createInternalReconciliationBp(json: any): InternalReconciliationBp;
/**
 * InternalReconciliationBpField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InternalReconciliationBpField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InternalReconciliationBp.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace InternalReconciliationBp {
    function build(json: {
        [keys: string]: FieldType;
    }): InternalReconciliationBp;
}
//# sourceMappingURL=InternalReconciliationBp.d.ts.map