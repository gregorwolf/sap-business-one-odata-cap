import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceCallProblemTypeParams
 */
export interface ServiceCallProblemTypeParams {
    /**
     * Problem Type Id.
     * @nullable
     */
    problemTypeId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallProblemTypeParams.build]] instead.
 */
export declare function createServiceCallProblemTypeParams(json: any): ServiceCallProblemTypeParams;
/**
 * ServiceCallProblemTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallProblemTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceCallProblemTypeParams.problemTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    problemTypeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallProblemTypeParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ServiceCallProblemTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallProblemTypeParams;
}
//# sourceMappingURL=ServiceCallProblemTypeParams.d.ts.map