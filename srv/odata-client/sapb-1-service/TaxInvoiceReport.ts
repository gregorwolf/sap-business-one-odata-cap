/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxInvoiceReportRequestBuilder } from './TaxInvoiceReportRequestBuilder';
import { Moment } from 'moment';
import { TaxInvoiceReportLine, TaxInvoiceReportLineField } from './TaxInvoiceReportLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "TaxInvoiceReport" of service "SAPB1".
 */
export class TaxInvoiceReport extends Entity implements TaxInvoiceReportType {
  /**
   * Technical entity name for TaxInvoiceReport.
   */
  static _entityName = 'TaxInvoiceReport';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TaxInvoiceReport.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * E Tax Web Site.
   * @nullable
   */
  eTaxWebSite?: number;
  /**
   * E Tax No.
   * @nullable
   */
  eTaxNo?: string;
  /**
   * Nts Approval No.
   * @nullable
   */
  ntsApprovalNo?: string;
  /**
   * Original Nts Approval No.
   * @nullable
   */
  originalNtsApprovalNo?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Tax Invoice Report Number.
   * @nullable
   */
  taxInvoiceReportNumber?: string;
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Business Place.
   * @nullable
   */
  businessPlace?: number;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Bp Name.
   * @nullable
   */
  bpName?: string;
  /**
   * Base Amount.
   * @nullable
   */
  baseAmount?: number;
  /**
   * Tax Amount.
   * @nullable
   */
  taxAmount?: number;
  /**
   * Canceled.
   * @nullable
   */
  canceled?: string;
  /**
   * Report Type.
   * @nullable
   */
  reportType?: number;
  /**
   * Tax Invoice Report Line Collection.
   * @nullable
   */
  taxInvoiceReportLineCollection?: TaxInvoiceReportLine[];
  /**
   * One-to-one navigation property to the [[TaxWebSites]] entity.
   */
  taxWebSite!: TaxWebSites;

