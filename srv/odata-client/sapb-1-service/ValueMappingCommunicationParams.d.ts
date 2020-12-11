import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ValueMappingCommunicationParams
 */
export interface ValueMappingCommunicationParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ValueMappingCommunicationParams.build]] instead.
 */
export declare function createValueMappingCommunicationParams(json: any): ValueMappingCommunicationParams;
/**
 * ValueMappingCommunicationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ValueMappingCommunicationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ValueMappingCommunicationParams> {
    /**
     * Representation of the [[ValueMappingCommunicationParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ValueMappingCommunicationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ValueMappingCommunicationParams {
    /**
     * Metadata information on all properties of the `ValueMappingCommunicationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ValueMappingCommunicationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ValueMappingCommunicationParams;
}
//# sourceMappingURL=ValueMappingCommunicationParams.d.ts.map