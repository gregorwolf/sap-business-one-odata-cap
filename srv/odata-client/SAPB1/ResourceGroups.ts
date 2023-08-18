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
import type { ResourceGroupsApi } from './ResourceGroupsApi';
import { ResourceTypeEnum } from './ResourceTypeEnum';
import { Resources, ResourcesType } from './Resources';

/**
 * This class represents the entity "ResourceGroups" of service "SAPB1".
 */
export class ResourceGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ResourceGroupsType<T>
{
  /**
   * Technical entity name for ResourceGroups.
   */
  static _entityName = 'ResourceGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ResourceGroups entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  type?: ResourceTypeEnum | null;
  /**
   * Cost Name 1.
   * @nullable
   */
  costName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost 1.
   * @nullable
   */
  cost1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost Name 2.
   * @nullable
   */
  costName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost 2.
   * @nullable
   */
  cost2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost Name 3.
   * @nullable
   */
  costName3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost 3.
   * @nullable
   */
  cost3?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost Name 4.
   * @nullable
   */
  costName4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost 4.
   * @nullable
   */
  cost4?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost Name 5.
   * @nullable
   */
  costName5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost 5.
   * @nullable
   */
  cost5?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost Name 6.
   * @nullable
   */
  costName6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost 6.
   * @nullable
   */
  cost6?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost Name 7.
   * @nullable
   */
  costName7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost 7.
   * @nullable
   */
  cost7?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost Name 8.
   * @nullable
   */
  costName8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost 8.
   * @nullable
   */
  cost8?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost Name 9.
   * @nullable
   */
  costName9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost 9.
   * @nullable
   */
  cost9?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost Name 10.
   * @nullable
   */
  costName10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost 10.
   * @nullable
   */
  cost10?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Num Of Units Text.
   * @nullable
   */
  numOfUnitsText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Resources} entity.
   */
  resources!: Resources<T>[];

  constructor(readonly _entityApi: ResourceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ResourceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  type?: ResourceTypeEnum | null;
  costName1?: DeserializedType<T, 'Edm.String'> | null;
  cost1?: DeserializedType<T, 'Edm.Double'> | null;
  costName2?: DeserializedType<T, 'Edm.String'> | null;
  cost2?: DeserializedType<T, 'Edm.Double'> | null;
  costName3?: DeserializedType<T, 'Edm.String'> | null;
  cost3?: DeserializedType<T, 'Edm.Double'> | null;
  costName4?: DeserializedType<T, 'Edm.String'> | null;
  cost4?: DeserializedType<T, 'Edm.Double'> | null;
  costName5?: DeserializedType<T, 'Edm.String'> | null;
  cost5?: DeserializedType<T, 'Edm.Double'> | null;
  costName6?: DeserializedType<T, 'Edm.String'> | null;
  cost6?: DeserializedType<T, 'Edm.Double'> | null;
  costName7?: DeserializedType<T, 'Edm.String'> | null;
  cost7?: DeserializedType<T, 'Edm.Double'> | null;
  costName8?: DeserializedType<T, 'Edm.String'> | null;
  cost8?: DeserializedType<T, 'Edm.Double'> | null;
  costName9?: DeserializedType<T, 'Edm.String'> | null;
  cost9?: DeserializedType<T, 'Edm.Double'> | null;
  costName10?: DeserializedType<T, 'Edm.String'> | null;
  cost10?: DeserializedType<T, 'Edm.Double'> | null;
  numOfUnitsText?: DeserializedType<T, 'Edm.String'> | null;
  resources: ResourcesType<T>[];
}
