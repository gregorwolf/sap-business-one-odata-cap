import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ServiceCallParams
 */
export interface ServiceCallParams {
    /**
     * Service Call Id.
     * @nullable
     */
    serviceCallId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallParams.build]] instead.
 */
export declare function createServiceCallParams(json: any): ServiceCallParams;
/**
 * ServiceCallParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallParams> {
    /**
     * Representation of the [[ServiceCallParams.serviceCallId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serviceCallId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ServiceCallParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceCallParams {
    /**
     * Metadata information on all properties of the `ServiceCallParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceCallParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallParams;
}
//# sourceMappingURL=ServiceCallParams.d.ts.map