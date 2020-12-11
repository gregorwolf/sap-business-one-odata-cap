/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CurrenciesRequestBuilder } from './CurrenciesRequestBuilder';
import { CurrenciesDecimalsEnum } from './CurrenciesDecimalsEnum';
import { RoundingSysEnum } from './RoundingSysEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Currencies" of service "SAPB1".
 */
export class Currencies extends EntityV4 implements CurrenciesType {
  /**
   * Technical entity name for Currencies.
   */
  static _entityName = 'Currencies';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * Documents Code.
   * @nullable
   */
  documentsCode?: string;
  /**
   * International Description.
   * @nullable
   */
  internationalDescription?: string;
  /**
   * Hundredth Name.
   * @nullable
   */
  hundredthName?: string;
  /**
   * English Name.
   * @nullable
   */
  englishName?: string;
  /**
   * English Hundredth Name.
   * @nullable
   */
  englishHundredthName?: string;
  /**
   * Plural International Description.
   * @nullable
   */
  pluralInternationalDescription?: string;
  /**
   * Plural Hundredth Name.
   * @nullable
   */
  pluralHundredthName?: string;
  /**
   * Plural English Name.
   * @nullable
   */
  pluralEnglishName?: string;
  /**
   * Plural English Hundredth Name.
   * @nullable
   */
  pluralEnglishHundredthName?: string;
  /**
   * Decimals.
   * @nullable
   */
  decimals?: CurrenciesDecimalsEnum;
  /**
   * Rounding.
   * @nullable
   */
  rounding?: RoundingSysEnum;
  /**
   * Rounding In Payment.
   * @nullable
   */
  roundingInPayment?: BoYesNoEnum;
  /**
   * Max Incoming Amt Diff.
   * @nullable
   */
  maxIncomingAmtDiff?: number;
  /**
   * Max Outgoing Amt Diff.
   * @nullable
   */
  maxOutgoingAmtDiff?: number;
  /**
   * Max Incoming Amt Diff Percent.
   * @nullable
   */
  maxIncomingAmtDiffPercent?: number;
  /**
   * Max Outgoing Amt Diff Percent.
   * @nullable
   */
  maxOutgoingAmtDiffPercent?: number;
  /**
   * One-to-many navigation property to the [[InventoryGenEntries]] entity.
   */
  inventoryGenEntries!: InventoryGenEntries[];
  /**
   * One-to-many navigation property to the [[PurchaseQuotations]] entity.
   */
  purchaseQuotations!: PurchaseQuotations[];
  /**
   * One-to-many navigation property to the [[VendorPayments]] entity.
   */
  vendorPayments!: VendorPayments[];
  /**
   * One-to-many navigation property to the [[AssetTransfer]] entity.
   */
  assetTransfer!: AssetTransfer[];
  /**
   * One-to-many navigation property to the [[AssetRetirement]] entity.
   */
  assetRetirement!: AssetRetirement[];
  /**
   * One-to-many navigation property to the [[AssetCapitalizationCreditMemo]] entity.
   */
  assetCapitalizationCreditMemo!: AssetCapitalizationCreditMemo[];
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
   * One-to-many navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccounts!: ChartOfAccounts[];
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
   * One-to-many navigation property to the [[AssetCapitalization]] entity.
   */
  assetCapitalization!: AssetCapitalization[];
  /**
   * One-to-many navigation property to the [[CreditNotes]] entity.
   */
  creditNotes!: CreditNotes[];
  /**
   * One-to-many navigation property to the [[Orders]] entity.
   */
  orders!: Orders[];
  /**
   * One-to-many navigation property to the [[AssetManualDepreciation]] entity.
   */
  assetManualDepreciation!: AssetManualDepreciation[];
  /**
   * One-to-many navigation property to the [[DownPayments]] entity.
   */
  downPayments!: DownPayments[];
  /**
   * One-to-many navigation property to the [[Drafts]] entity.
   */
  drafts!: Drafts[];
  /**
   * One-to-many navigation property to the [[PaymentDrafts]] entity.
   */
  paymentDrafts!: PaymentDrafts[];
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
   * One-to-many navigation property to the [[WithholdingTaxCodes]] entity.
   */
  withholdingTaxCodes!: WithholdingTaxCodes[];
  /**
   * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
   */
  goodsReturnRequest!: GoodsReturnRequest[];
  /**
   * One-to-many navigation property to the [[IncomingPayments]] entity.
   */
  incomingPayments!: IncomingPayments[];
  /**
   * One-to-many navigation property to the [[BankStatements]] entity.
   */
  bankStatements!: BankStatements[];

