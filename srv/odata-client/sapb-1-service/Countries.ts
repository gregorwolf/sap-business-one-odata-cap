/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CountriesRequestBuilder } from './CountriesRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { DomesticBankAccountValidationEnum } from './DomesticBankAccountValidationEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Countries" of service "SAPB1".
 */
export class Countries extends EntityV4 implements CountriesType {
  /**
   * Technical entity name for Countries.
   */
  static _entityName = 'Countries';
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
   * Code For Reports.
   * @nullable
   */
  codeForReports?: string;
  /**
   * Address Format.
   * @nullable
   */
  addressFormat?: number;
  /**
   * Eu.
   * @nullable
   */
  eu?: BoYesNoEnum;
  /**
   * Number Of Digits For Tax Id.
   * @nullable
   */
  numberOfDigitsForTaxId?: number;
  /**
   * Bank Code Digits.
   * @nullable
   */
  bankCodeDigits?: number;
  /**
   * Bank Branch Digits.
   * @nullable
   */
  bankBranchDigits?: number;
  /**
   * Bank Account Digits.
   * @nullable
   */
  bankAccountDigits?: number;
  /**
   * Bank Control Key Digits.
   * @nullable
   */
  bankControlKeyDigits?: number;
  /**
   * Domestic Account Validation.
   * @nullable
   */
  domesticAccountValidation?: DomesticBankAccountValidationEnum;
  /**
   * Iban Validation.
   * @nullable
   */
  ibanValidation?: BoYesNoEnum;
  /**
   * Blacklisted.
   * @nullable
   */
  blacklisted?: BoYesNoEnum;
  /**
   * Uic Country Code.
   * @nullable
   */
  uicCountryCode?: string;
  /**
   * Eaeu.
   * @nullable
   */
  eaeu?: BoYesNoEnum;
  /**
   * One-to-many navigation property to the [[UserDefaultGroups]] entity.
   */
  userDefaultGroups!: UserDefaultGroups[];
  /**
   * One-to-many navigation property to the [[Warehouses]] entity.
   */
  warehouses!: Warehouses[];
  /**
   * One-to-many navigation property to the [[InventoryGenEntries]] entity.
   */
  inventoryGenEntries!: InventoryGenEntries[];
  /**
   * One-to-many navigation property to the [[ChecksforPayment]] entity.
   */
  checksforPayment!: ChecksforPayment[];
  /**
   * One-to-many navigation property to the [[PurchaseQuotations]] entity.
   */
  purchaseQuotations!: PurchaseQuotations[];
  /**
   * One-to-many navigation property to the [[VendorPayments]] entity.
   */
  vendorPayments!: VendorPayments[];
  /**
   * One-to-many navigation property to the [[CreditCards]] entity.
   */
  creditCards!: CreditCards[];
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
   * One-to-many navigation property to the [[WarehouseLocations]] entity.
   */
  warehouseLocations!: WarehouseLocations[];
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
   * One-to-many navigation property to the [[GlAccountAdvancedRules]] entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules[];
  /**
   * One-to-many navigation property to the [[States]] entity.
   */
  states!: States[];
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
   * One-to-many navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlaces!: BusinessPlaces[];
  /**
   * One-to-many navigation property to the [[Orders]] entity.
   */
  orders!: Orders[];
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
   * One-to-many navigation property to the [[WizardPaymentMethods]] entity.
   */
  wizardPaymentMethods!: WizardPaymentMethods[];
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
   * One-to-many navigation property to the [[CustomerEquipmentCards]] entity.
   */
  customerEquipmentCards!: CustomerEquipmentCards[];
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
   * One-to-many navigation property to the [[ServiceCalls]] entity.
   */
  serviceCalls!: ServiceCalls[];
  /**
   * One-to-many navigation property to the [[PurchaseDownPayments]] entity.
   */
  purchaseDownPayments!: PurchaseDownPayments[];
  /**
   * One-to-many navigation property to the [[EmployeesInfo]] entity.
   */
  employeesInfo!: EmployeesInfo[];
  /**
   * One-to-many navigation property to the [[Banks]] entity.
   */
  banks!: Banks[];
  /**
   * One-to-many navigation property to the [[PurchaseOrders]] entity.
   */
  purchaseOrders!: PurchaseOrders[];
  /**
   * One-to-many navigation property to the [[HouseBankAccounts]] entity.
   */
  houseBankAccounts!: HouseBankAccounts[];
  /**
   * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
   */
  goodsReturnRequest!: GoodsReturnRequest[];
  /**
   * One-to-many navigation property to the [[IncomingPayments]] entity.
   */
  incomingPayments!: IncomingPayments[];

