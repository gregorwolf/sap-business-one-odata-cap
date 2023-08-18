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
import { TaxInvoiceReportLine } from './TaxInvoiceReportLine';
import type { TaxInvoiceReportApi } from './TaxInvoiceReportApi';
import { TaxInvoiceReportNtsApprovedEnum } from './TaxInvoiceReportNtsApprovedEnum';
import { TaxWebSites, TaxWebSitesType } from './TaxWebSites';

/**
 * This class represents the entity "TaxInvoiceReport" of service "SAPB1".
 */
export class TaxInvoiceReport<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxInvoiceReportType<T>
{
  /**
   * Technical entity name for TaxInvoiceReport.
   */
  static _entityName = 'TaxInvoiceReport';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the TaxInvoiceReport entity
   */
  static _keys = ['TaxInvoiceReportNumber'];
  /**
   * Nts Approval.
   * @nullable
   */
  ntsApproval?: TaxInvoiceReportNtsApprovedEnum | null;
  /**
   * E Tax Web Site.
   * @nullable
   */
  eTaxWebSite?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * E Tax No.
   * @nullable
   */
  eTaxNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nts Approval No.
   * @nullable
   */
  ntsApprovalNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Nts Approval No.
   * @nullable
   */
  originalNtsApprovalNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Invoice Report Number.
   */
  taxInvoiceReportNumber!: DeserializedType<T, 'Edm.String'>;
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Business Place.
   * @nullable
   */
  businessPlace?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Name.
   * @nullable
   */
  bpName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Amount.
   * @nullable
   */
  baseAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Tax Amount.
   * @nullable
   */
  taxAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Canceled.
   * @nullable
   */
  canceled?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report Type.
   * @nullable
   */
  reportType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Tax Invoice Report Line Collection.
   * @nullable
   */
  taxInvoiceReportLineCollection?: TaxInvoiceReportLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link TaxWebSites} entity.
   */
  taxWebSite?: TaxWebSites<T> | null;

  constructor(readonly _entityApi: TaxInvoiceReportApi<T>) {
    super(_entityApi);
  }
}

export interface TaxInvoiceReportType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ntsApproval?: TaxInvoiceReportNtsApprovedEnum | null;
  eTaxWebSite?: DeserializedType<T, 'Edm.Int32'> | null;
  eTaxNo?: DeserializedType<T, 'Edm.String'> | null;
  ntsApprovalNo?: DeserializedType<T, 'Edm.String'> | null;
  originalNtsApprovalNo?: DeserializedType<T, 'Edm.String'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  taxInvoiceReportNumber: DeserializedType<T, 'Edm.String'>;
  date?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  businessPlace?: DeserializedType<T, 'Edm.Int32'> | null;
  bpCode?: DeserializedType<T, 'Edm.String'> | null;
  bpName?: DeserializedType<T, 'Edm.String'> | null;
  baseAmount?: DeserializedType<T, 'Edm.Double'> | null;
  taxAmount?: DeserializedType<T, 'Edm.Double'> | null;
  canceled?: DeserializedType<T, 'Edm.String'> | null;
  reportType?: DeserializedType<T, 'Edm.Int32'> | null;
  taxInvoiceReportLineCollection?: TaxInvoiceReportLine<T>[] | null;
  taxWebSite?: TaxWebSitesType<T> | null;
}
