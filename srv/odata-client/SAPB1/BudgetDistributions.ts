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
import type { BudgetDistributionsApi } from './BudgetDistributionsApi';
import { Budgets, BudgetsType } from './Budgets';

/**
 * This class represents the entity "BudgetDistributions" of service "SAPB1".
 */
export class BudgetDistributions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetDistributionsType<T>
{
  /**
   * Technical entity name for BudgetDistributions.
   */
  static _entityName = 'BudgetDistributions';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BudgetDistributions entity
   */
  static _keys = ['DivisionCode'];
  /**
   * September.
   * @nullable
   */
  september?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * August.
   * @nullable
   */
  august?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * July.
   * @nullable
   */
  july?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * June.
   * @nullable
   */
  june?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * May.
   * @nullable
   */
  may?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * April.
   * @nullable
   */
  april?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * March.
   * @nullable
   */
  march?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * February.
   * @nullable
   */
  february?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * December.
   * @nullable
   */
  december?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * November.
   * @nullable
   */
  november?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * October.
   * @nullable
   */
  october?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * January.
   * @nullable
   */
  january?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Budget Amount.
   * @nullable
   */
  budgetAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division Code.
   */
  divisionCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link Budgets} entity.
   */
  budgets!: Budgets<T>[];

  constructor(readonly _entityApi: BudgetDistributionsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetDistributionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  september?: DeserializedType<T, 'Edm.Double'> | null;
  august?: DeserializedType<T, 'Edm.Double'> | null;
  july?: DeserializedType<T, 'Edm.Double'> | null;
  june?: DeserializedType<T, 'Edm.Double'> | null;
  may?: DeserializedType<T, 'Edm.Double'> | null;
  april?: DeserializedType<T, 'Edm.Double'> | null;
  march?: DeserializedType<T, 'Edm.Double'> | null;
  february?: DeserializedType<T, 'Edm.Double'> | null;
  december?: DeserializedType<T, 'Edm.Double'> | null;
  november?: DeserializedType<T, 'Edm.Double'> | null;
  october?: DeserializedType<T, 'Edm.Double'> | null;
  january?: DeserializedType<T, 'Edm.Double'> | null;
  budgetAmount?: DeserializedType<T, 'Edm.Double'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  divisionCode: DeserializedType<T, 'Edm.Int32'>;
  budgets: BudgetsType<T>[];
}
