import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * IntegrationPackageParams
 */
export interface IntegrationPackageParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[IntegrationPackageParams.build]] instead.
 */
export declare function createIntegrationPackageParams(json: any): IntegrationPackageParams;
/**
 * IntegrationPackageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class IntegrationPackageParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, IntegrationPackageParams> {
    /**
     * Representation of the [[IntegrationPackageParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of IntegrationPackageParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace IntegrationPackageParams {
    /**
     * Metadata information on all properties of the `IntegrationPackageParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<IntegrationPackageParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): IntegrationPackageParams;
}
//# sourceMappingURL=IntegrationPackageParams.d.ts.map