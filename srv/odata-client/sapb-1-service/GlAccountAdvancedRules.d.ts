import { GlAccountAdvancedRulesRequestBuilder } from './GlAccountAdvancedRulesRequestBuilder';
import { Moment } from 'moment';
import { BoSubPeriodTypeEnum } from './BoSubPeriodTypeEnum';
import { GetGlAccountByEnum } from './GetGlAccountByEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoBusinessPartnerTypes } from './BoBusinessPartnerTypes';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "GLAccountAdvancedRules" of service "SAPB1".
 */
export declare class GlAccountAdvancedRules extends EntityV4 implements GlAccountAdvancedRulesType {
    /**
     * Technical entity name for GlAccountAdvancedRules.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Period.
     * @nullable
     */
    period?: string;
    /**
     * Beginningof Financial Year.
     * @nullable
     */
    beginningofFinancialYear?: Moment;
    /**
     * Financial Year.
     * @nullable
     */
    financialYear?: number;
    /**
     * Period Name.
     * @nullable
     */
    periodName?: string;
    /**
     * Sub Period Type.
     * @nullable
     */
    subPeriodType?: BoSubPeriodTypeEnum;
    /**
     * Number Of Periods.
     * @nullable
     */
    numberOfPeriods?: number;
    /**
     * From Posting Date.
     * @nullable
     */
    fromPostingDate?: Moment;
    /**
     * To Posting Date.
     * @nullable
     */
    toPostingDate?: Moment;
    /**
     * From Due Date.
     * @nullable
     */
    fromDueDate?: Moment;
    /**
     * To Due Date.
     * @nullable
     */
    toDueDate?: Moment;
    /**
     * From Document Date.
     * @nullable
     */
    fromDocumentDate?: Moment;
    /**
     * To Document Date.
     * @nullable
     */
    toDocumentDate?: Moment;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Item Group.
     * @nullable
     */
    itemGroup?: number;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Bp Group.
     * @nullable
     */
    bpGroup?: number;
    /**
     * Federal Tax Id.
     * @nullable
     */
    federalTaxId?: string;
    /**
     * Ship To Country.
     * @nullable
     */
    shipToCountry?: string;
    /**
     * Ship To State.
     * @nullable
     */
    shipToState?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Get Gl Account By.
     * @nullable
     */
    getGlAccountBy?: GetGlAccountByEnum;
    /**
     * From Date.
     * @nullable
     */
    fromDate?: Moment;
    /**
     * To Date.
     * @nullable
     */
    toDate?: Moment;
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
     * Exempt Income Acc.
     * @nullable
     */
    exemptIncomeAcc?: string;
    /**
     * Inventory Account.
     * @nullable
     */
    inventoryAccount?: string;
    /**
     * Cost Account.
     * @nullable
     */
    costAccount?: string;
    /**
     * Transfer Account.
     * @nullable
     */
    transferAccount?: string;
    /**
     * Varience Account.
     * @nullable
     */
    varienceAccount?: string;
    /**
     * Price Difference Acc.
     * @nullable
     */
    priceDifferenceAcc?: string;
    /**
     * Negative Inventory Adjustment Account.
     * @nullable
     */
    negativeInventoryAdjustmentAccount?: string;
    /**
     * Decreasing Account.
     * @nullable
     */
    decreasingAccount?: string;
    /**
     * Increasing Account.
     * @nullable
     */
    increasingAccount?: string;
    /**
     * Returning Account.
     * @nullable
     */
    returningAccount?: string;
    /**
     * Eu Revenues Account.
     * @nullable
     */
    euRevenuesAccount?: string;
    /**
     * Eu Expenses Account.
     * @nullable
     */
    euExpensesAccount?: string;
    /**
     * Foreign Revenue Acc.
     * @nullable
     */
    foreignRevenueAcc?: string;
    /**
     * Foreign Expens Acc.
     * @nullable
     */
    foreignExpensAcc?: string;
    /**
     * Purchase Acct.
     * @nullable
     */
    purchaseAcct?: string;
    /**
     * Pa Return Acct.
     * @nullable
     */
    paReturnAcct?: string;
    /**
     * Purchase Offset Acct.
     * @nullable
     */
    purchaseOffsetAcct?: string;
    /**
     * Exchange Rate Differences Acct.
     * @nullable
     */
    exchangeRateDifferencesAcct?: string;
    /**
     * Goods Clearing Acct.
     * @nullable
     */
    goodsClearingAcct?: string;
    /**
     * Gl Decrease Acct.
     * @nullable
     */
    glDecreaseAcct?: string;
    /**
     * Gl Increase Acct.
     * @nullable
     */
    glIncreaseAcct?: string;
    /**
     * Wip Account.
     * @nullable
     */
    wipAccount?: string;
    /**
     * Wip Variance Account.
     * @nullable
     */
    wipVarianceAccount?: string;
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
     * Stock Inflation Adjust Account.
     * @nullable
     */
    stockInflationAdjustAccount?: string;
    /**
     * Stock Inflation Offset Account.
     * @nullable
     */
    stockInflationOffsetAccount?: string;
    /**
     * Cost Inflation Account.
     * @nullable
     */
    costInflationAccount?: string;
    /**
     * Cost Inflation Offset Account.
     * @nullable
     */
    costInflationOffsetAccount?: string;
    /**
     * Expense Clearing Act.
     * @nullable
     */
    expenseClearingAct?: string;
    /**
     * Expense Offsetting Account.
     * @nullable
     */
    expenseOffsettingAccount?: string;
    /**
     * Stock In Transit Account.
     * @nullable
     */
    stockInTransitAccount?: string;
    /**
     * Shipped Goods Account.
     * @nullable
     */
    shippedGoodsAccount?: string;
    /**
     * Vat In Revenue Account.
     * @nullable
     */
    vatInRevenueAccount?: string;
    /**
     * Sales Credit Acc.
     * @nullable
     */
    salesCreditAcc?: string;
    /**
     * Purchase Credit Acc.
     * @nullable
     */
    purchaseCreditAcc?: string;
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
     * Foreign Purchase Credit Acc.
     * @nullable
     */
    foreignPurchaseCreditAcc?: string;
    /**
     * Sales Credit Eu Acc.
     * @nullable
     */
    salesCreditEuAcc?: string;
    /**
     * Eu Purchase Credit Acc.
     * @nullable
     */
    euPurchaseCreditAcc?: string;
    /**
     * Purchase Balance Account.
     * @nullable
     */
    purchaseBalanceAccount?: string;
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
     * Is Active.
     * @nullable
     */
    isActive?: BoYesNoEnum;
    /**
     * Business Partner Type.
     * @nullable
     */
    businessPartnerType?: BoBusinessPartnerTypes;
    /**
     * Vat Group.
     * @nullable
     */
    vatGroup?: string;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * Usage.
     * @nullable
     */
    usage?: number;
    /**
     * Udf 1.
     * @nullable
     */
    udf1?: string;
    /**
     * Udf 2.
     * @nullable
     */
    udf2?: string;
    /**
     * Udf 3.
     * @nullable
     */
    udf3?: string;
    /**
     * Udf 4.
     * @nullable
     */
    udf4?: string;
    /**
     * Udf 5.
     * @nullable
     */
    udf5?: string;
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * One-to-one navigation property to the [[ItemGroups]] entity.
     */
    itemGroups: ItemGroups;
    /**
     * One-to-one navigation property to the [[Warehouses]] entity.
     */
    warehouse2: Warehouses;
    /**
     * One-to-one navigation property to the [[BusinessPartnerGroups]] entity.
     */
    businessPartnerGroup: BusinessPartnerGroups;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country: Countries;
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[VatGroups]] entity.
     */
    vatGroup_1: VatGroups;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * Returns an entity builder to construct instances of `GlAccountAdvancedRules`.
     * @returns A builder that constructs instances of entity type `GlAccountAdvancedRules`.
     */
    static builder(): EntityBuilderType<GlAccountAdvancedRules, GlAccountAdvancedRulesType>;
    /**
     * Returns a request builder to construct requests for operations on the `GlAccountAdvancedRules` entity type.
     * @returns A `GlAccountAdvancedRules` request builder.
     */
    static requestBuilder(): GlAccountAdvancedRulesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GlAccountAdvancedRules`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GlAccountAdvancedRules`.
     */
    static customField(fieldName: string): CustomFieldV4<GlAccountAdvancedRules>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { Warehouses, WarehousesType } from './Warehouses';
