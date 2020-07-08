import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TrackingNoteBroker
 */
export interface TrackingNoteBroker {
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
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * Agreement Number.
     * @nullable
     */
    agreementNumber?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TrackingNoteBroker.build]] instead.
 */
export declare function createTrackingNoteBroker(json: any): TrackingNoteBroker;
/**
 * TrackingNoteBrokerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TrackingNoteBrokerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TrackingNoteBroker.trackingNoteNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNoteNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TrackingNoteBroker.trackingNoteLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trackingNoteLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TrackingNoteBroker.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TrackingNoteBroker.agreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementNumber: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace TrackingNoteBroker {
    function build(json: {
        [keys: string]: FieldType;
    }): TrackingNoteBroker;
}
//# sourceMappingURL=TrackingNoteBroker.d.ts.map