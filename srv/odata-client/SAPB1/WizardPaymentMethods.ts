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
import { CurrencyRestriction } from './CurrencyRestriction';
import type { WizardPaymentMethodsApi } from './WizardPaymentMethodsApi';
import { BoPaymentTypeEnum } from './BoPaymentTypeEnum';
import { BoPaymentMeansEnum } from './BoPaymentMeansEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoDueDateEnum } from './BoDueDateEnum';
import {
  PurchaseQuotations,
  PurchaseQuotationsType
} from './PurchaseQuotations';
import {
  CorrectionInvoiceReversal,
  CorrectionInvoiceReversalType
} from './CorrectionInvoiceReversal';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import {
  PurchaseDeliveryNotes,
  PurchaseDeliveryNotesType
} from './PurchaseDeliveryNotes';
import {
  CorrectionPurchaseInvoice,
  CorrectionPurchaseInvoiceType
} from './CorrectionPurchaseInvoice';
import {
  InventoryGenEntries,
  InventoryGenEntriesType
} from './InventoryGenEntries';
import { Orders, OrdersType } from './Orders';
import { Users, UsersType } from './Users';
import { Countries, CountriesType } from './Countries';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
import { HouseBankAccounts, HouseBankAccountsType } from './HouseBankAccounts';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { Drafts, DraftsType } from './Drafts';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import {
  PurchaseCreditNotes,
  PurchaseCreditNotesType
} from './PurchaseCreditNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { DownPayments, DownPaymentsType } from './DownPayments';
import {
  PurchaseDownPayments,
  PurchaseDownPaymentsType
} from './PurchaseDownPayments';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { Quotations, QuotationsType } from './Quotations';
import { Returns, ReturnsType } from './Returns';
import {
  GoodsReturnRequest,
  GoodsReturnRequestType
} from './GoodsReturnRequest';
import {
  CorrectionPurchaseInvoiceReversal,
  CorrectionPurchaseInvoiceReversalType
} from './CorrectionPurchaseInvoiceReversal';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';

/**
 * This class represents the entity "WizardPaymentMethods" of service "SAPB1".
 */
