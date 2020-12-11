/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccountCategoryRequestBuilder } from './AccountCategoryRequestBuilder';
import { AccountCategorySourceEnum } from './AccountCategorySourceEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AccountCategory" of service "SAPB1".
 */
export class AccountCategory extends EntityV4 implements AccountCategoryType {
  /**
   * Technical entity name for AccountCategory.
   */
  static _entityName = 'AccountCategory';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Category Code.
   * @nullable
   */
  categoryCode?: number;
  /**
   * Category Name.
   * @nullable
   */
  categoryName?: string;
  /**
   * Category Source.
   * @nullable
   */
  categorySource?: AccountCategorySourceEnum;
  /**
   * One-to-many navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccounts!: ChartOfAccounts[];

  /**
   * Returns an entity builder to construct instances of `AccountCategory`.
   * @returns A builder that constructs instances of entity type `AccountCategory`.
   */
  static builder(): EntityBuilderType<AccountCategory, AccountCategoryType> {
    return EntityV4.entityBuilder(AccountCategory);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AccountCategory` entity type.
   * @returns A `AccountCategory` request builder.
   */
  static requestBuilder(): AccountCategoryRequestBuilder {
    return new AccountCategoryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccountCategory`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AccountCategory`.
   */
  static customField(fieldName: string): CustomFieldV4<AccountCategory> {
    return EntityV4.customFieldSelector(fieldName, AccountCategory);
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

export interface AccountCategoryType {
  categoryCode?: number | null;
  categoryName?: string | null;
  categorySource?: AccountCategorySourceEnum | null;
  chartOfAccounts: ChartOfAccountsType[];
}

export namespace AccountCategory {
  /**
   * Static representation of the [[categoryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_CODE: NumberField<AccountCategory> = new NumberField('CategoryCode', AccountCategory, 'Edm.Int32');
  /**
   * Static representation of the [[categoryName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_NAME: StringField<AccountCategory> = new StringField('CategoryName', AccountCategory, 'Edm.String');
  /**
   * Static representation of the [[categorySource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_SOURCE: EnumField<AccountCategory> = new EnumField('CategorySource', AccountCategory);
  /**
   * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNTS: OneToManyLink<AccountCategory, ChartOfAccounts> = new OneToManyLink('ChartOfAccounts', AccountCategory, ChartOfAccounts);
  /**
   * All fields of the AccountCategory entity.
   */
  export const _allFields: Array<NumberField<AccountCategory> | StringField<AccountCategory> | EnumField<AccountCategory> | OneToManyLink<AccountCategory, ChartOfAccounts>> = [
    AccountCategory.CATEGORY_CODE,
    AccountCategory.CATEGORY_NAME,
    AccountCategory.CATEGORY_SOURCE,
    AccountCategory.CHART_OF_ACCOUNTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AccountCategory> = new AllFields('*', AccountCategory);
  /**
   * All key fields of the AccountCategory entity.
   */
  export const _keyFields: Array<Field<AccountCategory>> = [AccountCategory.CATEGORY_CODE];
  /**
   * Mapping of all key field names to the respective static field property AccountCategory.
   */
  export const _keys: { [keys: string]: Field<AccountCategory> } = AccountCategory._keyFields.reduce((acc: { [keys: string]: Field<AccountCategory> }, field: Field<AccountCategory>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
