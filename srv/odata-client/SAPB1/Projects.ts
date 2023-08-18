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
import type { ProjectsApi } from './ProjectsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  SalesOpportunities,
  SalesOpportunitiesType
} from './SalesOpportunities';
import { ProductTrees, ProductTreesType } from './ProductTrees';
import {
  PurchaseQuotations,
  PurchaseQuotationsType
} from './PurchaseQuotations';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
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
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import {
  InventoryGenEntries,
  InventoryGenEntriesType
} from './InventoryGenEntries';
import { Orders, OrdersType } from './Orders';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { Drafts, DraftsType } from './Drafts';
import {
  AdditionalExpenses,
  AdditionalExpensesType
} from './AdditionalExpenses';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import {
  PurchaseCreditNotes,
  PurchaseCreditNotesType
} from './PurchaseCreditNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
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
  ProjectManagements,
  ProjectManagementsType
} from './ProjectManagements';
import {
  GoodsReturnRequest,
  GoodsReturnRequestType
} from './GoodsReturnRequest';
import { BudgetScenarios, BudgetScenariosType } from './BudgetScenarios';
import {
  CorrectionPurchaseInvoiceReversal,
  CorrectionPurchaseInvoiceReversalType
} from './CorrectionPurchaseInvoiceReversal';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
import { Deposits, DepositsType } from './Deposits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';

/**
 * This class represents the entity "Projects" of service "SAPB1".
 */
export class Projects<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectsType<T>
{
  /**
   * Technical entity name for Projects.
   */
  static _entityName = 'Projects';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Projects entity
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
   * Valid From.
   * @nullable
   */
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum | null;
  /**
   * One-to-many navigation property to the {@link SalesOpportunities} entity.
   */
  salesOpportunities!: SalesOpportunities<T>[];
  /**
   * One-to-many navigation property to the {@link ProductTrees} entity.
   */
  productTrees!: ProductTrees<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseQuotations} entity.
   */
  purchaseQuotations!: PurchaseQuotations<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceCalls} entity.
   */
  serviceCalls!: ServiceCalls<T>[];
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
   * One-to-many navigation property to the {@link JournalEntries} entity.
   */
  journalEntries!: JournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenEntries} entity.
   */
  inventoryGenEntries!: InventoryGenEntries<T>[];
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  orders!: Orders<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenExits} entity.
   */
  inventoryGenExits!: InventoryGenExits<T>[];
  /**
   * One-to-many navigation property to the {@link Drafts} entity.
   */
  drafts!: Drafts<T>[];
  /**
   * One-to-many navigation property to the {@link AdditionalExpenses} entity.
   */
  additionalExpenses!: AdditionalExpenses<T>[];
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
   * One-to-many navigation property to the {@link ProjectManagements} entity.
   */
  projectManagements!: ProjectManagements<T>[];
  /**
   * One-to-many navigation property to the {@link GoodsReturnRequest} entity.
   */
  goodsReturnRequest!: GoodsReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetScenarios} entity.
   */
  budgetScenarios!: BudgetScenarios<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoiceReversal} entity.
   */
  correctionPurchaseInvoiceReversal!: CorrectionPurchaseInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link IncomingPayments} entity.
   */
  incomingPayments!: IncomingPayments<T>[];
  /**
   * One-to-many navigation property to the {@link Deposits} entity.
   */
  deposits!: Deposits<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequests} entity.
   */
  purchaseRequests!: PurchaseRequests<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPayments} entity.
   */
  vendorPayments!: VendorPayments<T>[];

  constructor(readonly _entityApi: ProjectsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectsType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  active?: BoYesNoEnum | null;
  salesOpportunities: SalesOpportunitiesType<T>[];
  productTrees: ProductTreesType<T>[];
  purchaseQuotations: PurchaseQuotationsType<T>[];
  serviceCalls: ServiceCallsType<T>[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType<T>[];
  correctionInvoice: CorrectionInvoiceType<T>[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType<T>[];
  journalEntries: JournalEntriesType<T>[];
  inventoryGenEntries: InventoryGenEntriesType<T>[];
  orders: OrdersType<T>[];
  inventoryGenExits: InventoryGenExitsType<T>[];
  drafts: DraftsType<T>[];
  additionalExpenses: AdditionalExpensesType<T>[];
  chartOfAccounts: ChartOfAccountsType<T>[];
  returnRequest: ReturnRequestType<T>[];
  deliveryNotes: DeliveryNotesType<T>[];
  purchaseInvoices: PurchaseInvoicesType<T>[];
  blanketAgreements: BlanketAgreementsType<T>[];
  invoices: InvoicesType<T>[];
  creditNotes: CreditNotesType<T>[];
  paymentDrafts: PaymentDraftsType<T>[];
  purchaseCreditNotes: PurchaseCreditNotesType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  productionOrders: ProductionOrdersType<T>[];
  downPayments: DownPaymentsType<T>[];
  purchaseDownPayments: PurchaseDownPaymentsType<T>[];
  purchaseReturns: PurchaseReturnsType<T>[];
  purchaseOrders: PurchaseOrdersType<T>[];
  quotations: QuotationsType<T>[];
  returns: ReturnsType<T>[];
  projectManagements: ProjectManagementsType<T>[];
  goodsReturnRequest: GoodsReturnRequestType<T>[];
  budgetScenarios: BudgetScenariosType<T>[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType<T>[];
  incomingPayments: IncomingPaymentsType<T>[];
  deposits: DepositsType<T>[];
  purchaseRequests: PurchaseRequestsType<T>[];
  vendorPayments: VendorPaymentsType<T>[];
}
