/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccrualTypesRequestBuilder } from './AccrualTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "AccrualTypes" of service "SAPB1".
 */
export class AccrualTypes extends Entity implements AccrualTypesType {
  /**
   * Technical entity name for AccrualTypes.
   */
  static _entityName = 'AccrualTypes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AccrualTypes.
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
   * Posting Account.
   * @nullable
   */
  postingAccount?: string;
  /**
   * Calculation Account.
   * @nullable
   */
  calculationAccount?: string;
  /**
   * Interim Account.
   * @nullable
   */
  interimAccount?: string;
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;

  /**
   * Returns an entity builder to construct instances `AccrualTypes`.
   * @returns A builder that constructs instances of entity type `AccrualTypes`.
   */
  static builder(): EntityBuilderType<AccrualTypes, AccrualTypesTypeForceMandatory> {
    return Entity.entityBuilder(AccrualTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AccrualTypes` entity type.
   * @returns A `AccrualTypes` request builder.
   */
  static requestBuilder(): AccrualTypesRequestBuilder {
    return new AccrualTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccrualTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AccrualTypes`.
   */
  static customField(fieldName: string): CustomField<AccrualTypes> {
    return Entity.customFieldSelector(fieldName, AccrualTypes);
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

export interface AccrualTypesType {
  code?: string;
  name?: string;
  postingAccount?: string;
  calculationAccount?: string;
  interimAccount?: string;
  chartOfAccount: ChartOfAccountsType;
}

export interface AccrualTypesTypeForceMandatory {
  code: string;
  name: string;
  postingAccount: string;
  calculationAccount: string;
  interimAccount: string;
  chartOfAccount: ChartOfAccountsType;
}

export namespace AccrualTypes {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<AccrualTypes> = new StringField('Code', AccrualTypes, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<AccrualTypes> = new StringField('Name', AccrualTypes, 'Edm.String');
  /**
   * Static representation of the [[postingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_ACCOUNT: StringField<AccrualTypes> = new StringField('PostingAccount', AccrualTypes, 'Edm.String');
  /**
   * Static representation of the [[calculationAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATION_ACCOUNT: StringField<AccrualTypes> = new StringField('CalculationAccount', AccrualTypes, 'Edm.String');
  /**
   * Static representation of the [[interimAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERIM_ACCOUNT: StringField<AccrualTypes> = new StringField('InterimAccount', AccrualTypes, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<AccrualTypes, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', AccrualTypes, ChartOfAccounts);
  /**
   * All fields of the AccrualTypes entity.
   */
  export const _allFields: Array<StringField<AccrualTypes> | OneToOneLink<AccrualTypes, ChartOfAccounts>> = [
    AccrualTypes.CODE,
    AccrualTypes.NAME,
    AccrualTypes.POSTING_ACCOUNT,
    AccrualTypes.CALCULATION_ACCOUNT,
    AccrualTypes.INTERIM_ACCOUNT,
    AccrualTypes.CHART_OF_ACCOUNT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AccrualTypes> = new AllFields('*', AccrualTypes);
  /**
   * All key fields of the AccrualTypes entity.
   */
  export const _keyFields: Array<Field<AccrualTypes>> = [AccrualTypes.CODE];
  /**
   * Mapping of all key field names to the respective static field property AccrualTypes.
   */
  export const _keys: { [keys: string]: Field<AccrualTypes> } = AccrualTypes._keyFields.reduce((acc: { [keys: string]: Field<AccrualTypes> }, field: Field<AccrualTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
