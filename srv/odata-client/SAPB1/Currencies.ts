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
import type { CurrenciesApi } from './CurrenciesApi';
import { CurrenciesDecimalsEnum } from './CurrenciesDecimalsEnum';
import { RoundingSysEnum } from './RoundingSysEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  PurchaseQuotations,
  PurchaseQuotationsType
} from './PurchaseQuotations';
import { AssetTransfer, AssetTransferType } from './AssetTransfer';
import {
  CorrectionInvoiceReversal,
  CorrectionInvoiceReversalType
} from './CorrectionInvoiceReversal';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';
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
import { AssetRetirement, AssetRetirementType } from './AssetRetirement';
import {
  AssetManualDepreciation,
  AssetManualDepreciationType
} from './AssetManualDepreciation';
import { Orders, OrdersType } from './Orders';
import {
  AssetCapitalization,
  AssetCapitalizationType
} from './AssetCapitalization';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { Drafts, DraftsType } from './Drafts';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BankStatements, BankStatementsType } from './BankStatements';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import {
  AssetCapitalizationCreditMemo,
  AssetCapitalizationCreditMemoType
} from './AssetCapitalizationCreditMemo';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
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
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';

/**
 * This class represents the entity "Currencies" of service "SAPB1".
 */
export class Currencies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CurrenciesType<T>
{
  /**
   * Technical entity name for Currencies.
   */
  static _entityName = 'Currencies';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Currencies entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Documents Code.
   * @nullable
   */
  documentsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * International Description.
   * @nullable
   */
  internationalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hundredth Name.
   * @nullable
   */
  hundredthName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * English Name.
   * @nullable
   */
  englishName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * English Hundredth Name.
   * @nullable
   */
  englishHundredthName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plural International Description.
   * @nullable
   */
  pluralInternationalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plural Hundredth Name.
   * @nullable
   */
  pluralHundredthName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plural English Name.
   * @nullable
   */
  pluralEnglishName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plural English Hundredth Name.
   * @nullable
   */
  pluralEnglishHundredthName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Decimals.
   * @nullable
   */
  decimals?: CurrenciesDecimalsEnum | null;
  /**
   * Rounding.
   * @nullable
   */
  rounding?: RoundingSysEnum | null;
  /**
   * Rounding In Payment.
   * @nullable
   */
  roundingInPayment?: BoYesNoEnum | null;
  /**
   * Max Incoming Amt Diff.
   * @nullable
   */
  maxIncomingAmtDiff?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Max Outgoing Amt Diff.
   * @nullable
   */
  maxOutgoingAmtDiff?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Max Incoming Amt Diff Percent.
   * @nullable
   */
  maxIncomingAmtDiffPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Max Outgoing Amt Diff Percent.
   * @nullable
   */
  maxOutgoingAmtDiffPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseQuotations} entity.
   */
  purchaseQuotations!: PurchaseQuotations<T>[];
  /**
   * One-to-many navigation property to the {@link AssetTransfer} entity.
   */
  assetTransfer!: AssetTransfer<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionInvoiceReversal} entity.
   */
  correctionInvoiceReversal!: CorrectionInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionInvoice} entity.
   */
  correctionInvoice!: CorrectionInvoice<T>[];
  /**
   * One-to-many navigation property to the {@link WithholdingTaxCodes} entity.
   */
  withholdingTaxCodes!: WithholdingTaxCodes<T>[];
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
   * One-to-many navigation property to the {@link AssetRetirement} entity.
   */
  assetRetirement!: AssetRetirement<T>[];
  /**
   * One-to-many navigation property to the {@link AssetManualDepreciation} entity.
   */
  assetManualDepreciation!: AssetManualDepreciation<T>[];
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  orders!: Orders<T>[];
  /**
   * One-to-many navigation property to the {@link AssetCapitalization} entity.
   */
  assetCapitalization!: AssetCapitalization<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenExits} entity.
   */
  inventoryGenExits!: InventoryGenExits<T>[];
  /**
   * One-to-many navigation property to the {@link Drafts} entity.
   */
  drafts!: Drafts<T>[];
  /**
   * One-to-many navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccounts!: ChartOfAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link ReturnRequest} entity.
   */
  returnRequest!: ReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link DeliveryNotes} entity.
   */
  deliveryNotes!: DeliveryNotes<T>[];
  /**
   * One-to-many navigation property to the {@link BankStatements} entity.
   */
  bankStatements!: BankStatements<T>[];
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
   * One-to-many navigation property to the {@link AssetCapitalizationCreditMemo} entity.
   */
  assetCapitalizationCreditMemo!: AssetCapitalizationCreditMemo<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentDrafts} entity.
   */
  paymentDrafts!: PaymentDrafts<T>[];
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
   * One-to-many navigation property to the {@link IncomingPayments} entity.
   */
  incomingPayments!: IncomingPayments<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequests} entity.
   */
  purchaseRequests!: PurchaseRequests<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPayments} entity.
   */
  vendorPayments!: VendorPayments<T>[];

  constructor(readonly _entityApi: CurrenciesApi<T>) {
    super(_entityApi);
  }
}

