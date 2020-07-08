import { BlanketAgreementsRequestBuilder } from './BlanketAgreementsRequestBuilder';
import { Moment } from 'moment';
import { BlanketAgreementsItemsLine } from './BlanketAgreementsItemsLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "BlanketAgreements" of service "SAPB1".
 */
export declare class BlanketAgreements extends Entity implements BlanketAgreementsType {
    /**
     * Technical entity name for BlanketAgreements.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BlanketAgreements.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Agreement No.
     * @nullable
     */
    agreementNo?: number;
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
     * Contact Person Code.
     * @nullable
     */
    contactPersonCode?: number;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Terminate Date.
     * @nullable
     */
    terminateDate?: Moment;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Owner.
     * @nullable
     */
    owner?: number;
    /**
     * Remind Time.
     * @nullable
     */
    remindTime?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * Settlement Probability.
     * @nullable
     */
    settlementProbability?: number;
    /**
     * Payment Terms.
     * @nullable
     */
    paymentTerms?: number;
    /**
     * Price List.
     * @nullable
     */
    priceList?: number;
    /**
     * Signing Date.
     * @nullable
     */
    signingDate?: Moment;
    /**
     * Amendment To.
     * @nullable
     */
    amendmentTo?: number;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Doc Num.
     * @nullable
     */
    docNum?: number;
    /**
     * Period Indicator.
     * @nullable
     */
    periodIndicator?: string;
    /**
     * Payment Method.
     * @nullable
     */
    paymentMethod?: string;
    /**
     * Exchange Rate.
     * @nullable
     */
    exchangeRate?: number;
    /**
     * Shipping Type.
     * @nullable
     */
    shippingType?: number;
    /**
     * Num At Card.
     * @nullable
     */
    numAtCard?: string;
    /**
     * Project.
     * @nullable
     */
    project?: string;
    /**
     * Bp Currency.
     * @nullable
     */
    bpCurrency?: string;
    /**
     * Blanket Agreements Items Lines.
     * @nullable
     */
    blanketAgreementsItemsLines?: BlanketAgreementsItemsLine[];
    /**
     * One-to-many navigation property to the [[VendorPayments]] entity.
     */
    vendorPayments: VendorPayments[];
    /**
     * One-to-many navigation property to the [[JournalEntries]] entity.
     */
    journalEntries: JournalEntries[];
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[EmployeesInfo]] entity.
     */
    employeeInfo: EmployeesInfo;
    /**
     * One-to-one navigation property to the [[Attachments2]] entity.
     */
    attachments2: Attachments2;
    /**
     * One-to-one navigation property to the [[PaymentTermsTypes]] entity.
     */
    paymentTermsType: PaymentTermsTypes;
    /**
     * One-to-one navigation property to the [[PriceLists]] entity.
     */
    priceList2: PriceLists;
    /**
     * One-to-one navigation property to the [[WizardPaymentMethods]] entity.
     */
    wizardPaymentMethod: WizardPaymentMethods;
    /**
     * One-to-one navigation property to the [[ShippingTypes]] entity.
     */
    shippingType2: ShippingTypes;
    /**
     * One-to-one navigation property to the [[Projects]] entity.
     */
    project2: Projects;
    /**
     * One-to-one navigation property to the [[Currencies]] entity.
     */
    currency: Currencies;
    /**
     * One-to-many navigation property to the [[PaymentDrafts]] entity.
     */
    paymentDrafts: PaymentDrafts[];
    /**
     * One-to-many navigation property to the [[IncomingPayments]] entity.
     */
    incomingPayments: IncomingPayments[];
    /**
     * Returns an entity builder to construct instances `BlanketAgreements`.
     * @returns A builder that constructs instances of entity type `BlanketAgreements`.
     */
    static builder(): EntityBuilderType<BlanketAgreements, BlanketAgreementsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BlanketAgreements` entity type.
     * @returns A `BlanketAgreements` request builder.
     */
    static requestBuilder(): BlanketAgreementsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BlanketAgreements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BlanketAgreements`.
     */
    static customField(fieldName: string): CustomField<BlanketAgreements>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Attachments2, Attachments2Type } from './Attachments2';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
