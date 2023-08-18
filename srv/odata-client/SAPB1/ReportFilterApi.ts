/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReportFilter } from './ReportFilter';
import { ReportFilterRequestBuilder } from './ReportFilterRequestBuilder';
import { TaxReportGroup } from './TaxReportGroup';
import { TaxReportBusinessPartner } from './TaxReportBusinessPartner';
import { TaxReportDocument } from './TaxReportDocument';
import { TaxReportSeries } from './TaxReportSeries';
import { TaxReportAccount } from './TaxReportAccount';
import { TaxReportFilterReportLayoutType } from './TaxReportFilterReportLayoutType';
import { BoYesNoEnum } from './BoYesNoEnum';
import { TaxReportFilterDeclarationType } from './TaxReportFilterDeclarationType';
import { TaxReportFilterType } from './TaxReportFilterType';
import { TaxReportFilterPeriod } from './TaxReportFilterPeriod';
import { TaxReportFilterApArDocumentType } from './TaxReportFilterApArDocumentType';
import { TaxReportFilterQuarterOrDates } from './TaxReportFilterQuarterOrDates';
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
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class ReportFilterApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReportFilter<DeSerializersT>, DeSerializersT>
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
  ): ReportFilterApi<DeSerializersT> {
    return new ReportFilterApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReportFilter;

  requestBuilder(): ReportFilterRequestBuilder<DeSerializersT> {
    return new ReportFilterRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReportFilter<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ReportFilter<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ReportFilter<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ReportFilter, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ReportFilter, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_LAYOUT: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      TaxReportFilterReportLayoutType,
      true,
      true
    >;
    FIRST_PRINTED_NUMBER: OrderableEdmTypeField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TAX_DATE: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ROUND_AMOUNT: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DECLARATION_TYPE: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      TaxReportFilterDeclarationType,
      true,
      true
    >;
    FILTER_TYPE: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      TaxReportFilterType,
      true,
      true
    >;
    EXCLUDE_WT: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INCLUDE_CUSTOMERS: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INCLUDE_VENDORS: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PERIOD: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      TaxReportFilterPeriod,
      true,
      true
    >;
    QUARTER: OrderableEdmTypeField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    YEAR: OrderableEdmTypeField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOCUMENT_TYPE: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      TaxReportFilterApArDocumentType,
      true,
      true
    >;
    FIRST_REGISTER_NUMBER: OrderableEdmTypeField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INCLUDE_GL_ACCOUNTS: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    APPENDIX_OOR_P_SELECTION: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    OPENING_AND_CLOSING_BALANCE: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FROM_SERIES: OrderableEdmTypeField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TO_SERIES: OrderableEdmTypeField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CANCELLATION: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    HIDE_TAX_WITHOUT_TRANSACTION: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INCLUDE_SERIES_FILTER: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INCLUDE_DOCUMENT_TYPE: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DIPLAY_CREDIT_MEMOS_IN_SEPARATE_COLUMN: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SHOW_PAYMENTS_WITH_DEFERRED_TAX: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    QUARTER_OR_DATES: EnumField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      TaxReportFilterQuarterOrDates,
      true,
      true
    >;
    TAX_REPORT_GROUPS: CollectionField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      TaxReportGroup,
      true,
      true
    >;
    TAX_REPORT_BUSINESS_PARTNERS: CollectionField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      TaxReportBusinessPartner,
      true,
      true
    >;
    TAX_REPORT_DOCUMENTS: CollectionField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      TaxReportDocument,
      true,
      true
    >;
    TAX_REPORT_SERIES_COLLECTION: CollectionField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      TaxReportSeries,
      true,
      true
    >;
    TAX_REPORT_ACCOUNTS: CollectionField<
      ReportFilter<DeSerializers>,
      DeSerializersT,
      TaxReportAccount,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ReportFilter<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link reportLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_LAYOUT: fieldBuilder.buildEnumField(
          'ReportLayout',
          TaxReportFilterReportLayoutType,
          true
        ),
        /**
         * Static representation of the {@link firstPrintedNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_PRINTED_NUMBER: fieldBuilder.buildEdmTypeField(
          'FirstPrintedNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link taxDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DATE: fieldBuilder.buildEnumField('TaxDate', BoYesNoEnum, true),
        /**
         * Static representation of the {@link roundAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_AMOUNT: fieldBuilder.buildEnumField(
          'RoundAmount',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link declarationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECLARATION_TYPE: fieldBuilder.buildEnumField(
          'DeclarationType',
          TaxReportFilterDeclarationType,
          true
        ),
        /**
         * Static representation of the {@link filterType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILTER_TYPE: fieldBuilder.buildEnumField(
          'FilterType',
          TaxReportFilterType,
          true
        ),
        /**
         * Static representation of the {@link excludeWt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_WT: fieldBuilder.buildEnumField('ExcludeWT', BoYesNoEnum, true),
        /**
         * Static representation of the {@link includeCustomers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_CUSTOMERS: fieldBuilder.buildEnumField(
          'IncludeCustomers',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link includeVendors} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_VENDORS: fieldBuilder.buildEnumField(
          'IncludeVendors',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEnumField(
          'Period',
          TaxReportFilterPeriod,
          true
        ),
        /**
         * Static representation of the {@link quarter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARTER: fieldBuilder.buildEdmTypeField('Quarter', 'Edm.Int32', true),
        /**
         * Static representation of the {@link year} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR: fieldBuilder.buildEdmTypeField('Year', 'Edm.Int32', true),
        /**
         * Static representation of the {@link documentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'DocumentType',
          TaxReportFilterApArDocumentType,
          true
        ),
        /**
         * Static representation of the {@link firstRegisterNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_REGISTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'FirstRegisterNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link includeGlAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_GL_ACCOUNTS: fieldBuilder.buildEnumField(
          'IncludeGLAccounts',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link appendixOorPSelection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPENDIX_OOR_P_SELECTION: fieldBuilder.buildEnumField(
          'AppendixOorPSelection',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link openingAndClosingBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPENING_AND_CLOSING_BALANCE: fieldBuilder.buildEnumField(
          'OpeningAndClosingBalance',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link fromSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_SERIES: fieldBuilder.buildEdmTypeField(
          'FromSeries',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link toSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_SERIES: fieldBuilder.buildEdmTypeField(
          'ToSeries',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link cancellation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION: fieldBuilder.buildEnumField(
          'Cancellation',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link hideTaxWithoutTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_TAX_WITHOUT_TRANSACTION: fieldBuilder.buildEnumField(
          'HideTaxWithoutTransaction',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link includeSeriesFilter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_SERIES_FILTER: fieldBuilder.buildEnumField(
          'IncludeSeriesFilter',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link includeDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'IncludeDocumentType',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link diplayCreditMemosInSeparateColumn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIPLAY_CREDIT_MEMOS_IN_SEPARATE_COLUMN: fieldBuilder.buildEnumField(
          'DiplayCreditMemosInSeparateColumn',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link showPaymentsWithDeferredTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_PAYMENTS_WITH_DEFERRED_TAX: fieldBuilder.buildEnumField(
          'ShowPaymentsWithDeferredTax',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link quarterOrDates} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARTER_OR_DATES: fieldBuilder.buildEnumField(
          'QuarterOrDates',
          TaxReportFilterQuarterOrDates,
          true
        ),
        /**
         * Static representation of the {@link taxReportGroups} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REPORT_GROUPS: fieldBuilder.buildCollectionField(
          'TaxReportGroups',
          TaxReportGroup,
          true
        ),
        /**
         * Static representation of the {@link taxReportBusinessPartners} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REPORT_BUSINESS_PARTNERS: fieldBuilder.buildCollectionField(
          'TaxReportBusinessPartners',
          TaxReportBusinessPartner,
          true
        ),
        /**
         * Static representation of the {@link taxReportDocuments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REPORT_DOCUMENTS: fieldBuilder.buildCollectionField(
          'TaxReportDocuments',
          TaxReportDocument,
          true
        ),
        /**
         * Static representation of the {@link taxReportSeriesCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REPORT_SERIES_COLLECTION: fieldBuilder.buildCollectionField(
          'TaxReportSeriesCollection',
          TaxReportSeries,
          true
        ),
        /**
         * Static representation of the {@link taxReportAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REPORT_ACCOUNTS: fieldBuilder.buildCollectionField(
          'TaxReportAccounts',
          TaxReportAccount,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReportFilter)
      };
    }

    return this._schema;
  }
}
