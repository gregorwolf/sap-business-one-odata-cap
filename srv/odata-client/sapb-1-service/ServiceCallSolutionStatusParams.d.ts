import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceCallSolutionStatusParams
 */
export interface ServiceCallSolutionStatusParams {
    /**
     * Status Id.
     * @nullable
     */
    statusId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallSolutionStatusParams.build]] instead.
 */
export declare function createServiceCallSolutionStatusParams(json: any): ServiceCallSolutionStatusParams;
/**
 * ServiceCallSolutionStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallSolutionStatusParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceCallSolutionStatusParams.statusId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statusId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallSolutionStatusParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ServiceCallSolutionStatusParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallSolutionStatusParams;
}
//# sourceMappingURL=ServiceCallSolutionStatusParams.d.ts.map