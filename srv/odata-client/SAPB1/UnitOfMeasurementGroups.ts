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
import { UoMGroupDefinition } from './UoMGroupDefinition';
import type { UnitOfMeasurementGroupsApi } from './UnitOfMeasurementGroupsApi';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { Items, ItemsType } from './Items';
import { BinLocations, BinLocationsType } from './BinLocations';
import {
  UnitOfMeasurements,
  UnitOfMeasurementsType
} from './UnitOfMeasurements';

/**
 * This class represents the entity "UnitOfMeasurementGroups" of service "SAPB1".
 */
export class UnitOfMeasurementGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements UnitOfMeasurementGroupsType<T>
{
  /**
   * Technical entity name for UnitOfMeasurementGroups.
   */
  static _entityName = 'UnitOfMeasurementGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the UnitOfMeasurementGroups entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Uo M.
   * @nullable
   */
  baseUoM?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Uo M Group Definition Collection.
   * @nullable
   */
  uoMGroupDefinitionCollection?: UoMGroupDefinition<T>[] | null;
  /**
   * One-to-many navigation property to the {@link ItemGroups} entity.
   */
  itemGroups!: ItemGroups<T>[];
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link BinLocations} entity.
   */
  binLocations!: BinLocations<T>[];
  /**
   * One-to-one navigation property to the {@link UnitOfMeasurements} entity.
   */
  unitOfMeasurement?: UnitOfMeasurements<T> | null;

  constructor(readonly _entityApi: UnitOfMeasurementGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface UnitOfMeasurementGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  baseUoM?: DeserializedType<T, 'Edm.Int32'> | null;
  uoMGroupDefinitionCollection?: UoMGroupDefinition<T>[] | null;
  itemGroups: ItemGroupsType<T>[];
  items: ItemsType<T>[];
  binLocations: BinLocationsType<T>[];
  unitOfMeasurement?: UnitOfMeasurementsType<T> | null;
}
