/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JournalEntriesRequestBuilder } from './JournalEntriesRequestBuilder';
import { Moment } from 'moment';
import { JournalEntryLine, JournalEntryLineField } from './JournalEntryLine';
import { WithholdingTaxData, WithholdingTaxDataField } from './WithholdingTaxData';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "JournalEntries" of service "SAPB1".
 */
export class JournalEntries extends Entity implements JournalEntriesType {
  /**
   * Technical entity name for JournalEntries.
   */
  static _entityName = 'JournalEntries';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JournalEntries.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Reference Date.
   * @nullable
   */
  referenceDate?: Moment;
  /**
   * Memo.
   * @nullable
   */
  memo?: string;
  /**
   * Reference.
   * @nullable
   */
  reference?: string;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: string;
  /**
   * Transaction Code.
   * @nullable
   */
  transactionCode?: string;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: string;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: Moment;
  /**
   * Jdt Num.
   * @nullable
   */
  jdtNum?: number;
  /**
   * Indicator.
   * @nullable
   */
  indicator?: string;
  /**
   * Storno Date.
   * @nullable
   */
  stornoDate?: Moment;
  /**
   * Vat Date.
   * @nullable
   */
  vatDate?: Moment;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Number.
   * @nullable
   */
  number?: number;
  /**
   * Folio Number.
   * @nullable
   */
  folioNumber?: number;
  /**
   * Folio Prefix String.
   * @nullable
   */
  folioPrefixString?: string;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: number;
  /**
   * Original.
   * @nullable
   */
  original?: number;
  /**
   * Base Reference.
   * @nullable
   */
  baseReference?: string;
  /**
   * Wt Sum.
   * @nullable
   */
  wtSum?: number;
  /**
   * Wt Sum Sc.
   * @nullable
   */
  wtSumSc?: number;
  /**
   * Wt Sum Fc.
   * @nullable
   */
  wtSumFc?: number;
  /**
   * Signature Input Message.
   * @nullable
   */
  signatureInputMessage?: string;
  /**
   * Signature Digest.
   * @nullable
   */
  signatureDigest?: string;
  /**
   * Certification Number.
   * @nullable
   */
  certificationNumber?: string;
  /**
   * Private Key Version.
   * @nullable
   */
  privateKeyVersion?: number;
  /**
   * Reference 3.
   * @nullable
   */
  reference3?: string;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: string;
  /**
   * Blanket Agreement Number.
   * @nullable
   */
  blanketAgreementNumber?: number;
  /**
   * Exposed Trans Number.
   * @nullable
   */
  exposedTransNumber?: number;
  /**
   * Point Of Issue Code.
   * @nullable
   */
  pointOfIssueCode?: string;
  /**
   * Folio Number From.
   * @nullable
   */
  folioNumberFrom?: number;
  /**
   * Folio Number To.
   * @nullable
   */
  folioNumberTo?: number;
  /**
   * Reporting Section Control Statement Vat.
   * @nullable
   */
  reportingSectionControlStatementVat?: string;
  /**
   * Journal Entry Lines.
   * @nullable
   */
  journalEntryLines?: JournalEntryLine[];
  /**
   * Withholding Tax Data Collection.
   * @nullable
   */
  withholdingTaxDataCollection?: WithholdingTaxData[];
  /**
   * One-to-many navigation property to the [[LandedCosts]] entity.
   */
  landedCosts!: LandedCosts[];
  /**
   * One-to-many navigation property to the [[InventoryGenEntries]] entity.
   */
  inventoryGenEntries!: InventoryGenEntries[];
  /**
   * One-to-many navigation property to the [[ChecksforPayment]] entity.
   */
  checksforPayment!: ChecksforPayment[];
  /**
   * One-to-one navigation property to the [[TransactionCodes]] entity.
   */
  transactionCode2!: TransactionCodes;
  /**
   * One-to-one navigation property to the [[Projects]] entity.
   */
  project!: Projects;
  /**
   * One-to-one navigation property to the [[FactoringIndicators]] entity.
   */
  factoringIndicator!: FactoringIndicators;
  /**
   * One-to-one navigation property to the [[WarehouseLocations]] entity.
   */
  warehouseLocation!: WarehouseLocations;
  /**
   * One-to-one navigation property to the [[JournalEntryDocumentTypes]] entity.
   */
  journalEntryDocumentType!: JournalEntryDocumentTypes;
  /**
   * One-to-one navigation property to the [[BlanketAgreements]] entity.
   */
  blanketAgreement!: BlanketAgreements;
  /**
   * One-to-many navigation property to the [[ProductionOrders]] entity.
   */
  productionOrders!: ProductionOrders[];
  /**
   * One-to-many navigation property to the [[DeliveryNotes]] entity.
   */
  deliveryNotes!: DeliveryNotes[];
  /**
   * One-to-many navigation property to the [[InventoryGenExits]] entity.
   */
  inventoryGenExits!: InventoryGenExits[];
  /**
   * One-to-many navigation property to the [[ReturnRequest]] entity.
   */
  returnRequest!: ReturnRequest[];
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
   * One-to-many navigation property to the [[StockTransfers]] entity.
   */
  stockTransfers!: StockTransfers[];
  /**
   * One-to-many navigation property to the [[DownPayments]] entity.
   */
  downPayments!: DownPayments[];
  /**
   * One-to-many navigation property to the [[Drafts]] entity.
   */
  drafts!: Drafts[];
  /**
   * One-to-many navigation property to the [[StockTransferDrafts]] entity.
   */
  stockTransferDrafts!: StockTransferDrafts[];
  /**
   * One-to-many navigation property to the [[Returns]] entity.
   */
  returns!: Returns[];
  /**
   * One-to-many navigation property to the [[MaterialRevaluation]] entity.
   */
  materialRevaluation!: MaterialRevaluation[];
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
   * One-to-many navigation property to the [[BillOfExchangeTransactions]] entity.
   */
  billOfExchangeTransactions!: BillOfExchangeTransactions[];
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
   * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
   */
  goodsReturnRequest!: GoodsReturnRequest[];

