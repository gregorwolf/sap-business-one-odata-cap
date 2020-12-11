import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TrackingNoteItem
 */
export interface TrackingNoteItem {
    /**
     * Tracking Note Number.
     * @nullable
     */
    trackingNoteNumber?: number;
    /**
     * Tracking Note Line Number.
     * @nullable
     */
    trackingNoteLineNumber?: number;
    /**
     * Item Ccd Number.
     * @nullable
     */
    itemCcdNumber?: string;
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
     * Country Of Origin.
     * @nullable
     */
    countryOfOrigin?: string;
    /**
     * Customs Group Code.
     * @nullable
     */
    customsGroupCode?: number;
    /**
     * Accumulated Ap Quantity.
     * @nullable
     */
    accumulatedApQuantity?: number;
    /**
     * Accumulated Ar Quantity.
     * @nullable
     */
    accumulatedArQuantity?: number;
    /**
     * Accumulated Relocated Quantity.
     * @nullable
     */
    accumulatedRelocatedQuantity?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TrackingNoteItem.build]] instead.
 */
export declare function createTrackingNoteItem(json: any): TrackingNoteItem;
/**
 * TrackingNoteItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TrackingNoteItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TrackingNoteItem> {
    /**
     * Representation of the [[TrackingNoteItem.trackingNoteNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNoteNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TrackingNoteItem.trackingNoteLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNoteLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TrackingNoteItem.itemCcdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCcdNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TrackingNoteItem.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TrackingNoteItem.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TrackingNoteItem.countryOfOrigin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countryOfOrigin: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TrackingNoteItem.customsGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customsGroupCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TrackingNoteItem.accumulatedApQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumulatedApQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TrackingNoteItem.accumulatedArQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumulatedArQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TrackingNoteItem.accumulatedRelocatedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumulatedRelocatedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of TrackingNoteItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TrackingNoteItem {
    /**
     * Metadata information on all properties of the `TrackingNoteItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TrackingNoteItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TrackingNoteItem;
}
//# sourceMappingURL=TrackingNoteItem.d.ts.map