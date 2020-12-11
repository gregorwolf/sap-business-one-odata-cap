import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DimensionParams
 */
export interface DimensionParams {
    /**
     * Dimension Code.
     * @nullable
     */
    dimensionCode?: number;
    /**
     * Dimension Name.
     * @nullable
     */
    dimensionName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DimensionParams.build]] instead.
 */
export declare function createDimensionParams(json: any): DimensionParams;
/**
 * DimensionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DimensionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DimensionParams> {
    /**
     * Representation of the [[DimensionParams.dimensionCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dimensionCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DimensionParams.dimensionName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dimensionName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of DimensionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DimensionParams {
    /**
     * Metadata information on all properties of the `DimensionParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DimensionParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DimensionParams;
}
//# sourceMappingURL=DimensionParams.d.ts.map