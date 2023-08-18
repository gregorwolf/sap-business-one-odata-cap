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
import type { ExpenseTypesApi } from './ExpenseTypesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { SalesTaxCodes, SalesTaxCodesType } from './SalesTaxCodes';

/**
 * This class represents the entity "ExpenseTypes" of service "SAPB1".
 */
export class ExpenseTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpenseTypesType<T>
{
  /**
   * Technical entity name for ExpenseTypes.
   */
  static _entityName = 'ExpenseTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseTypes entity
   */
  static _keys = ['ExpenseType'];
  /**
   * Expense Type.
   */
  expenseType!: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Name.
   * @nullable
   */
  expenseName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Account.
   * @nullable
   */
  expenseAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paid By Company.
   * @nullable
   */
  paidByCompany?: BoYesNoEnum | null;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesTaxCodes} entity.
   */
  salesTaxCode?: SalesTaxCodes<T> | null;

  constructor(readonly _entityApi: ExpenseTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  expenseType: DeserializedType<T, 'Edm.String'>;
  expenseName?: DeserializedType<T, 'Edm.String'> | null;
  expenseAccount?: DeserializedType<T, 'Edm.String'> | null;
  paidByCompany?: BoYesNoEnum | null;
  vatGroup?: DeserializedType<T, 'Edm.String'> | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  salesTaxCode?: SalesTaxCodesType<T> | null;
}
