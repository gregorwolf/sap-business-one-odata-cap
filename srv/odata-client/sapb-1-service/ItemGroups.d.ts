import { ItemGroupsRequestBuilder } from './ItemGroupsRequestBuilder';
import { ItemGroupsWarehouseInfo } from './ItemGroupsWarehouseInfo';
import { BoProcurementMethod } from './BoProcurementMethod';
import { BoMrpComponentWarehouse } from './BoMrpComponentWarehouse';
import { BoInventorySystem } from './BoInventorySystem';
import { BoPlanningSystem } from './BoPlanningSystem';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ItemClassEnum } from './ItemClassEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ItemGroups" of service "SAPB1".
 */
export declare class ItemGroups extends EntityV4 implements ItemGroupsType {
    /**
     * Technical entity name for ItemGroups.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Price Differences Account.
     * @nullable
     */
    priceDifferencesAccount?: string;
    /**
     * Stock Inflation Adjust Account.
     * @nullable
     */
    stockInflationAdjustAccount?: string;
    /**
     * Minimum Order Quantity.
     * @nullable
     */
    minimumOrderQuantity?: number;
    /**
     * Order Interval.
     * @nullable
     */
    orderInterval?: number;
    /**
     * Exchange Rate Differences Account.
     * @nullable
     */
    exchangeRateDifferencesAccount?: string;
    /**
     * Increasing Account.
     * @nullable
     */
    increasingAccount?: string;
    /**
     * Stock Inflation Offset Account.
     * @nullable
     */
    stockInflationOffsetAccount?: string;
    /**
     * Procurement Method.
     * @nullable
     */
    procurementMethod?: BoProcurementMethod;
    /**
     * Component Warehouse.
     * @nullable
     */
    componentWarehouse?: BoMrpComponentWarehouse;
    /**
     * Purchase Offset Account.
     * @nullable
     */
    purchaseOffsetAccount?: string;
    /**
     * Inventory System.
     * @nullable
     */
    inventorySystem?: BoInventorySystem;
    /**
     * Wip Material Variance Account.
     * @nullable
     */
    wipMaterialVarianceAccount?: string;
    /**
     * Planning System.
     * @nullable
     */
    planningSystem?: BoPlanningSystem;
    /**
     * Purchase Account.
     * @nullable
     */
    purchaseAccount?: string;
    /**
     * Returning Account.
     * @nullable
     */
    returningAccount?: string;
    /**
     * Cost Inflation Account.
     * @nullable
     */
    costInflationAccount?: string;
    /**
     * Expenses Account.
     * @nullable
     */
    expensesAccount?: string;
    /**
     * Revenues Account.
     * @nullable
     */
    revenuesAccount?: string;
    /**
     * Transfers Account.
     * @nullable
     */
    transfersAccount?: string;
    /**
     * Lead Time.
     * @nullable
     */
    leadTime?: number;
    /**
     * Order Multiple.
     * @nullable
     */
    orderMultiple?: number;
    /**
     * Cost Inflation Offset Account.
     * @nullable
     */
    costInflationOffsetAccount?: string;
    /**
     * Inventory Account.
     * @nullable
     */
    inventoryAccount?: string;
    /**
     * Decrease Gl Account.
     * @nullable
     */
    decreaseGlAccount?: string;
    /**
     * Number.
     * @nullable
     */
    number?: number;
    /**
     * Goods Clearing Account.
     * @nullable
     */
    goodsClearingAccount?: string;
    /**
     * Increase Gl Account.
     * @nullable
     */
    increaseGlAccount?: string;
    /**
     * Foreign Revenues Account.
     * @nullable
     */
    foreignRevenuesAccount?: string;
    /**
     * Alert.
     * @nullable
     */
    alert?: BoYesNoEnum;
    /**
     * Wip Material Account.
     * @nullable
     */
    wipMaterialAccount?: string;
    /**
     * Shipped Goods Account.
     * @nullable
     */
    shippedGoodsAccount?: string;
    /**
     * Exempt Revenues Account.
     * @nullable
     */
    exemptRevenuesAccount?: string;
    /**
     * Decreasing Account.
     * @nullable
     */
    decreasingAccount?: string;
    /**
     * Vat In Revenue Account.
     * @nullable
     */
    vatInRevenueAccount?: string;
    /**
     * Variance Account.
     * @nullable
     */
    varianceAccount?: string;
    /**
     * Eu Expenses Account.
     * @nullable
     */
    euExpensesAccount?: string;
    /**
     * Foreign Expenses Account.
     * @nullable
     */
    foreignExpensesAccount?: string;
    /**
     * Cycle Code.
     * @nullable
     */
    cycleCode?: number;
    /**
     * Cost Account.
     * @nullable
     */
    costAccount?: string;
    /**
     * Eu Revenues Account.
     * @nullable
     */
    euRevenuesAccount?: string;
    /**
     * Pa Return Account.
     * @nullable
     */
    paReturnAccount?: string;
    /**
     * Group Name.
     * @nullable
     */
    groupName?: string;
    /**
     * Expense Clearing Act.
     * @nullable
     */
    expenseClearingAct?: string;
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
     * Expense Offset Account.
     * @nullable
     */
    expenseOffsetAccount?: string;
    /**
     * Negative Inventory Adjustment Account.
     * @nullable
     */
    negativeInventoryAdjustmentAccount?: string;
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
     * Tolerance Days.
     * @nullable
     */
    toleranceDays?: number;
    /**
     * Default Uo M Group.
     * @nullable
     */
    defaultUoMGroup?: number;
    /**
     * Default Inventory Uo M.
     * @nullable
     */
    defaultInventoryUoM?: number;
    /**
     * Purchase Balance Account.
     * @nullable
     */
    purchaseBalanceAccount?: string;
    /**
     * Item Class.
     * @nullable
     */
    itemClass?: ItemClassEnum;
    /**
     * Item Groups Warehouse Infos.
     * @nullable
     */
    itemGroupsWarehouseInfos?: ItemGroupsWarehouseInfo[];
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[InventoryCycles]] entity.
     */
    inventoryCycles: InventoryCycles;
    /**
     * One-to-one navigation property to the [[UnitOfMeasurementGroups]] entity.
     */
    unitOfMeasurementGroup: UnitOfMeasurementGroups;
    /**
     * One-to-one navigation property to the [[UnitOfMeasurements]] entity.
     */
    unitOfMeasurement: UnitOfMeasurements;
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * One-to-many navigation property to the [[GlAccountAdvancedRules]] entity.
     */
    glAccountAdvancedRules: GlAccountAdvancedRules[];
    /**
     * One-to-many navigation property to the [[BinLocations]] entity.
     */
    binLocations: BinLocations[];
    /**
     * One-to-many navigation property to the [[ServiceCalls]] entity.
     */
    serviceCalls: ServiceCalls[];
    /**
     * Returns an entity builder to construct instances of `ItemGroups`.
     * @returns A builder that constructs instances of entity type `ItemGroups`.
     */
    static builder(): EntityBuilderType<ItemGroups, ItemGroupsType>;
    /**
     * Returns a request builder to construct requests for operations on the `ItemGroups` entity type.
     * @returns A `ItemGroups` request builder.
     */
    static requestBuilder(): ItemGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ItemGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ItemGroups`.
     */
    static customField(fieldName: string): CustomFieldV4<ItemGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { InventoryCycles, InventoryCyclesType } from './InventoryCycles';
import { UnitOfMeasurementGroups, UnitOfMeasurementGroupsType } from './UnitOfMeasurementGroups';
import { UnitOfMeasurements, UnitOfMeasurementsType } from './UnitOfMeasurements';
import { Items, ItemsType } from './Items';
import { GlAccountAdvancedRules, GlAccountAdvancedRulesType } from './GlAccountAdvancedRules';
import { BinLocations, BinLocationsType } from './BinLocations';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
export interface ItemGroupsType {
    priceDifferencesAccount?: string | null;
    stockInflationAdjustAccount?: string | null;
    minimumOrderQuantity?: number | null;
    orderInterval?: number | null;
    exchangeRateDifferencesAccount?: string | null;
    increasingAccount?: string | null;
    stockInflationOffsetAccount?: string | null;
    procurementMethod?: BoProcurementMethod | null;
    componentWarehouse?: BoMrpComponentWarehouse | null;
    purchaseOffsetAccount?: string | null;
    inventorySystem?: BoInventorySystem | null;
    wipMaterialVarianceAccount?: string | null;
    planningSystem?: BoPlanningSystem | null;
    purchaseAccount?: string | null;
    returningAccount?: string | null;
    costInflationAccount?: string | null;
    expensesAccount?: string | null;
    revenuesAccount?: string | null;
    transfersAccount?: string | null;
    leadTime?: number | null;
    orderMultiple?: number | null;
    costInflationOffsetAccount?: string | null;
    inventoryAccount?: string | null;
    decreaseGlAccount?: string | null;
    number?: number | null;
    goodsClearingAccount?: string | null;
    increaseGlAccount?: string | null;
    foreignRevenuesAccount?: string | null;
    alert?: BoYesNoEnum | null;
    wipMaterialAccount?: string | null;
    shippedGoodsAccount?: string | null;
    exemptRevenuesAccount?: string | null;
    decreasingAccount?: string | null;
    vatInRevenueAccount?: string | null;
    varianceAccount?: string | null;
    euExpensesAccount?: string | null;
    foreignExpensesAccount?: string | null;
    cycleCode?: number | null;
    costAccount?: string | null;
    euRevenuesAccount?: string | null;
    paReturnAccount?: string | null;
    groupName?: string | null;
    expenseClearingAct?: string | null;
    purchaseCreditAcc?: string | null;
    euPurchaseCreditAcc?: string | null;
    foreignPurchaseCreditAcc?: string | null;
    salesCreditAcc?: string | null;
    salesCreditEuAcc?: string | null;
    exemptedCredits?: string | null;
    salesCreditForeignAcc?: string | null;
    expenseOffsetAccount?: string | null;
    negativeInventoryAdjustmentAccount?: string | null;
    whIncomingCenvatAccount?: string | null;
    whOutgoingCenvatAccount?: string | null;
    stockInTransitAccount?: string | null;
    wipOffsetProfitAndLossAccount?: string | null;
    inventoryOffsetProfitAndLossAccount?: string | null;
    toleranceDays?: number | null;
    defaultUoMGroup?: number | null;
    defaultInventoryUoM?: number | null;
    purchaseBalanceAccount?: string | null;
    itemClass?: ItemClassEnum | null;
    itemGroupsWarehouseInfos?: ItemGroupsWarehouseInfo[] | null;
    chartOfAccount: ChartOfAccountsType;
    inventoryCycles: InventoryCyclesType;
    unitOfMeasurementGroup: UnitOfMeasurementGroupsType;
    unitOfMeasurement: UnitOfMeasurementsType;
    items: ItemsType[];
    glAccountAdvancedRules: GlAccountAdvancedRulesType[];
    binLocations: BinLocationsType[];
    serviceCalls: ServiceCallsType[];
}
export declare namespace ItemGroups {
    /**
     * Static representation of the [[priceDifferencesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_DIFFERENCES_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[stockInflationAdjustAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_INFLATION_ADJUST_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[minimumOrderQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_ORDER_QUANTITY: NumberField<ItemGroups>;
    /**
     * Static representation of the [[orderInterval]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_INTERVAL: NumberField<ItemGroups>;
    /**
     * Static representation of the [[exchangeRateDifferencesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCHANGE_RATE_DIFFERENCES_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[increasingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCREASING_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[stockInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_INFLATION_OFFSET_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[procurementMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCUREMENT_METHOD: EnumField<ItemGroups>;
    /**
     * Static representation of the [[componentWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPONENT_WAREHOUSE: EnumField<ItemGroups>;
    /**
     * Static representation of the [[purchaseOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_OFFSET_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[inventorySystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_SYSTEM: EnumField<ItemGroups>;
    /**
     * Static representation of the [[wipMaterialVarianceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIP_MATERIAL_VARIANCE_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[planningSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNING_SYSTEM: EnumField<ItemGroups>;
    /**
     * Static representation of the [[purchaseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[returningAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNING_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[costInflationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_INFLATION_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[expensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSES_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[revenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVENUES_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[transfersAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSFERS_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[leadTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEAD_TIME: NumberField<ItemGroups>;
    /**
     * Static representation of the [[orderMultiple]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_MULTIPLE: NumberField<ItemGroups>;
    /**
     * Static representation of the [[costInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_INFLATION_OFFSET_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[inventoryAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[decreaseGlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECREASE_GL_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER: NumberField<ItemGroups>;
    /**
     * Static representation of the [[goodsClearingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_CLEARING_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[increaseGlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCREASE_GL_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[foreignRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_REVENUES_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[alert]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALERT: EnumField<ItemGroups>;
    /**
     * Static representation of the [[wipMaterialAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIP_MATERIAL_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[shippedGoodsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPED_GOODS_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[exemptRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPT_REVENUES_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[decreasingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECREASING_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[vatInRevenueAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_IN_REVENUE_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[varianceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VARIANCE_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[euExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EU_EXPENSES_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[foreignExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_EXPENSES_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[cycleCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CYCLE_CODE: NumberField<ItemGroups>;
    /**
     * Static representation of the [[costAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[euRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EU_REVENUES_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[paReturnAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PA_RETURN_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[groupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_NAME: StringField<ItemGroups>;
    /**
     * Static representation of the [[expenseClearingAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSE_CLEARING_ACT: StringField<ItemGroups>;
    /**
     * Static representation of the [[purchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_ACC: StringField<ItemGroups>;
    /**
     * Static representation of the [[euPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EU_PURCHASE_CREDIT_ACC: StringField<ItemGroups>;
    /**
     * Static representation of the [[foreignPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_PURCHASE_CREDIT_ACC: StringField<ItemGroups>;
    /**
     * Static representation of the [[salesCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CREDIT_ACC: StringField<ItemGroups>;
    /**
     * Static representation of the [[salesCreditEuAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CREDIT_EU_ACC: StringField<ItemGroups>;
    /**
     * Static representation of the [[exemptedCredits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTED_CREDITS: StringField<ItemGroups>;
    /**
     * Static representation of the [[salesCreditForeignAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CREDIT_FOREIGN_ACC: StringField<ItemGroups>;
    /**
     * Static representation of the [[expenseOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSE_OFFSET_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[negativeInventoryAdjustmentAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[whIncomingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WH_INCOMING_CENVAT_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[whOutgoingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WH_OUTGOING_CENVAT_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[stockInTransitAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_IN_TRANSIT_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[wipOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[inventoryOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[toleranceDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOLERANCE_DAYS: NumberField<ItemGroups>;
    /**
     * Static representation of the [[defaultUoMGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_UO_M_GROUP: NumberField<ItemGroups>;
    /**
     * Static representation of the [[defaultInventoryUoM]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_INVENTORY_UO_M: NumberField<ItemGroups>;
    /**
     * Static representation of the [[purchaseBalanceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_BALANCE_ACCOUNT: StringField<ItemGroups>;
    /**
     * Static representation of the [[itemClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CLASS: EnumField<ItemGroups>;
    /**
     * Static representation of the [[itemGroupsWarehouseInfos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_GROUPS_WAREHOUSE_INFOS: CollectionField<ItemGroups, ItemGroupsWarehouseInfo>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<ItemGroups, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[inventoryCycles]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_CYCLES: OneToOneLink<ItemGroups, InventoryCycles>;
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurementGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASUREMENT_GROUP: OneToOneLink<ItemGroups, UnitOfMeasurementGroups>;
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASUREMENT: OneToOneLink<ItemGroups, UnitOfMeasurements>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<ItemGroups, Items>;
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<ItemGroups, GlAccountAdvancedRules>;
    /**
     * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIN_LOCATIONS: OneToManyLink<ItemGroups, BinLocations>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<ItemGroups, ServiceCalls>;
    /**
     * All fields of the ItemGroups entity.
     */
    const _allFields: Array<StringField<ItemGroups> | NumberField<ItemGroups> | EnumField<ItemGroups> | CollectionField<ItemGroups, ItemGroupsWarehouseInfo> | OneToOneLink<ItemGroups, ChartOfAccounts> | OneToOneLink<ItemGroups, InventoryCycles> | OneToOneLink<ItemGroups, UnitOfMeasurementGroups> | OneToOneLink<ItemGroups, UnitOfMeasurements> | OneToManyLink<ItemGroups, Items> | OneToManyLink<ItemGroups, GlAccountAdvancedRules> | OneToManyLink<ItemGroups, BinLocations> | OneToManyLink<ItemGroups, ServiceCalls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ItemGroups>;
    /**
     * All key fields of the ItemGroups entity.
     */
    const _keyFields: Array<Field<ItemGroups>>;
    /**
     * Mapping of all key field names to the respective static field property ItemGroups.
     */
    const _keys: {
        [keys: string]: Field<ItemGroups>;
    };
}
//# sourceMappingURL=ItemGroups.d.ts.map