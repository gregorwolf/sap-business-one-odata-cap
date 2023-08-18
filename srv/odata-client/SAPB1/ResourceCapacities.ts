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
import type { ResourceCapacitiesApi } from './ResourceCapacitiesApi';
import { ResourceCapacityTypeEnum } from './ResourceCapacityTypeEnum';
import { ResourceCapacitySourceTypeEnum } from './ResourceCapacitySourceTypeEnum';
import { ResourceCapacityBaseTypeEnum } from './ResourceCapacityBaseTypeEnum';
import { ResourceCapacityActionEnum } from './ResourceCapacityActionEnum';
import { ResourceCapacityOwningTypeEnum } from './ResourceCapacityOwningTypeEnum';
import { ResourceCapacityRevertedTypeEnum } from './ResourceCapacityRevertedTypeEnum';
import { ResourceCapacityMemoSourceEnum } from './ResourceCapacityMemoSourceEnum';
import { Resources, ResourcesType } from './Resources';
import { Warehouses, WarehousesType } from './Warehouses';

/**
 * This class represents the entity "ResourceCapacities" of service "SAPB1".
 */
export class ResourceCapacities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ResourceCapacitiesType<T>
{
  /**
   * Technical entity name for ResourceCapacities.
   */
  static _entityName = 'ResourceCapacities';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ResourceCapacities entity
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  id!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Type.
   * @nullable
   */
  type?: ResourceCapacityTypeEnum | null;
  /**
   * Capacity.
   * @nullable
   */
  capacity?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Source Type.
   * @nullable
   */
  sourceType?: ResourceCapacitySourceTypeEnum | null;
  /**
   * Source Entry.
   * @nullable
   */
  sourceEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Source Line Num.
   * @nullable
   */
  sourceLineNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: ResourceCapacityBaseTypeEnum | null;
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Base Line Num.
   * @nullable
   */
  baseLineNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Action.
   * @nullable
   */
  action?: ResourceCapacityActionEnum | null;
  /**
   * Owning Type.
   * @nullable
   */
  owningType?: ResourceCapacityOwningTypeEnum | null;
  /**
   * Owning Entry.
   * @nullable
   */
  owningEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Owning Line Num.
   * @nullable
   */
  owningLineNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Reverted Type.
   * @nullable
   */
  revertedType?: ResourceCapacityRevertedTypeEnum | null;
  /**
   * Reverted Entry.
   * @nullable
   */
  revertedEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Reverted Line Num.
   * @nullable
   */
  revertedLineNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Memo Source.
   * @nullable
   */
  memoSource?: ResourceCapacityMemoSourceEnum | null;
  /**
   * Memo.
   * @nullable
   */
  memo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Single Run Capacity.
   * @nullable
   */
  singleRunCapacity?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Single Run Memo Source.
   * @nullable
   */
  singleRunMemoSource?: ResourceCapacityMemoSourceEnum | null;
  /**
   * Single Run Memo.
   * @nullable
   */
  singleRunMemo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Resources} entity.
   */
  resource?: Resources<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  warehouse2?: Warehouses<T> | null;

  constructor(readonly _entityApi: ResourceCapacitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ResourceCapacitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  date?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  type?: ResourceCapacityTypeEnum | null;
  capacity?: DeserializedType<T, 'Edm.Double'> | null;
  sourceType?: ResourceCapacitySourceTypeEnum | null;
  sourceEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  sourceLineNum?: DeserializedType<T, 'Edm.Int32'> | null;
  baseType?: ResourceCapacityBaseTypeEnum | null;
  baseEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  baseLineNum?: DeserializedType<T, 'Edm.Int32'> | null;
  action?: ResourceCapacityActionEnum | null;
  owningType?: ResourceCapacityOwningTypeEnum | null;
  owningEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  owningLineNum?: DeserializedType<T, 'Edm.Int32'> | null;
  revertedType?: ResourceCapacityRevertedTypeEnum | null;
  revertedEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  revertedLineNum?: DeserializedType<T, 'Edm.Int32'> | null;
  memoSource?: ResourceCapacityMemoSourceEnum | null;
  memo?: DeserializedType<T, 'Edm.String'> | null;
  singleRunCapacity?: DeserializedType<T, 'Edm.Double'> | null;
  singleRunMemoSource?: ResourceCapacityMemoSourceEnum | null;
  singleRunMemo?: DeserializedType<T, 'Edm.String'> | null;
  resource?: ResourcesType<T> | null;
  warehouse2?: WarehousesType<T> | null;
}
