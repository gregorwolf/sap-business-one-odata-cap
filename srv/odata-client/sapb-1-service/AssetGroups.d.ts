import { AssetGroupsRequestBuilder } from './AssetGroupsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "AssetGroups" of service "SAPB1".
 */
export declare class AssetGroups extends Entity implements AssetGroupsType {
    /**
     * Technical entity name for AssetGroups.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AssetGroups.
     */
    static _serviceName: string;
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
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * Returns an entity builder to construct instances `AssetGroups`.
     * @returns A builder that constructs instances of entity type `AssetGroups`.
     */
    static builder(): EntityBuilderType<AssetGroups, AssetGroupsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AssetGroups` entity type.
     * @returns A `AssetGroups` request builder.
     */
    static requestBuilder(): AssetGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssetGroups`.
     */
    static customField(fieldName: string): CustomField<AssetGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
export interface AssetGroupsType {
    code?: string;
    description?: string;
    items: ItemsType[];
}
export interface AssetGroupsTypeForceMandatory {
    code: string;
    description: string;
    items: ItemsType[];
}
export declare namespace AssetGroups {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<AssetGroups>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<AssetGroups>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<AssetGroups, Items>;
    /**
     * All fields of the AssetGroups entity.
     */
    const _allFields: Array<StringField<AssetGroups> | OneToManyLink<AssetGroups, Items>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AssetGroups>;
    /**
     * All key fields of the AssetGroups entity.
     */
    const _keyFields: Array<Field<AssetGroups>>;
    /**
     * Mapping of all key field names to the respective static field property AssetGroups.
     */
    const _keys: {
        [keys: string]: Field<AssetGroups>;
    };
}
//# sourceMappingURL=AssetGroups.d.ts.map