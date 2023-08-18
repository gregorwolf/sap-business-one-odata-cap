/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EcmActionLogTypeEnum } from './EcmActionLogTypeEnum';
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
 * EcmActionLog
 */
export interface EcmActionLog<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Action Id.
   * @nullable
   */
  actionId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Log Id.
   * @nullable
   */
  logId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Message.
   * @nullable
   */
  message?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Data.
   * @nullable
   */
  data?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Log Date.
   * @nullable
   */
  logDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Log Time.
   * @nullable
   */
  logTime?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
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
 * EcmActionLogField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmActionLogField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EcmActionLog,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EcmActionLog.actionId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActionID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EcmActionLog.logId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LogID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EcmActionLog.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: EnumField<EntityT, DeSerializersT, EcmActionLogTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('Type', EcmActionLogTypeEnum, true);
  /**
   * Representation of the {@link EcmActionLog.message} property for query construction.
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
   * Representation of the {@link EcmActionLog.data} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  data: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Data', 'Edm.String', true);
  /**
   * Representation of the {@link EcmActionLog.logDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LogDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EcmActionLog.logTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LogTime', 'Edm.Int32', true);
  /**
   * Representation of the {@link EcmActionLog.exportFormat} property for query construction.
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
   * Representation of the {@link EcmActionLog.exportFile} property for query construction.
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
   * Representation of the {@link EcmActionLog.authorityProcess} property for query construction.
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
   * Creates an instance of EcmActionLogField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EcmActionLog, fieldOptions);
  }
}

export namespace EcmActionLog {
  /**
   * Metadata information on all properties of the `EcmActionLog` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EcmActionLog>[] = [
    {
      originalName: 'ActionID',
      name: 'actionId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LogID',
      name: 'logId',
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
      originalName: 'Message',
      name: 'message',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Data',
      name: 'data',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LogDate',
      name: 'logDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'LogTime',
      name: 'logTime',
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
