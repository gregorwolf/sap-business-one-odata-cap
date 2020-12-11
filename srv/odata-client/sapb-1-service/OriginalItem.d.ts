import { AlternativeItem } from './AlternativeItem';
import { CollectionField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * OriginalItem
 */
export interface OriginalItem {
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
    /**
     * Alternative Items.
     * @nullable
     */
    alternativeItems?: AlternativeItem[];
}
/**
 * @deprecated Since v1.6.0. Use [[OriginalItem.build]] instead.
 */
export declare function createOriginalItem(json: any): OriginalItem;
/**
 * OriginalItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class OriginalItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, OriginalItem> {
    /**
     * Representation of the [[OriginalItem.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[OriginalItem.itemName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[OriginalItem.alternativeItems]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    alternativeItems: CollectionField<EntityT, AlternativeItem>;
    /**
     * Creates an instance of OriginalItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace OriginalItem {
    /**
     * Metadata information on all properties of the `OriginalItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<OriginalItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | AlternativeItem;
    }): OriginalItem;
}
//# sourceMappingURL=OriginalItem.d.ts.map