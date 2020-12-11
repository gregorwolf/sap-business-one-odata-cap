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
export declare class ReportFilter extends EntityV4 implements ReportFilterType {
    /**
     * Technical entity name for ReportFilter.
     */
    static _entityName: string;
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
    static builder(): EntityBuilderType<ReportFilter, ReportFilterType>;
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
    static customField(fieldName: string): CustomFieldV4<ReportFilter>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
     * Static representation of the [[reportLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPORT_LAYOUT: EnumField<ReportFilter>;
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
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DATE: EnumField<ReportFilter>;
    /**
     * Static representation of the [[roundAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUND_AMOUNT: EnumField<ReportFilter>;
    /**
     * Static representation of the [[declarationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECLARATION_TYPE: EnumField<ReportFilter>;
    /**
     * Static representation of the [[filterType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILTER_TYPE: EnumField<ReportFilter>;
    /**
     * Static representation of the [[excludeWt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCLUDE_WT: EnumField<ReportFilter>;
    /**
     * Static representation of the [[includeCustomers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_CUSTOMERS: EnumField<ReportFilter>;
    /**
     * Static representation of the [[includeVendors]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_VENDORS: EnumField<ReportFilter>;
    /**
     * Static representation of the [[period]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD: EnumField<ReportFilter>;
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
     * Static representation of the [[documentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TYPE: EnumField<ReportFilter>;
    /**
     * Static representation of the [[firstRegisterNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_REGISTER_NUMBER: NumberField<ReportFilter>;
    /**
     * Static representation of the [[includeGlAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_GL_ACCOUNTS: EnumField<ReportFilter>;
    /**
     * Static representation of the [[appendixOorPSelection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPENDIX_OOR_P_SELECTION: EnumField<ReportFilter>;
    /**
     * Static representation of the [[openingAndClosingBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPENING_AND_CLOSING_BALANCE: EnumField<ReportFilter>;
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
     * Static representation of the [[cancellation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCELLATION: EnumField<ReportFilter>;
    /**
     * Static representation of the [[hideTaxWithoutTransaction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIDE_TAX_WITHOUT_TRANSACTION: EnumField<ReportFilter>;
    /**
     * Static representation of the [[includeSeriesFilter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_SERIES_FILTER: EnumField<ReportFilter>;
    /**
     * Static representation of the [[includeDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_DOCUMENT_TYPE: EnumField<ReportFilter>;
    /**
     * Static representation of the [[diplayCreditMemosInSeparateColumn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIPLAY_CREDIT_MEMOS_IN_SEPARATE_COLUMN: EnumField<ReportFilter>;
    /**
     * Static representation of the [[showPaymentsWithDeferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHOW_PAYMENTS_WITH_DEFERRED_TAX: EnumField<ReportFilter>;
    /**
     * Static representation of the [[quarterOrDates]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUARTER_OR_DATES: EnumField<ReportFilter>;
    /**
     * Static representation of the [[taxReportGroups]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_REPORT_GROUPS: CollectionField<ReportFilter, TaxReportGroup>;
    /**
     * Static representation of the [[taxReportBusinessPartners]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_REPORT_BUSINESS_PARTNERS: CollectionField<ReportFilter, TaxReportBusinessPartner>;
    /**
     * Static representation of the [[taxReportDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_REPORT_DOCUMENTS: CollectionField<ReportFilter, TaxReportDocument>;
    /**
     * Static representation of the [[taxReportSeriesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_REPORT_SERIES_COLLECTION: CollectionField<ReportFilter, TaxReportSeries>;
    /**
     * Static representation of the [[taxReportAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_REPORT_ACCOUNTS: CollectionField<ReportFilter, TaxReportAccount>;
    /**
     * All fields of the ReportFilter entity.
     */
    const _allFields: Array<NumberField<ReportFilter> | StringField<ReportFilter> | EnumField<ReportFilter> | DateField<ReportFilter> | CollectionField<ReportFilter, TaxReportGroup> | CollectionField<ReportFilter, TaxReportBusinessPartner> | CollectionField<ReportFilter, TaxReportDocument> | CollectionField<ReportFilter, TaxReportSeries> | CollectionField<ReportFilter, TaxReportAccount>>;
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