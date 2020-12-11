import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * LengthMeasureParams
 */
export interface LengthMeasureParams {
    /**
     * Unit Code.
     * @nullable
     */
    unitCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[LengthMeasureParams.build]] instead.
 */
export declare function createLengthMeasureParams(json: any): LengthMeasureParams;
/**
 * LengthMeasureParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LengthMeasureParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LengthMeasureParams> {
    /**
     * Representation of the [[LengthMeasureParams.unitCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unitCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of LengthMeasureParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace LengthMeasureParams {
    /**
     * Metadata information on all properties of the `LengthMeasureParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<LengthMeasureParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): LengthMeasureParams;
}
//# sourceMappingURL=LengthMeasureParams.d.ts.map