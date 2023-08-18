/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExportDeterminations } from './ExportDeterminations';
import { ExportDeterminationsRequestBuilder } from './ExportDeterminationsRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { CountriesApi } from './CountriesApi';
import { ElectronicFileFormatsApi } from './ElectronicFileFormatsApi';
import { ElectronicDocProtocolCodeStrEnum } from './ElectronicDocProtocolCodeStrEnum';
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
export class ExportDeterminationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExportDeterminations<DeSerializersT>, DeSerializersT>
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
  ): ExportDeterminationsApi<DeSerializersT> {
    return new ExportDeterminationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER_2: OneToOneLink<
      ExportDeterminations<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      ExportDeterminations<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link electronicFileFormat} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ELECTRONIC_FILE_FORMAT: OneToOneLink<
      ExportDeterminations<DeSerializersT>,
      DeSerializersT,
      ElectronicFileFormatsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPartnersApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      ElectronicFileFormatsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNER_2: new OneToOneLink(
        'BusinessPartner2',
        this,
        linkedApis[0]
      ),
      COUNTRY_2: new OneToOneLink('Country2', this, linkedApis[1]),
      ELECTRONIC_FILE_FORMAT: new OneToOneLink(
        'ElectronicFileFormat',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = ExportDeterminations;

  requestBuilder(): ExportDeterminationsRequestBuilder<DeSerializersT> {
    return new ExportDeterminationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExportDeterminations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExportDeterminations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExportDeterminations<DeSerializersT>,
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
    typeof ExportDeterminations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExportDeterminations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      ExportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: EnumField<
      ExportDeterminations<DeSerializers>,
      DeSerializersT,
      ElectronicDocProtocolCodeStrEnum,
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      ExportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BUSINESS_PARTNER: OrderableEdmTypeField<
      ExportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      ExportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      ExportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOCUMENT_TYPE: OrderableEdmTypeField<
      ExportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_FORMAT: OrderableEdmTypeField<
      ExportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PATH_FILE_NAME: OrderableEdmTypeField<
      ExportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_SUB_TYPE: OrderableEdmTypeField<
      ExportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION_NUMBER: OrderableEdmTypeField<
      ExportDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER_2: OneToOneLink<
      ExportDeterminations<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      ExportDeterminations<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link electronicFileFormat} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ELECTRONIC_FILE_FORMAT: OneToOneLink<
      ExportDeterminations<DeSerializersT>,
      DeSerializersT,
      ElectronicFileFormatsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExportDeterminations<DeSerializers>>;
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
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField('Priority', 'Edm.Int32', true),
        /**
         * Static representation of the {@link businessPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField(
          'BusinessPartner',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
        /**
         * Static representation of the {@link documentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'DocumentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exportFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_FORMAT: fieldBuilder.buildEdmTypeField(
          'ExportFormat',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link pathFileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PATH_FILE_NAME: fieldBuilder.buildEdmTypeField(
          'PathFileName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentSubType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_SUB_TYPE: fieldBuilder.buildEdmTypeField(
          'DocumentSubType',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', ExportDeterminations)
      };
    }

    return this._schema;
  }
}
