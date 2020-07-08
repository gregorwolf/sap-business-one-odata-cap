import { AlternativeItem, AlternativeItemField } from './AlternativeItem';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
    alternativeItems?: AlternativeItem;
}
/**
 * @deprecated Since v1.6.0. Use [[OriginalItem.build]] instead.
 */
export declare function createOriginalItem(json: any): OriginalItem;
/**
 * OriginalItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class OriginalItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
    alternativeItems: AlternativeItemField<EntityT>;
}
export declare namespace OriginalItem {
    function build(json: {
        [keys: string]: FieldType | AlternativeItem;
    }): OriginalItem;
}
//# sourceMappingURL=OriginalItem.d.ts.map