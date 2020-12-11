import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * FactoringIndicatorParams
 */
export interface FactoringIndicatorParams {
    /**
     * Indicator Code.
     * @nullable
     */
    indicatorCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[FactoringIndicatorParams.build]] instead.
 */
export declare function createFactoringIndicatorParams(json: any): FactoringIndicatorParams;
/**
 * FactoringIndicatorParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FactoringIndicatorParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FactoringIndicatorParams> {
    /**
     * Representation of the [[FactoringIndicatorParams.indicatorCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    indicatorCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of FactoringIndicatorParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace FactoringIndicatorParams {
    /**
     * Metadata information on all properties of the `FactoringIndicatorParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<FactoringIndicatorParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): FactoringIndicatorParams;
}
//# sourceMappingURL=FactoringIndicatorParams.d.ts.map