import { PriceLists, PriceListsType } from './PriceLists';
import { WizardPaymentMethods, WizardPaymentMethodsType } from './WizardPaymentMethods';
import { ShippingTypes, ShippingTypesType } from './ShippingTypes';
import { Projects, ProjectsType } from './Projects';
import { Currencies, CurrenciesType } from './Currencies';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
export interface BlanketAgreementsType {
    agreementNo?: number;
    bpCode?: string;
    bpName?: string;
    contactPersonCode?: number;
    startDate?: Moment;
    endDate?: Moment;
    terminateDate?: Moment;
    description?: string;
    owner?: number;
    remindTime?: number;
    remarks?: string;
    attachmentEntry?: number;
    settlementProbability?: number;
    paymentTerms?: number;
    priceList?: number;
    signingDate?: Moment;
    amendmentTo?: number;
    series?: number;
    docNum?: number;
    periodIndicator?: string;
    paymentMethod?: string;
    exchangeRate?: number;
    shippingType?: number;
    numAtCard?: string;
    project?: string;
    bpCurrency?: string;
    blanketAgreementsItemsLines?: BlanketAgreementsItemsLine[];
    vendorPayments: VendorPaymentsType[];
    journalEntries: JournalEntriesType[];
    businessPartners: BusinessPartnersType[];
    businessPartner: BusinessPartnersType;
    employeeInfo: EmployeesInfoType;
    attachments2: Attachments2Type;
    paymentTermsType: PaymentTermsTypesType;
    priceList2: PriceListsType;
    wizardPaymentMethod: WizardPaymentMethodsType;
    shippingType2: ShippingTypesType;
    project2: ProjectsType;
    currency: CurrenciesType;
    paymentDrafts: PaymentDraftsType[];
    incomingPayments: IncomingPaymentsType[];
}
export interface BlanketAgreementsTypeForceMandatory {
    agreementNo: number;
    bpCode: string;
    bpName: string;
    contactPersonCode: number;
    startDate: Moment;
    endDate: Moment;
    terminateDate: Moment;
    description: string;
    owner: number;
    remindTime: number;
    remarks: string;
    attachmentEntry: number;
    settlementProbability: number;
    paymentTerms: number;
    priceList: number;
    signingDate: Moment;
    amendmentTo: number;
    series: number;
    docNum: number;
    periodIndicator: string;
    paymentMethod: string;
    exchangeRate: number;
    shippingType: number;
    numAtCard: string;
    project: string;
    bpCurrency: string;
    blanketAgreementsItemsLines: BlanketAgreementsItemsLine[];
    vendorPayments: VendorPaymentsType[];
    journalEntries: JournalEntriesType[];
    businessPartners: BusinessPartnersType[];
    businessPartner: BusinessPartnersType;
    employeeInfo: EmployeesInfoType;
    attachments2: Attachments2Type;
    paymentTermsType: PaymentTermsTypesType;
    priceList2: PriceListsType;
    wizardPaymentMethod: WizardPaymentMethodsType;
    shippingType2: ShippingTypesType;
    project2: ProjectsType;
    currency: CurrenciesType;
    paymentDrafts: PaymentDraftsType[];
    incomingPayments: IncomingPaymentsType[];
}
export declare namespace BlanketAgreements {
    /**
     * Static representation of the [[agreementNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGREEMENT_NO: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CODE: StringField<BlanketAgreements>;
    /**
     * Static representation of the [[bpName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_NAME: StringField<BlanketAgreements>;
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_CODE: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<BlanketAgreements>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<BlanketAgreements>;
    /**
     * Static representation of the [[terminateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERMINATE_DATE: DateField<BlanketAgreements>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<BlanketAgreements>;
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[remindTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMIND_TIME: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<BlanketAgreements>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[settlementProbability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLEMENT_PROBABILITY: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[priceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[signingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIGNING_DATE: DateField<BlanketAgreements>;
    /**
     * Static representation of the [[amendmentTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AMENDMENT_TO: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_INDICATOR: StringField<BlanketAgreements>;
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_METHOD: StringField<BlanketAgreements>;
    /**
     * Static representation of the [[exchangeRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCHANGE_RATE: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[shippingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPING_TYPE: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUM_AT_CARD: StringField<BlanketAgreements>;
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT: StringField<BlanketAgreements>;
    /**
     * Static representation of the [[bpCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CURRENCY: StringField<BlanketAgreements>;
    /**
     * Static representation of the [[blanketAgreementsItemsLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENTS_ITEMS_LINES: CollectionField<BlanketAgreements>;
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_PAYMENTS: OneToManyLink<BlanketAgreements, VendorPayments>;
    /**
     * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRIES: OneToManyLink<BlanketAgreements, JournalEntries>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<BlanketAgreements, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<BlanketAgreements, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_INFO: OneToOneLink<BlanketAgreements, EmployeesInfo>;
    /**
     * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENTS_2: OneToOneLink<BlanketAgreements, Attachments2>;
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS_TYPE: OneToOneLink<BlanketAgreements, PaymentTermsTypes>;
    /**
     * Static representation of the one-to-one navigation property [[priceList2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST_2: OneToOneLink<BlanketAgreements, PriceLists>;
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIZARD_PAYMENT_METHOD: OneToOneLink<BlanketAgreements, WizardPaymentMethods>;
    /**
     * Static representation of the one-to-one navigation property [[shippingType2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPING_TYPE_2: OneToOneLink<BlanketAgreements, ShippingTypes>;
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_2: OneToOneLink<BlanketAgreements, Projects>;
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: OneToOneLink<BlanketAgreements, Currencies>;
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_DRAFTS: OneToManyLink<BlanketAgreements, PaymentDrafts>;
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOMING_PAYMENTS: OneToManyLink<BlanketAgreements, IncomingPayments>;
    /**
     * All fields of the BlanketAgreements entity.
     */
    const _allFields: Array<NumberField<BlanketAgreements> | StringField<BlanketAgreements> | DateField<BlanketAgreements> | CollectionField<BlanketAgreements> | OneToManyLink<BlanketAgreements, VendorPayments> | OneToManyLink<BlanketAgreements, JournalEntries> | OneToManyLink<BlanketAgreements, BusinessPartners> | OneToOneLink<BlanketAgreements, BusinessPartners> | OneToOneLink<BlanketAgreements, EmployeesInfo> | OneToOneLink<BlanketAgreements, Attachments2> | OneToOneLink<BlanketAgreements, PaymentTermsTypes> | OneToOneLink<BlanketAgreements, PriceLists> | OneToOneLink<BlanketAgreements, WizardPaymentMethods> | OneToOneLink<BlanketAgreements, ShippingTypes> | OneToOneLink<BlanketAgreements, Projects> | OneToOneLink<BlanketAgreements, Currencies> | OneToManyLink<BlanketAgreements, PaymentDrafts> | OneToManyLink<BlanketAgreements, IncomingPayments>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BlanketAgreements>;
    /**
     * All key fields of the BlanketAgreements entity.
     */
    const _keyFields: Array<Field<BlanketAgreements>>;
    /**
     * Mapping of all key field names to the respective static field property BlanketAgreements.
     */
    const _keys: {
        [keys: string]: Field<BlanketAgreements>;
    };
}
//# sourceMappingURL=BlanketAgreements.d.ts.map