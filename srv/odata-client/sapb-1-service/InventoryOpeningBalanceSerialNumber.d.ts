import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * InventoryOpeningBalanceSerialNumber
 */
export interface InventoryOpeningBalanceSerialNumber {
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
 * @deprecated Since v1.6.0. Use [[InventoryOpeningBalanceSerialNumber.build]] instead.
 */
export declare function createInventoryOpeningBalanceSerialNumber(json: any): InventoryOpeningBalanceSerialNumber;
/**
 * InventoryOpeningBalanceSerialNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryOpeningBalanceSerialNumberField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.manufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufacturerSerialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.internalSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalSerialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.expiryDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expiryDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.manufactureDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufactureDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.receptionDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    receptionDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.warrantyStart]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warrantyStart: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.warrantyEnd]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warrantyEnd: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.location]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    location: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.notes]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    notes: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.batchId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    batchId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.systemSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemSerialNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.baseLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.trackingNote]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNote: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceSerialNumber.trackingNoteLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNoteLine: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace InventoryOpeningBalanceSerialNumber {
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryOpeningBalanceSerialNumber;
}
//# sourceMappingURL=InventoryOpeningBalanceSerialNumber.d.ts.map