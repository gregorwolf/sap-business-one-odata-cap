/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourcesRequestBuilder } from './ResourcesRequestBuilder';
import { Moment } from 'moment';
import { ResourceWarehouse, ResourceWarehouseField } from './ResourceWarehouse';
import { ResourceFixedAsset, ResourceFixedAssetField } from './ResourceFixedAsset';
import { ResourceEmployee, ResourceEmployeeField } from './ResourceEmployee';
import { ResourceDailyCapacity, ResourceDailyCapacityField } from './ResourceDailyCapacity';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "Resources" of service "SAPB1".
 */
export class Resources extends Entity implements ResourcesType {
  /**
   * Technical entity name for Resources.
   */
  static _entityName = 'Resources';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Resources.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  items!: Items[];
  /**
   * One-to-many navigation property to the [[ResourceCapacities]] entity.
   */
  resourceCapacities!: ResourceCapacities[];
  /**
   * One-to-one navigation property to the [[ResourceGroups]] entity.
   */
  resourceGroup!: ResourceGroups;
  /**
   * One-to-one navigation property to the [[Items]] entity.
   */
  item!: Items;

  /**
   * Returns an entity builder to construct instances `Resources`.
   * @returns A builder that constructs instances of entity type `Resources`.
   */
  static builder(): EntityBuilderType<Resources, ResourcesTypeForceMandatory> {
    return Entity.entityBuilder(Resources);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Resources` entity type.
   * @returns A `Resources` request builder.
   */
  static requestBuilder(): ResourcesRequestBuilder {
    return new ResourcesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Resources`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Resources`.
   */
  static customField(fieldName: string): CustomField<Resources> {
    return Entity.customFieldSelector(fieldName, Resources);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace Resources {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<Resources> = new StringField('Code', Resources, 'Edm.String');
  /**
   * Static representation of the [[visCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VIS_CODE: StringField<Resources> = new StringField('VisCode', Resources, 'Edm.String');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<Resources> = new NumberField('Series', Resources, 'Edm.Int32');
  /**
   * Static representation of the [[number]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER: NumberField<Resources> = new NumberField('Number', Resources, 'Edm.Int32');
  /**
   * Static representation of the [[codeBar]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE_BAR: StringField<Resources> = new StringField('CodeBar', Resources, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<Resources> = new StringField('Name', Resources, 'Edm.String');
  /**
   * Static representation of the [[foreignName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOREIGN_NAME: StringField<Resources> = new StringField('ForeignName', Resources, 'Edm.String');
  /**
   * Static representation of the [[group]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP: NumberField<Resources> = new NumberField('Group', Resources, 'Edm.Int32');
  /**
   * Static representation of the [[unitOfMeasure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASURE: StringField<Resources> = new StringField('UnitOfMeasure', Resources, 'Edm.String');
  /**
   * Static representation of the [[cost1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_1: NumberField<Resources> = new NumberField('Cost1', Resources, 'Edm.Double');
  /**
   * Static representation of the [[cost2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_2: NumberField<Resources> = new NumberField('Cost2', Resources, 'Edm.Double');
  /**
   * Static representation of the [[cost3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_3: NumberField<Resources> = new NumberField('Cost3', Resources, 'Edm.Double');
  /**
   * Static representation of the [[cost4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_4: NumberField<Resources> = new NumberField('Cost4', Resources, 'Edm.Double');
  /**
   * Static representation of the [[cost5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_5: NumberField<Resources> = new NumberField('Cost5', Resources, 'Edm.Double');
  /**
   * Static representation of the [[cost6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_6: NumberField<Resources> = new NumberField('Cost6', Resources, 'Edm.Double');
  /**
   * Static representation of the [[cost7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_7: NumberField<Resources> = new NumberField('Cost7', Resources, 'Edm.Double');
  /**
   * Static representation of the [[cost8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_8: NumberField<Resources> = new NumberField('Cost8', Resources, 'Edm.Double');
  /**
   * Static representation of the [[cost9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_9: NumberField<Resources> = new NumberField('Cost9', Resources, 'Edm.Double');
  /**
   * Static representation of the [[cost10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_10: NumberField<Resources> = new NumberField('Cost10', Resources, 'Edm.Double');
  /**
   * Static representation of the [[activeFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE_FROM: DateField<Resources> = new DateField('ActiveFrom', Resources, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[activeTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE_TO: DateField<Resources> = new DateField('ActiveTo', Resources, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[inactiveFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INACTIVE_FROM: DateField<Resources> = new DateField('InactiveFrom', Resources, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[inactiveTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INACTIVE_TO: DateField<Resources> = new DateField('InactiveTo', Resources, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[defaultWarehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_WAREHOUSE: StringField<Resources> = new StringField('DefaultWarehouse', Resources, 'Edm.String');
  /**
   * Static representation of the [[picture]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICTURE: StringField<Resources> = new StringField('Picture', Resources, 'Edm.String');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<Resources> = new StringField('Remarks', Resources, 'Edm.String');
  /**
   * Static representation of the [[activeRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE_REMARKS: StringField<Resources> = new StringField('ActiveRemarks', Resources, 'Edm.String');
  /**
   * Static representation of the [[inactiveRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INACTIVE_REMARKS: StringField<Resources> = new StringField('InactiveRemarks', Resources, 'Edm.String');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<Resources> = new NumberField('AttachmentEntry', Resources, 'Edm.Int32');
  /**
   * Static representation of the [[unitsPerTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNITS_PER_TIME: NumberField<Resources> = new NumberField('UnitsPerTime', Resources, 'Edm.Int32');
  /**
   * Static representation of the [[timePerUnits]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_PER_UNITS: NumberField<Resources> = new NumberField('TimePerUnits', Resources, 'Edm.Int32');
  /**
   * Static representation of the [[linkedItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINKED_ITEM: StringField<Resources> = new StringField('LinkedItem', Resources, 'Edm.String');
  /**
   * Static representation of the [[resourceWarehouses]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOURCE_WAREHOUSES: CollectionField<Resources> = new CollectionField('ResourceWarehouses', Resources, new ResourceWarehouseField('', Resources));
  /**
   * Static representation of the [[resourceFixedAssets]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOURCE_FIXED_ASSETS: CollectionField<Resources> = new CollectionField('ResourceFixedAssets', Resources, new ResourceFixedAssetField('', Resources));
  /**
   * Static representation of the [[resourceEmployees]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOURCE_EMPLOYEES: CollectionField<Resources> = new CollectionField('ResourceEmployees', Resources, new ResourceEmployeeField('', Resources));
  /**
   * Static representation of the [[resourceDailyCapacities]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOURCE_DAILY_CAPACITIES: CollectionField<Resources> = new CollectionField('ResourceDailyCapacities', Resources, new ResourceDailyCapacityField('', Resources));
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<Resources, Items> = new OneToManyLink('Items', Resources, Items);
  /**
   * Static representation of the one-to-many navigation property [[resourceCapacities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOURCE_CAPACITIES: OneToManyLink<Resources, ResourceCapacities> = new OneToManyLink('ResourceCapacities', Resources, ResourceCapacities);
  /**
   * Static representation of the one-to-one navigation property [[resourceGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOURCE_GROUP: OneToOneLink<Resources, ResourceGroups> = new OneToOneLink('ResourceGroup', Resources, ResourceGroups);
  /**
   * Static representation of the one-to-one navigation property [[item]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM: OneToOneLink<Resources, Items> = new OneToOneLink('Item', Resources, Items);
  /**
   * All fields of the Resources entity.
   */
  export const _allFields: Array<StringField<Resources> | NumberField<Resources> | DateField<Resources> | CollectionField<Resources> | OneToManyLink<Resources, Items> | OneToManyLink<Resources, ResourceCapacities> | OneToOneLink<Resources, ResourceGroups> | OneToOneLink<Resources, Items>> = [
    Resources.CODE,
    Resources.VIS_CODE,
    Resources.SERIES,
    Resources.NUMBER,
    Resources.CODE_BAR,
    Resources.NAME,
    Resources.FOREIGN_NAME,
    Resources.GROUP,
    Resources.UNIT_OF_MEASURE,
    Resources.COST_1,
    Resources.COST_2,
    Resources.COST_3,
    Resources.COST_4,
    Resources.COST_5,
    Resources.COST_6,
    Resources.COST_7,
    Resources.COST_8,
    Resources.COST_9,
    Resources.COST_10,
    Resources.ACTIVE_FROM,
    Resources.ACTIVE_TO,
    Resources.INACTIVE_FROM,
    Resources.INACTIVE_TO,
    Resources.DEFAULT_WAREHOUSE,
    Resources.PICTURE,
    Resources.REMARKS,
    Resources.ACTIVE_REMARKS,
    Resources.INACTIVE_REMARKS,
    Resources.ATTACHMENT_ENTRY,
    Resources.UNITS_PER_TIME,
    Resources.TIME_PER_UNITS,
    Resources.LINKED_ITEM,
    Resources.RESOURCE_WAREHOUSES,
    Resources.RESOURCE_FIXED_ASSETS,
    Resources.RESOURCE_EMPLOYEES,
    Resources.RESOURCE_DAILY_CAPACITIES,
    Resources.ITEMS,
    Resources.RESOURCE_CAPACITIES,
    Resources.RESOURCE_GROUP,
    Resources.ITEM
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Resources> = new AllFields('*', Resources);
  /**
   * All key fields of the Resources entity.
   */
  export const _keyFields: Array<Field<Resources>> = [Resources.CODE];
  /**
   * Mapping of all key field names to the respective static field property Resources.
   */
  export const _keys: { [keys: string]: Field<Resources> } = Resources._keyFields.reduce((acc: { [keys: string]: Field<Resources> }, field: Field<Resources>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
