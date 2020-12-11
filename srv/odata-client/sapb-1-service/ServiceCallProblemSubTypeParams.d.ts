import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ServiceCallProblemSubTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallProblemSubTypeParams> {
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
    /**
     * Creates an instance of ServiceCallProblemSubTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceCallProblemSubTypeParams {
    /**
     * Metadata information on all properties of the `ServiceCallProblemSubTypeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceCallProblemSubTypeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallProblemSubTypeParams;
}
//# sourceMappingURL=ServiceCallProblemSubTypeParams.d.ts.map