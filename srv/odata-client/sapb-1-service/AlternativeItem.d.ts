import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class AlternativeItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AlternativeItem> {
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
    /**
     * Creates an instance of AlternativeItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AlternativeItem {
    /**
     * Metadata information on all properties of the `AlternativeItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AlternativeItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AlternativeItem;
}
//# sourceMappingURL=AlternativeItem.d.ts.map