import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InventoryPostingSerialNumber
 */
export interface InventoryPostingSerialNumber {
    /**
     * Document Entry.
     * @nullable
     */
    documentEntry?: number;
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
     * Reception Date.
     * @nullable
     */
    receptionDate?: Moment;
    /**
     * Warranty Start.
     * @nullable
     */
    warrantyStart?: Moment;
    /**
     * Warranty End.
     * @nullable
     */
    warrantyEnd?: Moment;
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
     * Batch Id.
     * @nullable
     */
    batchId?: string;
    /**
     * System Serial Number.
     * @nullable
     */
    systemSerialNumber?: number;
    /**
     * Base Line Number.
     * @nullable
     */
    baseLineNumber?: number;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
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
 * @deprecated Since v1.6.0. Use [[InventoryPostingSerialNumber.build]] instead.
 */
export declare function createInventoryPostingSerialNumber(json: any): InventoryPostingSerialNumber;
/**
 * InventoryPostingSerialNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryPostingSerialNumberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryPostingSerialNumber> {
    /**
     * Representation of the [[InventoryPostingSerialNumber.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.manufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufacturerSerialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.internalSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalSerialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.expiryDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expiryDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.manufactureDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufactureDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.receptionDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    receptionDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.warrantyStart]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warrantyStart: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.warrantyEnd]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warrantyEnd: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.location]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    location: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.notes]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    notes: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.batchId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    batchId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.systemSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemSerialNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.baseLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.trackingNote]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNote: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingSerialNumber.trackingNoteLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNoteLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of InventoryPostingSerialNumberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InventoryPostingSerialNumber {
    /**
     * Metadata information on all properties of the `InventoryPostingSerialNumber` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InventoryPostingSerialNumber>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryPostingSerialNumber;
}
//# sourceMappingURL=InventoryPostingSerialNumber.d.ts.map