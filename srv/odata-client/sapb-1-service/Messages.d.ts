import { MessagesRequestBuilder } from './MessagesRequestBuilder';
import { MessageDataColumn } from './MessageDataColumn';
import { Recipient } from './Recipient';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Messages" of service "SAPB1".
 */
export declare class Messages extends Entity implements MessagesType {
    /**
     * Technical entity name for Messages.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Messages.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * User.
     * @nullable
     */
    user?: number;
    /**
     * Subject.
     * @nullable
     */
    subject?: string;
    /**
     * Text.
     * @nullable
     */
    text?: string;
    /**
     * Attachment.
     * @nullable
     */
    attachment?: number;
    /**
     * Message Data Columns.
     * @nullable
     */
    messageDataColumns?: MessageDataColumn[];
    /**
     * Recipient Collection.
     * @nullable
     */
    recipientCollection?: Recipient[];
    /**
     * Returns an entity builder to construct instances `Messages`.
     * @returns A builder that constructs instances of entity type `Messages`.
     */
    static builder(): EntityBuilderType<Messages, MessagesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Messages` entity type.
     * @returns A `Messages` request builder.
     */
    static requestBuilder(): MessagesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Messages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Messages`.
     */
    static customField(fieldName: string): CustomField<Messages>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface MessagesType {
    code?: number;
    user?: number;
    subject?: string;
    text?: string;
    attachment?: number;
    messageDataColumns?: MessageDataColumn[];
    recipientCollection?: Recipient[];
}
export interface MessagesTypeForceMandatory {
    code: number;
    user: number;
    subject: string;
    text: string;
    attachment: number;
    messageDataColumns: MessageDataColumn[];
    recipientCollection: Recipient[];
}
export declare namespace Messages {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<Messages>;
    /**
     * Static representation of the [[user]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: NumberField<Messages>;
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT: StringField<Messages>;
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEXT: StringField<Messages>;
    /**
     * Static representation of the [[attachment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT: NumberField<Messages>;
    /**
     * Static representation of the [[messageDataColumns]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MESSAGE_DATA_COLUMNS: CollectionField<Messages>;
    /**
     * Static representation of the [[recipientCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECIPIENT_COLLECTION: CollectionField<Messages>;
    /**
     * All fields of the Messages entity.
     */
    const _allFields: Array<NumberField<Messages> | StringField<Messages> | CollectionField<Messages>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Messages>;
    /**
     * All key fields of the Messages entity.
     */
    const _keyFields: Array<Field<Messages>>;
    /**
     * Mapping of all key field names to the respective static field property Messages.
     */
    const _keys: {
        [keys: string]: Field<Messages>;
    };
}
//# sourceMappingURL=Messages.d.ts.map