/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Messages } from './Messages';
import { MessagesRequestBuilder } from './MessagesRequestBuilder';
import { MessageDataColumn } from './MessageDataColumn';
import { Recipient } from './Recipient';
import { BoMsgPriorities } from './BoMsgPriorities';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class MessagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Messages<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): MessagesApi<DeSerializersT> {
    return new MessagesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Messages;

  requestBuilder(): MessagesRequestBuilder<DeSerializersT> {
    return new MessagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Messages<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Messages<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Messages<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Messages, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Messages, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      Messages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USER: OrderableEdmTypeField<
      Messages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PRIORITY: EnumField<
      Messages<DeSerializers>,
      DeSerializersT,
      BoMsgPriorities,
      true,
      true
    >;
    SUBJECT: OrderableEdmTypeField<
      Messages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT: OrderableEdmTypeField<
      Messages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT: OrderableEdmTypeField<
      Messages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MESSAGE_DATA_COLUMNS: CollectionField<
      Messages<DeSerializers>,
      DeSerializersT,
      MessageDataColumn,
      true,
      true
    >;
    RECIPIENT_COLLECTION: CollectionField<
      Messages<DeSerializers>,
      DeSerializersT,
      Recipient,
      true,
      true
    >;
    ALL_FIELDS: AllFields<Messages<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', false),
        /**
         * Static representation of the {@link user} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER: fieldBuilder.buildEdmTypeField('User', 'Edm.Int32', true),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEnumField(
          'Priority',
          BoMsgPriorities,
          true
        ),
        /**
         * Static representation of the {@link subject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBJECT: fieldBuilder.buildEdmTypeField('Subject', 'Edm.String', true),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
        /**
         * Static representation of the {@link attachment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT: fieldBuilder.buildEdmTypeField(
          'Attachment',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link messageDataColumns} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_DATA_COLUMNS: fieldBuilder.buildCollectionField(
          'MessageDataColumns',
          MessageDataColumn,
          true
        ),
        /**
         * Static representation of the {@link recipientCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECIPIENT_COLLECTION: fieldBuilder.buildCollectionField(
          'RecipientCollection',
          Recipient,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Messages)
      };
    }

    return this._schema;
  }
}
