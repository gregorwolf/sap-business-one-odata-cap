/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DunningTermsRequestBuilder } from './DunningTermsRequestBuilder';
import { DunningTermLine, DunningTermLineField } from './DunningTermLine';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "DunningTerms" of service "SAPB1".
 */
export class DunningTerms extends Entity implements DunningTermsType {
  /**
   * Technical entity name for DunningTerms.
   */
  static _entityName = 'DunningTerms';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DunningTerms.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Returns an entity builder to construct instances `DunningTerms`.
   * @returns A builder that constructs instances of entity type `DunningTerms`.
   */
  static builder(): EntityBuilderType<DunningTerms, DunningTermsTypeForceMandatory> {
    return Entity.entityBuilder(DunningTerms);
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
  static customField(fieldName: string): CustomField<DunningTerms> {
    return Entity.customFieldSelector(fieldName, DunningTerms);
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
  code?: string;
  name?: string;
  daysInYear?: number;
  daysInMonth?: number;
  yearlyInterestRate?: number;
  letterFee?: number;
  letterFeeCurrency?: string;
  minimumBalance?: number;
  minimumBalanceCurrency?: string;
  interestAccount?: string;
  feeAccount?: string;
  dunningTermLines?: DunningTermLine[];
  businessPartners: BusinessPartnersType[];
  chartOfAccount: ChartOfAccountsType;
}

export interface DunningTermsTypeForceMandatory {
  code: string;
  name: string;
  daysInYear: number;
  daysInMonth: number;
  yearlyInterestRate: number;
  letterFee: number;
  letterFeeCurrency: string;
  minimumBalance: number;
  minimumBalanceCurrency: string;
  interestAccount: string;
  feeAccount: string;
  dunningTermLines: DunningTermLine[];
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
   * Static representation of the [[dunningTermLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_TERM_LINES: CollectionField<DunningTerms> = new CollectionField('DunningTermLines', DunningTerms, new DunningTermLineField('', DunningTerms));
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
  export const _allFields: Array<StringField<DunningTerms> | NumberField<DunningTerms> | CollectionField<DunningTerms> | OneToManyLink<DunningTerms, BusinessPartners> | OneToOneLink<DunningTerms, ChartOfAccounts>> = [
    DunningTerms.CODE,
    DunningTerms.NAME,
    DunningTerms.DAYS_IN_YEAR,
    DunningTerms.DAYS_IN_MONTH,
    DunningTerms.YEARLY_INTEREST_RATE,
    DunningTerms.LETTER_FEE,
    DunningTerms.LETTER_FEE_CURRENCY,
    DunningTerms.MINIMUM_BALANCE,
    DunningTerms.MINIMUM_BALANCE_CURRENCY,
    DunningTerms.INTEREST_ACCOUNT,
    DunningTerms.FEE_ACCOUNT,
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
