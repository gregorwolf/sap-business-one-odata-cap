import { ResourcesRequestBuilder } from './ResourcesRequestBuilder';
import { Moment } from 'moment';
import { ResourceWarehouse } from './ResourceWarehouse';
import { ResourceFixedAsset } from './ResourceFixedAsset';
import { ResourceEmployee } from './ResourceEmployee';
import { ResourceDailyCapacity } from './ResourceDailyCapacity';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Resources" of service "SAPB1".
 */
export declare class Resources extends Entity implements ResourcesType {
    /**
     * Technical entity name for Resources.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Resources.
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
     * Vis Code.
     * @nullable
     */
    visCode?: string;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Number.
     * @nullable
     */
    number?: number;
    /**
     * Code Bar.
     * @nullable
     */
    codeBar?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Foreign Name.
     * @nullable
     */
    foreignName?: string;
    /**
     * Group.
     * @nullable
     */
    group?: number;
    /**
     * Unit Of Measure.
     * @nullable
     */
    unitOfMeasure?: string;
    /**
     * Cost 1.
     * @nullable
     */
    cost1?: number;
    /**
     * Cost 2.
     * @nullable
     */
    cost2?: number;
    /**
     * Cost 3.
     * @nullable
     */
    cost3?: number;
    /**
     * Cost 4.
     * @nullable
     */
    cost4?: number;
    /**
     * Cost 5.
     * @nullable
     */
    cost5?: number;
    /**
     * Cost 6.
     * @nullable
     */
    cost6?: number;
    /**
     * Cost 7.
     * @nullable
     */
    cost7?: number;
    /**
     * Cost 8.
     * @nullable
     */
    cost8?: number;
    /**
     * Cost 9.
     * @nullable
     */
    cost9?: number;
    /**
     * Cost 10.
     * @nullable
     */
    cost10?: number;
    /**
     * Active From.
     * @nullable
     */
    activeFrom?: Moment;
    /**
     * Active To.
     * @nullable
     */
    activeTo?: Moment;
    /**
     * Inactive From.
     * @nullable
     */
    inactiveFrom?: Moment;
    /**
     * Inactive To.
     * @nullable
     */
    inactiveTo?: Moment;
    /**
     * Default Warehouse.
     * @nullable
     */
    defaultWarehouse?: string;
    /**
     * Picture.
     * @nullable
     */
    picture?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Active Remarks.
     * @nullable
     */
    activeRemarks?: string;
    /**
     * Inactive Remarks.
     * @nullable
     */
    inactiveRemarks?: string;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * Units Per Time.
     * @nullable
     */
    unitsPerTime?: number;
    /**
     * Time Per Units.
     * @nullable
     */
    timePerUnits?: number;
    /**
     * Linked Item.
     * @nullable
     */
    linkedItem?: string;
    /**
     * Resource Warehouses.
     * @nullable
     */
    resourceWarehouses?: ResourceWarehouse[];
    /**
     * Resource Fixed Assets.
     * @nullable
     */
    resourceFixedAssets?: ResourceFixedAsset[];
    /**
     * Resource Employees.
     * @nullable
     */
    resourceEmployees?: ResourceEmployee[];
    /**
     * Resource Daily Capacities.
     * @nullable
     */
    resourceDailyCapacities?: ResourceDailyCapacity[];
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * One-to-many navigation property to the [[ResourceCapacities]] entity.
     */
    resourceCapacities: ResourceCapacities[];
    /**
     * One-to-one navigation property to the [[ResourceGroups]] entity.
     */
    resourceGroup: ResourceGroups;
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * Returns an entity builder to construct instances `Resources`.
     * @returns A builder that constructs instances of entity type `Resources`.
     */
    static builder(): EntityBuilderType<Resources, ResourcesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Resources` entity type.
     * @returns A `Resources` request builder.
     */
    static requestBuilder(): ResourcesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Resources`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Resources`.
     */
    static customField(fieldName: string): CustomField<Resources>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
import { ResourceCapacities, ResourceCapacitiesType } from './ResourceCapacities';
import { ResourceGroups, ResourceGroupsType } from './ResourceGroups';
export interface ResourcesType {
    code?: string;
    visCode?: string;
    series?: number;
    number?: number;
    codeBar?: string;
    name?: string;
    foreignName?: string;
    group?: number;
    unitOfMeasure?: string;
    cost1?: number;
    cost2?: number;
    cost3?: number;
    cost4?: number;
    cost5?: number;
    cost6?: number;
    cost7?: number;
    cost8?: number;
    cost9?: number;
    cost10?: number;
    activeFrom?: Moment;
    activeTo?: Moment;
    inactiveFrom?: Moment;
    inactiveTo?: Moment;
    defaultWarehouse?: string;
    picture?: string;
    remarks?: string;
    activeRemarks?: string;
    inactiveRemarks?: string;
    attachmentEntry?: number;
    unitsPerTime?: number;
    timePerUnits?: number;
    linkedItem?: string;
    resourceWarehouses?: ResourceWarehouse[];
    resourceFixedAssets?: ResourceFixedAsset[];
    resourceEmployees?: ResourceEmployee[];
    resourceDailyCapacities?: ResourceDailyCapacity[];
    items: ItemsType[];
    resourceCapacities: ResourceCapacitiesType[];
    resourceGroup: ResourceGroupsType;
    item: ItemsType;
}
export interface ResourcesTypeForceMandatory {
    code: string;
    visCode: string;
    series: number;
    number: number;
    codeBar: string;
    name: string;
    foreignName: string;
    group: number;
    unitOfMeasure: string;
    cost1: number;
    cost2: number;
    cost3: number;
    cost4: number;
    cost5: number;
    cost6: number;
    cost7: number;
    cost8: number;
    cost9: number;
    cost10: number;
    activeFrom: Moment;
    activeTo: Moment;
    inactiveFrom: Moment;
    inactiveTo: Moment;
    defaultWarehouse: string;
    picture: string;
    remarks: string;
    activeRemarks: string;
    inactiveRemarks: string;
    attachmentEntry: number;
    unitsPerTime: number;
    timePerUnits: number;
    linkedItem: string;
    resourceWarehouses: ResourceWarehouse[];
    resourceFixedAssets: ResourceFixedAsset[];
    resourceEmployees: ResourceEmployee[];
    resourceDailyCapacities: ResourceDailyCapacity[];
    items: ItemsType[];
    resourceCapacities: ResourceCapacitiesType[];
    resourceGroup: ResourceGroupsType;
    item: ItemsType;
}
export declare namespace Resources {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<Resources>;
    /**
     * Static representation of the [[visCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VIS_CODE: StringField<Resources>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<Resources>;
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER: NumberField<Resources>;
    /**
     * Static representation of the [[codeBar]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE_BAR: StringField<Resources>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<Resources>;
    /**
     * Static representation of the [[foreignName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_NAME: StringField<Resources>;
    /**
     * Static representation of the [[group]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP: NumberField<Resources>;
    /**
     * Static representation of the [[unitOfMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASURE: StringField<Resources>;
    /**
     * Static representation of the [[cost1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_1: NumberField<Resources>;
    /**
     * Static representation of the [[cost2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_2: NumberField<Resources>;
    /**
     * Static representation of the [[cost3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_3: NumberField<Resources>;
    /**
     * Static representation of the [[cost4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_4: NumberField<Resources>;
    /**
     * Static representation of the [[cost5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_5: NumberField<Resources>;
    /**
     * Static representation of the [[cost6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_6: NumberField<Resources>;
    /**
     * Static representation of the [[cost7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_7: NumberField<Resources>;
    /**
     * Static representation of the [[cost8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_8: NumberField<Resources>;
    /**
     * Static representation of the [[cost9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_9: NumberField<Resources>;
    /**
     * Static representation of the [[cost10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_10: NumberField<Resources>;
    /**
     * Static representation of the [[activeFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE_FROM: DateField<Resources>;
    /**
     * Static representation of the [[activeTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE_TO: DateField<Resources>;
    /**
     * Static representation of the [[inactiveFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INACTIVE_FROM: DateField<Resources>;
    /**
     * Static representation of the [[inactiveTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INACTIVE_TO: DateField<Resources>;
    /**
     * Static representation of the [[defaultWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_WAREHOUSE: StringField<Resources>;
    /**
     * Static representation of the [[picture]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICTURE: StringField<Resources>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<Resources>;
    /**
     * Static representation of the [[activeRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE_REMARKS: StringField<Resources>;
    /**
     * Static representation of the [[inactiveRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INACTIVE_REMARKS: StringField<Resources>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<Resources>;
    /**
     * Static representation of the [[unitsPerTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNITS_PER_TIME: NumberField<Resources>;
    /**
     * Static representation of the [[timePerUnits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_PER_UNITS: NumberField<Resources>;
    /**
     * Static representation of the [[linkedItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINKED_ITEM: StringField<Resources>;
    /**
     * Static representation of the [[resourceWarehouses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCE_WAREHOUSES: CollectionField<Resources>;
    /**
     * Static representation of the [[resourceFixedAssets]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCE_FIXED_ASSETS: CollectionField<Resources>;
    /**
     * Static representation of the [[resourceEmployees]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCE_EMPLOYEES: CollectionField<Resources>;
    /**
     * Static representation of the [[resourceDailyCapacities]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCE_DAILY_CAPACITIES: CollectionField<Resources>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<Resources, Items>;
    /**
     * Static representation of the one-to-many navigation property [[resourceCapacities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCE_CAPACITIES: OneToManyLink<Resources, ResourceCapacities>;
    /**
     * Static representation of the one-to-one navigation property [[resourceGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCE_GROUP: OneToOneLink<Resources, ResourceGroups>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<Resources, Items>;
    /**
     * All fields of the Resources entity.
     */
    const _allFields: Array<StringField<Resources> | NumberField<Resources> | DateField<Resources> | CollectionField<Resources> | OneToManyLink<Resources, Items> | OneToManyLink<Resources, ResourceCapacities> | OneToOneLink<Resources, ResourceGroups> | OneToOneLink<Resources, Items>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Resources>;
    /**
     * All key fields of the Resources entity.
     */
    const _keyFields: Array<Field<Resources>>;
    /**
     * Mapping of all key field names to the respective static field property Resources.
     */
    const _keys: {
        [keys: string]: Field<Resources>;
    };
}
//# sourceMappingURL=Resources.d.ts.map