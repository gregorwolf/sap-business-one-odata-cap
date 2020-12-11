/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DunningTermsRequestBuilder } from './DunningTermsRequestBuilder';
import { DunningTermLine } from './DunningTermLine';
import { GroupingMethodEnum } from './GroupingMethodEnum';
import { CalculateInterestMethodEnum } from './CalculateInterestMethodEnum';
import { ExchangeRateSelectEnum } from './ExchangeRateSelectEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AutomaticPostingEnum } from './AutomaticPostingEnum';
import { BaseDateSelectEnum } from './BaseDateSelectEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DunningTerms" of service "SAPB1".
 */
export class DunningTerms extends EntityV4 implements DunningTermsType {
  /**
   * Technical entity name for DunningTerms.
   */
  static _entityName = 'DunningTerms';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Grouping Method.
   * @nullable
   */
  groupingMethod?: GroupingMethodEnum;
  /**
   * Days In Year.
   * @nullable
   */
  daysInYear?: number;
  /**
   * Days In Month.
   * @nullable
   */
  daysInMonth?: number;
  /**
   * Calculate Interest Method.
   * @nullable
   */
  calculateInterestMethod?: CalculateInterestMethodEnum;
  /**
   * Exchange Rate Select.
   * @nullable
   */
  exchangeRateSelect?: ExchangeRateSelectEnum;
  /**
   * Yearly Interest Rate.
   * @nullable
   */
  yearlyInterestRate?: number;
  /**
   * Letter Fee.
   * @nullable
   */
  letterFee?: number;
  /**
   * Letter Fee Currency.
   * @nullable
   */
  letterFeeCurrency?: string;
  /**
   * Minimum Balance.
   * @nullable
   */
  minimumBalance?: number;
  /**
   * Minimum Balance Currency.
   * @nullable
   */
  minimumBalanceCurrency?: string;
  /**
   * Include Interest.
   * @nullable
   */
  includeInterest?: BoYesNoEnum;
  /**
   * Apply Highest Letter Template.
   * @nullable
   */
  applyHighestLetterTemplate?: BoYesNoEnum;
  /**
   * Automatic Posting.
   * @nullable
   */
  automaticPosting?: AutomaticPostingEnum;
  /**
   * Interest Account.
   * @nullable
   */
  interestAccount?: string;
  /**
   * Fee Account.
   * @nullable
   */
  feeAccount?: string;
  /**
   * Base Date Select.
   * @nullable
   */
  baseDateSelect?: BaseDateSelectEnum;
  /**
   * Dunning Term Lines.
   * @nullable
   */
  dunningTermLines?: DunningTermLine[];
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;

