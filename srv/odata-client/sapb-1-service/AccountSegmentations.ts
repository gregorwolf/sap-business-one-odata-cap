/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccountSegmentationsRequestBuilder } from './AccountSegmentationsRequestBuilder';
import { AccountSegmentationsCategory } from './AccountSegmentationsCategory';
import { AccountSegmentationTypeEnum } from './AccountSegmentationTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AccountSegmentations" of service "SAPB1".
 */
export class AccountSegmentations extends EntityV4 implements AccountSegmentationsType {
  /**
   * Technical entity name for AccountSegmentations.
   */
  static _entityName = 'AccountSegmentations';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Numerator.
   * @nullable
   */
  numerator?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Size.
   * @nullable
   */
  size?: number;
  /**
   * Type.
   * @nullable
   */
  type?: AccountSegmentationTypeEnum;
  /**
   * Account Segmentations Categories.
   * @nullable
   */
  accountSegmentationsCategories?: AccountSegmentationsCategory[];
  /**
   * One-to-many navigation property to the [[AccountSegmentationCategories]] entity.
   */
  accountSegmentationCategories!: AccountSegmentationCategories[];

  /**
   * Returns an entity builder to construct instances of `AccountSegmentations`.
   * @returns A builder that constructs instances of entity type `AccountSegmentations`.
   */
  static builder(): EntityBuilderType<AccountSegmentations, AccountSegmentationsType> {
    return EntityV4.entityBuilder(AccountSegmentations);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AccountSegmentations` entity type.
   * @returns A `AccountSegmentations` request builder.
   */
  static requestBuilder(): AccountSegmentationsRequestBuilder {
    return new AccountSegmentationsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccountSegmentations`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AccountSegmentations`.
   */
  static customField(fieldName: string): CustomFieldV4<AccountSegmentations> {
    return EntityV4.customFieldSelector(fieldName, AccountSegmentations);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { AccountSegmentationCategories, AccountSegmentationCategoriesType } from './AccountSegmentationCategories';

export interface AccountSegmentationsType {
  numerator?: number | null;
  name?: string | null;
  size?: number | null;
  type?: AccountSegmentationTypeEnum | null;
  accountSegmentationsCategories?: AccountSegmentationsCategory[] | null;
  accountSegmentationCategories: AccountSegmentationCategoriesType[];
}

export namespace AccountSegmentations {
  /**
   * Static representation of the [[numerator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMERATOR: NumberField<AccountSegmentations> = new NumberField('Numerator', AccountSegmentations, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<AccountSegmentations> = new StringField('Name', AccountSegmentations, 'Edm.String');
  /**
   * Static representation of the [[size]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIZE: NumberField<AccountSegmentations> = new NumberField('Size', AccountSegmentations, 'Edm.Int32');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: EnumField<AccountSegmentations> = new EnumField('Type', AccountSegmentations);
  /**
   * Static representation of the [[accountSegmentationsCategories]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_SEGMENTATIONS_CATEGORIES: CollectionField<AccountSegmentations, AccountSegmentationsCategory> = new CollectionField('AccountSegmentationsCategories', AccountSegmentations, AccountSegmentationsCategory);
  /**
   * Static representation of the one-to-many navigation property [[accountSegmentationCategories]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_SEGMENTATION_CATEGORIES: OneToManyLink<AccountSegmentations, AccountSegmentationCategories> = new OneToManyLink('AccountSegmentationCategories', AccountSegmentations, AccountSegmentationCategories);
  /**
   * All fields of the AccountSegmentations entity.
   */
  export const _allFields: Array<NumberField<AccountSegmentations> | StringField<AccountSegmentations> | EnumField<AccountSegmentations> | CollectionField<AccountSegmentations, AccountSegmentationsCategory> | OneToManyLink<AccountSegmentations, AccountSegmentationCategories>> = [
    AccountSegmentations.NUMERATOR,
    AccountSegmentations.NAME,
    AccountSegmentations.SIZE,
    AccountSegmentations.TYPE,
    AccountSegmentations.ACCOUNT_SEGMENTATIONS_CATEGORIES,
    AccountSegmentations.ACCOUNT_SEGMENTATION_CATEGORIES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AccountSegmentations> = new AllFields('*', AccountSegmentations);
  /**
   * All key fields of the AccountSegmentations entity.
   */
  export const _keyFields: Array<Field<AccountSegmentations>> = [AccountSegmentations.NUMERATOR];
  /**
   * Mapping of all key field names to the respective static field property AccountSegmentations.
   */
  export const _keys: { [keys: string]: Field<AccountSegmentations> } = AccountSegmentations._keyFields.reduce((acc: { [keys: string]: Field<AccountSegmentations> }, field: Field<AccountSegmentations>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
