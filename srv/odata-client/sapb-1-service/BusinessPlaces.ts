/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPlacesRequestBuilder } from './BusinessPlacesRequestBuilder';
import { Moment } from 'moment';
import { BusinessPlaceIeNumber, BusinessPlaceIeNumberField } from './BusinessPlaceIeNumber';
import { BusinessPlaceTributaryInfo, BusinessPlaceTributaryInfoField } from './BusinessPlaceTributaryInfo';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "BusinessPlaces" of service "SAPB1".
 */
export class BusinessPlaces extends Entity implements BusinessPlacesType {
  /**
   * Technical entity name for BusinessPlaces.
   */
  static _entityName = 'BusinessPlaces';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BusinessPlaces.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Bpl Name Foreign.
   * @nullable
   */
  bplNameForeign?: string;
  /**
   * Vat Reg Num.
   * @nullable
   */
  vatRegNum?: string;
  /**
   * Rep Name.
   * @nullable
   */
  repName?: string;
  /**
   * Industry.
   * @nullable
   */
  industry?: string;
  /**
   * Business.
   * @nullable
   */
  business?: string;
  /**
   * Address.
   * @nullable
   */
  address?: string;
  /**
   * Addressforeign.
   * @nullable
   */
  addressforeign?: string;
  /**
   * Tax Office No.
   * @nullable
   */
  taxOfficeNo?: string;
  /**
   * Default Customer Id.
   * @nullable
   */
  defaultCustomerId?: string;
  /**
   * Default Vendor Id.
   * @nullable
   */
  defaultVendorId?: string;
  /**
   * Default Warehouse Id.
   * @nullable
   */
  defaultWarehouseId?: string;
  /**
   * Default Tax Code.
   * @nullable
   */
  defaultTaxCode?: string;
  /**
   * Tax Office.
   * @nullable
   */
  taxOffice?: string;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: string;
  /**
   * Federal Tax Id 2.
   * @nullable
   */
  federalTaxId2?: string;
  /**
   * Federal Tax Id 3.
   * @nullable
   */
  federalTaxId3?: string;
  /**
   * Additional Id Number.
   * @nullable
   */
  additionalIdNumber?: string;
  /**
   * Nature Of Company Code.
   * @nullable
   */
  natureOfCompanyCode?: number;
  /**
   * Economic Activity Type Code.
   * @nullable
   */
  economicActivityTypeCode?: number;
  /**
   * Credit Contribution Origin Code.
   * @nullable
   */
  creditContributionOriginCode?: string;
  /**
   * Ipi Period Code.
   * @nullable
   */
  ipiPeriodCode?: string;
  /**
   * Cooperative Association Type Code.
   * @nullable
   */
  cooperativeAssociationTypeCode?: number;
  /**
   * Profit Taxation Code.
   * @nullable
   */
  profitTaxationCode?: number;
  /**
   * Company Qualification Code.
   * @nullable
   */
  companyQualificationCode?: number;
  /**
   * Declarer Type Code.
   * @nullable
   */
  declarerTypeCode?: number;
  /**
   * Preferred State Code.
   * @nullable
   */
  preferredStateCode?: string;
  /**
   * Address Type.
   * @nullable
   */
  addressType?: string;
  /**
   * Street.
   * @nullable
   */
  street?: string;
  /**
   * Street No.
   * @nullable
   */
  streetNo?: string;
  /**
   * Building.
   * @nullable
   */
  building?: string;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: string;
  /**
   * Block.
   * @nullable
   */
  block?: string;
  /**
   * City.
   * @nullable
   */
  city?: string;
  /**
   * State.
   * @nullable
   */
  state?: string;
  /**
   * County.
   * @nullable
   */
  county?: string;
  /**
   * Country.
   * @nullable
   */
  country?: string;
  /**
   * Alias Name.
   * @nullable
   */
  aliasName?: string;
  /**
   * Commercial Register.
   * @nullable
   */
  commercialRegister?: string;
  /**
   * Date Of Incorporation.
   * @nullable
   */
  dateOfIncorporation?: Moment;
  /**
   * Sped Profile.
   * @nullable
   */
  spedProfile?: string;
  /**
   * Environment Type.
   * @nullable
   */
  environmentType?: number;
  /**
   * Payment Clearing Account.
   * @nullable
   */
  paymentClearingAccount?: string;
  /**
   * Global Location Number.
   * @nullable
   */
  globalLocationNumber?: string;
  /**
   * Default Resource Warehouse Id.
   * @nullable
   */
  defaultResourceWarehouseId?: string;
  /**
   * Business Place Ie Numbers.
   * @nullable
   */
  businessPlaceIeNumbers?: BusinessPlaceIeNumber[];
  /**
   * Business Place Tributary Infos.
   * @nullable
   */
  businessPlaceTributaryInfos?: BusinessPlaceTributaryInfo[];
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
   * One-to-many navigation property to the [[VendorPayments]] entity.
   */
  vendorPayments!: VendorPayments[];
  /**
   * One-to-many navigation property to the [[AssetTransfer]] entity.
   */
  assetTransfer!: AssetTransfer[];
  /**
   * One-to-many navigation property to the [[AssetRetirement]] entity.
   */
  assetRetirement!: AssetRetirement[];
  /**
   * One-to-many navigation property to the [[AssetCapitalizationCreditMemo]] entity.
   */
  assetCapitalizationCreditMemo!: AssetCapitalizationCreditMemo[];
  /**
   * One-to-many navigation property to the [[AssetClasses]] entity.
   */
  assetClasses!: AssetClasses[];
  /**
   * One-to-many navigation property to the [[InventoryPostings]] entity.
   */
  inventoryPostings!: InventoryPostings[];
  /**
   * One-to-many navigation property to the [[DeliveryNotes]] entity.
   */
  deliveryNotes!: DeliveryNotes[];
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
   * One-to-many navigation property to the [[AssetCapitalization]] entity.
   */
  assetCapitalization!: AssetCapitalization[];
  /**
   * One-to-many navigation property to the [[CreditNotes]] entity.
   */
  creditNotes!: CreditNotes[];
  /**
   * One-to-many navigation property to the [[StockTransfers]] entity.
   */
  stockTransfers!: StockTransfers[];
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[Warehouses]] entity.
   */
  warehouse!: Warehouses;
  /**
   * One-to-one navigation property to the [[BrazilNumericIndexers]] entity.
   */
  brazilNumericIndexer!: BrazilNumericIndexers;
  /**
   * One-to-one navigation property to the [[BrazilStringIndexers]] entity.
   */
  brazilStringIndexer!: BrazilStringIndexers;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country2!: Countries;
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-many navigation property to the [[Orders]] entity.
   */
  orders!: Orders[];
  /**
   * One-to-many navigation property to the [[InventoryCountings]] entity.
   */
  inventoryCountings!: InventoryCountings[];
  /**
   * One-to-many navigation property to the [[InventoryTransferRequests]] entity.
   */
  inventoryTransferRequests!: InventoryTransferRequests[];
  /**
   * One-to-many navigation property to the [[AssetManualDepreciation]] entity.
   */
  assetManualDepreciation!: AssetManualDepreciation[];
  /**
   * One-to-many navigation property to the [[DownPayments]] entity.
   */
  downPayments!: DownPayments[];
  /**
   * One-to-many navigation property to the [[Drafts]] entity.
   */
  drafts!: Drafts[];
  /**
   * One-to-many navigation property to the [[PaymentDrafts]] entity.
   */
  paymentDrafts!: PaymentDrafts[];
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
   * One-to-many navigation property to the [[InventoryOpeningBalances]] entity.
   */
  inventoryOpeningBalances!: InventoryOpeningBalances[];
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
   * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
   */
  goodsReturnRequest!: GoodsReturnRequest[];
  /**
   * One-to-many navigation property to the [[Deposits]] entity.
   */
  deposits!: Deposits[];
  /**
   * One-to-many navigation property to the [[IncomingPayments]] entity.
   */
  incomingPayments!: IncomingPayments[];

  /**
   * Returns an entity builder to construct instances `BusinessPlaces`.
   * @returns A builder that constructs instances of entity type `BusinessPlaces`.
   */
  static builder(): EntityBuilderType<BusinessPlaces, BusinessPlacesTypeForceMandatory> {
    return Entity.entityBuilder(BusinessPlaces);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BusinessPlaces` entity type.
   * @returns A `BusinessPlaces` request builder.
   */
  static requestBuilder(): BusinessPlacesRequestBuilder {
    return new BusinessPlacesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPlaces`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BusinessPlaces`.
   */
  static customField(fieldName: string): CustomField<BusinessPlaces> {
    return Entity.customFieldSelector(fieldName, BusinessPlaces);
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
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { AssetTransfer, AssetTransferType } from './AssetTransfer';
import { AssetRetirement, AssetRetirementType } from './AssetRetirement';
import { AssetCapitalizationCreditMemo, AssetCapitalizationCreditMemoType } from './AssetCapitalizationCreditMemo';
import { AssetClasses, AssetClassesType } from './AssetClasses';
import { InventoryPostings, InventoryPostingsType } from './InventoryPostings';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { Quotations, QuotationsType } from './Quotations';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { AssetCapitalization, AssetCapitalizationType } from './AssetCapitalization';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { StockTransfers, StockTransfersType } from './StockTransfers';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Warehouses, WarehousesType } from './Warehouses';
import { BrazilNumericIndexers, BrazilNumericIndexersType } from './BrazilNumericIndexers';
import { BrazilStringIndexers, BrazilStringIndexersType } from './BrazilStringIndexers';
import { Countries, CountriesType } from './Countries';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Orders, OrdersType } from './Orders';
import { InventoryCountings, InventoryCountingsType } from './InventoryCountings';
import { InventoryTransferRequests, InventoryTransferRequestsType } from './InventoryTransferRequests';
import { AssetManualDepreciation, AssetManualDepreciationType } from './AssetManualDepreciation';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { StockTransferDrafts, StockTransferDraftsType } from './StockTransferDrafts';
import { Returns, ReturnsType } from './Returns';
import { CorrectionInvoiceReversal, CorrectionInvoiceReversalType } from './CorrectionInvoiceReversal';
import { CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType } from './CorrectionPurchaseInvoice';
import { CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType } from './CorrectionPurchaseInvoiceReversal';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { InventoryOpeningBalances, InventoryOpeningBalancesType } from './InventoryOpeningBalances';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';
import { Deposits, DepositsType } from './Deposits';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';

export interface BusinessPlacesType {
  bplid?: number;
  bplName?: string;
  bplNameForeign?: string;
  vatRegNum?: string;
  repName?: string;
  industry?: string;
  business?: string;
  address?: string;
  addressforeign?: string;
  taxOfficeNo?: string;
  defaultCustomerId?: string;
  defaultVendorId?: string;
  defaultWarehouseId?: string;
  defaultTaxCode?: string;
  taxOffice?: string;
  federalTaxId?: string;
  federalTaxId2?: string;
  federalTaxId3?: string;
  additionalIdNumber?: string;
  natureOfCompanyCode?: number;
  economicActivityTypeCode?: number;
  creditContributionOriginCode?: string;
  ipiPeriodCode?: string;
  cooperativeAssociationTypeCode?: number;
  profitTaxationCode?: number;
  companyQualificationCode?: number;
  declarerTypeCode?: number;
  preferredStateCode?: string;
  addressType?: string;
  street?: string;
  streetNo?: string;
  building?: string;
  zipCode?: string;
  block?: string;
  city?: string;
  state?: string;
  county?: string;
  country?: string;
  aliasName?: string;
  commercialRegister?: string;
  dateOfIncorporation?: Moment;
  spedProfile?: string;
  environmentType?: number;
  paymentClearingAccount?: string;
  globalLocationNumber?: string;
  defaultResourceWarehouseId?: string;
  businessPlaceIeNumbers?: BusinessPlaceIeNumber[];
  businessPlaceTributaryInfos?: BusinessPlaceTributaryInfo[];
  userDefaultGroups: UserDefaultGroupsType[];
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  vendorPayments: VendorPaymentsType[];
  assetTransfer: AssetTransferType[];
  assetRetirement: AssetRetirementType[];
  assetCapitalizationCreditMemo: AssetCapitalizationCreditMemoType[];
  assetClasses: AssetClassesType[];
  inventoryPostings: InventoryPostingsType[];
  deliveryNotes: DeliveryNotesType[];
  quotations: QuotationsType[];
  inventoryGenExits: InventoryGenExitsType[];
  purchaseRequests: PurchaseRequestsType[];
  returnRequest: ReturnRequestType[];
  purchaseReturns: PurchaseReturnsType[];
  invoices: InvoicesType[];
  assetCapitalization: AssetCapitalizationType[];
  creditNotes: CreditNotesType[];
  stockTransfers: StockTransfersType[];
  businessPartner: BusinessPartnersType;
  warehouse: WarehousesType;
  brazilNumericIndexer: BrazilNumericIndexersType;
  brazilStringIndexer: BrazilStringIndexersType;
  country2: CountriesType;
  chartOfAccount: ChartOfAccountsType;
  orders: OrdersType[];
  inventoryCountings: InventoryCountingsType[];
  inventoryTransferRequests: InventoryTransferRequestsType[];
  assetManualDepreciation: AssetManualDepreciationType[];
  downPayments: DownPaymentsType[];
  drafts: DraftsType[];
  paymentDrafts: PaymentDraftsType[];
  stockTransferDrafts: StockTransferDraftsType[];
  returns: ReturnsType[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
  purchaseInvoices: PurchaseInvoicesType[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
  correctionInvoice: CorrectionInvoiceType[];
  purchaseCreditNotes: PurchaseCreditNotesType[];
  inventoryOpeningBalances: InventoryOpeningBalancesType[];
  purchaseDownPayments: PurchaseDownPaymentsType[];
  employeesInfo: EmployeesInfoType[];
  purchaseOrders: PurchaseOrdersType[];
  goodsReturnRequest: GoodsReturnRequestType[];
  deposits: DepositsType[];
  incomingPayments: IncomingPaymentsType[];
}

export interface BusinessPlacesTypeForceMandatory {
  bplid: number;
  bplName: string;
  bplNameForeign: string;
  vatRegNum: string;
  repName: string;
  industry: string;
  business: string;
  address: string;
  addressforeign: string;
  taxOfficeNo: string;
  defaultCustomerId: string;
  defaultVendorId: string;
  defaultWarehouseId: string;
  defaultTaxCode: string;
  taxOffice: string;
  federalTaxId: string;
  federalTaxId2: string;
  federalTaxId3: string;
  additionalIdNumber: string;
  natureOfCompanyCode: number;
  economicActivityTypeCode: number;
  creditContributionOriginCode: string;
  ipiPeriodCode: string;
  cooperativeAssociationTypeCode: number;
  profitTaxationCode: number;
  companyQualificationCode: number;
  declarerTypeCode: number;
  preferredStateCode: string;
  addressType: string;
  street: string;
  streetNo: string;
  building: string;
  zipCode: string;
  block: string;
  city: string;
  state: string;
  county: string;
  country: string;
  aliasName: string;
  commercialRegister: string;
  dateOfIncorporation: Moment;
  spedProfile: string;
  environmentType: number;
  paymentClearingAccount: string;
  globalLocationNumber: string;
  defaultResourceWarehouseId: string;
  businessPlaceIeNumbers: BusinessPlaceIeNumber[];
  businessPlaceTributaryInfos: BusinessPlaceTributaryInfo[];
  userDefaultGroups: UserDefaultGroupsType[];
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  vendorPayments: VendorPaymentsType[];
  assetTransfer: AssetTransferType[];
  assetRetirement: AssetRetirementType[];
  assetCapitalizationCreditMemo: AssetCapitalizationCreditMemoType[];
  assetClasses: AssetClassesType[];
  inventoryPostings: InventoryPostingsType[];
  deliveryNotes: DeliveryNotesType[];
  quotations: QuotationsType[];
  inventoryGenExits: InventoryGenExitsType[];
  purchaseRequests: PurchaseRequestsType[];
  returnRequest: ReturnRequestType[];
  purchaseReturns: PurchaseReturnsType[];
  invoices: InvoicesType[];
  assetCapitalization: AssetCapitalizationType[];
  creditNotes: CreditNotesType[];
  stockTransfers: StockTransfersType[];
  businessPartner: BusinessPartnersType;
  warehouse: WarehousesType;
  brazilNumericIndexer: BrazilNumericIndexersType;
  brazilStringIndexer: BrazilStringIndexersType;
  country2: CountriesType;
  chartOfAccount: ChartOfAccountsType;
  orders: OrdersType[];
  inventoryCountings: InventoryCountingsType[];
  inventoryTransferRequests: InventoryTransferRequestsType[];
  assetManualDepreciation: AssetManualDepreciationType[];
  downPayments: DownPaymentsType[];
  drafts: DraftsType[];
  paymentDrafts: PaymentDraftsType[];
  stockTransferDrafts: StockTransferDraftsType[];
  returns: ReturnsType[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
  purchaseInvoices: PurchaseInvoicesType[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
  correctionInvoice: CorrectionInvoiceType[];
  purchaseCreditNotes: PurchaseCreditNotesType[];
  inventoryOpeningBalances: InventoryOpeningBalancesType[];
  purchaseDownPayments: PurchaseDownPaymentsType[];
  employeesInfo: EmployeesInfoType[];
  purchaseOrders: PurchaseOrdersType[];
  goodsReturnRequest: GoodsReturnRequestType[];
  deposits: DepositsType[];
  incomingPayments: IncomingPaymentsType[];
}

export namespace BusinessPlaces {
  /**
   * Static representation of the [[bplid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPLID: NumberField<BusinessPlaces> = new NumberField('BPLID', BusinessPlaces, 'Edm.Int32');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<BusinessPlaces> = new StringField('BPLName', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[bplNameForeign]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME_FOREIGN: StringField<BusinessPlaces> = new StringField('BPLNameForeign', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<BusinessPlaces> = new StringField('VATRegNum', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[repName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REP_NAME: StringField<BusinessPlaces> = new StringField('RepName', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[industry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY: StringField<BusinessPlaces> = new StringField('Industry', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[business]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS: StringField<BusinessPlaces> = new StringField('Business', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<BusinessPlaces> = new StringField('Address', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[addressforeign]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESSFOREIGN: StringField<BusinessPlaces> = new StringField('Addressforeign', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[taxOfficeNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_OFFICE_NO: StringField<BusinessPlaces> = new StringField('TaxOfficeNo', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[defaultCustomerId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_CUSTOMER_ID: StringField<BusinessPlaces> = new StringField('DefaultCustomerID', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[defaultVendorId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_VENDOR_ID: StringField<BusinessPlaces> = new StringField('DefaultVendorID', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[defaultWarehouseId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_WAREHOUSE_ID: StringField<BusinessPlaces> = new StringField('DefaultWarehouseID', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[defaultTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_TAX_CODE: StringField<BusinessPlaces> = new StringField('DefaultTaxCode', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[taxOffice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_OFFICE: StringField<BusinessPlaces> = new StringField('TaxOffice', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID: StringField<BusinessPlaces> = new StringField('FederalTaxID', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[federalTaxId2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID_2: StringField<BusinessPlaces> = new StringField('FederalTaxID2', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[federalTaxId3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID_3: StringField<BusinessPlaces> = new StringField('FederalTaxID3', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[additionalIdNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_ID_NUMBER: StringField<BusinessPlaces> = new StringField('AdditionalIdNumber', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[natureOfCompanyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATURE_OF_COMPANY_CODE: NumberField<BusinessPlaces> = new NumberField('NatureOfCompanyCode', BusinessPlaces, 'Edm.Int32');
  /**
   * Static representation of the [[economicActivityTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ECONOMIC_ACTIVITY_TYPE_CODE: NumberField<BusinessPlaces> = new NumberField('EconomicActivityTypeCode', BusinessPlaces, 'Edm.Int32');
  /**
   * Static representation of the [[creditContributionOriginCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_CONTRIBUTION_ORIGIN_CODE: StringField<BusinessPlaces> = new StringField('CreditContributionOriginCode', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[ipiPeriodCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IPI_PERIOD_CODE: StringField<BusinessPlaces> = new StringField('IPIPeriodCode', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[cooperativeAssociationTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COOPERATIVE_ASSOCIATION_TYPE_CODE: NumberField<BusinessPlaces> = new NumberField('CooperativeAssociationTypeCode', BusinessPlaces, 'Edm.Int32');
  /**
   * Static representation of the [[profitTaxationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROFIT_TAXATION_CODE: NumberField<BusinessPlaces> = new NumberField('ProfitTaxationCode', BusinessPlaces, 'Edm.Int32');
  /**
   * Static representation of the [[companyQualificationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_QUALIFICATION_CODE: NumberField<BusinessPlaces> = new NumberField('CompanyQualificationCode', BusinessPlaces, 'Edm.Int32');
  /**
   * Static representation of the [[declarerTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DECLARER_TYPE_CODE: NumberField<BusinessPlaces> = new NumberField('DeclarerTypeCode', BusinessPlaces, 'Edm.Int32');
  /**
   * Static representation of the [[preferredStateCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREFERRED_STATE_CODE: StringField<BusinessPlaces> = new StringField('PreferredStateCode', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[addressType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_TYPE: StringField<BusinessPlaces> = new StringField('AddressType', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[street]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET: StringField<BusinessPlaces> = new StringField('Street', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[streetNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_NO: StringField<BusinessPlaces> = new StringField('StreetNo', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[building]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUILDING: StringField<BusinessPlaces> = new StringField('Building', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP_CODE: StringField<BusinessPlaces> = new StringField('ZipCode', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[block]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK: StringField<BusinessPlaces> = new StringField('Block', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<BusinessPlaces> = new StringField('City', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: StringField<BusinessPlaces> = new StringField('State', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[county]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY: StringField<BusinessPlaces> = new StringField('County', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<BusinessPlaces> = new StringField('Country', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[aliasName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALIAS_NAME: StringField<BusinessPlaces> = new StringField('AliasName', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[commercialRegister]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMERCIAL_REGISTER: StringField<BusinessPlaces> = new StringField('CommercialRegister', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[dateOfIncorporation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_INCORPORATION: DateField<BusinessPlaces> = new DateField('DateOfIncorporation', BusinessPlaces, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[spedProfile]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPED_PROFILE: StringField<BusinessPlaces> = new StringField('SPEDProfile', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[environmentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENVIRONMENT_TYPE: NumberField<BusinessPlaces> = new NumberField('EnvironmentType', BusinessPlaces, 'Edm.Int32');
  /**
   * Static representation of the [[paymentClearingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_CLEARING_ACCOUNT: StringField<BusinessPlaces> = new StringField('PaymentClearingAccount', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[globalLocationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GLOBAL_LOCATION_NUMBER: StringField<BusinessPlaces> = new StringField('GlobalLocationNumber', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[defaultResourceWarehouseId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_RESOURCE_WAREHOUSE_ID: StringField<BusinessPlaces> = new StringField('DefaultResourceWarehouseID', BusinessPlaces, 'Edm.String');
  /**
   * Static representation of the [[businessPlaceIeNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE_IE_NUMBERS: CollectionField<BusinessPlaces> = new CollectionField('BusinessPlaceIENumbers', BusinessPlaces, new BusinessPlaceIeNumberField('', BusinessPlaces));
  /**
   * Static representation of the [[businessPlaceTributaryInfos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE_TRIBUTARY_INFOS: CollectionField<BusinessPlaces> = new CollectionField('BusinessPlaceTributaryInfos', BusinessPlaces, new BusinessPlaceTributaryInfoField('', BusinessPlaces));
  /**
   * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_DEFAULT_GROUPS: OneToManyLink<BusinessPlaces, UserDefaultGroups> = new OneToManyLink('UserDefaultGroups', BusinessPlaces, UserDefaultGroups);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<BusinessPlaces, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', BusinessPlaces, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<BusinessPlaces, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', BusinessPlaces, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_PAYMENTS: OneToManyLink<BusinessPlaces, VendorPayments> = new OneToManyLink('VendorPayments', BusinessPlaces, VendorPayments);
  /**
   * Static representation of the one-to-many navigation property [[assetTransfer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_TRANSFER: OneToManyLink<BusinessPlaces, AssetTransfer> = new OneToManyLink('AssetTransfer', BusinessPlaces, AssetTransfer);
  /**
   * Static representation of the one-to-many navigation property [[assetRetirement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_RETIREMENT: OneToManyLink<BusinessPlaces, AssetRetirement> = new OneToManyLink('AssetRetirement', BusinessPlaces, AssetRetirement);
  /**
   * Static representation of the one-to-many navigation property [[assetCapitalizationCreditMemo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<BusinessPlaces, AssetCapitalizationCreditMemo> = new OneToManyLink('AssetCapitalizationCreditMemo', BusinessPlaces, AssetCapitalizationCreditMemo);
  /**
   * Static representation of the one-to-many navigation property [[assetClasses]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CLASSES: OneToManyLink<BusinessPlaces, AssetClasses> = new OneToManyLink('AssetClasses', BusinessPlaces, AssetClasses);
  /**
   * Static representation of the one-to-many navigation property [[inventoryPostings]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_POSTINGS: OneToManyLink<BusinessPlaces, InventoryPostings> = new OneToManyLink('InventoryPostings', BusinessPlaces, InventoryPostings);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<BusinessPlaces, DeliveryNotes> = new OneToManyLink('DeliveryNotes', BusinessPlaces, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<BusinessPlaces, Quotations> = new OneToManyLink('Quotations', BusinessPlaces, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<BusinessPlaces, InventoryGenExits> = new OneToManyLink('InventoryGenExits', BusinessPlaces, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<BusinessPlaces, PurchaseRequests> = new OneToManyLink('PurchaseRequests', BusinessPlaces, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<BusinessPlaces, ReturnRequest> = new OneToManyLink('ReturnRequest', BusinessPlaces, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<BusinessPlaces, PurchaseReturns> = new OneToManyLink('PurchaseReturns', BusinessPlaces, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<BusinessPlaces, Invoices> = new OneToManyLink('Invoices', BusinessPlaces, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[assetCapitalization]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CAPITALIZATION: OneToManyLink<BusinessPlaces, AssetCapitalization> = new OneToManyLink('AssetCapitalization', BusinessPlaces, AssetCapitalization);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<BusinessPlaces, CreditNotes> = new OneToManyLink('CreditNotes', BusinessPlaces, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFERS: OneToManyLink<BusinessPlaces, StockTransfers> = new OneToManyLink('StockTransfers', BusinessPlaces, StockTransfers);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<BusinessPlaces, BusinessPartners> = new OneToOneLink('BusinessPartner', BusinessPlaces, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[warehouse]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE: OneToOneLink<BusinessPlaces, Warehouses> = new OneToOneLink('Warehouse', BusinessPlaces, Warehouses);
  /**
   * Static representation of the one-to-one navigation property [[brazilNumericIndexer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRAZIL_NUMERIC_INDEXER: OneToOneLink<BusinessPlaces, BrazilNumericIndexers> = new OneToOneLink('BrazilNumericIndexer', BusinessPlaces, BrazilNumericIndexers);
  /**
   * Static representation of the one-to-one navigation property [[brazilStringIndexer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRAZIL_STRING_INDEXER: OneToOneLink<BusinessPlaces, BrazilStringIndexers> = new OneToOneLink('BrazilStringIndexer', BusinessPlaces, BrazilStringIndexers);
  /**
   * Static representation of the one-to-one navigation property [[country2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_2: OneToOneLink<BusinessPlaces, Countries> = new OneToOneLink('Country2', BusinessPlaces, Countries);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<BusinessPlaces, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', BusinessPlaces, ChartOfAccounts);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<BusinessPlaces, Orders> = new OneToManyLink('Orders', BusinessPlaces, Orders);
  /**
   * Static representation of the one-to-many navigation property [[inventoryCountings]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_COUNTINGS: OneToManyLink<BusinessPlaces, InventoryCountings> = new OneToManyLink('InventoryCountings', BusinessPlaces, InventoryCountings);
  /**
   * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_TRANSFER_REQUESTS: OneToManyLink<BusinessPlaces, InventoryTransferRequests> = new OneToManyLink('InventoryTransferRequests', BusinessPlaces, InventoryTransferRequests);
  /**
   * Static representation of the one-to-many navigation property [[assetManualDepreciation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_MANUAL_DEPRECIATION: OneToManyLink<BusinessPlaces, AssetManualDepreciation> = new OneToManyLink('AssetManualDepreciation', BusinessPlaces, AssetManualDepreciation);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<BusinessPlaces, DownPayments> = new OneToManyLink('DownPayments', BusinessPlaces, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<BusinessPlaces, Drafts> = new OneToManyLink('Drafts', BusinessPlaces, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DRAFTS: OneToManyLink<BusinessPlaces, PaymentDrafts> = new OneToManyLink('PaymentDrafts', BusinessPlaces, PaymentDrafts);
  /**
   * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_DRAFTS: OneToManyLink<BusinessPlaces, StockTransferDrafts> = new OneToManyLink('StockTransferDrafts', BusinessPlaces, StockTransferDrafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<BusinessPlaces, Returns> = new OneToManyLink('Returns', BusinessPlaces, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<BusinessPlaces, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', BusinessPlaces, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<BusinessPlaces, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', BusinessPlaces, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<BusinessPlaces, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', BusinessPlaces, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<BusinessPlaces, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', BusinessPlaces, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<BusinessPlaces, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', BusinessPlaces, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<BusinessPlaces, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', BusinessPlaces, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<BusinessPlaces, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', BusinessPlaces, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[inventoryOpeningBalances]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_OPENING_BALANCES: OneToManyLink<BusinessPlaces, InventoryOpeningBalances> = new OneToManyLink('InventoryOpeningBalances', BusinessPlaces, InventoryOpeningBalances);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<BusinessPlaces, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', BusinessPlaces, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEES_INFO: OneToManyLink<BusinessPlaces, EmployeesInfo> = new OneToManyLink('EmployeesInfo', BusinessPlaces, EmployeesInfo);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<BusinessPlaces, PurchaseOrders> = new OneToManyLink('PurchaseOrders', BusinessPlaces, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<BusinessPlaces, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', BusinessPlaces, GoodsReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[deposits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPOSITS: OneToManyLink<BusinessPlaces, Deposits> = new OneToManyLink('Deposits', BusinessPlaces, Deposits);
  /**
   * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOMING_PAYMENTS: OneToManyLink<BusinessPlaces, IncomingPayments> = new OneToManyLink('IncomingPayments', BusinessPlaces, IncomingPayments);
  /**
   * All fields of the BusinessPlaces entity.
   */
  export const _allFields: Array<NumberField<BusinessPlaces> | StringField<BusinessPlaces> | DateField<BusinessPlaces> | CollectionField<BusinessPlaces> | OneToManyLink<BusinessPlaces, UserDefaultGroups> | OneToManyLink<BusinessPlaces, InventoryGenEntries> | OneToManyLink<BusinessPlaces, PurchaseQuotations> | OneToManyLink<BusinessPlaces, VendorPayments> | OneToManyLink<BusinessPlaces, AssetTransfer> | OneToManyLink<BusinessPlaces, AssetRetirement> | OneToManyLink<BusinessPlaces, AssetCapitalizationCreditMemo> | OneToManyLink<BusinessPlaces, AssetClasses> | OneToManyLink<BusinessPlaces, InventoryPostings> | OneToManyLink<BusinessPlaces, DeliveryNotes> | OneToManyLink<BusinessPlaces, Quotations> | OneToManyLink<BusinessPlaces, InventoryGenExits> | OneToManyLink<BusinessPlaces, PurchaseRequests> | OneToManyLink<BusinessPlaces, ReturnRequest> | OneToManyLink<BusinessPlaces, PurchaseReturns> | OneToManyLink<BusinessPlaces, Invoices> | OneToManyLink<BusinessPlaces, AssetCapitalization> | OneToManyLink<BusinessPlaces, CreditNotes> | OneToManyLink<BusinessPlaces, StockTransfers> | OneToOneLink<BusinessPlaces, BusinessPartners> | OneToOneLink<BusinessPlaces, Warehouses> | OneToOneLink<BusinessPlaces, BrazilNumericIndexers> | OneToOneLink<BusinessPlaces, BrazilStringIndexers> | OneToOneLink<BusinessPlaces, Countries> | OneToOneLink<BusinessPlaces, ChartOfAccounts> | OneToManyLink<BusinessPlaces, Orders> | OneToManyLink<BusinessPlaces, InventoryCountings> | OneToManyLink<BusinessPlaces, InventoryTransferRequests> | OneToManyLink<BusinessPlaces, AssetManualDepreciation> | OneToManyLink<BusinessPlaces, DownPayments> | OneToManyLink<BusinessPlaces, Drafts> | OneToManyLink<BusinessPlaces, PaymentDrafts> | OneToManyLink<BusinessPlaces, StockTransferDrafts> | OneToManyLink<BusinessPlaces, Returns> | OneToManyLink<BusinessPlaces, CorrectionInvoiceReversal> | OneToManyLink<BusinessPlaces, CorrectionPurchaseInvoice> | OneToManyLink<BusinessPlaces, CorrectionPurchaseInvoiceReversal> | OneToManyLink<BusinessPlaces, PurchaseInvoices> | OneToManyLink<BusinessPlaces, PurchaseDeliveryNotes> | OneToManyLink<BusinessPlaces, CorrectionInvoice> | OneToManyLink<BusinessPlaces, PurchaseCreditNotes> | OneToManyLink<BusinessPlaces, InventoryOpeningBalances> | OneToManyLink<BusinessPlaces, PurchaseDownPayments> | OneToManyLink<BusinessPlaces, EmployeesInfo> | OneToManyLink<BusinessPlaces, PurchaseOrders> | OneToManyLink<BusinessPlaces, GoodsReturnRequest> | OneToManyLink<BusinessPlaces, Deposits> | OneToManyLink<BusinessPlaces, IncomingPayments>> = [
    BusinessPlaces.BPLID,
    BusinessPlaces.BPL_NAME,
    BusinessPlaces.BPL_NAME_FOREIGN,
    BusinessPlaces.VAT_REG_NUM,
    BusinessPlaces.REP_NAME,
    BusinessPlaces.INDUSTRY,
    BusinessPlaces.BUSINESS,
    BusinessPlaces.ADDRESS,
    BusinessPlaces.ADDRESSFOREIGN,
    BusinessPlaces.TAX_OFFICE_NO,
    BusinessPlaces.DEFAULT_CUSTOMER_ID,
    BusinessPlaces.DEFAULT_VENDOR_ID,
    BusinessPlaces.DEFAULT_WAREHOUSE_ID,
    BusinessPlaces.DEFAULT_TAX_CODE,
    BusinessPlaces.TAX_OFFICE,
    BusinessPlaces.FEDERAL_TAX_ID,
    BusinessPlaces.FEDERAL_TAX_ID_2,
    BusinessPlaces.FEDERAL_TAX_ID_3,
    BusinessPlaces.ADDITIONAL_ID_NUMBER,
    BusinessPlaces.NATURE_OF_COMPANY_CODE,
    BusinessPlaces.ECONOMIC_ACTIVITY_TYPE_CODE,
    BusinessPlaces.CREDIT_CONTRIBUTION_ORIGIN_CODE,
    BusinessPlaces.IPI_PERIOD_CODE,
    BusinessPlaces.COOPERATIVE_ASSOCIATION_TYPE_CODE,
    BusinessPlaces.PROFIT_TAXATION_CODE,
    BusinessPlaces.COMPANY_QUALIFICATION_CODE,
    BusinessPlaces.DECLARER_TYPE_CODE,
    BusinessPlaces.PREFERRED_STATE_CODE,
    BusinessPlaces.ADDRESS_TYPE,
    BusinessPlaces.STREET,
    BusinessPlaces.STREET_NO,
    BusinessPlaces.BUILDING,
    BusinessPlaces.ZIP_CODE,
    BusinessPlaces.BLOCK,
    BusinessPlaces.CITY,
    BusinessPlaces.STATE,
    BusinessPlaces.COUNTY,
    BusinessPlaces.COUNTRY,
    BusinessPlaces.ALIAS_NAME,
    BusinessPlaces.COMMERCIAL_REGISTER,
    BusinessPlaces.DATE_OF_INCORPORATION,
    BusinessPlaces.SPED_PROFILE,
    BusinessPlaces.ENVIRONMENT_TYPE,
    BusinessPlaces.PAYMENT_CLEARING_ACCOUNT,
    BusinessPlaces.GLOBAL_LOCATION_NUMBER,
    BusinessPlaces.DEFAULT_RESOURCE_WAREHOUSE_ID,
    BusinessPlaces.BUSINESS_PLACE_IE_NUMBERS,
    BusinessPlaces.BUSINESS_PLACE_TRIBUTARY_INFOS,
    BusinessPlaces.USER_DEFAULT_GROUPS,
    BusinessPlaces.INVENTORY_GEN_ENTRIES,
    BusinessPlaces.PURCHASE_QUOTATIONS,
    BusinessPlaces.VENDOR_PAYMENTS,
    BusinessPlaces.ASSET_TRANSFER,
    BusinessPlaces.ASSET_RETIREMENT,
    BusinessPlaces.ASSET_CAPITALIZATION_CREDIT_MEMO,
    BusinessPlaces.ASSET_CLASSES,
    BusinessPlaces.INVENTORY_POSTINGS,
    BusinessPlaces.DELIVERY_NOTES,
    BusinessPlaces.QUOTATIONS,
    BusinessPlaces.INVENTORY_GEN_EXITS,
    BusinessPlaces.PURCHASE_REQUESTS,
    BusinessPlaces.RETURN_REQUEST,
    BusinessPlaces.PURCHASE_RETURNS,
    BusinessPlaces.INVOICES,
    BusinessPlaces.ASSET_CAPITALIZATION,
    BusinessPlaces.CREDIT_NOTES,
    BusinessPlaces.STOCK_TRANSFERS,
    BusinessPlaces.BUSINESS_PARTNER,
    BusinessPlaces.WAREHOUSE,
    BusinessPlaces.BRAZIL_NUMERIC_INDEXER,
    BusinessPlaces.BRAZIL_STRING_INDEXER,
    BusinessPlaces.COUNTRY_2,
    BusinessPlaces.CHART_OF_ACCOUNT,
    BusinessPlaces.ORDERS,
    BusinessPlaces.INVENTORY_COUNTINGS,
    BusinessPlaces.INVENTORY_TRANSFER_REQUESTS,
    BusinessPlaces.ASSET_MANUAL_DEPRECIATION,
    BusinessPlaces.DOWN_PAYMENTS,
    BusinessPlaces.DRAFTS,
    BusinessPlaces.PAYMENT_DRAFTS,
    BusinessPlaces.STOCK_TRANSFER_DRAFTS,
    BusinessPlaces.RETURNS,
    BusinessPlaces.CORRECTION_INVOICE_REVERSAL,
    BusinessPlaces.CORRECTION_PURCHASE_INVOICE,
    BusinessPlaces.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    BusinessPlaces.PURCHASE_INVOICES,
    BusinessPlaces.PURCHASE_DELIVERY_NOTES,
    BusinessPlaces.CORRECTION_INVOICE,
    BusinessPlaces.PURCHASE_CREDIT_NOTES,
    BusinessPlaces.INVENTORY_OPENING_BALANCES,
    BusinessPlaces.PURCHASE_DOWN_PAYMENTS,
    BusinessPlaces.EMPLOYEES_INFO,
    BusinessPlaces.PURCHASE_ORDERS,
    BusinessPlaces.GOODS_RETURN_REQUEST,
    BusinessPlaces.DEPOSITS,
    BusinessPlaces.INCOMING_PAYMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BusinessPlaces> = new AllFields('*', BusinessPlaces);
  /**
   * All key fields of the BusinessPlaces entity.
   */
  export const _keyFields: Array<Field<BusinessPlaces>> = [BusinessPlaces.BPLID];
  /**
   * Mapping of all key field names to the respective static field property BusinessPlaces.
   */
  export const _keys: { [keys: string]: Field<BusinessPlaces> } = BusinessPlaces._keyFields.reduce((acc: { [keys: string]: Field<BusinessPlaces> }, field: Field<BusinessPlaces>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
