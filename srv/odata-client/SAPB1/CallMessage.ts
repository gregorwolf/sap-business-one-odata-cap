/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CallMessageArgument } from './CallMessageArgument';
import { CallMessageTypeEnum } from './CallMessageTypeEnum';
import { CallMessageStatusEnum } from './CallMessageStatusEnum';
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
 * CallMessage
 */
export interface CallMessage<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Id.
   * @nullable
   */
  id?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Error Code.
   * @nullable
   */
  errorCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Message Body.
   * @nullable
   */
  messageBody?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Creation Time.
   * @nullable
   */
  creationTime?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Call Message Arguments.
   * @nullable
   */
  callMessageArguments?: DeserializedType<
    DeSerializersT,
    'SAPB1.CallMessageArgument'
  >;
}

/**
 * CallMessageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CallMessageField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CallMessage,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CallMessage.id} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.Int32', true, false> =
    this._fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', true);
  /**
   * Representation of the {@link CallMessage.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: EnumField<EntityT, DeSerializersT, CallMessageTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('Type', CallMessageTypeEnum, true);
  /**
   * Representation of the {@link CallMessage.errorCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  errorCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ErrorCode', 'Edm.String', true);
  /**
   * Representation of the {@link CallMessage.messageBody} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  messageBody: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MessageBody', 'Edm.String', true);
  /**
   * Representation of the {@link CallMessage.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<
    EntityT,
    DeSerializersT,
    CallMessageStatusEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('Status', CallMessageStatusEnum, true);
  /**
   * Representation of the {@link CallMessage.creationDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreationDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link CallMessage.creationTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Int32', true);
  /**
   * Representation of the {@link CallMessage.callMessageArguments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  callMessageArguments: CollectionField<
    EntityT,
    DeSerializersT,
    CallMessageArgument,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'CallMessageArguments',
    CallMessageArgument,
    true
  );

  /**
   * Creates an instance of CallMessageField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CallMessage, fieldOptions);
  }
}

export namespace CallMessage {
  /**
   * Metadata information on all properties of the `CallMessage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CallMessage>[] = [
    {
      originalName: 'ID',
      name: 'id',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Type',
      name: 'type',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ErrorCode',
      name: 'errorCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'MessageBody',
      name: 'messageBody',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Status',
      name: 'status',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CreationDate',
      name: 'creationDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CreationTime',
      name: 'creationTime',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CallMessageArguments',
      name: 'callMessageArguments',
      type: CallMessageArgument,
      isCollection: true
    }
  ];
}
