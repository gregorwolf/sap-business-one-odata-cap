/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { ResourceWarehouse } from './ResourceWarehouse';
import { ResourceFixedAsset } from './ResourceFixedAsset';
import { ResourceEmployee } from './ResourceEmployee';
import { ResourceDailyCapacity } from './ResourceDailyCapacity';
import type { ResourcesApi } from './ResourcesApi';
import { ResourceTypeEnum } from './ResourceTypeEnum';
import { ResourceIssueMethodEnum } from './ResourceIssueMethodEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ResourceAllocationEnum } from './ResourceAllocationEnum';
import { Items, ItemsType } from './Items';
import {
  ResourceCapacities,
  ResourceCapacitiesType
} from './ResourceCapacities';
import { ResourceGroups, ResourceGroupsType } from './ResourceGroups';

/**
 * This class represents the entity "Resources" of service "SAPB1".
 */
export class Resources<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ResourcesType<T>
{
  /**
   * Technical entity name for Resources.
   */
  static _entityName = 'Resources';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Resources entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Vis Code.
   * @nullable
   */
  visCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Number.
   * @nullable
   */
  number?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Code Bar.
   * @nullable
   */
  codeBar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Name.
   * @nullable
   */
  foreignName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  type?: ResourceTypeEnum | null;
  /**
   * Group.
   * @nullable
   */
  group?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Unit Of Measure.
   * @nullable
   */
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Method.
   * @nullable
   */
  issueMethod?: ResourceIssueMethodEnum | null;
  /**
   * Cost 1.
   * @nullable
   */
  cost1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost 2.
   * @nullable
   */
  cost2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost 3.
   * @nullable
   */
  cost3?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost 4.
   * @nullable
   */
  cost4?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost 5.
   * @nullable
   */
  cost5?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost 6.
   * @nullable
   */
  cost6?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost 7.
   * @nullable
   */
  cost7?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost 8.
   * @nullable
   */
  cost8?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost 9.
   * @nullable
   */
  cost9?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost 10.
   * @nullable
   */
  cost10?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum | null;
  /**
   * Active From.
   * @nullable
   */
  activeFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Active To.
   * @nullable
   */
  activeTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum | null;
  /**
   * Inactive From.
   * @nullable
   */
  inactiveFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Inactive To.
   * @nullable
   */
  inactiveTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Default Warehouse.
   * @nullable
   */
  defaultWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Picture.
   * @nullable
   */
  picture?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Property 1.
   * @nullable
   */
  property1?: BoYesNoEnum | null;
  /**
   * Property 2.
   * @nullable
   */
  property2?: BoYesNoEnum | null;
  /**
   * Property 3.
   * @nullable
   */
  property3?: BoYesNoEnum | null;
  /**
   * Property 4.
   * @nullable
   */
  property4?: BoYesNoEnum | null;
  /**
   * Property 5.
   * @nullable
   */
  property5?: BoYesNoEnum | null;
  /**
   * Property 6.
   * @nullable
   */
  property6?: BoYesNoEnum | null;
  /**
   * Property 7.
   * @nullable
   */
  property7?: BoYesNoEnum | null;
  /**
   * Property 8.
   * @nullable
   */
  property8?: BoYesNoEnum | null;
  /**
   * Property 9.
   * @nullable
   */
  property9?: BoYesNoEnum | null;
  /**
   * Property 10.
   * @nullable
   */
  property10?: BoYesNoEnum | null;
  /**
   * Property 11.
   * @nullable
   */
  property11?: BoYesNoEnum | null;
  /**
   * Property 12.
   * @nullable
   */
  property12?: BoYesNoEnum | null;
  /**
   * Property 13.
   * @nullable
   */
  property13?: BoYesNoEnum | null;
  /**
   * Property 14.
   * @nullable
   */
  property14?: BoYesNoEnum | null;
  /**
   * Property 15.
   * @nullable
   */
  property15?: BoYesNoEnum | null;
  /**
   * Property 16.
   * @nullable
   */
  property16?: BoYesNoEnum | null;
  /**
   * Property 17.
   * @nullable
   */
  property17?: BoYesNoEnum | null;
  /**
   * Property 18.
   * @nullable
   */
  property18?: BoYesNoEnum | null;
  /**
   * Property 19.
   * @nullable
   */
  property19?: BoYesNoEnum | null;
  /**
   * Property 20.
   * @nullable
   */
  property20?: BoYesNoEnum | null;
  /**
   * Property 21.
   * @nullable
   */
  property21?: BoYesNoEnum | null;
  /**
   * Property 22.
   * @nullable
   */
  property22?: BoYesNoEnum | null;
  /**
   * Property 23.
   * @nullable
   */
  property23?: BoYesNoEnum | null;
  /**
   * Property 24.
   * @nullable
   */
  property24?: BoYesNoEnum | null;
  /**
   * Property 25.
   * @nullable
   */
  property25?: BoYesNoEnum | null;
  /**
   * Property 26.
   * @nullable
   */
  property26?: BoYesNoEnum | null;
  /**
   * Property 27.
   * @nullable
   */
  property27?: BoYesNoEnum | null;
  /**
   * Property 28.
   * @nullable
   */
  property28?: BoYesNoEnum | null;
  /**
   * Property 29.
   * @nullable
   */
  property29?: BoYesNoEnum | null;
  /**
   * Property 30.
   * @nullable
   */
  property30?: BoYesNoEnum | null;
  /**
   * Property 31.
   * @nullable
   */
  property31?: BoYesNoEnum | null;
  /**
   * Property 32.
   * @nullable
   */
  property32?: BoYesNoEnum | null;
  /**
   * Property 33.
   * @nullable
   */
  property33?: BoYesNoEnum | null;
  /**
   * Property 34.
   * @nullable
   */
  property34?: BoYesNoEnum | null;
  /**
   * Property 35.
   * @nullable
   */
  property35?: BoYesNoEnum | null;
  /**
   * Property 36.
   * @nullable
   */
  property36?: BoYesNoEnum | null;
  /**
   * Property 37.
   * @nullable
   */
  property37?: BoYesNoEnum | null;
  /**
   * Property 38.
   * @nullable
   */
  property38?: BoYesNoEnum | null;
  /**
   * Property 39.
   * @nullable
   */
  property39?: BoYesNoEnum | null;
  /**
   * Property 40.
   * @nullable
   */
  property40?: BoYesNoEnum | null;
  /**
   * Property 41.
   * @nullable
   */
  property41?: BoYesNoEnum | null;
  /**
   * Property 42.
   * @nullable
   */
  property42?: BoYesNoEnum | null;
  /**
   * Property 43.
   * @nullable
   */
  property43?: BoYesNoEnum | null;
  /**
   * Property 44.
   * @nullable
   */
  property44?: BoYesNoEnum | null;
  /**
   * Property 45.
   * @nullable
   */
  property45?: BoYesNoEnum | null;
  /**
   * Property 46.
   * @nullable
   */
  property46?: BoYesNoEnum | null;
  /**
   * Property 47.
   * @nullable
   */
  property47?: BoYesNoEnum | null;
  /**
   * Property 48.
   * @nullable
   */
  property48?: BoYesNoEnum | null;
  /**
   * Property 49.
   * @nullable
   */
  property49?: BoYesNoEnum | null;
  /**
   * Property 50.
   * @nullable
   */
  property50?: BoYesNoEnum | null;
  /**
   * Property 51.
   * @nullable
   */
  property51?: BoYesNoEnum | null;
  /**
   * Property 52.
   * @nullable
   */
  property52?: BoYesNoEnum | null;
  /**
   * Property 53.
   * @nullable
   */
  property53?: BoYesNoEnum | null;
  /**
   * Property 54.
   * @nullable
   */
  property54?: BoYesNoEnum | null;
  /**
   * Property 55.
   * @nullable
   */
  property55?: BoYesNoEnum | null;
  /**
   * Property 56.
   * @nullable
   */
  property56?: BoYesNoEnum | null;
  /**
   * Property 57.
   * @nullable
   */
  property57?: BoYesNoEnum | null;
  /**
   * Property 58.
   * @nullable
   */
  property58?: BoYesNoEnum | null;
  /**
   * Property 59.
   * @nullable
   */
  property59?: BoYesNoEnum | null;
  /**
   * Property 60.
   * @nullable
   */
  property60?: BoYesNoEnum | null;
  /**
   * Property 61.
   * @nullable
   */
  property61?: BoYesNoEnum | null;
  /**
   * Property 62.
   * @nullable
   */
  property62?: BoYesNoEnum | null;
  /**
   * Property 63.
   * @nullable
   */
  property63?: BoYesNoEnum | null;
  /**
   * Property 64.
   * @nullable
   */
  property64?: BoYesNoEnum | null;
  /**
   * Active Remarks.
   * @nullable
   */
  activeRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inactive Remarks.
   * @nullable
   */
  inactiveRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Units Per Time.
   * @nullable
   */
  unitsPerTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Time Per Units.
   * @nullable
   */
  timePerUnits?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Allocation.
   * @nullable
   */
  allocation?: ResourceAllocationEnum | null;
  /**
   * Linked Item.
   * @nullable
   */
  linkedItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relevant For Single Run 1.
   * @nullable
   */
  relevantForSingleRun1?: BoYesNoEnum | null;
  /**
   * Relevant For Single Run 2.
   * @nullable
   */
  relevantForSingleRun2?: BoYesNoEnum | null;
  /**
   * Relevant For Single Run 3.
   * @nullable
   */
  relevantForSingleRun3?: BoYesNoEnum | null;
  /**
   * Relevant For Single Run 4.
   * @nullable
   */
  relevantForSingleRun4?: BoYesNoEnum | null;
  /**
   * Resource Warehouses.
   * @nullable
   */
  resourceWarehouses?: ResourceWarehouse<T>[] | null;
  /**
   * Resource Fixed Assets.
   * @nullable
   */
  resourceFixedAssets?: ResourceFixedAsset<T>[] | null;
  /**
   * Resource Employees.
   * @nullable
   */
  resourceEmployees?: ResourceEmployee<T>[] | null;
  /**
   * Resource Daily Capacities.
   * @nullable
   */
  resourceDailyCapacities?: ResourceDailyCapacity<T>[] | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link ResourceCapacities} entity.
   */
  resourceCapacities!: ResourceCapacities<T>[];
  /**
   * One-to-one navigation property to the {@link ResourceGroups} entity.
   */
  resourceGroup?: ResourceGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;

  constructor(readonly _entityApi: ResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface ResourcesType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  visCode?: DeserializedType<T, 'Edm.String'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  number?: DeserializedType<T, 'Edm.Int32'> | null;
  codeBar?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  foreignName?: DeserializedType<T, 'Edm.String'> | null;
  type?: ResourceTypeEnum | null;
  group?: DeserializedType<T, 'Edm.Int32'> | null;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  issueMethod?: ResourceIssueMethodEnum | null;
  cost1?: DeserializedType<T, 'Edm.Double'> | null;
  cost2?: DeserializedType<T, 'Edm.Double'> | null;
  cost3?: DeserializedType<T, 'Edm.Double'> | null;
  cost4?: DeserializedType<T, 'Edm.Double'> | null;
  cost5?: DeserializedType<T, 'Edm.Double'> | null;
  cost6?: DeserializedType<T, 'Edm.Double'> | null;
  cost7?: DeserializedType<T, 'Edm.Double'> | null;
  cost8?: DeserializedType<T, 'Edm.Double'> | null;
  cost9?: DeserializedType<T, 'Edm.Double'> | null;
  cost10?: DeserializedType<T, 'Edm.Double'> | null;
  active?: BoYesNoEnum | null;
  activeFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  activeTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  inactive?: BoYesNoEnum | null;
  inactiveFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  inactiveTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  defaultWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  picture?: DeserializedType<T, 'Edm.String'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
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
  activeRemarks?: DeserializedType<T, 'Edm.String'> | null;
  inactiveRemarks?: DeserializedType<T, 'Edm.String'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  unitsPerTime?: DeserializedType<T, 'Edm.Int32'> | null;
  timePerUnits?: DeserializedType<T, 'Edm.Int32'> | null;
  allocation?: ResourceAllocationEnum | null;
  linkedItem?: DeserializedType<T, 'Edm.String'> | null;
  relevantForSingleRun1?: BoYesNoEnum | null;
  relevantForSingleRun2?: BoYesNoEnum | null;
  relevantForSingleRun3?: BoYesNoEnum | null;
  relevantForSingleRun4?: BoYesNoEnum | null;
  resourceWarehouses?: ResourceWarehouse<T>[] | null;
  resourceFixedAssets?: ResourceFixedAsset<T>[] | null;
  resourceEmployees?: ResourceEmployee<T>[] | null;
  resourceDailyCapacities?: ResourceDailyCapacity<T>[] | null;
  items: ItemsType<T>[];
  resourceCapacities: ResourceCapacitiesType<T>[];
  resourceGroup?: ResourceGroupsType<T> | null;
  item?: ItemsType<T> | null;
}
