import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceCallProblemSubTypeParams
 */
export interface ServiceCallProblemSubTypeParams {
    /**
     * Problem Sub Type Id.
     * @nullable
     */
    problemSubTypeId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallProblemSubTypeParams.build]] instead.
 */
export declare function createServiceCallProblemSubTypeParams(json: any): ServiceCallProblemSubTypeParams;
/**
 * ServiceCallProblemSubTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallProblemSubTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceCallProblemSubTypeParams.problemSubTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    problemSubTypeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallProblemSubTypeParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ServiceCallProblemSubTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallProblemSubTypeParams;
}
//# sourceMappingURL=ServiceCallProblemSubTypeParams.d.ts.map