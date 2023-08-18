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
import type { GlAccountAdvancedRulesApi } from './GlAccountAdvancedRulesApi';
import { BoSubPeriodTypeEnum } from './BoSubPeriodTypeEnum';
import { GetGlAccountByEnum } from './GetGlAccountByEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoBusinessPartnerTypes } from './BoBusinessPartnerTypes';
import { Items, ItemsType } from './Items';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { Warehouses, WarehousesType } from './Warehouses';
import {
  BusinessPartnerGroups,
  BusinessPartnerGroupsType
} from './BusinessPartnerGroups';
import { Countries, CountriesType } from './Countries';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { VatGroups, VatGroupsType } from './VatGroups';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { NotaFiscalUsage, NotaFiscalUsageType } from './NotaFiscalUsage';

/**
 * This class represents the entity "GLAccountAdvancedRules" of service "SAPB1".
 */
export class GlAccountAdvancedRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GlAccountAdvancedRulesType<T>
{
  /**
   * Technical entity name for GlAccountAdvancedRules.
   */
  static _entityName = 'GLAccountAdvancedRules';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the GlAccountAdvancedRules entity
   */
  static _keys = ['AbsoluteEntry'];
  /**
   * Absolute Entry.
   */
  absoluteEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period.
   * @nullable
   */
  period?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Beginningof Financial Year.
   * @nullable
   */
  beginningofFinancialYear?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Financial Year.
   * @nullable
   */
  financialYear?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Period Name.
   * @nullable
   */
  periodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Period Type.
   * @nullable
   */
  subPeriodType?: BoSubPeriodTypeEnum | null;
  /**
   * Number Of Periods.
   * @nullable
   */
  numberOfPeriods?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * From Posting Date.
   * @nullable
   */
  fromPostingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * To Posting Date.
   * @nullable
   */
  toPostingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * From Due Date.
   * @nullable
   */
  fromDueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * To Due Date.
   * @nullable
   */
  toDueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * From Document Date.
   * @nullable
   */
  fromDocumentDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * To Document Date.
   * @nullable
   */
  toDocumentDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Group.
   * @nullable
   */
  itemGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Group.
   * @nullable
   */
  bpGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship To Country.
   * @nullable
   */
  shipToCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship To State.
   * @nullable
   */
  shipToState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Get Gl Account By.
   * @nullable
   */
  getGlAccountBy?: GetGlAccountByEnum | null;
  /**
   * From Date.
   * @nullable
   */
  fromDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * To Date.
   * @nullable
   */
  toDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Expenses Account.
   * @nullable
   */
  expensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revenues Account.
   * @nullable
   */
  revenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempt Income Acc.
   * @nullable
   */
  exemptIncomeAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Account.
   * @nullable
   */
  inventoryAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Account.
   * @nullable
   */
  costAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Account.
   * @nullable
   */
  transferAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Varience Account.
   * @nullable
   */
  varienceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Difference Acc.
   * @nullable
   */
  priceDifferenceAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Negative Inventory Adjustment Account.
   * @nullable
   */
  negativeInventoryAdjustmentAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Decreasing Account.
   * @nullable
   */
  decreasingAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Increasing Account.
   * @nullable
   */
  increasingAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Returning Account.
   * @nullable
   */
  returningAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Revenues Account.
   * @nullable
   */
  euRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Expenses Account.
   * @nullable
   */
  euExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Revenue Acc.
   * @nullable
   */
  foreignRevenueAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Expens Acc.
   * @nullable
   */
  foreignExpensAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Acct.
   * @nullable
   */
  purchaseAcct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pa Return Acct.
   * @nullable
   */
  paReturnAcct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Offset Acct.
   * @nullable
   */
  purchaseOffsetAcct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate Differences Acct.
   * @nullable
   */
  exchangeRateDifferencesAcct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goods Clearing Acct.
   * @nullable
   */
  goodsClearingAcct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gl Decrease Acct.
   * @nullable
   */
  glDecreaseAcct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gl Increase Acct.
   * @nullable
   */
  glIncreaseAcct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wip Account.
   * @nullable
   */
  wipAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wip Variance Account.
   * @nullable
   */
  wipVarianceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wip Offset Profit And Loss Account.
   * @nullable
   */
  wipOffsetProfitAndLossAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Offset Profit And Loss Account.
   * @nullable
   */
  inventoryOffsetProfitAndLossAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Stock Inflation Adjust Account.
   * @nullable
   */
  stockInflationAdjustAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock Inflation Offset Account.
   * @nullable
   */
  stockInflationOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Inflation Account.
   * @nullable
   */
  costInflationAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Inflation Offset Account.
   * @nullable
   */
  costInflationOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Clearing Act.
   * @nullable
   */
  expenseClearingAct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Offsetting Account.
   * @nullable
   */
  expenseOffsettingAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock In Transit Account.
   * @nullable
   */
  stockInTransitAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipped Goods Account.
   * @nullable
   */
  shippedGoodsAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat In Revenue Account.
   * @nullable
   */
  vatInRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Credit Acc.
   * @nullable
   */
  salesCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Credit Acc.
   * @nullable
   */
  purchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempted Credits.
   * @nullable
   */
  exemptedCredits?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Credit Foreign Acc.
   * @nullable
   */
  salesCreditForeignAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Purchase Credit Acc.
   * @nullable
   */
  foreignPurchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Credit Eu Acc.
   * @nullable
   */
  salesCreditEuAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Purchase Credit Acc.
   * @nullable
   */
  euPurchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Balance Account.
   * @nullable
   */
  purchaseBalanceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wh Incoming Cenvat Account.
   * @nullable
   */
  whIncomingCenvatAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wh Outgoing Cenvat Account.
   * @nullable
   */
  whOutgoingCenvatAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  isActive?: BoYesNoEnum | null;
  /**
   * Business Partner Type.
   * @nullable
   */
  businessPartnerType?: BoBusinessPartnerTypes | null;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage.
   * @nullable
   */
  usage?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Udf 1.
   * @nullable
   */
  udf1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Udf 2.
   * @nullable
   */
  udf2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Udf 3.
   * @nullable
   */
  udf3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Udf 4.
   * @nullable
   */
  udf4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Udf 5.
   * @nullable
   */
  udf5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemGroups} entity.
   */
  itemGroups?: ItemGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  warehouse2?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartnerGroups} entity.
   */
  businessPartnerGroup?: BusinessPartnerGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link VatGroups} entity.
   */
  vatGroup_1?: VatGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link NotaFiscalUsage} entity.
   */
  notaFiscalUsage?: NotaFiscalUsage<T> | null;

  constructor(readonly _entityApi: GlAccountAdvancedRulesApi<T>) {
    super(_entityApi);
  }
}

