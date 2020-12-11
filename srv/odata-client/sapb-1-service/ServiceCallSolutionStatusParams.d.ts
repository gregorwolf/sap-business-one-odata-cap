import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ServiceCallSolutionStatusParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallSolutionStatusParams> {
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
    /**
     * Creates an instance of ServiceCallSolutionStatusParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceCallSolutionStatusParams {
    /**
     * Metadata information on all properties of the `ServiceCallSolutionStatusParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceCallSolutionStatusParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallSolutionStatusParams;
}
//# sourceMappingURL=ServiceCallSolutionStatusParams.d.ts.map