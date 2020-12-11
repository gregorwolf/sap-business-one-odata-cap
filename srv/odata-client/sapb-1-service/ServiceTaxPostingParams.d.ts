import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ServiceTaxPostingParams
 */
export interface ServiceTaxPostingParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceTaxPostingParams.build]] instead.
 */
export declare function createServiceTaxPostingParams(json: any): ServiceTaxPostingParams;
/**
 * ServiceTaxPostingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceTaxPostingParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceTaxPostingParams> {
    /**
     * Representation of the [[ServiceTaxPostingParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ServiceTaxPostingParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceTaxPostingParams {
    /**
     * Metadata information on all properties of the `ServiceTaxPostingParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceTaxPostingParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceTaxPostingParams;
}
//# sourceMappingURL=ServiceTaxPostingParams.d.ts.map