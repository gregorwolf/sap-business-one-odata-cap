import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ItemParams
 */
export interface ItemParams {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemParams.build]] instead.
 */
export declare function createItemParams(json: any): ItemParams;
/**
 * ItemParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemParams> {
    /**
     * Representation of the [[ItemParams.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ItemParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemParams {
    /**
     * Metadata information on all properties of the `ItemParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ItemParams;
}
//# sourceMappingURL=ItemParams.d.ts.map