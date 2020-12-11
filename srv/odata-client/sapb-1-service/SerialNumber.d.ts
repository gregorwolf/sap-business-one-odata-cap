import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SerialNumber
 */
export interface SerialNumber {
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
 * @deprecated Since v1.6.0. Use [[SerialNumber.build]] instead.
 */
export declare function createSerialNumber(json: any): SerialNumber;
/**
 * SerialNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SerialNumberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SerialNumber> {
    /**
     * Representation of the [[SerialNumber.manufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufacturerSerialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.internalSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalSerialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.expiryDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expiryDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.manufactureDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufactureDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.receptionDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    receptionDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.warrantyStart]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warrantyStart: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.warrantyEnd]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warrantyEnd: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.location]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    location: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.notes]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    notes: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.batchId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    batchId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.systemSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemSerialNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.baseLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.trackingNote]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNote: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SerialNumber.trackingNoteLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNoteLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of SerialNumberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SerialNumber {
    /**
     * Metadata information on all properties of the `SerialNumber` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SerialNumber>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SerialNumber;
}
//# sourceMappingURL=SerialNumber.d.ts.map