import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WeightMeasureParams
 */
export interface WeightMeasureParams {
    /**
     * Unit Code.
     * @nullable
     */
    unitCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[WeightMeasureParams.build]] instead.
 */
export declare function createWeightMeasureParams(json: any): WeightMeasureParams;
/**
 * WeightMeasureParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WeightMeasureParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WeightMeasureParams> {
    /**
     * Representation of the [[WeightMeasureParams.unitCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unitCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of WeightMeasureParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WeightMeasureParams {
    /**
     * Metadata information on all properties of the `WeightMeasureParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WeightMeasureParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WeightMeasureParams;
}
//# sourceMappingURL=WeightMeasureParams.d.ts.map