import { BusinessPlacesRequestBuilder } from './BusinessPlacesRequestBuilder';
import { Moment } from 'moment';
import { BusinessPlaceIeNumber } from './BusinessPlaceIeNumber';
import { BusinessPlaceTributaryInfo } from './BusinessPlaceTributaryInfo';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BusinessPlaces" of service "SAPB1".
 */
export declare class BusinessPlaces extends EntityV4 implements BusinessPlacesType {
    /**
     * Technical entity name for BusinessPlaces.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Main Bpl.
     * @nullable
     */
    mainBpl?: BoYesNoEnum;
    /**
     * Tax Office No.
     * @nullable
     */
    taxOfficeNo?: string;
    /**
     * Disabled.
     * @nullable
     */
    disabled?: BoYesNoEnum;
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
     * Opting 4 Icms.
     * @nullable
     */
    opting4Icms?: BoYesNoEnum;
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
    userDefaultGroups: UserDefaultGroups[];
    /**
     * One-to-many navigation property to the [[InventoryGenEntries]] entity.
     */
    inventoryGenEntries: InventoryGenEntries[];
    /**
     * One-to-many navigation property to the [[PurchaseQuotations]] entity.
     */
    purchaseQuotations: PurchaseQuotations[];
    /**
     * One-to-many navigation property to the [[VendorPayments]] entity.
     */
    vendorPayments: VendorPayments[];
    /**
     * One-to-many navigation property to the [[AssetTransfer]] entity.
     */
    assetTransfer: AssetTransfer[];
    /**
     * One-to-many navigation property to the [[AssetRetirement]] entity.
     */
    assetRetirement: AssetRetirement[];
    /**
     * One-to-many navigation property to the [[AssetCapitalizationCreditMemo]] entity.
     */
    assetCapitalizationCreditMemo: AssetCapitalizationCreditMemo[];
    /**
     * One-to-many navigation property to the [[AssetClasses]] entity.
     */
    assetClasses: AssetClasses[];
    /**
     * One-to-many navigation property to the [[InventoryPostings]] entity.
     */
    inventoryPostings: InventoryPostings[];
    /**
     * One-to-many navigation property to the [[DeliveryNotes]] entity.
     */
    deliveryNotes: DeliveryNotes[];
    /**
     * One-to-many navigation property to the [[Quotations]] entity.
     */
    quotations: Quotations[];
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
     * One-to-many navigation property to the [[PurchaseReturns]] entity.
     */
    purchaseReturns: PurchaseReturns[];
    /**
     * One-to-many navigation property to the [[Invoices]] entity.
     */
    invoices: Invoices[];
    /**
     * One-to-many navigation property to the [[AssetCapitalization]] entity.
     */
    assetCapitalization: AssetCapitalization[];
    /**
     * One-to-many navigation property to the [[CreditNotes]] entity.
     */
    creditNotes: CreditNotes[];
    /**
     * One-to-many navigation property to the [[StockTransfers]] entity.
     */
    stockTransfers: StockTransfers[];
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[Warehouses]] entity.
     */
    warehouse: Warehouses;
    /**
     * One-to-one navigation property to the [[BrazilNumericIndexers]] entity.
     */
    brazilNumericIndexer: BrazilNumericIndexers;
    /**
     * One-to-one navigation property to the [[BrazilStringIndexers]] entity.
     */
    brazilStringIndexer: BrazilStringIndexers;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country2: Countries;
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-many navigation property to the [[Orders]] entity.
     */
    orders: Orders[];
    /**
     * One-to-many navigation property to the [[InventoryCountings]] entity.
     */
    inventoryCountings: InventoryCountings[];
    /**
     * One-to-many navigation property to the [[InventoryTransferRequests]] entity.
     */
    inventoryTransferRequests: InventoryTransferRequests[];
    /**
     * One-to-many navigation property to the [[AssetManualDepreciation]] entity.
     */
    assetManualDepreciation: AssetManualDepreciation[];
    /**
     * One-to-many navigation property to the [[DownPayments]] entity.
     */
    downPayments: DownPayments[];
    /**
     * One-to-many navigation property to the [[Drafts]] entity.
     */
    drafts: Drafts[];
    /**
     * One-to-many navigation property to the [[PaymentDrafts]] entity.
     */
    paymentDrafts: PaymentDrafts[];
    /**
     * One-to-many navigation property to the [[StockTransferDrafts]] entity.
     */
    stockTransferDrafts: StockTransferDrafts[];
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
     * One-to-many navigation property to the [[InventoryOpeningBalances]] entity.
     */
    inventoryOpeningBalances: InventoryOpeningBalances[];
    /**
     * One-to-many navigation property to the [[PurchaseDownPayments]] entity.
     */
    purchaseDownPayments: PurchaseDownPayments[];
    /**
     * One-to-many navigation property to the [[EmployeesInfo]] entity.
     */
    employeesInfo: EmployeesInfo[];
    /**
     * One-to-many navigation property to the [[PurchaseOrders]] entity.
     */
    purchaseOrders: PurchaseOrders[];
    /**
     * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
     */
    goodsReturnRequest: GoodsReturnRequest[];
    /**
     * One-to-many navigation property to the [[Deposits]] entity.
     */
    deposits: Deposits[];
    /**
     * One-to-many navigation property to the [[IncomingPayments]] entity.
     */
    incomingPayments: IncomingPayments[];
    /**
     * Returns an entity builder to construct instances of `BusinessPlaces`.
     * @returns A builder that constructs instances of entity type `BusinessPlaces`.
     */
    static builder(): EntityBuilderType<BusinessPlaces, BusinessPlacesType>;
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPlaces` entity type.
     * @returns A `BusinessPlaces` request builder.
     */
    static requestBuilder(): BusinessPlacesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPlaces`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPlaces`.
     */
    static customField(fieldName: string): CustomFieldV4<BusinessPlaces>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
    bplid?: number | null;
    bplName?: string | null;
    bplNameForeign?: string | null;
    vatRegNum?: string | null;
    repName?: string | null;
    industry?: string | null;
    business?: string | null;
    address?: string | null;
    addressforeign?: string | null;
    mainBpl?: BoYesNoEnum | null;
    taxOfficeNo?: string | null;
    disabled?: BoYesNoEnum | null;
    defaultCustomerId?: string | null;
    defaultVendorId?: string | null;
    defaultWarehouseId?: string | null;
    defaultTaxCode?: string | null;
    taxOffice?: string | null;
    federalTaxId?: string | null;
    federalTaxId2?: string | null;
    federalTaxId3?: string | null;
    additionalIdNumber?: string | null;
    natureOfCompanyCode?: number | null;
    economicActivityTypeCode?: number | null;
    creditContributionOriginCode?: string | null;
    ipiPeriodCode?: string | null;
    cooperativeAssociationTypeCode?: number | null;
    profitTaxationCode?: number | null;
    companyQualificationCode?: number | null;
    declarerTypeCode?: number | null;
    preferredStateCode?: string | null;
    addressType?: string | null;
    street?: string | null;
    streetNo?: string | null;
    building?: string | null;
    zipCode?: string | null;
    block?: string | null;
    city?: string | null;
    state?: string | null;
    county?: string | null;
    country?: string | null;
    aliasName?: string | null;
    commercialRegister?: string | null;
    dateOfIncorporation?: Moment | null;
    spedProfile?: string | null;
    environmentType?: number | null;
    opting4Icms?: BoYesNoEnum | null;
    paymentClearingAccount?: string | null;
    globalLocationNumber?: string | null;
    defaultResourceWarehouseId?: string | null;
    businessPlaceIeNumbers?: BusinessPlaceIeNumber[] | null;
    businessPlaceTributaryInfos?: BusinessPlaceTributaryInfo[] | null;
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
export declare namespace BusinessPlaces {
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPLID: NumberField<BusinessPlaces>;
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPL_NAME: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[bplNameForeign]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPL_NAME_FOREIGN: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_REG_NUM: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[repName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REP_NAME: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[business]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[addressforeign]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESSFOREIGN: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[mainBpl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIN_BPL: EnumField<BusinessPlaces>;
    /**
     * Static representation of the [[taxOfficeNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_OFFICE_NO: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[disabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISABLED: EnumField<BusinessPlaces>;
    /**
     * Static representation of the [[defaultCustomerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_CUSTOMER_ID: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[defaultVendorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_VENDOR_ID: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[defaultWarehouseId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_WAREHOUSE_ID: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[defaultTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_TAX_CODE: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[taxOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_OFFICE: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEDERAL_TAX_ID: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[federalTaxId2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEDERAL_TAX_ID_2: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[federalTaxId3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEDERAL_TAX_ID_3: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[additionalIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_ID_NUMBER: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[natureOfCompanyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NATURE_OF_COMPANY_CODE: NumberField<BusinessPlaces>;
    /**
     * Static representation of the [[economicActivityTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ECONOMIC_ACTIVITY_TYPE_CODE: NumberField<BusinessPlaces>;
    /**
     * Static representation of the [[creditContributionOriginCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_CONTRIBUTION_ORIGIN_CODE: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[ipiPeriodCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IPI_PERIOD_CODE: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[cooperativeAssociationTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COOPERATIVE_ASSOCIATION_TYPE_CODE: NumberField<BusinessPlaces>;
    /**
     * Static representation of the [[profitTaxationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROFIT_TAXATION_CODE: NumberField<BusinessPlaces>;
    /**
     * Static representation of the [[companyQualificationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_QUALIFICATION_CODE: NumberField<BusinessPlaces>;
    /**
     * Static representation of the [[declarerTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECLARER_TYPE_CODE: NumberField<BusinessPlaces>;
    /**
     * Static representation of the [[preferredStateCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREFERRED_STATE_CODE: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TYPE: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[streetNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_NO: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[building]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUILDING: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP_CODE: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[block]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[aliasName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALIAS_NAME: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[commercialRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMERCIAL_REGISTER: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[dateOfIncorporation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_OF_INCORPORATION: DateField<BusinessPlaces>;
    /**
     * Static representation of the [[spedProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPED_PROFILE: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[environmentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENVIRONMENT_TYPE: NumberField<BusinessPlaces>;
    /**
     * Static representation of the [[opting4Icms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTING_4_ICMS: EnumField<BusinessPlaces>;
    /**
     * Static representation of the [[paymentClearingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_CLEARING_ACCOUNT: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[globalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GLOBAL_LOCATION_NUMBER: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[defaultResourceWarehouseId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_RESOURCE_WAREHOUSE_ID: StringField<BusinessPlaces>;
    /**
     * Static representation of the [[businessPlaceIeNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE_IE_NUMBERS: CollectionField<BusinessPlaces, BusinessPlaceIeNumber>;
    /**
     * Static representation of the [[businessPlaceTributaryInfos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE_TRIBUTARY_INFOS: CollectionField<BusinessPlaces, BusinessPlaceTributaryInfo>;
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_DEFAULT_GROUPS: OneToManyLink<BusinessPlaces, UserDefaultGroups>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_ENTRIES: OneToManyLink<BusinessPlaces, InventoryGenEntries>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_QUOTATIONS: OneToManyLink<BusinessPlaces, PurchaseQuotations>;
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_PAYMENTS: OneToManyLink<BusinessPlaces, VendorPayments>;
    /**
     * Static representation of the one-to-many navigation property [[assetTransfer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_TRANSFER: OneToManyLink<BusinessPlaces, AssetTransfer>;
    /**
     * Static representation of the one-to-many navigation property [[assetRetirement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_RETIREMENT: OneToManyLink<BusinessPlaces, AssetRetirement>;
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalizationCreditMemo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<BusinessPlaces, AssetCapitalizationCreditMemo>;
    /**
     * Static representation of the one-to-many navigation property [[assetClasses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_CLASSES: OneToManyLink<BusinessPlaces, AssetClasses>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryPostings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_POSTINGS: OneToManyLink<BusinessPlaces, InventoryPostings>;
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_NOTES: OneToManyLink<BusinessPlaces, DeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUOTATIONS: OneToManyLink<BusinessPlaces, Quotations>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_EXITS: OneToManyLink<BusinessPlaces, InventoryGenExits>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_REQUESTS: OneToManyLink<BusinessPlaces, PurchaseRequests>;
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURN_REQUEST: OneToManyLink<BusinessPlaces, ReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_RETURNS: OneToManyLink<BusinessPlaces, PurchaseReturns>;
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICES: OneToManyLink<BusinessPlaces, Invoices>;
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalization]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_CAPITALIZATION: OneToManyLink<BusinessPlaces, AssetCapitalization>;
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_NOTES: OneToManyLink<BusinessPlaces, CreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFERS: OneToManyLink<BusinessPlaces, StockTransfers>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<BusinessPlaces, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[warehouse]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE: OneToOneLink<BusinessPlaces, Warehouses>;
    /**
     * Static representation of the one-to-one navigation property [[brazilNumericIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRAZIL_NUMERIC_INDEXER: OneToOneLink<BusinessPlaces, BrazilNumericIndexers>;
    /**
     * Static representation of the one-to-one navigation property [[brazilStringIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRAZIL_STRING_INDEXER: OneToOneLink<BusinessPlaces, BrazilStringIndexers>;
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_2: OneToOneLink<BusinessPlaces, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<BusinessPlaces, ChartOfAccounts>;
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERS: OneToManyLink<BusinessPlaces, Orders>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryCountings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_COUNTINGS: OneToManyLink<BusinessPlaces, InventoryCountings>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_TRANSFER_REQUESTS: OneToManyLink<BusinessPlaces, InventoryTransferRequests>;
    /**
     * Static representation of the one-to-many navigation property [[assetManualDepreciation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_MANUAL_DEPRECIATION: OneToManyLink<BusinessPlaces, AssetManualDepreciation>;
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENTS: OneToManyLink<BusinessPlaces, DownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFTS: OneToManyLink<BusinessPlaces, Drafts>;
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_DRAFTS: OneToManyLink<BusinessPlaces, PaymentDrafts>;
    /**
     * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFER_DRAFTS: OneToManyLink<BusinessPlaces, StockTransferDrafts>;
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNS: OneToManyLink<BusinessPlaces, Returns>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE_REVERSAL: OneToManyLink<BusinessPlaces, CorrectionInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE: OneToManyLink<BusinessPlaces, CorrectionPurchaseInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<BusinessPlaces, CorrectionPurchaseInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_INVOICES: OneToManyLink<BusinessPlaces, PurchaseInvoices>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DELIVERY_NOTES: OneToManyLink<BusinessPlaces, PurchaseDeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE: OneToManyLink<BusinessPlaces, CorrectionInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_NOTES: OneToManyLink<BusinessPlaces, PurchaseCreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryOpeningBalances]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_OPENING_BALANCES: OneToManyLink<BusinessPlaces, InventoryOpeningBalances>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DOWN_PAYMENTS: OneToManyLink<BusinessPlaces, PurchaseDownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEES_INFO: OneToManyLink<BusinessPlaces, EmployeesInfo>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ORDERS: OneToManyLink<BusinessPlaces, PurchaseOrders>;
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_RETURN_REQUEST: OneToManyLink<BusinessPlaces, GoodsReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[deposits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPOSITS: OneToManyLink<BusinessPlaces, Deposits>;
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOMING_PAYMENTS: OneToManyLink<BusinessPlaces, IncomingPayments>;
    /**
     * All fields of the BusinessPlaces entity.
     */
    const _allFields: Array<NumberField<BusinessPlaces> | StringField<BusinessPlaces> | EnumField<BusinessPlaces> | DateField<BusinessPlaces> | CollectionField<BusinessPlaces, BusinessPlaceIeNumber> | CollectionField<BusinessPlaces, BusinessPlaceTributaryInfo> | OneToManyLink<BusinessPlaces, UserDefaultGroups> | OneToManyLink<BusinessPlaces, InventoryGenEntries> | OneToManyLink<BusinessPlaces, PurchaseQuotations> | OneToManyLink<BusinessPlaces, VendorPayments> | OneToManyLink<BusinessPlaces, AssetTransfer> | OneToManyLink<BusinessPlaces, AssetRetirement> | OneToManyLink<BusinessPlaces, AssetCapitalizationCreditMemo> | OneToManyLink<BusinessPlaces, AssetClasses> | OneToManyLink<BusinessPlaces, InventoryPostings> | OneToManyLink<BusinessPlaces, DeliveryNotes> | OneToManyLink<BusinessPlaces, Quotations> | OneToManyLink<BusinessPlaces, InventoryGenExits> | OneToManyLink<BusinessPlaces, PurchaseRequests> | OneToManyLink<BusinessPlaces, ReturnRequest> | OneToManyLink<BusinessPlaces, PurchaseReturns> | OneToManyLink<BusinessPlaces, Invoices> | OneToManyLink<BusinessPlaces, AssetCapitalization> | OneToManyLink<BusinessPlaces, CreditNotes> | OneToManyLink<BusinessPlaces, StockTransfers> | OneToOneLink<BusinessPlaces, BusinessPartners> | OneToOneLink<BusinessPlaces, Warehouses> | OneToOneLink<BusinessPlaces, BrazilNumericIndexers> | OneToOneLink<BusinessPlaces, BrazilStringIndexers> | OneToOneLink<BusinessPlaces, Countries> | OneToOneLink<BusinessPlaces, ChartOfAccounts> | OneToManyLink<BusinessPlaces, Orders> | OneToManyLink<BusinessPlaces, InventoryCountings> | OneToManyLink<BusinessPlaces, InventoryTransferRequests> | OneToManyLink<BusinessPlaces, AssetManualDepreciation> | OneToManyLink<BusinessPlaces, DownPayments> | OneToManyLink<BusinessPlaces, Drafts> | OneToManyLink<BusinessPlaces, PaymentDrafts> | OneToManyLink<BusinessPlaces, StockTransferDrafts> | OneToManyLink<BusinessPlaces, Returns> | OneToManyLink<BusinessPlaces, CorrectionInvoiceReversal> | OneToManyLink<BusinessPlaces, CorrectionPurchaseInvoice> | OneToManyLink<BusinessPlaces, CorrectionPurchaseInvoiceReversal> | OneToManyLink<BusinessPlaces, PurchaseInvoices> | OneToManyLink<BusinessPlaces, PurchaseDeliveryNotes> | OneToManyLink<BusinessPlaces, CorrectionInvoice> | OneToManyLink<BusinessPlaces, PurchaseCreditNotes> | OneToManyLink<BusinessPlaces, InventoryOpeningBalances> | OneToManyLink<BusinessPlaces, PurchaseDownPayments> | OneToManyLink<BusinessPlaces, EmployeesInfo> | OneToManyLink<BusinessPlaces, PurchaseOrders> | OneToManyLink<BusinessPlaces, GoodsReturnRequest> | OneToManyLink<BusinessPlaces, Deposits> | OneToManyLink<BusinessPlaces, IncomingPayments>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPlaces>;
    /**
     * All key fields of the BusinessPlaces entity.
     */
    const _keyFields: Array<Field<BusinessPlaces>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPlaces.
     */
    const _keys: {
        [keys: string]: Field<BusinessPlaces>;
    };
}
//# sourceMappingURL=BusinessPlaces.d.ts.map