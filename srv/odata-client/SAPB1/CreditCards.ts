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
import type { CreditCardsApi } from './CreditCardsApi';
import {
  CreditPaymentMethods,
  CreditPaymentMethodsType
} from './CreditPaymentMethods';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Countries, CountriesType } from './Countries';

/**
 * This class represents the entity "CreditCards" of service "SAPB1".
 */
export class CreditCards<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CreditCardsType<T>
{
  /**
   * Technical entity name for CreditCards.
   */
  static _entityName = 'CreditCards';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CreditCards entity
   */
  static _keys = ['CreditCardCode'];
  /**
   * Credit Card Code.
   */
  creditCardCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Credit Card Name.
   * @nullable
   */
  creditCardName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gl Account.
   * @nullable
   */
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone.
   * @nullable
   */
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Id.
   * @nullable
   */
  companyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Code.
   * @nullable
   */
  countryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CreditPaymentMethods} entity.
   */
  creditPaymentMethods!: CreditPaymentMethods<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country?: Countries<T> | null;

  constructor(readonly _entityApi: CreditCardsApi<T>) {
    super(_entityApi);
  }
}

export interface CreditCardsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  creditCardCode: DeserializedType<T, 'Edm.Int32'>;
  creditCardName?: DeserializedType<T, 'Edm.String'> | null;
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  companyId?: DeserializedType<T, 'Edm.String'> | null;
  countryCode?: DeserializedType<T, 'Edm.String'> | null;
  creditPaymentMethods: CreditPaymentMethodsType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  chartOfAccount?: ChartOfAccountsType<T> | null;
  country?: CountriesType<T> | null;
}
