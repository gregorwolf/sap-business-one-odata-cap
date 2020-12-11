import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * OriginalItemParams
 */
export interface OriginalItemParams {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Item Name.
     * @nullable
     */
    itemName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[OriginalItemParams.build]] instead.
 */
export declare function createOriginalItemParams(json: any): OriginalItemParams;
/**
 * OriginalItemParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class OriginalItemParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, OriginalItemParams> {
    /**
     * Representation of the [[OriginalItemParams.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[OriginalItemParams.itemName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of OriginalItemParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace OriginalItemParams {
    /**
     * Metadata information on all properties of the `OriginalItemParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<OriginalItemParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): OriginalItemParams;
}
//# sourceMappingURL=OriginalItemParams.d.ts.map