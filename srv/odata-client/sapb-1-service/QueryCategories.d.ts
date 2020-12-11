import { QueryCategoriesRequestBuilder } from './QueryCategoriesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "QueryCategories" of service "SAPB1".
 */
export declare class QueryCategories extends EntityV4 implements QueryCategoriesType {
    /**
     * Technical entity name for QueryCategories.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    userQueries: UserQueries[];
    /**
     * Returns an entity builder to construct instances of `QueryCategories`.
     * @returns A builder that constructs instances of entity type `QueryCategories`.
     */
    static builder(): EntityBuilderType<QueryCategories, QueryCategoriesType>;
    /**
     * Returns a request builder to construct requests for operations on the `QueryCategories` entity type.
     * @returns A `QueryCategories` request builder.
     */
    static requestBuilder(): QueryCategoriesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `QueryCategories`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `QueryCategories`.
     */
    static customField(fieldName: string): CustomFieldV4<QueryCategories>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { UserQueries, UserQueriesType } from './UserQueries';
export interface QueryCategoriesType {
    code?: number | null;
    name?: string | null;
    permissions?: string | null;
    userQueries: UserQueriesType[];
}
export declare namespace QueryCategories {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<QueryCategories>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<QueryCategories>;
    /**
     * Static representation of the [[permissions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERMISSIONS: StringField<QueryCategories>;
    /**
     * Static representation of the one-to-many navigation property [[userQueries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_QUERIES: OneToManyLink<QueryCategories, UserQueries>;
    /**
     * All fields of the QueryCategories entity.
     */
    const _allFields: Array<NumberField<QueryCategories> | StringField<QueryCategories> | OneToManyLink<QueryCategories, UserQueries>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<QueryCategories>;
    /**
     * All key fields of the QueryCategories entity.
     */
    const _keyFields: Array<Field<QueryCategories>>;
    /**
     * Mapping of all key field names to the respective static field property QueryCategories.
     */
    const _keys: {
        [keys: string]: Field<QueryCategories>;
    };
}
//# sourceMappingURL=QueryCategories.d.ts.map