  /**
   * Returns an entity builder to construct instances of `Currencies`.
   * @returns A builder that constructs instances of entity type `Currencies`.
   */
  static builder(): EntityBuilderType<Currencies, CurrenciesType> {
    return EntityV4.entityBuilder(Currencies);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Currencies` entity type.
   * @returns A `Currencies` request builder.
   */
  static requestBuilder(): CurrenciesRequestBuilder {
    return new CurrenciesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Currencies`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Currencies`.
   */
  static customField(fieldName: string): CustomFieldV4<Currencies> {
    return EntityV4.customFieldSelector(fieldName, Currencies);
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
import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { AssetTransfer, AssetTransferType } from './AssetTransfer';
import { AssetRetirement, AssetRetirementType } from './AssetRetirement';
import { AssetCapitalizationCreditMemo, AssetCapitalizationCreditMemoType } from './AssetCapitalizationCreditMemo';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Quotations, QuotationsType } from './Quotations';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { AssetCapitalization, AssetCapitalizationType } from './AssetCapitalization';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { Orders, OrdersType } from './Orders';
import { AssetManualDepreciation, AssetManualDepreciationType } from './AssetManualDepreciation';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
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
import { WithholdingTaxCodes, WithholdingTaxCodesType } from './WithholdingTaxCodes';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
import { BankStatements, BankStatementsType } from './BankStatements';

export interface CurrenciesType {
  code?: string | null;
  name?: string | null;
  documentsCode?: string | null;
  internationalDescription?: string | null;
  hundredthName?: string | null;
  englishName?: string | null;
  englishHundredthName?: string | null;
  pluralInternationalDescription?: string | null;
  pluralHundredthName?: string | null;
  pluralEnglishName?: string | null;
  pluralEnglishHundredthName?: string | null;
  decimals?: CurrenciesDecimalsEnum | null;
  rounding?: RoundingSysEnum | null;
  roundingInPayment?: BoYesNoEnum | null;
  maxIncomingAmtDiff?: number | null;
  maxOutgoingAmtDiff?: number | null;
  maxIncomingAmtDiffPercent?: number | null;
  maxOutgoingAmtDiffPercent?: number | null;
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  vendorPayments: VendorPaymentsType[];
  assetTransfer: AssetTransferType[];
  assetRetirement: AssetRetirementType[];
  assetCapitalizationCreditMemo: AssetCapitalizationCreditMemoType[];
  deliveryNotes: DeliveryNotesType[];
  businessPartners: BusinessPartnersType[];
  quotations: QuotationsType[];
  chartOfAccounts: ChartOfAccountsType[];
  inventoryGenExits: InventoryGenExitsType[];
  purchaseRequests: PurchaseRequestsType[];
  returnRequest: ReturnRequestType[];
  blanketAgreements: BlanketAgreementsType[];
  purchaseReturns: PurchaseReturnsType[];
  invoices: InvoicesType[];
  assetCapitalization: AssetCapitalizationType[];
  creditNotes: CreditNotesType[];
  orders: OrdersType[];
  assetManualDepreciation: AssetManualDepreciationType[];
  downPayments: DownPaymentsType[];
  drafts: DraftsType[];
  paymentDrafts: PaymentDraftsType[];
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
  withholdingTaxCodes: WithholdingTaxCodesType[];
  goodsReturnRequest: GoodsReturnRequestType[];
  incomingPayments: IncomingPaymentsType[];
  bankStatements: BankStatementsType[];
}

export namespace Currencies {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<Currencies> = new StringField('Code', Currencies, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<Currencies> = new StringField('Name', Currencies, 'Edm.String');
  /**
   * Static representation of the [[documentsCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENTS_CODE: StringField<Currencies> = new StringField('DocumentsCode', Currencies, 'Edm.String');
  /**
   * Static representation of the [[internationalDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_DESCRIPTION: StringField<Currencies> = new StringField('InternationalDescription', Currencies, 'Edm.String');
  /**
   * Static representation of the [[hundredthName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HUNDREDTH_NAME: StringField<Currencies> = new StringField('HundredthName', Currencies, 'Edm.String');
  /**
   * Static representation of the [[englishName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENGLISH_NAME: StringField<Currencies> = new StringField('EnglishName', Currencies, 'Edm.String');
  /**
   * Static representation of the [[englishHundredthName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENGLISH_HUNDREDTH_NAME: StringField<Currencies> = new StringField('EnglishHundredthName', Currencies, 'Edm.String');
  /**
   * Static representation of the [[pluralInternationalDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLURAL_INTERNATIONAL_DESCRIPTION: StringField<Currencies> = new StringField('PluralInternationalDescription', Currencies, 'Edm.String');
  /**
   * Static representation of the [[pluralHundredthName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLURAL_HUNDREDTH_NAME: StringField<Currencies> = new StringField('PluralHundredthName', Currencies, 'Edm.String');
  /**
   * Static representation of the [[pluralEnglishName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLURAL_ENGLISH_NAME: StringField<Currencies> = new StringField('PluralEnglishName', Currencies, 'Edm.String');
  /**
   * Static representation of the [[pluralEnglishHundredthName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLURAL_ENGLISH_HUNDREDTH_NAME: StringField<Currencies> = new StringField('PluralEnglishHundredthName', Currencies, 'Edm.String');
  /**
   * Static representation of the [[decimals]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DECIMALS: EnumField<Currencies> = new EnumField('Decimals', Currencies);
  /**
   * Static representation of the [[rounding]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING: EnumField<Currencies> = new EnumField('Rounding', Currencies);
  /**
   * Static representation of the [[roundingInPayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_IN_PAYMENT: EnumField<Currencies> = new EnumField('RoundingInPayment', Currencies);
  /**
   * Static representation of the [[maxIncomingAmtDiff]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_INCOMING_AMT_DIFF: NumberField<Currencies> = new NumberField('MaxIncomingAmtDiff', Currencies, 'Edm.Double');
  /**
   * Static representation of the [[maxOutgoingAmtDiff]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_OUTGOING_AMT_DIFF: NumberField<Currencies> = new NumberField('MaxOutgoingAmtDiff', Currencies, 'Edm.Double');
  /**
   * Static representation of the [[maxIncomingAmtDiffPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_INCOMING_AMT_DIFF_PERCENT: NumberField<Currencies> = new NumberField('MaxIncomingAmtDiffPercent', Currencies, 'Edm.Double');
  /**
   * Static representation of the [[maxOutgoingAmtDiffPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_OUTGOING_AMT_DIFF_PERCENT: NumberField<Currencies> = new NumberField('MaxOutgoingAmtDiffPercent', Currencies, 'Edm.Double');
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<Currencies, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', Currencies, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<Currencies, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', Currencies, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_PAYMENTS: OneToManyLink<Currencies, VendorPayments> = new OneToManyLink('VendorPayments', Currencies, VendorPayments);
  /**
   * Static representation of the one-to-many navigation property [[assetTransfer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_TRANSFER: OneToManyLink<Currencies, AssetTransfer> = new OneToManyLink('AssetTransfer', Currencies, AssetTransfer);
  /**
   * Static representation of the one-to-many navigation property [[assetRetirement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_RETIREMENT: OneToManyLink<Currencies, AssetRetirement> = new OneToManyLink('AssetRetirement', Currencies, AssetRetirement);
  /**
   * Static representation of the one-to-many navigation property [[assetCapitalizationCreditMemo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<Currencies, AssetCapitalizationCreditMemo> = new OneToManyLink('AssetCapitalizationCreditMemo', Currencies, AssetCapitalizationCreditMemo);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<Currencies, DeliveryNotes> = new OneToManyLink('DeliveryNotes', Currencies, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<Currencies, BusinessPartners> = new OneToManyLink('BusinessPartners', Currencies, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<Currencies, Quotations> = new OneToManyLink('Quotations', Currencies, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNTS: OneToManyLink<Currencies, ChartOfAccounts> = new OneToManyLink('ChartOfAccounts', Currencies, ChartOfAccounts);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<Currencies, InventoryGenExits> = new OneToManyLink('InventoryGenExits', Currencies, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<Currencies, PurchaseRequests> = new OneToManyLink('PurchaseRequests', Currencies, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<Currencies, ReturnRequest> = new OneToManyLink('ReturnRequest', Currencies, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENTS: OneToManyLink<Currencies, BlanketAgreements> = new OneToManyLink('BlanketAgreements', Currencies, BlanketAgreements);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<Currencies, PurchaseReturns> = new OneToManyLink('PurchaseReturns', Currencies, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<Currencies, Invoices> = new OneToManyLink('Invoices', Currencies, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[assetCapitalization]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CAPITALIZATION: OneToManyLink<Currencies, AssetCapitalization> = new OneToManyLink('AssetCapitalization', Currencies, AssetCapitalization);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<Currencies, CreditNotes> = new OneToManyLink('CreditNotes', Currencies, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<Currencies, Orders> = new OneToManyLink('Orders', Currencies, Orders);
  /**
   * Static representation of the one-to-many navigation property [[assetManualDepreciation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_MANUAL_DEPRECIATION: OneToManyLink<Currencies, AssetManualDepreciation> = new OneToManyLink('AssetManualDepreciation', Currencies, AssetManualDepreciation);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<Currencies, DownPayments> = new OneToManyLink('DownPayments', Currencies, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<Currencies, Drafts> = new OneToManyLink('Drafts', Currencies, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DRAFTS: OneToManyLink<Currencies, PaymentDrafts> = new OneToManyLink('PaymentDrafts', Currencies, PaymentDrafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<Currencies, Returns> = new OneToManyLink('Returns', Currencies, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<Currencies, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', Currencies, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<Currencies, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', Currencies, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<Currencies, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', Currencies, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<Currencies, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', Currencies, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<Currencies, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', Currencies, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<Currencies, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', Currencies, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<Currencies, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', Currencies, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<Currencies, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', Currencies, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<Currencies, PurchaseOrders> = new OneToManyLink('PurchaseOrders', Currencies, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODES: OneToManyLink<Currencies, WithholdingTaxCodes> = new OneToManyLink('WithholdingTaxCodes', Currencies, WithholdingTaxCodes);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<Currencies, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', Currencies, GoodsReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOMING_PAYMENTS: OneToManyLink<Currencies, IncomingPayments> = new OneToManyLink('IncomingPayments', Currencies, IncomingPayments);
  /**
   * Static representation of the one-to-many navigation property [[bankStatements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_STATEMENTS: OneToManyLink<Currencies, BankStatements> = new OneToManyLink('BankStatements', Currencies, BankStatements);
  /**
   * All fields of the Currencies entity.
   */
  export const _allFields: Array<StringField<Currencies> | EnumField<Currencies> | NumberField<Currencies> | OneToManyLink<Currencies, InventoryGenEntries> | OneToManyLink<Currencies, PurchaseQuotations> | OneToManyLink<Currencies, VendorPayments> | OneToManyLink<Currencies, AssetTransfer> | OneToManyLink<Currencies, AssetRetirement> | OneToManyLink<Currencies, AssetCapitalizationCreditMemo> | OneToManyLink<Currencies, DeliveryNotes> | OneToManyLink<Currencies, BusinessPartners> | OneToManyLink<Currencies, Quotations> | OneToManyLink<Currencies, ChartOfAccounts> | OneToManyLink<Currencies, InventoryGenExits> | OneToManyLink<Currencies, PurchaseRequests> | OneToManyLink<Currencies, ReturnRequest> | OneToManyLink<Currencies, BlanketAgreements> | OneToManyLink<Currencies, PurchaseReturns> | OneToManyLink<Currencies, Invoices> | OneToManyLink<Currencies, AssetCapitalization> | OneToManyLink<Currencies, CreditNotes> | OneToManyLink<Currencies, Orders> | OneToManyLink<Currencies, AssetManualDepreciation> | OneToManyLink<Currencies, DownPayments> | OneToManyLink<Currencies, Drafts> | OneToManyLink<Currencies, PaymentDrafts> | OneToManyLink<Currencies, Returns> | OneToManyLink<Currencies, CorrectionInvoiceReversal> | OneToManyLink<Currencies, CorrectionPurchaseInvoice> | OneToManyLink<Currencies, CorrectionPurchaseInvoiceReversal> | OneToManyLink<Currencies, PurchaseInvoices> | OneToManyLink<Currencies, PurchaseDeliveryNotes> | OneToManyLink<Currencies, CorrectionInvoice> | OneToManyLink<Currencies, PurchaseCreditNotes> | OneToManyLink<Currencies, PurchaseDownPayments> | OneToManyLink<Currencies, PurchaseOrders> | OneToManyLink<Currencies, WithholdingTaxCodes> | OneToManyLink<Currencies, GoodsReturnRequest> | OneToManyLink<Currencies, IncomingPayments> | OneToManyLink<Currencies, BankStatements>> = [
    Currencies.CODE,
    Currencies.NAME,
    Currencies.DOCUMENTS_CODE,
    Currencies.INTERNATIONAL_DESCRIPTION,
    Currencies.HUNDREDTH_NAME,
    Currencies.ENGLISH_NAME,
    Currencies.ENGLISH_HUNDREDTH_NAME,
    Currencies.PLURAL_INTERNATIONAL_DESCRIPTION,
    Currencies.PLURAL_HUNDREDTH_NAME,
    Currencies.PLURAL_ENGLISH_NAME,
    Currencies.PLURAL_ENGLISH_HUNDREDTH_NAME,
    Currencies.DECIMALS,
    Currencies.ROUNDING,
    Currencies.ROUNDING_IN_PAYMENT,
    Currencies.MAX_INCOMING_AMT_DIFF,
    Currencies.MAX_OUTGOING_AMT_DIFF,
    Currencies.MAX_INCOMING_AMT_DIFF_PERCENT,
    Currencies.MAX_OUTGOING_AMT_DIFF_PERCENT,
    Currencies.INVENTORY_GEN_ENTRIES,
    Currencies.PURCHASE_QUOTATIONS,
    Currencies.VENDOR_PAYMENTS,
    Currencies.ASSET_TRANSFER,
    Currencies.ASSET_RETIREMENT,
    Currencies.ASSET_CAPITALIZATION_CREDIT_MEMO,
    Currencies.DELIVERY_NOTES,
    Currencies.BUSINESS_PARTNERS,
    Currencies.QUOTATIONS,
    Currencies.CHART_OF_ACCOUNTS,
    Currencies.INVENTORY_GEN_EXITS,
    Currencies.PURCHASE_REQUESTS,
    Currencies.RETURN_REQUEST,
    Currencies.BLANKET_AGREEMENTS,
    Currencies.PURCHASE_RETURNS,
    Currencies.INVOICES,
    Currencies.ASSET_CAPITALIZATION,
    Currencies.CREDIT_NOTES,
    Currencies.ORDERS,
    Currencies.ASSET_MANUAL_DEPRECIATION,
    Currencies.DOWN_PAYMENTS,
    Currencies.DRAFTS,
    Currencies.PAYMENT_DRAFTS,
    Currencies.RETURNS,
    Currencies.CORRECTION_INVOICE_REVERSAL,
    Currencies.CORRECTION_PURCHASE_INVOICE,
    Currencies.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    Currencies.PURCHASE_INVOICES,
    Currencies.PURCHASE_DELIVERY_NOTES,
    Currencies.CORRECTION_INVOICE,
    Currencies.PURCHASE_CREDIT_NOTES,
    Currencies.PURCHASE_DOWN_PAYMENTS,
    Currencies.PURCHASE_ORDERS,
    Currencies.WITHHOLDING_TAX_CODES,
    Currencies.GOODS_RETURN_REQUEST,
    Currencies.INCOMING_PAYMENTS,
    Currencies.BANK_STATEMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Currencies> = new AllFields('*', Currencies);
  /**
   * All key fields of the Currencies entity.
   */
  export const _keyFields: Array<Field<Currencies>> = [Currencies.CODE];
  /**
   * Mapping of all key field names to the respective static field property Currencies.
   */
  export const _keys: { [keys: string]: Field<Currencies> } = Currencies._keyFields.reduce((acc: { [keys: string]: Field<Currencies> }, field: Field<Currencies>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
