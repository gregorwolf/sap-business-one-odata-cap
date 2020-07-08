/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReportFilterRequestBuilder } from './ReportFilterRequestBuilder';
import { Moment } from 'moment';
import { TaxReportGroup, TaxReportGroupField } from './TaxReportGroup';
import { TaxReportBusinessPartner, TaxReportBusinessPartnerField } from './TaxReportBusinessPartner';
import { TaxReportDocument, TaxReportDocumentField } from './TaxReportDocument';
import { TaxReportSeries, TaxReportSeriesField } from './TaxReportSeries';
import { TaxReportAccount, TaxReportAccountField } from './TaxReportAccount';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ReportFilter" of service "SAPB1".
 */
export class ReportFilter extends Entity implements ReportFilterType {
  /**
   * Technical entity name for ReportFilter.
   */
  static _entityName = 'ReportFilter';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ReportFilter.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * First Register Number.
   * @nullable
   */
  firstRegisterNumber?: number;
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
   * Returns an entity builder to construct instances `ReportFilter`.
   * @returns A builder that constructs instances of entity type `ReportFilter`.
   */
  static builder(): EntityBuilderType<ReportFilter, ReportFilterTypeForceMandatory> {
    return Entity.entityBuilder(ReportFilter);
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
  static customField(fieldName: string): CustomField<ReportFilter> {
    return Entity.customFieldSelector(fieldName, ReportFilter);
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
  code?: number;
  name?: string;
  firstPrintedNumber?: number;
  fromDate?: Moment;
  toDate?: Moment;
  quarter?: number;
  year?: number;
  firstRegisterNumber?: number;
  fromSeries?: number;
  toSeries?: number;
  taxReportGroups?: TaxReportGroup[];
  taxReportBusinessPartners?: TaxReportBusinessPartner[];
  taxReportDocuments?: TaxReportDocument[];
  taxReportSeriesCollection?: TaxReportSeries[];
  taxReportAccounts?: TaxReportAccount[];
}

export interface ReportFilterTypeForceMandatory {
  code: number;
  name: string;
  firstPrintedNumber: number;
  fromDate: Moment;
  toDate: Moment;
  quarter: number;
  year: number;
  firstRegisterNumber: number;
  fromSeries: number;
  toSeries: number;
  taxReportGroups: TaxReportGroup[];
  taxReportBusinessPartners: TaxReportBusinessPartner[];
  taxReportDocuments: TaxReportDocument[];
  taxReportSeriesCollection: TaxReportSeries[];
  taxReportAccounts: TaxReportAccount[];
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
   * Static representation of the [[firstRegisterNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_REGISTER_NUMBER: NumberField<ReportFilter> = new NumberField('FirstRegisterNumber', ReportFilter, 'Edm.Int32');
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
   * Static representation of the [[taxReportGroups]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_REPORT_GROUPS: CollectionField<ReportFilter> = new CollectionField('TaxReportGroups', ReportFilter, new TaxReportGroupField('', ReportFilter));
  /**
   * Static representation of the [[taxReportBusinessPartners]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_REPORT_BUSINESS_PARTNERS: CollectionField<ReportFilter> = new CollectionField('TaxReportBusinessPartners', ReportFilter, new TaxReportBusinessPartnerField('', ReportFilter));
  /**
   * Static representation of the [[taxReportDocuments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_REPORT_DOCUMENTS: CollectionField<ReportFilter> = new CollectionField('TaxReportDocuments', ReportFilter, new TaxReportDocumentField('', ReportFilter));
  /**
   * Static representation of the [[taxReportSeriesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_REPORT_SERIES_COLLECTION: CollectionField<ReportFilter> = new CollectionField('TaxReportSeriesCollection', ReportFilter, new TaxReportSeriesField('', ReportFilter));
  /**
   * Static representation of the [[taxReportAccounts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_REPORT_ACCOUNTS: CollectionField<ReportFilter> = new CollectionField('TaxReportAccounts', ReportFilter, new TaxReportAccountField('', ReportFilter));
  /**
   * All fields of the ReportFilter entity.
   */
  export const _allFields: Array<NumberField<ReportFilter> | StringField<ReportFilter> | DateField<ReportFilter> | CollectionField<ReportFilter>> = [
    ReportFilter.CODE,
    ReportFilter.NAME,
    ReportFilter.FIRST_PRINTED_NUMBER,
    ReportFilter.FROM_DATE,
    ReportFilter.TO_DATE,
    ReportFilter.QUARTER,
    ReportFilter.YEAR,
    ReportFilter.FIRST_REGISTER_NUMBER,
    ReportFilter.FROM_SERIES,
    ReportFilter.TO_SERIES,
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
