/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesPersonsRequestBuilder } from './SalesPersonsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "SalesPersons" of service "SAPB1".
 */
export class SalesPersons extends Entity implements SalesPersonsType {
  /**
   * Technical entity name for SalesPersons.
   */
  static _entityName = 'SalesPersons';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SalesPersons.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Sales Employee Code.
   * @nullable
   */
  salesEmployeeCode?: number;
  /**
   * Sales Employee Name.
   * @nullable
   */
  salesEmployeeName?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Commission For Sales Employee.
   * @nullable
   */
  commissionForSalesEmployee?: number;
  /**
   * Commission Group.
   * @nullable
   */
  commissionGroup?: number;
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: number;
  /**
   * One-to-many navigation property to the [[SalesOpportunities]] entity.
   */
  salesOpportunities!: SalesOpportunities[];
  /**
   * One-to-many navigation property to the [[UserDefaultGroups]] entity.
   */
  userDefaultGroups!: UserDefaultGroups[];
  /**
   * One-to-many navigation property to the [[InventoryGenEntries]] entity.
   */
  inventoryGenEntries!: InventoryGenEntries[];
  /**
   * One-to-many navigation property to the [[PurchaseQuotations]] entity.
   */
  purchaseQuotations!: PurchaseQuotations[];
  /**
   * One-to-one navigation property to the [[CommissionGroups]] entity.
   */
  commissionGroup2!: CommissionGroups;
  /**
   * One-to-many navigation property to the [[Contacts]] entity.
   */
  contacts!: Contacts[];
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
   * One-to-many navigation property to the [[Orders]] entity.
   */
  orders!: Orders[];
  /**
   * One-to-many navigation property to the [[InventoryTransferRequests]] entity.
   */
  inventoryTransferRequests!: InventoryTransferRequests[];
  /**
   * One-to-many navigation property to the [[Activities]] entity.
   */
  activities!: Activities[];
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
   * One-to-many navigation property to the [[EmployeesInfo]] entity.
   */
  employeesInfo!: EmployeesInfo[];
  /**
   * One-to-many navigation property to the [[PurchaseOrders]] entity.
   */
  purchaseOrders!: PurchaseOrders[];
  /**
   * One-to-many navigation property to the [[ProjectManagements]] entity.
   */
  projectManagements!: ProjectManagements[];
  /**
   * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
   */
  goodsReturnRequest!: GoodsReturnRequest[];

