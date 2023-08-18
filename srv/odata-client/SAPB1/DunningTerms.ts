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
import { DunningTermLine } from './DunningTermLine';
import type { DunningTermsApi } from './DunningTermsApi';
import { GroupingMethodEnum } from './GroupingMethodEnum';
import { CalculateInterestMethodEnum } from './CalculateInterestMethodEnum';
import { ExchangeRateSelectEnum } from './ExchangeRateSelectEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AutomaticPostingEnum } from './AutomaticPostingEnum';
import { BaseDateSelectEnum } from './BaseDateSelectEnum';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "DunningTerms" of service "SAPB1".
 */
export class DunningTerms<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DunningTermsType<T>
{
  /**
   * Technical entity name for DunningTerms.
   */
  static _entityName = 'DunningTerms';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DunningTerms entity
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
   * Grouping Method.
   * @nullable
   */
  groupingMethod?: GroupingMethodEnum | null;
  /**
   * Days In Year.
   * @nullable
   */
  daysInYear?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Days In Month.
   * @nullable
   */
  daysInMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Calculate Interest Method.
   * @nullable
   */
  calculateInterestMethod?: CalculateInterestMethodEnum | null;
  /**
   * Exchange Rate Select.
   * @nullable
   */
  exchangeRateSelect?: ExchangeRateSelectEnum | null;
  /**
   * Yearly Interest Rate.
   * @nullable
   */
  yearlyInterestRate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Letter Fee.
   * @nullable
   */
  letterFee?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Letter Fee Currency.
   * @nullable
   */
  letterFeeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Balance.
   * @nullable
   */
  minimumBalance?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Minimum Balance Currency.
   * @nullable
   */
  minimumBalanceCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Include Interest.
   * @nullable
   */
  includeInterest?: BoYesNoEnum | null;
  /**
   * Apply Highest Letter Template.
   * @nullable
   */
  applyHighestLetterTemplate?: BoYesNoEnum | null;
  /**
   * Automatic Posting.
   * @nullable
   */
  automaticPosting?: AutomaticPostingEnum | null;
  /**
   * Interest Account.
   * @nullable
   */
  interestAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fee Account.
   * @nullable
   */
  feeAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Date Select.
   * @nullable
   */
  baseDateSelect?: BaseDateSelectEnum | null;
  /**
   * Dunning Term Lines.
   * @nullable
   */
  dunningTermLines?: DunningTermLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];

  constructor(readonly _entityApi: DunningTermsApi<T>) {
    super(_entityApi);
  }
}

export interface DunningTermsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  groupingMethod?: GroupingMethodEnum | null;
  daysInYear?: DeserializedType<T, 'Edm.Int32'> | null;
  daysInMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  calculateInterestMethod?: CalculateInterestMethodEnum | null;
  exchangeRateSelect?: ExchangeRateSelectEnum | null;
  yearlyInterestRate?: DeserializedType<T, 'Edm.Double'> | null;
  letterFee?: DeserializedType<T, 'Edm.Double'> | null;
  letterFeeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  minimumBalance?: DeserializedType<T, 'Edm.Double'> | null;
  minimumBalanceCurrency?: DeserializedType<T, 'Edm.String'> | null;
  includeInterest?: BoYesNoEnum | null;
  applyHighestLetterTemplate?: BoYesNoEnum | null;
  automaticPosting?: AutomaticPostingEnum | null;
  interestAccount?: DeserializedType<T, 'Edm.String'> | null;
  feeAccount?: DeserializedType<T, 'Edm.String'> | null;
  baseDateSelect?: BaseDateSelectEnum | null;
  dunningTermLines?: DunningTermLine<T>[] | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  businessPartners: BusinessPartnersType<T>[];
}
