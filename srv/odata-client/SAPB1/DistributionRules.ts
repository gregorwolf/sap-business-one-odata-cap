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
import { DistributionRuleLine } from './DistributionRuleLine';
import type { DistributionRulesApi } from './DistributionRulesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ProductTrees, ProductTreesType } from './ProductTrees';
import { Dimensions, DimensionsType } from './Dimensions';
import {
  AdditionalExpenses,
  AdditionalExpensesType
} from './AdditionalExpenses';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { BudgetScenarios, BudgetScenariosType } from './BudgetScenarios';
import { Deposits, DepositsType } from './Deposits';

/**
 * This class represents the entity "DistributionRules" of service "SAPB1".
 */
export class DistributionRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DistributionRulesType<T>
{
  /**
   * Technical entity name for DistributionRules.
   */
  static _entityName = 'DistributionRules';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DistributionRules entity
   */
  static _keys = ['FactorCode'];
  /**
   * Factor Code.
   */
  factorCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Factor Description.
   * @nullable
   */
  factorDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Factor.
   * @nullable
   */
  totalFactor?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Direct.
   * @nullable
   */
  direct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Which Dimension.
   * @nullable
   */
  inWhichDimension?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum | null;
  /**
   * Is Fixed Amount.
   * @nullable
   */
  isFixedAmount?: BoYesNoEnum | null;
  /**
   * Distribution Rule Lines.
   * @nullable
   */
  distributionRuleLines?: DistributionRuleLine<T>[] | null;
  /**
   * One-to-many navigation property to the {@link ProductTrees} entity.
   */
  productTrees!: ProductTrees<T>[];
  /**
   * One-to-one navigation property to the {@link Dimensions} entity.
   */
  dimension?: Dimensions<T> | null;
  /**
   * One-to-many navigation property to the {@link AdditionalExpenses} entity.
   */
  additionalExpenses!: AdditionalExpenses<T>[];
  /**
   * One-to-many navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccounts!: ChartOfAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionOrders} entity.
   */
  productionOrders!: ProductionOrders<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetScenarios} entity.
   */
  budgetScenarios!: BudgetScenarios<T>[];
  /**
   * One-to-many navigation property to the {@link Deposits} entity.
   */
  deposits!: Deposits<T>[];

  constructor(readonly _entityApi: DistributionRulesApi<T>) {
    super(_entityApi);
  }
}

export interface DistributionRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  factorCode: DeserializedType<T, 'Edm.String'>;
  factorDescription?: DeserializedType<T, 'Edm.String'> | null;
  totalFactor?: DeserializedType<T, 'Edm.Double'> | null;
  direct?: DeserializedType<T, 'Edm.String'> | null;
  inWhichDimension?: DeserializedType<T, 'Edm.Int32'> | null;
  active?: BoYesNoEnum | null;
  isFixedAmount?: BoYesNoEnum | null;
  distributionRuleLines?: DistributionRuleLine<T>[] | null;
  productTrees: ProductTreesType<T>[];
  dimension?: DimensionsType<T> | null;
  additionalExpenses: AdditionalExpensesType<T>[];
  chartOfAccounts: ChartOfAccountsType<T>[];
  productionOrders: ProductionOrdersType<T>[];
  budgetScenarios: BudgetScenariosType<T>[];
  deposits: DepositsType<T>[];
}