  /**
   * Returns an entity builder to construct instances `TaxInvoiceReport`.
   * @returns A builder that constructs instances of entity type `TaxInvoiceReport`.
   */
  static builder(): EntityBuilderType<TaxInvoiceReport, TaxInvoiceReportTypeForceMandatory> {
    return Entity.entityBuilder(TaxInvoiceReport);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TaxInvoiceReport` entity type.
   * @returns A `TaxInvoiceReport` request builder.
   */
  static requestBuilder(): TaxInvoiceReportRequestBuilder {
    return new TaxInvoiceReportRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TaxInvoiceReport`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TaxInvoiceReport`.
   */
  static customField(fieldName: string): CustomField<TaxInvoiceReport> {
    return Entity.customFieldSelector(fieldName, TaxInvoiceReport);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { TaxWebSites, TaxWebSitesType } from './TaxWebSites';

export interface TaxInvoiceReportType {
  eTaxWebSite?: number;
  eTaxNo?: string;
  ntsApprovalNo?: string;
  originalNtsApprovalNo?: string;
  remarks?: string;
  taxInvoiceReportNumber?: string;
  date?: Moment;
  businessPlace?: number;
  bpCode?: string;
  bpName?: string;
  baseAmount?: number;
  taxAmount?: number;
  canceled?: string;
  reportType?: number;
  taxInvoiceReportLineCollection?: TaxInvoiceReportLine[];
  taxWebSite: TaxWebSitesType;
}

export interface TaxInvoiceReportTypeForceMandatory {
  eTaxWebSite: number;
  eTaxNo: string;
  ntsApprovalNo: string;
  originalNtsApprovalNo: string;
  remarks: string;
  taxInvoiceReportNumber: string;
  date: Moment;
  businessPlace: number;
  bpCode: string;
  bpName: string;
  baseAmount: number;
  taxAmount: number;
  canceled: string;
  reportType: number;
  taxInvoiceReportLineCollection: TaxInvoiceReportLine[];
  taxWebSite: TaxWebSitesType;
}

export namespace TaxInvoiceReport {
  /**
   * Static representation of the [[eTaxWebSite]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_WEB_SITE: NumberField<TaxInvoiceReport> = new NumberField('ETaxWebSite', TaxInvoiceReport, 'Edm.Int32');
  /**
   * Static representation of the [[eTaxNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_NO: StringField<TaxInvoiceReport> = new StringField('ETaxNo', TaxInvoiceReport, 'Edm.String');
  /**
   * Static representation of the [[ntsApprovalNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVAL_NO: StringField<TaxInvoiceReport> = new StringField('NTSApprovalNo', TaxInvoiceReport, 'Edm.String');
  /**
   * Static representation of the [[originalNtsApprovalNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_NTS_APPROVAL_NO: StringField<TaxInvoiceReport> = new StringField('OriginalNTSApprovalNo', TaxInvoiceReport, 'Edm.String');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<TaxInvoiceReport> = new StringField('Remarks', TaxInvoiceReport, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceReportNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_REPORT_NUMBER: StringField<TaxInvoiceReport> = new StringField('TaxInvoiceReportNumber', TaxInvoiceReport, 'Edm.String');
  /**
   * Static representation of the [[date]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE: DateField<TaxInvoiceReport> = new DateField('Date', TaxInvoiceReport, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[businessPlace]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: NumberField<TaxInvoiceReport> = new NumberField('BusinessPlace', TaxInvoiceReport, 'Edm.Int32');
  /**
   * Static representation of the [[bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CODE: StringField<TaxInvoiceReport> = new StringField('BPCode', TaxInvoiceReport, 'Edm.String');
  /**
   * Static representation of the [[bpName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_NAME: StringField<TaxInvoiceReport> = new StringField('BPName', TaxInvoiceReport, 'Edm.String');
  /**
   * Static representation of the [[baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT: NumberField<TaxInvoiceReport> = new NumberField('BaseAmount', TaxInvoiceReport, 'Edm.Double');
  /**
   * Static representation of the [[taxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_AMOUNT: NumberField<TaxInvoiceReport> = new NumberField('TaxAmount', TaxInvoiceReport, 'Edm.Double');
  /**
   * Static representation of the [[canceled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELED: StringField<TaxInvoiceReport> = new StringField('Canceled', TaxInvoiceReport, 'Edm.String');
  /**
   * Static representation of the [[reportType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORT_TYPE: NumberField<TaxInvoiceReport> = new NumberField('ReportType', TaxInvoiceReport, 'Edm.Int32');
  /**
   * Static representation of the [[taxInvoiceReportLineCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_REPORT_LINE_COLLECTION: CollectionField<TaxInvoiceReport> = new CollectionField('TaxInvoiceReportLineCollection', TaxInvoiceReport, new TaxInvoiceReportLineField('', TaxInvoiceReport));
  /**
   * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_WEB_SITE: OneToOneLink<TaxInvoiceReport, TaxWebSites> = new OneToOneLink('TaxWebSite', TaxInvoiceReport, TaxWebSites);
  /**
   * All fields of the TaxInvoiceReport entity.
   */
  export const _allFields: Array<NumberField<TaxInvoiceReport> | StringField<TaxInvoiceReport> | DateField<TaxInvoiceReport> | CollectionField<TaxInvoiceReport> | OneToOneLink<TaxInvoiceReport, TaxWebSites>> = [
    TaxInvoiceReport.E_TAX_WEB_SITE,
    TaxInvoiceReport.E_TAX_NO,
    TaxInvoiceReport.NTS_APPROVAL_NO,
    TaxInvoiceReport.ORIGINAL_NTS_APPROVAL_NO,
    TaxInvoiceReport.REMARKS,
    TaxInvoiceReport.TAX_INVOICE_REPORT_NUMBER,
    TaxInvoiceReport.DATE,
    TaxInvoiceReport.BUSINESS_PLACE,
    TaxInvoiceReport.BP_CODE,
    TaxInvoiceReport.BP_NAME,
    TaxInvoiceReport.BASE_AMOUNT,
    TaxInvoiceReport.TAX_AMOUNT,
    TaxInvoiceReport.CANCELED,
    TaxInvoiceReport.REPORT_TYPE,
    TaxInvoiceReport.TAX_INVOICE_REPORT_LINE_COLLECTION,
    TaxInvoiceReport.TAX_WEB_SITE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TaxInvoiceReport> = new AllFields('*', TaxInvoiceReport);
  /**
   * All key fields of the TaxInvoiceReport entity.
   */
  export const _keyFields: Array<Field<TaxInvoiceReport>> = [TaxInvoiceReport.TAX_INVOICE_REPORT_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property TaxInvoiceReport.
   */
  export const _keys: { [keys: string]: Field<TaxInvoiceReport> } = TaxInvoiceReport._keyFields.reduce((acc: { [keys: string]: Field<TaxInvoiceReport> }, field: Field<TaxInvoiceReport>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