  /**
   * Returns an entity builder to construct instances of `Countries`.
   * @returns A builder that constructs instances of entity type `Countries`.
   */
  static builder(): EntityBuilderType<Countries, CountriesType> {
    return EntityV4.entityBuilder(Countries);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Countries` entity type.
   * @returns A `Countries` request builder.
   */
  static requestBuilder(): CountriesRequestBuilder {
    return new CountriesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Countries`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Countries`.
   */
  static customField(fieldName: string): CustomFieldV4<Countries> {
    return EntityV4.customFieldSelector(fieldName, Countries);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { Warehouses, WarehousesType } from './Warehouses';
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { ChecksforPayment, ChecksforPaymentType } from './ChecksforPayment';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { CreditCards, CreditCardsType } from './CreditCards';
import { Contacts, ContactsType } from './Contacts';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Quotations, QuotationsType } from './Quotations';
import { WarehouseLocations, WarehouseLocationsType } from './WarehouseLocations';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { GlAccountAdvancedRules, GlAccountAdvancedRulesType } from './GlAccountAdvancedRules';
import { States, StatesType } from './States';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { Orders, OrdersType } from './Orders';
import { Activities, ActivitiesType } from './Activities';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { WizardPaymentMethods, WizardPaymentMethodsType } from './WizardPaymentMethods';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { Returns, ReturnsType } from './Returns';
import { CorrectionInvoiceReversal, CorrectionInvoiceReversalType } from './CorrectionInvoiceReversal';
import { CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType } from './CorrectionPurchaseInvoice';
import { CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType } from './CorrectionPurchaseInvoiceReversal';
import { CustomerEquipmentCards, CustomerEquipmentCardsType } from './CustomerEquipmentCards';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Banks, BanksType } from './Banks';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { HouseBankAccounts, HouseBankAccountsType } from './HouseBankAccounts';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';

export interface CountriesType {
  code?: string | null;
  name?: string | null;
  codeForReports?: string | null;
  addressFormat?: number | null;
  eu?: BoYesNoEnum | null;
  numberOfDigitsForTaxId?: number | null;
  bankCodeDigits?: number | null;
  bankBranchDigits?: number | null;
  bankAccountDigits?: number | null;
  bankControlKeyDigits?: number | null;
  domesticAccountValidation?: DomesticBankAccountValidationEnum | null;
  ibanValidation?: BoYesNoEnum | null;
  blacklisted?: BoYesNoEnum | null;
  uicCountryCode?: string | null;
  eaeu?: BoYesNoEnum | null;
  userDefaultGroups: UserDefaultGroupsType[];
  warehouses: WarehousesType[];
  inventoryGenEntries: InventoryGenEntriesType[];
  checksforPayment: ChecksforPaymentType[];
  purchaseQuotations: PurchaseQuotationsType[];
  vendorPayments: VendorPaymentsType[];
  creditCards: CreditCardsType[];
  contacts: ContactsType[];
  deliveryNotes: DeliveryNotesType[];
  businessPartners: BusinessPartnersType[];
  quotations: QuotationsType[];
  warehouseLocations: WarehouseLocationsType[];
  inventoryGenExits: InventoryGenExitsType[];
  purchaseRequests: PurchaseRequestsType[];
  returnRequest: ReturnRequestType[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType[];
  states: StatesType[];
  purchaseReturns: PurchaseReturnsType[];
  invoices: InvoicesType[];
  creditNotes: CreditNotesType[];
  businessPlaces: BusinessPlacesType[];
  orders: OrdersType[];
  activities: ActivitiesType[];
  downPayments: DownPaymentsType[];
  drafts: DraftsType[];
  wizardPaymentMethods: WizardPaymentMethodsType[];
  paymentDrafts: PaymentDraftsType[];
  returns: ReturnsType[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
  customerEquipmentCards: CustomerEquipmentCardsType[];
  purchaseInvoices: PurchaseInvoicesType[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
  correctionInvoice: CorrectionInvoiceType[];
  purchaseCreditNotes: PurchaseCreditNotesType[];
  serviceCalls: ServiceCallsType[];
  purchaseDownPayments: PurchaseDownPaymentsType[];
  employeesInfo: EmployeesInfoType[];
  banks: BanksType[];
  purchaseOrders: PurchaseOrdersType[];
  houseBankAccounts: HouseBankAccountsType[];
  goodsReturnRequest: GoodsReturnRequestType[];
  incomingPayments: IncomingPaymentsType[];
}

export namespace Countries {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<Countries> = new StringField('Code', Countries, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<Countries> = new StringField('Name', Countries, 'Edm.String');
  /**
   * Static representation of the [[codeForReports]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE_FOR_REPORTS: StringField<Countries> = new StringField('CodeForReports', Countries, 'Edm.String');
  /**
   * Static representation of the [[addressFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_FORMAT: NumberField<Countries> = new NumberField('AddressFormat', Countries, 'Edm.Int32');
  /**
   * Static representation of the [[eu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EU: EnumField<Countries> = new EnumField('EU', Countries);
  /**
   * Static representation of the [[numberOfDigitsForTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_DIGITS_FOR_TAX_ID: NumberField<Countries> = new NumberField('NumberOfDigitsForTaxID', Countries, 'Edm.Int32');
  /**
   * Static representation of the [[bankCodeDigits]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CODE_DIGITS: NumberField<Countries> = new NumberField('BankCodeDigits', Countries, 'Edm.Int32');
  /**
   * Static representation of the [[bankBranchDigits]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_BRANCH_DIGITS: NumberField<Countries> = new NumberField('BankBranchDigits', Countries, 'Edm.Int32');
  /**
   * Static representation of the [[bankAccountDigits]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_ACCOUNT_DIGITS: NumberField<Countries> = new NumberField('BankAccountDigits', Countries, 'Edm.Int32');
  /**
   * Static representation of the [[bankControlKeyDigits]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CONTROL_KEY_DIGITS: NumberField<Countries> = new NumberField('BankControlKeyDigits', Countries, 'Edm.Int32');
  /**
   * Static representation of the [[domesticAccountValidation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOMESTIC_ACCOUNT_VALIDATION: EnumField<Countries> = new EnumField('DomesticAccountValidation', Countries);
  /**
   * Static representation of the [[ibanValidation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IBAN_VALIDATION: EnumField<Countries> = new EnumField('IbanValidation', Countries);
  /**
   * Static representation of the [[blacklisted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLACKLISTED: EnumField<Countries> = new EnumField('Blacklisted', Countries);
  /**
   * Static representation of the [[uicCountryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UIC_COUNTRY_CODE: StringField<Countries> = new StringField('UICCountryCode', Countries, 'Edm.String');
  /**
   * Static representation of the [[eaeu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EAEU: EnumField<Countries> = new EnumField('EAEU', Countries);
  /**
   * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_DEFAULT_GROUPS: OneToManyLink<Countries, UserDefaultGroups> = new OneToManyLink('UserDefaultGroups', Countries, UserDefaultGroups);
  /**
   * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSES: OneToManyLink<Countries, Warehouses> = new OneToManyLink('Warehouses', Countries, Warehouses);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<Countries, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', Countries, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[checksforPayment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECKSFOR_PAYMENT: OneToManyLink<Countries, ChecksforPayment> = new OneToManyLink('ChecksforPayment', Countries, ChecksforPayment);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<Countries, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', Countries, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_PAYMENTS: OneToManyLink<Countries, VendorPayments> = new OneToManyLink('VendorPayments', Countries, VendorPayments);
  /**
   * Static representation of the one-to-many navigation property [[creditCards]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_CARDS: OneToManyLink<Countries, CreditCards> = new OneToManyLink('CreditCards', Countries, CreditCards);
  /**
   * Static representation of the one-to-many navigation property [[contacts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACTS: OneToManyLink<Countries, Contacts> = new OneToManyLink('Contacts', Countries, Contacts);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<Countries, DeliveryNotes> = new OneToManyLink('DeliveryNotes', Countries, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<Countries, BusinessPartners> = new OneToManyLink('BusinessPartners', Countries, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<Countries, Quotations> = new OneToManyLink('Quotations', Countries, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[warehouseLocations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_LOCATIONS: OneToManyLink<Countries, WarehouseLocations> = new OneToManyLink('WarehouseLocations', Countries, WarehouseLocations);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<Countries, InventoryGenExits> = new OneToManyLink('InventoryGenExits', Countries, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<Countries, PurchaseRequests> = new OneToManyLink('PurchaseRequests', Countries, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<Countries, ReturnRequest> = new OneToManyLink('ReturnRequest', Countries, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<Countries, GlAccountAdvancedRules> = new OneToManyLink('GLAccountAdvancedRules', Countries, GlAccountAdvancedRules);
  /**
   * Static representation of the one-to-many navigation property [[states]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATES: OneToManyLink<Countries, States> = new OneToManyLink('States', Countries, States);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<Countries, PurchaseReturns> = new OneToManyLink('PurchaseReturns', Countries, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<Countries, Invoices> = new OneToManyLink('Invoices', Countries, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<Countries, CreditNotes> = new OneToManyLink('CreditNotes', Countries, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACES: OneToManyLink<Countries, BusinessPlaces> = new OneToManyLink('BusinessPlaces', Countries, BusinessPlaces);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<Countries, Orders> = new OneToManyLink('Orders', Countries, Orders);
  /**
   * Static representation of the one-to-many navigation property [[activities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITIES: OneToManyLink<Countries, Activities> = new OneToManyLink('Activities', Countries, Activities);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<Countries, DownPayments> = new OneToManyLink('DownPayments', Countries, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<Countries, Drafts> = new OneToManyLink('Drafts', Countries, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHODS: OneToManyLink<Countries, WizardPaymentMethods> = new OneToManyLink('WizardPaymentMethods', Countries, WizardPaymentMethods);
  /**
   * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DRAFTS: OneToManyLink<Countries, PaymentDrafts> = new OneToManyLink('PaymentDrafts', Countries, PaymentDrafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<Countries, Returns> = new OneToManyLink('Returns', Countries, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<Countries, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', Countries, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<Countries, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', Countries, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<Countries, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', Countries, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<Countries, CustomerEquipmentCards> = new OneToManyLink('CustomerEquipmentCards', Countries, CustomerEquipmentCards);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<Countries, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', Countries, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<Countries, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', Countries, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<Countries, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', Countries, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<Countries, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', Countries, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALLS: OneToManyLink<Countries, ServiceCalls> = new OneToManyLink('ServiceCalls', Countries, ServiceCalls);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<Countries, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', Countries, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEES_INFO: OneToManyLink<Countries, EmployeesInfo> = new OneToManyLink('EmployeesInfo', Countries, EmployeesInfo);
  /**
   * Static representation of the one-to-many navigation property [[banks]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANKS: OneToManyLink<Countries, Banks> = new OneToManyLink('Banks', Countries, Banks);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<Countries, PurchaseOrders> = new OneToManyLink('PurchaseOrders', Countries, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[houseBankAccounts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_BANK_ACCOUNTS: OneToManyLink<Countries, HouseBankAccounts> = new OneToManyLink('HouseBankAccounts', Countries, HouseBankAccounts);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<Countries, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', Countries, GoodsReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOMING_PAYMENTS: OneToManyLink<Countries, IncomingPayments> = new OneToManyLink('IncomingPayments', Countries, IncomingPayments);
  /**
   * All fields of the Countries entity.
   */
  export const _allFields: Array<StringField<Countries> | NumberField<Countries> | EnumField<Countries> | OneToManyLink<Countries, UserDefaultGroups> | OneToManyLink<Countries, Warehouses> | OneToManyLink<Countries, InventoryGenEntries> | OneToManyLink<Countries, ChecksforPayment> | OneToManyLink<Countries, PurchaseQuotations> | OneToManyLink<Countries, VendorPayments> | OneToManyLink<Countries, CreditCards> | OneToManyLink<Countries, Contacts> | OneToManyLink<Countries, DeliveryNotes> | OneToManyLink<Countries, BusinessPartners> | OneToManyLink<Countries, Quotations> | OneToManyLink<Countries, WarehouseLocations> | OneToManyLink<Countries, InventoryGenExits> | OneToManyLink<Countries, PurchaseRequests> | OneToManyLink<Countries, ReturnRequest> | OneToManyLink<Countries, GlAccountAdvancedRules> | OneToManyLink<Countries, States> | OneToManyLink<Countries, PurchaseReturns> | OneToManyLink<Countries, Invoices> | OneToManyLink<Countries, CreditNotes> | OneToManyLink<Countries, BusinessPlaces> | OneToManyLink<Countries, Orders> | OneToManyLink<Countries, Activities> | OneToManyLink<Countries, DownPayments> | OneToManyLink<Countries, Drafts> | OneToManyLink<Countries, WizardPaymentMethods> | OneToManyLink<Countries, PaymentDrafts> | OneToManyLink<Countries, Returns> | OneToManyLink<Countries, CorrectionInvoiceReversal> | OneToManyLink<Countries, CorrectionPurchaseInvoice> | OneToManyLink<Countries, CorrectionPurchaseInvoiceReversal> | OneToManyLink<Countries, CustomerEquipmentCards> | OneToManyLink<Countries, PurchaseInvoices> | OneToManyLink<Countries, PurchaseDeliveryNotes> | OneToManyLink<Countries, CorrectionInvoice> | OneToManyLink<Countries, PurchaseCreditNotes> | OneToManyLink<Countries, ServiceCalls> | OneToManyLink<Countries, PurchaseDownPayments> | OneToManyLink<Countries, EmployeesInfo> | OneToManyLink<Countries, Banks> | OneToManyLink<Countries, PurchaseOrders> | OneToManyLink<Countries, HouseBankAccounts> | OneToManyLink<Countries, GoodsReturnRequest> | OneToManyLink<Countries, IncomingPayments>> = [
    Countries.CODE,
    Countries.NAME,
    Countries.CODE_FOR_REPORTS,
    Countries.ADDRESS_FORMAT,
    Countries.EU,
    Countries.NUMBER_OF_DIGITS_FOR_TAX_ID,
    Countries.BANK_CODE_DIGITS,
    Countries.BANK_BRANCH_DIGITS,
    Countries.BANK_ACCOUNT_DIGITS,
    Countries.BANK_CONTROL_KEY_DIGITS,
    Countries.DOMESTIC_ACCOUNT_VALIDATION,
    Countries.IBAN_VALIDATION,
    Countries.BLACKLISTED,
    Countries.UIC_COUNTRY_CODE,
    Countries.EAEU,
    Countries.USER_DEFAULT_GROUPS,
    Countries.WAREHOUSES,
    Countries.INVENTORY_GEN_ENTRIES,
    Countries.CHECKSFOR_PAYMENT,
    Countries.PURCHASE_QUOTATIONS,
    Countries.VENDOR_PAYMENTS,
    Countries.CREDIT_CARDS,
    Countries.CONTACTS,
    Countries.DELIVERY_NOTES,
    Countries.BUSINESS_PARTNERS,
    Countries.QUOTATIONS,
    Countries.WAREHOUSE_LOCATIONS,
    Countries.INVENTORY_GEN_EXITS,
    Countries.PURCHASE_REQUESTS,
    Countries.RETURN_REQUEST,
    Countries.GL_ACCOUNT_ADVANCED_RULES,
    Countries.STATES,
    Countries.PURCHASE_RETURNS,
    Countries.INVOICES,
    Countries.CREDIT_NOTES,
    Countries.BUSINESS_PLACES,
    Countries.ORDERS,
    Countries.ACTIVITIES,
    Countries.DOWN_PAYMENTS,
    Countries.DRAFTS,
    Countries.WIZARD_PAYMENT_METHODS,
    Countries.PAYMENT_DRAFTS,
    Countries.RETURNS,
    Countries.CORRECTION_INVOICE_REVERSAL,
    Countries.CORRECTION_PURCHASE_INVOICE,
    Countries.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    Countries.CUSTOMER_EQUIPMENT_CARDS,
    Countries.PURCHASE_INVOICES,
    Countries.PURCHASE_DELIVERY_NOTES,
    Countries.CORRECTION_INVOICE,
    Countries.PURCHASE_CREDIT_NOTES,
    Countries.SERVICE_CALLS,
    Countries.PURCHASE_DOWN_PAYMENTS,
    Countries.EMPLOYEES_INFO,
    Countries.BANKS,
    Countries.PURCHASE_ORDERS,
    Countries.HOUSE_BANK_ACCOUNTS,
    Countries.GOODS_RETURN_REQUEST,
    Countries.INCOMING_PAYMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Countries> = new AllFields('*', Countries);
  /**
   * All key fields of the Countries entity.
   */
  export const _keyFields: Array<Field<Countries>> = [Countries.CODE];
  /**
   * Mapping of all key field names to the respective static field property Countries.
   */
  export const _keys: { [keys: string]: Field<Countries> } = Countries._keyFields.reduce((acc: { [keys: string]: Field<Countries> }, field: Field<Countries>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
