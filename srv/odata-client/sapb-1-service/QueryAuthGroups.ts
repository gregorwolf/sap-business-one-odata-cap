/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { QueryAuthGroupsRequestBuilder } from './QueryAuthGroupsRequestBuilder';
import { CategoryGroup } from './CategoryGroup';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "QueryAuthGroups" of service "SAPB1".
 */
export class QueryAuthGroups extends EntityV4 implements QueryAuthGroupsType {
  /**
   * Technical entity name for QueryAuthGroups.
   */
  static _entityName = 'QueryAuthGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Auth Group Code.
   * @nullable
   */
  authGroupCode?: string;
  /**
   * Auth Group Des.
   * @nullable
   */
  authGroupDes?: string;
  /**
   * Auth Group Id.
   * @nullable
   */
  authGroupId?: number;
  /**
   * Category Group Collection.
   * @nullable
   */
  categoryGroupCollection?: CategoryGroup[];

  /**
   * Returns an entity builder to construct instances of `QueryAuthGroups`.
   * @returns A builder that constructs instances of entity type `QueryAuthGroups`.
   */
  static builder(): EntityBuilderType<QueryAuthGroups, QueryAuthGroupsType> {
    return EntityV4.entityBuilder(QueryAuthGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `QueryAuthGroups` entity type.
   * @returns A `QueryAuthGroups` request builder.
   */
  static requestBuilder(): QueryAuthGroupsRequestBuilder {
    return new QueryAuthGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `QueryAuthGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `QueryAuthGroups`.
   */
  static customField(fieldName: string): CustomFieldV4<QueryAuthGroups> {
    return EntityV4.customFieldSelector(fieldName, QueryAuthGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface QueryAuthGroupsType {
  authGroupCode?: string | null;
  authGroupDes?: string | null;
  authGroupId?: number | null;
  categoryGroupCollection?: CategoryGroup[] | null;
}

export namespace QueryAuthGroups {
  /**
   * Static representation of the [[authGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTH_GROUP_CODE: StringField<QueryAuthGroups> = new StringField('AuthGroupCode', QueryAuthGroups, 'Edm.String');
  /**
   * Static representation of the [[authGroupDes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTH_GROUP_DES: StringField<QueryAuthGroups> = new StringField('AuthGroupDes', QueryAuthGroups, 'Edm.String');
  /**
   * Static representation of the [[authGroupId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTH_GROUP_ID: NumberField<QueryAuthGroups> = new NumberField('AuthGroupId', QueryAuthGroups, 'Edm.Int32');
  /**
   * Static representation of the [[categoryGroupCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_GROUP_COLLECTION: CollectionField<QueryAuthGroups, CategoryGroup> = new CollectionField('CategoryGroupCollection', QueryAuthGroups, CategoryGroup);
  /**
   * All fields of the QueryAuthGroups entity.
   */
  export const _allFields: Array<StringField<QueryAuthGroups> | NumberField<QueryAuthGroups> | CollectionField<QueryAuthGroups, CategoryGroup>> = [
    QueryAuthGroups.AUTH_GROUP_CODE,
    QueryAuthGroups.AUTH_GROUP_DES,
    QueryAuthGroups.AUTH_GROUP_ID,
    QueryAuthGroups.CATEGORY_GROUP_COLLECTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<QueryAuthGroups> = new AllFields('*', QueryAuthGroups);
  /**
   * All key fields of the QueryAuthGroups entity.
   */
  export const _keyFields: Array<Field<QueryAuthGroups>> = [QueryAuthGroups.AUTH_GROUP_ID];
  /**
   * Mapping of all key field names to the respective static field property QueryAuthGroups.
   */
  export const _keys: { [keys: string]: Field<QueryAuthGroups> } = QueryAuthGroups._keyFields.reduce((acc: { [keys: string]: Field<QueryAuthGroups> }, field: Field<QueryAuthGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
