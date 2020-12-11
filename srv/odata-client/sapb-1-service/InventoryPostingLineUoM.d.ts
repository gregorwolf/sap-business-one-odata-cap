import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InventoryPostingLineUoM
 */
export interface InventoryPostingLineUoM {
    /**
     * Document Entry.
     * @nullable
     */
    documentEntry?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Child Number.
     * @nullable
     */
    childNumber?: number;
    /**
     * Uo M Counted Quantity.
     * @nullable
     */
    uoMCountedQuantity?: number;
    /**
     * Items Per Unit.
     * @nullable
     */
    itemsPerUnit?: number;
    /**
     * Counted Quantity.
     * @nullable
     */
    countedQuantity?: number;
    /**
     * Uo M Code.
     * @nullable
     */
    uoMCode?: string;
    /**
     * Bar Code.
     * @nullable
     */
    barCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingLineUoM.build]] instead.
 */
export declare function createInventoryPostingLineUoM(json: any): InventoryPostingLineUoM;
/**
 * InventoryPostingLineUoMField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryPostingLineUoMField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryPostingLineUoM> {
    /**
     * Representation of the [[InventoryPostingLineUoM.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLineUoM.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLineUoM.childNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    childNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLineUoM.uoMCountedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCountedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLineUoM.itemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemsPerUnit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLineUoM.countedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLineUoM.uoMCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLineUoM.barCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    barCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of InventoryPostingLineUoMField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InventoryPostingLineUoM {
    /**
     * Metadata information on all properties of the `InventoryPostingLineUoM` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InventoryPostingLineUoM>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryPostingLineUoM;
}
//# sourceMappingURL=InventoryPostingLineUoM.d.ts.map