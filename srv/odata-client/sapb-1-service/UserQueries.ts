/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserQueriesRequestBuilder } from './UserQueriesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "UserQueries" of service "SAPB1".
 */
export class UserQueries extends Entity implements UserQueriesType {
  /**
   * Technical entity name for UserQueries.
   */
  static _entityName = 'UserQueries';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for UserQueries.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Internal Key.
   * @nullable
   */
  internalKey?: number;
  /**
   * Query Category.
   * @nullable
   */
  queryCategory?: number;
  /**
   * Query Description.
   * @nullable
   */
  queryDescription?: string;
  /**
   * Query.
   * @nullable
   */
  query?: string;
  /**
   * Procedure Alias.
   * @nullable
   */
  procedureAlias?: string;
  /**
   * Procedure Name.
   * @nullable
   */
  procedureName?: string;
  /**
   * One-to-one navigation property to the [[QueryCategories]] entity.
   */
  queryCategory2!: QueryCategories;

  /**
   * Returns an entity builder to construct instances `UserQueries`.
   * @returns A builder that constructs instances of entity type `UserQueries`.
   */
  static builder(): EntityBuilderType<UserQueries, UserQueriesTypeForceMandatory> {
    return Entity.entityBuilder(UserQueries);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UserQueries` entity type.
   * @returns A `UserQueries` request builder.
   */
  static requestBuilder(): UserQueriesRequestBuilder {
    return new UserQueriesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserQueries`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UserQueries`.
   */
  static customField(fieldName: string): CustomField<UserQueries> {
    return Entity.customFieldSelector(fieldName, UserQueries);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { QueryCategories, QueryCategoriesType } from './QueryCategories';

export interface UserQueriesType {
  internalKey?: number;
  queryCategory?: number;
  queryDescription?: string;
  query?: string;
  procedureAlias?: string;
  procedureName?: string;
  queryCategory2: QueryCategoriesType;
}

export interface UserQueriesTypeForceMandatory {
  internalKey: number;
  queryCategory: number;
  queryDescription: string;
  query: string;
  procedureAlias: string;
  procedureName: string;
  queryCategory2: QueryCategoriesType;
}

export namespace UserQueries {
  /**
   * Static representation of the [[internalKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_KEY: NumberField<UserQueries> = new NumberField('InternalKey', UserQueries, 'Edm.Int32');
  /**
   * Static representation of the [[queryCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUERY_CATEGORY: NumberField<UserQueries> = new NumberField('QueryCategory', UserQueries, 'Edm.Int32');
  /**
   * Static representation of the [[queryDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUERY_DESCRIPTION: StringField<UserQueries> = new StringField('QueryDescription', UserQueries, 'Edm.String');
  /**
   * Static representation of the [[query]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUERY: StringField<UserQueries> = new StringField('Query', UserQueries, 'Edm.String');
  /**
   * Static representation of the [[procedureAlias]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCEDURE_ALIAS: StringField<UserQueries> = new StringField('ProcedureAlias', UserQueries, 'Edm.String');
  /**
   * Static representation of the [[procedureName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCEDURE_NAME: StringField<UserQueries> = new StringField('ProcedureName', UserQueries, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[queryCategory2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUERY_CATEGORY_2: OneToOneLink<UserQueries, QueryCategories> = new OneToOneLink('QueryCategory2', UserQueries, QueryCategories);
  /**
   * All fields of the UserQueries entity.
   */
  export const _allFields: Array<NumberField<UserQueries> | StringField<UserQueries> | OneToOneLink<UserQueries, QueryCategories>> = [
    UserQueries.INTERNAL_KEY,
    UserQueries.QUERY_CATEGORY,
    UserQueries.QUERY_DESCRIPTION,
    UserQueries.QUERY,
    UserQueries.PROCEDURE_ALIAS,
    UserQueries.PROCEDURE_NAME,
    UserQueries.QUERY_CATEGORY_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UserQueries> = new AllFields('*', UserQueries);
  /**
   * All key fields of the UserQueries entity.
   */
  export const _keyFields: Array<Field<UserQueries>> = [UserQueries.INTERNAL_KEY, UserQueries.QUERY_CATEGORY];
  /**
   * Mapping of all key field names to the respective static field property UserQueries.
   */
  export const _keys: { [keys: string]: Field<UserQueries> } = UserQueries._keyFields.reduce((acc: { [keys: string]: Field<UserQueries> }, field: Field<UserQueries>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
