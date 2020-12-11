import { QueryAuthGroupsRequestBuilder } from './QueryAuthGroupsRequestBuilder';
import { CategoryGroup } from './CategoryGroup';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "QueryAuthGroups" of service "SAPB1".
 */
export declare class QueryAuthGroups extends EntityV4 implements QueryAuthGroupsType {
    /**
     * Technical entity name for QueryAuthGroups.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    static builder(): EntityBuilderType<QueryAuthGroups, QueryAuthGroupsType>;
    /**
     * Returns a request builder to construct requests for operations on the `QueryAuthGroups` entity type.
     * @returns A `QueryAuthGroups` request builder.
     */
    static requestBuilder(): QueryAuthGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `QueryAuthGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `QueryAuthGroups`.
     */
    static customField(fieldName: string): CustomFieldV4<QueryAuthGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface QueryAuthGroupsType {
    authGroupCode?: string | null;
    authGroupDes?: string | null;
    authGroupId?: number | null;
    categoryGroupCollection?: CategoryGroup[] | null;
}
export declare namespace QueryAuthGroups {
    /**
     * Static representation of the [[authGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTH_GROUP_CODE: StringField<QueryAuthGroups>;
    /**
     * Static representation of the [[authGroupDes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTH_GROUP_DES: StringField<QueryAuthGroups>;
    /**
     * Static representation of the [[authGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTH_GROUP_ID: NumberField<QueryAuthGroups>;
    /**
     * Static representation of the [[categoryGroupCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_GROUP_COLLECTION: CollectionField<QueryAuthGroups, CategoryGroup>;
    /**
     * All fields of the QueryAuthGroups entity.
     */
    const _allFields: Array<StringField<QueryAuthGroups> | NumberField<QueryAuthGroups> | CollectionField<QueryAuthGroups, CategoryGroup>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<QueryAuthGroups>;
    /**
     * All key fields of the QueryAuthGroups entity.
     */
    const _keyFields: Array<Field<QueryAuthGroups>>;
    /**
     * Mapping of all key field names to the respective static field property QueryAuthGroups.
     */
    const _keys: {
        [keys: string]: Field<QueryAuthGroups>;
    };
}
//# sourceMappingURL=QueryAuthGroups.d.ts.map