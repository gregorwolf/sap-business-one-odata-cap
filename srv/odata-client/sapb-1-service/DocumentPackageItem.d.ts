import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class DocumentPackageItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentPackageItem> {
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
    /**
     * Creates an instance of DocumentPackageItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DocumentPackageItem {
    /**
     * Metadata information on all properties of the `DocumentPackageItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DocumentPackageItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentPackageItem;
}
//# sourceMappingURL=DocumentPackageItem.d.ts.map