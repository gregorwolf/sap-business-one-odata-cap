/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { MessageDataColumn } from './MessageDataColumn';
import { Recipient } from './Recipient';
import type { MessagesApi } from './MessagesApi';
import { BoMsgPriorities } from './BoMsgPriorities';

/**
 * This class represents the entity "Messages" of service "SAPB1".
 */
export class Messages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MessagesType<T>
{
  /**
   * Technical entity name for Messages.
   */
  static _entityName = 'Messages';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Messages entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * User.
   * @nullable
   */
  user?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Priority.
   * @nullable
   */
  priority?: BoMsgPriorities | null;
  /**
   * Subject.
   * @nullable
   */
  subject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text.
   * @nullable
   */
  text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment.
   * @nullable
   */
  attachment?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Message Data Columns.
   * @nullable
   */
  messageDataColumns?: MessageDataColumn<T>[] | null;
  /**
   * Recipient Collection.
   * @nullable
   */
  recipientCollection?: Recipient<T>[] | null;

  constructor(readonly _entityApi: MessagesApi<T>) {
    super(_entityApi);
  }
}

export interface MessagesType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.Int32'>;
  user?: DeserializedType<T, 'Edm.Int32'> | null;
  priority?: BoMsgPriorities | null;
  subject?: DeserializedType<T, 'Edm.String'> | null;
  text?: DeserializedType<T, 'Edm.String'> | null;
  attachment?: DeserializedType<T, 'Edm.Int32'> | null;
  messageDataColumns?: MessageDataColumn<T>[] | null;
  recipientCollection?: Recipient<T>[] | null;
}
