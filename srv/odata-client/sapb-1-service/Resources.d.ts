import { ResourcesRequestBuilder } from './ResourcesRequestBuilder';
import { Moment } from 'moment';
import { ResourceWarehouse } from './ResourceWarehouse';
import { ResourceFixedAsset } from './ResourceFixedAsset';
import { ResourceEmployee } from './ResourceEmployee';
import { ResourceDailyCapacity } from './ResourceDailyCapacity';
import { ResourceTypeEnum } from './ResourceTypeEnum';
import { ResourceIssueMethodEnum } from './ResourceIssueMethodEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ResourceAllocationEnum } from './ResourceAllocationEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Resources" of service "SAPB1".
 */
export declare class Resources extends EntityV4 implements ResourcesType {
    /**
     * Technical entity name for Resources.
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
     * Type.
     * @nullable
     */
    type?: ResourceTypeEnum;
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
     * Issue Method.
     * @nullable
     */
    issueMethod?: ResourceIssueMethodEnum;
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
     * Active.
     * @nullable
     */
    active?: BoYesNoEnum;
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
     * Inactive.
     * @nullable
     */
    inactive?: BoYesNoEnum;
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
     * Property 1.
     * @nullable
     */
    property1?: BoYesNoEnum;
    /**
     * Property 2.
     * @nullable
     */
    property2?: BoYesNoEnum;
    /**
     * Property 3.
     * @nullable
     */
    property3?: BoYesNoEnum;
    /**
     * Property 4.
     * @nullable
     */
    property4?: BoYesNoEnum;
    /**
     * Property 5.
     * @nullable
     */
    property5?: BoYesNoEnum;
    /**
     * Property 6.
     * @nullable
     */
    property6?: BoYesNoEnum;
    /**
     * Property 7.
     * @nullable
     */
    property7?: BoYesNoEnum;
    /**
     * Property 8.
     * @nullable
     */
    property8?: BoYesNoEnum;
    /**
     * Property 9.
     * @nullable
     */
    property9?: BoYesNoEnum;
    /**
     * Property 10.
     * @nullable
     */
    property10?: BoYesNoEnum;
    /**
     * Property 11.
     * @nullable
     */
    property11?: BoYesNoEnum;
    /**
     * Property 12.
     * @nullable
     */
    property12?: BoYesNoEnum;
    /**
     * Property 13.
     * @nullable
     */
    property13?: BoYesNoEnum;
    /**
     * Property 14.
     * @nullable
     */
    property14?: BoYesNoEnum;
    /**
     * Property 15.
     * @nullable
     */
    property15?: BoYesNoEnum;
    /**
     * Property 16.
     * @nullable
     */
    property16?: BoYesNoEnum;
    /**
     * Property 17.
     * @nullable
     */
    property17?: BoYesNoEnum;
    /**
     * Property 18.
     * @nullable
     */
    property18?: BoYesNoEnum;
    /**
     * Property 19.
     * @nullable
     */
    property19?: BoYesNoEnum;
    /**
     * Property 20.
     * @nullable
     */
    property20?: BoYesNoEnum;
    /**
     * Property 21.
     * @nullable
     */
    property21?: BoYesNoEnum;
    /**
     * Property 22.
     * @nullable
     */
    property22?: BoYesNoEnum;
    /**
     * Property 23.
     * @nullable
     */
    property23?: BoYesNoEnum;
    /**
     * Property 24.
     * @nullable
     */
    property24?: BoYesNoEnum;
    /**
     * Property 25.
     * @nullable
     */
    property25?: BoYesNoEnum;
    /**
     * Property 26.
     * @nullable
     */
    property26?: BoYesNoEnum;
    /**
     * Property 27.
     * @nullable
     */
    property27?: BoYesNoEnum;
    /**
     * Property 28.
     * @nullable
     */
    property28?: BoYesNoEnum;
    /**
     * Property 29.
     * @nullable
     */
    property29?: BoYesNoEnum;
    /**
     * Property 30.
     * @nullable
     */
    property30?: BoYesNoEnum;
    /**
     * Property 31.
     * @nullable
     */
    property31?: BoYesNoEnum;
    /**
     * Property 32.
     * @nullable
     */
    property32?: BoYesNoEnum;
    /**
     * Property 33.
     * @nullable
     */
    property33?: BoYesNoEnum;
    /**
     * Property 34.
     * @nullable
     */
    property34?: BoYesNoEnum;
    /**
     * Property 35.
     * @nullable
     */
    property35?: BoYesNoEnum;
    /**
     * Property 36.
     * @nullable
     */
    property36?: BoYesNoEnum;
    /**
     * Property 37.
     * @nullable
     */
    property37?: BoYesNoEnum;
    /**
     * Property 38.
     * @nullable
     */
    property38?: BoYesNoEnum;
    /**
     * Property 39.
     * @nullable
     */
    property39?: BoYesNoEnum;
    /**
     * Property 40.
     * @nullable
     */
    property40?: BoYesNoEnum;
    /**
     * Property 41.
     * @nullable
     */
    property41?: BoYesNoEnum;
    /**
     * Property 42.
     * @nullable
     */
    property42?: BoYesNoEnum;
    /**
     * Property 43.
     * @nullable
     */
    property43?: BoYesNoEnum;
    /**
     * Property 44.
     * @nullable
     */
    property44?: BoYesNoEnum;
    /**
     * Property 45.
     * @nullable
     */
    property45?: BoYesNoEnum;
    /**
     * Property 46.
     * @nullable
     */
    property46?: BoYesNoEnum;
    /**
     * Property 47.
     * @nullable
     */
    property47?: BoYesNoEnum;
    /**
     * Property 48.
     * @nullable
     */
    property48?: BoYesNoEnum;
    /**
     * Property 49.
     * @nullable
     */
    property49?: BoYesNoEnum;
    /**
     * Property 50.
     * @nullable
     */
    property50?: BoYesNoEnum;
    /**
     * Property 51.
     * @nullable
     */
    property51?: BoYesNoEnum;
    /**
     * Property 52.
     * @nullable
     */
    property52?: BoYesNoEnum;
    /**
     * Property 53.
     * @nullable
     */
    property53?: BoYesNoEnum;
    /**
     * Property 54.
     * @nullable
     */
    property54?: BoYesNoEnum;
    /**
     * Property 55.
     * @nullable
     */
    property55?: BoYesNoEnum;
    /**
     * Property 56.
     * @nullable
     */
    property56?: BoYesNoEnum;
    /**
     * Property 57.
     * @nullable
     */
    property57?: BoYesNoEnum;
    /**
     * Property 58.
     * @nullable
     */
    property58?: BoYesNoEnum;
    /**
     * Property 59.
     * @nullable
     */
    property59?: BoYesNoEnum;
    /**
     * Property 60.
     * @nullable
     */
    property60?: BoYesNoEnum;
    /**
     * Property 61.
     * @nullable
     */
    property61?: BoYesNoEnum;
    /**
     * Property 62.
     * @nullable
     */
    property62?: BoYesNoEnum;
    /**
     * Property 63.
     * @nullable
     */
    property63?: BoYesNoEnum;
    /**
     * Property 64.
     * @nullable
     */
    property64?: BoYesNoEnum;
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
     * Allocation.
     * @nullable
     */
    allocation?: ResourceAllocationEnum;
    /**
     * Linked Item.
     * @nullable
     */
    linkedItem?: string;
    /**
     * Relevant For Single Run 1.
     * @nullable
     */
    relevantForSingleRun1?: BoYesNoEnum;
    /**
     * Relevant For Single Run 2.
     * @nullable
     */
    relevantForSingleRun2?: BoYesNoEnum;
    /**
     * Relevant For Single Run 3.
     * @nullable
     */
    relevantForSingleRun3?: BoYesNoEnum;
    /**
     * Relevant For Single Run 4.
     * @nullable
     */
    relevantForSingleRun4?: BoYesNoEnum;
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
     * Returns an entity builder to construct instances of `Resources`.
     * @returns A builder that constructs instances of entity type `Resources`.
     */
    static builder(): EntityBuilderType<Resources, ResourcesType>;
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
    static customField(fieldName: string): CustomFieldV4<Resources>;
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
    code?: string | null;
    visCode?: string | null;
    series?: number | null;
    number?: number | null;
    codeBar?: string | null;
    name?: string | null;
    foreignName?: string | null;
    type?: ResourceTypeEnum | null;
    group?: number | null;
    unitOfMeasure?: string | null;
    issueMethod?: ResourceIssueMethodEnum | null;
    cost1?: number | null;
    cost2?: number | null;
    cost3?: number | null;
    cost4?: number | null;
    cost5?: number | null;
    cost6?: number | null;
    cost7?: number | null;
    cost8?: number | null;
    cost9?: number | null;
    cost10?: number | null;
    active?: BoYesNoEnum | null;
    activeFrom?: Moment | null;
    activeTo?: Moment | null;
    inactive?: BoYesNoEnum | null;
    inactiveFrom?: Moment | null;
    inactiveTo?: Moment | null;
    defaultWarehouse?: string | null;
    picture?: string | null;
    remarks?: string | null;
    property1?: BoYesNoEnum | null;
    property2?: BoYesNoEnum | null;
    property3?: BoYesNoEnum | null;
    property4?: BoYesNoEnum | null;
    property5?: BoYesNoEnum | null;
    property6?: BoYesNoEnum | null;
    property7?: BoYesNoEnum | null;
    property8?: BoYesNoEnum | null;
    property9?: BoYesNoEnum | null;
    property10?: BoYesNoEnum | null;
    property11?: BoYesNoEnum | null;
    property12?: BoYesNoEnum | null;
    property13?: BoYesNoEnum | null;
    property14?: BoYesNoEnum | null;
    property15?: BoYesNoEnum | null;
    property16?: BoYesNoEnum | null;
    property17?: BoYesNoEnum | null;
    property18?: BoYesNoEnum | null;
    property19?: BoYesNoEnum | null;
    property20?: BoYesNoEnum | null;
    property21?: BoYesNoEnum | null;
    property22?: BoYesNoEnum | null;
    property23?: BoYesNoEnum | null;
    property24?: BoYesNoEnum | null;
    property25?: BoYesNoEnum | null;
    property26?: BoYesNoEnum | null;
    property27?: BoYesNoEnum | null;
    property28?: BoYesNoEnum | null;
    property29?: BoYesNoEnum | null;
    property30?: BoYesNoEnum | null;
    property31?: BoYesNoEnum | null;
    property32?: BoYesNoEnum | null;
    property33?: BoYesNoEnum | null;
    property34?: BoYesNoEnum | null;
    property35?: BoYesNoEnum | null;
    property36?: BoYesNoEnum | null;
    property37?: BoYesNoEnum | null;
    property38?: BoYesNoEnum | null;
    property39?: BoYesNoEnum | null;
    property40?: BoYesNoEnum | null;
    property41?: BoYesNoEnum | null;
    property42?: BoYesNoEnum | null;
    property43?: BoYesNoEnum | null;
    property44?: BoYesNoEnum | null;
    property45?: BoYesNoEnum | null;
    property46?: BoYesNoEnum | null;
    property47?: BoYesNoEnum | null;
    property48?: BoYesNoEnum | null;
    property49?: BoYesNoEnum | null;
    property50?: BoYesNoEnum | null;
    property51?: BoYesNoEnum | null;
    property52?: BoYesNoEnum | null;
    property53?: BoYesNoEnum | null;
    property54?: BoYesNoEnum | null;
    property55?: BoYesNoEnum | null;
    property56?: BoYesNoEnum | null;
    property57?: BoYesNoEnum | null;
    property58?: BoYesNoEnum | null;
    property59?: BoYesNoEnum | null;
    property60?: BoYesNoEnum | null;
    property61?: BoYesNoEnum | null;
    property62?: BoYesNoEnum | null;
    property63?: BoYesNoEnum | null;
    property64?: BoYesNoEnum | null;
    activeRemarks?: string | null;
    inactiveRemarks?: string | null;
    attachmentEntry?: number | null;
    unitsPerTime?: number | null;
    timePerUnits?: number | null;
    allocation?: ResourceAllocationEnum | null;
    linkedItem?: string | null;
    relevantForSingleRun1?: BoYesNoEnum | null;
    relevantForSingleRun2?: BoYesNoEnum | null;
    relevantForSingleRun3?: BoYesNoEnum | null;
    relevantForSingleRun4?: BoYesNoEnum | null;
    resourceWarehouses?: ResourceWarehouse[] | null;
    resourceFixedAssets?: ResourceFixedAsset[] | null;
    resourceEmployees?: ResourceEmployee[] | null;
    resourceDailyCapacities?: ResourceDailyCapacity[] | null;
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
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: EnumField<Resources>;
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
     * Static representation of the [[issueMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ISSUE_METHOD: EnumField<Resources>;
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
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE: EnumField<Resources>;
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
     * Static representation of the [[inactive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INACTIVE: EnumField<Resources>;
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
     * Static representation of the [[property1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_1: EnumField<Resources>;
    /**
     * Static representation of the [[property2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_2: EnumField<Resources>;
    /**
     * Static representation of the [[property3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_3: EnumField<Resources>;
    /**
     * Static representation of the [[property4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_4: EnumField<Resources>;
    /**
     * Static representation of the [[property5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_5: EnumField<Resources>;
    /**
     * Static representation of the [[property6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_6: EnumField<Resources>;
    /**
     * Static representation of the [[property7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_7: EnumField<Resources>;
    /**
     * Static representation of the [[property8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_8: EnumField<Resources>;
    /**
     * Static representation of the [[property9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_9: EnumField<Resources>;
    /**
     * Static representation of the [[property10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_10: EnumField<Resources>;
    /**
     * Static representation of the [[property11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_11: EnumField<Resources>;
    /**
     * Static representation of the [[property12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_12: EnumField<Resources>;
    /**
     * Static representation of the [[property13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_13: EnumField<Resources>;
    /**
     * Static representation of the [[property14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_14: EnumField<Resources>;
    /**
     * Static representation of the [[property15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_15: EnumField<Resources>;
    /**
     * Static representation of the [[property16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_16: EnumField<Resources>;
    /**
     * Static representation of the [[property17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_17: EnumField<Resources>;
    /**
     * Static representation of the [[property18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_18: EnumField<Resources>;
    /**
     * Static representation of the [[property19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_19: EnumField<Resources>;
    /**
     * Static representation of the [[property20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_20: EnumField<Resources>;
    /**
     * Static representation of the [[property21]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_21: EnumField<Resources>;
    /**
     * Static representation of the [[property22]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_22: EnumField<Resources>;
    /**
     * Static representation of the [[property23]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_23: EnumField<Resources>;
    /**
     * Static representation of the [[property24]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_24: EnumField<Resources>;
    /**
     * Static representation of the [[property25]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_25: EnumField<Resources>;
    /**
     * Static representation of the [[property26]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_26: EnumField<Resources>;
    /**
     * Static representation of the [[property27]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_27: EnumField<Resources>;
    /**
     * Static representation of the [[property28]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_28: EnumField<Resources>;
    /**
     * Static representation of the [[property29]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_29: EnumField<Resources>;
    /**
     * Static representation of the [[property30]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_30: EnumField<Resources>;
    /**
     * Static representation of the [[property31]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_31: EnumField<Resources>;
    /**
     * Static representation of the [[property32]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_32: EnumField<Resources>;
    /**
     * Static representation of the [[property33]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_33: EnumField<Resources>;
    /**
     * Static representation of the [[property34]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_34: EnumField<Resources>;
    /**
     * Static representation of the [[property35]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_35: EnumField<Resources>;
    /**
     * Static representation of the [[property36]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_36: EnumField<Resources>;
    /**
     * Static representation of the [[property37]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_37: EnumField<Resources>;
    /**
     * Static representation of the [[property38]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_38: EnumField<Resources>;
    /**
     * Static representation of the [[property39]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_39: EnumField<Resources>;
    /**
     * Static representation of the [[property40]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_40: EnumField<Resources>;
    /**
     * Static representation of the [[property41]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_41: EnumField<Resources>;
    /**
     * Static representation of the [[property42]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_42: EnumField<Resources>;
    /**
     * Static representation of the [[property43]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_43: EnumField<Resources>;
    /**
     * Static representation of the [[property44]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_44: EnumField<Resources>;
    /**
     * Static representation of the [[property45]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_45: EnumField<Resources>;
    /**
     * Static representation of the [[property46]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_46: EnumField<Resources>;
    /**
     * Static representation of the [[property47]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_47: EnumField<Resources>;
    /**
     * Static representation of the [[property48]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_48: EnumField<Resources>;
    /**
     * Static representation of the [[property49]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_49: EnumField<Resources>;
    /**
     * Static representation of the [[property50]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_50: EnumField<Resources>;
    /**
     * Static representation of the [[property51]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_51: EnumField<Resources>;
    /**
     * Static representation of the [[property52]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_52: EnumField<Resources>;
    /**
     * Static representation of the [[property53]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_53: EnumField<Resources>;
    /**
     * Static representation of the [[property54]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_54: EnumField<Resources>;
    /**
     * Static representation of the [[property55]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_55: EnumField<Resources>;
    /**
     * Static representation of the [[property56]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_56: EnumField<Resources>;
    /**
     * Static representation of the [[property57]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_57: EnumField<Resources>;
    /**
     * Static representation of the [[property58]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_58: EnumField<Resources>;
    /**
     * Static representation of the [[property59]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_59: EnumField<Resources>;
    /**
     * Static representation of the [[property60]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_60: EnumField<Resources>;
    /**
     * Static representation of the [[property61]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_61: EnumField<Resources>;
    /**
     * Static representation of the [[property62]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_62: EnumField<Resources>;
    /**
     * Static representation of the [[property63]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_63: EnumField<Resources>;
    /**
     * Static representation of the [[property64]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_64: EnumField<Resources>;
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
     * Static representation of the [[allocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOCATION: EnumField<Resources>;
    /**
     * Static representation of the [[linkedItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINKED_ITEM: StringField<Resources>;
    /**
     * Static representation of the [[relevantForSingleRun1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELEVANT_FOR_SINGLE_RUN_1: EnumField<Resources>;
    /**
     * Static representation of the [[relevantForSingleRun2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELEVANT_FOR_SINGLE_RUN_2: EnumField<Resources>;
    /**
     * Static representation of the [[relevantForSingleRun3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELEVANT_FOR_SINGLE_RUN_3: EnumField<Resources>;
    /**
     * Static representation of the [[relevantForSingleRun4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELEVANT_FOR_SINGLE_RUN_4: EnumField<Resources>;
    /**
     * Static representation of the [[resourceWarehouses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCE_WAREHOUSES: CollectionField<Resources, ResourceWarehouse>;
    /**
     * Static representation of the [[resourceFixedAssets]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCE_FIXED_ASSETS: CollectionField<Resources, ResourceFixedAsset>;
    /**
     * Static representation of the [[resourceEmployees]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCE_EMPLOYEES: CollectionField<Resources, ResourceEmployee>;
    /**
     * Static representation of the [[resourceDailyCapacities]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCE_DAILY_CAPACITIES: CollectionField<Resources, ResourceDailyCapacity>;
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
    const _allFields: Array<StringField<Resources> | NumberField<Resources> | EnumField<Resources> | DateField<Resources> | CollectionField<Resources, ResourceWarehouse> | CollectionField<Resources, ResourceFixedAsset> | CollectionField<Resources, ResourceEmployee> | CollectionField<Resources, ResourceDailyCapacity> | OneToManyLink<Resources, Items> | OneToManyLink<Resources, ResourceCapacities> | OneToOneLink<Resources, ResourceGroups> | OneToOneLink<Resources, Items>>;
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