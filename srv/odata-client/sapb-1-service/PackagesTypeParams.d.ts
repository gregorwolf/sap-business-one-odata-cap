import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PackagesTypeParams
 */
export interface PackagesTypeParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PackagesTypeParams.build]] instead.
 */
export declare function createPackagesTypeParams(json: any): PackagesTypeParams;
/**
 * PackagesTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PackagesTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PackagesTypeParams> {
    /**
     * Representation of the [[PackagesTypeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PackagesTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PackagesTypeParams {
    /**
     * Metadata information on all properties of the `PackagesTypeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PackagesTypeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PackagesTypeParams;
}
//# sourceMappingURL=PackagesTypeParams.d.ts.map