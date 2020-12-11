/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReportFilterRequestBuilder } from './ReportFilterRequestBuilder';
import { Moment } from 'moment';
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
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ReportFilter" of service "SAPB1".
 */
export class ReportFilter extends EntityV4 implements ReportFilterType {
  /**
   * Technical entity name for ReportFilter.
   */
  static _entityName = 'ReportFilter';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Report Layout.
   * @nullable
   */
  reportLayout?: TaxReportFilterReportLayoutType;
  /**
   * First Printed Number.
   * @nullable
   */
  firstPrintedNumber?: number;
  /**
   * From Date.
   * @nullable
   */
  fromDate?: Moment;
  /**
   * To Date.
   * @nullable
   */
  toDate?: Moment;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: BoYesNoEnum;
  /**
   * Round Amount.
   * @nullable
   */
  roundAmount?: BoYesNoEnum;
  /**
   * Declaration Type.
   * @nullable
   */
  declarationType?: TaxReportFilterDeclarationType;
  /**
   * Filter Type.
   * @nullable
   */
  filterType?: TaxReportFilterType;
  /**
   * Exclude Wt.
   * @nullable
   */
  excludeWt?: BoYesNoEnum;
  /**
   * Include Customers.
   * @nullable
   */
  includeCustomers?: BoYesNoEnum;
  /**
   * Include Vendors.
   * @nullable
   */
  includeVendors?: BoYesNoEnum;
  /**
   * Period.
   * @nullable
   */
  period?: TaxReportFilterPeriod;
  /**
   * Quarter.
   * @nullable
   */
  quarter?: number;
  /**
   * Year.
   * @nullable
   */
  year?: number;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: TaxReportFilterApArDocumentType;
  /**
   * First Register Number.
   * @nullable
   */
  firstRegisterNumber?: number;
  /**
   * Include Gl Accounts.
   * @nullable
   */
  includeGlAccounts?: BoYesNoEnum;
  /**
   * Appendix Oor P Selection.
   * @nullable
   */
  appendixOorPSelection?: BoYesNoEnum;
  /**
   * Opening And Closing Balance.
   * @nullable
   */
  openingAndClosingBalance?: BoYesNoEnum;
  /**
   * From Series.
   * @nullable
   */
  fromSeries?: number;
  /**
   * To Series.
   * @nullable
   */
  toSeries?: number;
  /**
   * Cancellation.
   * @nullable
   */
  cancellation?: BoYesNoEnum;
  /**
   * Hide Tax Without Transaction.
   * @nullable
   */
  hideTaxWithoutTransaction?: BoYesNoEnum;
  /**
   * Include Series Filter.
   * @nullable
   */
  includeSeriesFilter?: BoYesNoEnum;
  /**
   * Include Document Type.
   * @nullable
   */
  includeDocumentType?: BoYesNoEnum;
  /**
   * Diplay Credit Memos In Separate Column.
   * @nullable
   */
  diplayCreditMemosInSeparateColumn?: BoYesNoEnum;
  /**
   * Show Payments With Deferred Tax.
   * @nullable
   */
  showPaymentsWithDeferredTax?: BoYesNoEnum;
  /**
   * Quarter Or Dates.
   * @nullable
   */
  quarterOrDates?: TaxReportFilterQuarterOrDates;
  /**
   * Tax Report Groups.
   * @nullable
   */
  taxReportGroups?: TaxReportGroup[];
  /**
   * Tax Report Business Partners.
   * @nullable
   */
  taxReportBusinessPartners?: TaxReportBusinessPartner[];
  /**
   * Tax Report Documents.
   * @nullable
   */
  taxReportDocuments?: TaxReportDocument[];
  /**
   * Tax Report Series Collection.
   * @nullable
   */
  taxReportSeriesCollection?: TaxReportSeries[];
  /**
   * Tax Report Accounts.
   * @nullable
   */
  taxReportAccounts?: TaxReportAccount[];

