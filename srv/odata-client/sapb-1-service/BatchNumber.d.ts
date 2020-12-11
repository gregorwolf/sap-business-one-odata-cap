import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BatchNumber
 */
export interface BatchNumber {
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
     * Manufacturing Date.
     * @nullable
     */
    manufacturingDate?: Moment;
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
 * @deprecated Since v1.6.0. Use [[BatchNumber.build]] instead.
 */
export declare function createBatchNumber(json: any): BatchNumber;
/**
 * BatchNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BatchNumberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BatchNumber> {
    /**
     * Representation of the [[BatchNumber.batchNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    batchNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BatchNumber.manufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufacturerSerialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BatchNumber.internalSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalSerialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BatchNumber.expiryDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expiryDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BatchNumber.manufacturingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufacturingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BatchNumber.addmisionDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addmisionDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BatchNumber.location]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    location: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BatchNumber.notes]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    notes: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BatchNumber.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BatchNumber.baseLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BatchNumber.trackingNote]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNote: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BatchNumber.trackingNoteLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNoteLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BatchNumberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BatchNumber {
    /**
     * Metadata information on all properties of the `BatchNumber` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BatchNumber>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BatchNumber;
}
//# sourceMappingURL=BatchNumber.d.ts.map