import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ServiceCallStatusParams
 */
export interface ServiceCallStatusParams {
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
 * @deprecated Since v1.6.0. Use [[ServiceCallStatusParams.build]] instead.
 */
export declare function createServiceCallStatusParams(json: any): ServiceCallStatusParams;
/**
 * ServiceCallStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallStatusParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallStatusParams> {
    /**
     * Representation of the [[ServiceCallStatusParams.statusId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statusId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallStatusParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ServiceCallStatusParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceCallStatusParams {
    /**
     * Metadata information on all properties of the `ServiceCallStatusParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceCallStatusParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallStatusParams;
}
//# sourceMappingURL=ServiceCallStatusParams.d.ts.map