import { BusinessPartnerGroups, BusinessPartnerGroupsType } from './BusinessPartnerGroups';
import { Countries, CountriesType } from './Countries';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { VatGroups, VatGroupsType } from './VatGroups';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
export interface GlAccountAdvancedRulesType {
    absoluteEntry?: number | null;
    period?: string | null;
    beginningofFinancialYear?: Moment | null;
    financialYear?: number | null;
    periodName?: string | null;
    subPeriodType?: BoSubPeriodTypeEnum | null;
    numberOfPeriods?: number | null;
    fromPostingDate?: Moment | null;
    toPostingDate?: Moment | null;
    fromDueDate?: Moment | null;
    toDueDate?: Moment | null;
    fromDocumentDate?: Moment | null;
    toDocumentDate?: Moment | null;
    itemCode?: string | null;
    itemGroup?: number | null;
    warehouse?: string | null;
    bpGroup?: number | null;
    federalTaxId?: string | null;
    shipToCountry?: string | null;
    shipToState?: string | null;
    description?: string | null;
    code?: string | null;
    getGlAccountBy?: GetGlAccountByEnum | null;
    fromDate?: Moment | null;
    toDate?: Moment | null;
    expensesAccount?: string | null;
    revenuesAccount?: string | null;
    exemptIncomeAcc?: string | null;
    inventoryAccount?: string | null;
    costAccount?: string | null;
    transferAccount?: string | null;
    varienceAccount?: string | null;
    priceDifferenceAcc?: string | null;
    negativeInventoryAdjustmentAccount?: string | null;
    decreasingAccount?: string | null;
    increasingAccount?: string | null;
    returningAccount?: string | null;
    euRevenuesAccount?: string | null;
    euExpensesAccount?: string | null;
    foreignRevenueAcc?: string | null;
    foreignExpensAcc?: string | null;
    purchaseAcct?: string | null;
    paReturnAcct?: string | null;
    purchaseOffsetAcct?: string | null;
    exchangeRateDifferencesAcct?: string | null;
    goodsClearingAcct?: string | null;
    glDecreaseAcct?: string | null;
    glIncreaseAcct?: string | null;
    wipAccount?: string | null;
    wipVarianceAccount?: string | null;
    wipOffsetProfitAndLossAccount?: string | null;
    inventoryOffsetProfitAndLossAccount?: string | null;
    stockInflationAdjustAccount?: string | null;
    stockInflationOffsetAccount?: string | null;
    costInflationAccount?: string | null;
    costInflationOffsetAccount?: string | null;
    expenseClearingAct?: string | null;
    expenseOffsettingAccount?: string | null;
    stockInTransitAccount?: string | null;
    shippedGoodsAccount?: string | null;
    vatInRevenueAccount?: string | null;
    salesCreditAcc?: string | null;
    purchaseCreditAcc?: string | null;
    exemptedCredits?: string | null;
    salesCreditForeignAcc?: string | null;
    foreignPurchaseCreditAcc?: string | null;
    salesCreditEuAcc?: string | null;
    euPurchaseCreditAcc?: string | null;
    purchaseBalanceAccount?: string | null;
    whIncomingCenvatAccount?: string | null;
    whOutgoingCenvatAccount?: string | null;
    isActive?: BoYesNoEnum | null;
    businessPartnerType?: BoBusinessPartnerTypes | null;
    vatGroup?: string | null;
    bpCode?: string | null;
    usage?: number | null;
    udf1?: string | null;
    udf2?: string | null;
    udf3?: string | null;
    udf4?: string | null;
    udf5?: string | null;
    item: ItemsType;
    itemGroups: ItemGroupsType;
    warehouse2: WarehousesType;
    businessPartnerGroup: BusinessPartnerGroupsType;
    country: CountriesType;
    chartOfAccount: ChartOfAccountsType;
    vatGroup_1: VatGroupsType;
    businessPartner: BusinessPartnersType;
}
export declare namespace GlAccountAdvancedRules {
    /**
     * Static representation of the [[absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABSOLUTE_ENTRY: NumberField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[period]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[beginningofFinancialYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEGINNINGOF_FINANCIAL_YEAR: DateField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[financialYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FINANCIAL_YEAR: NumberField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[periodName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_NAME: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[subPeriodType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_PERIOD_TYPE: EnumField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[numberOfPeriods]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OF_PERIODS: NumberField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[fromPostingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROM_POSTING_DATE: DateField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[toPostingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_POSTING_DATE: DateField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[fromDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROM_DUE_DATE: DateField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[toDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_DUE_DATE: DateField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[fromDocumentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROM_DOCUMENT_DATE: DateField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[toDocumentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_DOCUMENT_DATE: DateField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CODE: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[itemGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_GROUP: NumberField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[bpGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_GROUP: NumberField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEDERAL_TAX_ID: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[shipToCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_COUNTRY: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[shipToState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_STATE: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[getGlAccountBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GET_GL_ACCOUNT_BY: EnumField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[fromDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROM_DATE: DateField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[toDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_DATE: DateField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[expensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSES_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[revenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVENUES_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[exemptIncomeAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPT_INCOME_ACC: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[inventoryAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[costAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[transferAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSFER_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[varienceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VARIENCE_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[priceDifferenceAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_DIFFERENCE_ACC: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[negativeInventoryAdjustmentAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[decreasingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECREASING_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[increasingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCREASING_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[returningAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNING_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[euRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EU_REVENUES_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[euExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EU_EXPENSES_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[foreignRevenueAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_REVENUE_ACC: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[foreignExpensAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_EXPENS_ACC: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[purchaseAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ACCT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[paReturnAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PA_RETURN_ACCT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[purchaseOffsetAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_OFFSET_ACCT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[exchangeRateDifferencesAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCHANGE_RATE_DIFFERENCES_ACCT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[goodsClearingAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_CLEARING_ACCT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[glDecreaseAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_DECREASE_ACCT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[glIncreaseAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_INCREASE_ACCT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[wipAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIP_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[wipVarianceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIP_VARIANCE_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[wipOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[inventoryOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[stockInflationAdjustAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_INFLATION_ADJUST_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[stockInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_INFLATION_OFFSET_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[costInflationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_INFLATION_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[costInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_INFLATION_OFFSET_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[expenseClearingAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSE_CLEARING_ACT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[expenseOffsettingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSE_OFFSETTING_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[stockInTransitAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_IN_TRANSIT_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[shippedGoodsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPED_GOODS_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[vatInRevenueAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_IN_REVENUE_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[salesCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CREDIT_ACC: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[purchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_ACC: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[exemptedCredits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTED_CREDITS: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[salesCreditForeignAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CREDIT_FOREIGN_ACC: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[foreignPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_PURCHASE_CREDIT_ACC: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[salesCreditEuAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_CREDIT_EU_ACC: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[euPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EU_PURCHASE_CREDIT_ACC: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[purchaseBalanceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_BALANCE_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[whIncomingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WH_INCOMING_CENVAT_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[whOutgoingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WH_OUTGOING_CENVAT_ACCOUNT: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[isActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ACTIVE: EnumField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[businessPartnerType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_TYPE: EnumField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[vatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_GROUP: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CODE: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[usage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USAGE: NumberField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[udf1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_1: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[udf2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_2: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[udf3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_3: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[udf4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_4: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the [[udf5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_5: StringField<GlAccountAdvancedRules>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<GlAccountAdvancedRules, Items>;
    /**
     * Static representation of the one-to-one navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_GROUPS: OneToOneLink<GlAccountAdvancedRules, ItemGroups>;
    /**
     * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_2: OneToOneLink<GlAccountAdvancedRules, Warehouses>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartnerGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_GROUP: OneToOneLink<GlAccountAdvancedRules, BusinessPartnerGroups>;
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: OneToOneLink<GlAccountAdvancedRules, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<GlAccountAdvancedRules, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[vatGroup_1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_GROUP_1: OneToOneLink<GlAccountAdvancedRules, VatGroups>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<GlAccountAdvancedRules, BusinessPartners>;
    /**
     * All fields of the GlAccountAdvancedRules entity.
     */
    const _allFields: Array<NumberField<GlAccountAdvancedRules> | StringField<GlAccountAdvancedRules> | DateField<GlAccountAdvancedRules> | EnumField<GlAccountAdvancedRules> | OneToOneLink<GlAccountAdvancedRules, Items> | OneToOneLink<GlAccountAdvancedRules, ItemGroups> | OneToOneLink<GlAccountAdvancedRules, Warehouses> | OneToOneLink<GlAccountAdvancedRules, BusinessPartnerGroups> | OneToOneLink<GlAccountAdvancedRules, Countries> | OneToOneLink<GlAccountAdvancedRules, ChartOfAccounts> | OneToOneLink<GlAccountAdvancedRules, VatGroups> | OneToOneLink<GlAccountAdvancedRules, BusinessPartners>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<GlAccountAdvancedRules>;
    /**
     * All key fields of the GlAccountAdvancedRules entity.
     */
    const _keyFields: Array<Field<GlAccountAdvancedRules>>;
    /**
     * Mapping of all key field names to the respective static field property GlAccountAdvancedRules.
     */
    const _keys: {
        [keys: string]: Field<GlAccountAdvancedRules>;
    };
}
//# sourceMappingURL=GlAccountAdvancedRules.d.ts.map