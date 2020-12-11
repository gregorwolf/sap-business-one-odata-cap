import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class TrackingNoteBrokerField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TrackingNoteBroker> {
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
    /**
     * Creates an instance of TrackingNoteBrokerField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TrackingNoteBroker {
    /**
     * Metadata information on all properties of the `TrackingNoteBroker` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TrackingNoteBroker>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TrackingNoteBroker;
}
//# sourceMappingURL=TrackingNoteBroker.d.ts.map