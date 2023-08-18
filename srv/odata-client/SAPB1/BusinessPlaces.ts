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
import { BusinessPlaceIeNumber } from './BusinessPlaceIeNumber';
import { BusinessPlaceTributaryInfo } from './BusinessPlaceTributaryInfo';
import type { BusinessPlacesApi } from './BusinessPlacesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { StockTransfers, StockTransfersType } from './StockTransfers';
import {
  PurchaseQuotations,
  PurchaseQuotationsType
} from './PurchaseQuotations';
import { AssetTransfer, AssetTransferType } from './AssetTransfer';
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
import { AssetRetirement, AssetRetirementType } from './AssetRetirement';
import { AssetRevaluations, AssetRevaluationsType } from './AssetRevaluations';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import {
  AssetManualDepreciation,
  AssetManualDepreciationType
} from './AssetManualDepreciation';
import { AssetClasses, AssetClassesType } from './AssetClasses';
import { Orders, OrdersType } from './Orders';
import {
  AssetCapitalization,
  AssetCapitalizationType
} from './AssetCapitalization';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { Drafts, DraftsType } from './Drafts';
import {
  InventoryTransferRequests,
  InventoryTransferRequestsType
} from './InventoryTransferRequests';
import {
  InventoryCountings,
  InventoryCountingsType
} from './InventoryCountings';
import {
  InventoryOpeningBalances,
  InventoryOpeningBalancesType
} from './InventoryOpeningBalances';
import { InventoryPostings, InventoryPostingsType } from './InventoryPostings';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import {
  StockTransferDrafts,
  StockTransferDraftsType
} from './StockTransferDrafts';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import {
  AssetCapitalizationCreditMemo,
  AssetCapitalizationCreditMemoType
} from './AssetCapitalizationCreditMemo';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import {
  PurchaseCreditNotes,
  PurchaseCreditNotesType
} from './PurchaseCreditNotes';
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
  GoodsReturnRequest,
  GoodsReturnRequestType
} from './GoodsReturnRequest';
import {
  CorrectionPurchaseInvoiceReversal,
  CorrectionPurchaseInvoiceReversalType
} from './CorrectionPurchaseInvoiceReversal';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
import { Deposits, DepositsType } from './Deposits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Warehouses, WarehousesType } from './Warehouses';
import {
  BpFiscalRegistryId,
  BpFiscalRegistryIdType
} from './BpFiscalRegistryId';
import {
  BrazilNumericIndexers,
  BrazilNumericIndexersType
} from './BrazilNumericIndexers';
import {
  BrazilStringIndexers,
  BrazilStringIndexersType
} from './BrazilStringIndexers';
import { Countries, CountriesType } from './Countries';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';

/**
 * This class represents the entity "BusinessPlaces" of service "SAPB1".
 */
