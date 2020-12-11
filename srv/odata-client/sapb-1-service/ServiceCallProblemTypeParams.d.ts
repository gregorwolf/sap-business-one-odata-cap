import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ServiceCallProblemTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallProblemTypeParams> {
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
    /**
     * Creates an instance of ServiceCallProblemTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceCallProblemTypeParams {
    /**
     * Metadata information on all properties of the `ServiceCallProblemTypeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceCallProblemTypeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallProblemTypeParams;
}
//# sourceMappingURL=ServiceCallProblemTypeParams.d.ts.map