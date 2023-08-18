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
import type { BudgetScenariosApi } from './BudgetScenariosApi';
import { BoRoundingMethod } from './BoRoundingMethod';
import { Budgets, BudgetsType } from './Budgets';
import { Projects, ProjectsType } from './Projects';
import { DistributionRules, DistributionRulesType } from './DistributionRules';

/**
 * This class represents the entity "BudgetScenarios" of service "SAPB1".
 */
export class BudgetScenarios<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetScenariosType<T>
{
  /**
   * Technical entity name for BudgetScenarios.
   */
  static _entityName = 'BudgetScenarios';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BudgetScenarios entity
   */
  static _keys = ['Numerator'];
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Initial Ratio Percentage.
   * @nullable
   */
  initialRatioPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Startof Fiscal Year.
   * @nullable
   */
  startofFiscalYear?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Basic Budget.
   * @nullable
   */
  basicBudget?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Numerator.
   */
  numerator!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Rounding Method.
   * @nullable
   */
  roundingMethod?: BoRoundingMethod | null;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<T, 'Edm.String'> | null;
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
   * U Cor Ocr Code.
   * @nullable
   */
  uCorOcrCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cor Prj Code.
   * @nullable
   */
  uCorPrjCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Budgets} entity.
   */
  budgets!: Budgets<T>[];
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project2?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link DistributionRules} entity.
   */
  distributionRule6?: DistributionRules<T> | null;

  constructor(readonly _entityApi: BudgetScenariosApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetScenariosType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name?: DeserializedType<T, 'Edm.String'> | null;
  initialRatioPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  startofFiscalYear?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  basicBudget?: DeserializedType<T, 'Edm.Int32'> | null;
  numerator: DeserializedType<T, 'Edm.Int32'>;
  roundingMethod?: BoRoundingMethod | null;
  project?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule2?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule3?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule4?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule5?: DeserializedType<T, 'Edm.String'> | null;
  uCorOcrCode?: DeserializedType<T, 'Edm.String'> | null;
  uCorPrjCode?: DeserializedType<T, 'Edm.String'> | null;
  budgets: BudgetsType<T>[];
  project2?: ProjectsType<T> | null;
  distributionRule6?: DistributionRulesType<T> | null;
}
