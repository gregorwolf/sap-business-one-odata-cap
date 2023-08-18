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
import type { BanksApi } from './BanksApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { Countries, CountriesType } from './Countries';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { HouseBankAccounts, HouseBankAccountsType } from './HouseBankAccounts';

/**
 * This class represents the entity "Banks" of service "SAPB1".
 */
export class Banks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BanksType<T>
{
  /**
   * Technical entity name for Banks.
   */
  static _entityName = 'Banks';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Banks entity
   */
  static _keys = ['AbsoluteEntry'];
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Name.
   * @nullable
   */
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accountfor Outgoing Checks.
   * @nullable
   */
  accountforOutgoingChecks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branchfor Outgoing Checks.
   * @nullable
   */
  branchforOutgoingChecks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Next Check Number.
   * @nullable
   */
  nextCheckNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Swift No.
   * @nullable
   */
  swiftNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iban.
   * @nullable
   */
  iban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Code.
   * @nullable
   */
  countryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Office.
   * @nullable
   */
  postOffice?: BoYesNoEnum | null;
  /**
   * Absolute Entry.
   */
  absoluteEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Bank Account Key.
   * @nullable
   */
  defaultBankAccountKey?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country?: Countries<T> | null;
  /**
   * One-to-many navigation property to the {@link EmployeesInfo} entity.
   */
  employeesInfo!: EmployeesInfo<T>[];
  /**
   * One-to-many navigation property to the {@link HouseBankAccounts} entity.
   */
  houseBankAccounts!: HouseBankAccounts<T>[];

  constructor(readonly _entityApi: BanksApi<T>) {
    super(_entityApi);
  }
}

export interface BanksType<T extends DeSerializers = DefaultDeSerializers> {
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  accountforOutgoingChecks?: DeserializedType<T, 'Edm.String'> | null;
  branchforOutgoingChecks?: DeserializedType<T, 'Edm.String'> | null;
  nextCheckNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  swiftNo?: DeserializedType<T, 'Edm.String'> | null;
  iban?: DeserializedType<T, 'Edm.String'> | null;
  countryCode?: DeserializedType<T, 'Edm.String'> | null;
  postOffice?: BoYesNoEnum | null;
  absoluteEntry: DeserializedType<T, 'Edm.Int32'>;
  defaultBankAccountKey?: DeserializedType<T, 'Edm.Int32'> | null;
  country?: CountriesType<T> | null;
  employeesInfo: EmployeesInfoType<T>[];
  houseBankAccounts: HouseBankAccountsType<T>[];
}
