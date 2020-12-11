import { AttributeGroupsRequestBuilder } from './AttributeGroupsRequestBuilder';
import { AttributeGroupLine } from './AttributeGroupLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AttributeGroups" of service "SAPB1".
 */
export declare class AttributeGroups extends EntityV4 implements AttributeGroupsType {
    /**
     * Technical entity name for AttributeGroups.
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
     * Locked.
     * @nullable
     */
    locked?: BoYesNoEnum;
    /**
     * Attribute Group Collection.
     * @nullable
     */
    attributeGroupCollection?: AttributeGroupLine[];
    /**
     * One-to-many navigation property to the [[AssetClasses]] entity.
     */
    assetClasses: AssetClasses[];
    /**
     * Returns an entity builder to construct instances of `AttributeGroups`.
     * @returns A builder that constructs instances of entity type `AttributeGroups`.
     */
    static builder(): EntityBuilderType<AttributeGroups, AttributeGroupsType>;
    /**
     * Returns a request builder to construct requests for operations on the `AttributeGroups` entity type.
     * @returns A `AttributeGroups` request builder.
     */
    static requestBuilder(): AttributeGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AttributeGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AttributeGroups`.
     */
    static customField(fieldName: string): CustomFieldV4<AttributeGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { AssetClasses, AssetClassesType } from './AssetClasses';
export interface AttributeGroupsType {
    code?: number | null;
    name?: string | null;
    locked?: BoYesNoEnum | null;
    attributeGroupCollection?: AttributeGroupLine[] | null;
    assetClasses: AssetClassesType[];
}
export declare namespace AttributeGroups {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<AttributeGroups>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<AttributeGroups>;
    /**
     * Static representation of the [[locked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCKED: EnumField<AttributeGroups>;
    /**
     * Static representation of the [[attributeGroupCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTRIBUTE_GROUP_COLLECTION: CollectionField<AttributeGroups, AttributeGroupLine>;
    /**
     * Static representation of the one-to-many navigation property [[assetClasses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_CLASSES: OneToManyLink<AttributeGroups, AssetClasses>;
    /**
     * All fields of the AttributeGroups entity.
     */
    const _allFields: Array<NumberField<AttributeGroups> | StringField<AttributeGroups> | EnumField<AttributeGroups> | CollectionField<AttributeGroups, AttributeGroupLine> | OneToManyLink<AttributeGroups, AssetClasses>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AttributeGroups>;
    /**
     * All key fields of the AttributeGroups entity.
     */
    const _keyFields: Array<Field<AttributeGroups>>;
    /**
     * Mapping of all key field names to the respective static field property AttributeGroups.
     */
    const _keys: {
        [keys: string]: Field<AttributeGroups>;
    };
}
//# sourceMappingURL=AttributeGroups.d.ts.map