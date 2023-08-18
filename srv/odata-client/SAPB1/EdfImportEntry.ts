/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicDocProtocolCodeStrEnum } from './ElectronicDocProtocolCodeStrEnum';
import { ElectronicDocumentEntryStatusEnum } from './ElectronicDocumentEntryStatusEnum';
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
 * EdfImportEntry
 */
export interface EdfImportEntry<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Message.
   * @nullable
   */
  message?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Test Mode.
   * @nullable
   */
  testMode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Guid.
   * @nullable
   */
  guid?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Authority.
   * @nullable
   */
  authority?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Processing Source.
   * @nullable
   */
  processingSource?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Meta Data.
   * @nullable
   */
  metaData?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Create Time.
   * @nullable
   */
  createTime?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * User.
   * @nullable
   */
  user?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * User 2.
   * @nullable
   */
  user2?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Mime Type.
   * @nullable
   */
  mimeType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * File Name.
   * @nullable
   */
  fileName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Assigned Id.
   * @nullable
   */
  assignedId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Date.
   * @nullable
   */
  documentDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Object Type.
   * @nullable
   */
  objectType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Is Bp Manual.
   * @nullable
   */
  isBpManual?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * EdfImportEntryField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EdfImportEntryField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EdfImportEntry,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EdfImportEntry.absEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfImportEntry.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocProtocolCodeStrEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Code',
    ElectronicDocProtocolCodeStrEnum,
    true
  );
  /**
   * Representation of the {@link EdfImportEntry.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocumentEntryStatusEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Status',
    ElectronicDocumentEntryStatusEnum,
    true
  );
  /**
   * Representation of the {@link EdfImportEntry.message} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  message: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Message', 'Edm.String', true);
  /**
   * Representation of the {@link EdfImportEntry.testMode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  testMode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TestMode', 'Edm.String', true);
  /**
   * Representation of the {@link EdfImportEntry.guid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  guid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GUID', 'Edm.String', true);
  /**
   * Representation of the {@link EdfImportEntry.authority} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authority: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Authority', 'Edm.String', true);
  /**
   * Representation of the {@link EdfImportEntry.processingSource} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  processingSource: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ProcessingSource',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EdfImportEntry.metaData} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  metaData: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MetaData', 'Edm.String', true);
  /**
   * Representation of the {@link EdfImportEntry.createDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreateDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EdfImportEntry.createTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreateTime', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfImportEntry.updateDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UpdateDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EdfImportEntry.updateTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UpdateTime', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfImportEntry.user} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  user: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('User', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfImportEntry.user2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  user2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('User2', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfImportEntry.mimeType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mimeType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MimeType', 'Edm.String', true);
  /**
   * Representation of the {@link EdfImportEntry.fileName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FileName', 'Edm.String', true);
  /**
   * Representation of the {@link EdfImportEntry.assignedId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assignedId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AssignedID', 'Edm.String', true);
  /**
   * Representation of the {@link EdfImportEntry.cardCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CardCode', 'Edm.String', true);
  /**
   * Representation of the {@link EdfImportEntry.documentDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EdfImportEntry.objectType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ObjectType', 'Edm.String', true);
  /**
   * Representation of the {@link EdfImportEntry.isBpManual} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isBpManual: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsBPManual', BoYesNoEnum, true);

  /**
   * Creates an instance of EdfImportEntryField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EdfImportEntry, fieldOptions);
  }
}

export namespace EdfImportEntry {
  /**
   * Metadata information on all properties of the `EdfImportEntry` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EdfImportEntry>[] = [
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Status',
      name: 'status',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Message',
      name: 'message',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TestMode',
      name: 'testMode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GUID',
      name: 'guid',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Authority',
      name: 'authority',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ProcessingSource',
      name: 'processingSource',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'MetaData',
      name: 'metaData',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CreateDate',
      name: 'createDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CreateTime',
      name: 'createTime',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UpdateDate',
      name: 'updateDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'UpdateTime',
      name: 'updateTime',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'User',
      name: 'user',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'User2',
      name: 'user2',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'MimeType',
      name: 'mimeType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FileName',
      name: 'fileName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AssignedID',
      name: 'assignedId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CardCode',
      name: 'cardCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocumentDate',
      name: 'documentDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ObjectType',
      name: 'objectType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IsBPManual',
      name: 'isBpManual',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
