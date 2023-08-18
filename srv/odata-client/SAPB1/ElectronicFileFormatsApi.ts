/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicFileFormats } from './ElectronicFileFormats';
import { ElectronicFileFormatsRequestBuilder } from './ElectronicFileFormatsRequestBuilder';
import { ImportDeterminationsApi } from './ImportDeterminationsApi';
import { ExportDeterminationsApi } from './ExportDeterminationsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ElectronicFileFormatsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ElectronicFileFormats<DeSerializersT>, DeSerializersT>
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
  ): ElectronicFileFormatsApi<DeSerializersT> {
    return new ElectronicFileFormatsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link importDeterminations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPORT_DETERMINATIONS: OneToManyLink<
      ElectronicFileFormats<DeSerializersT>,
      DeSerializersT,
      ImportDeterminationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link exportDeterminations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPORT_DETERMINATIONS: OneToManyLink<
      ElectronicFileFormats<DeSerializersT>,
      DeSerializersT,
      ExportDeterminationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ImportDeterminationsApi<DeSerializersT>,
      ExportDeterminationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      IMPORT_DETERMINATIONS: new OneToManyLink(
        'ImportDeterminations',
        this,
        linkedApis[0]
      ),
      EXPORT_DETERMINATIONS: new OneToManyLink(
        'ExportDeterminations',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ElectronicFileFormats;

  requestBuilder(): ElectronicFileFormatsRequestBuilder<DeSerializersT> {
    return new ElectronicFileFormatsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ElectronicFileFormats<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ElectronicFileFormats<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ElectronicFileFormats<DeSerializersT>,
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
    typeof ElectronicFileFormats,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ElectronicFileFormats,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FORMAT_ID: OrderableEdmTypeField<
      ElectronicFileFormats<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ElectronicFileFormats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ElectronicFileFormats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      ElectronicFileFormats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEMA_VERSION: OrderableEdmTypeField<
      ElectronicFileFormats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTPUT_FILE_PATH: OrderableEdmTypeField<
      ElectronicFileFormats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MENU_NAME: OrderableEdmTypeField<
      ElectronicFileFormats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MENU_PATH: OrderableEdmTypeField<
      ElectronicFileFormats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link importDeterminations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPORT_DETERMINATIONS: OneToManyLink<
      ElectronicFileFormats<DeSerializersT>,
      DeSerializersT,
      ImportDeterminationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link exportDeterminations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPORT_DETERMINATIONS: OneToManyLink<
      ElectronicFileFormats<DeSerializersT>,
      DeSerializersT,
      ExportDeterminationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ElectronicFileFormats<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link formatId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT_ID: fieldBuilder.buildEdmTypeField(
          'FormatID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', true),
        /**
         * Static representation of the {@link schemaVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEMA_VERSION: fieldBuilder.buildEdmTypeField(
          'SchemaVersion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outputFilePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTPUT_FILE_PATH: fieldBuilder.buildEdmTypeField(
          'OutputFilePath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link menuName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_NAME: fieldBuilder.buildEdmTypeField(
          'MenuName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link menuPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_PATH: fieldBuilder.buildEdmTypeField(
          'MenuPath',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ElectronicFileFormats)
      };
    }

    return this._schema;
  }
}
