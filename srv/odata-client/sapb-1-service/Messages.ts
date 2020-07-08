/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessagesRequestBuilder } from './MessagesRequestBuilder';
import { MessageDataColumn, MessageDataColumnField } from './MessageDataColumn';
import { Recipient, RecipientField } from './Recipient';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "Messages" of service "SAPB1".
 */
export class Messages extends Entity implements MessagesType {
  /**
   * Technical entity name for Messages.
   */
  static _entityName = 'Messages';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Messages.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  static builder(): EntityBuilderType<Messages, MessagesTypeForceMandatory> {
    return Entity.entityBuilder(Messages);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Messages` entity type.
   * @returns A `Messages` request builder.
   */
  static requestBuilder(): MessagesRequestBuilder {
    return new MessagesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Messages`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Messages`.
   */
  static customField(fieldName: string): CustomField<Messages> {
    return Entity.customFieldSelector(fieldName, Messages);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace Messages {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<Messages> = new NumberField('Code', Messages, 'Edm.Int32');
  /**
   * Static representation of the [[user]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: NumberField<Messages> = new NumberField('User', Messages, 'Edm.Int32');
  /**
   * Static representation of the [[subject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT: StringField<Messages> = new StringField('Subject', Messages, 'Edm.String');
  /**
   * Static representation of the [[text]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT: StringField<Messages> = new StringField('Text', Messages, 'Edm.String');
  /**
   * Static representation of the [[attachment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT: NumberField<Messages> = new NumberField('Attachment', Messages, 'Edm.Int32');
  /**
   * Static representation of the [[messageDataColumns]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MESSAGE_DATA_COLUMNS: CollectionField<Messages> = new CollectionField('MessageDataColumns', Messages, new MessageDataColumnField('', Messages));
  /**
   * Static representation of the [[recipientCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECIPIENT_COLLECTION: CollectionField<Messages> = new CollectionField('RecipientCollection', Messages, new RecipientField('', Messages));
  /**
   * All fields of the Messages entity.
   */
  export const _allFields: Array<NumberField<Messages> | StringField<Messages> | CollectionField<Messages>> = [
    Messages.CODE,
    Messages.USER,
    Messages.SUBJECT,
    Messages.TEXT,
    Messages.ATTACHMENT,
    Messages.MESSAGE_DATA_COLUMNS,
    Messages.RECIPIENT_COLLECTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Messages> = new AllFields('*', Messages);
  /**
   * All key fields of the Messages entity.
   */
  export const _keyFields: Array<Field<Messages>> = [Messages.CODE];
  /**
   * Mapping of all key field names to the respective static field property Messages.
   */
  export const _keys: { [keys: string]: Field<Messages> } = Messages._keyFields.reduce((acc: { [keys: string]: Field<Messages> }, field: Field<Messages>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
