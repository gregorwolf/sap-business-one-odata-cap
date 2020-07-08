import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AlternativeItem
 */
export interface AlternativeItem {
    /**
     * Alternative Item Code.
     * @nullable
     */
    alternativeItemCode?: string;
    /**
     * Match Factor.
     * @nullable
     */
    matchFactor?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AlternativeItem.build]] instead.
 */
export declare function createAlternativeItem(json: any): AlternativeItem;
/**
 * AlternativeItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AlternativeItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AlternativeItem.alternativeItemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    alternativeItemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AlternativeItem.matchFactor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    matchFactor: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AlternativeItem.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AlternativeItem {
    function build(json: {
        [keys: string]: FieldType;
    }): AlternativeItem;
}
//# sourceMappingURL=AlternativeItem.d.ts.map