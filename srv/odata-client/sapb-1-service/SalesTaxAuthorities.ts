/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTaxAuthoritiesRequestBuilder } from './SalesTaxAuthoritiesRequestBuilder';
import { TaxDefinition } from './TaxDefinition';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SalesTaxAuthorities" of service "SAPB1".
 */
export class SalesTaxAuthorities extends EntityV4 implements SalesTaxAuthoritiesType {
  /**
   * Technical entity name for SalesTaxAuthorities.
   */
  static _entityName = 'SalesTaxAuthorities';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Use Tax Account.
   * @nullable
   */
  useTaxAccount?: string;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: number;
  /**
   * Type.
   * @nullable
   */
  type?: number;
  /**
   * A Or R Tax Account.
   * @nullable
   */
  aOrRTaxAccount?: string;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
  /**
   * A Or P Tax Account.
   * @nullable
   */
  aOrPTaxAccount?: string;
  /**
   * Non Deductible Precent.
   * @nullable
   */
  nonDeductiblePrecent?: number;
  /**
   * Non Deductible Account.
   * @nullable
   */
  nonDeductibleAccount?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Deferred Tax Account.
   * @nullable
   */
  deferredTaxAccount?: string;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Min Taxable Amount.
   * @nullable
   */
  minTaxableAmount?: number;
  /**
   * Max Taxable Amount.
   * @nullable
   */
  maxTaxableAmount?: number;
  /**
   * Flat Tax Amount.
   * @nullable
   */
  flatTaxAmount?: number;
  /**
   * Incl In Price.
   * @nullable
   */
  inclInPrice?: BoYesNoEnum;
  /**
   * Exempt.
   * @nullable
   */
  exempt?: BoYesNoEnum;
  /**
   * Ap Exp Account.
   * @nullable
   */
  apExpAccount?: string;
  /**
   * Ar Exp Account.
   * @nullable
   */
  arExpAccount?: string;
  /**
   * Incl In Gross Revenue.
   * @nullable
   */
  inclInGrossRevenue?: BoYesNoEnum;
  /**
   * Text Code.
   * @nullable
   */
  textCode?: number;
  /**
   * Tax Definitions.
   * @nullable
   */
  taxDefinitions?: TaxDefinition[];
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;
  /**
   * One-to-one navigation property to the [[SalesTaxAuthoritiesTypes]] entity.
   */
  salesTaxAuthoritiesType!: SalesTaxAuthoritiesTypes;

