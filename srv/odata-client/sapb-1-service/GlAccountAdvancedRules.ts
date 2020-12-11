/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
export class GlAccountAdvancedRules extends EntityV4 implements GlAccountAdvancedRulesType {
  /**
   * Technical entity name for GlAccountAdvancedRules.
   */
  static _entityName = 'GLAccountAdvancedRules';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
  item!: Items;
  /**
   * One-to-one navigation property to the [[ItemGroups]] entity.
   */
  itemGroups!: ItemGroups;
  /**
   * One-to-one navigation property to the [[Warehouses]] entity.
   */
  warehouse2!: Warehouses;
  /**
   * One-to-one navigation property to the [[BusinessPartnerGroups]] entity.
   */
  businessPartnerGroup!: BusinessPartnerGroups;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country!: Countries;
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[VatGroups]] entity.
   */
  vatGroup_1!: VatGroups;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;

  /**
   * Returns an entity builder to construct instances of `GlAccountAdvancedRules`.
   * @returns A builder that constructs instances of entity type `GlAccountAdvancedRules`.
   */
  static builder(): EntityBuilderType<GlAccountAdvancedRules, GlAccountAdvancedRulesType> {
    return EntityV4.entityBuilder(GlAccountAdvancedRules);
  }

  /**
   * Returns a request builder to construct requests for operations on the `GlAccountAdvancedRules` entity type.
   * @returns A `GlAccountAdvancedRules` request builder.
   */
  static requestBuilder(): GlAccountAdvancedRulesRequestBuilder {
    return new GlAccountAdvancedRulesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `GlAccountAdvancedRules`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `GlAccountAdvancedRules`.
   */
  static customField(fieldName: string): CustomFieldV4<GlAccountAdvancedRules> {
    return EntityV4.customFieldSelector(fieldName, GlAccountAdvancedRules);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace GlAccountAdvancedRules {
  /**
   * Static representation of the [[absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSOLUTE_ENTRY: NumberField<GlAccountAdvancedRules> = new NumberField('AbsoluteEntry', GlAccountAdvancedRules, 'Edm.Int32');
  /**
   * Static representation of the [[period]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD: StringField<GlAccountAdvancedRules> = new StringField('Period', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[beginningofFinancialYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEGINNINGOF_FINANCIAL_YEAR: DateField<GlAccountAdvancedRules> = new DateField('BeginningofFinancialYear', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_YEAR: NumberField<GlAccountAdvancedRules> = new NumberField('FinancialYear', GlAccountAdvancedRules, 'Edm.Int32');
  /**
   * Static representation of the [[periodName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_NAME: StringField<GlAccountAdvancedRules> = new StringField('PeriodName', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[subPeriodType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_PERIOD_TYPE: EnumField<GlAccountAdvancedRules> = new EnumField('SubPeriodType', GlAccountAdvancedRules);
  /**
   * Static representation of the [[numberOfPeriods]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_PERIODS: NumberField<GlAccountAdvancedRules> = new NumberField('NumberOfPeriods', GlAccountAdvancedRules, 'Edm.Int32');
  /**
   * Static representation of the [[fromPostingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROM_POSTING_DATE: DateField<GlAccountAdvancedRules> = new DateField('FromPostingDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[toPostingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_POSTING_DATE: DateField<GlAccountAdvancedRules> = new DateField('ToPostingDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[fromDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROM_DUE_DATE: DateField<GlAccountAdvancedRules> = new DateField('FromDueDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[toDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_DUE_DATE: DateField<GlAccountAdvancedRules> = new DateField('ToDueDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[fromDocumentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROM_DOCUMENT_DATE: DateField<GlAccountAdvancedRules> = new DateField('FromDocumentDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[toDocumentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_DOCUMENT_DATE: DateField<GlAccountAdvancedRules> = new DateField('ToDocumentDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_CODE: StringField<GlAccountAdvancedRules> = new StringField('ItemCode', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[itemGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_GROUP: NumberField<GlAccountAdvancedRules> = new NumberField('ItemGroup', GlAccountAdvancedRules, 'Edm.Int32');
  /**
   * Static representation of the [[warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE: StringField<GlAccountAdvancedRules> = new StringField('Warehouse', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[bpGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_GROUP: NumberField<GlAccountAdvancedRules> = new NumberField('BPGroup', GlAccountAdvancedRules, 'Edm.Int32');
  /**
   * Static representation of the [[federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID: StringField<GlAccountAdvancedRules> = new StringField('FederalTaxID', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[shipToCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_COUNTRY: StringField<GlAccountAdvancedRules> = new StringField('ShipToCountry', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[shipToState]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_STATE: StringField<GlAccountAdvancedRules> = new StringField('ShipToState', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<GlAccountAdvancedRules> = new StringField('Description', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<GlAccountAdvancedRules> = new StringField('Code', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[getGlAccountBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GET_GL_ACCOUNT_BY: EnumField<GlAccountAdvancedRules> = new EnumField('GetGLAccountBy', GlAccountAdvancedRules);
  /**
   * Static representation of the [[fromDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROM_DATE: DateField<GlAccountAdvancedRules> = new DateField('FromDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[toDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_DATE: DateField<GlAccountAdvancedRules> = new DateField('ToDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[expensesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENSES_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('ExpensesAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[revenuesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVENUES_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('RevenuesAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[exemptIncomeAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPT_INCOME_ACC: StringField<GlAccountAdvancedRules> = new StringField('ExemptIncomeAcc', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[inventoryAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('InventoryAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[costAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('CostAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[transferAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('TransferAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[varienceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VARIENCE_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('VarienceAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[priceDifferenceAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_DIFFERENCE_ACC: StringField<GlAccountAdvancedRules> = new StringField('PriceDifferenceAcc', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[negativeInventoryAdjustmentAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('NegativeInventoryAdjustmentAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[decreasingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DECREASING_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('DecreasingAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[increasingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCREASING_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('IncreasingAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[returningAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNING_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('ReturningAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[euRevenuesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EU_REVENUES_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('EURevenuesAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[euExpensesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EU_EXPENSES_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('EUExpensesAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[foreignRevenueAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOREIGN_REVENUE_ACC: StringField<GlAccountAdvancedRules> = new StringField('ForeignRevenueAcc', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[foreignExpensAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOREIGN_EXPENS_ACC: StringField<GlAccountAdvancedRules> = new StringField('ForeignExpensAcc', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[purchaseAcct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ACCT: StringField<GlAccountAdvancedRules> = new StringField('PurchaseAcct', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[paReturnAcct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PA_RETURN_ACCT: StringField<GlAccountAdvancedRules> = new StringField('PAReturnAcct', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[purchaseOffsetAcct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_OFFSET_ACCT: StringField<GlAccountAdvancedRules> = new StringField('PurchaseOffsetAcct', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[exchangeRateDifferencesAcct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCHANGE_RATE_DIFFERENCES_ACCT: StringField<GlAccountAdvancedRules> = new StringField('ExchangeRateDifferencesAcct', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[goodsClearingAcct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_CLEARING_ACCT: StringField<GlAccountAdvancedRules> = new StringField('GoodsClearingAcct', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[glDecreaseAcct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_DECREASE_ACCT: StringField<GlAccountAdvancedRules> = new StringField('GLDecreaseAcct', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[glIncreaseAcct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_INCREASE_ACCT: StringField<GlAccountAdvancedRules> = new StringField('GLIncreaseAcct', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[wipAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIP_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('WipAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[wipVarianceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIP_VARIANCE_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('WipVarianceAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[wipOffsetProfitAndLossAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('WipOffsetProfitAndLossAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[inventoryOffsetProfitAndLossAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('InventoryOffsetProfitAndLossAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[stockInflationAdjustAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_INFLATION_ADJUST_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('StockInflationAdjustAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[stockInflationOffsetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_INFLATION_OFFSET_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('StockInflationOffsetAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[costInflationAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_INFLATION_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('CostInflationAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[costInflationOffsetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_INFLATION_OFFSET_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('CostInflationOffsetAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[expenseClearingAct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENSE_CLEARING_ACT: StringField<GlAccountAdvancedRules> = new StringField('ExpenseClearingAct', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[expenseOffsettingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENSE_OFFSETTING_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('ExpenseOffsettingAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[stockInTransitAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_IN_TRANSIT_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('StockInTransitAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[shippedGoodsAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPED_GOODS_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('ShippedGoodsAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[vatInRevenueAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_IN_REVENUE_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('VATInRevenueAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[salesCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_CREDIT_ACC: StringField<GlAccountAdvancedRules> = new StringField('SalesCreditAcc', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[purchaseCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_ACC: StringField<GlAccountAdvancedRules> = new StringField('PurchaseCreditAcc', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[exemptedCredits]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTED_CREDITS: StringField<GlAccountAdvancedRules> = new StringField('ExemptedCredits', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[salesCreditForeignAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_CREDIT_FOREIGN_ACC: StringField<GlAccountAdvancedRules> = new StringField('SalesCreditForeignAcc', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[foreignPurchaseCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOREIGN_PURCHASE_CREDIT_ACC: StringField<GlAccountAdvancedRules> = new StringField('ForeignPurchaseCreditAcc', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[salesCreditEuAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_CREDIT_EU_ACC: StringField<GlAccountAdvancedRules> = new StringField('SalesCreditEUAcc', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[euPurchaseCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EU_PURCHASE_CREDIT_ACC: StringField<GlAccountAdvancedRules> = new StringField('EUPurchaseCreditAcc', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[purchaseBalanceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_BALANCE_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('PurchaseBalanceAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[whIncomingCenvatAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WH_INCOMING_CENVAT_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('WHIncomingCenvatAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[whOutgoingCenvatAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WH_OUTGOING_CENVAT_ACCOUNT: StringField<GlAccountAdvancedRules> = new StringField('WHOutgoingCenvatAccount', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[isActive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ACTIVE: EnumField<GlAccountAdvancedRules> = new EnumField('IsActive', GlAccountAdvancedRules);
  /**
   * Static representation of the [[businessPartnerType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_TYPE: EnumField<GlAccountAdvancedRules> = new EnumField('BusinessPartnerType', GlAccountAdvancedRules);
  /**
   * Static representation of the [[vatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUP: StringField<GlAccountAdvancedRules> = new StringField('VATGroup', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CODE: StringField<GlAccountAdvancedRules> = new StringField('BPCode', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[usage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USAGE: NumberField<GlAccountAdvancedRules> = new NumberField('Usage', GlAccountAdvancedRules, 'Edm.Int32');
  /**
   * Static representation of the [[udf1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UDF_1: StringField<GlAccountAdvancedRules> = new StringField('UDF1', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[udf2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UDF_2: StringField<GlAccountAdvancedRules> = new StringField('UDF2', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[udf3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UDF_3: StringField<GlAccountAdvancedRules> = new StringField('UDF3', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[udf4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UDF_4: StringField<GlAccountAdvancedRules> = new StringField('UDF4', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the [[udf5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UDF_5: StringField<GlAccountAdvancedRules> = new StringField('UDF5', GlAccountAdvancedRules, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[item]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM: OneToOneLink<GlAccountAdvancedRules, Items> = new OneToOneLink('Item', GlAccountAdvancedRules, Items);
  /**
   * Static representation of the one-to-one navigation property [[itemGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_GROUPS: OneToOneLink<GlAccountAdvancedRules, ItemGroups> = new OneToOneLink('ItemGroups', GlAccountAdvancedRules, ItemGroups);
  /**
   * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_2: OneToOneLink<GlAccountAdvancedRules, Warehouses> = new OneToOneLink('Warehouse2', GlAccountAdvancedRules, Warehouses);
  /**
   * Static representation of the one-to-one navigation property [[businessPartnerGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_GROUP: OneToOneLink<GlAccountAdvancedRules, BusinessPartnerGroups> = new OneToOneLink('BusinessPartnerGroup', GlAccountAdvancedRules, BusinessPartnerGroups);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<GlAccountAdvancedRules, Countries> = new OneToOneLink('Country', GlAccountAdvancedRules, Countries);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<GlAccountAdvancedRules, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', GlAccountAdvancedRules, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[vatGroup_1]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUP_1: OneToOneLink<GlAccountAdvancedRules, VatGroups> = new OneToOneLink('VatGroup', GlAccountAdvancedRules, VatGroups);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<GlAccountAdvancedRules, BusinessPartners> = new OneToOneLink('BusinessPartner', GlAccountAdvancedRules, BusinessPartners);
  /**
   * All fields of the GlAccountAdvancedRules entity.
   */
  export const _allFields: Array<NumberField<GlAccountAdvancedRules> | StringField<GlAccountAdvancedRules> | DateField<GlAccountAdvancedRules> | EnumField<GlAccountAdvancedRules> | OneToOneLink<GlAccountAdvancedRules, Items> | OneToOneLink<GlAccountAdvancedRules, ItemGroups> | OneToOneLink<GlAccountAdvancedRules, Warehouses> | OneToOneLink<GlAccountAdvancedRules, BusinessPartnerGroups> | OneToOneLink<GlAccountAdvancedRules, Countries> | OneToOneLink<GlAccountAdvancedRules, ChartOfAccounts> | OneToOneLink<GlAccountAdvancedRules, VatGroups> | OneToOneLink<GlAccountAdvancedRules, BusinessPartners>> = [
    GlAccountAdvancedRules.ABSOLUTE_ENTRY,
    GlAccountAdvancedRules.PERIOD,
    GlAccountAdvancedRules.BEGINNINGOF_FINANCIAL_YEAR,
    GlAccountAdvancedRules.FINANCIAL_YEAR,
    GlAccountAdvancedRules.PERIOD_NAME,
    GlAccountAdvancedRules.SUB_PERIOD_TYPE,
    GlAccountAdvancedRules.NUMBER_OF_PERIODS,
    GlAccountAdvancedRules.FROM_POSTING_DATE,
    GlAccountAdvancedRules.TO_POSTING_DATE,
    GlAccountAdvancedRules.FROM_DUE_DATE,
    GlAccountAdvancedRules.TO_DUE_DATE,
    GlAccountAdvancedRules.FROM_DOCUMENT_DATE,
    GlAccountAdvancedRules.TO_DOCUMENT_DATE,
    GlAccountAdvancedRules.ITEM_CODE,
    GlAccountAdvancedRules.ITEM_GROUP,
    GlAccountAdvancedRules.WAREHOUSE,
    GlAccountAdvancedRules.BP_GROUP,
    GlAccountAdvancedRules.FEDERAL_TAX_ID,
    GlAccountAdvancedRules.SHIP_TO_COUNTRY,
    GlAccountAdvancedRules.SHIP_TO_STATE,
    GlAccountAdvancedRules.DESCRIPTION,
    GlAccountAdvancedRules.CODE,
    GlAccountAdvancedRules.GET_GL_ACCOUNT_BY,
    GlAccountAdvancedRules.FROM_DATE,
    GlAccountAdvancedRules.TO_DATE,
    GlAccountAdvancedRules.EXPENSES_ACCOUNT,
    GlAccountAdvancedRules.REVENUES_ACCOUNT,
    GlAccountAdvancedRules.EXEMPT_INCOME_ACC,
    GlAccountAdvancedRules.INVENTORY_ACCOUNT,
    GlAccountAdvancedRules.COST_ACCOUNT,
    GlAccountAdvancedRules.TRANSFER_ACCOUNT,
    GlAccountAdvancedRules.VARIENCE_ACCOUNT,
    GlAccountAdvancedRules.PRICE_DIFFERENCE_ACC,
    GlAccountAdvancedRules.NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT,
    GlAccountAdvancedRules.DECREASING_ACCOUNT,
    GlAccountAdvancedRules.INCREASING_ACCOUNT,
    GlAccountAdvancedRules.RETURNING_ACCOUNT,
    GlAccountAdvancedRules.EU_REVENUES_ACCOUNT,
    GlAccountAdvancedRules.EU_EXPENSES_ACCOUNT,
    GlAccountAdvancedRules.FOREIGN_REVENUE_ACC,
    GlAccountAdvancedRules.FOREIGN_EXPENS_ACC,
    GlAccountAdvancedRules.PURCHASE_ACCT,
    GlAccountAdvancedRules.PA_RETURN_ACCT,
    GlAccountAdvancedRules.PURCHASE_OFFSET_ACCT,
    GlAccountAdvancedRules.EXCHANGE_RATE_DIFFERENCES_ACCT,
    GlAccountAdvancedRules.GOODS_CLEARING_ACCT,
    GlAccountAdvancedRules.GL_DECREASE_ACCT,
    GlAccountAdvancedRules.GL_INCREASE_ACCT,
    GlAccountAdvancedRules.WIP_ACCOUNT,
    GlAccountAdvancedRules.WIP_VARIANCE_ACCOUNT,
    GlAccountAdvancedRules.WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT,
    GlAccountAdvancedRules.INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT,
    GlAccountAdvancedRules.STOCK_INFLATION_ADJUST_ACCOUNT,
    GlAccountAdvancedRules.STOCK_INFLATION_OFFSET_ACCOUNT,
    GlAccountAdvancedRules.COST_INFLATION_ACCOUNT,
    GlAccountAdvancedRules.COST_INFLATION_OFFSET_ACCOUNT,
    GlAccountAdvancedRules.EXPENSE_CLEARING_ACT,
    GlAccountAdvancedRules.EXPENSE_OFFSETTING_ACCOUNT,
    GlAccountAdvancedRules.STOCK_IN_TRANSIT_ACCOUNT,
    GlAccountAdvancedRules.SHIPPED_GOODS_ACCOUNT,
    GlAccountAdvancedRules.VAT_IN_REVENUE_ACCOUNT,
    GlAccountAdvancedRules.SALES_CREDIT_ACC,
    GlAccountAdvancedRules.PURCHASE_CREDIT_ACC,
    GlAccountAdvancedRules.EXEMPTED_CREDITS,
    GlAccountAdvancedRules.SALES_CREDIT_FOREIGN_ACC,
    GlAccountAdvancedRules.FOREIGN_PURCHASE_CREDIT_ACC,
    GlAccountAdvancedRules.SALES_CREDIT_EU_ACC,
    GlAccountAdvancedRules.EU_PURCHASE_CREDIT_ACC,
    GlAccountAdvancedRules.PURCHASE_BALANCE_ACCOUNT,
    GlAccountAdvancedRules.WH_INCOMING_CENVAT_ACCOUNT,
    GlAccountAdvancedRules.WH_OUTGOING_CENVAT_ACCOUNT,
    GlAccountAdvancedRules.IS_ACTIVE,
    GlAccountAdvancedRules.BUSINESS_PARTNER_TYPE,
    GlAccountAdvancedRules.VAT_GROUP,
    GlAccountAdvancedRules.BP_CODE,
    GlAccountAdvancedRules.USAGE,
    GlAccountAdvancedRules.UDF_1,
    GlAccountAdvancedRules.UDF_2,
    GlAccountAdvancedRules.UDF_3,
    GlAccountAdvancedRules.UDF_4,
    GlAccountAdvancedRules.UDF_5,
    GlAccountAdvancedRules.ITEM,
    GlAccountAdvancedRules.ITEM_GROUPS,
    GlAccountAdvancedRules.WAREHOUSE_2,
    GlAccountAdvancedRules.BUSINESS_PARTNER_GROUP,
    GlAccountAdvancedRules.COUNTRY,
    GlAccountAdvancedRules.CHART_OF_ACCOUNT,
    GlAccountAdvancedRules.VAT_GROUP_1,
    GlAccountAdvancedRules.BUSINESS_PARTNER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<GlAccountAdvancedRules> = new AllFields('*', GlAccountAdvancedRules);
  /**
   * All key fields of the GlAccountAdvancedRules entity.
   */
  export const _keyFields: Array<Field<GlAccountAdvancedRules>> = [GlAccountAdvancedRules.ABSOLUTE_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property GlAccountAdvancedRules.
   */
  export const _keys: { [keys: string]: Field<GlAccountAdvancedRules> } = GlAccountAdvancedRules._keyFields.reduce((acc: { [keys: string]: Field<GlAccountAdvancedRules> }, field: Field<GlAccountAdvancedRules>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
