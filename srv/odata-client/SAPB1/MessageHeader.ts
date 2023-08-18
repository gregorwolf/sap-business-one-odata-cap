/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * MessageHeader
 */
export interface MessageHeader<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Received.
   * @nullable
   */
  received?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Read.
   * @nullable
   */
  read?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Received Date.
   * @nullable
   */
  receivedDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Received Time.
   * @nullable
   */
  receivedTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Sent Date.
   * @nullable
   */
  sentDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Sent Time.
   * @nullable
   */
  sentTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
}

/**
 * MessageHeaderField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class MessageHeaderField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  MessageHeader,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link MessageHeader.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', true);
  /**
   * Representation of the {@link MessageHeader.received} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  received: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Received', BoYesNoEnum, true);
  /**
   * Representation of the {@link MessageHeader.read} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  read: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Read', BoYesNoEnum, true);
  /**
   * Representation of the {@link MessageHeader.receivedDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receivedDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReceivedDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link MessageHeader.receivedTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receivedTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReceivedTime',
    'Edm.TimeOfDay',
    true
  );
  /**
   * Representation of the {@link MessageHeader.sentDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sentDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SentDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link MessageHeader.sentTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sentTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SentTime', 'Edm.TimeOfDay', true);

  /**
   * Creates an instance of MessageHeaderField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, MessageHeader, fieldOptions);
  }
}

export namespace MessageHeader {
  /**
   * Metadata information on all properties of the `MessageHeader` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MessageHeader>[] = [
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Received',
      name: 'received',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Read',
      name: 'read',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ReceivedDate',
      name: 'receivedDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ReceivedTime',
      name: 'receivedTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'SentDate',
      name: 'sentDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'SentTime',
      name: 'sentTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    }
  ];
}
