/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTaxAuthoritiesRequestBuilder } from './SalesTaxAuthoritiesRequestBuilder';
import { TaxDefinition, TaxDefinitionField } from './TaxDefinition';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "SalesTaxAuthorities" of service "SAPB1".
 */
export class SalesTaxAuthorities extends Entity implements SalesTaxAuthoritiesType {
  /**
   * Technical entity name for SalesTaxAuthorities.
   */
  static _entityName = 'SalesTaxAuthorities';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SalesTaxAuthorities.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Returns an entity builder to construct instances `SalesTaxAuthorities`.
   * @returns A builder that constructs instances of entity type `SalesTaxAuthorities`.
   */
  static builder(): EntityBuilderType<SalesTaxAuthorities, SalesTaxAuthoritiesTypeForceMandatory> {
    return Entity.entityBuilder(SalesTaxAuthorities);
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
  static customField(fieldName: string): CustomField<SalesTaxAuthorities> {
    return Entity.customFieldSelector(fieldName, SalesTaxAuthorities);
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
  useTaxAccount?: string;
  userSignature?: number;
  type?: number;
  aOrRTaxAccount?: string;
  rate?: number;
  aOrPTaxAccount?: string;
  nonDeductiblePrecent?: number;
  nonDeductibleAccount?: string;
  name?: string;
  deferredTaxAccount?: string;
  code?: string;
  minTaxableAmount?: number;
  maxTaxableAmount?: number;
  flatTaxAmount?: number;
  apExpAccount?: string;
  arExpAccount?: string;
  textCode?: number;
  taxDefinitions?: TaxDefinition[];
  chartOfAccount: ChartOfAccountsType;
  user: UsersType;
  salesTaxAuthoritiesType: SalesTaxAuthoritiesTypesType;
}

export interface SalesTaxAuthoritiesTypeForceMandatory {
  useTaxAccount: string;
  userSignature: number;
  type: number;
  aOrRTaxAccount: string;
  rate: number;
  aOrPTaxAccount: string;
  nonDeductiblePrecent: number;
  nonDeductibleAccount: string;
  name: string;
  deferredTaxAccount: string;
  code: string;
  minTaxableAmount: number;
  maxTaxableAmount: number;
  flatTaxAmount: number;
  apExpAccount: string;
  arExpAccount: string;
  textCode: number;
  taxDefinitions: TaxDefinition[];
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
   * Static representation of the [[textCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT_CODE: NumberField<SalesTaxAuthorities> = new NumberField('TextCode', SalesTaxAuthorities, 'Edm.Int32');
  /**
   * Static representation of the [[taxDefinitions]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DEFINITIONS: CollectionField<SalesTaxAuthorities> = new CollectionField('TaxDefinitions', SalesTaxAuthorities, new TaxDefinitionField('', SalesTaxAuthorities));
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
  export const _allFields: Array<StringField<SalesTaxAuthorities> | NumberField<SalesTaxAuthorities> | CollectionField<SalesTaxAuthorities> | OneToOneLink<SalesTaxAuthorities, ChartOfAccounts> | OneToOneLink<SalesTaxAuthorities, Users> | OneToOneLink<SalesTaxAuthorities, SalesTaxAuthoritiesTypes>> = [
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
    SalesTaxAuthorities.AP_EXP_ACCOUNT,
    SalesTaxAuthorities.AR_EXP_ACCOUNT,
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
