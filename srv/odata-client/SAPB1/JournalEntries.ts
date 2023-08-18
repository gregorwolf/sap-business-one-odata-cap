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
import { JournalEntryLine } from './JournalEntryLine';
import { WithholdingTaxData } from './WithholdingTaxData';
import { ElectronicProtocol } from './ElectronicProtocol';
import type { JournalEntriesApi } from './JournalEntriesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { PrintStatusEnum } from './PrintStatusEnum';
import { TransTypesEnum } from './TransTypesEnum';
import { OperationCodeTypeEnum } from './OperationCodeTypeEnum';
import { ResidenceNumberTypeEnum } from './ResidenceNumberTypeEnum';
import { EcdPostingTypeEnum } from './EcdPostingTypeEnum';
import { FolioLetterEnum } from './FolioLetterEnum';
import { LandedCosts, LandedCostsType } from './LandedCosts';
import { StockTransfers, StockTransfersType } from './StockTransfers';
import { ChecksforPayment, ChecksforPaymentType } from './ChecksforPayment';
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
import { TransactionCodes, TransactionCodesType } from './TransactionCodes';
import { Projects, ProjectsType } from './Projects';
import {
  FactoringIndicators,
  FactoringIndicatorsType
} from './FactoringIndicators';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import {
  JournalEntryDocumentTypes,
  JournalEntryDocumentTypesType
} from './JournalEntryDocumentTypes';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { Attachments2, Attachments2Type } from './Attachments2';
import {
  InventoryGenEntries,
  InventoryGenEntriesType
} from './InventoryGenEntries';
import { AssetRevaluations, AssetRevaluationsType } from './AssetRevaluations';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import {
  MaterialRevaluation,
  MaterialRevaluationType
} from './MaterialRevaluation';
import { Drafts, DraftsType } from './Drafts';
import {
  BillOfExchangeTransactions,
  BillOfExchangeTransactionsType
} from './BillOfExchangeTransactions';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import {
  StockTransferDrafts,
  StockTransferDraftsType
} from './StockTransferDrafts';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import {
  PurchaseCreditNotes,
  PurchaseCreditNotesType
} from './PurchaseCreditNotes';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { DownPayments, DownPaymentsType } from './DownPayments';
import {
  PurchaseDownPayments,
  PurchaseDownPaymentsType
} from './PurchaseDownPayments';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Returns, ReturnsType } from './Returns';
import {
  GoodsReturnRequest,
  GoodsReturnRequestType
} from './GoodsReturnRequest';
import {
  CorrectionPurchaseInvoiceReversal,
  CorrectionPurchaseInvoiceReversalType
} from './CorrectionPurchaseInvoiceReversal';

/**
 * This class represents the entity "JournalEntries" of service "SAPB1".
 */
