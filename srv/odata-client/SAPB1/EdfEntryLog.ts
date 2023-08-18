/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicDocumentEntryLogTypeEnum } from './ElectronicDocumentEntryLogTypeEnum';
import { ElectronicDocumentAuthorityProcessEnum } from './ElectronicDocumentAuthorityProcessEnum';
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
 * EdfEntryLog
 */
export interface EdfEntryLog<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Log Number.
   * @nullable
   */
  logNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Log Type.
   * @nullable
   */
  logType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Log Message.
   * @nullable
   */
  logMessage?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Log Data.
   * @nullable
   */
  logData?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Log Operation Date.
   * @nullable
   */
  logOperationDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Log Operation Time.
   * @nullable
   */
  logOperationTime?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Export Format.
   * @nullable
   */
  exportFormat?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Export File.
   * @nullable
   */
  exportFile?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Authority Process.
   * @nullable
   */
  authorityProcess?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * EdfEntryLogField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EdfEntryLogField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EdfEntryLog,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EdfEntryLog.absEntry} property for query construction.
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
   * Representation of the {@link EdfEntryLog.logNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LogNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntryLog.logType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logType: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocumentEntryLogTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'LogType',
    ElectronicDocumentEntryLogTypeEnum,
    true
  );
  /**
   * Representation of the {@link EdfEntryLog.logMessage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logMessage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LogMessage', 'Edm.String', true);
  /**
   * Representation of the {@link EdfEntryLog.logData} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logData: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LogData', 'Edm.String', true);
  /**
   * Representation of the {@link EdfEntryLog.logOperationDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logOperationDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LogOperationDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EdfEntryLog.logOperationTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logOperationTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LogOperationTime',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link EdfEntryLog.exportFormat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportFormat: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExportFormat', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntryLog.exportFile} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportFile: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExportFile', 'Edm.String', true);
  /**
   * Representation of the {@link EdfEntryLog.authorityProcess} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authorityProcess: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocumentAuthorityProcessEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AuthorityProcess',
    ElectronicDocumentAuthorityProcessEnum,
    true
  );

  /**
   * Creates an instance of EdfEntryLogField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EdfEntryLog, fieldOptions);
  }
}

export namespace EdfEntryLog {
  /**
   * Metadata information on all properties of the `EdfEntryLog` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EdfEntryLog>[] = [
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LogNumber',
      name: 'logNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LogType',
      name: 'logType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'LogMessage',
      name: 'logMessage',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LogData',
      name: 'logData',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LogOperationDate',
      name: 'logOperationDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'LogOperationTime',
      name: 'logOperationTime',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExportFormat',
      name: 'exportFormat',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExportFile',
      name: 'exportFile',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AuthorityProcess',
      name: 'authorityProcess',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
