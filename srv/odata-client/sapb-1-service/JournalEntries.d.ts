import { JournalEntriesRequestBuilder } from './JournalEntriesRequestBuilder';
import { Moment } from 'moment';
import { JournalEntryLine } from './JournalEntryLine';
import { WithholdingTaxData } from './WithholdingTaxData';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "JournalEntries" of service "SAPB1".
 */
export declare class JournalEntries extends Entity implements JournalEntriesType {
    /**
     * Technical entity name for JournalEntries.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JournalEntries.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    landedCosts: LandedCosts[];
    /**
     * One-to-many navigation property to the [[InventoryGenEntries]] entity.
     */
    inventoryGenEntries: InventoryGenEntries[];
    /**
     * One-to-many navigation property to the [[ChecksforPayment]] entity.
     */
    checksforPayment: ChecksforPayment[];
    /**
     * One-to-one navigation property to the [[TransactionCodes]] entity.
     */
    transactionCode2: TransactionCodes;
    /**
     * One-to-one navigation property to the [[Projects]] entity.
     */
    project: Projects;
    /**
     * One-to-one navigation property to the [[FactoringIndicators]] entity.
     */
    factoringIndicator: FactoringIndicators;
    /**
     * One-to-one navigation property to the [[WarehouseLocations]] entity.
     */
    warehouseLocation: WarehouseLocations;
    /**
     * One-to-one navigation property to the [[JournalEntryDocumentTypes]] entity.
     */
    journalEntryDocumentType: JournalEntryDocumentTypes;
    /**
     * One-to-one navigation property to the [[BlanketAgreements]] entity.
     */
    blanketAgreement: BlanketAgreements;
    /**
     * One-to-many navigation property to the [[ProductionOrders]] entity.
     */
    productionOrders: ProductionOrders[];
    /**
     * One-to-many navigation property to the [[DeliveryNotes]] entity.
     */
    deliveryNotes: DeliveryNotes[];
    /**
     * One-to-many navigation property to the [[InventoryGenExits]] entity.
     */
    inventoryGenExits: InventoryGenExits[];
    /**
     * One-to-many navigation property to the [[ReturnRequest]] entity.
     */
    returnRequest: ReturnRequest[];
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
     * One-to-many navigation property to the [[StockTransfers]] entity.
     */
    stockTransfers: StockTransfers[];
    /**
     * One-to-many navigation property to the [[DownPayments]] entity.
     */
    downPayments: DownPayments[];
    /**
     * One-to-many navigation property to the [[Drafts]] entity.
     */
    drafts: Drafts[];
    /**
     * One-to-many navigation property to the [[StockTransferDrafts]] entity.
     */
    stockTransferDrafts: StockTransferDrafts[];
    /**
     * One-to-many navigation property to the [[Returns]] entity.
     */
    returns: Returns[];
    /**
     * One-to-many navigation property to the [[MaterialRevaluation]] entity.
     */
    materialRevaluation: MaterialRevaluation[];
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
     * One-to-many navigation property to the [[BillOfExchangeTransactions]] entity.
     */
    billOfExchangeTransactions: BillOfExchangeTransactions[];
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
     * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
     */
    goodsReturnRequest: GoodsReturnRequest[];
    /**
     * Returns an entity builder to construct instances `JournalEntries`.
     * @returns A builder that constructs instances of entity type `JournalEntries`.
     */
    static builder(): EntityBuilderType<JournalEntries, JournalEntriesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JournalEntries` entity type.
     * @returns A `JournalEntries` request builder.
     */
    static requestBuilder(): JournalEntriesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JournalEntries`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JournalEntries`.
     */
    static customField(fieldName: string): CustomField<JournalEntries>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace JournalEntries {
    /**
     * Static representation of the [[referenceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_DATE: DateField<JournalEntries>;
    /**
     * Static representation of the [[memo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MEMO: StringField<JournalEntries>;
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE: StringField<JournalEntries>;
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_2: StringField<JournalEntries>;
    /**
     * Static representation of the [[transactionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_CODE: StringField<JournalEntries>;
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_CODE: StringField<JournalEntries>;
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DATE: DateField<JournalEntries>;
    /**
     * Static representation of the [[jdtNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JDT_NUM: NumberField<JournalEntries>;
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDICATOR: StringField<JournalEntries>;
    /**
     * Static representation of the [[stornoDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STORNO_DATE: DateField<JournalEntries>;
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_DATE: DateField<JournalEntries>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<JournalEntries>;
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE_DATE: DateField<JournalEntries>;
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER: NumberField<JournalEntries>;
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_NUMBER: NumberField<JournalEntries>;
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_PREFIX_STRING: StringField<JournalEntries>;
    /**
     * Static representation of the [[locationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_CODE: NumberField<JournalEntries>;
    /**
     * Static representation of the [[original]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL: NumberField<JournalEntries>;
    /**
     * Static representation of the [[baseReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_REFERENCE: StringField<JournalEntries>;
    /**
     * Static representation of the [[wtSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_SUM: NumberField<JournalEntries>;
    /**
     * Static representation of the [[wtSumSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_SUM_SC: NumberField<JournalEntries>;
    /**
     * Static representation of the [[wtSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_SUM_FC: NumberField<JournalEntries>;
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIGNATURE_INPUT_MESSAGE: StringField<JournalEntries>;
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIGNATURE_DIGEST: StringField<JournalEntries>;
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CERTIFICATION_NUMBER: StringField<JournalEntries>;
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIVATE_KEY_VERSION: NumberField<JournalEntries>;
    /**
     * Static representation of the [[reference3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_3: StringField<JournalEntries>;
    /**
     * Static representation of the [[documentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TYPE: StringField<JournalEntries>;
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENT_NUMBER: NumberField<JournalEntries>;
    /**
     * Static representation of the [[exposedTransNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPOSED_TRANS_NUMBER: NumberField<JournalEntries>;
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POINT_OF_ISSUE_CODE: StringField<JournalEntries>;
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_NUMBER_FROM: NumberField<JournalEntries>;
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_NUMBER_TO: NumberField<JournalEntries>;
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPORTING_SECTION_CONTROL_STATEMENT_VAT: StringField<JournalEntries>;
    /**
     * Static representation of the [[journalEntryLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRY_LINES: CollectionField<JournalEntries>;
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<JournalEntries>;
    /**
     * Static representation of the one-to-many navigation property [[landedCosts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANDED_COSTS: OneToManyLink<JournalEntries, LandedCosts>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_ENTRIES: OneToManyLink<JournalEntries, InventoryGenEntries>;
    /**
     * Static representation of the one-to-many navigation property [[checksforPayment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHECKSFOR_PAYMENT: OneToManyLink<JournalEntries, ChecksforPayment>;
    /**
     * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_CODE_2: OneToOneLink<JournalEntries, TransactionCodes>;
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT: OneToOneLink<JournalEntries, Projects>;
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FACTORING_INDICATOR: OneToOneLink<JournalEntries, FactoringIndicators>;
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_LOCATION: OneToOneLink<JournalEntries, WarehouseLocations>;
    /**
     * Static representation of the one-to-one navigation property [[journalEntryDocumentType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRY_DOCUMENT_TYPE: OneToOneLink<JournalEntries, JournalEntryDocumentTypes>;
    /**
     * Static representation of the one-to-one navigation property [[blanketAgreement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENT: OneToOneLink<JournalEntries, BlanketAgreements>;
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDERS: OneToManyLink<JournalEntries, ProductionOrders>;
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_NOTES: OneToManyLink<JournalEntries, DeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_EXITS: OneToManyLink<JournalEntries, InventoryGenExits>;
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURN_REQUEST: OneToManyLink<JournalEntries, ReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_RETURNS: OneToManyLink<JournalEntries, PurchaseReturns>;
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICES: OneToManyLink<JournalEntries, Invoices>;
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_NOTES: OneToManyLink<JournalEntries, CreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFERS: OneToManyLink<JournalEntries, StockTransfers>;
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENTS: OneToManyLink<JournalEntries, DownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFTS: OneToManyLink<JournalEntries, Drafts>;
    /**
     * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFER_DRAFTS: OneToManyLink<JournalEntries, StockTransferDrafts>;
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNS: OneToManyLink<JournalEntries, Returns>;
    /**
     * Static representation of the one-to-many navigation property [[materialRevaluation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL_REVALUATION: OneToManyLink<JournalEntries, MaterialRevaluation>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE_REVERSAL: OneToManyLink<JournalEntries, CorrectionInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE: OneToManyLink<JournalEntries, CorrectionPurchaseInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<JournalEntries, CorrectionPurchaseInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_INVOICES: OneToManyLink<JournalEntries, PurchaseInvoices>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DELIVERY_NOTES: OneToManyLink<JournalEntries, PurchaseDeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[billOfExchangeTransactions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_EXCHANGE_TRANSACTIONS: OneToManyLink<JournalEntries, BillOfExchangeTransactions>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE: OneToManyLink<JournalEntries, CorrectionInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_NOTES: OneToManyLink<JournalEntries, PurchaseCreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DOWN_PAYMENTS: OneToManyLink<JournalEntries, PurchaseDownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_RETURN_REQUEST: OneToManyLink<JournalEntries, GoodsReturnRequest>;
    /**
     * All fields of the JournalEntries entity.
     */
    const _allFields: Array<DateField<JournalEntries> | StringField<JournalEntries> | NumberField<JournalEntries> | CollectionField<JournalEntries> | OneToManyLink<JournalEntries, LandedCosts> | OneToManyLink<JournalEntries, InventoryGenEntries> | OneToManyLink<JournalEntries, ChecksforPayment> | OneToOneLink<JournalEntries, TransactionCodes> | OneToOneLink<JournalEntries, Projects> | OneToOneLink<JournalEntries, FactoringIndicators> | OneToOneLink<JournalEntries, WarehouseLocations> | OneToOneLink<JournalEntries, JournalEntryDocumentTypes> | OneToOneLink<JournalEntries, BlanketAgreements> | OneToManyLink<JournalEntries, ProductionOrders> | OneToManyLink<JournalEntries, DeliveryNotes> | OneToManyLink<JournalEntries, InventoryGenExits> | OneToManyLink<JournalEntries, ReturnRequest> | OneToManyLink<JournalEntries, PurchaseReturns> | OneToManyLink<JournalEntries, Invoices> | OneToManyLink<JournalEntries, CreditNotes> | OneToManyLink<JournalEntries, StockTransfers> | OneToManyLink<JournalEntries, DownPayments> | OneToManyLink<JournalEntries, Drafts> | OneToManyLink<JournalEntries, StockTransferDrafts> | OneToManyLink<JournalEntries, Returns> | OneToManyLink<JournalEntries, MaterialRevaluation> | OneToManyLink<JournalEntries, CorrectionInvoiceReversal> | OneToManyLink<JournalEntries, CorrectionPurchaseInvoice> | OneToManyLink<JournalEntries, CorrectionPurchaseInvoiceReversal> | OneToManyLink<JournalEntries, PurchaseInvoices> | OneToManyLink<JournalEntries, PurchaseDeliveryNotes> | OneToManyLink<JournalEntries, BillOfExchangeTransactions> | OneToManyLink<JournalEntries, CorrectionInvoice> | OneToManyLink<JournalEntries, PurchaseCreditNotes> | OneToManyLink<JournalEntries, PurchaseDownPayments> | OneToManyLink<JournalEntries, GoodsReturnRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JournalEntries>;
    /**
     * All key fields of the JournalEntries entity.
     */
    const _keyFields: Array<Field<JournalEntries>>;
    /**
     * Mapping of all key field names to the respective static field property JournalEntries.
     */
    const _keys: {
        [keys: string]: Field<JournalEntries>;
    };
}
//# sourceMappingURL=JournalEntries.d.ts.map