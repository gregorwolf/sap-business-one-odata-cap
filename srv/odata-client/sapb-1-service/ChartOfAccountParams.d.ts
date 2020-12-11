import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ChartOfAccountParams
 */
export interface ChartOfAccountParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ChartOfAccountParams.build]] instead.
 */
export declare function createChartOfAccountParams(json: any): ChartOfAccountParams;
/**
 * ChartOfAccountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ChartOfAccountParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ChartOfAccountParams> {
    /**
     * Representation of the [[ChartOfAccountParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ChartOfAccountParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ChartOfAccountParams {
    /**
     * Metadata information on all properties of the `ChartOfAccountParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ChartOfAccountParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ChartOfAccountParams;
}
//# sourceMappingURL=ChartOfAccountParams.d.ts.map