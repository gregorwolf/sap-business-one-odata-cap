/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegalData } from './LegalData';
import { LegalDataRequestBuilder } from './LegalDataRequestBuilder';
import { UsersApi } from './UsersApi';
import { LegalDataDetail } from './LegalDataDetail';
import { BoAparDocumentTypes } from './BoAparDocumentTypes';
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
  Time,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LegalDataApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LegalData<DeSerializersT>, DeSerializersT>
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
  ): LegalDataApi<DeSerializersT> {
    return new LegalDataApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      LegalData<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [UsersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      USER: new OneToOneLink('User', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = LegalData;

  requestBuilder(): LegalDataRequestBuilder<DeSerializersT> {
    return new LegalDataRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LegalData<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LegalData<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LegalData<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LegalData, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LegalData, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_ENTRY: OrderableEdmTypeField<
      LegalData<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_OBJECT_TYPE: EnumField<
      LegalData<DeSerializers>,
      DeSerializersT,
      BoAparDocumentTypes,
      true,
      true
    >;
    SOURCE_OBJECT_ENTRY: OrderableEdmTypeField<
      LegalData<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DATE_OF_PRINTING: OrderableEdmTypeField<
      LegalData<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TIME_OF_PRINTING: OrderableEdmTypeField<
      LegalData<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    PRINTER_BRAND: OrderableEdmTypeField<
      LegalData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_TYPE: OrderableEdmTypeField<
      LegalData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_MODEL: OrderableEdmTypeField<
      LegalData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_FIRMWARE_VERSION: OrderableEdmTypeField<
      LegalData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_DLL_VERSION: OrderableEdmTypeField<
      LegalData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_SERIES: OrderableEdmTypeField<
      LegalData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_NUMBER: OrderableEdmTypeField<
      LegalData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      LegalData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_USER_ID: OrderableEdmTypeField<
      LegalData<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LEGAL_DATA_DETAIL_COLLECTION: CollectionField<
      LegalData<DeSerializers>,
      DeSerializersT,
      LegalDataDetail,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      LegalData<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LegalData<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link docEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sourceObjectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_OBJECT_TYPE: fieldBuilder.buildEnumField(
          'SourceObjectType',
          BoAparDocumentTypes,
          true
        ),
        /**
         * Static representation of the {@link sourceObjectEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_OBJECT_ENTRY: fieldBuilder.buildEdmTypeField(
          'SourceObjectEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link dateOfPrinting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_PRINTING: fieldBuilder.buildEdmTypeField(
          'DateOfPrinting',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link timeOfPrinting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OF_PRINTING: fieldBuilder.buildEdmTypeField(
          'TimeOfPrinting',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link printerBrand} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_BRAND: fieldBuilder.buildEdmTypeField(
          'PrinterBrand',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_TYPE: fieldBuilder.buildEdmTypeField(
          'PrinterType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printerModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_MODEL: fieldBuilder.buildEdmTypeField(
          'PrinterModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printerFirmwareVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_FIRMWARE_VERSION: fieldBuilder.buildEdmTypeField(
          'PrinterFirmwareVersion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printerDllVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_DLL_VERSION: fieldBuilder.buildEdmTypeField(
          'PrinterDllVersion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_SERIES: fieldBuilder.buildEdmTypeField(
          'FiscalSeries',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'FiscalNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_USER_ID: fieldBuilder.buildEdmTypeField(
          'FiscalUserID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link legalDataDetailCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_DATA_DETAIL_COLLECTION: fieldBuilder.buildCollectionField(
          'LegalDataDetailCollection',
          LegalDataDetail,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LegalData)
      };
    }

    return this._schema;
  }
}
