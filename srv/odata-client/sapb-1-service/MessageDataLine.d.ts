import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * MessageDataLine
 */
export interface MessageDataLine {
    /**
     * Value.
     * @nullable
     */
    value?: string;
    /**
     * Object.
     * @nullable
     */
    object?: string;
    /**
     * Object Key.
     * @nullable
     */
    objectKey?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[MessageDataLine.build]] instead.
 */
export declare function createMessageDataLine(json: any): MessageDataLine;
/**
 * MessageDataLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MessageDataLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MessageDataLine> {
    /**
     * Representation of the [[MessageDataLine.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MessageDataLine.object]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    object: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MessageDataLine.objectKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    objectKey: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of MessageDataLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace MessageDataLine {
    /**
     * Metadata information on all properties of the `MessageDataLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<MessageDataLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): MessageDataLine;
}
//# sourceMappingURL=MessageDataLine.d.ts.map