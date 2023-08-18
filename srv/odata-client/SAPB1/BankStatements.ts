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
import { BankStatementRow } from './BankStatementRow';
import type { BankStatementsApi } from './BankStatementsApi';
import { BankStatementStatusEnum } from './BankStatementStatusEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { HouseBankAccounts, HouseBankAccountsType } from './HouseBankAccounts';
import { Currencies, CurrenciesType } from './Currencies';

/**
 * This class represents the entity "BankStatements" of service "SAPB1".
 */
export class BankStatements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BankStatementsType<T>
{
  /**
   * Technical entity name for BankStatements.
   */
  static _entityName = 'BankStatements';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BankStatements entity
   */
  static _keys = ['InternalNumber'];
  /**
   * Internal Number.
   */
  internalNumber!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bank Account Key.
   * @nullable
   */
  bankAccountKey?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Statement Number.
   * @nullable
   */
  statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Date.
   * @nullable
   */
  statementDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: BankStatementStatusEnum | null;
  /**
   * Imported.
   * @nullable
   */
  imported?: BoYesNoEnum | null;
  /**
   * Starting Balance F.
   * @nullable
   */
  startingBalanceF?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Ending Balance F.
   * @nullable
   */
  endingBalanceF?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Starting Balance L.
   * @nullable
   */
  startingBalanceL?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Ending Balance L.
   * @nullable
   */
  endingBalanceL?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Bank Statement File Hash.
   * @nullable
   */
  bankStatementFileHash?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Statement Guid.
   * @nullable
   */
  bankStatementGuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Statement Rows.
   * @nullable
   */
  bankStatementRows?: BankStatementRow<T>[] | null;
  /**
   * One-to-one navigation property to the {@link HouseBankAccounts} entity.
   */
  houseBankAccount?: HouseBankAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  currency2?: Currencies<T> | null;

  constructor(readonly _entityApi: BankStatementsApi<T>) {
    super(_entityApi);
  }
}

export interface BankStatementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  internalNumber: DeserializedType<T, 'Edm.Int32'>;
  bankAccountKey?: DeserializedType<T, 'Edm.Int32'> | null;
  statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  statementDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  status?: BankStatementStatusEnum | null;
  imported?: BoYesNoEnum | null;
  startingBalanceF?: DeserializedType<T, 'Edm.Double'> | null;
  endingBalanceF?: DeserializedType<T, 'Edm.Double'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  startingBalanceL?: DeserializedType<T, 'Edm.Double'> | null;
  endingBalanceL?: DeserializedType<T, 'Edm.Double'> | null;
  bankStatementFileHash?: DeserializedType<T, 'Edm.String'> | null;
  bankStatementGuid?: DeserializedType<T, 'Edm.String'> | null;
  bankStatementRows?: BankStatementRow<T>[] | null;
  houseBankAccount?: HouseBankAccountsType<T> | null;
  currency2?: CurrenciesType<T> | null;
}