  /**
   * Returns an entity builder to construct instances of `DunningTerms`.
   * @returns A builder that constructs instances of entity type `DunningTerms`.
   */
  static builder(): EntityBuilderType<DunningTerms, DunningTermsType> {
    return EntityV4.entityBuilder(DunningTerms);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DunningTerms` entity type.
   * @returns A `DunningTerms` request builder.
   */
  static requestBuilder(): DunningTermsRequestBuilder {
    return new DunningTermsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DunningTerms`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DunningTerms`.
   */
  static customField(fieldName: string): CustomFieldV4<DunningTerms> {
    return EntityV4.customFieldSelector(fieldName, DunningTerms);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';

export interface DunningTermsType {
  code?: string | null;
  name?: string | null;
  groupingMethod?: GroupingMethodEnum | null;
  daysInYear?: number | null;
  daysInMonth?: number | null;
  calculateInterestMethod?: CalculateInterestMethodEnum | null;
  exchangeRateSelect?: ExchangeRateSelectEnum | null;
  yearlyInterestRate?: number | null;
  letterFee?: number | null;
  letterFeeCurrency?: string | null;
  minimumBalance?: number | null;
  minimumBalanceCurrency?: string | null;
  includeInterest?: BoYesNoEnum | null;
  applyHighestLetterTemplate?: BoYesNoEnum | null;
  automaticPosting?: AutomaticPostingEnum | null;
  interestAccount?: string | null;
  feeAccount?: string | null;
  baseDateSelect?: BaseDateSelectEnum | null;
  dunningTermLines?: DunningTermLine[] | null;
  businessPartners: BusinessPartnersType[];
  chartOfAccount: ChartOfAccountsType;
}

export namespace DunningTerms {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<DunningTerms> = new StringField('Code', DunningTerms, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<DunningTerms> = new StringField('Name', DunningTerms, 'Edm.String');
  /**
   * Static representation of the [[groupingMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUPING_METHOD: EnumField<DunningTerms> = new EnumField('GroupingMethod', DunningTerms);
  /**
   * Static representation of the [[daysInYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DAYS_IN_YEAR: NumberField<DunningTerms> = new NumberField('DaysInYear', DunningTerms, 'Edm.Int32');
  /**
   * Static representation of the [[daysInMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DAYS_IN_MONTH: NumberField<DunningTerms> = new NumberField('DaysInMonth', DunningTerms, 'Edm.Int32');
  /**
   * Static representation of the [[calculateInterestMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATE_INTEREST_METHOD: EnumField<DunningTerms> = new EnumField('CalculateInterestMethod', DunningTerms);
  /**
   * Static representation of the [[exchangeRateSelect]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCHANGE_RATE_SELECT: EnumField<DunningTerms> = new EnumField('ExchangeRateSelect', DunningTerms);
  /**
   * Static representation of the [[yearlyInterestRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const YEARLY_INTEREST_RATE: NumberField<DunningTerms> = new NumberField('YearlyInterestRate', DunningTerms, 'Edm.Double');
  /**
   * Static representation of the [[letterFee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LETTER_FEE: NumberField<DunningTerms> = new NumberField('LetterFee', DunningTerms, 'Edm.Double');
  /**
   * Static representation of the [[letterFeeCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LETTER_FEE_CURRENCY: StringField<DunningTerms> = new StringField('LetterFeeCurrency', DunningTerms, 'Edm.String');
  /**
   * Static representation of the [[minimumBalance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_BALANCE: NumberField<DunningTerms> = new NumberField('MinimumBalance', DunningTerms, 'Edm.Double');
  /**
   * Static representation of the [[minimumBalanceCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_BALANCE_CURRENCY: StringField<DunningTerms> = new StringField('MinimumBalanceCurrency', DunningTerms, 'Edm.String');
  /**
   * Static representation of the [[includeInterest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_INTEREST: EnumField<DunningTerms> = new EnumField('IncludeInterest', DunningTerms);
  /**
   * Static representation of the [[applyHighestLetterTemplate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_HIGHEST_LETTER_TEMPLATE: EnumField<DunningTerms> = new EnumField('ApplyHighestLetterTemplate', DunningTerms);
  /**
   * Static representation of the [[automaticPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTOMATIC_POSTING: EnumField<DunningTerms> = new EnumField('AutomaticPosting', DunningTerms);
  /**
   * Static representation of the [[interestAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_ACCOUNT: StringField<DunningTerms> = new StringField('InterestAccount', DunningTerms, 'Edm.String');
  /**
   * Static representation of the [[feeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEE_ACCOUNT: StringField<DunningTerms> = new StringField('FeeAccount', DunningTerms, 'Edm.String');
  /**
   * Static representation of the [[baseDateSelect]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_DATE_SELECT: EnumField<DunningTerms> = new EnumField('BaseDateSelect', DunningTerms);
  /**
   * Static representation of the [[dunningTermLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_TERM_LINES: CollectionField<DunningTerms, DunningTermLine> = new CollectionField('DunningTermLines', DunningTerms, DunningTermLine);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<DunningTerms, BusinessPartners> = new OneToManyLink('BusinessPartners', DunningTerms, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<DunningTerms, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', DunningTerms, ChartOfAccounts);
  /**
   * All fields of the DunningTerms entity.
   */
  export const _allFields: Array<StringField<DunningTerms> | EnumField<DunningTerms> | NumberField<DunningTerms> | CollectionField<DunningTerms, DunningTermLine> | OneToManyLink<DunningTerms, BusinessPartners> | OneToOneLink<DunningTerms, ChartOfAccounts>> = [
    DunningTerms.CODE,
    DunningTerms.NAME,
    DunningTerms.GROUPING_METHOD,
    DunningTerms.DAYS_IN_YEAR,
    DunningTerms.DAYS_IN_MONTH,
    DunningTerms.CALCULATE_INTEREST_METHOD,
    DunningTerms.EXCHANGE_RATE_SELECT,
    DunningTerms.YEARLY_INTEREST_RATE,
    DunningTerms.LETTER_FEE,
    DunningTerms.LETTER_FEE_CURRENCY,
    DunningTerms.MINIMUM_BALANCE,
    DunningTerms.MINIMUM_BALANCE_CURRENCY,
    DunningTerms.INCLUDE_INTEREST,
    DunningTerms.APPLY_HIGHEST_LETTER_TEMPLATE,
    DunningTerms.AUTOMATIC_POSTING,
    DunningTerms.INTEREST_ACCOUNT,
    DunningTerms.FEE_ACCOUNT,
    DunningTerms.BASE_DATE_SELECT,
    DunningTerms.DUNNING_TERM_LINES,
    DunningTerms.BUSINESS_PARTNERS,
    DunningTerms.CHART_OF_ACCOUNT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DunningTerms> = new AllFields('*', DunningTerms);
  /**
   * All key fields of the DunningTerms entity.
   */
  export const _keyFields: Array<Field<DunningTerms>> = [DunningTerms.CODE];
  /**
   * Mapping of all key field names to the respective static field property DunningTerms.
   */
  export const _keys: { [keys: string]: Field<DunningTerms> } = DunningTerms._keyFields.reduce((acc: { [keys: string]: Field<DunningTerms> }, field: Field<DunningTerms>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
