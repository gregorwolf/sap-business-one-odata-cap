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
import type { CountriesApi } from './CountriesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { DomesticBankAccountValidationEnum } from './DomesticBankAccountValidationEnum';
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { Warehouses, WarehousesType } from './Warehouses';
import { ChecksforPayment, ChecksforPaymentType } from './ChecksforPayment';
import {
  PurchaseQuotations,
  PurchaseQuotationsType
} from './PurchaseQuotations';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import {
  CorrectionInvoiceReversal,
  CorrectionInvoiceReversalType
} from './CorrectionInvoiceReversal';
import {
  CustomerEquipmentCards,
  CustomerEquipmentCardsType
} from './CustomerEquipmentCards';
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
import { Banks, BanksType } from './Banks';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Orders, OrdersType } from './Orders';
import {
  WizardPaymentMethods,
  WizardPaymentMethodsType
} from './WizardPaymentMethods';
import {
  GlAccountAdvancedRules,
  GlAccountAdvancedRulesType
} from './GlAccountAdvancedRules';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { Drafts, DraftsType } from './Drafts';
import {
  ExportDeterminations,
  ExportDeterminationsType
} from './ExportDeterminations';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { Invoices, InvoicesType } from './Invoices';
import { States, StatesType } from './States';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
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
import { HouseBankAccounts, HouseBankAccountsType } from './HouseBankAccounts';
import {
  GoodsReturnRequest,
  GoodsReturnRequestType
} from './GoodsReturnRequest';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import {
  CorrectionPurchaseInvoiceReversal,
  CorrectionPurchaseInvoiceReversalType
} from './CorrectionPurchaseInvoiceReversal';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { CreditCards, CreditCardsType } from './CreditCards';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';

/**
 * This class represents the entity "Countries" of service "SAPB1".
 */
export class Countries<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CountriesType<T>
{
  /**
   * Technical entity name for Countries.
   */
  static _entityName = 'Countries';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Countries entity
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
   * Code For Reports.
   * @nullable
   */
  codeForReports?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Format.
   * @nullable
   */
  addressFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Eu.
   * @nullable
   */
  eu?: BoYesNoEnum | null;
  /**
   * Number Of Digits For Tax Id.
   * @nullable
   */
  numberOfDigitsForTaxId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bank Code Digits.
   * @nullable
   */
  bankCodeDigits?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bank Branch Digits.
   * @nullable
   */
  bankBranchDigits?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bank Account Digits.
   * @nullable
   */
  bankAccountDigits?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bank Control Key Digits.
   * @nullable
   */
  bankControlKeyDigits?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Domestic Account Validation.
   * @nullable
   */
  domesticAccountValidation?: DomesticBankAccountValidationEnum | null;
  /**
   * Iban Validation.
   * @nullable
   */
  ibanValidation?: BoYesNoEnum | null;
  /**
   * Blacklisted.
   * @nullable
   */
  blacklisted?: BoYesNoEnum | null;
  /**
   * Uic Country Code.
   * @nullable
   */
  uicCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eaeu.
   * @nullable
   */
  eaeu?: BoYesNoEnum | null;
  /**
   * Iso Alpha 2 Code.
   * @nullable
   */
  isoAlpha2Code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iso Alpha 3 Code.
   * @nullable
   */
  isoAlpha3Code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iso Numeric.
   * @nullable
   */
  isoNumeric?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link UserDefaultGroups} entity.
   */
  userDefaultGroups!: UserDefaultGroups<T>[];
  /**
   * One-to-many navigation property to the {@link Warehouses} entity.
   */
  warehouses!: Warehouses<T>[];
  /**
   * One-to-many navigation property to the {@link ChecksforPayment} entity.
   */
  checksforPayment!: ChecksforPayment<T>[];
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
   * One-to-many navigation property to the {@link CustomerEquipmentCards} entity.
   */
  customerEquipmentCards!: CustomerEquipmentCards<T>[];
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
   * One-to-many navigation property to the {@link Banks} entity.
   */
  banks!: Banks<T>[];
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
   * One-to-many navigation property to the {@link GlAccountAdvancedRules} entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenExits} entity.
   */
  inventoryGenExits!: InventoryGenExits<T>[];
  /**
   * One-to-many navigation property to the {@link Drafts} entity.
   */
  drafts!: Drafts<T>[];
  /**
   * One-to-many navigation property to the {@link ExportDeterminations} entity.
   */
  exportDeterminations!: ExportDeterminations<T>[];
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
   * One-to-many navigation property to the {@link Invoices} entity.
   */
  invoices!: Invoices<T>[];
  /**
   * One-to-many navigation property to the {@link States} entity.
   */
  states!: States<T>[];
  /**
   * One-to-many navigation property to the {@link CreditNotes} entity.
   */
  creditNotes!: CreditNotes<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentDrafts} entity.
   */
  paymentDrafts!: PaymentDrafts<T>[];
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
   * One-to-many navigation property to the {@link HouseBankAccounts} entity.
   */
  houseBankAccounts!: HouseBankAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link GoodsReturnRequest} entity.
   */
  goodsReturnRequest!: GoodsReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link WarehouseLocations} entity.
   */
  warehouseLocations!: WarehouseLocations<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoiceReversal} entity.
   */
  correctionPurchaseInvoiceReversal!: CorrectionPurchaseInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link IncomingPayments} entity.
   */
  incomingPayments!: IncomingPayments<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequests} entity.
   */
  purchaseRequests!: PurchaseRequests<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlaces!: BusinessPlaces<T>[];
  /**
   * One-to-many navigation property to the {@link CreditCards} entity.
   */
  creditCards!: CreditCards<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPayments} entity.
   */
  vendorPayments!: VendorPayments<T>[];

  constructor(readonly _entityApi: CountriesApi<T>) {
    super(_entityApi);
  }
}

