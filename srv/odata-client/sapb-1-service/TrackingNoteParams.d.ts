import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class TrackingNoteParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace TrackingNoteParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TrackingNoteParams;
}
//# sourceMappingURL=TrackingNoteParams.d.ts.map