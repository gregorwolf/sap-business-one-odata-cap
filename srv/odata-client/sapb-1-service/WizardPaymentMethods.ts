/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WizardPaymentMethodsRequestBuilder } from './WizardPaymentMethodsRequestBuilder';
import { Moment } from 'moment';
import { CurrencyRestriction } from './CurrencyRestriction';
import { BoPaymentTypeEnum } from './BoPaymentTypeEnum';
import { BoPaymentMeansEnum } from './BoPaymentMeansEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoDueDateEnum } from './BoDueDateEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WizardPaymentMethods" of service "SAPB1".
 */
export class WizardPaymentMethods extends EntityV4 implements WizardPaymentMethodsType {
  /**
   * Technical entity name for WizardPaymentMethods.
   */
  static _entityName = 'WizardPaymentMethods';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * Type.
   * @nullable
   */
  type?: BoPaymentTypeEnum;
  /**
   * Payment Means.
   * @nullable
   */
  paymentMeans?: BoPaymentMeansEnum;
  /**
   * Check Address.
   * @nullable
   */
  checkAddress?: BoYesNoEnum;
  /**
   * Check Bank Details.
   * @nullable
   */
  checkBankDetails?: BoYesNoEnum;
  /**
   * Collection Authorization Check.
   * @nullable
   */
  collectionAuthorizationCheck?: BoYesNoEnum;
  /**
   * Block Foreign Payment.
   * @nullable
   */
  blockForeignPayment?: BoYesNoEnum;
  /**
   * Block Foreign Bank.
   * @nullable
   */
  blockForeignBank?: BoYesNoEnum;
  /**
   * Currency Restriction.
   * @nullable
   */
  currencyRestriction?: BoYesNoEnum;
  /**
   * Post Office Bank.
   * @nullable
   */
  postOfficeBank?: BoYesNoEnum;
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
   * Agent Collection.
   * @nullable
   */
  agentCollection?: BoYesNoEnum;
  /**
   * Sendfor Acceptance.
   * @nullable
   */
  sendforAcceptance?: BoYesNoEnum;
  /**
   * Group By Date.
   * @nullable
   */
  groupByDate?: BoYesNoEnum;
  /**
   * Deposit Norm.
   * @nullable
   */
  depositNorm?: string;
  /**
   * Debit Memo.
   * @nullable
   */
  debitMemo?: BoYesNoEnum;
  /**
   * Group By Payment Reference.
   * @nullable
   */
  groupByPaymentReference?: BoYesNoEnum;
  /**
   * Group Invoicesby Pay.
   * @nullable
   */
  groupInvoicesbyPay?: BoYesNoEnum;
  /**
   * Due Date Selection.
   * @nullable
   */
  dueDateSelection?: BoDueDateEnum;
  /**
   * Payment Terms Code.
   * @nullable
   */
  paymentTermsCode?: number;
  /**
   * Postto Gl Interim Account.
   * @nullable
   */
  posttoGlInterimAccount?: BoYesNoEnum;
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
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum;
  /**
   * Group Invoices By Pay To Bank.
   * @nullable
   */
  groupInvoicesByPayToBank?: BoYesNoEnum;
  /**
   * Group Invoices By Currency.
   * @nullable
   */
  groupInvoicesByCurrency?: BoYesNoEnum;
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
  inventoryGenEntries!: InventoryGenEntries[];
  /**
   * One-to-many navigation property to the [[PurchaseQuotations]] entity.
   */
  purchaseQuotations!: PurchaseQuotations[];
  /**
   * One-to-many navigation property to the [[DeliveryNotes]] entity.
   */
  deliveryNotes!: DeliveryNotes[];
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];
  /**
   * One-to-many navigation property to the [[Quotations]] entity.
   */
  quotations!: Quotations[];
  /**
   * One-to-many navigation property to the [[InventoryGenExits]] entity.
   */
  inventoryGenExits!: InventoryGenExits[];
  /**
   * One-to-many navigation property to the [[PurchaseRequests]] entity.
   */
  purchaseRequests!: PurchaseRequests[];
  /**
   * One-to-many navigation property to the [[ReturnRequest]] entity.
   */
  returnRequest!: ReturnRequest[];
  /**
   * One-to-many navigation property to the [[BlanketAgreements]] entity.
   */
  blanketAgreements!: BlanketAgreements[];
  /**
   * One-to-many navigation property to the [[PurchaseReturns]] entity.
   */
  purchaseReturns!: PurchaseReturns[];
  /**
   * One-to-many navigation property to the [[Invoices]] entity.
   */
  invoices!: Invoices[];
  /**
   * One-to-many navigation property to the [[CreditNotes]] entity.
   */
  creditNotes!: CreditNotes[];
  /**
   * One-to-many navigation property to the [[Orders]] entity.
   */
  orders!: Orders[];
  /**
   * One-to-many navigation property to the [[DownPayments]] entity.
   */
  downPayments!: DownPayments[];
  /**
   * One-to-many navigation property to the [[Drafts]] entity.
   */
  drafts!: Drafts[];
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country!: Countries;
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[PaymentTermsTypes]] entity.
   */
  paymentTermsType!: PaymentTermsTypes;
  /**
   * One-to-one navigation property to the [[HouseBankAccounts]] entity.
   */
  houseBankAccount!: HouseBankAccounts;
  /**
   * One-to-many navigation property to the [[Returns]] entity.
   */
  returns!: Returns[];
  /**
   * One-to-many navigation property to the [[CorrectionInvoiceReversal]] entity.
   */
  correctionInvoiceReversal!: CorrectionInvoiceReversal[];
  /**
   * One-to-many navigation property to the [[CorrectionPurchaseInvoice]] entity.
   */
  correctionPurchaseInvoice!: CorrectionPurchaseInvoice[];
  /**
   * One-to-many navigation property to the [[CorrectionPurchaseInvoiceReversal]] entity.
   */
  correctionPurchaseInvoiceReversal!: CorrectionPurchaseInvoiceReversal[];
  /**
   * One-to-many navigation property to the [[PurchaseInvoices]] entity.
   */
  purchaseInvoices!: PurchaseInvoices[];
  /**
   * One-to-many navigation property to the [[PurchaseDeliveryNotes]] entity.
   */
  purchaseDeliveryNotes!: PurchaseDeliveryNotes[];
  /**
   * One-to-many navigation property to the [[CorrectionInvoice]] entity.
   */
  correctionInvoice!: CorrectionInvoice[];
  /**
   * One-to-many navigation property to the [[PurchaseCreditNotes]] entity.
   */
  purchaseCreditNotes!: PurchaseCreditNotes[];
  /**
   * One-to-many navigation property to the [[PurchaseDownPayments]] entity.
   */
  purchaseDownPayments!: PurchaseDownPayments[];
  /**
   * One-to-many navigation property to the [[PurchaseOrders]] entity.
   */
  purchaseOrders!: PurchaseOrders[];
  /**
   * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
   */
  goodsReturnRequest!: GoodsReturnRequest[];

  /**
   * Returns an entity builder to construct instances of `WizardPaymentMethods`.
   * @returns A builder that constructs instances of entity type `WizardPaymentMethods`.
   */
  static builder(): EntityBuilderType<WizardPaymentMethods, WizardPaymentMethodsType> {
    return EntityV4.entityBuilder(WizardPaymentMethods);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WizardPaymentMethods` entity type.
   * @returns A `WizardPaymentMethods` request builder.
   */
  static requestBuilder(): WizardPaymentMethodsRequestBuilder {
    return new WizardPaymentMethodsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WizardPaymentMethods`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WizardPaymentMethods`.
   */
  static customField(fieldName: string): CustomFieldV4<WizardPaymentMethods> {
    return EntityV4.customFieldSelector(fieldName, WizardPaymentMethods);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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
  paymentMethodCode?: string | null;
  description?: string | null;
  type?: BoPaymentTypeEnum | null;
  paymentMeans?: BoPaymentMeansEnum | null;
  checkAddress?: BoYesNoEnum | null;
  checkBankDetails?: BoYesNoEnum | null;
  collectionAuthorizationCheck?: BoYesNoEnum | null;
  blockForeignPayment?: BoYesNoEnum | null;
  blockForeignBank?: BoYesNoEnum | null;
  currencyRestriction?: BoYesNoEnum | null;
  postOfficeBank?: BoYesNoEnum | null;
  minimumAmount?: number | null;
  maximumAmount?: number | null;
  defaultBank?: string | null;
  userSignature?: number | null;
  creationDate?: Moment | null;
  bankCountry?: string | null;
  defaultAccount?: string | null;
  glAccount?: string | null;
  branch?: string | null;
  keyCode?: string | null;
  transactionType?: string | null;
  format?: string | null;
  agentCollection?: BoYesNoEnum | null;
  sendforAcceptance?: BoYesNoEnum | null;
  groupByDate?: BoYesNoEnum | null;
  depositNorm?: string | null;
  debitMemo?: BoYesNoEnum | null;
  groupByPaymentReference?: BoYesNoEnum | null;
  groupInvoicesbyPay?: BoYesNoEnum | null;
  dueDateSelection?: BoDueDateEnum | null;
  paymentTermsCode?: number | null;
  posttoGlInterimAccount?: BoYesNoEnum | null;
  bankAccountKey?: number | null;
  docType?: string | null;
  accepted?: string | null;
  portfolioId?: string | null;
  curCode?: string | null;
  instruction1?: string | null;
  instruction2?: string | null;
  paymentPlace?: string | null;
  barcodeDll?: string | null;
  active?: BoYesNoEnum | null;
  groupInvoicesByPayToBank?: BoYesNoEnum | null;
  groupInvoicesByCurrency?: BoYesNoEnum | null;
  bankChargeRate?: number | null;
  reportCode?: string | null;
  cancelInstruction?: string | null;
  occurenceCode?: string | null;
  movementCode?: string | null;
  directDebit?: string | null;
  currencyRestrictions?: CurrencyRestriction[] | null;
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

export namespace WizardPaymentMethods {
  /**
   * Static representation of the [[paymentMethodCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD_CODE: StringField<WizardPaymentMethods> = new StringField('PaymentMethodCode', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<WizardPaymentMethods> = new StringField('Description', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: EnumField<WizardPaymentMethods> = new EnumField('Type', WizardPaymentMethods);
  /**
   * Static representation of the [[paymentMeans]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_MEANS: EnumField<WizardPaymentMethods> = new EnumField('PaymentMeans', WizardPaymentMethods);
  /**
   * Static representation of the [[checkAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_ADDRESS: EnumField<WizardPaymentMethods> = new EnumField('CheckAddress', WizardPaymentMethods);
  /**
   * Static representation of the [[checkBankDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_BANK_DETAILS: EnumField<WizardPaymentMethods> = new EnumField('CheckBankDetails', WizardPaymentMethods);
  /**
   * Static representation of the [[collectionAuthorizationCheck]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLLECTION_AUTHORIZATION_CHECK: EnumField<WizardPaymentMethods> = new EnumField('CollectionAuthorizationCheck', WizardPaymentMethods);
  /**
   * Static representation of the [[blockForeignPayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK_FOREIGN_PAYMENT: EnumField<WizardPaymentMethods> = new EnumField('BlockForeignPayment', WizardPaymentMethods);
  /**
   * Static representation of the [[blockForeignBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK_FOREIGN_BANK: EnumField<WizardPaymentMethods> = new EnumField('BlockForeignBank', WizardPaymentMethods);
  /**
   * Static representation of the [[currencyRestriction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_RESTRICTION: EnumField<WizardPaymentMethods> = new EnumField('CurrencyRestriction', WizardPaymentMethods);
  /**
   * Static representation of the [[postOfficeBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POST_OFFICE_BANK: EnumField<WizardPaymentMethods> = new EnumField('PostOfficeBank', WizardPaymentMethods);
  /**
   * Static representation of the [[minimumAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_AMOUNT: NumberField<WizardPaymentMethods> = new NumberField('MinimumAmount', WizardPaymentMethods, 'Edm.Double');
  /**
   * Static representation of the [[maximumAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_AMOUNT: NumberField<WizardPaymentMethods> = new NumberField('MaximumAmount', WizardPaymentMethods, 'Edm.Double');
  /**
   * Static representation of the [[defaultBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_BANK: StringField<WizardPaymentMethods> = new StringField('DefaultBank', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[userSignature]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SIGNATURE: NumberField<WizardPaymentMethods> = new NumberField('UserSignature', WizardPaymentMethods, 'Edm.Int32');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<WizardPaymentMethods> = new DateField('CreationDate', WizardPaymentMethods, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[bankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_COUNTRY: StringField<WizardPaymentMethods> = new StringField('BankCountry', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[defaultAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_ACCOUNT: StringField<WizardPaymentMethods> = new StringField('DefaultAccount', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[glAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_ACCOUNT: StringField<WizardPaymentMethods> = new StringField('GLAccount', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[branch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH: StringField<WizardPaymentMethods> = new StringField('Branch', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[keyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KEY_CODE: StringField<WizardPaymentMethods> = new StringField('KeyCode', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[transactionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_TYPE: StringField<WizardPaymentMethods> = new StringField('TransactionType', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[format]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMAT: StringField<WizardPaymentMethods> = new StringField('Format', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[agentCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENT_COLLECTION: EnumField<WizardPaymentMethods> = new EnumField('AgentCollection', WizardPaymentMethods);
  /**
   * Static representation of the [[sendforAcceptance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SENDFOR_ACCEPTANCE: EnumField<WizardPaymentMethods> = new EnumField('SendforAcceptance', WizardPaymentMethods);
  /**
   * Static representation of the [[groupByDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_BY_DATE: EnumField<WizardPaymentMethods> = new EnumField('GroupByDate', WizardPaymentMethods);
  /**
   * Static representation of the [[depositNorm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPOSIT_NORM: StringField<WizardPaymentMethods> = new StringField('DepositNorm', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[debitMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEBIT_MEMO: EnumField<WizardPaymentMethods> = new EnumField('DebitMemo', WizardPaymentMethods);
  /**
   * Static representation of the [[groupByPaymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_BY_PAYMENT_REFERENCE: EnumField<WizardPaymentMethods> = new EnumField('GroupByPaymentReference', WizardPaymentMethods);
  /**
   * Static representation of the [[groupInvoicesbyPay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_INVOICESBY_PAY: EnumField<WizardPaymentMethods> = new EnumField('GroupInvoicesbyPay', WizardPaymentMethods);
  /**
   * Static representation of the [[dueDateSelection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE_SELECTION: EnumField<WizardPaymentMethods> = new EnumField('DueDateSelection', WizardPaymentMethods);
  /**
   * Static representation of the [[paymentTermsCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_CODE: NumberField<WizardPaymentMethods> = new NumberField('PaymentTermsCode', WizardPaymentMethods, 'Edm.Int32');
  /**
   * Static representation of the [[posttoGlInterimAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTTO_GL_INTERIM_ACCOUNT: EnumField<WizardPaymentMethods> = new EnumField('PosttoGLInterimAccount', WizardPaymentMethods);
  /**
   * Static representation of the [[bankAccountKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_ACCOUNT_KEY: NumberField<WizardPaymentMethods> = new NumberField('BankAccountKey', WizardPaymentMethods, 'Edm.Int32');
  /**
   * Static representation of the [[docType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE: StringField<WizardPaymentMethods> = new StringField('DocType', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[accepted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCEPTED: StringField<WizardPaymentMethods> = new StringField('Accepted', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[portfolioId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PORTFOLIO_ID: StringField<WizardPaymentMethods> = new StringField('PortfolioID', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[curCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUR_CODE: StringField<WizardPaymentMethods> = new StringField('CurCode', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[instruction1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTRUCTION_1: StringField<WizardPaymentMethods> = new StringField('Instruction1', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[instruction2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTRUCTION_2: StringField<WizardPaymentMethods> = new StringField('Instruction2', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[paymentPlace]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_PLACE: StringField<WizardPaymentMethods> = new StringField('PaymentPlace', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[barcodeDll]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BARCODE_DLL: StringField<WizardPaymentMethods> = new StringField('BarcodeDll', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[active]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE: EnumField<WizardPaymentMethods> = new EnumField('Active', WizardPaymentMethods);
  /**
   * Static representation of the [[groupInvoicesByPayToBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_INVOICES_BY_PAY_TO_BANK: EnumField<WizardPaymentMethods> = new EnumField('GroupInvoicesByPayToBank', WizardPaymentMethods);
  /**
   * Static representation of the [[groupInvoicesByCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_INVOICES_BY_CURRENCY: EnumField<WizardPaymentMethods> = new EnumField('GroupInvoicesByCurrency', WizardPaymentMethods);
  /**
   * Static representation of the [[bankChargeRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CHARGE_RATE: NumberField<WizardPaymentMethods> = new NumberField('BankChargeRate', WizardPaymentMethods, 'Edm.Double');
  /**
   * Static representation of the [[reportCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORT_CODE: StringField<WizardPaymentMethods> = new StringField('ReportCode', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[cancelInstruction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_INSTRUCTION: StringField<WizardPaymentMethods> = new StringField('CancelInstruction', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[occurenceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCCURENCE_CODE: StringField<WizardPaymentMethods> = new StringField('OccurenceCode', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[movementCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MOVEMENT_CODE: StringField<WizardPaymentMethods> = new StringField('MovementCode', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[directDebit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIRECT_DEBIT: StringField<WizardPaymentMethods> = new StringField('DirectDebit', WizardPaymentMethods, 'Edm.String');
  /**
   * Static representation of the [[currencyRestrictions]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_RESTRICTIONS: CollectionField<WizardPaymentMethods, CurrencyRestriction> = new CollectionField('CurrencyRestrictions', WizardPaymentMethods, CurrencyRestriction);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<WizardPaymentMethods, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', WizardPaymentMethods, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<WizardPaymentMethods, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', WizardPaymentMethods, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<WizardPaymentMethods, DeliveryNotes> = new OneToManyLink('DeliveryNotes', WizardPaymentMethods, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<WizardPaymentMethods, BusinessPartners> = new OneToManyLink('BusinessPartners', WizardPaymentMethods, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<WizardPaymentMethods, Quotations> = new OneToManyLink('Quotations', WizardPaymentMethods, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<WizardPaymentMethods, InventoryGenExits> = new OneToManyLink('InventoryGenExits', WizardPaymentMethods, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<WizardPaymentMethods, PurchaseRequests> = new OneToManyLink('PurchaseRequests', WizardPaymentMethods, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<WizardPaymentMethods, ReturnRequest> = new OneToManyLink('ReturnRequest', WizardPaymentMethods, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENTS: OneToManyLink<WizardPaymentMethods, BlanketAgreements> = new OneToManyLink('BlanketAgreements', WizardPaymentMethods, BlanketAgreements);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<WizardPaymentMethods, PurchaseReturns> = new OneToManyLink('PurchaseReturns', WizardPaymentMethods, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<WizardPaymentMethods, Invoices> = new OneToManyLink('Invoices', WizardPaymentMethods, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<WizardPaymentMethods, CreditNotes> = new OneToManyLink('CreditNotes', WizardPaymentMethods, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<WizardPaymentMethods, Orders> = new OneToManyLink('Orders', WizardPaymentMethods, Orders);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<WizardPaymentMethods, DownPayments> = new OneToManyLink('DownPayments', WizardPaymentMethods, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<WizardPaymentMethods, Drafts> = new OneToManyLink('Drafts', WizardPaymentMethods, Drafts);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<WizardPaymentMethods, Users> = new OneToOneLink('User', WizardPaymentMethods, Users);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<WizardPaymentMethods, Countries> = new OneToOneLink('Country', WizardPaymentMethods, Countries);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<WizardPaymentMethods, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', WizardPaymentMethods, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<WizardPaymentMethods, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', WizardPaymentMethods, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[houseBankAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_BANK_ACCOUNT: OneToOneLink<WizardPaymentMethods, HouseBankAccounts> = new OneToOneLink('HouseBankAccount', WizardPaymentMethods, HouseBankAccounts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<WizardPaymentMethods, Returns> = new OneToManyLink('Returns', WizardPaymentMethods, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<WizardPaymentMethods, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', WizardPaymentMethods, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<WizardPaymentMethods, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', WizardPaymentMethods, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<WizardPaymentMethods, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', WizardPaymentMethods, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<WizardPaymentMethods, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', WizardPaymentMethods, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<WizardPaymentMethods, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', WizardPaymentMethods, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<WizardPaymentMethods, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', WizardPaymentMethods, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<WizardPaymentMethods, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', WizardPaymentMethods, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<WizardPaymentMethods, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', WizardPaymentMethods, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<WizardPaymentMethods, PurchaseOrders> = new OneToManyLink('PurchaseOrders', WizardPaymentMethods, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<WizardPaymentMethods, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', WizardPaymentMethods, GoodsReturnRequest);
  /**
   * All fields of the WizardPaymentMethods entity.
   */
  export const _allFields: Array<StringField<WizardPaymentMethods> | EnumField<WizardPaymentMethods> | NumberField<WizardPaymentMethods> | DateField<WizardPaymentMethods> | CollectionField<WizardPaymentMethods, CurrencyRestriction> | OneToManyLink<WizardPaymentMethods, InventoryGenEntries> | OneToManyLink<WizardPaymentMethods, PurchaseQuotations> | OneToManyLink<WizardPaymentMethods, DeliveryNotes> | OneToManyLink<WizardPaymentMethods, BusinessPartners> | OneToManyLink<WizardPaymentMethods, Quotations> | OneToManyLink<WizardPaymentMethods, InventoryGenExits> | OneToManyLink<WizardPaymentMethods, PurchaseRequests> | OneToManyLink<WizardPaymentMethods, ReturnRequest> | OneToManyLink<WizardPaymentMethods, BlanketAgreements> | OneToManyLink<WizardPaymentMethods, PurchaseReturns> | OneToManyLink<WizardPaymentMethods, Invoices> | OneToManyLink<WizardPaymentMethods, CreditNotes> | OneToManyLink<WizardPaymentMethods, Orders> | OneToManyLink<WizardPaymentMethods, DownPayments> | OneToManyLink<WizardPaymentMethods, Drafts> | OneToOneLink<WizardPaymentMethods, Users> | OneToOneLink<WizardPaymentMethods, Countries> | OneToOneLink<WizardPaymentMethods, ChartOfAccounts> | OneToOneLink<WizardPaymentMethods, PaymentTermsTypes> | OneToOneLink<WizardPaymentMethods, HouseBankAccounts> | OneToManyLink<WizardPaymentMethods, Returns> | OneToManyLink<WizardPaymentMethods, CorrectionInvoiceReversal> | OneToManyLink<WizardPaymentMethods, CorrectionPurchaseInvoice> | OneToManyLink<WizardPaymentMethods, CorrectionPurchaseInvoiceReversal> | OneToManyLink<WizardPaymentMethods, PurchaseInvoices> | OneToManyLink<WizardPaymentMethods, PurchaseDeliveryNotes> | OneToManyLink<WizardPaymentMethods, CorrectionInvoice> | OneToManyLink<WizardPaymentMethods, PurchaseCreditNotes> | OneToManyLink<WizardPaymentMethods, PurchaseDownPayments> | OneToManyLink<WizardPaymentMethods, PurchaseOrders> | OneToManyLink<WizardPaymentMethods, GoodsReturnRequest>> = [
    WizardPaymentMethods.PAYMENT_METHOD_CODE,
    WizardPaymentMethods.DESCRIPTION,
    WizardPaymentMethods.TYPE,
    WizardPaymentMethods.PAYMENT_MEANS,
    WizardPaymentMethods.CHECK_ADDRESS,
    WizardPaymentMethods.CHECK_BANK_DETAILS,
    WizardPaymentMethods.COLLECTION_AUTHORIZATION_CHECK,
    WizardPaymentMethods.BLOCK_FOREIGN_PAYMENT,
    WizardPaymentMethods.BLOCK_FOREIGN_BANK,
    WizardPaymentMethods.CURRENCY_RESTRICTION,
    WizardPaymentMethods.POST_OFFICE_BANK,
    WizardPaymentMethods.MINIMUM_AMOUNT,
    WizardPaymentMethods.MAXIMUM_AMOUNT,
    WizardPaymentMethods.DEFAULT_BANK,
    WizardPaymentMethods.USER_SIGNATURE,
    WizardPaymentMethods.CREATION_DATE,
    WizardPaymentMethods.BANK_COUNTRY,
    WizardPaymentMethods.DEFAULT_ACCOUNT,
    WizardPaymentMethods.GL_ACCOUNT,
    WizardPaymentMethods.BRANCH,
    WizardPaymentMethods.KEY_CODE,
    WizardPaymentMethods.TRANSACTION_TYPE,
    WizardPaymentMethods.FORMAT,
    WizardPaymentMethods.AGENT_COLLECTION,
    WizardPaymentMethods.SENDFOR_ACCEPTANCE,
    WizardPaymentMethods.GROUP_BY_DATE,
    WizardPaymentMethods.DEPOSIT_NORM,
    WizardPaymentMethods.DEBIT_MEMO,
    WizardPaymentMethods.GROUP_BY_PAYMENT_REFERENCE,
    WizardPaymentMethods.GROUP_INVOICESBY_PAY,
    WizardPaymentMethods.DUE_DATE_SELECTION,
    WizardPaymentMethods.PAYMENT_TERMS_CODE,
    WizardPaymentMethods.POSTTO_GL_INTERIM_ACCOUNT,
    WizardPaymentMethods.BANK_ACCOUNT_KEY,
    WizardPaymentMethods.DOC_TYPE,
    WizardPaymentMethods.ACCEPTED,
    WizardPaymentMethods.PORTFOLIO_ID,
    WizardPaymentMethods.CUR_CODE,
    WizardPaymentMethods.INSTRUCTION_1,
    WizardPaymentMethods.INSTRUCTION_2,
    WizardPaymentMethods.PAYMENT_PLACE,
    WizardPaymentMethods.BARCODE_DLL,
    WizardPaymentMethods.ACTIVE,
    WizardPaymentMethods.GROUP_INVOICES_BY_PAY_TO_BANK,
    WizardPaymentMethods.GROUP_INVOICES_BY_CURRENCY,
    WizardPaymentMethods.BANK_CHARGE_RATE,
    WizardPaymentMethods.REPORT_CODE,
    WizardPaymentMethods.CANCEL_INSTRUCTION,
    WizardPaymentMethods.OCCURENCE_CODE,
    WizardPaymentMethods.MOVEMENT_CODE,
    WizardPaymentMethods.DIRECT_DEBIT,
    WizardPaymentMethods.CURRENCY_RESTRICTIONS,
    WizardPaymentMethods.INVENTORY_GEN_ENTRIES,
    WizardPaymentMethods.PURCHASE_QUOTATIONS,
    WizardPaymentMethods.DELIVERY_NOTES,
    WizardPaymentMethods.BUSINESS_PARTNERS,
    WizardPaymentMethods.QUOTATIONS,
    WizardPaymentMethods.INVENTORY_GEN_EXITS,
    WizardPaymentMethods.PURCHASE_REQUESTS,
    WizardPaymentMethods.RETURN_REQUEST,
    WizardPaymentMethods.BLANKET_AGREEMENTS,
    WizardPaymentMethods.PURCHASE_RETURNS,
    WizardPaymentMethods.INVOICES,
    WizardPaymentMethods.CREDIT_NOTES,
    WizardPaymentMethods.ORDERS,
    WizardPaymentMethods.DOWN_PAYMENTS,
    WizardPaymentMethods.DRAFTS,
    WizardPaymentMethods.USER,
    WizardPaymentMethods.COUNTRY,
    WizardPaymentMethods.CHART_OF_ACCOUNT,
    WizardPaymentMethods.PAYMENT_TERMS_TYPE,
    WizardPaymentMethods.HOUSE_BANK_ACCOUNT,
    WizardPaymentMethods.RETURNS,
    WizardPaymentMethods.CORRECTION_INVOICE_REVERSAL,
    WizardPaymentMethods.CORRECTION_PURCHASE_INVOICE,
    WizardPaymentMethods.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    WizardPaymentMethods.PURCHASE_INVOICES,
    WizardPaymentMethods.PURCHASE_DELIVERY_NOTES,
    WizardPaymentMethods.CORRECTION_INVOICE,
    WizardPaymentMethods.PURCHASE_CREDIT_NOTES,
    WizardPaymentMethods.PURCHASE_DOWN_PAYMENTS,
    WizardPaymentMethods.PURCHASE_ORDERS,
    WizardPaymentMethods.GOODS_RETURN_REQUEST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WizardPaymentMethods> = new AllFields('*', WizardPaymentMethods);
  /**
   * All key fields of the WizardPaymentMethods entity.
   */
  export const _keyFields: Array<Field<WizardPaymentMethods>> = [WizardPaymentMethods.PAYMENT_METHOD_CODE];
  /**
   * Mapping of all key field names to the respective static field property WizardPaymentMethods.
   */
  export const _keys: { [keys: string]: Field<WizardPaymentMethods> } = WizardPaymentMethods._keyFields.reduce((acc: { [keys: string]: Field<WizardPaymentMethods> }, field: Field<WizardPaymentMethods>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