  /**
   * Returns an entity builder to construct instances `SalesPersons`.
   * @returns A builder that constructs instances of entity type `SalesPersons`.
   */
  static builder(): EntityBuilderType<SalesPersons, SalesPersonsTypeForceMandatory> {
    return Entity.entityBuilder(SalesPersons);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesPersons` entity type.
   * @returns A `SalesPersons` request builder.
   */
  static requestBuilder(): SalesPersonsRequestBuilder {
    return new SalesPersonsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesPersons`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesPersons`.
   */
  static customField(fieldName: string): CustomField<SalesPersons> {
    return Entity.customFieldSelector(fieldName, SalesPersons);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SalesOpportunities, SalesOpportunitiesType } from './SalesOpportunities';
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { CommissionGroups, CommissionGroupsType } from './CommissionGroups';
import { Contacts, ContactsType } from './Contacts';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Quotations, QuotationsType } from './Quotations';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { StockTransfers, StockTransfersType } from './StockTransfers';
import { Orders, OrdersType } from './Orders';
import { InventoryTransferRequests, InventoryTransferRequestsType } from './InventoryTransferRequests';
import { Activities, ActivitiesType } from './Activities';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { StockTransferDrafts, StockTransferDraftsType } from './StockTransferDrafts';
import { Returns, ReturnsType } from './Returns';
import { CorrectionInvoiceReversal, CorrectionInvoiceReversalType } from './CorrectionInvoiceReversal';
import { CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType } from './CorrectionPurchaseInvoice';
import { CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType } from './CorrectionPurchaseInvoiceReversal';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { ProjectManagements, ProjectManagementsType } from './ProjectManagements';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';

export interface SalesPersonsType {
  salesEmployeeCode?: number;
  salesEmployeeName?: string;
  remarks?: string;
  commissionForSalesEmployee?: number;
  commissionGroup?: number;
  employeeId?: number;
  salesOpportunities: SalesOpportunitiesType[];
  userDefaultGroups: UserDefaultGroupsType[];
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  commissionGroup2: CommissionGroupsType;
  contacts: ContactsType[];
  deliveryNotes: DeliveryNotesType[];
  businessPartners: BusinessPartnersType[];
  quotations: QuotationsType[];
  inventoryGenExits: InventoryGenExitsType[];
  purchaseRequests: PurchaseRequestsType[];
  returnRequest: ReturnRequestType[];
  purchaseReturns: PurchaseReturnsType[];
  invoices: InvoicesType[];
  creditNotes: CreditNotesType[];
  stockTransfers: StockTransfersType[];
  orders: OrdersType[];
  inventoryTransferRequests: InventoryTransferRequestsType[];
  activities: ActivitiesType[];
  downPayments: DownPaymentsType[];
  drafts: DraftsType[];
  stockTransferDrafts: StockTransferDraftsType[];
  returns: ReturnsType[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
  purchaseInvoices: PurchaseInvoicesType[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
  correctionInvoice: CorrectionInvoiceType[];
  purchaseCreditNotes: PurchaseCreditNotesType[];
  purchaseDownPayments: PurchaseDownPaymentsType[];
  employeesInfo: EmployeesInfoType[];
  purchaseOrders: PurchaseOrdersType[];
  projectManagements: ProjectManagementsType[];
  goodsReturnRequest: GoodsReturnRequestType[];
}

export interface SalesPersonsTypeForceMandatory {
  salesEmployeeCode: number;
  salesEmployeeName: string;
  remarks: string;
  commissionForSalesEmployee: number;
  commissionGroup: number;
  employeeId: number;
  salesOpportunities: SalesOpportunitiesType[];
  userDefaultGroups: UserDefaultGroupsType[];
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  commissionGroup2: CommissionGroupsType;
  contacts: ContactsType[];
  deliveryNotes: DeliveryNotesType[];
  businessPartners: BusinessPartnersType[];
  quotations: QuotationsType[];
  inventoryGenExits: InventoryGenExitsType[];
  purchaseRequests: PurchaseRequestsType[];
  returnRequest: ReturnRequestType[];
  purchaseReturns: PurchaseReturnsType[];
  invoices: InvoicesType[];
  creditNotes: CreditNotesType[];
  stockTransfers: StockTransfersType[];
  orders: OrdersType[];
  inventoryTransferRequests: InventoryTransferRequestsType[];
  activities: ActivitiesType[];
  downPayments: DownPaymentsType[];
  drafts: DraftsType[];
  stockTransferDrafts: StockTransferDraftsType[];
  returns: ReturnsType[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
  purchaseInvoices: PurchaseInvoicesType[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
  correctionInvoice: CorrectionInvoiceType[];
  purchaseCreditNotes: PurchaseCreditNotesType[];
  purchaseDownPayments: PurchaseDownPaymentsType[];
  employeesInfo: EmployeesInfoType[];
  purchaseOrders: PurchaseOrdersType[];
  projectManagements: ProjectManagementsType[];
  goodsReturnRequest: GoodsReturnRequestType[];
}

export namespace SalesPersons {
  /**
   * Static representation of the [[salesEmployeeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_EMPLOYEE_CODE: NumberField<SalesPersons> = new NumberField('SalesEmployeeCode', SalesPersons, 'Edm.Int32');
  /**
   * Static representation of the [[salesEmployeeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_EMPLOYEE_NAME: StringField<SalesPersons> = new StringField('SalesEmployeeName', SalesPersons, 'Edm.String');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<SalesPersons> = new StringField('Remarks', SalesPersons, 'Edm.String');
  /**
   * Static representation of the [[commissionForSalesEmployee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_FOR_SALES_EMPLOYEE: NumberField<SalesPersons> = new NumberField('CommissionForSalesEmployee', SalesPersons, 'Edm.Double');
  /**
   * Static representation of the [[commissionGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_GROUP: NumberField<SalesPersons> = new NumberField('CommissionGroup', SalesPersons, 'Edm.Int32');
  /**
   * Static representation of the [[employeeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_ID: NumberField<SalesPersons> = new NumberField('EmployeeID', SalesPersons, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES: OneToManyLink<SalesPersons, SalesOpportunities> = new OneToManyLink('SalesOpportunities', SalesPersons, SalesOpportunities);
  /**
   * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_DEFAULT_GROUPS: OneToManyLink<SalesPersons, UserDefaultGroups> = new OneToManyLink('UserDefaultGroups', SalesPersons, UserDefaultGroups);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<SalesPersons, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', SalesPersons, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<SalesPersons, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', SalesPersons, PurchaseQuotations);
  /**
   * Static representation of the one-to-one navigation property [[commissionGroup2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_GROUP_2: OneToOneLink<SalesPersons, CommissionGroups> = new OneToOneLink('CommissionGroup2', SalesPersons, CommissionGroups);
  /**
   * Static representation of the one-to-many navigation property [[contacts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACTS: OneToManyLink<SalesPersons, Contacts> = new OneToManyLink('Contacts', SalesPersons, Contacts);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<SalesPersons, DeliveryNotes> = new OneToManyLink('DeliveryNotes', SalesPersons, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<SalesPersons, BusinessPartners> = new OneToManyLink('BusinessPartners', SalesPersons, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<SalesPersons, Quotations> = new OneToManyLink('Quotations', SalesPersons, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<SalesPersons, InventoryGenExits> = new OneToManyLink('InventoryGenExits', SalesPersons, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<SalesPersons, PurchaseRequests> = new OneToManyLink('PurchaseRequests', SalesPersons, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<SalesPersons, ReturnRequest> = new OneToManyLink('ReturnRequest', SalesPersons, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<SalesPersons, PurchaseReturns> = new OneToManyLink('PurchaseReturns', SalesPersons, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<SalesPersons, Invoices> = new OneToManyLink('Invoices', SalesPersons, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<SalesPersons, CreditNotes> = new OneToManyLink('CreditNotes', SalesPersons, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFERS: OneToManyLink<SalesPersons, StockTransfers> = new OneToManyLink('StockTransfers', SalesPersons, StockTransfers);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<SalesPersons, Orders> = new OneToManyLink('Orders', SalesPersons, Orders);
  /**
   * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_TRANSFER_REQUESTS: OneToManyLink<SalesPersons, InventoryTransferRequests> = new OneToManyLink('InventoryTransferRequests', SalesPersons, InventoryTransferRequests);
  /**
   * Static representation of the one-to-many navigation property [[activities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITIES: OneToManyLink<SalesPersons, Activities> = new OneToManyLink('Activities', SalesPersons, Activities);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<SalesPersons, DownPayments> = new OneToManyLink('DownPayments', SalesPersons, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<SalesPersons, Drafts> = new OneToManyLink('Drafts', SalesPersons, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_DRAFTS: OneToManyLink<SalesPersons, StockTransferDrafts> = new OneToManyLink('StockTransferDrafts', SalesPersons, StockTransferDrafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<SalesPersons, Returns> = new OneToManyLink('Returns', SalesPersons, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<SalesPersons, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', SalesPersons, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<SalesPersons, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', SalesPersons, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<SalesPersons, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', SalesPersons, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<SalesPersons, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', SalesPersons, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<SalesPersons, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', SalesPersons, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<SalesPersons, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', SalesPersons, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<SalesPersons, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', SalesPersons, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<SalesPersons, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', SalesPersons, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEES_INFO: OneToManyLink<SalesPersons, EmployeesInfo> = new OneToManyLink('EmployeesInfo', SalesPersons, EmployeesInfo);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<SalesPersons, PurchaseOrders> = new OneToManyLink('PurchaseOrders', SalesPersons, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_MANAGEMENTS: OneToManyLink<SalesPersons, ProjectManagements> = new OneToManyLink('ProjectManagements', SalesPersons, ProjectManagements);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<SalesPersons, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', SalesPersons, GoodsReturnRequest);
  /**
   * All fields of the SalesPersons entity.
   */
  export const _allFields: Array<NumberField<SalesPersons> | StringField<SalesPersons> | OneToManyLink<SalesPersons, SalesOpportunities> | OneToManyLink<SalesPersons, UserDefaultGroups> | OneToManyLink<SalesPersons, InventoryGenEntries> | OneToManyLink<SalesPersons, PurchaseQuotations> | OneToOneLink<SalesPersons, CommissionGroups> | OneToManyLink<SalesPersons, Contacts> | OneToManyLink<SalesPersons, DeliveryNotes> | OneToManyLink<SalesPersons, BusinessPartners> | OneToManyLink<SalesPersons, Quotations> | OneToManyLink<SalesPersons, InventoryGenExits> | OneToManyLink<SalesPersons, PurchaseRequests> | OneToManyLink<SalesPersons, ReturnRequest> | OneToManyLink<SalesPersons, PurchaseReturns> | OneToManyLink<SalesPersons, Invoices> | OneToManyLink<SalesPersons, CreditNotes> | OneToManyLink<SalesPersons, StockTransfers> | OneToManyLink<SalesPersons, Orders> | OneToManyLink<SalesPersons, InventoryTransferRequests> | OneToManyLink<SalesPersons, Activities> | OneToManyLink<SalesPersons, DownPayments> | OneToManyLink<SalesPersons, Drafts> | OneToManyLink<SalesPersons, StockTransferDrafts> | OneToManyLink<SalesPersons, Returns> | OneToManyLink<SalesPersons, CorrectionInvoiceReversal> | OneToManyLink<SalesPersons, CorrectionPurchaseInvoice> | OneToManyLink<SalesPersons, CorrectionPurchaseInvoiceReversal> | OneToManyLink<SalesPersons, PurchaseInvoices> | OneToManyLink<SalesPersons, PurchaseDeliveryNotes> | OneToManyLink<SalesPersons, CorrectionInvoice> | OneToManyLink<SalesPersons, PurchaseCreditNotes> | OneToManyLink<SalesPersons, PurchaseDownPayments> | OneToManyLink<SalesPersons, EmployeesInfo> | OneToManyLink<SalesPersons, PurchaseOrders> | OneToManyLink<SalesPersons, ProjectManagements> | OneToManyLink<SalesPersons, GoodsReturnRequest>> = [
    SalesPersons.SALES_EMPLOYEE_CODE,
    SalesPersons.SALES_EMPLOYEE_NAME,
    SalesPersons.REMARKS,
    SalesPersons.COMMISSION_FOR_SALES_EMPLOYEE,
    SalesPersons.COMMISSION_GROUP,
    SalesPersons.EMPLOYEE_ID,
    SalesPersons.SALES_OPPORTUNITIES,
    SalesPersons.USER_DEFAULT_GROUPS,
    SalesPersons.INVENTORY_GEN_ENTRIES,
    SalesPersons.PURCHASE_QUOTATIONS,
    SalesPersons.COMMISSION_GROUP_2,
    SalesPersons.CONTACTS,
    SalesPersons.DELIVERY_NOTES,
    SalesPersons.BUSINESS_PARTNERS,
    SalesPersons.QUOTATIONS,
    SalesPersons.INVENTORY_GEN_EXITS,
    SalesPersons.PURCHASE_REQUESTS,
    SalesPersons.RETURN_REQUEST,
    SalesPersons.PURCHASE_RETURNS,
    SalesPersons.INVOICES,
    SalesPersons.CREDIT_NOTES,
    SalesPersons.STOCK_TRANSFERS,
    SalesPersons.ORDERS,
    SalesPersons.INVENTORY_TRANSFER_REQUESTS,
    SalesPersons.ACTIVITIES,
    SalesPersons.DOWN_PAYMENTS,
    SalesPersons.DRAFTS,
    SalesPersons.STOCK_TRANSFER_DRAFTS,
    SalesPersons.RETURNS,
    SalesPersons.CORRECTION_INVOICE_REVERSAL,
    SalesPersons.CORRECTION_PURCHASE_INVOICE,
    SalesPersons.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    SalesPersons.PURCHASE_INVOICES,
    SalesPersons.PURCHASE_DELIVERY_NOTES,
    SalesPersons.CORRECTION_INVOICE,
    SalesPersons.PURCHASE_CREDIT_NOTES,
    SalesPersons.PURCHASE_DOWN_PAYMENTS,
    SalesPersons.EMPLOYEES_INFO,
    SalesPersons.PURCHASE_ORDERS,
    SalesPersons.PROJECT_MANAGEMENTS,
    SalesPersons.GOODS_RETURN_REQUEST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesPersons> = new AllFields('*', SalesPersons);
  /**
   * All key fields of the SalesPersons entity.
   */
  export const _keyFields: Array<Field<SalesPersons>> = [SalesPersons.SALES_EMPLOYEE_CODE];
  /**
   * Mapping of all key field names to the respective static field property SalesPersons.
   */
  export const _keys: { [keys: string]: Field<SalesPersons> } = SalesPersons._keyFields.reduce((acc: { [keys: string]: Field<SalesPersons> }, field: Field<SalesPersons>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