  /**
   * Returns an entity builder to construct instances of `SalesTaxAuthorities`.
   * @returns A builder that constructs instances of entity type `SalesTaxAuthorities`.
   */
  static builder(): EntityBuilderType<SalesTaxAuthorities, SalesTaxAuthoritiesType> {
    return EntityV4.entityBuilder(SalesTaxAuthorities);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesTaxAuthorities` entity type.
   * @returns A `SalesTaxAuthorities` request builder.
   */
  static requestBuilder(): SalesTaxAuthoritiesRequestBuilder {
    return new SalesTaxAuthoritiesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesTaxAuthorities`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesTaxAuthorities`.
   */
  static customField(fieldName: string): CustomFieldV4<SalesTaxAuthorities> {
    return EntityV4.customFieldSelector(fieldName, SalesTaxAuthorities);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Users, UsersType } from './Users';
import { SalesTaxAuthoritiesTypes, SalesTaxAuthoritiesTypesType } from './SalesTaxAuthoritiesTypes';

export interface SalesTaxAuthoritiesType {
  useTaxAccount?: string | null;
  userSignature?: number | null;
  type?: number | null;
  aOrRTaxAccount?: string | null;
  rate?: number | null;
  aOrPTaxAccount?: string | null;
  nonDeductiblePrecent?: number | null;
  nonDeductibleAccount?: string | null;
  name?: string | null;
  deferredTaxAccount?: string | null;
  code?: string | null;
  minTaxableAmount?: number | null;
  maxTaxableAmount?: number | null;
  flatTaxAmount?: number | null;
  inclInPrice?: BoYesNoEnum | null;
  exempt?: BoYesNoEnum | null;
  apExpAccount?: string | null;
  arExpAccount?: string | null;
  inclInGrossRevenue?: BoYesNoEnum | null;
  textCode?: number | null;
  taxDefinitions?: TaxDefinition[] | null;
  chartOfAccount: ChartOfAccountsType;
  user: UsersType;
  salesTaxAuthoritiesType: SalesTaxAuthoritiesTypesType;
}

export namespace SalesTaxAuthorities {
  /**
   * Static representation of the [[useTaxAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_TAX_ACCOUNT: StringField<SalesTaxAuthorities> = new StringField('UseTaxAccount', SalesTaxAuthorities, 'Edm.String');
  /**
   * Static representation of the [[userSignature]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SIGNATURE: NumberField<SalesTaxAuthorities> = new NumberField('UserSignature', SalesTaxAuthorities, 'Edm.Int32');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: NumberField<SalesTaxAuthorities> = new NumberField('Type', SalesTaxAuthorities, 'Edm.Int32');
  /**
   * Static representation of the [[aOrRTaxAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const A_OR_R_TAX_ACCOUNT: StringField<SalesTaxAuthorities> = new StringField('AOrRTaxAccount', SalesTaxAuthorities, 'Edm.String');
  /**
   * Static representation of the [[rate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATE: NumberField<SalesTaxAuthorities> = new NumberField('Rate', SalesTaxAuthorities, 'Edm.Double');
  /**
   * Static representation of the [[aOrPTaxAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const A_OR_P_TAX_ACCOUNT: StringField<SalesTaxAuthorities> = new StringField('AOrPTaxAccount', SalesTaxAuthorities, 'Edm.String');
  /**
   * Static representation of the [[nonDeductiblePrecent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NON_DEDUCTIBLE_PRECENT: NumberField<SalesTaxAuthorities> = new NumberField('NonDeductiblePrecent', SalesTaxAuthorities, 'Edm.Double');
  /**
   * Static representation of the [[nonDeductibleAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NON_DEDUCTIBLE_ACCOUNT: StringField<SalesTaxAuthorities> = new StringField('NonDeductibleAccount', SalesTaxAuthorities, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<SalesTaxAuthorities> = new StringField('Name', SalesTaxAuthorities, 'Edm.String');
  /**
   * Static representation of the [[deferredTaxAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFERRED_TAX_ACCOUNT: StringField<SalesTaxAuthorities> = new StringField('DeferredTaxAccount', SalesTaxAuthorities, 'Edm.String');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<SalesTaxAuthorities> = new StringField('Code', SalesTaxAuthorities, 'Edm.String');
  /**
   * Static representation of the [[minTaxableAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIN_TAXABLE_AMOUNT: NumberField<SalesTaxAuthorities> = new NumberField('MinTaxableAmount', SalesTaxAuthorities, 'Edm.Double');
  /**
   * Static representation of the [[maxTaxableAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_TAXABLE_AMOUNT: NumberField<SalesTaxAuthorities> = new NumberField('MaxTaxableAmount', SalesTaxAuthorities, 'Edm.Double');
  /**
   * Static representation of the [[flatTaxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAT_TAX_AMOUNT: NumberField<SalesTaxAuthorities> = new NumberField('FlatTaxAmount', SalesTaxAuthorities, 'Edm.Double');
  /**
   * Static representation of the [[inclInPrice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCL_IN_PRICE: EnumField<SalesTaxAuthorities> = new EnumField('InclInPrice', SalesTaxAuthorities);
  /**
   * Static representation of the [[exempt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPT: EnumField<SalesTaxAuthorities> = new EnumField('Exempt', SalesTaxAuthorities);
  /**
   * Static representation of the [[apExpAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AP_EXP_ACCOUNT: StringField<SalesTaxAuthorities> = new StringField('APExpAccount', SalesTaxAuthorities, 'Edm.String');
  /**
   * Static representation of the [[arExpAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AR_EXP_ACCOUNT: StringField<SalesTaxAuthorities> = new StringField('ARExpAccount', SalesTaxAuthorities, 'Edm.String');
  /**
   * Static representation of the [[inclInGrossRevenue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCL_IN_GROSS_REVENUE: EnumField<SalesTaxAuthorities> = new EnumField('InclInGrossRevenue', SalesTaxAuthorities);
  /**
   * Static representation of the [[textCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT_CODE: NumberField<SalesTaxAuthorities> = new NumberField('TextCode', SalesTaxAuthorities, 'Edm.Int32');
  /**
   * Static representation of the [[taxDefinitions]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DEFINITIONS: CollectionField<SalesTaxAuthorities, TaxDefinition> = new CollectionField('TaxDefinitions', SalesTaxAuthorities, TaxDefinition);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<SalesTaxAuthorities, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', SalesTaxAuthorities, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<SalesTaxAuthorities, Users> = new OneToOneLink('User', SalesTaxAuthorities, Users);
  /**
   * Static representation of the one-to-one navigation property [[salesTaxAuthoritiesType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_TAX_AUTHORITIES_TYPE: OneToOneLink<SalesTaxAuthorities, SalesTaxAuthoritiesTypes> = new OneToOneLink('SalesTaxAuthoritiesType', SalesTaxAuthorities, SalesTaxAuthoritiesTypes);
  /**
   * All fields of the SalesTaxAuthorities entity.
   */
  export const _allFields: Array<StringField<SalesTaxAuthorities> | NumberField<SalesTaxAuthorities> | EnumField<SalesTaxAuthorities> | CollectionField<SalesTaxAuthorities, TaxDefinition> | OneToOneLink<SalesTaxAuthorities, ChartOfAccounts> | OneToOneLink<SalesTaxAuthorities, Users> | OneToOneLink<SalesTaxAuthorities, SalesTaxAuthoritiesTypes>> = [
    SalesTaxAuthorities.USE_TAX_ACCOUNT,
    SalesTaxAuthorities.USER_SIGNATURE,
    SalesTaxAuthorities.TYPE,
    SalesTaxAuthorities.A_OR_R_TAX_ACCOUNT,
    SalesTaxAuthorities.RATE,
    SalesTaxAuthorities.A_OR_P_TAX_ACCOUNT,
    SalesTaxAuthorities.NON_DEDUCTIBLE_PRECENT,
    SalesTaxAuthorities.NON_DEDUCTIBLE_ACCOUNT,
    SalesTaxAuthorities.NAME,
    SalesTaxAuthorities.DEFERRED_TAX_ACCOUNT,
    SalesTaxAuthorities.CODE,
    SalesTaxAuthorities.MIN_TAXABLE_AMOUNT,
    SalesTaxAuthorities.MAX_TAXABLE_AMOUNT,
    SalesTaxAuthorities.FLAT_TAX_AMOUNT,
    SalesTaxAuthorities.INCL_IN_PRICE,
    SalesTaxAuthorities.EXEMPT,
    SalesTaxAuthorities.AP_EXP_ACCOUNT,
    SalesTaxAuthorities.AR_EXP_ACCOUNT,
    SalesTaxAuthorities.INCL_IN_GROSS_REVENUE,
    SalesTaxAuthorities.TEXT_CODE,
    SalesTaxAuthorities.TAX_DEFINITIONS,
    SalesTaxAuthorities.CHART_OF_ACCOUNT,
    SalesTaxAuthorities.USER,
    SalesTaxAuthorities.SALES_TAX_AUTHORITIES_TYPE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesTaxAuthorities> = new AllFields('*', SalesTaxAuthorities);
  /**
   * All key fields of the SalesTaxAuthorities entity.
   */
  export const _keyFields: Array<Field<SalesTaxAuthorities>> = [SalesTaxAuthorities.TYPE, SalesTaxAuthorities.CODE];
  /**
   * Mapping of all key field names to the respective static field property SalesTaxAuthorities.
   */
  export const _keys: { [keys: string]: Field<SalesTaxAuthorities> } = SalesTaxAuthorities._keyFields.reduce((acc: { [keys: string]: Field<SalesTaxAuthorities> }, field: Field<SalesTaxAuthorities>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
