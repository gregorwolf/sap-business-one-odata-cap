import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time } from '@sap-cloud-sdk/core';
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
     * Received.
     * @nullable
     */
    received?: BoYesNoEnum;
    /**
     * Read.
     * @nullable
     */
    read?: BoYesNoEnum;
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
export declare class MessageHeaderField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MessageHeader> {
    /**
     * Representation of the [[MessageHeader.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MessageHeader.received]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    received: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[MessageHeader.read]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    read: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Creates an instance of MessageHeaderField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace MessageHeader {
    /**
     * Metadata information on all properties of the `MessageHeader` complex type.
     */
    const _propertyMetadata: PropertyMetadata<MessageHeader>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): MessageHeader;
}
//# sourceMappingURL=MessageHeader.d.ts.map