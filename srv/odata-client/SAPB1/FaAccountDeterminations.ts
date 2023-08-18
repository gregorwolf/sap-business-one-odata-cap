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
import type { FaAccountDeterminationsApi } from './FaAccountDeterminationsApi';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';

/**
 * This class represents the entity "FAAccountDeterminations" of service "SAPB1".
 */
export class FaAccountDeterminations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FaAccountDeterminationsType<T>
{
  /**
   * Technical entity name for FaAccountDeterminations.
   */
  static _entityName = 'FAAccountDeterminations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the FaAccountDeterminations entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Balance Sheet Account.
   * @nullable
   */
  assetBalanceSheetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Clearing Account Acquisition.
   * @nullable
   */
  clearingAccountAcquisition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revaluation Reserve Account.
   * @nullable
   */
  revaluationReserveAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revaluation Reserve Clearing.
   * @nullable
   */
  revaluationReserveClearing?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordinary Depreciation.
   * @nullable
   */
  ordinaryDepreciation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accumulated Ordinary Depr.
   * @nullable
   */
  accumulatedOrdinaryDepr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unplanned Depreciation.
   * @nullable
   */
  unplannedDepreciation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accumulated Unplanned Depr.
   * @nullable
   */
  accumulatedUnplannedDepr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Special Depreciation.
   * @nullable
   */
  specialDepreciation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accumulated Special Depr.
   * @nullable
   */
  accumulatedSpecialDepr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revenuefrom Asset Sales Net.
   * @nullable
   */
  revenuefromAssetSalesNet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retirementwith Expense Net.
   * @nullable
   */
  retirementwithExpenseNet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retirementwith Revenue Net.
   * @nullable
   */
  retirementwithRevenueNet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Leavewith Expense Nbv Gross.
   * @nullable
   */
  leavewithExpenseNbvGross?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Leavewith Revenue Nbv Gross.
   * @nullable
   */
  leavewithRevenueNbvGross?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revenue Accountfor Retirement.
   * @nullable
   */
  revenueAccountforRetirement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revenue Clearing Account.
   * @nullable
   */
  revenueClearingAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revaluation Account.
   * @nullable
   */
  revaluationAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revaluation Loss Acct.
   * @nullable
   */
  revaluationLossAcct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;

  constructor(readonly _entityApi: FaAccountDeterminationsApi<T>) {
    super(_entityApi);
  }
}

export interface FaAccountDeterminationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assetBalanceSheetAccount?: DeserializedType<T, 'Edm.String'> | null;
  clearingAccountAcquisition?: DeserializedType<T, 'Edm.String'> | null;
  revaluationReserveAccount?: DeserializedType<T, 'Edm.String'> | null;
  revaluationReserveClearing?: DeserializedType<T, 'Edm.String'> | null;
  ordinaryDepreciation?: DeserializedType<T, 'Edm.String'> | null;
  accumulatedOrdinaryDepr?: DeserializedType<T, 'Edm.String'> | null;
  unplannedDepreciation?: DeserializedType<T, 'Edm.String'> | null;
  accumulatedUnplannedDepr?: DeserializedType<T, 'Edm.String'> | null;
  specialDepreciation?: DeserializedType<T, 'Edm.String'> | null;
  accumulatedSpecialDepr?: DeserializedType<T, 'Edm.String'> | null;
  revenuefromAssetSalesNet?: DeserializedType<T, 'Edm.String'> | null;
  retirementwithExpenseNet?: DeserializedType<T, 'Edm.String'> | null;
  retirementwithRevenueNet?: DeserializedType<T, 'Edm.String'> | null;
  leavewithExpenseNbvGross?: DeserializedType<T, 'Edm.String'> | null;
  leavewithRevenueNbvGross?: DeserializedType<T, 'Edm.String'> | null;
  revenueAccountforRetirement?: DeserializedType<T, 'Edm.String'> | null;
  revenueClearingAccount?: DeserializedType<T, 'Edm.String'> | null;
  revaluationAccount?: DeserializedType<T, 'Edm.String'> | null;
  revaluationLossAcct?: DeserializedType<T, 'Edm.String'> | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
}
