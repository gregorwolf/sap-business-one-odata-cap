import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time } from '@sap-cloud-sdk/core/v4';
/**
 * MessageHeader
 */
export interface MessageHeader {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Received Date.
     * @nullable
     */
    receivedDate?: Moment;
    /**
     * Received Time.
     * @nullable
     */
    receivedTime?: Time;
    /**
     * Sent Date.
     * @nullable
     */
    sentDate?: Moment;
    /**
     * Sent Time.
     * @nullable
     */
    sentTime?: Time;
}
/**
 * @deprecated Since v1.6.0. Use [[MessageHeader.build]] instead.
 */
export declare function createMessageHeader(json: any): MessageHeader;
/**
 * MessageHeaderField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MessageHeaderField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MessageHeader.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MessageHeader.receivedDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    receivedDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[MessageHeader.receivedTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    receivedTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[MessageHeader.sentDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sentDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[MessageHeader.sentTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sentTime: ComplexTypeTimePropertyField<EntityT>;
}
export declare namespace MessageHeader {
    function build(json: {
        [keys: string]: FieldType;
    }): MessageHeader;
}
//# sourceMappingURL=MessageHeader.d.ts.map