export class WizardPaymentMethods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WizardPaymentMethodsType<T>
{
  /**
   * Technical entity name for WizardPaymentMethods.
   */
  static _entityName = 'WizardPaymentMethods';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WizardPaymentMethods entity
   */
  static _keys = ['PaymentMethodCode'];
  /**
   * Payment Method Code.
   */
  paymentMethodCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  type?: BoPaymentTypeEnum | null;
  /**
   * Payment Means.
   * @nullable
   */
  paymentMeans?: BoPaymentMeansEnum | null;
  /**
   * Check Address.
   * @nullable
   */
  checkAddress?: BoYesNoEnum | null;
  /**
   * Check Bank Details.
   * @nullable
   */
  checkBankDetails?: BoYesNoEnum | null;
  /**
   * Collection Authorization Check.
   * @nullable
   */
  collectionAuthorizationCheck?: BoYesNoEnum | null;
  /**
   * Block Foreign Payment.
   * @nullable
   */
  blockForeignPayment?: BoYesNoEnum | null;
  /**
   * Block Foreign Bank.
   * @nullable
   */
  blockForeignBank?: BoYesNoEnum | null;
  /**
   * Currency Restriction.
   * @nullable
   */
  currencyRestriction?: BoYesNoEnum | null;
  /**
   * Post Office Bank.
   * @nullable
   */
  postOfficeBank?: BoYesNoEnum | null;
  /**
   * Minimum Amount.
   * @nullable
   */
  minimumAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Maximum Amount.
   * @nullable
   */
  maximumAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Default Bank.
   * @nullable
   */
  defaultBank?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Bank Country.
   * @nullable
   */
  bankCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Account.
   * @nullable
   */
  defaultAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gl Account.
   * @nullable
   */
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch.
   * @nullable
   */
  branch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Key Code.
   * @nullable
   */
  keyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Type.
   * @nullable
   */
  transactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Format.
   * @nullable
   */
  format?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agent Collection.
   * @nullable
   */
  agentCollection?: BoYesNoEnum | null;
  /**
   * Sendfor Acceptance.
   * @nullable
   */
  sendforAcceptance?: BoYesNoEnum | null;
  /**
   * Group By Date.
   * @nullable
   */
  groupByDate?: BoYesNoEnum | null;
  /**
   * Deposit Norm.
   * @nullable
   */
  depositNorm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debit Memo.
   * @nullable
   */
  debitMemo?: BoYesNoEnum | null;
  /**
   * Group By Payment Reference.
   * @nullable
   */
  groupByPaymentReference?: BoYesNoEnum | null;
  /**
   * Group Invoicesby Pay.
   * @nullable
   */
  groupInvoicesbyPay?: BoYesNoEnum | null;
  /**
   * Due Date Selection.
   * @nullable
   */
  dueDateSelection?: BoDueDateEnum | null;
  /**
   * Payment Terms Code.
   * @nullable
   */
  paymentTermsCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Postto Gl Interim Account.
   * @nullable
   */
  posttoGlInterimAccount?: BoYesNoEnum | null;
  /**
   * Bank Account Key.
   * @nullable
   */
  bankAccountKey?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accepted.
   * @nullable
   */
  accepted?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Portfolio Id.
   * @nullable
   */
  portfolioId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cur Code.
   * @nullable
   */
  curCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instruction 1.
   * @nullable
   */
  instruction1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instruction 2.
   * @nullable
   */
  instruction2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Place.
   * @nullable
   */
  paymentPlace?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcode Dll.
   * @nullable
   */
  barcodeDll?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum | null;
  /**
   * Group Invoices By Pay To Bank.
   * @nullable
   */
  groupInvoicesByPayToBank?: BoYesNoEnum | null;
  /**
   * Group Invoices By Currency.
   * @nullable
   */
  groupInvoicesByCurrency?: BoYesNoEnum | null;
  /**
   * Bank Charge Rate.
   * @nullable
   */
  bankChargeRate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Report Code.
   * @nullable
   */
  reportCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancel Instruction.
   * @nullable
   */
  cancelInstruction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Occurence Code.
   * @nullable
   */
  occurenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Movement Code.
   * @nullable
   */
  movementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Direct Debit.
   * @nullable
   */
  directDebit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Restrictions.
   * @nullable
   */
  currencyRestrictions?: CurrencyRestriction<T>[] | null;
  /**
   * One-to-many navigation property to the {@link PurchaseQuotations} entity.
   */
  purchaseQuotations!: PurchaseQuotations<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionInvoiceReversal} entity.
   */
  correctionInvoiceReversal!: CorrectionInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionInvoice} entity.
   */
  correctionInvoice!: CorrectionInvoice<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDeliveryNotes} entity.
   */
  purchaseDeliveryNotes!: PurchaseDeliveryNotes<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoice} entity.
   */
  correctionPurchaseInvoice!: CorrectionPurchaseInvoice<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenEntries} entity.
   */
  inventoryGenEntries!: InventoryGenEntries<T>[];
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  orders!: Orders<T>[];
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentTermsTypes} entity.
   */
  paymentTermsType?: PaymentTermsTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link HouseBankAccounts} entity.
   */
  houseBankAccount?: HouseBankAccounts<T> | null;
  /**
   * One-to-many navigation property to the {@link InventoryGenExits} entity.
   */
  inventoryGenExits!: InventoryGenExits<T>[];
  /**
   * One-to-many navigation property to the {@link Drafts} entity.
   */
  drafts!: Drafts<T>[];
  /**
   * One-to-many navigation property to the {@link ReturnRequest} entity.
   */
  returnRequest!: ReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link DeliveryNotes} entity.
   */
  deliveryNotes!: DeliveryNotes<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseInvoices} entity.
   */
  purchaseInvoices!: PurchaseInvoices<T>[];
  /**
   * One-to-many navigation property to the {@link BlanketAgreements} entity.
   */
  blanketAgreements!: BlanketAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link Invoices} entity.
   */
  invoices!: Invoices<T>[];
  /**
   * One-to-many navigation property to the {@link CreditNotes} entity.
   */
  creditNotes!: CreditNotes<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseCreditNotes} entity.
   */
  purchaseCreditNotes!: PurchaseCreditNotes<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];
  /**
   * One-to-many navigation property to the {@link DownPayments} entity.
   */
  downPayments!: DownPayments<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDownPayments} entity.
   */
  purchaseDownPayments!: PurchaseDownPayments<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseReturns} entity.
   */
  purchaseReturns!: PurchaseReturns<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrders} entity.
   */
  purchaseOrders!: PurchaseOrders<T>[];
  /**
   * One-to-many navigation property to the {@link Quotations} entity.
   */
  quotations!: Quotations<T>[];
  /**
   * One-to-many navigation property to the {@link Returns} entity.
   */
  returns!: Returns<T>[];
  /**
   * One-to-many navigation property to the {@link GoodsReturnRequest} entity.
   */
  goodsReturnRequest!: GoodsReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoiceReversal} entity.
   */
  correctionPurchaseInvoiceReversal!: CorrectionPurchaseInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequests} entity.
   */
  purchaseRequests!: PurchaseRequests<T>[];

  constructor(readonly _entityApi: WizardPaymentMethodsApi<T>) {
    super(_entityApi);
  }
}

