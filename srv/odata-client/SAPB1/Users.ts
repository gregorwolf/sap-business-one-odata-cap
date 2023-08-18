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
import { UserPermissionItem } from './UserPermissionItem';
import { UserActionRecordItem } from './UserActionRecordItem';
import { UserGroupByUserItem } from './UserGroupByUserItem';
import { UserBranchAssignmentItem } from './UserBranchAssignmentItem';
import type { UsersApi } from './UsersApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoSuppLangs } from './BoSuppLangs';
import { BoUserGroup } from './BoUserGroup';
import {
  SalesOpportunities,
  SalesOpportunitiesType
} from './SalesOpportunities';
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { LegalData, LegalDataType } from './LegalData';
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
import { PickLists, PickListsType } from './PickLists';
import {
  InventoryGenEntries,
  InventoryGenEntriesType
} from './InventoryGenEntries';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Orders, OrdersType } from './Orders';
import {
  WizardPaymentMethods,
  WizardPaymentMethodsType
} from './WizardPaymentMethods';
import { ServiceContracts, ServiceContractsType } from './ServiceContracts';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import {
  MaterialRevaluation,
  MaterialRevaluationType
} from './MaterialRevaluation';
import { Drafts, DraftsType } from './Drafts';
import { ApprovalRequests, ApprovalRequestsType } from './ApprovalRequests';
import { Queue, QueueType } from './Queue';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { Branches, BranchesType } from './Branches';
import { Departments, DepartmentsType } from './Departments';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import {
  SalesTaxAuthorities,
  SalesTaxAuthoritiesType
} from './SalesTaxAuthorities';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import {
  SalesTaxAuthoritiesTypes,
  SalesTaxAuthoritiesTypesType
} from './SalesTaxAuthoritiesTypes';
import {
  KnowledgeBaseSolutions,
  KnowledgeBaseSolutionsType
} from './KnowledgeBaseSolutions';
import { Contacts, ContactsType } from './Contacts';
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
import { Cockpits, CockpitsType } from './Cockpits';
import {
  UserPermissionTree,
  UserPermissionTreeType
} from './UserPermissionTree';
import { Activities, ActivitiesType } from './Activities';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { Quotations, QuotationsType } from './Quotations';
import { Returns, ReturnsType } from './Returns';
import {
  GoodsReturnRequest,
  GoodsReturnRequestType
} from './GoodsReturnRequest';
import { SalesTaxCodes, SalesTaxCodesType } from './SalesTaxCodes';
import { BankPages, BankPagesType } from './BankPages';
import {
  CorrectionPurchaseInvoiceReversal,
  CorrectionPurchaseInvoiceReversalType
} from './CorrectionPurchaseInvoiceReversal';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { FormPreferences, FormPreferencesType } from './FormPreferences';

/**
 * This class represents the entity "Users" of service "SAPB1".
 */
