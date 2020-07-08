import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BpPriorityParams
 */
export interface BpPriorityParams {
    /**
     * Priority.
     * @nullable
     */
    priority?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BpPriorityParams.build]] instead.
 */
export declare function createBpPriorityParams(json: any): BpPriorityParams;
/**
 * BpPriorityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpPriorityParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BpPriorityParams.priority]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priority: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BpPriorityParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BpPriorityParams;
}
//# sourceMappingURL=BpPriorityParams.d.ts.map