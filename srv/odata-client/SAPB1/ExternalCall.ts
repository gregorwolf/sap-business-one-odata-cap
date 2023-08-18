/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CallArgument } from './CallArgument';
import { CallMessage } from './CallMessage';
import { ExternalCallStatusEnum } from './ExternalCallStatusEnum';
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
 * ExternalCall
 */
export interface ExternalCall<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Id.
   * @nullable
   */
  id?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Category.
   * @nullable
   */
  category?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
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
   * Last Update Date.
   * @nullable
   */
  lastUpdateDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Last Update Time.
   * @nullable
   */
  lastUpdateTime?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Last Update User Code.
   * @nullable
   */
  lastUpdateUserCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Call Arguments.
   * @nullable
   */
  callArguments?: DeserializedType<DeSerializersT, 'SAPB1.CallArgument'>;
  /**
   * Call Messages.
   * @nullable
   */
  callMessages?: DeserializedType<DeSerializersT, 'SAPB1.CallMessage'>;
}

/**
 * ExternalCallField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExternalCallField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ExternalCall,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ExternalCall.id} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.Int32', true, false> =
    this._fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', true);
  /**
   * Representation of the {@link ExternalCall.category} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  category: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Category', 'Edm.Int32', true);
  /**
   * Representation of the {@link ExternalCall.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<
    EntityT,
    DeSerializersT,
    ExternalCallStatusEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('Status', ExternalCallStatusEnum, true);
  /**
   * Representation of the {@link ExternalCall.creationDate} property for query construction.
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
   * Representation of the {@link ExternalCall.creationTime} property for query construction.
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
   * Representation of the {@link ExternalCall.lastUpdateDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastUpdateDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LastUpdateDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ExternalCall.lastUpdateTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastUpdateTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LastUpdateTime', 'Edm.Int32', true);
  /**
   * Representation of the {@link ExternalCall.lastUpdateUserCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastUpdateUserCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LastUpdateUserCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ExternalCall.callArguments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  callArguments: CollectionField<
    EntityT,
    DeSerializersT,
    CallArgument,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'CallArguments',
    CallArgument,
    true
  );
  /**
   * Representation of the {@link ExternalCall.callMessages} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  callMessages: CollectionField<
    EntityT,
    DeSerializersT,
    CallMessage,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'CallMessages',
    CallMessage,
    true
  );

  /**
   * Creates an instance of ExternalCallField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ExternalCall, fieldOptions);
  }
}

export namespace ExternalCall {
  /**
   * Metadata information on all properties of the `ExternalCall` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExternalCall>[] = [
    {
      originalName: 'ID',
      name: 'id',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Category',
      name: 'category',
      type: 'Edm.Int32',
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
      originalName: 'LastUpdateDate',
      name: 'lastUpdateDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'LastUpdateTime',
      name: 'lastUpdateTime',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LastUpdateUserCode',
      name: 'lastUpdateUserCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CallArguments',
      name: 'callArguments',
      type: CallArgument,
      isCollection: true
    },
    {
      originalName: 'CallMessages',
      name: 'callMessages',
      type: CallMessage,
      isCollection: true
    }
  ];
}
