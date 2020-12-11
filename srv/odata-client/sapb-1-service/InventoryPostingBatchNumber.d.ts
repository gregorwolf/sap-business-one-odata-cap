import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InventoryPostingBatchNumber
 */
export interface InventoryPostingBatchNumber {
    /**
     * Document Entry.
     * @nullable
     */
    documentEntry?: number;
    /**
     * Batch Number.
     * @nullable
     */
    batchNumber?: string;
    /**
     * Manufacturer Serial Number.
     * @nullable
     */
    manufacturerSerialNumber?: string;
    /**
     * Internal Serial Number.
     * @nullable
     */
    internalSerialNumber?: string;
    /**
     * Expiry Date.
     * @nullable
     */
    expiryDate?: Moment;
    /**
     * Manufacture Date.
     * @nullable
     */
    manufactureDate?: Moment;
    /**
     * Addmision Date.
     * @nullable
     */
    addmisionDate?: Moment;
    /**
     * Location.
     * @nullable
     */
    location?: string;
    /**
     * Notes.
     * @nullable
     */
    notes?: string;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Base Line Number.
     * @nullable
     */
    baseLineNumber?: number;
    /**
     * Tracking Note.
     * @nullable
     */
    trackingNote?: number;
    /**
     * Tracking Note Line.
     * @nullable
     */
    trackingNoteLine?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingBatchNumber.build]] instead.
 */
export declare function createInventoryPostingBatchNumber(json: any): InventoryPostingBatchNumber;
/**
 * InventoryPostingBatchNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryPostingBatchNumberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryPostingBatchNumber> {
    /**
     * Representation of the [[InventoryPostingBatchNumber.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingBatchNumber.batchNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    batchNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingBatchNumber.manufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufacturerSerialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingBatchNumber.internalSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalSerialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingBatchNumber.expiryDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expiryDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingBatchNumber.manufactureDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufactureDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingBatchNumber.addmisionDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addmisionDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingBatchNumber.location]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    location: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingBatchNumber.notes]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    notes: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingBatchNumber.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingBatchNumber.baseLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingBatchNumber.trackingNote]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNote: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingBatchNumber.trackingNoteLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNoteLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of InventoryPostingBatchNumberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InventoryPostingBatchNumber {
    /**
     * Metadata information on all properties of the `InventoryPostingBatchNumber` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InventoryPostingBatchNumber>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryPostingBatchNumber;
}
//# sourceMappingURL=InventoryPostingBatchNumber.d.ts.map