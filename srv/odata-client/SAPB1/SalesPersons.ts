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
import type { SalesPersonsApi } from './SalesPersonsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  SalesOpportunities,
  SalesOpportunitiesType
} from './SalesOpportunities';
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { StockTransfers, StockTransfersType } from './StockTransfers';
import {
  PurchaseQuotations,
  PurchaseQuotationsType
} from './PurchaseQuotations';
import { CommissionGroups, CommissionGroupsType } from './CommissionGroups';
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
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Orders, OrdersType } from './Orders';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { Drafts, DraftsType } from './Drafts';
import {
  InventoryTransferRequests,
  InventoryTransferRequestsType
} from './InventoryTransferRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import {
  StockTransferDrafts,
  StockTransferDraftsType
} from './StockTransferDrafts';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { Contacts, ContactsType } from './Contacts';
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
import { Activities, ActivitiesType } from './Activities';
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
import {
  CorrectionPurchaseInvoiceReversal,
  CorrectionPurchaseInvoiceReversalType
} from './CorrectionPurchaseInvoiceReversal';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';

/**
 * This class represents the entity "SalesPersons" of service "SAPB1".
 */
export class SalesPersons<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesPersonsType<T>
{
  /**
   * Technical entity name for SalesPersons.
   */
  static _entityName = 'SalesPersons';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SalesPersons entity
   */
  static _keys = ['SalesEmployeeCode'];
  /**
   * Sales Employee Code.
   */
  salesEmployeeCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Employee Name.
   * @nullable
   */
  salesEmployeeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission For Sales Employee.
   * @nullable
   */
  commissionForSalesEmployee?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Commission Group.
   * @nullable
   */
  commissionGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Locked.
   * @nullable
   */
  locked?: BoYesNoEnum | null;
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum | null;
  /**
   * Telephone.
   * @nullable
   */
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mobile.
   * @nullable
   */
  mobile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax.
   * @nullable
   */
  fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Aufteilung Vk.
   * @nullable
   */
  uAufteilungVk?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Aufteilung Ek.
   * @nullable
   */
  uAufteilungEk?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SalesOpportunities} entity.
   */
  salesOpportunities!: SalesOpportunities<T>[];
  /**
   * One-to-many navigation property to the {@link UserDefaultGroups} entity.
   */
  userDefaultGroups!: UserDefaultGroups<T>[];
  /**
   * One-to-many navigation property to the {@link StockTransfers} entity.
   */
  stockTransfers!: StockTransfers<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseQuotations} entity.
   */
  purchaseQuotations!: PurchaseQuotations<T>[];
  /**
   * One-to-one navigation property to the {@link CommissionGroups} entity.
   */
  commissionGroup2?: CommissionGroups<T> | null;
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
   * One-to-many navigation property to the {@link EmployeesInfo} entity.
   */
  employeesInfo!: EmployeesInfo<T>[];
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
   * One-to-many navigation property to the {@link InventoryTransferRequests} entity.
   */
  inventoryTransferRequests!: InventoryTransferRequests<T>[];
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
   * One-to-many navigation property to the {@link Contacts} entity.
   */
  contacts!: Contacts<T>[];
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
   * One-to-many navigation property to the {@link Activities} entity.
   */
  activities!: Activities<T>[];
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
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoiceReversal} entity.
   */
  correctionPurchaseInvoiceReversal!: CorrectionPurchaseInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequests} entity.
   */
  purchaseRequests!: PurchaseRequests<T>[];

  constructor(readonly _entityApi: SalesPersonsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesPersonsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesEmployeeCode: DeserializedType<T, 'Edm.Int32'>;
  salesEmployeeName?: DeserializedType<T, 'Edm.String'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  commissionForSalesEmployee?: DeserializedType<T, 'Edm.Double'> | null;
  commissionGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  locked?: BoYesNoEnum | null;
  employeeId?: DeserializedType<T, 'Edm.Int32'> | null;
  active?: BoYesNoEnum | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  mobile?: DeserializedType<T, 'Edm.String'> | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  uAufteilungVk?: DeserializedType<T, 'Edm.String'> | null;
  uAufteilungEk?: DeserializedType<T, 'Edm.String'> | null;
  salesOpportunities: SalesOpportunitiesType<T>[];
  userDefaultGroups: UserDefaultGroupsType<T>[];
  stockTransfers: StockTransfersType<T>[];
  purchaseQuotations: PurchaseQuotationsType<T>[];
  commissionGroup2?: CommissionGroupsType<T> | null;
  correctionInvoiceReversal: CorrectionInvoiceReversalType<T>[];
  correctionInvoice: CorrectionInvoiceType<T>[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType<T>[];
  inventoryGenEntries: InventoryGenEntriesType<T>[];
  employeesInfo: EmployeesInfoType<T>[];
  orders: OrdersType<T>[];
  inventoryGenExits: InventoryGenExitsType<T>[];
  drafts: DraftsType<T>[];
  inventoryTransferRequests: InventoryTransferRequestsType<T>[];
  returnRequest: ReturnRequestType<T>[];
  deliveryNotes: DeliveryNotesType<T>[];
  purchaseInvoices: PurchaseInvoicesType<T>[];
  stockTransferDrafts: StockTransferDraftsType<T>[];
  invoices: InvoicesType<T>[];
  creditNotes: CreditNotesType<T>[];
  contacts: ContactsType<T>[];
  purchaseCreditNotes: PurchaseCreditNotesType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  downPayments: DownPaymentsType<T>[];
  purchaseDownPayments: PurchaseDownPaymentsType<T>[];
  purchaseReturns: PurchaseReturnsType<T>[];
  activities: ActivitiesType<T>[];
  purchaseOrders: PurchaseOrdersType<T>[];
  quotations: QuotationsType<T>[];
  returns: ReturnsType<T>[];
  projectManagements: ProjectManagementsType<T>[];
  goodsReturnRequest: GoodsReturnRequestType<T>[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType<T>[];
  purchaseRequests: PurchaseRequestsType<T>[];
}
