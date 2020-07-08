/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseTypesRequestBuilder } from './ExpenseTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ExpenseTypes" of service "SAPB1".
 */
export class ExpenseTypes extends Entity implements ExpenseTypesType {
  /**
   * Technical entity name for ExpenseTypes.
   */
  static _entityName = 'ExpenseTypes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExpenseTypes.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Expense Type.
   * @nullable
   */
  expenseType?: string;
  /**
   * Expense Name.
   * @nullable
   */
  expenseName?: string;
  /**
   * Expense Account.
   * @nullable
   */
  expenseAccount?: string;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: string;
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[SalesTaxCodes]] entity.
   */
  salesTaxCode!: SalesTaxCodes;

  /**
   * Returns an entity builder to construct instances `ExpenseTypes`.
   * @returns A builder that constructs instances of entity type `ExpenseTypes`.
   */
  static builder(): EntityBuilderType<ExpenseTypes, ExpenseTypesTypeForceMandatory> {
    return Entity.entityBuilder(ExpenseTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExpenseTypes` entity type.
   * @returns A `ExpenseTypes` request builder.
   */
  static requestBuilder(): ExpenseTypesRequestBuilder {
    return new ExpenseTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExpenseTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExpenseTypes`.
   */
  static customField(fieldName: string): CustomField<ExpenseTypes> {
    return Entity.customFieldSelector(fieldName, ExpenseTypes);
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
import { SalesTaxCodes, SalesTaxCodesType } from './SalesTaxCodes';

export interface ExpenseTypesType {
  expenseType?: string;
  expenseName?: string;
  expenseAccount?: string;
  vatGroup?: string;
  chartOfAccount: ChartOfAccountsType;
  salesTaxCode: SalesTaxCodesType;
}

export interface ExpenseTypesTypeForceMandatory {
  expenseType: string;
  expenseName: string;
  expenseAccount: string;
  vatGroup: string;
  chartOfAccount: ChartOfAccountsType;
  salesTaxCode: SalesTaxCodesType;
}

export namespace ExpenseTypes {
  /**
   * Static representation of the [[expenseType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENSE_TYPE: StringField<ExpenseTypes> = new StringField('ExpenseType', ExpenseTypes, 'Edm.String');
  /**
   * Static representation of the [[expenseName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENSE_NAME: StringField<ExpenseTypes> = new StringField('ExpenseName', ExpenseTypes, 'Edm.String');
  /**
   * Static representation of the [[expenseAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENSE_ACCOUNT: StringField<ExpenseTypes> = new StringField('ExpenseAccount', ExpenseTypes, 'Edm.String');
  /**
   * Static representation of the [[vatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUP: StringField<ExpenseTypes> = new StringField('VatGroup', ExpenseTypes, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<ExpenseTypes, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', ExpenseTypes, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_TAX_CODE: OneToOneLink<ExpenseTypes, SalesTaxCodes> = new OneToOneLink('SalesTaxCode', ExpenseTypes, SalesTaxCodes);
  /**
   * All fields of the ExpenseTypes entity.
   */
  export const _allFields: Array<StringField<ExpenseTypes> | OneToOneLink<ExpenseTypes, ChartOfAccounts> | OneToOneLink<ExpenseTypes, SalesTaxCodes>> = [
    ExpenseTypes.EXPENSE_TYPE,
    ExpenseTypes.EXPENSE_NAME,
    ExpenseTypes.EXPENSE_ACCOUNT,
    ExpenseTypes.VAT_GROUP,
    ExpenseTypes.CHART_OF_ACCOUNT,
    ExpenseTypes.SALES_TAX_CODE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExpenseTypes> = new AllFields('*', ExpenseTypes);
  /**
   * All key fields of the ExpenseTypes entity.
   */
  export const _keyFields: Array<Field<ExpenseTypes>> = [ExpenseTypes.EXPENSE_TYPE];
  /**
   * Mapping of all key field names to the respective static field property ExpenseTypes.
   */
  export const _keys: { [keys: string]: Field<ExpenseTypes> } = ExpenseTypes._keyFields.reduce((acc: { [keys: string]: Field<ExpenseTypes> }, field: Field<ExpenseTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