export class BusinessPlaces<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BusinessPlacesType<T>
{
  /**
   * Technical entity name for BusinessPlaces.
   */
  static _entityName = 'BusinessPlaces';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BusinessPlaces entity
   */
  static _keys = ['BPLID'];
  /**
   * Bplid.
   */
  bplid!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bpl Name.
   * @nullable
   */
  bplName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bpl Name Foreign.
   * @nullable
   */
  bplNameForeign?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Reg Num.
   * @nullable
   */
  vatRegNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rep Name.
   * @nullable
   */
  repName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry.
   * @nullable
   */
  industry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business.
   * @nullable
   */
  business?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address.
   * @nullable
   */
  address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Addressforeign.
   * @nullable
   */
  addressforeign?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Bpl.
   * @nullable
   */
  mainBpl?: BoYesNoEnum | null;
  /**
   * Tax Office No.
   * @nullable
   */
  taxOfficeNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disabled.
   * @nullable
   */
  disabled?: BoYesNoEnum | null;
  /**
   * Default Customer Id.
   * @nullable
   */
  defaultCustomerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Vendor Id.
   * @nullable
   */
  defaultVendorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Warehouse Id.
   * @nullable
   */
  defaultWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Tax Code.
   * @nullable
   */
  defaultTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Office.
   * @nullable
   */
  taxOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Federal Tax Id 2.
   * @nullable
   */
  federalTaxId2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Federal Tax Id 3.
   * @nullable
   */
  federalTaxId3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Id Number.
   * @nullable
   */
  additionalIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nature Of Company Code.
   * @nullable
   */
  natureOfCompanyCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Economic Activity Type Code.
   * @nullable
   */
  economicActivityTypeCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Credit Contribution Origin Code.
   * @nullable
   */
  creditContributionOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ipi Period Code.
   * @nullable
   */
  ipiPeriodCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cooperative Association Type Code.
   * @nullable
   */
  cooperativeAssociationTypeCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Profit Taxation Code.
   * @nullable
   */
  profitTaxationCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Company Qualification Code.
   * @nullable
   */
  companyQualificationCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Declarer Type Code.
   * @nullable
   */
  declarerTypeCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Preferred State Code.
   * @nullable
   */
  preferredStateCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Type.
   * @nullable
   */
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street No.
   * @nullable
   */
  streetNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building.
   * @nullable
   */
  building?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block.
   * @nullable
   */
  block?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alias Name.
   * @nullable
   */
  aliasName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commercial Register.
   * @nullable
   */
  commercialRegister?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Of Incorporation.
   * @nullable
   */
  dateOfIncorporation?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Sped Profile.
   * @nullable
   */
  spedProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Environment Type.
   * @nullable
   */
  environmentType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Opting 4 Icms.
   * @nullable
   */
  opting4Icms?: BoYesNoEnum | null;
  /**
   * Payment Clearing Account.
   * @nullable
   */
  paymentClearingAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Global Location Number.
   * @nullable
   */
  globalLocationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Resource Warehouse Id.
   * @nullable
   */
  defaultResourceWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Place Ie Numbers.
   * @nullable
   */
  businessPlaceIeNumbers?: BusinessPlaceIeNumber<T>[] | null;
  /**
   * Business Place Tributary Infos.
   * @nullable
   */
  businessPlaceTributaryInfos?: BusinessPlaceTributaryInfo<T>[] | null;
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
   * One-to-many navigation property to the {@link AssetTransfer} entity.
   */
  assetTransfer!: AssetTransfer<T>[];
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
   * One-to-many navigation property to the {@link AssetRetirement} entity.
   */
  assetRetirement!: AssetRetirement<T>[];
  /**
   * One-to-many navigation property to the {@link AssetRevaluations} entity.
   */
  assetRevaluations!: AssetRevaluations<T>[];
  /**
   * One-to-many navigation property to the {@link EmployeesInfo} entity.
   */
  employeesInfo!: EmployeesInfo<T>[];
  /**
   * One-to-many navigation property to the {@link AssetManualDepreciation} entity.
   */
  assetManualDepreciation!: AssetManualDepreciation<T>[];
  /**
   * One-to-many navigation property to the {@link AssetClasses} entity.
   */
  assetClasses!: AssetClasses<T>[];
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  orders!: Orders<T>[];
  /**
   * One-to-many navigation property to the {@link AssetCapitalization} entity.
   */
  assetCapitalization!: AssetCapitalization<T>[];
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
   * One-to-many navigation property to the {@link InventoryCountings} entity.
   */
  inventoryCountings!: InventoryCountings<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryOpeningBalances} entity.
   */
  inventoryOpeningBalances!: InventoryOpeningBalances<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryPostings} entity.
   */
  inventoryPostings!: InventoryPostings<T>[];
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
   * One-to-many navigation property to the {@link AssetCapitalizationCreditMemo} entity.
   */
  assetCapitalizationCreditMemo!: AssetCapitalizationCreditMemo<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentDrafts} entity.
   */
  paymentDrafts!: PaymentDrafts<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseCreditNotes} entity.
   */
  purchaseCreditNotes!: PurchaseCreditNotes<T>[];
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
   * One-to-many navigation property to the {@link GoodsReturnRequest} entity.
   */
  goodsReturnRequest!: GoodsReturnRequest<T>[];
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
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link BpFiscalRegistryId} entity.
   */
  bpFiscalRegistryId?: BpFiscalRegistryId<T> | null;
  /**
   * One-to-one navigation property to the {@link BrazilNumericIndexers} entity.
   */
  brazilNumericIndexer?: BrazilNumericIndexers<T> | null;
  /**
   * One-to-one navigation property to the {@link BrazilStringIndexers} entity.
   */
  brazilStringIndexer?: BrazilStringIndexers<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country2?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-many navigation property to the {@link VendorPayments} entity.
   */
  vendorPayments!: VendorPayments<T>[];

  constructor(readonly _entityApi: BusinessPlacesApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessPlacesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  bplid: DeserializedType<T, 'Edm.Int32'>;
  bplName?: DeserializedType<T, 'Edm.String'> | null;
  bplNameForeign?: DeserializedType<T, 'Edm.String'> | null;
  vatRegNum?: DeserializedType<T, 'Edm.String'> | null;
  repName?: DeserializedType<T, 'Edm.String'> | null;
  industry?: DeserializedType<T, 'Edm.String'> | null;
  business?: DeserializedType<T, 'Edm.String'> | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  addressforeign?: DeserializedType<T, 'Edm.String'> | null;
  mainBpl?: BoYesNoEnum | null;
  taxOfficeNo?: DeserializedType<T, 'Edm.String'> | null;
  disabled?: BoYesNoEnum | null;
  defaultCustomerId?: DeserializedType<T, 'Edm.String'> | null;
  defaultVendorId?: DeserializedType<T, 'Edm.String'> | null;
  defaultWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  defaultTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  taxOffice?: DeserializedType<T, 'Edm.String'> | null;
  federalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  federalTaxId2?: DeserializedType<T, 'Edm.String'> | null;
  federalTaxId3?: DeserializedType<T, 'Edm.String'> | null;
  additionalIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  natureOfCompanyCode?: DeserializedType<T, 'Edm.Int32'> | null;
  economicActivityTypeCode?: DeserializedType<T, 'Edm.Int32'> | null;
  creditContributionOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  ipiPeriodCode?: DeserializedType<T, 'Edm.String'> | null;
  cooperativeAssociationTypeCode?: DeserializedType<T, 'Edm.Int32'> | null;
  profitTaxationCode?: DeserializedType<T, 'Edm.Int32'> | null;
  companyQualificationCode?: DeserializedType<T, 'Edm.Int32'> | null;
  declarerTypeCode?: DeserializedType<T, 'Edm.Int32'> | null;
  preferredStateCode?: DeserializedType<T, 'Edm.String'> | null;
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  streetNo?: DeserializedType<T, 'Edm.String'> | null;
  building?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  block?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  aliasName?: DeserializedType<T, 'Edm.String'> | null;
  commercialRegister?: DeserializedType<T, 'Edm.String'> | null;
  dateOfIncorporation?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  spedProfile?: DeserializedType<T, 'Edm.String'> | null;
  environmentType?: DeserializedType<T, 'Edm.Int32'> | null;
  opting4Icms?: BoYesNoEnum | null;
  paymentClearingAccount?: DeserializedType<T, 'Edm.String'> | null;
  globalLocationNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultResourceWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  businessPlaceIeNumbers?: BusinessPlaceIeNumber<T>[] | null;
  businessPlaceTributaryInfos?: BusinessPlaceTributaryInfo<T>[] | null;
  userDefaultGroups: UserDefaultGroupsType<T>[];
  stockTransfers: StockTransfersType<T>[];
  purchaseQuotations: PurchaseQuotationsType<T>[];
  assetTransfer: AssetTransferType<T>[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType<T>[];
  correctionInvoice: CorrectionInvoiceType<T>[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType<T>[];
  inventoryGenEntries: InventoryGenEntriesType<T>[];
  assetRetirement: AssetRetirementType<T>[];
  assetRevaluations: AssetRevaluationsType<T>[];
  employeesInfo: EmployeesInfoType<T>[];
  assetManualDepreciation: AssetManualDepreciationType<T>[];
  assetClasses: AssetClassesType<T>[];
  orders: OrdersType<T>[];
  assetCapitalization: AssetCapitalizationType<T>[];
  inventoryGenExits: InventoryGenExitsType<T>[];
  drafts: DraftsType<T>[];
  inventoryTransferRequests: InventoryTransferRequestsType<T>[];
  inventoryCountings: InventoryCountingsType<T>[];
  inventoryOpeningBalances: InventoryOpeningBalancesType<T>[];
  inventoryPostings: InventoryPostingsType<T>[];
  returnRequest: ReturnRequestType<T>[];
  deliveryNotes: DeliveryNotesType<T>[];
  purchaseInvoices: PurchaseInvoicesType<T>[];
  stockTransferDrafts: StockTransferDraftsType<T>[];
  invoices: InvoicesType<T>[];
  creditNotes: CreditNotesType<T>[];
  assetCapitalizationCreditMemo: AssetCapitalizationCreditMemoType<T>[];
  paymentDrafts: PaymentDraftsType<T>[];
  purchaseCreditNotes: PurchaseCreditNotesType<T>[];
  downPayments: DownPaymentsType<T>[];
  purchaseDownPayments: PurchaseDownPaymentsType<T>[];
  purchaseReturns: PurchaseReturnsType<T>[];
  purchaseOrders: PurchaseOrdersType<T>[];
  quotations: QuotationsType<T>[];
  returns: ReturnsType<T>[];
  goodsReturnRequest: GoodsReturnRequestType<T>[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType<T>[];
  incomingPayments: IncomingPaymentsType<T>[];
  deposits: DepositsType<T>[];
  purchaseRequests: PurchaseRequestsType<T>[];
  businessPartner?: BusinessPartnersType<T> | null;
  warehouse?: WarehousesType<T> | null;
  bpFiscalRegistryId?: BpFiscalRegistryIdType<T> | null;
  brazilNumericIndexer?: BrazilNumericIndexersType<T> | null;
  brazilStringIndexer?: BrazilStringIndexersType<T> | null;
  country2?: CountriesType<T> | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  vendorPayments: VendorPaymentsType<T>[];
}
