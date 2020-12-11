import { UserQueriesRequestBuilder } from './UserQueriesRequestBuilder';
import { UserQueryTypeEnum } from './UserQueryTypeEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "UserQueries" of service "SAPB1".
 */
export declare class UserQueries extends EntityV4 implements UserQueriesType {
    /**
     * Technical entity name for UserQueries.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Query Type.
     * @nullable
     */
    queryType?: UserQueryTypeEnum;
    /**
     * One-to-one navigation property to the [[QueryCategories]] entity.
     */
    queryCategory2: QueryCategories;
    /**
     * Returns an entity builder to construct instances of `UserQueries`.
     * @returns A builder that constructs instances of entity type `UserQueries`.
     */
    static builder(): EntityBuilderType<UserQueries, UserQueriesType>;
    /**
     * Returns a request builder to construct requests for operations on the `UserQueries` entity type.
     * @returns A `UserQueries` request builder.
     */
    static requestBuilder(): UserQueriesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserQueries`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserQueries`.
     */
    static customField(fieldName: string): CustomFieldV4<UserQueries>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { QueryCategories, QueryCategoriesType } from './QueryCategories';
export interface UserQueriesType {
    internalKey?: number | null;
    queryCategory?: number | null;
    queryDescription?: string | null;
    query?: string | null;
    procedureAlias?: string | null;
    procedureName?: string | null;
    queryType?: UserQueryTypeEnum | null;
    queryCategory2: QueryCategoriesType;
}
export declare namespace UserQueries {
    /**
     * Static representation of the [[internalKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_KEY: NumberField<UserQueries>;
    /**
     * Static representation of the [[queryCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUERY_CATEGORY: NumberField<UserQueries>;
    /**
     * Static representation of the [[queryDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUERY_DESCRIPTION: StringField<UserQueries>;
    /**
     * Static representation of the [[query]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUERY: StringField<UserQueries>;
    /**
     * Static representation of the [[procedureAlias]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCEDURE_ALIAS: StringField<UserQueries>;
    /**
     * Static representation of the [[procedureName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCEDURE_NAME: StringField<UserQueries>;
    /**
     * Static representation of the [[queryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUERY_TYPE: EnumField<UserQueries>;
    /**
     * Static representation of the one-to-one navigation property [[queryCategory2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUERY_CATEGORY_2: OneToOneLink<UserQueries, QueryCategories>;
    /**
     * All fields of the UserQueries entity.
     */
    const _allFields: Array<NumberField<UserQueries> | StringField<UserQueries> | EnumField<UserQueries> | OneToOneLink<UserQueries, QueryCategories>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UserQueries>;
    /**
     * All key fields of the UserQueries entity.
     */
    const _keyFields: Array<Field<UserQueries>>;
    /**
     * Mapping of all key field names to the respective static field property UserQueries.
     */
    const _keys: {
        [keys: string]: Field<UserQueries>;
    };
}
//# sourceMappingURL=UserQueries.d.ts.map