import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ItemBarCode
 */
export interface ItemBarCode {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Uo M Entry.
     * @nullable
     */
    uoMEntry?: number;
    /**
     * Barcode.
     * @nullable
     */
    barcode?: string;
    /**
     * Free Text.
     * @nullable
     */
    freeText?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemBarCode.build]] instead.
 */
export declare function createItemBarCode(json: any): ItemBarCode;
/**
 * ItemBarCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemBarCodeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemBarCode> {
    /**
     * Representation of the [[ItemBarCode.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemBarCode.uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemBarCode.barcode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    barcode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemBarCode.freeText]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freeText: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ItemBarCodeField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemBarCode {
    /**
     * Metadata information on all properties of the `ItemBarCode` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemBarCode>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ItemBarCode;
}
//# sourceMappingURL=ItemBarCode.d.ts.map