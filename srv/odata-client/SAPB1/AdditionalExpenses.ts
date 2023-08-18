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
import type { AdditionalExpensesApi } from './AdditionalExpensesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAeDistMthd } from './BoAeDistMthd';
import { DrawingMethodEnum } from './DrawingMethodEnum';
import { FreightTypeEnum } from './FreightTypeEnum';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { VatGroups, VatGroupsType } from './VatGroups';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { Projects, ProjectsType } from './Projects';

/**
 * This class represents the entity "AdditionalExpenses" of service "SAPB1".
 */
export class AdditionalExpenses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AdditionalExpensesType<T>
{
  /**
   * Technical entity name for AdditionalExpenses.
   */
  static _entityName = 'AdditionalExpenses';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the AdditionalExpenses entity
   */
  static _keys = ['ExpensCode'];
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revenues Account.
   * @nullable
   */
  revenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Account.
   * @nullable
   */
  expenseAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Liable.
   * @nullable
   */
  taxLiable?: BoYesNoEnum | null;
  /**
   * Fixed Amount Revenues.
   * @nullable
   */
  fixedAmountRevenues?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Fixed Amount Expenses.
   * @nullable
   */
  fixedAmountExpenses?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Output Vat Group.
   * @nullable
   */
  outputVatGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Input Vat Group.
   * @nullable
   */
  inputVatGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Method.
   * @nullable
   */
  distributionMethod?: BoAeDistMthd | null;
  /**
   * Includein 1099.
   * @nullable
   */
  includein1099?: BoYesNoEnum | null;
  /**
   * Freight Offset Account.
   * @nullable
   */
  freightOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wt Liable.
   * @nullable
   */
  wtLiable?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expens Code.
   */
  expensCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expense Exempted Account.
   * @nullable
   */
  expenseExemptedAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revenues Exempted Account.
   * @nullable
   */
  revenuesExemptedAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drawing Method.
   * @nullable
   */
  drawingMethod?: DrawingMethodEnum | null;
  /**
   * Freight Type.
   * @nullable
   */
  freightType?: FreightTypeEnum | null;
  /**
   * Stock.
   * @nullable
   */
  stock?: BoYesNoEnum | null;
  /**
   * Last Purchase Price.
   * @nullable
   */
  lastPurchasePrice?: BoYesNoEnum | null;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Version.
   * @nullable
   */
  dataVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link VatGroups} entity.
   */
  vatGroup?: VatGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link DistributionRules} entity.
   */
  distributionRule6?: DistributionRules<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project2?: Projects<T> | null;

  constructor(readonly _entityApi: AdditionalExpensesApi<T>) {
    super(_entityApi);
  }
}

export interface AdditionalExpensesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name?: DeserializedType<T, 'Edm.String'> | null;
  revenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  expenseAccount?: DeserializedType<T, 'Edm.String'> | null;
  taxLiable?: BoYesNoEnum | null;
  fixedAmountRevenues?: DeserializedType<T, 'Edm.Double'> | null;
  fixedAmountExpenses?: DeserializedType<T, 'Edm.Double'> | null;
  outputVatGroup?: DeserializedType<T, 'Edm.String'> | null;
  inputVatGroup?: DeserializedType<T, 'Edm.String'> | null;
  distributionMethod?: BoAeDistMthd | null;
  includein1099?: BoYesNoEnum | null;
  freightOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  wtLiable?: DeserializedType<T, 'Edm.String'> | null;
  expensCode: DeserializedType<T, 'Edm.Int32'>;
  expenseExemptedAccount?: DeserializedType<T, 'Edm.String'> | null;
  revenuesExemptedAccount?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule?: DeserializedType<T, 'Edm.String'> | null;
  drawingMethod?: DrawingMethodEnum | null;
  freightType?: FreightTypeEnum | null;
  stock?: BoYesNoEnum | null;
  lastPurchasePrice?: BoYesNoEnum | null;
  project?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule2?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule3?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule4?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule5?: DeserializedType<T, 'Edm.String'> | null;
  dataVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  vatGroup?: VatGroupsType<T> | null;
  distributionRule6?: DistributionRulesType<T> | null;
  project2?: ProjectsType<T> | null;
}