export class Users<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UsersType<T>
{
  /**
   * Technical entity name for Users.
   */
  static _entityName = 'Users';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Users entity
   */
  static _keys = ['InternalKey'];
  /**
   * Internal Key.
   */
  internalKey!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * User Password.
   * @nullable
   */
  userPassword?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Code.
   * @nullable
   */
  userCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Name.
   * @nullable
   */
  userName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Superuser.
   * @nullable
   */
  superuser?: BoYesNoEnum | null;
  /**
   * E Mail.
   * @nullable
   */
  eMail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mobile Phone Number.
   * @nullable
   */
  mobilePhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Defaults.
   * @nullable
   */
  defaults?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax Number.
   * @nullable
   */
  faxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch.
   * @nullable
   */
  branch?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Department.
   * @nullable
   */
  department?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Language Code.
   * @nullable
   */
  languageCode?: BoSuppLangs | null;
  /**
   * Locked.
   * @nullable
   */
  locked?: BoYesNoEnum | null;
  /**
   * Group.
   * @nullable
   */
  group?: BoUserGroup | null;
  /**
   * Max Discount General.
   * @nullable
   */
  maxDiscountGeneral?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Max Discount Sales.
   * @nullable
   */
  maxDiscountSales?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Max Discount Purchase.
   * @nullable
   */
  maxDiscountPurchase?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cash Limit.
   * @nullable
   */
  cashLimit?: BoYesNoEnum | null;
  /**
   * Max Cash Amt For Incmng Payts.
   * @nullable
   */
  maxCashAmtForIncmngPayts?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Last Logout Date.
   * @nullable
   */
  lastLogoutDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Login Time.
   * @nullable
   */
  lastLoginTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Last Logout Time.
   * @nullable
   */
  lastLogoutTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Last Password Change Time.
   * @nullable
   */
  lastPasswordChangeTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Last Password Changed By.
   * @nullable
   */
  lastPasswordChangedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Permission.
   * @nullable
   */
  userPermission?: UserPermissionItem<T>[] | null;
  /**
   * User Action Record.
   * @nullable
   */
  userActionRecord?: UserActionRecordItem<T>[] | null;
  /**
   * User Group By User.
   * @nullable
   */
  userGroupByUser?: UserGroupByUserItem<T>[] | null;
  /**
   * User Branch Assignment.
   * @nullable
   */
  userBranchAssignment?: UserBranchAssignmentItem<T>[] | null;
  /**
   * One-to-many navigation property to the {@link SalesOpportunities} entity.
   */
  salesOpportunities!: SalesOpportunities<T>[];
  /**
   * One-to-many navigation property to the {@link UserDefaultGroups} entity.
   */
  userDefaultGroups!: UserDefaultGroups<T>[];
  /**
   * One-to-many navigation property to the {@link LegalData} entity.
   */
  legalData!: LegalData<T>[];
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
   * One-to-many navigation property to the {@link PickLists} entity.
   */
  pickLists!: PickLists<T>[];
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
   * One-to-many navigation property to the {@link WizardPaymentMethods} entity.
   */
  wizardPaymentMethods!: WizardPaymentMethods<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceContracts} entity.
   */
  serviceContracts!: ServiceContracts<T>[];
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
   * One-to-many navigation property to the {@link ApprovalRequests} entity.
   */
  approvalRequests!: ApprovalRequests<T>[];
  /**
   * One-to-many navigation property to the {@link Queue} entity.
   */
  queue!: Queue<T>[];
  /**
   * One-to-many navigation property to the {@link ReturnRequest} entity.
   */
  returnRequest!: ReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link DeliveryNotes} entity.
   */
  deliveryNotes!: DeliveryNotes<T>[];
  /**
   * One-to-one navigation property to the {@link Branches} entity.
   */
  branch2?: Branches<T> | null;
  /**
   * One-to-one navigation property to the {@link Departments} entity.
   */
  department2?: Departments<T> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseInvoices} entity.
   */
  purchaseInvoices!: PurchaseInvoices<T>[];
  /**
   * One-to-many navigation property to the {@link SalesTaxAuthorities} entity.
   */
  salesTaxAuthorities!: SalesTaxAuthorities<T>[];
  /**
   * One-to-many navigation property to the {@link Invoices} entity.
   */
  invoices!: Invoices<T>[];
  /**
   * One-to-many navigation property to the {@link CreditNotes} entity.
   */
  creditNotes!: CreditNotes<T>[];
  /**
   * One-to-many navigation property to the {@link SalesTaxAuthoritiesTypes} entity.
   */
  salesTaxAuthoritiesTypes!: SalesTaxAuthoritiesTypes<T>[];
  /**
   * One-to-many navigation property to the {@link KnowledgeBaseSolutions} entity.
   */
  knowledgeBaseSolutions!: KnowledgeBaseSolutions<T>[];
  /**
   * One-to-many navigation property to the {@link Contacts} entity.
   */
  contacts!: Contacts<T>[];
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
   * One-to-many navigation property to the {@link Cockpits} entity.
   */
  cockpits!: Cockpits<T>[];
  /**
   * One-to-many navigation property to the {@link UserPermissionTree} entity.
   */
  userPermissionTree!: UserPermissionTree<T>[];
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
   * One-to-many navigation property to the {@link GoodsReturnRequest} entity.
   */
  goodsReturnRequest!: GoodsReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link SalesTaxCodes} entity.
   */
  salesTaxCodes!: SalesTaxCodes<T>[];
  /**
   * One-to-many navigation property to the {@link BankPages} entity.
   */
  bankPages!: BankPages<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoiceReversal} entity.
   */
  correctionPurchaseInvoiceReversal!: CorrectionPurchaseInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequests} entity.
   */
  purchaseRequests!: PurchaseRequests<T>[];
  /**
   * One-to-many navigation property to the {@link FormPreferences} entity.
   */
  formPreferences!: FormPreferences<T>[];

  constructor(readonly _entityApi: UsersApi<T>) {
    super(_entityApi);
  }
}

