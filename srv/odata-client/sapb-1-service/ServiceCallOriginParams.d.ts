import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ServiceCallOriginParams
 */
export interface ServiceCallOriginParams {
    /**
     * Origin Id.
     * @nullable
     */
    originId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallOriginParams.build]] instead.
 */
export declare function createServiceCallOriginParams(json: any): ServiceCallOriginParams;
/**
 * ServiceCallOriginParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallOriginParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallOriginParams> {
    /**
     * Representation of the [[ServiceCallOriginParams.originId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    originId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallOriginParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ServiceCallOriginParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceCallOriginParams {
    /**
     * Metadata information on all properties of the `ServiceCallOriginParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceCallOriginParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallOriginParams;
}
//# sourceMappingURL=ServiceCallOriginParams.d.ts.map