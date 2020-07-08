/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccountSegmentationCategoriesRequestBuilder } from './AccountSegmentationCategoriesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "AccountSegmentationCategories" of service "SAPB1".
 */
export class AccountSegmentationCategories extends Entity implements AccountSegmentationCategoriesType {
  /**
   * Technical entity name for AccountSegmentationCategories.
   */
  static _entityName = 'AccountSegmentationCategories';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AccountSegmentationCategories.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Segment Id.
   * @nullable
   */
  segmentId?: number;
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
   * Short Name.
   * @nullable
   */
  shortName?: string;
  /**
   * One-to-one navigation property to the [[AccountSegmentations]] entity.
   */
  accountSegmentation!: AccountSegmentations;

  /**
   * Returns an entity builder to construct instances `AccountSegmentationCategories`.
   * @returns A builder that constructs instances of entity type `AccountSegmentationCategories`.
   */
  static builder(): EntityBuilderType<AccountSegmentationCategories, AccountSegmentationCategoriesTypeForceMandatory> {
    return Entity.entityBuilder(AccountSegmentationCategories);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AccountSegmentationCategories` entity type.
   * @returns A `AccountSegmentationCategories` request builder.
   */
  static requestBuilder(): AccountSegmentationCategoriesRequestBuilder {
    return new AccountSegmentationCategoriesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccountSegmentationCategories`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AccountSegmentationCategories`.
   */
  static customField(fieldName: string): CustomField<AccountSegmentationCategories> {
    return Entity.customFieldSelector(fieldName, AccountSegmentationCategories);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { AccountSegmentations, AccountSegmentationsType } from './AccountSegmentations';

export interface AccountSegmentationCategoriesType {
  segmentId?: number;
  code?: string;
  name?: string;
  shortName?: string;
  accountSegmentation: AccountSegmentationsType;
}

export interface AccountSegmentationCategoriesTypeForceMandatory {
  segmentId: number;
  code: string;
  name: string;
  shortName: string;
  accountSegmentation: AccountSegmentationsType;
}

export namespace AccountSegmentationCategories {
  /**
   * Static representation of the [[segmentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENT_ID: NumberField<AccountSegmentationCategories> = new NumberField('SegmentID', AccountSegmentationCategories, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<AccountSegmentationCategories> = new StringField('Code', AccountSegmentationCategories, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<AccountSegmentationCategories> = new StringField('Name', AccountSegmentationCategories, 'Edm.String');
  /**
   * Static representation of the [[shortName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHORT_NAME: StringField<AccountSegmentationCategories> = new StringField('ShortName', AccountSegmentationCategories, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountSegmentation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_SEGMENTATION: OneToOneLink<AccountSegmentationCategories, AccountSegmentations> = new OneToOneLink('AccountSegmentation', AccountSegmentationCategories, AccountSegmentations);
  /**
   * All fields of the AccountSegmentationCategories entity.
   */
  export const _allFields: Array<NumberField<AccountSegmentationCategories> | StringField<AccountSegmentationCategories> | OneToOneLink<AccountSegmentationCategories, AccountSegmentations>> = [
    AccountSegmentationCategories.SEGMENT_ID,
    AccountSegmentationCategories.CODE,
    AccountSegmentationCategories.NAME,
    AccountSegmentationCategories.SHORT_NAME,
    AccountSegmentationCategories.ACCOUNT_SEGMENTATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AccountSegmentationCategories> = new AllFields('*', AccountSegmentationCategories);
  /**
   * All key fields of the AccountSegmentationCategories entity.
   */
  export const _keyFields: Array<Field<AccountSegmentationCategories>> = [AccountSegmentationCategories.SEGMENT_ID, AccountSegmentationCategories.CODE];
  /**
   * Mapping of all key field names to the respective static field property AccountSegmentationCategories.
   */
  export const _keys: { [keys: string]: Field<AccountSegmentationCategories> } = AccountSegmentationCategories._keyFields.reduce((acc: { [keys: string]: Field<AccountSegmentationCategories> }, field: Field<AccountSegmentationCategories>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