export interface UsersType<T extends DeSerializers = DefaultDeSerializers> {
  internalKey: DeserializedType<T, 'Edm.Int32'>;
  userPassword?: DeserializedType<T, 'Edm.String'> | null;
  userCode?: DeserializedType<T, 'Edm.String'> | null;
  userName?: DeserializedType<T, 'Edm.String'> | null;
  superuser?: BoYesNoEnum | null;
  eMail?: DeserializedType<T, 'Edm.String'> | null;
  mobilePhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaults?: DeserializedType<T, 'Edm.String'> | null;
  faxNumber?: DeserializedType<T, 'Edm.String'> | null;
  branch?: DeserializedType<T, 'Edm.Int32'> | null;
  department?: DeserializedType<T, 'Edm.Int32'> | null;
  languageCode?: BoSuppLangs | null;
  locked?: BoYesNoEnum | null;
  group?: BoUserGroup | null;
  maxDiscountGeneral?: DeserializedType<T, 'Edm.Double'> | null;
  maxDiscountSales?: DeserializedType<T, 'Edm.Double'> | null;
  maxDiscountPurchase?: DeserializedType<T, 'Edm.Double'> | null;
  cashLimit?: BoYesNoEnum | null;
  maxCashAmtForIncmngPayts?: DeserializedType<T, 'Edm.Double'> | null;
  lastLogoutDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastLoginTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  lastLogoutTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  lastPasswordChangeTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  lastPasswordChangedBy?: DeserializedType<T, 'Edm.String'> | null;
  userPermission?: UserPermissionItem<T>[] | null;
  userActionRecord?: UserActionRecordItem<T>[] | null;
  userGroupByUser?: UserGroupByUserItem<T>[] | null;
  userBranchAssignment?: UserBranchAssignmentItem<T>[] | null;
  salesOpportunities: SalesOpportunitiesType<T>[];
  userDefaultGroups: UserDefaultGroupsType<T>[];
  legalData: LegalDataType<T>[];
  purchaseQuotations: PurchaseQuotationsType<T>[];
  serviceCalls: ServiceCallsType<T>[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType<T>[];
  correctionInvoice: CorrectionInvoiceType<T>[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType<T>[];
  pickLists: PickListsType<T>[];
  inventoryGenEntries: InventoryGenEntriesType<T>[];
  employeesInfo: EmployeesInfoType<T>[];
  orders: OrdersType<T>[];
  wizardPaymentMethods: WizardPaymentMethodsType<T>[];
  serviceContracts: ServiceContractsType<T>[];
  inventoryGenExits: InventoryGenExitsType<T>[];
  materialRevaluation: MaterialRevaluationType<T>[];
  drafts: DraftsType<T>[];
  approvalRequests: ApprovalRequestsType<T>[];
  queue: QueueType<T>[];
  returnRequest: ReturnRequestType<T>[];
  deliveryNotes: DeliveryNotesType<T>[];
  branch2?: BranchesType<T> | null;
  department2?: DepartmentsType<T> | null;
  purchaseInvoices: PurchaseInvoicesType<T>[];
  salesTaxAuthorities: SalesTaxAuthoritiesType<T>[];
  invoices: InvoicesType<T>[];
  creditNotes: CreditNotesType<T>[];
  salesTaxAuthoritiesTypes: SalesTaxAuthoritiesTypesType<T>[];
  knowledgeBaseSolutions: KnowledgeBaseSolutionsType<T>[];
  contacts: ContactsType<T>[];
  purchaseCreditNotes: PurchaseCreditNotesType<T>[];
  productionOrders: ProductionOrdersType<T>[];
  downPayments: DownPaymentsType<T>[];
  purchaseDownPayments: PurchaseDownPaymentsType<T>[];
  purchaseReturns: PurchaseReturnsType<T>[];
  cockpits: CockpitsType<T>[];
  userPermissionTree: UserPermissionTreeType<T>[];
  activities: ActivitiesType<T>[];
  purchaseOrders: PurchaseOrdersType<T>[];
  quotations: QuotationsType<T>[];
  returns: ReturnsType<T>[];
  goodsReturnRequest: GoodsReturnRequestType<T>[];
  salesTaxCodes: SalesTaxCodesType<T>[];
  bankPages: BankPagesType<T>[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType<T>[];
  purchaseRequests: PurchaseRequestsType<T>[];
  formPreferences: FormPreferencesType<T>[];
}
