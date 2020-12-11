import { AssetDepreciationGroupsRequestBuilder } from './AssetDepreciationGroupsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AssetDepreciationGroups" of service "SAPB1".
 */
export declare class AssetDepreciationGroups extends EntityV4 implements AssetDepreciationGroupsType {
    /**
     * Technical entity name for AssetDepreciationGroups.
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
    items: Items[];
    /**
     * Returns an entity builder to construct instances of `AssetDepreciationGroups`.
     * @returns A builder that constructs instances of entity type `AssetDepreciationGroups`.
     */
    static builder(): EntityBuilderType<AssetDepreciationGroups, AssetDepreciationGroupsType>;
    /**
     * Returns a request builder to construct requests for operations on the `AssetDepreciationGroups` entity type.
     * @returns A `AssetDepreciationGroups` request builder.
     */
    static requestBuilder(): AssetDepreciationGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetDepreciationGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssetDepreciationGroups`.
     */
    static customField(fieldName: string): CustomFieldV4<AssetDepreciationGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
export interface AssetDepreciationGroupsType {
    code?: string | null;
    description?: string | null;
    group?: string | null;
    items: ItemsType[];
}
export declare namespace AssetDepreciationGroups {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<AssetDepreciationGroups>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<AssetDepreciationGroups>;
    /**
     * Static representation of the [[group]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP: StringField<AssetDepreciationGroups>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<AssetDepreciationGroups, Items>;
    /**
     * All fields of the AssetDepreciationGroups entity.
     */
    const _allFields: Array<StringField<AssetDepreciationGroups> | OneToManyLink<AssetDepreciationGroups, Items>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AssetDepreciationGroups>;
    /**
     * All key fields of the AssetDepreciationGroups entity.
     */
    const _keyFields: Array<Field<AssetDepreciationGroups>>;
    /**
     * Mapping of all key field names to the respective static field property AssetDepreciationGroups.
     */
    const _keys: {
        [keys: string]: Field<AssetDepreciationGroups>;
    };
}
//# sourceMappingURL=AssetDepreciationGroups.d.ts.map