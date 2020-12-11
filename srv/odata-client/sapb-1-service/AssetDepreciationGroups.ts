/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetDepreciationGroupsRequestBuilder } from './AssetDepreciationGroupsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AssetDepreciationGroups" of service "SAPB1".
 */
export class AssetDepreciationGroups extends EntityV4 implements AssetDepreciationGroupsType {
  /**
   * Technical entity name for AssetDepreciationGroups.
   */
  static _entityName = 'AssetDepreciationGroups';
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
   * Group.
   * @nullable
   */
  group?: string;
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];

  /**
   * Returns an entity builder to construct instances of `AssetDepreciationGroups`.
   * @returns A builder that constructs instances of entity type `AssetDepreciationGroups`.
   */
  static builder(): EntityBuilderType<AssetDepreciationGroups, AssetDepreciationGroupsType> {
    return EntityV4.entityBuilder(AssetDepreciationGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AssetDepreciationGroups` entity type.
   * @returns A `AssetDepreciationGroups` request builder.
   */
  static requestBuilder(): AssetDepreciationGroupsRequestBuilder {
    return new AssetDepreciationGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetDepreciationGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AssetDepreciationGroups`.
   */
  static customField(fieldName: string): CustomFieldV4<AssetDepreciationGroups> {
    return EntityV4.customFieldSelector(fieldName, AssetDepreciationGroups);
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

export interface AssetDepreciationGroupsType {
  code?: string | null;
  description?: string | null;
  group?: string | null;
  items: ItemsType[];
}

export namespace AssetDepreciationGroups {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<AssetDepreciationGroups> = new StringField('Code', AssetDepreciationGroups, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<AssetDepreciationGroups> = new StringField('Description', AssetDepreciationGroups, 'Edm.String');
  /**
   * Static representation of the [[group]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP: StringField<AssetDepreciationGroups> = new StringField('Group', AssetDepreciationGroups, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<AssetDepreciationGroups, Items> = new OneToManyLink('Items', AssetDepreciationGroups, Items);
  /**
   * All fields of the AssetDepreciationGroups entity.
   */
  export const _allFields: Array<StringField<AssetDepreciationGroups> | OneToManyLink<AssetDepreciationGroups, Items>> = [
    AssetDepreciationGroups.CODE,
    AssetDepreciationGroups.DESCRIPTION,
    AssetDepreciationGroups.GROUP,
    AssetDepreciationGroups.ITEMS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AssetDepreciationGroups> = new AllFields('*', AssetDepreciationGroups);
  /**
   * All key fields of the AssetDepreciationGroups entity.
   */
  export const _keyFields: Array<Field<AssetDepreciationGroups>> = [AssetDepreciationGroups.CODE];
  /**
   * Mapping of all key field names to the respective static field property AssetDepreciationGroups.
   */
  export const _keys: { [keys: string]: Field<AssetDepreciationGroups> } = AssetDepreciationGroups._keyFields.reduce((acc: { [keys: string]: Field<AssetDepreciationGroups> }, field: Field<AssetDepreciationGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
