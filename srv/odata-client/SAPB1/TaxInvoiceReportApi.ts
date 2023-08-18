/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxInvoiceReport } from './TaxInvoiceReport';
import { TaxInvoiceReportRequestBuilder } from './TaxInvoiceReportRequestBuilder';
import { TaxWebSitesApi } from './TaxWebSitesApi';
import { TaxInvoiceReportLine } from './TaxInvoiceReportLine';
import { TaxInvoiceReportNtsApprovedEnum } from './TaxInvoiceReportNtsApprovedEnum';
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
  EnumField,
  OrderableEdmTypeField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class TaxInvoiceReportApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxInvoiceReport<DeSerializersT>, DeSerializersT>
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
  ): TaxInvoiceReportApi<DeSerializersT> {
    return new TaxInvoiceReportApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link taxWebSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_WEB_SITE: OneToOneLink<
      TaxInvoiceReport<DeSerializersT>,
      DeSerializersT,
      TaxWebSitesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [TaxWebSitesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TAX_WEB_SITE: new OneToOneLink('TaxWebSite', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = TaxInvoiceReport;

  requestBuilder(): TaxInvoiceReportRequestBuilder<DeSerializersT> {
    return new TaxInvoiceReportRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxInvoiceReport<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxInvoiceReport<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxInvoiceReport<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxInvoiceReport, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxInvoiceReport,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NTS_APPROVAL: EnumField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      TaxInvoiceReportNtsApprovedEnum,
      true,
      true
    >;
    E_TAX_WEB_SITE: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    E_TAX_NO: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NTS_APPROVAL_NO: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_NTS_APPROVAL_NO: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_INVOICE_REPORT_NUMBER: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    BUSINESS_PLACE: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BP_CODE: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_NAME: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_AMOUNT: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CANCELED: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_TYPE: OrderableEdmTypeField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TAX_INVOICE_REPORT_LINE_COLLECTION: CollectionField<
      TaxInvoiceReport<DeSerializers>,
      DeSerializersT,
      TaxInvoiceReportLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxWebSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_WEB_SITE: OneToOneLink<
      TaxInvoiceReport<DeSerializersT>,
      DeSerializersT,
      TaxWebSitesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaxInvoiceReport<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ntsApproval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NTS_APPROVAL: fieldBuilder.buildEnumField(
          'NTSApproval',
          TaxInvoiceReportNtsApprovedEnum,
          true
        ),
        /**
         * Static representation of the {@link eTaxWebSite} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_TAX_WEB_SITE: fieldBuilder.buildEdmTypeField(
          'ETaxWebSite',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link eTaxNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_TAX_NO: fieldBuilder.buildEdmTypeField('ETaxNo', 'Edm.String', true),
        /**
         * Static representation of the {@link ntsApprovalNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NTS_APPROVAL_NO: fieldBuilder.buildEdmTypeField(
          'NTSApprovalNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalNtsApprovalNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_NTS_APPROVAL_NO: fieldBuilder.buildEdmTypeField(
          'OriginalNTSApprovalNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link taxInvoiceReportNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_REPORT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxInvoiceReportNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link businessPlace} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PLACE: fieldBuilder.buildEdmTypeField(
          'BusinessPlace',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link bpCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_CODE: fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true),
        /**
         * Static representation of the {@link bpName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_NAME: fieldBuilder.buildEdmTypeField('BPName', 'Edm.String', true),
        /**
         * Static representation of the {@link baseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BaseAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Double',
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
         * Static representation of the {@link reportType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_TYPE: fieldBuilder.buildEdmTypeField(
          'ReportType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link taxInvoiceReportLineCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_REPORT_LINE_COLLECTION: fieldBuilder.buildCollectionField(
          'TaxInvoiceReportLineCollection',
          TaxInvoiceReportLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxInvoiceReport)
      };
    }

    return this._schema;
  }
}