export class JournalEntries<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JournalEntriesType<T>
{
  /**
   * Technical entity name for JournalEntries.
   */
  static _entityName = 'JournalEntries';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the JournalEntries entity
   */
  static _keys = ['JdtNum'];
  /**
   * Reference Date.
   * @nullable
   */
  referenceDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Memo.
   * @nullable
   */
  memo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference.
   * @nullable
   */
  reference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Code.
   * @nullable
   */
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Jdt Num.
   */
  jdtNum!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Indicator.
   * @nullable
   */
  indicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Auto Storno.
   * @nullable
   */
  useAutoStorno?: BoYesNoEnum | null;
  /**
   * Storno Date.
   * @nullable
   */
  stornoDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Vat Date.
   * @nullable
   */
  vatDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Stamp Tax.
   * @nullable
   */
  stampTax?: BoYesNoEnum | null;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Auto Vat.
   * @nullable
   */
  autoVat?: BoYesNoEnum | null;
  /**
   * Number.
   * @nullable
   */
  number?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Folio Number.
   * @nullable
   */
  folioNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Folio Prefix String.
   * @nullable
   */
  folioPrefixString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report Eu.
   * @nullable
   */
  reportEu?: BoYesNoEnum | null;
  /**
   * Report 347.
   * @nullable
   */
  report347?: BoYesNoEnum | null;
  /**
   * Printed.
   * @nullable
   */
  printed?: PrintStatusEnum | null;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Original Journal.
   * @nullable
   */
  originalJournal?: TransTypesEnum | null;
  /**
   * Original.
   * @nullable
   */
  original?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Base Reference.
   * @nullable
   */
  baseReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block Dunning Letter.
   * @nullable
   */
  blockDunningLetter?: BoYesNoEnum | null;
  /**
   * Automatic Wt.
   * @nullable
   */
  automaticWt?: BoYesNoEnum | null;
  /**
   * Wt Sum.
   * @nullable
   */
  wtSum?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Sum Sc.
   * @nullable
   */
  wtSumSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Sum Fc.
   * @nullable
   */
  wtSumFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Signature Input Message.
   * @nullable
   */
  signatureInputMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Signature Digest.
   * @nullable
   */
  signatureDigest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certification Number.
   * @nullable
   */
  certificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Private Key Version.
   * @nullable
   */
  privateKeyVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Corisptivi.
   * @nullable
   */
  corisptivi?: BoYesNoEnum | null;
  /**
   * Reference 3.
   * @nullable
   */
  reference3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferred Tax.
   * @nullable
   */
  deferredTax?: BoYesNoEnum | null;
  /**
   * Blanket Agreement Number.
   * @nullable
   */
  blanketAgreementNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Operation Code.
   * @nullable
   */
  operationCode?: OperationCodeTypeEnum | null;
  /**
   * Residence Number Type.
   * @nullable
   */
  residenceNumberType?: ResidenceNumberTypeEnum | null;
  /**
   * Ecd Posting Type.
   * @nullable
   */
  ecdPostingType?: EcdPostingTypeEnum | null;
  /**
   * Exposed Trans Number.
   * @nullable
   */
  exposedTransNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Point Of Issue Code.
   * @nullable
   */
  pointOfIssueCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Letter.
   * @nullable
   */
  letter?: FolioLetterEnum | null;
  /**
   * Folio Number From.
   * @nullable
   */
  folioNumberFrom?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Folio Number To.
   * @nullable
   */
  folioNumberTo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Is Cost Center Transfer.
   * @nullable
   */
  isCostCenterTransfer?: BoYesNoEnum | null;
  /**
   * Reporting Section Control Statement Vat.
   * @nullable
   */
  reportingSectionControlStatementVat?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Exclude From Tax Report Control Statement Vat.
   * @nullable
   */
  excludeFromTaxReportControlStatementVat?: BoYesNoEnum | null;
  /**
   * Sap Passport.
   * @nullable
   */
  sapPassport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cig.
   * @nullable
   */
  cig?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cup.
   * @nullable
   */
  cup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Adjust Transaction.
   * @nullable
   */
  adjustTransaction?: BoYesNoEnum | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Ba Tcode.
   * @nullable
   */
  uBaTcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ba Ref.
   * @nullable
   */
  uBaRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Entry Lines.
   * @nullable
   */
  journalEntryLines?: JournalEntryLine<T>[] | null;
  /**
   * Withholding Tax Data Collection.
   * @nullable
   */
  withholdingTaxDataCollection?: WithholdingTaxData<T>[] | null;
  /**
   * Electronic Protocols.
   * @nullable
   */
  electronicProtocols?: ElectronicProtocol<T>[] | null;
  /**
   * One-to-many navigation property to the {@link LandedCosts} entity.
   */
  landedCosts!: LandedCosts<T>[];
  /**
   * One-to-many navigation property to the {@link StockTransfers} entity.
   */
  stockTransfers!: StockTransfers<T>[];
  /**
   * One-to-many navigation property to the {@link ChecksforPayment} entity.
   */
  checksforPayment!: ChecksforPayment<T>[];
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
   * One-to-one navigation property to the {@link TransactionCodes} entity.
   */
  transactionCode2?: TransactionCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link FactoringIndicators} entity.
   */
  factoringIndicator?: FactoringIndicators<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  warehouseLocation?: WarehouseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link JournalEntryDocumentTypes} entity.
   */
  journalEntryDocumentType?: JournalEntryDocumentTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link BlanketAgreements} entity.
   */
  blanketAgreement?: BlanketAgreements<T> | null;
  /**
   * One-to-one navigation property to the {@link Attachments2} entity.
   */
  attachments2?: Attachments2<T> | null;
  /**
   * One-to-many navigation property to the {@link InventoryGenEntries} entity.
   */
  inventoryGenEntries!: InventoryGenEntries<T>[];
  /**
   * One-to-many navigation property to the {@link AssetRevaluations} entity.
   */
  assetRevaluations!: AssetRevaluations<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenExits} entity.
   */
  inventoryGenExits!: InventoryGenExits<T>[];
  /**
   * One-to-many navigation property to the {@link MaterialRevaluation} entity.
   */
  materialRevaluation!: MaterialRevaluation<T>[];
  /**
   * One-to-many navigation property to the {@link Drafts} entity.
   */
  drafts!: Drafts<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfExchangeTransactions} entity.
   */
  billOfExchangeTransactions!: BillOfExchangeTransactions<T>[];
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
   * One-to-many navigation property to the {@link StockTransferDrafts} entity.
   */
  stockTransferDrafts!: StockTransferDrafts<T>[];
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
   * One-to-many navigation property to the {@link ProductionOrders} entity.
   */
  productionOrders!: ProductionOrders<T>[];
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

  constructor(readonly _entityApi: JournalEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface JournalEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  referenceDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  memo?: DeserializedType<T, 'Edm.String'> | null;
  reference?: DeserializedType<T, 'Edm.String'> | null;
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  projectCode?: DeserializedType<T, 'Edm.String'> | null;
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  jdtNum: DeserializedType<T, 'Edm.Int32'>;
  indicator?: DeserializedType<T, 'Edm.String'> | null;
  useAutoStorno?: BoYesNoEnum | null;
  stornoDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  vatDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  stampTax?: BoYesNoEnum | null;
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  autoVat?: BoYesNoEnum | null;
  number?: DeserializedType<T, 'Edm.Int32'> | null;
  folioNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  folioPrefixString?: DeserializedType<T, 'Edm.String'> | null;
  reportEu?: BoYesNoEnum | null;
  report347?: BoYesNoEnum | null;
  printed?: PrintStatusEnum | null;
  locationCode?: DeserializedType<T, 'Edm.Int32'> | null;
  originalJournal?: TransTypesEnum | null;
  original?: DeserializedType<T, 'Edm.Int32'> | null;
  baseReference?: DeserializedType<T, 'Edm.String'> | null;
  blockDunningLetter?: BoYesNoEnum | null;
  automaticWt?: BoYesNoEnum | null;
  wtSum?: DeserializedType<T, 'Edm.Double'> | null;
  wtSumSc?: DeserializedType<T, 'Edm.Double'> | null;
  wtSumFc?: DeserializedType<T, 'Edm.Double'> | null;
  signatureInputMessage?: DeserializedType<T, 'Edm.String'> | null;
  signatureDigest?: DeserializedType<T, 'Edm.String'> | null;
  certificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  privateKeyVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  corisptivi?: BoYesNoEnum | null;
  reference3?: DeserializedType<T, 'Edm.String'> | null;
  documentType?: DeserializedType<T, 'Edm.String'> | null;
  deferredTax?: BoYesNoEnum | null;
  blanketAgreementNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  operationCode?: OperationCodeTypeEnum | null;
  residenceNumberType?: ResidenceNumberTypeEnum | null;
  ecdPostingType?: EcdPostingTypeEnum | null;
  exposedTransNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  pointOfIssueCode?: DeserializedType<T, 'Edm.String'> | null;
  letter?: FolioLetterEnum | null;
  folioNumberFrom?: DeserializedType<T, 'Edm.Int32'> | null;
  folioNumberTo?: DeserializedType<T, 'Edm.Int32'> | null;
  isCostCenterTransfer?: BoYesNoEnum | null;
  reportingSectionControlStatementVat?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  excludeFromTaxReportControlStatementVat?: BoYesNoEnum | null;
  sapPassport?: DeserializedType<T, 'Edm.String'> | null;
  cig?: DeserializedType<T, 'Edm.Int32'> | null;
  cup?: DeserializedType<T, 'Edm.Int32'> | null;
  adjustTransaction?: BoYesNoEnum | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  uBaTcode?: DeserializedType<T, 'Edm.String'> | null;
  uBaRef?: DeserializedType<T, 'Edm.String'> | null;
  journalEntryLines?: JournalEntryLine<T>[] | null;
  withholdingTaxDataCollection?: WithholdingTaxData<T>[] | null;
  electronicProtocols?: ElectronicProtocol<T>[] | null;
  landedCosts: LandedCostsType<T>[];
  stockTransfers: StockTransfersType<T>[];
  checksforPayment: ChecksforPaymentType<T>[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType<T>[];
  correctionInvoice: CorrectionInvoiceType<T>[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType<T>[];
  transactionCode2?: TransactionCodesType<T> | null;
  project?: ProjectsType<T> | null;
  factoringIndicator?: FactoringIndicatorsType<T> | null;
  warehouseLocation?: WarehouseLocationsType<T> | null;
  journalEntryDocumentType?: JournalEntryDocumentTypesType<T> | null;
  blanketAgreement?: BlanketAgreementsType<T> | null;
  attachments2?: Attachments2Type<T> | null;
  inventoryGenEntries: InventoryGenEntriesType<T>[];
  assetRevaluations: AssetRevaluationsType<T>[];
  inventoryGenExits: InventoryGenExitsType<T>[];
  materialRevaluation: MaterialRevaluationType<T>[];
  drafts: DraftsType<T>[];
  billOfExchangeTransactions: BillOfExchangeTransactionsType<T>[];
  returnRequest: ReturnRequestType<T>[];
  deliveryNotes: DeliveryNotesType<T>[];
  purchaseInvoices: PurchaseInvoicesType<T>[];
  stockTransferDrafts: StockTransferDraftsType<T>[];
  invoices: InvoicesType<T>[];
  creditNotes: CreditNotesType<T>[];
  purchaseCreditNotes: PurchaseCreditNotesType<T>[];
  productionOrders: ProductionOrdersType<T>[];
  downPayments: DownPaymentsType<T>[];
  purchaseDownPayments: PurchaseDownPaymentsType<T>[];
  purchaseReturns: PurchaseReturnsType<T>[];
  returns: ReturnsType<T>[];
  goodsReturnRequest: GoodsReturnRequestType<T>[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType<T>[];
}
