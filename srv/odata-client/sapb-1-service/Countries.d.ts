import { CountriesRequestBuilder } from './CountriesRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { DomesticBankAccountValidationEnum } from './DomesticBankAccountValidationEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Countries" of service "SAPB1".
 */
export declare class Countries extends EntityV4 implements CountriesType {
    /**
     * Technical entity name for Countries.
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
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Code For Reports.
     * @nullable
     */
    codeForReports?: string;
    /**
     * Address Format.
     * @nullable
     */
    addressFormat?: number;
    /**
     * Eu.
     * @nullable
     */
    eu?: BoYesNoEnum;
    /**
     * Number Of Digits For Tax Id.
     * @nullable
     */
    numberOfDigitsForTaxId?: number;
    /**
     * Bank Code Digits.
     * @nullable
     */
    bankCodeDigits?: number;
    /**
     * Bank Branch Digits.
     * @nullable
     */
    bankBranchDigits?: number;
    /**
     * Bank Account Digits.
     * @nullable
     */
    bankAccountDigits?: number;
    /**
     * Bank Control Key Digits.
     * @nullable
     */
    bankControlKeyDigits?: number;
    /**
     * Domestic Account Validation.
     * @nullable
     */
    domesticAccountValidation?: DomesticBankAccountValidationEnum;
    /**
     * Iban Validation.
     * @nullable
     */
    ibanValidation?: BoYesNoEnum;
    /**
     * Blacklisted.
     * @nullable
     */
    blacklisted?: BoYesNoEnum;
    /**
     * Uic Country Code.
     * @nullable
     */
    uicCountryCode?: string;
    /**
     * Eaeu.
     * @nullable
     */
    eaeu?: BoYesNoEnum;
    /**
     * One-to-many navigation property to the [[UserDefaultGroups]] entity.
     */
    userDefaultGroups: UserDefaultGroups[];
    /**
     * One-to-many navigation property to the [[Warehouses]] entity.
     */
    warehouses: Warehouses[];
    /**
     * One-to-many navigation property to the [[InventoryGenEntries]] entity.
     */
    inventoryGenEntries: InventoryGenEntries[];
    /**
     * One-to-many navigation property to the [[ChecksforPayment]] entity.
     */
    checksforPayment: ChecksforPayment[];
    /**
     * One-to-many navigation property to the [[PurchaseQuotations]] entity.
     */
    purchaseQuotations: PurchaseQuotations[];
    /**
     * One-to-many navigation property to the [[VendorPayments]] entity.
     */
    vendorPayments: VendorPayments[];
    /**
     * One-to-many navigation property to the [[CreditCards]] entity.
     */
    creditCards: CreditCards[];
    /**
     * One-to-many navigation property to the [[Contacts]] entity.
     */
    contacts: Contacts[];
    /**
     * One-to-many navigation property to the [[DeliveryNotes]] entity.
     */
    deliveryNotes: DeliveryNotes[];
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-many navigation property to the [[Quotations]] entity.
     */
    quotations: Quotations[];
    /**
     * One-to-many navigation property to the [[WarehouseLocations]] entity.
     */
    warehouseLocations: WarehouseLocations[];
    /**
     * One-to-many navigation property to the [[InventoryGenExits]] entity.
     */
    inventoryGenExits: InventoryGenExits[];
    /**
     * One-to-many navigation property to the [[PurchaseRequests]] entity.
     */
    purchaseRequests: PurchaseRequests[];
    /**
     * One-to-many navigation property to the [[ReturnRequest]] entity.
     */
    returnRequest: ReturnRequest[];
    /**
     * One-to-many navigation property to the [[GlAccountAdvancedRules]] entity.
     */
    glAccountAdvancedRules: GlAccountAdvancedRules[];
    /**
     * One-to-many navigation property to the [[States]] entity.
     */
    states: States[];
    /**
     * One-to-many navigation property to the [[PurchaseReturns]] entity.
     */
    purchaseReturns: PurchaseReturns[];
    /**
     * One-to-many navigation property to the [[Invoices]] entity.
     */
    invoices: Invoices[];
    /**
     * One-to-many navigation property to the [[CreditNotes]] entity.
     */
    creditNotes: CreditNotes[];
    /**
     * One-to-many navigation property to the [[BusinessPlaces]] entity.
     */
    businessPlaces: BusinessPlaces[];
    /**
     * One-to-many navigation property to the [[Orders]] entity.
     */
    orders: Orders[];
    /**
     * One-to-many navigation property to the [[Activities]] entity.
     */
    activities: Activities[];
    /**
     * One-to-many navigation property to the [[DownPayments]] entity.
     */
    downPayments: DownPayments[];
    /**
     * One-to-many navigation property to the [[Drafts]] entity.
     */
    drafts: Drafts[];
    /**
     * One-to-many navigation property to the [[WizardPaymentMethods]] entity.
     */
    wizardPaymentMethods: WizardPaymentMethods[];
    /**
     * One-to-many navigation property to the [[PaymentDrafts]] entity.
     */
    paymentDrafts: PaymentDrafts[];
    /**
     * One-to-many navigation property to the [[Returns]] entity.
     */
    returns: Returns[];
    /**
     * One-to-many navigation property to the [[CorrectionInvoiceReversal]] entity.
     */
    correctionInvoiceReversal: CorrectionInvoiceReversal[];
    /**
     * One-to-many navigation property to the [[CorrectionPurchaseInvoice]] entity.
     */
    correctionPurchaseInvoice: CorrectionPurchaseInvoice[];
    /**
     * One-to-many navigation property to the [[CorrectionPurchaseInvoiceReversal]] entity.
     */
    correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversal[];
    /**
     * One-to-many navigation property to the [[CustomerEquipmentCards]] entity.
     */
    customerEquipmentCards: CustomerEquipmentCards[];
    /**
     * One-to-many navigation property to the [[PurchaseInvoices]] entity.
     */
    purchaseInvoices: PurchaseInvoices[];
    /**
     * One-to-many navigation property to the [[PurchaseDeliveryNotes]] entity.
     */
    purchaseDeliveryNotes: PurchaseDeliveryNotes[];
    /**
     * One-to-many navigation property to the [[CorrectionInvoice]] entity.
     */
    correctionInvoice: CorrectionInvoice[];
    /**
     * One-to-many navigation property to the [[PurchaseCreditNotes]] entity.
     */
    purchaseCreditNotes: PurchaseCreditNotes[];
    /**
     * One-to-many navigation property to the [[ServiceCalls]] entity.
     */
    serviceCalls: ServiceCalls[];
    /**
     * One-to-many navigation property to the [[PurchaseDownPayments]] entity.
     */
    purchaseDownPayments: PurchaseDownPayments[];
    /**
     * One-to-many navigation property to the [[EmployeesInfo]] entity.
     */
    employeesInfo: EmployeesInfo[];
    /**
     * One-to-many navigation property to the [[Banks]] entity.
     */
    banks: Banks[];
    /**
     * One-to-many navigation property to the [[PurchaseOrders]] entity.
     */
    purchaseOrders: PurchaseOrders[];
    /**
     * One-to-many navigation property to the [[HouseBankAccounts]] entity.
     */
    houseBankAccounts: HouseBankAccounts[];
    /**
     * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
     */
    goodsReturnRequest: GoodsReturnRequest[];
    /**
     * One-to-many navigation property to the [[IncomingPayments]] entity.
     */
    incomingPayments: IncomingPayments[];
    /**
     * Returns an entity builder to construct instances of `Countries`.
     * @returns A builder that constructs instances of entity type `Countries`.
     */
    static builder(): EntityBuilderType<Countries, CountriesType>;
    /**
     * Returns a request builder to construct requests for operations on the `Countries` entity type.
     * @returns A `Countries` request builder.
     */
    static requestBuilder(): CountriesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Countries`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Countries`.
     */
    static customField(fieldName: string): CustomFieldV4<Countries>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { Warehouses, WarehousesType } from './Warehouses';
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { ChecksforPayment, ChecksforPaymentType } from './ChecksforPayment';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { CreditCards, CreditCardsType } from './CreditCards';
import { Contacts, ContactsType } from './Contacts';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Quotations, QuotationsType } from './Quotations';
import { WarehouseLocations, WarehouseLocationsType } from './WarehouseLocations';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { GlAccountAdvancedRules, GlAccountAdvancedRulesType } from './GlAccountAdvancedRules';
import { States, StatesType } from './States';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { Orders, OrdersType } from './Orders';
import { Activities, ActivitiesType } from './Activities';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { WizardPaymentMethods, WizardPaymentMethodsType } from './WizardPaymentMethods';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { Returns, ReturnsType } from './Returns';
import { CorrectionInvoiceReversal, CorrectionInvoiceReversalType } from './CorrectionInvoiceReversal';
import { CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType } from './CorrectionPurchaseInvoice';
import { CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType } from './CorrectionPurchaseInvoiceReversal';
import { CustomerEquipmentCards, CustomerEquipmentCardsType } from './CustomerEquipmentCards';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Banks, BanksType } from './Banks';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { HouseBankAccounts, HouseBankAccountsType } from './HouseBankAccounts';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
export interface CountriesType {
    code?: string | null;
    name?: string | null;
    codeForReports?: string | null;
    addressFormat?: number | null;
    eu?: BoYesNoEnum | null;
    numberOfDigitsForTaxId?: number | null;
    bankCodeDigits?: number | null;
    bankBranchDigits?: number | null;
    bankAccountDigits?: number | null;
    bankControlKeyDigits?: number | null;
    domesticAccountValidation?: DomesticBankAccountValidationEnum | null;
    ibanValidation?: BoYesNoEnum | null;
    blacklisted?: BoYesNoEnum | null;
    uicCountryCode?: string | null;
    eaeu?: BoYesNoEnum | null;
    userDefaultGroups: UserDefaultGroupsType[];
    warehouses: WarehousesType[];
    inventoryGenEntries: InventoryGenEntriesType[];
    checksforPayment: ChecksforPaymentType[];
    purchaseQuotations: PurchaseQuotationsType[];
    vendorPayments: VendorPaymentsType[];
    creditCards: CreditCardsType[];
    contacts: ContactsType[];
    deliveryNotes: DeliveryNotesType[];
    businessPartners: BusinessPartnersType[];
    quotations: QuotationsType[];
    warehouseLocations: WarehouseLocationsType[];
    inventoryGenExits: InventoryGenExitsType[];
    purchaseRequests: PurchaseRequestsType[];
    returnRequest: ReturnRequestType[];
    glAccountAdvancedRules: GlAccountAdvancedRulesType[];
    states: StatesType[];
    purchaseReturns: PurchaseReturnsType[];
    invoices: InvoicesType[];
    creditNotes: CreditNotesType[];
    businessPlaces: BusinessPlacesType[];
    orders: OrdersType[];
    activities: ActivitiesType[];
    downPayments: DownPaymentsType[];
    drafts: DraftsType[];
    wizardPaymentMethods: WizardPaymentMethodsType[];
    paymentDrafts: PaymentDraftsType[];
    returns: ReturnsType[];
    correctionInvoiceReversal: CorrectionInvoiceReversalType[];
    correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
    correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
    customerEquipmentCards: CustomerEquipmentCardsType[];
    purchaseInvoices: PurchaseInvoicesType[];
    purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
    correctionInvoice: CorrectionInvoiceType[];
    purchaseCreditNotes: PurchaseCreditNotesType[];
    serviceCalls: ServiceCallsType[];
    purchaseDownPayments: PurchaseDownPaymentsType[];
    employeesInfo: EmployeesInfoType[];
    banks: BanksType[];
    purchaseOrders: PurchaseOrdersType[];
    houseBankAccounts: HouseBankAccountsType[];
    goodsReturnRequest: GoodsReturnRequestType[];
    incomingPayments: IncomingPaymentsType[];
}
export declare namespace Countries {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<Countries>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<Countries>;
    /**
     * Static representation of the [[codeForReports]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE_FOR_REPORTS: StringField<Countries>;
    /**
     * Static representation of the [[addressFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_FORMAT: NumberField<Countries>;
    /**
     * Static representation of the [[eu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EU: EnumField<Countries>;
    /**
     * Static representation of the [[numberOfDigitsForTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OF_DIGITS_FOR_TAX_ID: NumberField<Countries>;
    /**
     * Static representation of the [[bankCodeDigits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CODE_DIGITS: NumberField<Countries>;
    /**
     * Static representation of the [[bankBranchDigits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_BRANCH_DIGITS: NumberField<Countries>;
    /**
     * Static representation of the [[bankAccountDigits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT_DIGITS: NumberField<Countries>;
    /**
     * Static representation of the [[bankControlKeyDigits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CONTROL_KEY_DIGITS: NumberField<Countries>;
    /**
     * Static representation of the [[domesticAccountValidation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOMESTIC_ACCOUNT_VALIDATION: EnumField<Countries>;
    /**
     * Static representation of the [[ibanValidation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IBAN_VALIDATION: EnumField<Countries>;
    /**
     * Static representation of the [[blacklisted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLACKLISTED: EnumField<Countries>;
    /**
     * Static representation of the [[uicCountryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UIC_COUNTRY_CODE: StringField<Countries>;
    /**
     * Static representation of the [[eaeu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EAEU: EnumField<Countries>;
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_DEFAULT_GROUPS: OneToManyLink<Countries, UserDefaultGroups>;
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSES: OneToManyLink<Countries, Warehouses>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_ENTRIES: OneToManyLink<Countries, InventoryGenEntries>;
    /**
     * Static representation of the one-to-many navigation property [[checksforPayment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHECKSFOR_PAYMENT: OneToManyLink<Countries, ChecksforPayment>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_QUOTATIONS: OneToManyLink<Countries, PurchaseQuotations>;
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_PAYMENTS: OneToManyLink<Countries, VendorPayments>;
    /**
     * Static representation of the one-to-many navigation property [[creditCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_CARDS: OneToManyLink<Countries, CreditCards>;
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACTS: OneToManyLink<Countries, Contacts>;
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_NOTES: OneToManyLink<Countries, DeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<Countries, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUOTATIONS: OneToManyLink<Countries, Quotations>;
    /**
     * Static representation of the one-to-many navigation property [[warehouseLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_LOCATIONS: OneToManyLink<Countries, WarehouseLocations>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_EXITS: OneToManyLink<Countries, InventoryGenExits>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_REQUESTS: OneToManyLink<Countries, PurchaseRequests>;
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURN_REQUEST: OneToManyLink<Countries, ReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<Countries, GlAccountAdvancedRules>;
    /**
     * Static representation of the one-to-many navigation property [[states]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATES: OneToManyLink<Countries, States>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_RETURNS: OneToManyLink<Countries, PurchaseReturns>;
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICES: OneToManyLink<Countries, Invoices>;
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_NOTES: OneToManyLink<Countries, CreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACES: OneToManyLink<Countries, BusinessPlaces>;
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERS: OneToManyLink<Countries, Orders>;
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITIES: OneToManyLink<Countries, Activities>;
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENTS: OneToManyLink<Countries, DownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFTS: OneToManyLink<Countries, Drafts>;
    /**
     * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIZARD_PAYMENT_METHODS: OneToManyLink<Countries, WizardPaymentMethods>;
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_DRAFTS: OneToManyLink<Countries, PaymentDrafts>;
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNS: OneToManyLink<Countries, Returns>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE_REVERSAL: OneToManyLink<Countries, CorrectionInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE: OneToManyLink<Countries, CorrectionPurchaseInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<Countries, CorrectionPurchaseInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<Countries, CustomerEquipmentCards>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_INVOICES: OneToManyLink<Countries, PurchaseInvoices>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DELIVERY_NOTES: OneToManyLink<Countries, PurchaseDeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE: OneToManyLink<Countries, CorrectionInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_NOTES: OneToManyLink<Countries, PurchaseCreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<Countries, ServiceCalls>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DOWN_PAYMENTS: OneToManyLink<Countries, PurchaseDownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEES_INFO: OneToManyLink<Countries, EmployeesInfo>;
    /**
     * Static representation of the one-to-many navigation property [[banks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANKS: OneToManyLink<Countries, Banks>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ORDERS: OneToManyLink<Countries, PurchaseOrders>;
    /**
     * Static representation of the one-to-many navigation property [[houseBankAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_BANK_ACCOUNTS: OneToManyLink<Countries, HouseBankAccounts>;
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_RETURN_REQUEST: OneToManyLink<Countries, GoodsReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOMING_PAYMENTS: OneToManyLink<Countries, IncomingPayments>;
    /**
     * All fields of the Countries entity.
     */
    const _allFields: Array<StringField<Countries> | NumberField<Countries> | EnumField<Countries> | OneToManyLink<Countries, UserDefaultGroups> | OneToManyLink<Countries, Warehouses> | OneToManyLink<Countries, InventoryGenEntries> | OneToManyLink<Countries, ChecksforPayment> | OneToManyLink<Countries, PurchaseQuotations> | OneToManyLink<Countries, VendorPayments> | OneToManyLink<Countries, CreditCards> | OneToManyLink<Countries, Contacts> | OneToManyLink<Countries, DeliveryNotes> | OneToManyLink<Countries, BusinessPartners> | OneToManyLink<Countries, Quotations> | OneToManyLink<Countries, WarehouseLocations> | OneToManyLink<Countries, InventoryGenExits> | OneToManyLink<Countries, PurchaseRequests> | OneToManyLink<Countries, ReturnRequest> | OneToManyLink<Countries, GlAccountAdvancedRules> | OneToManyLink<Countries, States> | OneToManyLink<Countries, PurchaseReturns> | OneToManyLink<Countries, Invoices> | OneToManyLink<Countries, CreditNotes> | OneToManyLink<Countries, BusinessPlaces> | OneToManyLink<Countries, Orders> | OneToManyLink<Countries, Activities> | OneToManyLink<Countries, DownPayments> | OneToManyLink<Countries, Drafts> | OneToManyLink<Countries, WizardPaymentMethods> | OneToManyLink<Countries, PaymentDrafts> | OneToManyLink<Countries, Returns> | OneToManyLink<Countries, CorrectionInvoiceReversal> | OneToManyLink<Countries, CorrectionPurchaseInvoice> | OneToManyLink<Countries, CorrectionPurchaseInvoiceReversal> | OneToManyLink<Countries, CustomerEquipmentCards> | OneToManyLink<Countries, PurchaseInvoices> | OneToManyLink<Countries, PurchaseDeliveryNotes> | OneToManyLink<Countries, CorrectionInvoice> | OneToManyLink<Countries, PurchaseCreditNotes> | OneToManyLink<Countries, ServiceCalls> | OneToManyLink<Countries, PurchaseDownPayments> | OneToManyLink<Countries, EmployeesInfo> | OneToManyLink<Countries, Banks> | OneToManyLink<Countries, PurchaseOrders> | OneToManyLink<Countries, HouseBankAccounts> | OneToManyLink<Countries, GoodsReturnRequest> | OneToManyLink<Countries, IncomingPayments>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Countries>;
    /**
     * All key fields of the Countries entity.
     */
    const _keyFields: Array<Field<Countries>>;
    /**
     * Mapping of all key field names to the respective static field property Countries.
     */
    const _keys: {
        [keys: string]: Field<Countries>;
    };
}
//# sourceMappingURL=Countries.d.ts.map