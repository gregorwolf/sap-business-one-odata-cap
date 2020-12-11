import { MaterialGroupsRequestBuilder } from './MaterialGroupsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "MaterialGroups" of service "SAPB1".
 */
export declare class MaterialGroups extends EntityV4 implements MaterialGroupsType {
    /**
     * Technical entity name for MaterialGroups.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Material Group Code.
     * @nullable
     */
    materialGroupCode?: string;
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
     * Returns an entity builder to construct instances of `MaterialGroups`.
     * @returns A builder that constructs instances of entity type `MaterialGroups`.
     */
    static builder(): EntityBuilderType<MaterialGroups, MaterialGroupsType>;
    /**
     * Returns a request builder to construct requests for operations on the `MaterialGroups` entity type.
     * @returns A `MaterialGroups` request builder.
     */
    static requestBuilder(): MaterialGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MaterialGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MaterialGroups`.
     */
    static customField(fieldName: string): CustomFieldV4<MaterialGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
export interface MaterialGroupsType {
    absEntry?: number | null;
    materialGroupCode?: string | null;
    description?: string | null;
    items: ItemsType[];
}
export declare namespace MaterialGroups {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<MaterialGroups>;
    /**
     * Static representation of the [[materialGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL_GROUP_CODE: StringField<MaterialGroups>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<MaterialGroups>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<MaterialGroups, Items>;
    /**
     * All fields of the MaterialGroups entity.
     */
    const _allFields: Array<NumberField<MaterialGroups> | StringField<MaterialGroups> | OneToManyLink<MaterialGroups, Items>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<MaterialGroups>;
    /**
     * All key fields of the MaterialGroups entity.
     */
    const _keyFields: Array<Field<MaterialGroups>>;
    /**
     * Mapping of all key field names to the respective static field property MaterialGroups.
     */
    const _keys: {
        [keys: string]: Field<MaterialGroups>;
    };
}
//# sourceMappingURL=MaterialGroups.d.ts.map