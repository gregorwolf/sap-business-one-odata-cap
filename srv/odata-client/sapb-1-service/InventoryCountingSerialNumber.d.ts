import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * InventoryCountingSerialNumber
 */
export interface InventoryCountingSerialNumber {
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
     * Document Entry.
     * @nullable
     */
    documentEntry?: number;
    /**
     * Counter Id.
     * @nullable
     */
    counterId?: number;
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
 * @deprecated Since v1.6.0. Use [[InventoryCountingSerialNumber.build]] instead.
 */
export declare function createInventoryCountingSerialNumber(json: any): InventoryCountingSerialNumber;
/**
 * InventoryCountingSerialNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryCountingSerialNumberField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InventoryCountingSerialNumber.manufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufacturerSerialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.internalSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalSerialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.expiryDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expiryDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.manufactureDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufactureDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.receptionDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    receptionDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.warrantyStart]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warrantyStart: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.warrantyEnd]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warrantyEnd: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.location]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    location: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.notes]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    notes: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.batchId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    batchId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.systemSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemSerialNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.baseLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.counterId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.trackingNote]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNote: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingSerialNumber.trackingNoteLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNoteLine: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace InventoryCountingSerialNumber {
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryCountingSerialNumber;
}
//# sourceMappingURL=InventoryCountingSerialNumber.d.ts.map