export interface CountriesType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  codeForReports?: DeserializedType<T, 'Edm.String'> | null;
  addressFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  eu?: BoYesNoEnum | null;
  numberOfDigitsForTaxId?: DeserializedType<T, 'Edm.Int32'> | null;
  bankCodeDigits?: DeserializedType<T, 'Edm.Int32'> | null;
  bankBranchDigits?: DeserializedType<T, 'Edm.Int32'> | null;
  bankAccountDigits?: DeserializedType<T, 'Edm.Int32'> | null;
  bankControlKeyDigits?: DeserializedType<T, 'Edm.Int32'> | null;
  domesticAccountValidation?: DomesticBankAccountValidationEnum | null;
  ibanValidation?: BoYesNoEnum | null;
  blacklisted?: BoYesNoEnum | null;
  uicCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  eaeu?: BoYesNoEnum | null;
  isoAlpha2Code?: DeserializedType<T, 'Edm.String'> | null;
  isoAlpha3Code?: DeserializedType<T, 'Edm.String'> | null;
  isoNumeric?: DeserializedType<T, 'Edm.String'> | null;
  userDefaultGroups: UserDefaultGroupsType<T>[];
  warehouses: WarehousesType<T>[];
  checksforPayment: ChecksforPaymentType<T>[];
  purchaseQuotations: PurchaseQuotationsType<T>[];
  serviceCalls: ServiceCallsType<T>[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType<T>[];
  customerEquipmentCards: CustomerEquipmentCardsType<T>[];
  correctionInvoice: CorrectionInvoiceType<T>[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType<T>[];
  inventoryGenEntries: InventoryGenEntriesType<T>[];
  banks: BanksType<T>[];
  employeesInfo: EmployeesInfoType<T>[];
  orders: OrdersType<T>[];
  wizardPaymentMethods: WizardPaymentMethodsType<T>[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType<T>[];
  inventoryGenExits: InventoryGenExitsType<T>[];
  drafts: DraftsType<T>[];
  exportDeterminations: ExportDeterminationsType<T>[];
  returnRequest: ReturnRequestType<T>[];
  deliveryNotes: DeliveryNotesType<T>[];
  purchaseInvoices: PurchaseInvoicesType<T>[];
  invoices: InvoicesType<T>[];
  states: StatesType<T>[];
  creditNotes: CreditNotesType<T>[];
  paymentDrafts: PaymentDraftsType<T>[];
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
  houseBankAccounts: HouseBankAccountsType<T>[];
  goodsReturnRequest: GoodsReturnRequestType<T>[];
  warehouseLocations: WarehouseLocationsType<T>[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType<T>[];
  incomingPayments: IncomingPaymentsType<T>[];
  purchaseRequests: PurchaseRequestsType<T>[];
  businessPlaces: BusinessPlacesType<T>[];
  creditCards: CreditCardsType<T>[];
  vendorPayments: VendorPaymentsType<T>[];
}