export interface WizardPaymentMethodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  paymentMethodCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  type?: BoPaymentTypeEnum | null;
  paymentMeans?: BoPaymentMeansEnum | null;
  checkAddress?: BoYesNoEnum | null;
  checkBankDetails?: BoYesNoEnum | null;
  collectionAuthorizationCheck?: BoYesNoEnum | null;
  blockForeignPayment?: BoYesNoEnum | null;
  blockForeignBank?: BoYesNoEnum | null;
  currencyRestriction?: BoYesNoEnum | null;
  postOfficeBank?: BoYesNoEnum | null;
  minimumAmount?: DeserializedType<T, 'Edm.Double'> | null;
  maximumAmount?: DeserializedType<T, 'Edm.Double'> | null;
  defaultBank?: DeserializedType<T, 'Edm.String'> | null;
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  bankCountry?: DeserializedType<T, 'Edm.String'> | null;
  defaultAccount?: DeserializedType<T, 'Edm.String'> | null;
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  branch?: DeserializedType<T, 'Edm.String'> | null;
  keyCode?: DeserializedType<T, 'Edm.String'> | null;
  transactionType?: DeserializedType<T, 'Edm.String'> | null;
  format?: DeserializedType<T, 'Edm.String'> | null;
  agentCollection?: BoYesNoEnum | null;
  sendforAcceptance?: BoYesNoEnum | null;
  groupByDate?: BoYesNoEnum | null;
  depositNorm?: DeserializedType<T, 'Edm.String'> | null;
  debitMemo?: BoYesNoEnum | null;
  groupByPaymentReference?: BoYesNoEnum | null;
  groupInvoicesbyPay?: BoYesNoEnum | null;
  dueDateSelection?: BoDueDateEnum | null;
  paymentTermsCode?: DeserializedType<T, 'Edm.Int32'> | null;
  posttoGlInterimAccount?: BoYesNoEnum | null;
  bankAccountKey?: DeserializedType<T, 'Edm.Int32'> | null;
  docType?: DeserializedType<T, 'Edm.String'> | null;
  accepted?: DeserializedType<T, 'Edm.String'> | null;
  portfolioId?: DeserializedType<T, 'Edm.String'> | null;
  curCode?: DeserializedType<T, 'Edm.String'> | null;
  instruction1?: DeserializedType<T, 'Edm.String'> | null;
  instruction2?: DeserializedType<T, 'Edm.String'> | null;
  paymentPlace?: DeserializedType<T, 'Edm.String'> | null;
  barcodeDll?: DeserializedType<T, 'Edm.String'> | null;
  active?: BoYesNoEnum | null;
  groupInvoicesByPayToBank?: BoYesNoEnum | null;
  groupInvoicesByCurrency?: BoYesNoEnum | null;
  bankChargeRate?: DeserializedType<T, 'Edm.Double'> | null;
  reportCode?: DeserializedType<T, 'Edm.String'> | null;
  cancelInstruction?: DeserializedType<T, 'Edm.String'> | null;
  occurenceCode?: DeserializedType<T, 'Edm.String'> | null;
  movementCode?: DeserializedType<T, 'Edm.String'> | null;
  directDebit?: DeserializedType<T, 'Edm.String'> | null;
  currencyRestrictions?: CurrencyRestriction<T>[] | null;
  purchaseQuotations: PurchaseQuotationsType<T>[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType<T>[];
  correctionInvoice: CorrectionInvoiceType<T>[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType<T>[];
  inventoryGenEntries: InventoryGenEntriesType<T>[];
  orders: OrdersType<T>[];
  user?: UsersType<T> | null;
  country?: CountriesType<T> | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  paymentTermsType?: PaymentTermsTypesType<T> | null;
  houseBankAccount?: HouseBankAccountsType<T> | null;
  inventoryGenExits: InventoryGenExitsType<T>[];
  drafts: DraftsType<T>[];
  returnRequest: ReturnRequestType<T>[];
  deliveryNotes: DeliveryNotesType<T>[];
  purchaseInvoices: PurchaseInvoicesType<T>[];
  blanketAgreements: BlanketAgreementsType<T>[];
  invoices: InvoicesType<T>[];
  creditNotes: CreditNotesType<T>[];
  purchaseCreditNotes: PurchaseCreditNotesType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  downPayments: DownPaymentsType<T>[];
  purchaseDownPayments: PurchaseDownPaymentsType<T>[];
  purchaseReturns: PurchaseReturnsType<T>[];
  purchaseOrders: PurchaseOrdersType<T>[];
  quotations: QuotationsType<T>[];
  returns: ReturnsType<T>[];
  goodsReturnRequest: GoodsReturnRequestType<T>[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType<T>[];
  purchaseRequests: PurchaseRequestsType<T>[];
}
