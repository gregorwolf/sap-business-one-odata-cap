import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ShippingTypeParams
 */
export interface ShippingTypeParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ShippingTypeParams.build]] instead.
 */
export declare function createShippingTypeParams(json: any): ShippingTypeParams;
/**
 * ShippingTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ShippingTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ShippingTypeParams> {
    /**
     * Representation of the [[ShippingTypeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ShippingTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ShippingTypeParams {
    /**
     * Metadata information on all properties of the `ShippingTypeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ShippingTypeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ShippingTypeParams;
}
//# sourceMappingURL=ShippingTypeParams.d.ts.map