import { WizardPaymentMethodsRequestBuilder } from './WizardPaymentMethodsRequestBuilder';
import { Moment } from 'moment';
import { CurrencyRestriction } from './CurrencyRestriction';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "WizardPaymentMethods" of service "SAPB1".
 */
export declare class WizardPaymentMethods extends Entity implements WizardPaymentMethodsType {
    /**
     * Technical entity name for WizardPaymentMethods.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WizardPaymentMethods.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Payment Method Code.
     * @nullable
     */
    paymentMethodCode?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Minimum Amount.
     * @nullable
     */
    minimumAmount?: number;
    /**
     * Maximum Amount.
     * @nullable
     */
    maximumAmount?: number;
    /**
     * Default Bank.
     * @nullable
     */
    defaultBank?: string;
    /**
     * User Signature.
     * @nullable
     */
    userSignature?: number;
    /**
     * Creation Date.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Bank Country.
     * @nullable
     */
    bankCountry?: string;
    /**
     * Default Account.
     * @nullable
     */
    defaultAccount?: string;
    /**
     * Gl Account.
     * @nullable
     */
    glAccount?: string;
    /**
     * Branch.
     * @nullable
     */
    branch?: string;
    /**
     * Key Code.
     * @nullable
     */
    keyCode?: string;
    /**
     * Transaction Type.
     * @nullable
     */
    transactionType?: string;
    /**
     * Format.
     * @nullable
     */
    format?: string;
    /**
     * Deposit Norm.
     * @nullable
     */
    depositNorm?: string;
    /**
     * Payment Terms Code.
     * @nullable
     */
    paymentTermsCode?: number;
    /**
     * Bank Account Key.
     * @nullable
     */
    bankAccountKey?: number;
    /**
     * Doc Type.
     * @nullable
     */
    docType?: string;
    /**
     * Accepted.
     * @nullable
     */
    accepted?: string;
    /**
     * Portfolio Id.
     * @nullable
     */
    portfolioId?: string;
    /**
     * Cur Code.
     * @nullable
     */
    curCode?: string;
    /**
     * Instruction 1.
     * @nullable
     */
    instruction1?: string;
    /**
     * Instruction 2.
     * @nullable
     */
    instruction2?: string;
    /**
     * Payment Place.
     * @nullable
     */
    paymentPlace?: string;
    /**
     * Barcode Dll.
     * @nullable
     */
    barcodeDll?: string;
    /**
     * Bank Charge Rate.
     * @nullable
     */
    bankChargeRate?: number;
    /**
     * Report Code.
     * @nullable
     */
    reportCode?: string;
    /**
     * Cancel Instruction.
     * @nullable
     */
    cancelInstruction?: string;
    /**
     * Occurence Code.
     * @nullable
     */
    occurenceCode?: string;
    /**
     * Movement Code.
     * @nullable
     */
    movementCode?: string;
    /**
     * Direct Debit.
     * @nullable
     */
    directDebit?: string;
    /**
     * Currency Restrictions.
     * @nullable
     */
    currencyRestrictions?: CurrencyRestriction[];
    /**
     * One-to-many navigation property to the [[InventoryGenEntries]] entity.
     */
    inventoryGenEntries: InventoryGenEntries[];
    /**
     * One-to-many navigation property to the [[PurchaseQuotations]] entity.
     */
    purchaseQuotations: PurchaseQuotations[];
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
     * One-to-many navigation property to the [[BlanketAgreements]] entity.
     */
    blanketAgreements: BlanketAgreements[];
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
     * One-to-many navigation property to the [[Orders]] entity.
     */
    orders: Orders[];
    /**
     * One-to-many navigation property to the [[DownPayments]] entity.
     */
    downPayments: DownPayments[];
    /**
     * One-to-many navigation property to the [[Drafts]] entity.
     */
    drafts: Drafts[];
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country: Countries;
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[PaymentTermsTypes]] entity.
     */
    paymentTermsType: PaymentTermsTypes;
    /**
     * One-to-one navigation property to the [[HouseBankAccounts]] entity.
     */
    houseBankAccount: HouseBankAccounts;
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
     * One-to-many navigation property to the [[PurchaseDownPayments]] entity.
     */
    purchaseDownPayments: PurchaseDownPayments[];
    /**
     * One-to-many navigation property to the [[PurchaseOrders]] entity.
     */
    purchaseOrders: PurchaseOrders[];
    /**
     * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
     */
    goodsReturnRequest: GoodsReturnRequest[];
    /**
     * Returns an entity builder to construct instances `WizardPaymentMethods`.
     * @returns A builder that constructs instances of entity type `WizardPaymentMethods`.
     */
    static builder(): EntityBuilderType<WizardPaymentMethods, WizardPaymentMethodsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WizardPaymentMethods` entity type.
     * @returns A `WizardPaymentMethods` request builder.
     */
    static requestBuilder(): WizardPaymentMethodsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WizardPaymentMethods`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WizardPaymentMethods`.
     */
    static customField(fieldName: string): CustomField<WizardPaymentMethods>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Quotations, QuotationsType } from './Quotations';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { Orders, OrdersType } from './Orders';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { Users, UsersType } from './Users';
import { Countries, CountriesType } from './Countries';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
import { HouseBankAccounts, HouseBankAccountsType } from './HouseBankAccounts';
import { Returns, ReturnsType } from './Returns';
import { CorrectionInvoiceReversal, CorrectionInvoiceReversalType } from './CorrectionInvoiceReversal';
import { CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType } from './CorrectionPurchaseInvoice';
import { CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType } from './CorrectionPurchaseInvoiceReversal';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';
export interface WizardPaymentMethodsType {
    paymentMethodCode?: string;
    description?: string;
    minimumAmount?: number;
    maximumAmount?: number;
    defaultBank?: string;
    userSignature?: number;
    creationDate?: Moment;
    bankCountry?: string;
    defaultAccount?: string;
    glAccount?: string;
    branch?: string;
    keyCode?: string;
    transactionType?: string;
    format?: string;
    depositNorm?: string;
    paymentTermsCode?: number;
    bankAccountKey?: number;
    docType?: string;
    accepted?: string;
    portfolioId?: string;
    curCode?: string;
    instruction1?: string;
    instruction2?: string;
    paymentPlace?: string;
    barcodeDll?: string;
    bankChargeRate?: number;
    reportCode?: string;
    cancelInstruction?: string;
    occurenceCode?: string;
    movementCode?: string;
    directDebit?: string;
    currencyRestrictions?: CurrencyRestriction[];
    inventoryGenEntries: InventoryGenEntriesType[];
    purchaseQuotations: PurchaseQuotationsType[];
    deliveryNotes: DeliveryNotesType[];
    businessPartners: BusinessPartnersType[];
    quotations: QuotationsType[];
    inventoryGenExits: InventoryGenExitsType[];
    purchaseRequests: PurchaseRequestsType[];
    returnRequest: ReturnRequestType[];
    blanketAgreements: BlanketAgreementsType[];
    purchaseReturns: PurchaseReturnsType[];
    invoices: InvoicesType[];
    creditNotes: CreditNotesType[];
    orders: OrdersType[];
    downPayments: DownPaymentsType[];
    drafts: DraftsType[];
    user: UsersType;
    country: CountriesType;
    chartOfAccount: ChartOfAccountsType;
    paymentTermsType: PaymentTermsTypesType;
    houseBankAccount: HouseBankAccountsType;
    returns: ReturnsType[];
    correctionInvoiceReversal: CorrectionInvoiceReversalType[];
    correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
    correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
    purchaseInvoices: PurchaseInvoicesType[];
    purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
    correctionInvoice: CorrectionInvoiceType[];
    purchaseCreditNotes: PurchaseCreditNotesType[];
    purchaseDownPayments: PurchaseDownPaymentsType[];
    purchaseOrders: PurchaseOrdersType[];
    goodsReturnRequest: GoodsReturnRequestType[];
}
export interface WizardPaymentMethodsTypeForceMandatory {
    paymentMethodCode: string;
    description: string;
    minimumAmount: number;
    maximumAmount: number;
    defaultBank: string;
    userSignature: number;
    creationDate: Moment;
    bankCountry: string;
    defaultAccount: string;
    glAccount: string;
    branch: string;
    keyCode: string;
    transactionType: string;
    format: string;
    depositNorm: string;
    paymentTermsCode: number;
    bankAccountKey: number;
    docType: string;
    accepted: string;
    portfolioId: string;
    curCode: string;
    instruction1: string;
    instruction2: string;
    paymentPlace: string;
    barcodeDll: string;
    bankChargeRate: number;
    reportCode: string;
    cancelInstruction: string;
    occurenceCode: string;
    movementCode: string;
    directDebit: string;
    currencyRestrictions: CurrencyRestriction[];
    inventoryGenEntries: InventoryGenEntriesType[];
    purchaseQuotations: PurchaseQuotationsType[];
    deliveryNotes: DeliveryNotesType[];
    businessPartners: BusinessPartnersType[];
    quotations: QuotationsType[];
    inventoryGenExits: InventoryGenExitsType[];
    purchaseRequests: PurchaseRequestsType[];
    returnRequest: ReturnRequestType[];
    blanketAgreements: BlanketAgreementsType[];
    purchaseReturns: PurchaseReturnsType[];
    invoices: InvoicesType[];
    creditNotes: CreditNotesType[];
    orders: OrdersType[];
    downPayments: DownPaymentsType[];
    drafts: DraftsType[];
    user: UsersType;
    country: CountriesType;
    chartOfAccount: ChartOfAccountsType;
    paymentTermsType: PaymentTermsTypesType;
    houseBankAccount: HouseBankAccountsType;
    returns: ReturnsType[];
    correctionInvoiceReversal: CorrectionInvoiceReversalType[];
    correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
    correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
    purchaseInvoices: PurchaseInvoicesType[];
    purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
    correctionInvoice: CorrectionInvoiceType[];
    purchaseCreditNotes: PurchaseCreditNotesType[];
    purchaseDownPayments: PurchaseDownPaymentsType[];
    purchaseOrders: PurchaseOrdersType[];
    goodsReturnRequest: GoodsReturnRequestType[];
}
export declare namespace WizardPaymentMethods {
    /**
     * Static representation of the [[paymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_METHOD_CODE: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[minimumAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_AMOUNT: NumberField<WizardPaymentMethods>;
    /**
     * Static representation of the [[maximumAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_AMOUNT: NumberField<WizardPaymentMethods>;
    /**
     * Static representation of the [[defaultBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_BANK: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SIGNATURE: NumberField<WizardPaymentMethods>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<WizardPaymentMethods>;
    /**
     * Static representation of the [[bankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_COUNTRY: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[defaultAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_ACCOUNT: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[glAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_ACCOUNT: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[branch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCH: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[keyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KEY_CODE: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[transactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_TYPE: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[format]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMAT: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[depositNorm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPOSIT_NORM: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[paymentTermsCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS_CODE: NumberField<WizardPaymentMethods>;
    /**
     * Static representation of the [[bankAccountKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT_KEY: NumberField<WizardPaymentMethods>;
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TYPE: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[accepted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCEPTED: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[portfolioId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PORTFOLIO_ID: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[curCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUR_CODE: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[instruction1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTRUCTION_1: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[instruction2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTRUCTION_2: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[paymentPlace]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_PLACE: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[barcodeDll]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BARCODE_DLL: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[bankChargeRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CHARGE_RATE: NumberField<WizardPaymentMethods>;
    /**
     * Static representation of the [[reportCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPORT_CODE: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[cancelInstruction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCEL_INSTRUCTION: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[occurenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OCCURENCE_CODE: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[movementCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MOVEMENT_CODE: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[directDebit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIRECT_DEBIT: StringField<WizardPaymentMethods>;
    /**
     * Static representation of the [[currencyRestrictions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_RESTRICTIONS: CollectionField<WizardPaymentMethods>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_ENTRIES: OneToManyLink<WizardPaymentMethods, InventoryGenEntries>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_QUOTATIONS: OneToManyLink<WizardPaymentMethods, PurchaseQuotations>;
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_NOTES: OneToManyLink<WizardPaymentMethods, DeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<WizardPaymentMethods, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUOTATIONS: OneToManyLink<WizardPaymentMethods, Quotations>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_EXITS: OneToManyLink<WizardPaymentMethods, InventoryGenExits>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_REQUESTS: OneToManyLink<WizardPaymentMethods, PurchaseRequests>;
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURN_REQUEST: OneToManyLink<WizardPaymentMethods, ReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENTS: OneToManyLink<WizardPaymentMethods, BlanketAgreements>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_RETURNS: OneToManyLink<WizardPaymentMethods, PurchaseReturns>;
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICES: OneToManyLink<WizardPaymentMethods, Invoices>;
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_NOTES: OneToManyLink<WizardPaymentMethods, CreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERS: OneToManyLink<WizardPaymentMethods, Orders>;
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENTS: OneToManyLink<WizardPaymentMethods, DownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFTS: OneToManyLink<WizardPaymentMethods, Drafts>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<WizardPaymentMethods, Users>;
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: OneToOneLink<WizardPaymentMethods, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<WizardPaymentMethods, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS_TYPE: OneToOneLink<WizardPaymentMethods, PaymentTermsTypes>;
    /**
     * Static representation of the one-to-one navigation property [[houseBankAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_BANK_ACCOUNT: OneToOneLink<WizardPaymentMethods, HouseBankAccounts>;
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNS: OneToManyLink<WizardPaymentMethods, Returns>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE_REVERSAL: OneToManyLink<WizardPaymentMethods, CorrectionInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE: OneToManyLink<WizardPaymentMethods, CorrectionPurchaseInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<WizardPaymentMethods, CorrectionPurchaseInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_INVOICES: OneToManyLink<WizardPaymentMethods, PurchaseInvoices>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DELIVERY_NOTES: OneToManyLink<WizardPaymentMethods, PurchaseDeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE: OneToManyLink<WizardPaymentMethods, CorrectionInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_NOTES: OneToManyLink<WizardPaymentMethods, PurchaseCreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DOWN_PAYMENTS: OneToManyLink<WizardPaymentMethods, PurchaseDownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ORDERS: OneToManyLink<WizardPaymentMethods, PurchaseOrders>;
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_RETURN_REQUEST: OneToManyLink<WizardPaymentMethods, GoodsReturnRequest>;
    /**
     * All fields of the WizardPaymentMethods entity.
     */
    const _allFields: Array<StringField<WizardPaymentMethods> | NumberField<WizardPaymentMethods> | DateField<WizardPaymentMethods> | CollectionField<WizardPaymentMethods> | OneToManyLink<WizardPaymentMethods, InventoryGenEntries> | OneToManyLink<WizardPaymentMethods, PurchaseQuotations> | OneToManyLink<WizardPaymentMethods, DeliveryNotes> | OneToManyLink<WizardPaymentMethods, BusinessPartners> | OneToManyLink<WizardPaymentMethods, Quotations> | OneToManyLink<WizardPaymentMethods, InventoryGenExits> | OneToManyLink<WizardPaymentMethods, PurchaseRequests> | OneToManyLink<WizardPaymentMethods, ReturnRequest> | OneToManyLink<WizardPaymentMethods, BlanketAgreements> | OneToManyLink<WizardPaymentMethods, PurchaseReturns> | OneToManyLink<WizardPaymentMethods, Invoices> | OneToManyLink<WizardPaymentMethods, CreditNotes> | OneToManyLink<WizardPaymentMethods, Orders> | OneToManyLink<WizardPaymentMethods, DownPayments> | OneToManyLink<WizardPaymentMethods, Drafts> | OneToOneLink<WizardPaymentMethods, Users> | OneToOneLink<WizardPaymentMethods, Countries> | OneToOneLink<WizardPaymentMethods, ChartOfAccounts> | OneToOneLink<WizardPaymentMethods, PaymentTermsTypes> | OneToOneLink<WizardPaymentMethods, HouseBankAccounts> | OneToManyLink<WizardPaymentMethods, Returns> | OneToManyLink<WizardPaymentMethods, CorrectionInvoiceReversal> | OneToManyLink<WizardPaymentMethods, CorrectionPurchaseInvoice> | OneToManyLink<WizardPaymentMethods, CorrectionPurchaseInvoiceReversal> | OneToManyLink<WizardPaymentMethods, PurchaseInvoices> | OneToManyLink<WizardPaymentMethods, PurchaseDeliveryNotes> | OneToManyLink<WizardPaymentMethods, CorrectionInvoice> | OneToManyLink<WizardPaymentMethods, PurchaseCreditNotes> | OneToManyLink<WizardPaymentMethods, PurchaseDownPayments> | OneToManyLink<WizardPaymentMethods, PurchaseOrders> | OneToManyLink<WizardPaymentMethods, GoodsReturnRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WizardPaymentMethods>;
    /**
     * All key fields of the WizardPaymentMethods entity.
     */
    const _keyFields: Array<Field<WizardPaymentMethods>>;
    /**
     * Mapping of all key field names to the respective static field property WizardPaymentMethods.
     */
    const _keys: {
        [keys: string]: Field<WizardPaymentMethods>;
    };
}
//# sourceMappingURL=WizardPaymentMethods.d.ts.map