/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicDocProtocolCodeStrEnum } from './ElectronicDocProtocolCodeStrEnum';
import { ElectronicDocumentEntryLogTypeEnum } from './ElectronicDocumentEntryLogTypeEnum';
import { ElectronicDocumentBlobContentTypeEnum } from './ElectronicDocumentBlobContentTypeEnum';
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
 * EdfEntryLogInputParams
 */
export interface EdfEntryLogInputParams<
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
   * File Name.
   * @nullable
   */
  fileName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Log Data Content Type.
   * @nullable
   */
  logDataContentType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Unzip Log Data.
   * @nullable
   */
  unzipLogData?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Keep Log Data Prefix.
   * @nullable
   */
  keepLogDataPrefix?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * EdfEntryLogInputParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EdfEntryLogInputParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EdfEntryLogInputParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EdfEntryLogInputParams.code} property for query construction.
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
   * Representation of the {@link EdfEntryLogInputParams.guid} property for query construction.
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
   * Representation of the {@link EdfEntryLogInputParams.logType} property for query construction.
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
   * Representation of the {@link EdfEntryLogInputParams.fileName} property for query construction.
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
   * Representation of the {@link EdfEntryLogInputParams.logDataContentType} property for query construction.
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
   * Representation of the {@link EdfEntryLogInputParams.unzipLogData} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unzipLogData: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('UnzipLogData', BoYesNoEnum, true);
  /**
   * Representation of the {@link EdfEntryLogInputParams.keepLogDataPrefix} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keepLogDataPrefix: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('KeepLogDataPrefix', BoYesNoEnum, true);

  /**
   * Creates an instance of EdfEntryLogInputParamsField.
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
      EdfEntryLogInputParams,
      fieldOptions
    );
  }
}

export namespace EdfEntryLogInputParams {
  /**
   * Metadata information on all properties of the `EdfEntryLogInputParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EdfEntryLogInputParams>[] = [
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
      originalName: 'FileName',
      name: 'fileName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LogDataContentType',
      name: 'logDataContentType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'UnzipLogData',
      name: 'unzipLogData',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'KeepLogDataPrefix',
      name: 'keepLogDataPrefix',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