export interface CurrenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  documentsCode?: DeserializedType<T, 'Edm.String'> | null;
  internationalDescription?: DeserializedType<T, 'Edm.String'> | null;
  hundredthName?: DeserializedType<T, 'Edm.String'> | null;
  englishName?: DeserializedType<T, 'Edm.String'> | null;
  englishHundredthName?: DeserializedType<T, 'Edm.String'> | null;
  pluralInternationalDescription?: DeserializedType<T, 'Edm.String'> | null;
  pluralHundredthName?: DeserializedType<T, 'Edm.String'> | null;
  pluralEnglishName?: DeserializedType<T, 'Edm.String'> | null;
  pluralEnglishHundredthName?: DeserializedType<T, 'Edm.String'> | null;
  decimals?: CurrenciesDecimalsEnum | null;
  rounding?: RoundingSysEnum | null;
  roundingInPayment?: BoYesNoEnum | null;
  maxIncomingAmtDiff?: DeserializedType<T, 'Edm.Double'> | null;
  maxOutgoingAmtDiff?: DeserializedType<T, 'Edm.Double'> | null;
  maxIncomingAmtDiffPercent?: DeserializedType<T, 'Edm.Double'> | null;
  maxOutgoingAmtDiffPercent?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseQuotations: PurchaseQuotationsType<T>[];
  assetTransfer: AssetTransferType<T>[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType<T>[];
  correctionInvoice: CorrectionInvoiceType<T>[];
  withholdingTaxCodes: WithholdingTaxCodesType<T>[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType<T>[];
  inventoryGenEntries: InventoryGenEntriesType<T>[];
  assetRetirement: AssetRetirementType<T>[];
  assetManualDepreciation: AssetManualDepreciationType<T>[];
  orders: OrdersType<T>[];
  assetCapitalization: AssetCapitalizationType<T>[];
  inventoryGenExits: InventoryGenExitsType<T>[];
  drafts: DraftsType<T>[];
  chartOfAccounts: ChartOfAccountsType<T>[];
  returnRequest: ReturnRequestType<T>[];
  deliveryNotes: DeliveryNotesType<T>[];
  bankStatements: BankStatementsType<T>[];
  purchaseInvoices: PurchaseInvoicesType<T>[];
  blanketAgreements: BlanketAgreementsType<T>[];
  invoices: InvoicesType<T>[];
  creditNotes: CreditNotesType<T>[];
  assetCapitalizationCreditMemo: AssetCapitalizationCreditMemoType<T>[];
  paymentDrafts: PaymentDraftsType<T>[];
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
  incomingPayments: IncomingPaymentsType<T>[];
  purchaseRequests: PurchaseRequestsType<T>[];
  vendorPayments: VendorPaymentsType<T>[];
}
