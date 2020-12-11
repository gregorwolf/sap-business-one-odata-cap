import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TrackingNoteParams
 */
export interface TrackingNoteParams {
    /**
     * Tracking Note Number.
     * @nullable
     */
    trackingNoteNumber?: number;
    /**
     * Ccd Number.
     * @nullable
     */
    ccdNumber?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TrackingNoteParams.build]] instead.
 */
export declare function createTrackingNoteParams(json: any): TrackingNoteParams;
/**
 * TrackingNoteParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TrackingNoteParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TrackingNoteParams> {
    /**
     * Representation of the [[TrackingNoteParams.trackingNoteNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNoteNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TrackingNoteParams.ccdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ccdNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of TrackingNoteParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TrackingNoteParams {
    /**
     * Metadata information on all properties of the `TrackingNoteParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TrackingNoteParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TrackingNoteParams;
}
//# sourceMappingURL=TrackingNoteParams.d.ts.map