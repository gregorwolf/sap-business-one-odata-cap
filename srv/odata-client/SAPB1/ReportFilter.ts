/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { TaxReportGroup } from './TaxReportGroup';
import { TaxReportBusinessPartner } from './TaxReportBusinessPartner';
import { TaxReportDocument } from './TaxReportDocument';
import { TaxReportSeries } from './TaxReportSeries';
import { TaxReportAccount } from './TaxReportAccount';
import type { ReportFilterApi } from './ReportFilterApi';
import { TaxReportFilterReportLayoutType } from './TaxReportFilterReportLayoutType';
import { BoYesNoEnum } from './BoYesNoEnum';
import { TaxReportFilterDeclarationType } from './TaxReportFilterDeclarationType';
import { TaxReportFilterType } from './TaxReportFilterType';
import { TaxReportFilterPeriod } from './TaxReportFilterPeriod';
import { TaxReportFilterApArDocumentType } from './TaxReportFilterApArDocumentType';
import { TaxReportFilterQuarterOrDates } from './TaxReportFilterQuarterOrDates';

/**
 * This class represents the entity "ReportFilter" of service "SAPB1".
 */
export class ReportFilter<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReportFilterType<T>
{
  /**
   * Technical entity name for ReportFilter.
   */
  static _entityName = 'ReportFilter';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ReportFilter entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report Layout.
   * @nullable
   */
  reportLayout?: TaxReportFilterReportLayoutType | null;
  /**
   * First Printed Number.
   * @nullable
   */
  firstPrintedNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * From Date.
   * @nullable
   */
  fromDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * To Date.
   * @nullable
   */
  toDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: BoYesNoEnum | null;
  /**
   * Round Amount.
   * @nullable
   */
  roundAmount?: BoYesNoEnum | null;
  /**
   * Declaration Type.
   * @nullable
   */
  declarationType?: TaxReportFilterDeclarationType | null;
  /**
   * Filter Type.
   * @nullable
   */
  filterType?: TaxReportFilterType | null;
  /**
   * Exclude Wt.
   * @nullable
   */
  excludeWt?: BoYesNoEnum | null;
  /**
   * Include Customers.
   * @nullable
   */
  includeCustomers?: BoYesNoEnum | null;
  /**
   * Include Vendors.
   * @nullable
   */
  includeVendors?: BoYesNoEnum | null;
  /**
   * Period.
   * @nullable
   */
  period?: TaxReportFilterPeriod | null;
  /**
   * Quarter.
   * @nullable
   */
  quarter?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Year.
   * @nullable
   */
  year?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: TaxReportFilterApArDocumentType | null;
  /**
   * First Register Number.
   * @nullable
   */
  firstRegisterNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Include Gl Accounts.
   * @nullable
   */
  includeGlAccounts?: BoYesNoEnum | null;
  /**
   * Appendix Oor P Selection.
   * @nullable
   */
  appendixOorPSelection?: BoYesNoEnum | null;
  /**
   * Opening And Closing Balance.
   * @nullable
   */
  openingAndClosingBalance?: BoYesNoEnum | null;
  /**
   * From Series.
   * @nullable
   */
  fromSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * To Series.
   * @nullable
   */
  toSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cancellation.
   * @nullable
   */
  cancellation?: BoYesNoEnum | null;
  /**
   * Hide Tax Without Transaction.
   * @nullable
   */
  hideTaxWithoutTransaction?: BoYesNoEnum | null;
  /**
   * Include Series Filter.
   * @nullable
   */
  includeSeriesFilter?: BoYesNoEnum | null;
  /**
   * Include Document Type.
   * @nullable
   */
  includeDocumentType?: BoYesNoEnum | null;
  /**
   * Diplay Credit Memos In Separate Column.
   * @nullable
   */
  diplayCreditMemosInSeparateColumn?: BoYesNoEnum | null;
  /**
   * Show Payments With Deferred Tax.
   * @nullable
   */
  showPaymentsWithDeferredTax?: BoYesNoEnum | null;
  /**
   * Quarter Or Dates.
   * @nullable
   */
  quarterOrDates?: TaxReportFilterQuarterOrDates | null;
  /**
   * Tax Report Groups.
   * @nullable
   */
  taxReportGroups?: TaxReportGroup<T>[] | null;
  /**
   * Tax Report Business Partners.
   * @nullable
   */
  taxReportBusinessPartners?: TaxReportBusinessPartner<T>[] | null;
  /**
   * Tax Report Documents.
   * @nullable
   */
  taxReportDocuments?: TaxReportDocument<T>[] | null;
  /**
   * Tax Report Series Collection.
   * @nullable
   */
  taxReportSeriesCollection?: TaxReportSeries<T>[] | null;
  /**
   * Tax Report Accounts.
   * @nullable
   */
  taxReportAccounts?: TaxReportAccount<T>[] | null;

  constructor(readonly _entityApi: ReportFilterApi<T>) {
    super(_entityApi);
  }
}

export interface ReportFilterType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  reportLayout?: TaxReportFilterReportLayoutType | null;
  firstPrintedNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  fromDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  toDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  taxDate?: BoYesNoEnum | null;
  roundAmount?: BoYesNoEnum | null;
  declarationType?: TaxReportFilterDeclarationType | null;
  filterType?: TaxReportFilterType | null;
  excludeWt?: BoYesNoEnum | null;
  includeCustomers?: BoYesNoEnum | null;
  includeVendors?: BoYesNoEnum | null;
  period?: TaxReportFilterPeriod | null;
  quarter?: DeserializedType<T, 'Edm.Int32'> | null;
  year?: DeserializedType<T, 'Edm.Int32'> | null;
  documentType?: TaxReportFilterApArDocumentType | null;
  firstRegisterNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  includeGlAccounts?: BoYesNoEnum | null;
  appendixOorPSelection?: BoYesNoEnum | null;
  openingAndClosingBalance?: BoYesNoEnum | null;
  fromSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  toSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  cancellation?: BoYesNoEnum | null;
  hideTaxWithoutTransaction?: BoYesNoEnum | null;
  includeSeriesFilter?: BoYesNoEnum | null;
  includeDocumentType?: BoYesNoEnum | null;
  diplayCreditMemosInSeparateColumn?: BoYesNoEnum | null;
  showPaymentsWithDeferredTax?: BoYesNoEnum | null;
  quarterOrDates?: TaxReportFilterQuarterOrDates | null;
  taxReportGroups?: TaxReportGroup<T>[] | null;
  taxReportBusinessPartners?: TaxReportBusinessPartner<T>[] | null;
  taxReportDocuments?: TaxReportDocument<T>[] | null;
  taxReportSeriesCollection?: TaxReportSeries<T>[] | null;
  taxReportAccounts?: TaxReportAccount<T>[] | null;
}
