import { WarehousesRequestBuilder } from './WarehousesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Warehouses" of service "SAPB1".
 */
export declare class Warehouses extends Entity implements WarehousesType {
    /**
     * Technical entity name for Warehouses.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Warehouses.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Street.
     * @nullable
     */
    street?: string;
    /**
     * Stock Inflation Offset Account.
     * @nullable
     */
    stockInflationOffsetAccount?: string;
    /**
     * Zip Code.
     * @nullable
     */
    zipCode?: string;
    /**
     * Decreasing Account.
     * @nullable
     */
    decreasingAccount?: string;
    /**
     * Purchase Account.
     * @nullable
     */
    purchaseAccount?: string;
    /**
     * Eu Revenues Account.
     * @nullable
     */
    euRevenuesAccount?: string;
    /**
     * Returning Account.
     * @nullable
     */
    returningAccount?: string;
    /**
     * Shipped Goods Account.
     * @nullable
     */
    shippedGoodsAccount?: string;
    /**
     * Stock Inflation Adjust Account.
     * @nullable
     */
    stockInflationAdjustAccount?: string;
    /**
     * Cost Inflation Account.
     * @nullable
     */
    costInflationAccount?: string;
    /**
     * Foreign Expenses Account.
     * @nullable
     */
    foreignExpensesAccount?: string;
    /**
     * Eu Expenses Account.
     * @nullable
     */
    euExpensesAccount?: string;
    /**
     * Cost Inflation Offset Account.
     * @nullable
     */
    costInflationOffsetAccount?: string;
    /**
     * Expenses Clearing Account.
     * @nullable
     */
    expensesClearingAccount?: string;
    /**
     * Purchase Returning Account.
     * @nullable
     */
    purchaseReturningAccount?: string;
    /**
     * Vat In Revenue Account.
     * @nullable
     */
    vatInRevenueAccount?: string;
    /**
     * Federal Tax Id.
     * @nullable
     */
    federalTaxId?: string;
    /**
     * Location.
     * @nullable
     */
    location?: number;
    /**
     * Block.
     * @nullable
     */
    block?: string;
    /**
     * Expense Account.
     * @nullable
     */
    expenseAccount?: string;
    /**
     * Decrease Gl Account.
     * @nullable
     */
    decreaseGlAccount?: string;
    /**
     * Revenues Account.
     * @nullable
     */
    revenuesAccount?: string;
    /**
     * Tax Group.
     * @nullable
     */
    taxGroup?: string;
    /**
     * Exempt Revenues Account.
     * @nullable
     */
    exemptRevenuesAccount?: string;
    /**
     * Purchase Offset Account.
     * @nullable
     */
    purchaseOffsetAccount?: string;
    /**
     * Cost Of Goods Sold.
     * @nullable
     */
    costOfGoodsSold?: string;
    /**
     * Warehouse Code.
     * @nullable
     */
    warehouseCode?: string;
    /**
     * State.
     * @nullable
     */
    state?: string;
    /**
     * City.
     * @nullable
     */
    city?: string;
    /**
     * Price Differences Account.
     * @nullable
     */
    priceDifferencesAccount?: string;
    /**
     * Variance Account.
     * @nullable
     */
    varianceAccount?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Increase Gl Account.
     * @nullable
     */
    increaseGlAccount?: string;
    /**
     * Exchange Rate Differences Account.
     * @nullable
     */
    exchangeRateDifferencesAccount?: string;
    /**
     * Wip Material Account.
     * @nullable
     */
    wipMaterialAccount?: string;
    /**
     * Warehouse Name.
     * @nullable
     */
    warehouseName?: string;
    /**
     * Wip Material Variance Account.
     * @nullable
     */
    wipMaterialVarianceAccount?: string;
    /**
     * Transfers Acc.
     * @nullable
     */
    transfersAcc?: string;
    /**
     * Internal Key.
     * @nullable
     */
    internalKey?: number;
    /**
     * Foreign Revenues Acc.
     * @nullable
     */
    foreignRevenuesAcc?: string;
    /**
     * Building Floor Room.
     * @nullable
     */
    buildingFloorRoom?: string;
    /**
     * County.
     * @nullable
     */
    county?: string;
    /**
     * Increasing Acc.
     * @nullable
     */
    increasingAcc?: string;
    /**
     * Expense Offseting Act.
     * @nullable
     */
    expenseOffsetingAct?: string;
    /**
     * Goods Clearing Acc.
     * @nullable
     */
    goodsClearingAcc?: string;
    /**
     * Stock Account.
     * @nullable
     */
    stockAccount?: string;
    /**
     * Business Place Id.
     * @nullable
     */
    businessPlaceId?: number;
    /**
     * Purchase Credit Acc.
     * @nullable
     */
    purchaseCreditAcc?: string;
    /**
     * Eu Purchase Credit Acc.
     * @nullable
     */
    euPurchaseCreditAcc?: string;
    /**
     * Foreign Purchase Credit Acc.
     * @nullable
     */
    foreignPurchaseCreditAcc?: string;
    /**
     * Sales Credit Acc.
     * @nullable
     */
    salesCreditAcc?: string;
    /**
     * Sales Credit Eu Acc.
     * @nullable
     */
    salesCreditEuAcc?: string;
    /**
     * Exempted Credits.
     * @nullable
     */
    exemptedCredits?: string;
    /**
     * Sales Credit Foreign Acc.
     * @nullable
     */
    salesCreditForeignAcc?: string;
    /**
     * Negative Inventory Adjustment Account.
     * @nullable
     */
    negativeInventoryAdjustmentAccount?: string;
    /**
     * Wh Ship To Name.
     * @nullable
     */
    whShipToName?: string;
    /**
     * Wh Incoming Cenvat Account.
     * @nullable
     */
    whIncomingCenvatAccount?: string;
    /**
     * Wh Outgoing Cenvat Account.
     * @nullable
     */
    whOutgoingCenvatAccount?: string;
    /**
     * Stock In Transit Account.
     * @nullable
     */
    stockInTransitAccount?: string;
    /**
     * Wip Offset Profit And Loss Account.
     * @nullable
     */
    wipOffsetProfitAndLossAccount?: string;
    /**
     * Inventory Offset Profit And Loss Account.
     * @nullable
     */
    inventoryOffsetProfitAndLossAccount?: string;
    /**
     * Address Type.
     * @nullable
     */
    addressType?: string;
    /**
     * Street No.
     * @nullable
     */
    streetNo?: string;
    /**
     * Storekeeper.
     * @nullable
     */
    storekeeper?: number;
    /**
     * Shipper.
     * @nullable
     */
    shipper?: string;
    /**
     * Global Location Number.
     * @nullable
     */
    globalLocationNumber?: string;
    /**
     * Bin Loc Code Separator.
     * @nullable
     */
    binLocCodeSeparator?: string;
    /**
     * Default Bin.
     * @nullable
     */
    defaultBin?: number;
    /**
     * Purchase Balance Account.
     * @nullable
     */
    purchaseBalanceAccount?: string;
    /**
     * One-to-many navigation property to the [[UserDefaultGroups]] entity.
     */
    userDefaultGroups: UserDefaultGroups[];
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[WarehouseLocations]] entity.
     */
    warehouseLocation: WarehouseLocations;
    /**
     * One-to-one navigation property to the [[SalesTaxCodes]] entity.
     */
    salesTaxCode: SalesTaxCodes;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country2: Countries;
    /**
     * One-to-one navigation property to the [[EmployeesInfo]] entity.
     */
    employeeInfo: EmployeesInfo;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[BinLocations]] entity.
     */
    binLocation: BinLocations;
    /**
     * One-to-many navigation property to the [[StockTakings]] entity.
     */
    stockTakings: StockTakings[];
    /**
     * One-to-many navigation property to the [[ProductionOrders]] entity.
     */
    productionOrders: ProductionOrders[];
    /**
     * One-to-many navigation property to the [[ResourceCapacities]] entity.
     */
    resourceCapacities: ResourceCapacities[];
    /**
     * One-to-many navigation property to the [[GlAccountAdvancedRules]] entity.
     */
    glAccountAdvancedRules: GlAccountAdvancedRules[];
    /**
     * One-to-many navigation property to the [[StockTransfers]] entity.
     */
    stockTransfers: StockTransfers[];
    /**
     * One-to-many navigation property to the [[BusinessPlaces]] entity.
     */
    businessPlaces: BusinessPlaces[];
    /**
     * One-to-many navigation property to the [[InventoryTransferRequests]] entity.
     */
    inventoryTransferRequests: InventoryTransferRequests[];
    /**
     * One-to-many navigation property to the [[BinLocations]] entity.
     */
    binLocations: BinLocations[];
    /**
     * One-to-many navigation property to the [[StockTransferDrafts]] entity.
     */
    stockTransferDrafts: StockTransferDrafts[];
    /**
     * Returns an entity builder to construct instances `Warehouses`.
     * @returns A builder that constructs instances of entity type `Warehouses`.
     */
    static builder(): EntityBuilderType<Warehouses, WarehousesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Warehouses` entity type.
     * @returns A `Warehouses` request builder.
     */
    static requestBuilder(): WarehousesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Warehouses`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Warehouses`.
     */
    static customField(fieldName: string): CustomField<Warehouses>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { WarehouseLocations, WarehouseLocationsType } from './WarehouseLocations';
import { SalesTaxCodes, SalesTaxCodesType } from './SalesTaxCodes';
import { Countries, CountriesType } from './Countries';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { BinLocations, BinLocationsType } from './BinLocations';
import { StockTakings, StockTakingsType } from './StockTakings';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { ResourceCapacities, ResourceCapacitiesType } from './ResourceCapacities';
import { GlAccountAdvancedRules, GlAccountAdvancedRulesType } from './GlAccountAdvancedRules';
import { StockTransfers, StockTransfersType } from './StockTransfers';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { InventoryTransferRequests, InventoryTransferRequestsType } from './InventoryTransferRequests';
import { StockTransferDrafts, StockTransferDraftsType } from './StockTransferDrafts';
export interface WarehousesType {
    street?: string;
    stockInflationOffsetAccount?: string;
    zipCode?: string;
    decreasingAccount?: string;
    purchaseAccount?: string;
    euRevenuesAccount?: string;
    returningAccount?: string;
    shippedGoodsAccount?: string;
    stockInflationAdjustAccount?: string;
    costInflationAccount?: string;
    foreignExpensesAccount?: string;
    euExpensesAccount?: string;
    costInflationOffsetAccount?: string;
    expensesClearingAccount?: string;
    purchaseReturningAccount?: string;
    vatInRevenueAccount?: string;
    federalTaxId?: string;
    location?: number;
    block?: string;
    expenseAccount?: string;
    decreaseGlAccount?: string;
    revenuesAccount?: string;
    taxGroup?: string;
    exemptRevenuesAccount?: string;
    purchaseOffsetAccount?: string;
    costOfGoodsSold?: string;
    warehouseCode?: string;
    state?: string;
    city?: string;
    priceDifferencesAccount?: string;
    varianceAccount?: string;
    country?: string;
    increaseGlAccount?: string;
    exchangeRateDifferencesAccount?: string;
    wipMaterialAccount?: string;
    warehouseName?: string;
    wipMaterialVarianceAccount?: string;
    transfersAcc?: string;
    internalKey?: number;
    foreignRevenuesAcc?: string;
    buildingFloorRoom?: string;
    county?: string;
    increasingAcc?: string;
    expenseOffsetingAct?: string;
    goodsClearingAcc?: string;
    stockAccount?: string;
    businessPlaceId?: number;
    purchaseCreditAcc?: string;
    euPurchaseCreditAcc?: string;
    foreignPurchaseCreditAcc?: string;
    salesCreditAcc?: string;
    salesCreditEuAcc?: string;
    exemptedCredits?: string;
    salesCreditForeignAcc?: string;
    negativeInventoryAdjustmentAccount?: string;
    whShipToName?: string;
    whIncomingCenvatAccount?: string;
    whOutgoingCenvatAccount?: string;
    stockInTransitAccount?: string;
    wipOffsetProfitAndLossAccount?: string;
    inventoryOffsetProfitAndLossAccount?: string;
    addressType?: string;
    streetNo?: string;
    storekeeper?: number;
    shipper?: string;
    globalLocationNumber?: string;
    binLocCodeSeparator?: string;
    defaultBin?: number;
    purchaseBalanceAccount?: string;
    userDefaultGroups: UserDefaultGroupsType[];
    chartOfAccount: ChartOfAccountsType;
    warehouseLocation: WarehouseLocationsType;
    salesTaxCode: SalesTaxCodesType;
    country2: CountriesType;
    employeeInfo: EmployeesInfoType;
    businessPartner: BusinessPartnersType;
    binLocation: BinLocationsType;
    stockTakings: StockTakingsType[];
    productionOrders: ProductionOrdersType[];
    resourceCapacities: ResourceCapacitiesType[];
    glAccountAdvancedRules: GlAccountAdvancedRulesType[];
    stockTransfers: StockTransfersType[];
    businessPlaces: BusinessPlacesType[];
    inventoryTransferRequests: InventoryTransferRequestsType[];
    binLocations: BinLocationsType[];
    stockTransferDrafts: StockTransferDraftsType[];
}
export interface WarehousesTypeForceMandatory {
    street: string;
    stockInflationOffsetAccount: string;
    zipCode: string;
    decreasingAccount: string;
    purchaseAccount: string;
    euRevenuesAccount: string;
    returningAccount: string;
    shippedGoodsAccount: string;
    stockInflationAdjustAccount: string;
    costInflationAccount: string;
    foreignExpensesAccount: string;
    euExpensesAccount: string;
    costInflationOffsetAccount: string;
    expensesClearingAccount: string;
    purchaseReturningAccount: string;
    vatInRevenueAccount: string;
    federalTaxId: string;
    location: number;
    block: string;
    expenseAccount: string;
    decreaseGlAccount: string;
    revenuesAccount: string;
    taxGroup: string;
    exemptRevenuesAccount: string;
    purchaseOffsetAccount: string;
    costOfGoodsSold: string;
    warehouseCode: string;
    state: string;
    city: string;
    priceDifferencesAccount: string;
    varianceAccount: string;
    country: string;
    increaseGlAccount: string;
    exchangeRateDifferencesAccount: string;
    wipMaterialAccount: string;
    warehouseName: string;
    wipMaterialVarianceAccount: string;
    transfersAcc: string;
    internalKey: number;
    foreignRevenuesAcc: string;
    buildingFloorRoom: string;
    county: string;
    increasingAcc: string;
    expenseOffsetingAct: string;
    goodsClearingAcc: string;
    stockAccount: string;
    businessPlaceId: number;
    purchaseCreditAcc: string;
    euPurchaseCreditAcc: string;
    foreignPurchaseCreditAcc: string;
    salesCreditAcc: string;
    salesCreditEuAcc: string;
    exemptedCredits: string;
    salesCreditForeignAcc: string;
    negativeInventoryAdjustmentAccount: string;
    whShipToName: string;
    whIncomingCenvatAccount: string;
    whOutgoingCenvatAccount: string;
    stockInTransitAccount: string;
    wipOffsetProfitAndLossAccount: string;
    inventoryOffsetProfitAndLossAccount: string;
    addressType: string;
    streetNo: string;
    storekeeper: number;
    shipper: string;
    globalLocationNumber: string;
    binLocCodeSeparator: string;
    defaultBin: number;
    purchaseBalanceAccount: string;
    userDefaultGroups: UserDefaultGroupsType[];
    chartOfAccount: ChartOfAccountsType;
    warehouseLocation: WarehouseLocationsType;
    salesTaxCode: SalesTaxCodesType;
    country2: CountriesType;
    employeeInfo: EmployeesInfoType;
    businessPartner: BusinessPartnersType;
    binLocation: BinLocationsType;
    stockTakings: StockTakingsType[];
    productionOrders: ProductionOrdersType[];
    resourceCapacities: ResourceCapacitiesType[];
    glAccountAdvancedRules: GlAccountAdvancedRulesType[];
    stockTransfers: StockTransfersType[];
    businessPlaces: BusinessPlacesType[];
    inventoryTransferRequests: InventoryTransferRequestsType[];
    binLocations: BinLocationsType[];
    stockTransferDrafts: StockTransferDraftsType[];
}
export declare namespace Warehouses {
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET: StringField<Warehouses>;
    /**
     * Static representation of the [[stockInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_INFLATION_OFFSET_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP_CODE: StringField<Warehouses>;
    /**
     * Static representation of the [[decreasingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECREASING_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[purchaseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[euRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EU_REVENUES_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[returningAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNING_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[shippedGoodsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPED_GOODS_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[stockInflationAdjustAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_INFLATION_ADJUST_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[costInflationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_INFLATION_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[foreignExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_EXPENSES_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[euExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EU_EXPENSES_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[costInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_INFLATION_OFFSET_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[expensesClearingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSES_CLEARING_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[purchaseReturningAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_RETURNING_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[vatInRevenueAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_IN_REVENUE_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEDERAL_TAX_ID: StringField<Warehouses>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: NumberField<Warehouses>;
    /**
     * Static representation of the [[block]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK: StringField<Warehouses>;
    /**
     * Static representation of the [[expenseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSE_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[decreaseGlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECREASE_GL_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[revenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVENUES_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[taxGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_GROUP: StringField<Warehouses>;
    /**
     * Static representation of the [[exemptRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPT_REVENUES_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[purchaseOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_OFFSET_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[costOfGoodsSold]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_OF_GOODS_SOLD: StringField<Warehouses>;
    /**
     * Static representation of the [[warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_CODE: StringField<Warehouses>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: StringField<Warehouses>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<Warehouses>;
    /**
     * Static representation of the [[priceDifferencesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_DIFFERENCES_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[varianceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VARIANCE_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<Warehouses>;
    /**
     * Static representation of the [[increaseGlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCREASE_GL_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[exchangeRateDifferencesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCHANGE_RATE_DIFFERENCES_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[wipMaterialAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIP_MATERIAL_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[warehouseName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_NAME: StringField<Warehouses>;
    /**
     * Static representation of the [[wipMaterialVarianceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIP_MATERIAL_VARIANCE_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[transfersAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSFERS_ACC: StringField<Warehouses>;
    /**
     * Static representation of the [[internalKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_KEY: NumberField<Warehouses>;
    /**
     * Static representation of the [[foreignRevenuesAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_REVENUES_ACC: StringField<Warehouses>;
    /**
     * Static representation of the [[buildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUILDING_FLOOR_ROOM: StringField<Warehouses>;
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY: StringField<Warehouses>;
    /**
     * Static representation of the [[increasingAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCREASING_ACC: StringField<Warehouses>;
    /**
     * Static representation of the [[expenseOffsetingAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSE_OFFSETING_ACT: StringField<Warehouses>;
    /**
     * Static representation of the [[goodsClearingAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_CLEARING_ACC: StringField<Warehouses>;
    /**
     * Static representation of the [[stockAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[businessPlaceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE_ID: NumberField<Warehouses>;
    /**
     * Static representation of the [[purchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_ACC: StringField<Warehouses>;
    /**
     * Static representation of the [[euPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EU_PURCHASE_CREDIT_ACC: StringField<Warehouses>;
    /**
     * Static representation of the [[foreignPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_PURCHASE_CREDIT_ACC: StringField<Warehouses>;
    /**
     * Static representation of the [[salesCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CREDIT_ACC: StringField<Warehouses>;
    /**
     * Static representation of the [[salesCreditEuAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CREDIT_EU_ACC: StringField<Warehouses>;
    /**
     * Static representation of the [[exemptedCredits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTED_CREDITS: StringField<Warehouses>;
    /**
     * Static representation of the [[salesCreditForeignAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CREDIT_FOREIGN_ACC: StringField<Warehouses>;
    /**
     * Static representation of the [[negativeInventoryAdjustmentAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[whShipToName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WH_SHIP_TO_NAME: StringField<Warehouses>;
    /**
     * Static representation of the [[whIncomingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WH_INCOMING_CENVAT_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[whOutgoingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WH_OUTGOING_CENVAT_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[stockInTransitAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_IN_TRANSIT_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[wipOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[inventoryOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TYPE: StringField<Warehouses>;
    /**
     * Static representation of the [[streetNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_NO: StringField<Warehouses>;
    /**
     * Static representation of the [[storekeeper]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOREKEEPER: NumberField<Warehouses>;
    /**
     * Static representation of the [[shipper]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPER: StringField<Warehouses>;
    /**
     * Static representation of the [[globalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GLOBAL_LOCATION_NUMBER: StringField<Warehouses>;
    /**
     * Static representation of the [[binLocCodeSeparator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIN_LOC_CODE_SEPARATOR: StringField<Warehouses>;
    /**
     * Static representation of the [[defaultBin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_BIN: NumberField<Warehouses>;
    /**
     * Static representation of the [[purchaseBalanceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_BALANCE_ACCOUNT: StringField<Warehouses>;
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_DEFAULT_GROUPS: OneToManyLink<Warehouses, UserDefaultGroups>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<Warehouses, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_LOCATION: OneToOneLink<Warehouses, WarehouseLocations>;
    /**
     * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_CODE: OneToOneLink<Warehouses, SalesTaxCodes>;
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_2: OneToOneLink<Warehouses, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_INFO: OneToOneLink<Warehouses, EmployeesInfo>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<Warehouses, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[binLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIN_LOCATION: OneToOneLink<Warehouses, BinLocations>;
    /**
     * Static representation of the one-to-many navigation property [[stockTakings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TAKINGS: OneToManyLink<Warehouses, StockTakings>;
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDERS: OneToManyLink<Warehouses, ProductionOrders>;
    /**
     * Static representation of the one-to-many navigation property [[resourceCapacities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCE_CAPACITIES: OneToManyLink<Warehouses, ResourceCapacities>;
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<Warehouses, GlAccountAdvancedRules>;
    /**
     * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFERS: OneToManyLink<Warehouses, StockTransfers>;
    /**
     * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACES: OneToManyLink<Warehouses, BusinessPlaces>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_TRANSFER_REQUESTS: OneToManyLink<Warehouses, InventoryTransferRequests>;
    /**
     * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIN_LOCATIONS: OneToManyLink<Warehouses, BinLocations>;
    /**
     * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFER_DRAFTS: OneToManyLink<Warehouses, StockTransferDrafts>;
    /**
     * All fields of the Warehouses entity.
     */
    const _allFields: Array<StringField<Warehouses> | NumberField<Warehouses> | OneToManyLink<Warehouses, UserDefaultGroups> | OneToOneLink<Warehouses, ChartOfAccounts> | OneToOneLink<Warehouses, WarehouseLocations> | OneToOneLink<Warehouses, SalesTaxCodes> | OneToOneLink<Warehouses, Countries> | OneToOneLink<Warehouses, EmployeesInfo> | OneToOneLink<Warehouses, BusinessPartners> | OneToOneLink<Warehouses, BinLocations> | OneToManyLink<Warehouses, StockTakings> | OneToManyLink<Warehouses, ProductionOrders> | OneToManyLink<Warehouses, ResourceCapacities> | OneToManyLink<Warehouses, GlAccountAdvancedRules> | OneToManyLink<Warehouses, StockTransfers> | OneToManyLink<Warehouses, BusinessPlaces> | OneToManyLink<Warehouses, InventoryTransferRequests> | OneToManyLink<Warehouses, BinLocations> | OneToManyLink<Warehouses, StockTransferDrafts>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Warehouses>;
    /**
     * All key fields of the Warehouses entity.
     */
    const _keyFields: Array<Field<Warehouses>>;
    /**
     * Mapping of all key field names to the respective static field property Warehouses.
     */
    const _keys: {
        [keys: string]: Field<Warehouses>;
    };
}
//# sourceMappingURL=Warehouses.d.ts.map