  /**
   * Returns an entity builder to construct instances of `ReportFilter`.
   * @returns A builder that constructs instances of entity type `ReportFilter`.
   */
  static builder(): EntityBuilderType<ReportFilter, ReportFilterType> {
    return EntityV4.entityBuilder(ReportFilter);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ReportFilter` entity type.
   * @returns A `ReportFilter` request builder.
   */
  static requestBuilder(): ReportFilterRequestBuilder {
    return new ReportFilterRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ReportFilter`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ReportFilter`.
   */
  static customField(fieldName: string): CustomFieldV4<ReportFilter> {
    return EntityV4.customFieldSelector(fieldName, ReportFilter);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ReportFilterType {
  code?: number | null;
  name?: string | null;
  reportLayout?: TaxReportFilterReportLayoutType | null;
  firstPrintedNumber?: number | null;
  fromDate?: Moment | null;
  toDate?: Moment | null;
  taxDate?: BoYesNoEnum | null;
  roundAmount?: BoYesNoEnum | null;
  declarationType?: TaxReportFilterDeclarationType | null;
  filterType?: TaxReportFilterType | null;
  excludeWt?: BoYesNoEnum | null;
  includeCustomers?: BoYesNoEnum | null;
  includeVendors?: BoYesNoEnum | null;
  period?: TaxReportFilterPeriod | null;
  quarter?: number | null;
  year?: number | null;
  documentType?: TaxReportFilterApArDocumentType | null;
  firstRegisterNumber?: number | null;
  includeGlAccounts?: BoYesNoEnum | null;
  appendixOorPSelection?: BoYesNoEnum | null;
  openingAndClosingBalance?: BoYesNoEnum | null;
  fromSeries?: number | null;
  toSeries?: number | null;
  cancellation?: BoYesNoEnum | null;
  hideTaxWithoutTransaction?: BoYesNoEnum | null;
  includeSeriesFilter?: BoYesNoEnum | null;
  includeDocumentType?: BoYesNoEnum | null;
  diplayCreditMemosInSeparateColumn?: BoYesNoEnum | null;
  showPaymentsWithDeferredTax?: BoYesNoEnum | null;
  quarterOrDates?: TaxReportFilterQuarterOrDates | null;
  taxReportGroups?: TaxReportGroup[] | null;
  taxReportBusinessPartners?: TaxReportBusinessPartner[] | null;
  taxReportDocuments?: TaxReportDocument[] | null;
  taxReportSeriesCollection?: TaxReportSeries[] | null;
  taxReportAccounts?: TaxReportAccount[] | null;
}

export namespace ReportFilter {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<ReportFilter> = new NumberField('Code', ReportFilter, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ReportFilter> = new StringField('Name', ReportFilter, 'Edm.String');
  /**
   * Static representation of the [[reportLayout]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORT_LAYOUT: EnumField<ReportFilter> = new EnumField('ReportLayout', ReportFilter);
  /**
   * Static representation of the [[firstPrintedNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_PRINTED_NUMBER: NumberField<ReportFilter> = new NumberField('FirstPrintedNumber', ReportFilter, 'Edm.Int32');
  /**
   * Static representation of the [[fromDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROM_DATE: DateField<ReportFilter> = new DateField('FromDate', ReportFilter, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[toDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_DATE: DateField<ReportFilter> = new DateField('ToDate', ReportFilter, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: EnumField<ReportFilter> = new EnumField('TaxDate', ReportFilter);
  /**
   * Static representation of the [[roundAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUND_AMOUNT: EnumField<ReportFilter> = new EnumField('RoundAmount', ReportFilter);
  /**
   * Static representation of the [[declarationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DECLARATION_TYPE: EnumField<ReportFilter> = new EnumField('DeclarationType', ReportFilter);
  /**
   * Static representation of the [[filterType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILTER_TYPE: EnumField<ReportFilter> = new EnumField('FilterType', ReportFilter);
  /**
   * Static representation of the [[excludeWt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCLUDE_WT: EnumField<ReportFilter> = new EnumField('ExcludeWT', ReportFilter);
  /**
   * Static representation of the [[includeCustomers]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_CUSTOMERS: EnumField<ReportFilter> = new EnumField('IncludeCustomers', ReportFilter);
  /**
   * Static representation of the [[includeVendors]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_VENDORS: EnumField<ReportFilter> = new EnumField('IncludeVendors', ReportFilter);
  /**
   * Static representation of the [[period]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD: EnumField<ReportFilter> = new EnumField('Period', ReportFilter);
  /**
   * Static representation of the [[quarter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUARTER: NumberField<ReportFilter> = new NumberField('Quarter', ReportFilter, 'Edm.Int32');
  /**
   * Static representation of the [[year]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const YEAR: NumberField<ReportFilter> = new NumberField('Year', ReportFilter, 'Edm.Int32');
  /**
   * Static representation of the [[documentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TYPE: EnumField<ReportFilter> = new EnumField('DocumentType', ReportFilter);
  /**
   * Static representation of the [[firstRegisterNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_REGISTER_NUMBER: NumberField<ReportFilter> = new NumberField('FirstRegisterNumber', ReportFilter, 'Edm.Int32');
  /**
   * Static representation of the [[includeGlAccounts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_GL_ACCOUNTS: EnumField<ReportFilter> = new EnumField('IncludeGLAccounts', ReportFilter);
  /**
   * Static representation of the [[appendixOorPSelection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPENDIX_OOR_P_SELECTION: EnumField<ReportFilter> = new EnumField('AppendixOorPSelection', ReportFilter);
  /**
   * Static representation of the [[openingAndClosingBalance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPENING_AND_CLOSING_BALANCE: EnumField<ReportFilter> = new EnumField('OpeningAndClosingBalance', ReportFilter);
  /**
   * Static representation of the [[fromSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROM_SERIES: NumberField<ReportFilter> = new NumberField('FromSeries', ReportFilter, 'Edm.Int32');
  /**
   * Static representation of the [[toSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SERIES: NumberField<ReportFilter> = new NumberField('ToSeries', ReportFilter, 'Edm.Int32');
  /**
   * Static representation of the [[cancellation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLATION: EnumField<ReportFilter> = new EnumField('Cancellation', ReportFilter);
  /**
   * Static representation of the [[hideTaxWithoutTransaction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIDE_TAX_WITHOUT_TRANSACTION: EnumField<ReportFilter> = new EnumField('HideTaxWithoutTransaction', ReportFilter);
  /**
   * Static representation of the [[includeSeriesFilter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_SERIES_FILTER: EnumField<ReportFilter> = new EnumField('IncludeSeriesFilter', ReportFilter);
  /**
   * Static representation of the [[includeDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_DOCUMENT_TYPE: EnumField<ReportFilter> = new EnumField('IncludeDocumentType', ReportFilter);
  /**
   * Static representation of the [[diplayCreditMemosInSeparateColumn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIPLAY_CREDIT_MEMOS_IN_SEPARATE_COLUMN: EnumField<ReportFilter> = new EnumField('DiplayCreditMemosInSeparateColumn', ReportFilter);
  /**
   * Static representation of the [[showPaymentsWithDeferredTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHOW_PAYMENTS_WITH_DEFERRED_TAX: EnumField<ReportFilter> = new EnumField('ShowPaymentsWithDeferredTax', ReportFilter);
  /**
   * Static representation of the [[quarterOrDates]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUARTER_OR_DATES: EnumField<ReportFilter> = new EnumField('QuarterOrDates', ReportFilter);
  /**
   * Static representation of the [[taxReportGroups]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_REPORT_GROUPS: CollectionField<ReportFilter, TaxReportGroup> = new CollectionField('TaxReportGroups', ReportFilter, TaxReportGroup);
  /**
   * Static representation of the [[taxReportBusinessPartners]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_REPORT_BUSINESS_PARTNERS: CollectionField<ReportFilter, TaxReportBusinessPartner> = new CollectionField('TaxReportBusinessPartners', ReportFilter, TaxReportBusinessPartner);
  /**
   * Static representation of the [[taxReportDocuments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_REPORT_DOCUMENTS: CollectionField<ReportFilter, TaxReportDocument> = new CollectionField('TaxReportDocuments', ReportFilter, TaxReportDocument);
  /**
   * Static representation of the [[taxReportSeriesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_REPORT_SERIES_COLLECTION: CollectionField<ReportFilter, TaxReportSeries> = new CollectionField('TaxReportSeriesCollection', ReportFilter, TaxReportSeries);
  /**
   * Static representation of the [[taxReportAccounts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_REPORT_ACCOUNTS: CollectionField<ReportFilter, TaxReportAccount> = new CollectionField('TaxReportAccounts', ReportFilter, TaxReportAccount);
  /**
   * All fields of the ReportFilter entity.
   */
  export const _allFields: Array<NumberField<ReportFilter> | StringField<ReportFilter> | EnumField<ReportFilter> | DateField<ReportFilter> | CollectionField<ReportFilter, TaxReportGroup> | CollectionField<ReportFilter, TaxReportBusinessPartner> | CollectionField<ReportFilter, TaxReportDocument> | CollectionField<ReportFilter, TaxReportSeries> | CollectionField<ReportFilter, TaxReportAccount>> = [
    ReportFilter.CODE,
    ReportFilter.NAME,
    ReportFilter.REPORT_LAYOUT,
    ReportFilter.FIRST_PRINTED_NUMBER,
    ReportFilter.FROM_DATE,
    ReportFilter.TO_DATE,
    ReportFilter.TAX_DATE,
    ReportFilter.ROUND_AMOUNT,
    ReportFilter.DECLARATION_TYPE,
    ReportFilter.FILTER_TYPE,
    ReportFilter.EXCLUDE_WT,
    ReportFilter.INCLUDE_CUSTOMERS,
    ReportFilter.INCLUDE_VENDORS,
    ReportFilter.PERIOD,
    ReportFilter.QUARTER,
    ReportFilter.YEAR,
    ReportFilter.DOCUMENT_TYPE,
    ReportFilter.FIRST_REGISTER_NUMBER,
    ReportFilter.INCLUDE_GL_ACCOUNTS,
    ReportFilter.APPENDIX_OOR_P_SELECTION,
    ReportFilter.OPENING_AND_CLOSING_BALANCE,
    ReportFilter.FROM_SERIES,
    ReportFilter.TO_SERIES,
    ReportFilter.CANCELLATION,
    ReportFilter.HIDE_TAX_WITHOUT_TRANSACTION,
    ReportFilter.INCLUDE_SERIES_FILTER,
    ReportFilter.INCLUDE_DOCUMENT_TYPE,
    ReportFilter.DIPLAY_CREDIT_MEMOS_IN_SEPARATE_COLUMN,
    ReportFilter.SHOW_PAYMENTS_WITH_DEFERRED_TAX,
    ReportFilter.QUARTER_OR_DATES,
    ReportFilter.TAX_REPORT_GROUPS,
    ReportFilter.TAX_REPORT_BUSINESS_PARTNERS,
    ReportFilter.TAX_REPORT_DOCUMENTS,
    ReportFilter.TAX_REPORT_SERIES_COLLECTION,
    ReportFilter.TAX_REPORT_ACCOUNTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ReportFilter> = new AllFields('*', ReportFilter);
  /**
   * All key fields of the ReportFilter entity.
   */
  export const _keyFields: Array<Field<ReportFilter>> = [ReportFilter.CODE];
  /**
   * Mapping of all key field names to the respective static field property ReportFilter.
   */
  export const _keys: { [keys: string]: Field<ReportFilter> } = ReportFilter._keyFields.reduce((acc: { [keys: string]: Field<ReportFilter> }, field: Field<ReportFilter>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
