/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditCardsRequestBuilder } from './CreditCardsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CreditCards" of service "SAPB1".
 */
export class CreditCards extends EntityV4 implements CreditCardsType {
  /**
   * Technical entity name for CreditCards.
   */
  static _entityName = 'CreditCards';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Credit Card Code.
   * @nullable
   */
  creditCardCode?: number;
  /**
   * Credit Card Name.
   * @nullable
   */
  creditCardName?: string;
  /**
   * Gl Account.
   * @nullable
   */
  glAccount?: string;
  /**
   * Telephone.
   * @nullable
   */
  telephone?: string;
  /**
   * Company Id.
   * @nullable
   */
  companyId?: string;
  /**
   * Country Code.
   * @nullable
   */
  countryCode?: string;
  /**
   * One-to-many navigation property to the [[CreditPaymentMethods]] entity.
   */
  creditPaymentMethods!: CreditPaymentMethods[];
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country!: Countries;
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];

  /**
   * Returns an entity builder to construct instances of `CreditCards`.
   * @returns A builder that constructs instances of entity type `CreditCards`.
   */
  static builder(): EntityBuilderType<CreditCards, CreditCardsType> {
    return EntityV4.entityBuilder(CreditCards);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CreditCards` entity type.
   * @returns A `CreditCards` request builder.
   */
  static requestBuilder(): CreditCardsRequestBuilder {
    return new CreditCardsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CreditCards`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CreditCards`.
   */
  static customField(fieldName: string): CustomFieldV4<CreditCards> {
    return EntityV4.customFieldSelector(fieldName, CreditCards);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { CreditPaymentMethods, CreditPaymentMethodsType } from './CreditPaymentMethods';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Countries, CountriesType } from './Countries';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

export interface CreditCardsType {
  creditCardCode?: number | null;
  creditCardName?: string | null;
  glAccount?: string | null;
  telephone?: string | null;
  companyId?: string | null;
  countryCode?: string | null;
  creditPaymentMethods: CreditPaymentMethodsType[];
  chartOfAccount: ChartOfAccountsType;
  country: CountriesType;
  businessPartners: BusinessPartnersType[];
}

export namespace CreditCards {
  /**
   * Static representation of the [[creditCardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_CARD_CODE: NumberField<CreditCards> = new NumberField('CreditCardCode', CreditCards, 'Edm.Int32');
  /**
   * Static representation of the [[creditCardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_CARD_NAME: StringField<CreditCards> = new StringField('CreditCardName', CreditCards, 'Edm.String');
  /**
   * Static representation of the [[glAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_ACCOUNT: StringField<CreditCards> = new StringField('GLAccount', CreditCards, 'Edm.String');
  /**
   * Static representation of the [[telephone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TELEPHONE: StringField<CreditCards> = new StringField('Telephone', CreditCards, 'Edm.String');
  /**
   * Static representation of the [[companyId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_ID: StringField<CreditCards> = new StringField('CompanyID', CreditCards, 'Edm.String');
  /**
   * Static representation of the [[countryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_CODE: StringField<CreditCards> = new StringField('CountryCode', CreditCards, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[creditPaymentMethods]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_PAYMENT_METHODS: OneToManyLink<CreditCards, CreditPaymentMethods> = new OneToManyLink('CreditPaymentMethods', CreditCards, CreditPaymentMethods);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<CreditCards, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', CreditCards, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<CreditCards, Countries> = new OneToOneLink('Country', CreditCards, Countries);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<CreditCards, BusinessPartners> = new OneToManyLink('BusinessPartners', CreditCards, BusinessPartners);
  /**
   * All fields of the CreditCards entity.
   */
  export const _allFields: Array<NumberField<CreditCards> | StringField<CreditCards> | OneToManyLink<CreditCards, CreditPaymentMethods> | OneToOneLink<CreditCards, ChartOfAccounts> | OneToOneLink<CreditCards, Countries> | OneToManyLink<CreditCards, BusinessPartners>> = [
    CreditCards.CREDIT_CARD_CODE,
    CreditCards.CREDIT_CARD_NAME,
    CreditCards.GL_ACCOUNT,
    CreditCards.TELEPHONE,
    CreditCards.COMPANY_ID,
    CreditCards.COUNTRY_CODE,
    CreditCards.CREDIT_PAYMENT_METHODS,
    CreditCards.CHART_OF_ACCOUNT,
    CreditCards.COUNTRY,
    CreditCards.BUSINESS_PARTNERS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CreditCards> = new AllFields('*', CreditCards);
  /**
   * All key fields of the CreditCards entity.
   */
  export const _keyFields: Array<Field<CreditCards>> = [CreditCards.CREDIT_CARD_CODE];
  /**
   * Mapping of all key field names to the respective static field property CreditCards.
   */
  export const _keys: { [keys: string]: Field<CreditCards> } = CreditCards._keyFields.reduce((acc: { [keys: string]: Field<CreditCards> }, field: Field<CreditCards>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
