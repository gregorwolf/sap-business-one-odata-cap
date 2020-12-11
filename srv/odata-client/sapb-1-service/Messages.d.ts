import { MessagesRequestBuilder } from './MessagesRequestBuilder';
import { MessageDataColumn } from './MessageDataColumn';
import { Recipient } from './Recipient';
import { BoMsgPriorities } from './BoMsgPriorities';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Messages" of service "SAPB1".
 */
export declare class Messages extends EntityV4 implements MessagesType {
    /**
     * Technical entity name for Messages.
     */
    static _entityName: string;
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
     * Priority.
     * @nullable
     */
    priority?: BoMsgPriorities;
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
     * Returns an entity builder to construct instances of `Messages`.
     * @returns A builder that constructs instances of entity type `Messages`.
     */
    static builder(): EntityBuilderType<Messages, MessagesType>;
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
    static customField(fieldName: string): CustomFieldV4<Messages>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface MessagesType {
    code?: number | null;
    user?: number | null;
    priority?: BoMsgPriorities | null;
    subject?: string | null;
    text?: string | null;
    attachment?: number | null;
    messageDataColumns?: MessageDataColumn[] | null;
    recipientCollection?: Recipient[] | null;
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
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIORITY: EnumField<Messages>;
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
    const MESSAGE_DATA_COLUMNS: CollectionField<Messages, MessageDataColumn>;
    /**
     * Static representation of the [[recipientCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECIPIENT_COLLECTION: CollectionField<Messages, Recipient>;
    /**
     * All fields of the Messages entity.
     */
    const _allFields: Array<NumberField<Messages> | EnumField<Messages> | StringField<Messages> | CollectionField<Messages, MessageDataColumn> | CollectionField<Messages, Recipient>>;
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