import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class MessageDataLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace MessageDataLine {
    function build(json: {
        [keys: string]: FieldType;
    }): MessageDataLine;
}
//# sourceMappingURL=MessageDataLine.d.ts.map