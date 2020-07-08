import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DocumentPackageItem
 */
export interface DocumentPackageItem {
    /**
     * Package Number.
     * @nullable
     */
    packageNumber?: number;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Uo M Entry.
     * @nullable
     */
    uoMEntry?: number;
    /**
     * Measure Unit.
     * @nullable
     */
    measureUnit?: string;
    /**
     * Units Of Measurement.
     * @nullable
     */
    unitsOfMeasurement?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentPackageItem.build]] instead.
 */
export declare function createDocumentPackageItem(json: any): DocumentPackageItem;
/**
 * DocumentPackageItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentPackageItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DocumentPackageItem.packageNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    packageNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentPackageItem.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentPackageItem.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentPackageItem.uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentPackageItem.measureUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    measureUnit: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentPackageItem.unitsOfMeasurement]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unitsOfMeasurement: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace DocumentPackageItem {
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentPackageItem;
}
//# sourceMappingURL=DocumentPackageItem.d.ts.map