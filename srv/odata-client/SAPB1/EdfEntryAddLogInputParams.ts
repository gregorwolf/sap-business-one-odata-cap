/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicDocProtocolCodeStrEnum } from './ElectronicDocProtocolCodeStrEnum';
import { ElectronicDocumentEntryLogTypeEnum } from './ElectronicDocumentEntryLogTypeEnum';
import { ElectronicDocumentBlobContentTypeEnum } from './ElectronicDocumentBlobContentTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * EdfEntryAddLogInputParams
 */
export interface EdfEntryAddLogInputParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Guid.
   * @nullable
   */
  guid?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Export Format.
   * @nullable
   */
  exportFormat?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Log Data Content Type.
   * @nullable
   */
  logDataContentType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Zip Log Data.
   * @nullable
   */
  zipLogData?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
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
 * EdfEntryAddLogInputParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EdfEntryAddLogInputParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EdfEntryAddLogInputParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EdfEntryAddLogInputParams.code} property for query construction.
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
   * Representation of the {@link EdfEntryAddLogInputParams.guid} property for query construction.
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
   * Representation of the {@link EdfEntryAddLogInputParams.logType} property for query construction.
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
   * Representation of the {@link EdfEntryAddLogInputParams.logMessage} property for query construction.
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
   * Representation of the {@link EdfEntryAddLogInputParams.logData} property for query construction.
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
   * Representation of the {@link EdfEntryAddLogInputParams.exportFormat} property for query construction.
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
   * Representation of the {@link EdfEntryAddLogInputParams.logDataContentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logDataContentType: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocumentBlobContentTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'LogDataContentType',
    ElectronicDocumentBlobContentTypeEnum,
    true
  );
  /**
   * Representation of the {@link EdfEntryAddLogInputParams.zipLogData} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipLogData: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ZipLogData', BoYesNoEnum, true);
  /**
   * Representation of the {@link EdfEntryAddLogInputParams.exportFile} property for query construction.
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
   * Representation of the {@link EdfEntryAddLogInputParams.authorityProcess} property for query construction.
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
   * Creates an instance of EdfEntryAddLogInputParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      EdfEntryAddLogInputParams,
      fieldOptions
    );
  }
}

export namespace EdfEntryAddLogInputParams {
  /**
   * Metadata information on all properties of the `EdfEntryAddLogInputParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EdfEntryAddLogInputParams>[] =
    [
      {
        originalName: 'Code',
        name: 'code',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'GUID',
        name: 'guid',
        type: 'Edm.String',
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
        originalName: 'ExportFormat',
        name: 'exportFormat',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LogDataContentType',
        name: 'logDataContentType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'ZipLogData',
        name: 'zipLogData',
        type: 'Edm.Enum',
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
