import { ReportFilterRequestBuilder } from './ReportFilterRequestBuilder';
import { Moment } from 'moment';
import { TaxReportGroup } from './TaxReportGroup';
import { TaxReportBusinessPartner } from './TaxReportBusinessPartner';
import { TaxReportDocument } from './TaxReportDocument';
import { TaxReportSeries } from './TaxReportSeries';
import { TaxReportAccount } from './TaxReportAccount';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ReportFilter" of service "SAPB1".
 */
export declare class ReportFilter extends Entity implements ReportFilterType {
    /**
     * Technical entity name for ReportFilter.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ReportFilter.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    static builder(): EntityBuilderType<ReportFilter, ReportFilterTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ReportFilter` entity type.
     * @returns A `ReportFilter` request builder.
     */
    static requestBuilder(): ReportFilterRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ReportFilter`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ReportFilter`.
     */
    static customField(fieldName: string): CustomField<ReportFilter>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace ReportFilter {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<ReportFilter>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ReportFilter>;
    /**
     * Static representation of the [[firstPrintedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_PRINTED_NUMBER: NumberField<ReportFilter>;
    /**
     * Static representation of the [[fromDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROM_DATE: DateField<ReportFilter>;
    /**
     * Static representation of the [[toDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_DATE: DateField<ReportFilter>;
    /**
     * Static representation of the [[quarter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUARTER: NumberField<ReportFilter>;
    /**
     * Static representation of the [[year]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const YEAR: NumberField<ReportFilter>;
    /**
     * Static representation of the [[firstRegisterNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_REGISTER_NUMBER: NumberField<ReportFilter>;
    /**
     * Static representation of the [[fromSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROM_SERIES: NumberField<ReportFilter>;
    /**
     * Static representation of the [[toSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SERIES: NumberField<ReportFilter>;
    /**
     * Static representation of the [[taxReportGroups]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_REPORT_GROUPS: CollectionField<ReportFilter>;
    /**
     * Static representation of the [[taxReportBusinessPartners]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_REPORT_BUSINESS_PARTNERS: CollectionField<ReportFilter>;
    /**
     * Static representation of the [[taxReportDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_REPORT_DOCUMENTS: CollectionField<ReportFilter>;
    /**
     * Static representation of the [[taxReportSeriesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_REPORT_SERIES_COLLECTION: CollectionField<ReportFilter>;
    /**
     * Static representation of the [[taxReportAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_REPORT_ACCOUNTS: CollectionField<ReportFilter>;
    /**
     * All fields of the ReportFilter entity.
     */
    const _allFields: Array<NumberField<ReportFilter> | StringField<ReportFilter> | DateField<ReportFilter> | CollectionField<ReportFilter>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ReportFilter>;
    /**
     * All key fields of the ReportFilter entity.
     */
    const _keyFields: Array<Field<ReportFilter>>;
    /**
     * Mapping of all key field names to the respective static field property ReportFilter.
     */
    const _keys: {
        [keys: string]: Field<ReportFilter>;
    };
}
//# sourceMappingURL=ReportFilter.d.ts.map