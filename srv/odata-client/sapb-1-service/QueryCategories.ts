/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { QueryCategoriesRequestBuilder } from './QueryCategoriesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "QueryCategories" of service "SAPB1".
 */
export class QueryCategories extends EntityV4 implements QueryCategoriesType {
  /**
   * Technical entity name for QueryCategories.
   */
  static _entityName = 'QueryCategories';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Permissions.
   * @nullable
   */
  permissions?: string;
  /**
   * One-to-many navigation property to the [[UserQueries]] entity.
   */
  userQueries!: UserQueries[];

  /**
   * Returns an entity builder to construct instances of `QueryCategories`.
   * @returns A builder that constructs instances of entity type `QueryCategories`.
   */
  static builder(): EntityBuilderType<QueryCategories, QueryCategoriesType> {
    return EntityV4.entityBuilder(QueryCategories);
  }

  /**
   * Returns a request builder to construct requests for operations on the `QueryCategories` entity type.
   * @returns A `QueryCategories` request builder.
   */
  static requestBuilder(): QueryCategoriesRequestBuilder {
    return new QueryCategoriesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `QueryCategories`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `QueryCategories`.
   */
  static customField(fieldName: string): CustomFieldV4<QueryCategories> {
    return EntityV4.customFieldSelector(fieldName, QueryCategories);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { UserQueries, UserQueriesType } from './UserQueries';

export interface QueryCategoriesType {
  code?: number | null;
  name?: string | null;
  permissions?: string | null;
  userQueries: UserQueriesType[];
}

export namespace QueryCategories {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<QueryCategories> = new NumberField('Code', QueryCategories, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<QueryCategories> = new StringField('Name', QueryCategories, 'Edm.String');
  /**
   * Static representation of the [[permissions]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERMISSIONS: StringField<QueryCategories> = new StringField('Permissions', QueryCategories, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[userQueries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_QUERIES: OneToManyLink<QueryCategories, UserQueries> = new OneToManyLink('UserQueries', QueryCategories, UserQueries);
  /**
   * All fields of the QueryCategories entity.
   */
  export const _allFields: Array<NumberField<QueryCategories> | StringField<QueryCategories> | OneToManyLink<QueryCategories, UserQueries>> = [
    QueryCategories.CODE,
    QueryCategories.NAME,
    QueryCategories.PERMISSIONS,
    QueryCategories.USER_QUERIES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<QueryCategories> = new AllFields('*', QueryCategories);
  /**
   * All key fields of the QueryCategories entity.
   */
  export const _keyFields: Array<Field<QueryCategories>> = [QueryCategories.CODE];
  /**
   * Mapping of all key field names to the respective static field property QueryCategories.
   */
  export const _keys: { [keys: string]: Field<QueryCategories> } = QueryCategories._keyFields.reduce((acc: { [keys: string]: Field<QueryCategories> }, field: Field<QueryCategories>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
