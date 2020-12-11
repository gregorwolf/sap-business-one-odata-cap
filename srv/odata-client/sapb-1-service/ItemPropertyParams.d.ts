import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ItemPropertyParams
 */
export interface ItemPropertyParams {
    /**
     * Number.
     * @nullable
     */
    number?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemPropertyParams.build]] instead.
 */
export declare function createItemPropertyParams(json: any): ItemPropertyParams;
/**
 * ItemPropertyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemPropertyParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemPropertyParams> {
    /**
     * Representation of the [[ItemPropertyParams.number]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    number: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ItemPropertyParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemPropertyParams {
    /**
     * Metadata information on all properties of the `ItemPropertyParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemPropertyParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ItemPropertyParams;
}
//# sourceMappingURL=ItemPropertyParams.d.ts.map