export interface GlAccountAdvancedRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absoluteEntry: DeserializedType<T, 'Edm.Int32'>;
  period?: DeserializedType<T, 'Edm.String'> | null;
  beginningofFinancialYear?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  financialYear?: DeserializedType<T, 'Edm.Int32'> | null;
  periodName?: DeserializedType<T, 'Edm.String'> | null;
  subPeriodType?: BoSubPeriodTypeEnum | null;
  numberOfPeriods?: DeserializedType<T, 'Edm.Int32'> | null;
  fromPostingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  toPostingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  fromDueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  toDueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  fromDocumentDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  toDocumentDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  itemCode?: DeserializedType<T, 'Edm.String'> | null;
  itemGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  bpGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  federalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  shipToCountry?: DeserializedType<T, 'Edm.String'> | null;
  shipToState?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  code?: DeserializedType<T, 'Edm.String'> | null;
  getGlAccountBy?: GetGlAccountByEnum | null;
  fromDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  toDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  expensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  revenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  exemptIncomeAcc?: DeserializedType<T, 'Edm.String'> | null;
  inventoryAccount?: DeserializedType<T, 'Edm.String'> | null;
  costAccount?: DeserializedType<T, 'Edm.String'> | null;
  transferAccount?: DeserializedType<T, 'Edm.String'> | null;
  varienceAccount?: DeserializedType<T, 'Edm.String'> | null;
  priceDifferenceAcc?: DeserializedType<T, 'Edm.String'> | null;
  negativeInventoryAdjustmentAccount?: DeserializedType<T, 'Edm.String'> | null;
  decreasingAccount?: DeserializedType<T, 'Edm.String'> | null;
  increasingAccount?: DeserializedType<T, 'Edm.String'> | null;
  returningAccount?: DeserializedType<T, 'Edm.String'> | null;
  euRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  euExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  foreignRevenueAcc?: DeserializedType<T, 'Edm.String'> | null;
  foreignExpensAcc?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAcct?: DeserializedType<T, 'Edm.String'> | null;
  paReturnAcct?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOffsetAcct?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateDifferencesAcct?: DeserializedType<T, 'Edm.String'> | null;
  goodsClearingAcct?: DeserializedType<T, 'Edm.String'> | null;
  glDecreaseAcct?: DeserializedType<T, 'Edm.String'> | null;
  glIncreaseAcct?: DeserializedType<T, 'Edm.String'> | null;
  wipAccount?: DeserializedType<T, 'Edm.String'> | null;
  wipVarianceAccount?: DeserializedType<T, 'Edm.String'> | null;
  wipOffsetProfitAndLossAccount?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOffsetProfitAndLossAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  stockInflationAdjustAccount?: DeserializedType<T, 'Edm.String'> | null;
  stockInflationOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  costInflationAccount?: DeserializedType<T, 'Edm.String'> | null;
  costInflationOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  expenseClearingAct?: DeserializedType<T, 'Edm.String'> | null;
  expenseOffsettingAccount?: DeserializedType<T, 'Edm.String'> | null;
  stockInTransitAccount?: DeserializedType<T, 'Edm.String'> | null;
  shippedGoodsAccount?: DeserializedType<T, 'Edm.String'> | null;
  vatInRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  salesCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  purchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  exemptedCredits?: DeserializedType<T, 'Edm.String'> | null;
  salesCreditForeignAcc?: DeserializedType<T, 'Edm.String'> | null;
  foreignPurchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  salesCreditEuAcc?: DeserializedType<T, 'Edm.String'> | null;
  euPurchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  purchaseBalanceAccount?: DeserializedType<T, 'Edm.String'> | null;
  whIncomingCenvatAccount?: DeserializedType<T, 'Edm.String'> | null;
  whOutgoingCenvatAccount?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: BoYesNoEnum | null;
  businessPartnerType?: BoBusinessPartnerTypes | null;
  vatGroup?: DeserializedType<T, 'Edm.String'> | null;
  bpCode?: DeserializedType<T, 'Edm.String'> | null;
  usage?: DeserializedType<T, 'Edm.Int32'> | null;
  udf1?: DeserializedType<T, 'Edm.String'> | null;
  udf2?: DeserializedType<T, 'Edm.String'> | null;
  udf3?: DeserializedType<T, 'Edm.String'> | null;
  udf4?: DeserializedType<T, 'Edm.String'> | null;
  udf5?: DeserializedType<T, 'Edm.String'> | null;
  item?: ItemsType<T> | null;
  itemGroups?: ItemGroupsType<T> | null;
  warehouse2?: WarehousesType<T> | null;
  businessPartnerGroup?: BusinessPartnerGroupsType<T> | null;
  country?: CountriesType<T> | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  vatGroup_1?: VatGroupsType<T> | null;
  businessPartner?: BusinessPartnersType<T> | null;
  notaFiscalUsage?: NotaFiscalUsageType<T> | null;
}
