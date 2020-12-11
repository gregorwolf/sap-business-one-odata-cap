import { BlanketAgreementsRequestBuilder } from './BlanketAgreementsRequestBuilder';
import { Moment } from 'moment';
import { BlanketAgreementsItemsLine } from './BlanketAgreementsItemsLine';
import { BlanketAgreementTypeEnum } from './BlanketAgreementTypeEnum';
import { BlanketAgreementStatusEnum } from './BlanketAgreementStatusEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRemindUnits } from './BoRemindUnits';
import { BlanketAgreementMethodEnum } from './BlanketAgreementMethodEnum';
import { PriceModeEnum } from './PriceModeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BlanketAgreements" of service "SAPB1".
 */
export declare class BlanketAgreements extends EntityV4 implements BlanketAgreementsType {
    /**
     * Technical entity name for BlanketAgreements.
     */
    static _entityName: string;
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
     * Agreement Type.
     * @nullable
     */
    agreementType?: BlanketAgreementTypeEnum;
    /**
     * Status.
     * @nullable
     */
    status?: BlanketAgreementStatusEnum;
    /**
     * Owner.
     * @nullable
     */
    owner?: number;
    /**
     * Ignore Prices In Agreement.
     * @nullable
     */
    ignorePricesInAgreement?: BoYesNoEnum;
    /**
     * Renewal.
     * @nullable
     */
    renewal?: BoYesNoEnum;
    /**
     * Remind Unit.
     * @nullable
     */
    remindUnit?: BoRemindUnits;
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
     * Agreement Method.
     * @nullable
     */
    agreementMethod?: BlanketAgreementMethodEnum;
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
     * Hand Written.
     * @nullable
     */
    handWritten?: BoYesNoEnum;
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
     * Price Mode.
     * @nullable
     */
    priceMode?: PriceModeEnum;
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
     * Returns an entity builder to construct instances of `BlanketAgreements`.
     * @returns A builder that constructs instances of entity type `BlanketAgreements`.
     */
    static builder(): EntityBuilderType<BlanketAgreements, BlanketAgreementsType>;
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
    static customField(fieldName: string): CustomFieldV4<BlanketAgreements>;
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
    agreementNo?: number | null;
    bpCode?: string | null;
    bpName?: string | null;
    contactPersonCode?: number | null;
    startDate?: Moment | null;
    endDate?: Moment | null;
    terminateDate?: Moment | null;
    description?: string | null;
    agreementType?: BlanketAgreementTypeEnum | null;
    status?: BlanketAgreementStatusEnum | null;
    owner?: number | null;
    ignorePricesInAgreement?: BoYesNoEnum | null;
    renewal?: BoYesNoEnum | null;
    remindUnit?: BoRemindUnits | null;
    remindTime?: number | null;
    remarks?: string | null;
    attachmentEntry?: number | null;
    settlementProbability?: number | null;
    agreementMethod?: BlanketAgreementMethodEnum | null;
    paymentTerms?: number | null;
    priceList?: number | null;
    signingDate?: Moment | null;
    amendmentTo?: number | null;
    series?: number | null;
    docNum?: number | null;
    handWritten?: BoYesNoEnum | null;
    periodIndicator?: string | null;
    paymentMethod?: string | null;
    exchangeRate?: number | null;
    shippingType?: number | null;
    numAtCard?: string | null;
    project?: string | null;
    priceMode?: PriceModeEnum | null;
    bpCurrency?: string | null;
    blanketAgreementsItemsLines?: BlanketAgreementsItemsLine[] | null;
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
     * Static representation of the [[agreementType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGREEMENT_TYPE: EnumField<BlanketAgreements>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: EnumField<BlanketAgreements>;
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER: NumberField<BlanketAgreements>;
    /**
     * Static representation of the [[ignorePricesInAgreement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IGNORE_PRICES_IN_AGREEMENT: EnumField<BlanketAgreements>;
    /**
     * Static representation of the [[renewal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RENEWAL: EnumField<BlanketAgreements>;
    /**
     * Static representation of the [[remindUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMIND_UNIT: EnumField<BlanketAgreements>;
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
     * Static representation of the [[agreementMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGREEMENT_METHOD: EnumField<BlanketAgreements>;
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
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAND_WRITTEN: EnumField<BlanketAgreements>;
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
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_MODE: EnumField<BlanketAgreements>;
    /**
     * Static representation of the [[bpCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CURRENCY: StringField<BlanketAgreements>;
    /**
     * Static representation of the [[blanketAgreementsItemsLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENTS_ITEMS_LINES: CollectionField<BlanketAgreements, BlanketAgreementsItemsLine>;
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
    const _allFields: Array<NumberField<BlanketAgreements> | StringField<BlanketAgreements> | DateField<BlanketAgreements> | EnumField<BlanketAgreements> | CollectionField<BlanketAgreements, BlanketAgreementsItemsLine> | OneToManyLink<BlanketAgreements, VendorPayments> | OneToManyLink<BlanketAgreements, JournalEntries> | OneToManyLink<BlanketAgreements, BusinessPartners> | OneToOneLink<BlanketAgreements, BusinessPartners> | OneToOneLink<BlanketAgreements, EmployeesInfo> | OneToOneLink<BlanketAgreements, Attachments2> | OneToOneLink<BlanketAgreements, PaymentTermsTypes> | OneToOneLink<BlanketAgreements, PriceLists> | OneToOneLink<BlanketAgreements, WizardPaymentMethods> | OneToOneLink<BlanketAgreements, ShippingTypes> | OneToOneLink<BlanketAgreements, Projects> | OneToOneLink<BlanketAgreements, Currencies> | OneToManyLink<BlanketAgreements, PaymentDrafts> | OneToManyLink<BlanketAgreements, IncomingPayments>>;
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