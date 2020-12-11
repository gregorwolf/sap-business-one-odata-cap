/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetGroupsRequestBuilder } from './AssetGroupsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AssetGroups" of service "SAPB1".
 */
export class AssetGroups extends EntityV4 implements AssetGroupsType {
  /**
   * Technical entity name for AssetGroups.
   */
  static _entityName = 'AssetGroups';
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
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];

  /**
   * Returns an entity builder to construct instances of `AssetGroups`.
   * @returns A builder that constructs instances of entity type `AssetGroups`.
   */
  static builder(): EntityBuilderType<AssetGroups, AssetGroupsType> {
    return EntityV4.entityBuilder(AssetGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AssetGroups` entity type.
   * @returns A `AssetGroups` request builder.
   */
  static requestBuilder(): AssetGroupsRequestBuilder {
    return new AssetGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AssetGroups`.
   */
  static customField(fieldName: string): CustomFieldV4<AssetGroups> {
    return EntityV4.customFieldSelector(fieldName, AssetGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Items, ItemsType } from './Items';

export interface AssetGroupsType {
  code?: string | null;
  description?: string | null;
  items: ItemsType[];
}

export namespace AssetGroups {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<AssetGroups> = new StringField('Code', AssetGroups, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<AssetGroups> = new StringField('Description', AssetGroups, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<AssetGroups, Items> = new OneToManyLink('Items', AssetGroups, Items);
  /**
   * All fields of the AssetGroups entity.
   */
  export const _allFields: Array<StringField<AssetGroups> | OneToManyLink<AssetGroups, Items>> = [
    AssetGroups.CODE,
    AssetGroups.DESCRIPTION,
    AssetGroups.ITEMS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AssetGroups> = new AllFields('*', AssetGroups);
  /**
   * All key fields of the AssetGroups entity.
   */
  export const _keyFields: Array<Field<AssetGroups>> = [AssetGroups.CODE];
  /**
   * Mapping of all key field names to the respective static field property AssetGroups.
   */
  export const _keys: { [keys: string]: Field<AssetGroups> } = AssetGroups._keyFields.reduce((acc: { [keys: string]: Field<AssetGroups> }, field: Field<AssetGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