  /**
   * Returns an entity builder to construct instances `JournalEntries`.
   * @returns A builder that constructs instances of entity type `JournalEntries`.
   */
  static builder(): EntityBuilderType<JournalEntries, JournalEntriesTypeForceMandatory> {
    return Entity.entityBuilder(JournalEntries);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JournalEntries` entity type.
   * @returns A `JournalEntries` request builder.
   */
  static requestBuilder(): JournalEntriesRequestBuilder {
    return new JournalEntriesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JournalEntries`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JournalEntries`.
   */
  static customField(fieldName: string): CustomField<JournalEntries> {
    return Entity.customFieldSelector(fieldName, JournalEntries);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { LandedCosts, LandedCostsType } from './LandedCosts';
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { ChecksforPayment, ChecksforPaymentType } from './ChecksforPayment';
import { TransactionCodes, TransactionCodesType } from './TransactionCodes';
import { Projects, ProjectsType } from './Projects';
import { FactoringIndicators, FactoringIndicatorsType } from './FactoringIndicators';
import { WarehouseLocations, WarehouseLocationsType } from './WarehouseLocations';
import { JournalEntryDocumentTypes, JournalEntryDocumentTypesType } from './JournalEntryDocumentTypes';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { StockTransfers, StockTransfersType } from './StockTransfers';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { StockTransferDrafts, StockTransferDraftsType } from './StockTransferDrafts';
import { Returns, ReturnsType } from './Returns';
import { MaterialRevaluation, MaterialRevaluationType } from './MaterialRevaluation';
import { CorrectionInvoiceReversal, CorrectionInvoiceReversalType } from './CorrectionInvoiceReversal';
import { CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType } from './CorrectionPurchaseInvoice';
import { CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType } from './CorrectionPurchaseInvoiceReversal';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { BillOfExchangeTransactions, BillOfExchangeTransactionsType } from './BillOfExchangeTransactions';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';

export interface JournalEntriesType {
  referenceDate?: Moment;
  memo?: string;
  reference?: string;
  reference2?: string;
  transactionCode?: string;
  projectCode?: string;
  taxDate?: Moment;
  jdtNum?: number;
  indicator?: string;
  stornoDate?: Moment;
  vatDate?: Moment;
  series?: number;
  dueDate?: Moment;
  number?: number;
  folioNumber?: number;
  folioPrefixString?: string;
  locationCode?: number;
  original?: number;
  baseReference?: string;
  wtSum?: number;
  wtSumSc?: number;
  wtSumFc?: number;
  signatureInputMessage?: string;
  signatureDigest?: string;
  certificationNumber?: string;
  privateKeyVersion?: number;
  reference3?: string;
  documentType?: string;
  blanketAgreementNumber?: number;
  exposedTransNumber?: number;
  pointOfIssueCode?: string;
  folioNumberFrom?: number;
  folioNumberTo?: number;
  reportingSectionControlStatementVat?: string;
  journalEntryLines?: JournalEntryLine[];
  withholdingTaxDataCollection?: WithholdingTaxData[];
  landedCosts: LandedCostsType[];
  inventoryGenEntries: InventoryGenEntriesType[];
  checksforPayment: ChecksforPaymentType[];
  transactionCode2: TransactionCodesType;
  project: ProjectsType;
  factoringIndicator: FactoringIndicatorsType;
  warehouseLocation: WarehouseLocationsType;
  journalEntryDocumentType: JournalEntryDocumentTypesType;
  blanketAgreement: BlanketAgreementsType;
  productionOrders: ProductionOrdersType[];
  deliveryNotes: DeliveryNotesType[];
  inventoryGenExits: InventoryGenExitsType[];
  returnRequest: ReturnRequestType[];
  purchaseReturns: PurchaseReturnsType[];
  invoices: InvoicesType[];
  creditNotes: CreditNotesType[];
  stockTransfers: StockTransfersType[];
  downPayments: DownPaymentsType[];
  drafts: DraftsType[];
  stockTransferDrafts: StockTransferDraftsType[];
  returns: ReturnsType[];
  materialRevaluation: MaterialRevaluationType[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
  purchaseInvoices: PurchaseInvoicesType[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
  billOfExchangeTransactions: BillOfExchangeTransactionsType[];
  correctionInvoice: CorrectionInvoiceType[];
  purchaseCreditNotes: PurchaseCreditNotesType[];
  purchaseDownPayments: PurchaseDownPaymentsType[];
  goodsReturnRequest: GoodsReturnRequestType[];
}

export interface JournalEntriesTypeForceMandatory {
  referenceDate: Moment;
  memo: string;
  reference: string;
  reference2: string;
  transactionCode: string;
  projectCode: string;
  taxDate: Moment;
  jdtNum: number;
  indicator: string;
  stornoDate: Moment;
  vatDate: Moment;
  series: number;
  dueDate: Moment;
  number: number;
  folioNumber: number;
  folioPrefixString: string;
  locationCode: number;
  original: number;
  baseReference: string;
  wtSum: number;
  wtSumSc: number;
  wtSumFc: number;
  signatureInputMessage: string;
  signatureDigest: string;
  certificationNumber: string;
  privateKeyVersion: number;
  reference3: string;
  documentType: string;
  blanketAgreementNumber: number;
  exposedTransNumber: number;
  pointOfIssueCode: string;
  folioNumberFrom: number;
  folioNumberTo: number;
  reportingSectionControlStatementVat: string;
  journalEntryLines: JournalEntryLine[];
  withholdingTaxDataCollection: WithholdingTaxData[];
  landedCosts: LandedCostsType[];
  inventoryGenEntries: InventoryGenEntriesType[];
  checksforPayment: ChecksforPaymentType[];
  transactionCode2: TransactionCodesType;
  project: ProjectsType;
  factoringIndicator: FactoringIndicatorsType;
  warehouseLocation: WarehouseLocationsType;
  journalEntryDocumentType: JournalEntryDocumentTypesType;
  blanketAgreement: BlanketAgreementsType;
  productionOrders: ProductionOrdersType[];
  deliveryNotes: DeliveryNotesType[];
  inventoryGenExits: InventoryGenExitsType[];
  returnRequest: ReturnRequestType[];
  purchaseReturns: PurchaseReturnsType[];
  invoices: InvoicesType[];
  creditNotes: CreditNotesType[];
  stockTransfers: StockTransfersType[];
  downPayments: DownPaymentsType[];
  drafts: DraftsType[];
  stockTransferDrafts: StockTransferDraftsType[];
  returns: ReturnsType[];
  materialRevaluation: MaterialRevaluationType[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
  purchaseInvoices: PurchaseInvoicesType[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
  billOfExchangeTransactions: BillOfExchangeTransactionsType[];
  correctionInvoice: CorrectionInvoiceType[];
  purchaseCreditNotes: PurchaseCreditNotesType[];
  purchaseDownPayments: PurchaseDownPaymentsType[];
  goodsReturnRequest: GoodsReturnRequestType[];
}

export namespace JournalEntries {
  /**
   * Static representation of the [[referenceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_DATE: DateField<JournalEntries> = new DateField('ReferenceDate', JournalEntries, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[memo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MEMO: StringField<JournalEntries> = new StringField('Memo', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[reference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE: StringField<JournalEntries> = new StringField('Reference', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<JournalEntries> = new StringField('Reference2', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[transactionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CODE: StringField<JournalEntries> = new StringField('TransactionCode', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_CODE: StringField<JournalEntries> = new StringField('ProjectCode', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<JournalEntries> = new DateField('TaxDate', JournalEntries, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[jdtNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JDT_NUM: NumberField<JournalEntries> = new NumberField('JdtNum', JournalEntries, 'Edm.Int32');
  /**
   * Static representation of the [[indicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDICATOR: StringField<JournalEntries> = new StringField('Indicator', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[stornoDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STORNO_DATE: DateField<JournalEntries> = new DateField('StornoDate', JournalEntries, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DATE: DateField<JournalEntries> = new DateField('VatDate', JournalEntries, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<JournalEntries> = new NumberField('Series', JournalEntries, 'Edm.Int32');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<JournalEntries> = new DateField('DueDate', JournalEntries, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[number]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER: NumberField<JournalEntries> = new NumberField('Number', JournalEntries, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER: NumberField<JournalEntries> = new NumberField('FolioNumber', JournalEntries, 'Edm.Int32');
  /**
   * Static representation of the [[folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_PREFIX_STRING: StringField<JournalEntries> = new StringField('FolioPrefixString', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[locationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_CODE: NumberField<JournalEntries> = new NumberField('LocationCode', JournalEntries, 'Edm.Int32');
  /**
   * Static representation of the [[original]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL: NumberField<JournalEntries> = new NumberField('Original', JournalEntries, 'Edm.Int32');
  /**
   * Static representation of the [[baseReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_REFERENCE: StringField<JournalEntries> = new StringField('BaseReference', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[wtSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_SUM: NumberField<JournalEntries> = new NumberField('WTSum', JournalEntries, 'Edm.Double');
  /**
   * Static representation of the [[wtSumSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_SUM_SC: NumberField<JournalEntries> = new NumberField('WTSumSC', JournalEntries, 'Edm.Double');
  /**
   * Static representation of the [[wtSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_SUM_FC: NumberField<JournalEntries> = new NumberField('WTSumFC', JournalEntries, 'Edm.Double');
  /**
   * Static representation of the [[signatureInputMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_INPUT_MESSAGE: StringField<JournalEntries> = new StringField('SignatureInputMessage', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[signatureDigest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_DIGEST: StringField<JournalEntries> = new StringField('SignatureDigest', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[certificationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_NUMBER: StringField<JournalEntries> = new StringField('CertificationNumber', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[privateKeyVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVATE_KEY_VERSION: NumberField<JournalEntries> = new NumberField('PrivateKeyVersion', JournalEntries, 'Edm.Int32');
  /**
   * Static representation of the [[reference3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_3: StringField<JournalEntries> = new StringField('Reference3', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[documentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TYPE: StringField<JournalEntries> = new StringField('DocumentType', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[blanketAgreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT_NUMBER: NumberField<JournalEntries> = new NumberField('BlanketAgreementNumber', JournalEntries, 'Edm.Int32');
  /**
   * Static representation of the [[exposedTransNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPOSED_TRANS_NUMBER: NumberField<JournalEntries> = new NumberField('ExposedTransNumber', JournalEntries, 'Edm.Int32');
  /**
   * Static representation of the [[pointOfIssueCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POINT_OF_ISSUE_CODE: StringField<JournalEntries> = new StringField('PointOfIssueCode', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[folioNumberFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_FROM: NumberField<JournalEntries> = new NumberField('FolioNumberFrom', JournalEntries, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumberTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_TO: NumberField<JournalEntries> = new NumberField('FolioNumberTo', JournalEntries, 'Edm.Int32');
  /**
   * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORTING_SECTION_CONTROL_STATEMENT_VAT: StringField<JournalEntries> = new StringField('ReportingSectionControlStatementVAT', JournalEntries, 'Edm.String');
  /**
   * Static representation of the [[journalEntryLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY_LINES: CollectionField<JournalEntries> = new CollectionField('JournalEntryLines', JournalEntries, new JournalEntryLineField('', JournalEntries));
  /**
   * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<JournalEntries> = new CollectionField('WithholdingTaxDataCollection', JournalEntries, new WithholdingTaxDataField('', JournalEntries));
  /**
   * Static representation of the one-to-many navigation property [[landedCosts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANDED_COSTS: OneToManyLink<JournalEntries, LandedCosts> = new OneToManyLink('LandedCosts', JournalEntries, LandedCosts);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<JournalEntries, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', JournalEntries, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[checksforPayment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECKSFOR_PAYMENT: OneToManyLink<JournalEntries, ChecksforPayment> = new OneToManyLink('ChecksforPayment', JournalEntries, ChecksforPayment);
  /**
   * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CODE_2: OneToOneLink<JournalEntries, TransactionCodes> = new OneToOneLink('TransactionCode2', JournalEntries, TransactionCodes);
  /**
   * Static representation of the one-to-one navigation property [[project]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: OneToOneLink<JournalEntries, Projects> = new OneToOneLink('Project', JournalEntries, Projects);
  /**
   * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTORING_INDICATOR: OneToOneLink<JournalEntries, FactoringIndicators> = new OneToOneLink('FactoringIndicator', JournalEntries, FactoringIndicators);
  /**
   * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_LOCATION: OneToOneLink<JournalEntries, WarehouseLocations> = new OneToOneLink('WarehouseLocation', JournalEntries, WarehouseLocations);
  /**
   * Static representation of the one-to-one navigation property [[journalEntryDocumentType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY_DOCUMENT_TYPE: OneToOneLink<JournalEntries, JournalEntryDocumentTypes> = new OneToOneLink('JournalEntryDocumentType', JournalEntries, JournalEntryDocumentTypes);
  /**
   * Static representation of the one-to-one navigation property [[blanketAgreement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT: OneToOneLink<JournalEntries, BlanketAgreements> = new OneToOneLink('BlanketAgreement', JournalEntries, BlanketAgreements);
  /**
   * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCTION_ORDERS: OneToManyLink<JournalEntries, ProductionOrders> = new OneToManyLink('ProductionOrders', JournalEntries, ProductionOrders);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<JournalEntries, DeliveryNotes> = new OneToManyLink('DeliveryNotes', JournalEntries, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<JournalEntries, InventoryGenExits> = new OneToManyLink('InventoryGenExits', JournalEntries, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<JournalEntries, ReturnRequest> = new OneToManyLink('ReturnRequest', JournalEntries, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<JournalEntries, PurchaseReturns> = new OneToManyLink('PurchaseReturns', JournalEntries, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<JournalEntries, Invoices> = new OneToManyLink('Invoices', JournalEntries, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<JournalEntries, CreditNotes> = new OneToManyLink('CreditNotes', JournalEntries, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFERS: OneToManyLink<JournalEntries, StockTransfers> = new OneToManyLink('StockTransfers', JournalEntries, StockTransfers);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<JournalEntries, DownPayments> = new OneToManyLink('DownPayments', JournalEntries, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<JournalEntries, Drafts> = new OneToManyLink('Drafts', JournalEntries, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_DRAFTS: OneToManyLink<JournalEntries, StockTransferDrafts> = new OneToManyLink('StockTransferDrafts', JournalEntries, StockTransferDrafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<JournalEntries, Returns> = new OneToManyLink('Returns', JournalEntries, Returns);
  /**
   * Static representation of the one-to-many navigation property [[materialRevaluation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL_REVALUATION: OneToManyLink<JournalEntries, MaterialRevaluation> = new OneToManyLink('MaterialRevaluation', JournalEntries, MaterialRevaluation);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<JournalEntries, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', JournalEntries, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<JournalEntries, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', JournalEntries, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<JournalEntries, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', JournalEntries, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<JournalEntries, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', JournalEntries, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<JournalEntries, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', JournalEntries, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[billOfExchangeTransactions]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_TRANSACTIONS: OneToManyLink<JournalEntries, BillOfExchangeTransactions> = new OneToManyLink('BillOfExchangeTransactions', JournalEntries, BillOfExchangeTransactions);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<JournalEntries, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', JournalEntries, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<JournalEntries, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', JournalEntries, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<JournalEntries, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', JournalEntries, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<JournalEntries, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', JournalEntries, GoodsReturnRequest);
  /**
   * All fields of the JournalEntries entity.
   */
  export const _allFields: Array<DateField<JournalEntries> | StringField<JournalEntries> | NumberField<JournalEntries> | CollectionField<JournalEntries> | OneToManyLink<JournalEntries, LandedCosts> | OneToManyLink<JournalEntries, InventoryGenEntries> | OneToManyLink<JournalEntries, ChecksforPayment> | OneToOneLink<JournalEntries, TransactionCodes> | OneToOneLink<JournalEntries, Projects> | OneToOneLink<JournalEntries, FactoringIndicators> | OneToOneLink<JournalEntries, WarehouseLocations> | OneToOneLink<JournalEntries, JournalEntryDocumentTypes> | OneToOneLink<JournalEntries, BlanketAgreements> | OneToManyLink<JournalEntries, ProductionOrders> | OneToManyLink<JournalEntries, DeliveryNotes> | OneToManyLink<JournalEntries, InventoryGenExits> | OneToManyLink<JournalEntries, ReturnRequest> | OneToManyLink<JournalEntries, PurchaseReturns> | OneToManyLink<JournalEntries, Invoices> | OneToManyLink<JournalEntries, CreditNotes> | OneToManyLink<JournalEntries, StockTransfers> | OneToManyLink<JournalEntries, DownPayments> | OneToManyLink<JournalEntries, Drafts> | OneToManyLink<JournalEntries, StockTransferDrafts> | OneToManyLink<JournalEntries, Returns> | OneToManyLink<JournalEntries, MaterialRevaluation> | OneToManyLink<JournalEntries, CorrectionInvoiceReversal> | OneToManyLink<JournalEntries, CorrectionPurchaseInvoice> | OneToManyLink<JournalEntries, CorrectionPurchaseInvoiceReversal> | OneToManyLink<JournalEntries, PurchaseInvoices> | OneToManyLink<JournalEntries, PurchaseDeliveryNotes> | OneToManyLink<JournalEntries, BillOfExchangeTransactions> | OneToManyLink<JournalEntries, CorrectionInvoice> | OneToManyLink<JournalEntries, PurchaseCreditNotes> | OneToManyLink<JournalEntries, PurchaseDownPayments> | OneToManyLink<JournalEntries, GoodsReturnRequest>> = [
    JournalEntries.REFERENCE_DATE,
    JournalEntries.MEMO,
    JournalEntries.REFERENCE,
    JournalEntries.REFERENCE_2,
    JournalEntries.TRANSACTION_CODE,
    JournalEntries.PROJECT_CODE,
    JournalEntries.TAX_DATE,
    JournalEntries.JDT_NUM,
    JournalEntries.INDICATOR,
    JournalEntries.STORNO_DATE,
    JournalEntries.VAT_DATE,
    JournalEntries.SERIES,
    JournalEntries.DUE_DATE,
    JournalEntries.NUMBER,
    JournalEntries.FOLIO_NUMBER,
    JournalEntries.FOLIO_PREFIX_STRING,
    JournalEntries.LOCATION_CODE,
    JournalEntries.ORIGINAL,
    JournalEntries.BASE_REFERENCE,
    JournalEntries.WT_SUM,
    JournalEntries.WT_SUM_SC,
    JournalEntries.WT_SUM_FC,
    JournalEntries.SIGNATURE_INPUT_MESSAGE,
    JournalEntries.SIGNATURE_DIGEST,
    JournalEntries.CERTIFICATION_NUMBER,
    JournalEntries.PRIVATE_KEY_VERSION,
    JournalEntries.REFERENCE_3,
    JournalEntries.DOCUMENT_TYPE,
    JournalEntries.BLANKET_AGREEMENT_NUMBER,
    JournalEntries.EXPOSED_TRANS_NUMBER,
    JournalEntries.POINT_OF_ISSUE_CODE,
    JournalEntries.FOLIO_NUMBER_FROM,
    JournalEntries.FOLIO_NUMBER_TO,
    JournalEntries.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
    JournalEntries.JOURNAL_ENTRY_LINES,
    JournalEntries.WITHHOLDING_TAX_DATA_COLLECTION,
    JournalEntries.LANDED_COSTS,
    JournalEntries.INVENTORY_GEN_ENTRIES,
    JournalEntries.CHECKSFOR_PAYMENT,
    JournalEntries.TRANSACTION_CODE_2,
    JournalEntries.PROJECT,
    JournalEntries.FACTORING_INDICATOR,
    JournalEntries.WAREHOUSE_LOCATION,
    JournalEntries.JOURNAL_ENTRY_DOCUMENT_TYPE,
    JournalEntries.BLANKET_AGREEMENT,
    JournalEntries.PRODUCTION_ORDERS,
    JournalEntries.DELIVERY_NOTES,
    JournalEntries.INVENTORY_GEN_EXITS,
    JournalEntries.RETURN_REQUEST,
    JournalEntries.PURCHASE_RETURNS,
    JournalEntries.INVOICES,
    JournalEntries.CREDIT_NOTES,
    JournalEntries.STOCK_TRANSFERS,
    JournalEntries.DOWN_PAYMENTS,
    JournalEntries.DRAFTS,
    JournalEntries.STOCK_TRANSFER_DRAFTS,
    JournalEntries.RETURNS,
    JournalEntries.MATERIAL_REVALUATION,
    JournalEntries.CORRECTION_INVOICE_REVERSAL,
    JournalEntries.CORRECTION_PURCHASE_INVOICE,
    JournalEntries.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    JournalEntries.PURCHASE_INVOICES,
    JournalEntries.PURCHASE_DELIVERY_NOTES,
    JournalEntries.BILL_OF_EXCHANGE_TRANSACTIONS,
    JournalEntries.CORRECTION_INVOICE,
    JournalEntries.PURCHASE_CREDIT_NOTES,
    JournalEntries.PURCHASE_DOWN_PAYMENTS,
    JournalEntries.GOODS_RETURN_REQUEST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JournalEntries> = new AllFields('*', JournalEntries);
  /**
   * All key fields of the JournalEntries entity.
   */
  export const _keyFields: Array<Field<JournalEntries>> = [JournalEntries.JDT_NUM];
  /**
   * Mapping of all key field names to the respective static field property JournalEntries.
   */
  export const _keys: { [keys: string]: Field<JournalEntries> } = JournalEntries._keyFields.reduce((acc: { [keys: string]: Field<JournalEntries> }, field: Field<JournalEntries>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
