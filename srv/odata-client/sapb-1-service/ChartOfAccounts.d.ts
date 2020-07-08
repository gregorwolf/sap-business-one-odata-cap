import { ChartOfAccountsRequestBuilder } from './ChartOfAccountsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ChartOfAccounts" of service "SAPB1".
 */
export declare class ChartOfAccounts extends Entity implements ChartOfAccountsType {
    /**
     * Technical entity name for ChartOfAccounts.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ChartOfAccounts.
     */
    static _serviceName: string;
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
     * Balance.
     * @nullable
     */
    balance?: number;
    /**
     * Account Level.
     * @nullable
     */
    accountLevel?: number;
    /**
     * Data Export Code.
     * @nullable
     */
    dataExportCode?: string;
    /**
     * Father Account Key.
     * @nullable
     */
    fatherAccountKey?: string;
    /**
     * External Code.
     * @nullable
     */
    externalCode?: string;
    /**
     * External Recon No.
     * @nullable
     */
    externalReconNo?: number;
    /**
     * Internal Recon No.
     * @nullable
     */
    internalReconNo?: number;
    /**
     * Acct Currency.
     * @nullable
     */
    acctCurrency?: string;
    /**
     * Balance Syscurr.
     * @nullable
     */
    balanceSyscurr?: number;
    /**
     * Balance Frgn Curr.
     * @nullable
     */
    balanceFrgnCurr?: number;
    /**
     * Foreign Name.
     * @nullable
     */
    foreignName?: string;
    /**
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * Project Code.
     * @nullable
     */
    projectCode?: string;
    /**
     * Format Code.
     * @nullable
     */
    formatCode?: string;
    /**
     * Default Vat Group.
     * @nullable
     */
    defaultVatGroup?: string;
    /**
     * Category.
     * @nullable
     */
    category?: number;
    /**
     * Transaction Code.
     * @nullable
     */
    transactionCode?: string;
    /**
     * Loading Factor Code.
     * @nullable
     */
    loadingFactorCode?: string;
    /**
     * Loading Factor Code 2.
     * @nullable
     */
    loadingFactorCode2?: string;
    /**
     * Loading Factor Code 3.
     * @nullable
     */
    loadingFactorCode3?: string;
    /**
     * Loading Factor Code 4.
     * @nullable
     */
    loadingFactorCode4?: string;
    /**
     * Loading Factor Code 5.
     * @nullable
     */
    loadingFactorCode5?: string;
    /**
     * Planning Level.
     * @nullable
     */
    planningLevel?: string;
    /**
     * Datev Account.
     * @nullable
     */
    datevAccount?: string;
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
    /**
     * Bpl Name.
     * @nullable
     */
    bplName?: string;
    /**
     * Vat Reg Num.
     * @nullable
     */
    vatRegNum?: string;
    /**
     * Referential Account Code.
     * @nullable
     */
    referentialAccountCode?: string;
    /**
     * Valid From.
     * @nullable
     */
    validFrom?: Moment;
    /**
     * Valid To.
     * @nullable
     */
    validTo?: Moment;
    /**
     * Valid Remarks.
     * @nullable
     */
    validRemarks?: string;
    /**
     * Frozen From.
     * @nullable
     */
    frozenFrom?: Moment;
    /**
     * Frozen To.
     * @nullable
     */
    frozenTo?: Moment;
    /**
     * Frozen Remarks.
     * @nullable
     */
    frozenRemarks?: string;
    /**
     * Primary Closing Account.
     * @nullable
     */
    primaryClosingAccount?: string;
    /**
     * Cost Element Code.
     * @nullable
     */
    costElementCode?: string;
    /**
     * One-to-many navigation property to the [[WorkOrders]] entity.
     */
    workOrders: WorkOrders[];
    /**
     * One-to-many navigation property to the [[Warehouses]] entity.
     */
    warehouses: Warehouses[];
    /**
     * One-to-many navigation property to the [[InventoryGenEntries]] entity.
     */
    inventoryGenEntries: InventoryGenEntries[];
    /**
     * One-to-many navigation property to the [[CustomsGroups]] entity.
     */
    customsGroups: CustomsGroups[];
    /**
     * One-to-many navigation property to the [[AccrualTypes]] entity.
     */
    accrualTypes: AccrualTypes[];
    /**
     * One-to-many navigation property to the [[PurchaseQuotations]] entity.
     */
    purchaseQuotations: PurchaseQuotations[];
    /**
     * One-to-many navigation property to the [[ItemGroups]] entity.
     */
    itemGroups: ItemGroups[];
    /**
     * One-to-many navigation property to the [[VatGroups]] entity.
     */
    vatGroups: VatGroups[];
    /**
     * One-to-many navigation property to the [[VendorPayments]] entity.
     */
    vendorPayments: VendorPayments[];
    /**
     * One-to-many navigation property to the [[BankPages]] entity.
     */
    bankPages: BankPages[];
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * One-to-many navigation property to the [[CreditCards]] entity.
     */
    creditCards: CreditCards[];
    /**
     * One-to-many navigation property to the [[FaAccountDeterminations]] entity.
     */
    faAccountDeterminations: FaAccountDeterminations[];
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
     * One-to-one navigation property to the [[Currencies]] entity.
     */
    currency: Currencies;
    /**
     * One-to-one navigation property to the [[Projects]] entity.
     */
    project: Projects;
    /**
     * One-to-one navigation property to the [[AccountCategory]] entity.
     */
    accountCategory: AccountCategory;
    /**
     * One-to-one navigation property to the [[TransactionCodes]] entity.
     */
    transactionCode2: TransactionCodes;
    /**
     * One-to-one navigation property to the [[DistributionRules]] entity.
     */
    distributionRule: DistributionRules;
    /**
     * One-to-one navigation property to the [[CostElements]] entity.
     */
    costElement: CostElements;
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
     * One-to-many navigation property to the [[AdditionalExpenses]] entity.
     */
    additionalExpenses: AdditionalExpenses[];
    /**
     * One-to-many navigation property to the [[DownPayments]] entity.
     */
    downPayments: DownPayments[];
    /**
     * One-to-many navigation property to the [[Drafts]] entity.
     */
    drafts: Drafts[];
    /**
     * One-to-many navigation property to the [[SalesTaxAuthorities]] entity.
     */
    salesTaxAuthorities: SalesTaxAuthorities[];
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
     * One-to-many navigation property to the [[DunningTerms]] entity.
     */
    dunningTerms: DunningTerms[];
    /**
     * One-to-many navigation property to the [[PurchaseDownPayments]] entity.
     */
    purchaseDownPayments: PurchaseDownPayments[];
    /**
     * One-to-many navigation property to the [[ExpenseTypes]] entity.
     */
    expenseTypes: ExpenseTypes[];
    /**
     * One-to-many navigation property to the [[PurchaseOrders]] entity.
     */
    purchaseOrders: PurchaseOrders[];
    /**
     * One-to-many navigation property to the [[HouseBankAccounts]] entity.
     */
    houseBankAccounts: HouseBankAccounts[];
    /**
     * One-to-many navigation property to the [[WithholdingTaxCodes]] entity.
     */
    withholdingTaxCodes: WithholdingTaxCodes[];
    /**
     * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
     */
    goodsReturnRequest: GoodsReturnRequest[];
    /**
     * One-to-many navigation property to the [[IncomingPayments]] entity.
     */
    incomingPayments: IncomingPayments[];
    /**
     * Returns an entity builder to construct instances `ChartOfAccounts`.
     * @returns A builder that constructs instances of entity type `ChartOfAccounts`.
     */
    static builder(): EntityBuilderType<ChartOfAccounts, ChartOfAccountsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ChartOfAccounts` entity type.
     * @returns A `ChartOfAccounts` request builder.
     */
    static requestBuilder(): ChartOfAccountsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ChartOfAccounts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ChartOfAccounts`.
     */
    static customField(fieldName: string): CustomField<ChartOfAccounts>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { WorkOrders, WorkOrdersType } from './WorkOrders';
import { Warehouses, WarehousesType } from './Warehouses';
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { CustomsGroups, CustomsGroupsType } from './CustomsGroups';
import { AccrualTypes, AccrualTypesType } from './AccrualTypes';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { VatGroups, VatGroupsType } from './VatGroups';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { BankPages, BankPagesType } from './BankPages';
import { Items, ItemsType } from './Items';
import { CreditCards, CreditCardsType } from './CreditCards';
import { FaAccountDeterminations, FaAccountDeterminationsType } from './FaAccountDeterminations';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Quotations, QuotationsType } from './Quotations';
import { Currencies, CurrenciesType } from './Currencies';
import { Projects, ProjectsType } from './Projects';
import { AccountCategory, AccountCategoryType } from './AccountCategory';
import { TransactionCodes, TransactionCodesType } from './TransactionCodes';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { CostElements, CostElementsType } from './CostElements';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { GlAccountAdvancedRules, GlAccountAdvancedRulesType } from './GlAccountAdvancedRules';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { Orders, OrdersType } from './Orders';
import { AdditionalExpenses, AdditionalExpensesType } from './AdditionalExpenses';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { SalesTaxAuthorities, SalesTaxAuthoritiesType } from './SalesTaxAuthorities';
import { WizardPaymentMethods, WizardPaymentMethodsType } from './WizardPaymentMethods';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { Returns, ReturnsType } from './Returns';
import { CorrectionInvoiceReversal, CorrectionInvoiceReversalType } from './CorrectionInvoiceReversal';
import { CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType } from './CorrectionPurchaseInvoice';
import { CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType } from './CorrectionPurchaseInvoiceReversal';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { DunningTerms, DunningTermsType } from './DunningTerms';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { ExpenseTypes, ExpenseTypesType } from './ExpenseTypes';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { HouseBankAccounts, HouseBankAccountsType } from './HouseBankAccounts';
import { WithholdingTaxCodes, WithholdingTaxCodesType } from './WithholdingTaxCodes';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
export interface ChartOfAccountsType {
    code?: string;
    name?: string;
    balance?: number;
    accountLevel?: number;
    dataExportCode?: string;
    fatherAccountKey?: string;
    externalCode?: string;
    externalReconNo?: number;
    internalReconNo?: number;
    acctCurrency?: string;
    balanceSyscurr?: number;
    balanceFrgnCurr?: number;
    foreignName?: string;
    details?: string;
    projectCode?: string;
    formatCode?: string;
    defaultVatGroup?: string;
    category?: number;
    transactionCode?: string;
    loadingFactorCode?: string;
    loadingFactorCode2?: string;
    loadingFactorCode3?: string;
    loadingFactorCode4?: string;
    loadingFactorCode5?: string;
    planningLevel?: string;
    datevAccount?: string;
    bplid?: number;
    bplName?: string;
    vatRegNum?: string;
    referentialAccountCode?: string;
    validFrom?: Moment;
    validTo?: Moment;
    validRemarks?: string;
    frozenFrom?: Moment;
    frozenTo?: Moment;
    frozenRemarks?: string;
    primaryClosingAccount?: string;
    costElementCode?: string;
    workOrders: WorkOrdersType[];
    warehouses: WarehousesType[];
    inventoryGenEntries: InventoryGenEntriesType[];
    customsGroups: CustomsGroupsType[];
    accrualTypes: AccrualTypesType[];
    purchaseQuotations: PurchaseQuotationsType[];
    itemGroups: ItemGroupsType[];
    vatGroups: VatGroupsType[];
    vendorPayments: VendorPaymentsType[];
    bankPages: BankPagesType[];
    items: ItemsType[];
    creditCards: CreditCardsType[];
    faAccountDeterminations: FaAccountDeterminationsType[];
    deliveryNotes: DeliveryNotesType[];
    businessPartners: BusinessPartnersType[];
    quotations: QuotationsType[];
    currency: CurrenciesType;
    project: ProjectsType;
    accountCategory: AccountCategoryType;
    transactionCode2: TransactionCodesType;
    distributionRule: DistributionRulesType;
    costElement: CostElementsType;
    inventoryGenExits: InventoryGenExitsType[];
    purchaseRequests: PurchaseRequestsType[];
    returnRequest: ReturnRequestType[];
    glAccountAdvancedRules: GlAccountAdvancedRulesType[];
    purchaseReturns: PurchaseReturnsType[];
    invoices: InvoicesType[];
    creditNotes: CreditNotesType[];
    businessPlaces: BusinessPlacesType[];
    orders: OrdersType[];
    additionalExpenses: AdditionalExpensesType[];
    downPayments: DownPaymentsType[];
    drafts: DraftsType[];
    salesTaxAuthorities: SalesTaxAuthoritiesType[];
    wizardPaymentMethods: WizardPaymentMethodsType[];
    paymentDrafts: PaymentDraftsType[];
    returns: ReturnsType[];
    correctionInvoiceReversal: CorrectionInvoiceReversalType[];
    correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
    correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
    purchaseInvoices: PurchaseInvoicesType[];
    purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
    correctionInvoice: CorrectionInvoiceType[];
    purchaseCreditNotes: PurchaseCreditNotesType[];
    dunningTerms: DunningTermsType[];
    purchaseDownPayments: PurchaseDownPaymentsType[];
    expenseTypes: ExpenseTypesType[];
    purchaseOrders: PurchaseOrdersType[];
    houseBankAccounts: HouseBankAccountsType[];
    withholdingTaxCodes: WithholdingTaxCodesType[];
    goodsReturnRequest: GoodsReturnRequestType[];
    incomingPayments: IncomingPaymentsType[];
}
export interface ChartOfAccountsTypeForceMandatory {
    code: string;
    name: string;
    balance: number;
    accountLevel: number;
    dataExportCode: string;
    fatherAccountKey: string;
    externalCode: string;
    externalReconNo: number;
    internalReconNo: number;
    acctCurrency: string;
    balanceSyscurr: number;
    balanceFrgnCurr: number;
    foreignName: string;
    details: string;
    projectCode: string;
    formatCode: string;
    defaultVatGroup: string;
    category: number;
    transactionCode: string;
    loadingFactorCode: string;
    loadingFactorCode2: string;
    loadingFactorCode3: string;
    loadingFactorCode4: string;
    loadingFactorCode5: string;
    planningLevel: string;
    datevAccount: string;
    bplid: number;
    bplName: string;
    vatRegNum: string;
    referentialAccountCode: string;
    validFrom: Moment;
    validTo: Moment;
    validRemarks: string;
    frozenFrom: Moment;
    frozenTo: Moment;
    frozenRemarks: string;
    primaryClosingAccount: string;
    costElementCode: string;
    workOrders: WorkOrdersType[];
    warehouses: WarehousesType[];
    inventoryGenEntries: InventoryGenEntriesType[];
    customsGroups: CustomsGroupsType[];
    accrualTypes: AccrualTypesType[];
    purchaseQuotations: PurchaseQuotationsType[];
    itemGroups: ItemGroupsType[];
    vatGroups: VatGroupsType[];
    vendorPayments: VendorPaymentsType[];
    bankPages: BankPagesType[];
    items: ItemsType[];
    creditCards: CreditCardsType[];
    faAccountDeterminations: FaAccountDeterminationsType[];
    deliveryNotes: DeliveryNotesType[];
    businessPartners: BusinessPartnersType[];
    quotations: QuotationsType[];
    currency: CurrenciesType;
    project: ProjectsType;
    accountCategory: AccountCategoryType;
    transactionCode2: TransactionCodesType;
    distributionRule: DistributionRulesType;
    costElement: CostElementsType;
    inventoryGenExits: InventoryGenExitsType[];
    purchaseRequests: PurchaseRequestsType[];
    returnRequest: ReturnRequestType[];
    glAccountAdvancedRules: GlAccountAdvancedRulesType[];
    purchaseReturns: PurchaseReturnsType[];
    invoices: InvoicesType[];
    creditNotes: CreditNotesType[];
    businessPlaces: BusinessPlacesType[];
    orders: OrdersType[];
    additionalExpenses: AdditionalExpensesType[];
    downPayments: DownPaymentsType[];
    drafts: DraftsType[];
    salesTaxAuthorities: SalesTaxAuthoritiesType[];
    wizardPaymentMethods: WizardPaymentMethodsType[];
    paymentDrafts: PaymentDraftsType[];
    returns: ReturnsType[];
    correctionInvoiceReversal: CorrectionInvoiceReversalType[];
    correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
    correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
    purchaseInvoices: PurchaseInvoicesType[];
    purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
    correctionInvoice: CorrectionInvoiceType[];
    purchaseCreditNotes: PurchaseCreditNotesType[];
    dunningTerms: DunningTermsType[];
    purchaseDownPayments: PurchaseDownPaymentsType[];
    expenseTypes: ExpenseTypesType[];
    purchaseOrders: PurchaseOrdersType[];
    houseBankAccounts: HouseBankAccountsType[];
    withholdingTaxCodes: WithholdingTaxCodesType[];
    goodsReturnRequest: GoodsReturnRequestType[];
    incomingPayments: IncomingPaymentsType[];
}
export declare namespace ChartOfAccounts {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[balance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BALANCE: NumberField<ChartOfAccounts>;
    /**
     * Static representation of the [[accountLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_LEVEL: NumberField<ChartOfAccounts>;
    /**
     * Static representation of the [[dataExportCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_EXPORT_CODE: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[fatherAccountKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FATHER_ACCOUNT_KEY: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[externalReconNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_RECON_NO: NumberField<ChartOfAccounts>;
    /**
     * Static representation of the [[internalReconNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_RECON_NO: NumberField<ChartOfAccounts>;
    /**
     * Static representation of the [[acctCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCT_CURRENCY: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[balanceSyscurr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BALANCE_SYSCURR: NumberField<ChartOfAccounts>;
    /**
     * Static representation of the [[balanceFrgnCurr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BALANCE_FRGN_CURR: NumberField<ChartOfAccounts>;
    /**
     * Static representation of the [[foreignName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_NAME: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DETAILS: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_CODE: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[formatCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMAT_CODE: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[defaultVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_VAT_GROUP: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: NumberField<ChartOfAccounts>;
    /**
     * Static representation of the [[transactionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_CODE: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[loadingFactorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOADING_FACTOR_CODE: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[loadingFactorCode2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOADING_FACTOR_CODE_2: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[loadingFactorCode3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOADING_FACTOR_CODE_3: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[loadingFactorCode4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOADING_FACTOR_CODE_4: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[loadingFactorCode5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOADING_FACTOR_CODE_5: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[planningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNING_LEVEL: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[datevAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATEV_ACCOUNT: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPLID: NumberField<ChartOfAccounts>;
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPL_NAME: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_REG_NUM: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[referentialAccountCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENTIAL_ACCOUNT_CODE: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FROM: DateField<ChartOfAccounts>;
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_TO: DateField<ChartOfAccounts>;
    /**
     * Static representation of the [[validRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_REMARKS: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[frozenFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROZEN_FROM: DateField<ChartOfAccounts>;
    /**
     * Static representation of the [[frozenTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROZEN_TO: DateField<ChartOfAccounts>;
    /**
     * Static representation of the [[frozenRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROZEN_REMARKS: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[primaryClosingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIMARY_CLOSING_ACCOUNT: StringField<ChartOfAccounts>;
    /**
     * Static representation of the [[costElementCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_ELEMENT_CODE: StringField<ChartOfAccounts>;
    /**
     * Static representation of the one-to-many navigation property [[workOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_ORDERS: OneToManyLink<ChartOfAccounts, WorkOrders>;
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSES: OneToManyLink<ChartOfAccounts, Warehouses>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_ENTRIES: OneToManyLink<ChartOfAccounts, InventoryGenEntries>;
    /**
     * Static representation of the one-to-many navigation property [[customsGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMS_GROUPS: OneToManyLink<ChartOfAccounts, CustomsGroups>;
    /**
     * Static representation of the one-to-many navigation property [[accrualTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_TYPES: OneToManyLink<ChartOfAccounts, AccrualTypes>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_QUOTATIONS: OneToManyLink<ChartOfAccounts, PurchaseQuotations>;
    /**
     * Static representation of the one-to-many navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_GROUPS: OneToManyLink<ChartOfAccounts, ItemGroups>;
    /**
     * Static representation of the one-to-many navigation property [[vatGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_GROUPS: OneToManyLink<ChartOfAccounts, VatGroups>;
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_PAYMENTS: OneToManyLink<ChartOfAccounts, VendorPayments>;
    /**
     * Static representation of the one-to-many navigation property [[bankPages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_PAGES: OneToManyLink<ChartOfAccounts, BankPages>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<ChartOfAccounts, Items>;
    /**
     * Static representation of the one-to-many navigation property [[creditCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_CARDS: OneToManyLink<ChartOfAccounts, CreditCards>;
    /**
     * Static representation of the one-to-many navigation property [[faAccountDeterminations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FA_ACCOUNT_DETERMINATIONS: OneToManyLink<ChartOfAccounts, FaAccountDeterminations>;
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_NOTES: OneToManyLink<ChartOfAccounts, DeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<ChartOfAccounts, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUOTATIONS: OneToManyLink<ChartOfAccounts, Quotations>;
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: OneToOneLink<ChartOfAccounts, Currencies>;
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT: OneToOneLink<ChartOfAccounts, Projects>;
    /**
     * Static representation of the one-to-one navigation property [[accountCategory]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_CATEGORY: OneToOneLink<ChartOfAccounts, AccountCategory>;
    /**
     * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_CODE_2: OneToOneLink<ChartOfAccounts, TransactionCodes>;
    /**
     * Static representation of the one-to-one navigation property [[distributionRule]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE: OneToOneLink<ChartOfAccounts, DistributionRules>;
    /**
     * Static representation of the one-to-one navigation property [[costElement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_ELEMENT: OneToOneLink<ChartOfAccounts, CostElements>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_EXITS: OneToManyLink<ChartOfAccounts, InventoryGenExits>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_REQUESTS: OneToManyLink<ChartOfAccounts, PurchaseRequests>;
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURN_REQUEST: OneToManyLink<ChartOfAccounts, ReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<ChartOfAccounts, GlAccountAdvancedRules>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_RETURNS: OneToManyLink<ChartOfAccounts, PurchaseReturns>;
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICES: OneToManyLink<ChartOfAccounts, Invoices>;
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_NOTES: OneToManyLink<ChartOfAccounts, CreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACES: OneToManyLink<ChartOfAccounts, BusinessPlaces>;
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERS: OneToManyLink<ChartOfAccounts, Orders>;
    /**
     * Static representation of the one-to-many navigation property [[additionalExpenses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_EXPENSES: OneToManyLink<ChartOfAccounts, AdditionalExpenses>;
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENTS: OneToManyLink<ChartOfAccounts, DownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFTS: OneToManyLink<ChartOfAccounts, Drafts>;
    /**
     * Static representation of the one-to-many navigation property [[salesTaxAuthorities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_AUTHORITIES: OneToManyLink<ChartOfAccounts, SalesTaxAuthorities>;
    /**
     * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIZARD_PAYMENT_METHODS: OneToManyLink<ChartOfAccounts, WizardPaymentMethods>;
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_DRAFTS: OneToManyLink<ChartOfAccounts, PaymentDrafts>;
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNS: OneToManyLink<ChartOfAccounts, Returns>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE_REVERSAL: OneToManyLink<ChartOfAccounts, CorrectionInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE: OneToManyLink<ChartOfAccounts, CorrectionPurchaseInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<ChartOfAccounts, CorrectionPurchaseInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_INVOICES: OneToManyLink<ChartOfAccounts, PurchaseInvoices>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DELIVERY_NOTES: OneToManyLink<ChartOfAccounts, PurchaseDeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE: OneToManyLink<ChartOfAccounts, CorrectionInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_NOTES: OneToManyLink<ChartOfAccounts, PurchaseCreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[dunningTerms]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_TERMS: OneToManyLink<ChartOfAccounts, DunningTerms>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DOWN_PAYMENTS: OneToManyLink<ChartOfAccounts, PurchaseDownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[expenseTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSE_TYPES: OneToManyLink<ChartOfAccounts, ExpenseTypes>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ORDERS: OneToManyLink<ChartOfAccounts, PurchaseOrders>;
    /**
     * Static representation of the one-to-many navigation property [[houseBankAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_BANK_ACCOUNTS: OneToManyLink<ChartOfAccounts, HouseBankAccounts>;
    /**
     * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CODES: OneToManyLink<ChartOfAccounts, WithholdingTaxCodes>;
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_RETURN_REQUEST: OneToManyLink<ChartOfAccounts, GoodsReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOMING_PAYMENTS: OneToManyLink<ChartOfAccounts, IncomingPayments>;
    /**
     * All fields of the ChartOfAccounts entity.
     */
    const _allFields: Array<StringField<ChartOfAccounts> | NumberField<ChartOfAccounts> | DateField<ChartOfAccounts> | OneToManyLink<ChartOfAccounts, WorkOrders> | OneToManyLink<ChartOfAccounts, Warehouses> | OneToManyLink<ChartOfAccounts, InventoryGenEntries> | OneToManyLink<ChartOfAccounts, CustomsGroups> | OneToManyLink<ChartOfAccounts, AccrualTypes> | OneToManyLink<ChartOfAccounts, PurchaseQuotations> | OneToManyLink<ChartOfAccounts, ItemGroups> | OneToManyLink<ChartOfAccounts, VatGroups> | OneToManyLink<ChartOfAccounts, VendorPayments> | OneToManyLink<ChartOfAccounts, BankPages> | OneToManyLink<ChartOfAccounts, Items> | OneToManyLink<ChartOfAccounts, CreditCards> | OneToManyLink<ChartOfAccounts, FaAccountDeterminations> | OneToManyLink<ChartOfAccounts, DeliveryNotes> | OneToManyLink<ChartOfAccounts, BusinessPartners> | OneToManyLink<ChartOfAccounts, Quotations> | OneToOneLink<ChartOfAccounts, Currencies> | OneToOneLink<ChartOfAccounts, Projects> | OneToOneLink<ChartOfAccounts, AccountCategory> | OneToOneLink<ChartOfAccounts, TransactionCodes> | OneToOneLink<ChartOfAccounts, DistributionRules> | OneToOneLink<ChartOfAccounts, CostElements> | OneToManyLink<ChartOfAccounts, InventoryGenExits> | OneToManyLink<ChartOfAccounts, PurchaseRequests> | OneToManyLink<ChartOfAccounts, ReturnRequest> | OneToManyLink<ChartOfAccounts, GlAccountAdvancedRules> | OneToManyLink<ChartOfAccounts, PurchaseReturns> | OneToManyLink<ChartOfAccounts, Invoices> | OneToManyLink<ChartOfAccounts, CreditNotes> | OneToManyLink<ChartOfAccounts, BusinessPlaces> | OneToManyLink<ChartOfAccounts, Orders> | OneToManyLink<ChartOfAccounts, AdditionalExpenses> | OneToManyLink<ChartOfAccounts, DownPayments> | OneToManyLink<ChartOfAccounts, Drafts> | OneToManyLink<ChartOfAccounts, SalesTaxAuthorities> | OneToManyLink<ChartOfAccounts, WizardPaymentMethods> | OneToManyLink<ChartOfAccounts, PaymentDrafts> | OneToManyLink<ChartOfAccounts, Returns> | OneToManyLink<ChartOfAccounts, CorrectionInvoiceReversal> | OneToManyLink<ChartOfAccounts, CorrectionPurchaseInvoice> | OneToManyLink<ChartOfAccounts, CorrectionPurchaseInvoiceReversal> | OneToManyLink<ChartOfAccounts, PurchaseInvoices> | OneToManyLink<ChartOfAccounts, PurchaseDeliveryNotes> | OneToManyLink<ChartOfAccounts, CorrectionInvoice> | OneToManyLink<ChartOfAccounts, PurchaseCreditNotes> | OneToManyLink<ChartOfAccounts, DunningTerms> | OneToManyLink<ChartOfAccounts, PurchaseDownPayments> | OneToManyLink<ChartOfAccounts, ExpenseTypes> | OneToManyLink<ChartOfAccounts, PurchaseOrders> | OneToManyLink<ChartOfAccounts, HouseBankAccounts> | OneToManyLink<ChartOfAccounts, WithholdingTaxCodes> | OneToManyLink<ChartOfAccounts, GoodsReturnRequest> | OneToManyLink<ChartOfAccounts, IncomingPayments>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ChartOfAccounts>;
    /**
     * All key fields of the ChartOfAccounts entity.
     */
    const _keyFields: Array<Field<ChartOfAccounts>>;
    /**
     * Mapping of all key field names to the respective static field property ChartOfAccounts.
     */
    const _keys: {
        [keys: string]: Field<ChartOfAccounts>;
    };
}
//# sourceMappingURL=ChartOfAccounts.d.ts.map