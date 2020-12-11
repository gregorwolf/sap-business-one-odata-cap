import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PickListParams
 */
export interface PickListParams {
    /**
     * Absoluteentry.
     * @nullable
     */
    absoluteentry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PickListParams.build]] instead.
 */
export declare function createPickListParams(json: any): PickListParams;
/**
 * PickListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PickListParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PickListParams> {
    /**
     * Representation of the [[PickListParams.absoluteentry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteentry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PickListParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PickListParams {
    /**
     * Metadata information on all properties of the `PickListParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PickListParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PickListParams;
}
//# sourceMappingURL=PickListParams.d.ts.map