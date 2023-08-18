/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ImportDeterminations } from './ImportDeterminations';
import { ImportDeterminationsRequestBuilder } from './ImportDeterminationsRequestBuilder';
import { ElectronicFileFormatsApi } from './ElectronicFileFormatsApi';
import { ElectronicDocProtocolCodeStrEnum } from './ElectronicDocProtocolCodeStrEnum';
import { ImportFieldTypeEnum } from './ImportFieldTypeEnum';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ImportDeterminationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ImportDeterminations<DeSerializersT>, DeSerializersT>
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
  ): ImportDeterminationsApi<DeSerializersT> {
    return new ImportDeterminationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link electronicFileFormat} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ELECTRONIC_FILE_FORMAT: OneToOneLink<
      ImportDeterminations<DeSerializersT>,
      DeSerializersT,
      ElectronicFileFormatsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ElectronicFileFormatsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ELECTRONIC_FILE_FORMAT: new OneToOneLink(
        'ElectronicFileFormat',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ImportDeterminations;

  requestBuilder(): ImportDeterminationsRequestBuilder<DeSerializersT> {
    return new ImportDeterminationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ImportDeterminations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ImportDeterminations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ImportDeterminations<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ImportDeterminations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ImportDeterminations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      ImportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: EnumField<
      ImportDeterminations<DeSerializers>,
      DeSerializersT,
      ElectronicDocProtocolCodeStrEnum,
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ImportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OBJECT_TYPE: OrderableEdmTypeField<
      ImportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT_TYPE_X_PATH: OrderableEdmTypeField<
      ImportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIELD_TYPE: EnumField<
      ImportDeterminations<DeSerializers>,
      DeSerializersT,
      ImportFieldTypeEnum,
      true,
      true
    >;
    FIELD_TYPE_X_PATH: OrderableEdmTypeField<
      ImportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORT_FORMAT: OrderableEdmTypeField<
      ImportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEFAULT_DIGITAL_SERIES: OrderableEdmTypeField<
      ImportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    VERSION_NUMBER: OrderableEdmTypeField<
      ImportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link electronicFileFormat} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ELECTRONIC_FILE_FORMAT: OneToOneLink<
      ImportDeterminations<DeSerializersT>,
      DeSerializersT,
      ElectronicFileFormatsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ImportDeterminations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEnumField(
          'Code',
          ElectronicDocProtocolCodeStrEnum,
          true
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link objectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_TYPE: fieldBuilder.buildEdmTypeField(
          'ObjectType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link objectTypeXPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_TYPE_X_PATH: fieldBuilder.buildEdmTypeField(
          'ObjectTypeXPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fieldType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_TYPE: fieldBuilder.buildEnumField(
          'FieldType',
          ImportFieldTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link fieldTypeXPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_TYPE_X_PATH: fieldBuilder.buildEdmTypeField(
          'FieldTypeXPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link importFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_FORMAT: fieldBuilder.buildEdmTypeField(
          'ImportFormat',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link defaultDigitalSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIGITAL_SERIES: fieldBuilder.buildEdmTypeField(
          'DefaultDigitalSeries',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link versionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_NUMBER: fieldBuilder.buildEdmTypeField(
          'VersionNumber',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ImportDeterminations)
      };
    }

    return this._schema;
  }
}
