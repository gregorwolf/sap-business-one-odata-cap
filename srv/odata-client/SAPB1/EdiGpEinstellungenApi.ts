/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EdiGpEinstellungen } from './EdiGpEinstellungen';
import { EdiGpEinstellungenRequestBuilder } from './EdiGpEinstellungenRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class EdiGpEinstellungenApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EdiGpEinstellungen<DeSerializersT>, DeSerializersT>
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
  ): EdiGpEinstellungenApi<DeSerializersT> {
    return new EdiGpEinstellungenApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EdiGpEinstellungen;

  requestBuilder(): EdiGpEinstellungenRequestBuilder<DeSerializersT> {
    return new EdiGpEinstellungenRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EdiGpEinstellungen<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EdiGpEinstellungen<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EdiGpEinstellungen<DeSerializersT>,
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
    typeof EdiGpEinstellungen,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EdiGpEinstellungen,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_ENTRY: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CANCELED: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG_INST: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    USER_SIGN: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TRANSFERED: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_DATE: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATE_TIME: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    UPDATE_TIME: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    DATA_SOURCE: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CARD_CODE: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SALES_QUOTATION_UGL_EXPORT: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_SALES_QUOTATION_GAEB_33_EXPORT: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_SALES_INVOICE_XRG_EXPORT: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_SALES_INVOICE_ZF_2_EXPORT: OrderableEdmTypeField<
      EdiGpEinstellungen<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<EdiGpEinstellungen<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link docEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link canceled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELED: fieldBuilder.buildEdmTypeField(
          'Canceled',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link object} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT: fieldBuilder.buildEdmTypeField('Object', 'Edm.String', true),
        /**
         * Static representation of the {@link logInst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_INST: fieldBuilder.buildEdmTypeField('LogInst', 'Edm.Int32', true),
        /**
         * Static representation of the {@link userSign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SIGN: fieldBuilder.buildEdmTypeField(
          'UserSign',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link transfered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERED: fieldBuilder.buildEdmTypeField(
          'Transfered',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_DATE: fieldBuilder.buildEdmTypeField(
          'CreateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link createTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_TIME: fieldBuilder.buildEdmTypeField(
          'CreateTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link updateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'UpdateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link updateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_TIME: fieldBuilder.buildEdmTypeField(
          'UpdateTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link dataSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_SOURCE: fieldBuilder.buildEdmTypeField(
          'DataSource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCardCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CARD_CODE: fieldBuilder.buildEdmTypeField(
          'U_CardCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSalesQuotationUglExport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SALES_QUOTATION_UGL_EXPORT: fieldBuilder.buildEdmTypeField(
          'U_SalesQuotationUglExport',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uSalesQuotationGaeb33Export} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SALES_QUOTATION_GAEB_33_EXPORT: fieldBuilder.buildEdmTypeField(
          'U_SalesQuotationGaeb33Export',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uSalesInvoiceXrgExport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SALES_INVOICE_XRG_EXPORT: fieldBuilder.buildEdmTypeField(
          'U_SalesInvoiceXrgExport',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uSalesInvoiceZf2Export} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SALES_INVOICE_ZF_2_EXPORT: fieldBuilder.buildEdmTypeField(
          'U_SalesInvoiceZf2Export',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EdiGpEinstellungen)
      };
    }

    return this._schema;
  }
}
