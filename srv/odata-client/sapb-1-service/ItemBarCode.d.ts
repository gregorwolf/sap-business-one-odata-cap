import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class ItemBarCodeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace ItemBarCode {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemBarCode;
}
//# sourceMappingURL=ItemBarCode.d.ts.map