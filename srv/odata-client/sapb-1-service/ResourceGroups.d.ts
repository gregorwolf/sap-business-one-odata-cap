import { ResourceGroupsRequestBuilder } from './ResourceGroupsRequestBuilder';
import { ResourceTypeEnum } from './ResourceTypeEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ResourceGroups" of service "SAPB1".
 */
export declare class ResourceGroups extends EntityV4 implements ResourceGroupsType {
    /**
     * Technical entity name for ResourceGroups.
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
     * Type.
     * @nullable
     */
    type?: ResourceTypeEnum;
    /**
     * Cost Name 1.
     * @nullable
     */
    costName1?: string;
    /**
     * Cost 1.
     * @nullable
     */
    cost1?: number;
    /**
     * Cost Name 2.
     * @nullable
     */
    costName2?: string;
    /**
     * Cost 2.
     * @nullable
     */
    cost2?: number;
    /**
     * Cost Name 3.
     * @nullable
     */
    costName3?: string;
    /**
     * Cost 3.
     * @nullable
     */
    cost3?: number;
    /**
     * Cost Name 4.
     * @nullable
     */
    costName4?: string;
    /**
     * Cost 4.
     * @nullable
     */
    cost4?: number;
    /**
     * Cost Name 5.
     * @nullable
     */
    costName5?: string;
    /**
     * Cost 5.
     * @nullable
     */
    cost5?: number;
    /**
     * Cost Name 6.
     * @nullable
     */
    costName6?: string;
    /**
     * Cost 6.
     * @nullable
     */
    cost6?: number;
    /**
     * Cost Name 7.
     * @nullable
     */
    costName7?: string;
    /**
     * Cost 7.
     * @nullable
     */
    cost7?: number;
    /**
     * Cost Name 8.
     * @nullable
     */
    costName8?: string;
    /**
     * Cost 8.
     * @nullable
     */
    cost8?: number;
    /**
     * Cost Name 9.
     * @nullable
     */
    costName9?: string;
    /**
     * Cost 9.
     * @nullable
     */
    cost9?: number;
    /**
     * Cost Name 10.
     * @nullable
     */
    costName10?: string;
    /**
     * Cost 10.
     * @nullable
     */
    cost10?: number;
    /**
     * Num Of Units Text.
     * @nullable
     */
    numOfUnitsText?: string;
    /**
     * One-to-many navigation property to the [[Resources]] entity.
     */
    resources: Resources[];
    /**
     * Returns an entity builder to construct instances of `ResourceGroups`.
     * @returns A builder that constructs instances of entity type `ResourceGroups`.
     */
    static builder(): EntityBuilderType<ResourceGroups, ResourceGroupsType>;
    /**
     * Returns a request builder to construct requests for operations on the `ResourceGroups` entity type.
     * @returns A `ResourceGroups` request builder.
     */
    static requestBuilder(): ResourceGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ResourceGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ResourceGroups`.
     */
    static customField(fieldName: string): CustomFieldV4<ResourceGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Resources, ResourcesType } from './Resources';
export interface ResourceGroupsType {
    code?: number | null;
    name?: string | null;
    type?: ResourceTypeEnum | null;
    costName1?: string | null;
    cost1?: number | null;
    costName2?: string | null;
    cost2?: number | null;
    costName3?: string | null;
    cost3?: number | null;
    costName4?: string | null;
    cost4?: number | null;
    costName5?: string | null;
    cost5?: number | null;
    costName6?: string | null;
    cost6?: number | null;
    costName7?: string | null;
    cost7?: number | null;
    costName8?: string | null;
    cost8?: number | null;
    costName9?: string | null;
    cost9?: number | null;
    costName10?: string | null;
    cost10?: number | null;
    numOfUnitsText?: string | null;
    resources: ResourcesType[];
}
export declare namespace ResourceGroups {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<ResourceGroups>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ResourceGroups>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: EnumField<ResourceGroups>;
    /**
     * Static representation of the [[costName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_NAME_1: StringField<ResourceGroups>;
    /**
     * Static representation of the [[cost1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_1: NumberField<ResourceGroups>;
    /**
     * Static representation of the [[costName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_NAME_2: StringField<ResourceGroups>;
    /**
     * Static representation of the [[cost2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_2: NumberField<ResourceGroups>;
    /**
     * Static representation of the [[costName3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_NAME_3: StringField<ResourceGroups>;
    /**
     * Static representation of the [[cost3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_3: NumberField<ResourceGroups>;
    /**
     * Static representation of the [[costName4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_NAME_4: StringField<ResourceGroups>;
    /**
     * Static representation of the [[cost4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_4: NumberField<ResourceGroups>;
    /**
     * Static representation of the [[costName5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_NAME_5: StringField<ResourceGroups>;
    /**
     * Static representation of the [[cost5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_5: NumberField<ResourceGroups>;
    /**
     * Static representation of the [[costName6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_NAME_6: StringField<ResourceGroups>;
    /**
     * Static representation of the [[cost6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_6: NumberField<ResourceGroups>;
    /**
     * Static representation of the [[costName7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_NAME_7: StringField<ResourceGroups>;
    /**
     * Static representation of the [[cost7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_7: NumberField<ResourceGroups>;
    /**
     * Static representation of the [[costName8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_NAME_8: StringField<ResourceGroups>;
    /**
     * Static representation of the [[cost8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_8: NumberField<ResourceGroups>;
    /**
     * Static representation of the [[costName9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_NAME_9: StringField<ResourceGroups>;
    /**
     * Static representation of the [[cost9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_9: NumberField<ResourceGroups>;
    /**
     * Static representation of the [[costName10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_NAME_10: StringField<ResourceGroups>;
    /**
     * Static representation of the [[cost10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_10: NumberField<ResourceGroups>;
    /**
     * Static representation of the [[numOfUnitsText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUM_OF_UNITS_TEXT: StringField<ResourceGroups>;
    /**
     * Static representation of the one-to-many navigation property [[resources]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCES: OneToManyLink<ResourceGroups, Resources>;
    /**
     * All fields of the ResourceGroups entity.
     */
    const _allFields: Array<NumberField<ResourceGroups> | StringField<ResourceGroups> | EnumField<ResourceGroups> | OneToManyLink<ResourceGroups, Resources>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ResourceGroups>;
    /**
     * All key fields of the ResourceGroups entity.
     */
    const _keyFields: Array<Field<ResourceGroups>>;
    /**
     * Mapping of all key field names to the respective static field property ResourceGroups.
     */
    const _keys: {
        [keys: string]: Field<ResourceGroups>;
    };
}
//# sourceMappingURL=ResourceGroups.d.ts.map