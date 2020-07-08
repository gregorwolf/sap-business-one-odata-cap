import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * InventoryCountingLineUoM
 */
export interface InventoryCountingLineUoM {
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
    /**
     * Counter Id.
     * @nullable
     */
    counterId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[InventoryCountingLineUoM.build]] instead.
 */
export declare function createInventoryCountingLineUoM(json: any): InventoryCountingLineUoM;
/**
 * InventoryCountingLineUoMField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryCountingLineUoMField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InventoryCountingLineUoM.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.childNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    childNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.uoMCountedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCountedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.itemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemsPerUnit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.countedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.uoMCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.barCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    barCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLineUoM.counterId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace InventoryCountingLineUoM {
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryCountingLineUoM;
}
//# sourceMappingURL=InventoryCountingLineUoM.d.ts.map