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
import type { AccrualTypesApi } from './AccrualTypesApi';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';

/**
 * This class represents the entity "AccrualTypes" of service "SAPB1".
 */
export class AccrualTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AccrualTypesType<T>
{
  /**
   * Technical entity name for AccrualTypes.
   */
  static _entityName = 'AccrualTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the AccrualTypes entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Account.
   * @nullable
   */
  postingAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculation Account.
   * @nullable
   */
  calculationAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interim Account.
   * @nullable
   */
  interimAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;

  constructor(readonly _entityApi: AccrualTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AccrualTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  postingAccount?: DeserializedType<T, 'Edm.String'> | null;
  calculationAccount?: DeserializedType<T, 'Edm.String'> | null;
  interimAccount?: DeserializedType<T, 'Edm.String'> | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
}
