/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { CycleCountDeterminations } from './CycleCountDeterminations';

/**
 * Request builder class for operations supported on the {@link CycleCountDeterminations} entity.
 */
export class CycleCountDeterminationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CycleCountDeterminations<T>, T> {
  /**
   * Returns a request builder for retrieving one `CycleCountDeterminations` entity based on its keys.
   * @param warehouseCode Key property. See {@link CycleCountDeterminations.warehouseCode}.
   * @returns A request builder for creating requests to retrieve one `CycleCountDeterminations` entity based on its keys.
   */
  getByKey(
    warehouseCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CycleCountDeterminations<T>, T> {
    return new GetByKeyRequestBuilder<CycleCountDeterminations<T>, T>(
      this.entityApi,
      { WarehouseCode: warehouseCode }
    );
  }

  /**
   * Returns a request builder for querying all `CycleCountDeterminations` entities.
   * @returns A request builder for creating requests to retrieve all `CycleCountDeterminations` entities.
   */
  getAll(): GetAllRequestBuilder<CycleCountDeterminations<T>, T> {
    return new GetAllRequestBuilder<CycleCountDeterminations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CycleCountDeterminations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CycleCountDeterminations`.
   */
  create(
    entity: CycleCountDeterminations<T>
  ): CreateRequestBuilder<CycleCountDeterminations<T>, T> {
    return new CreateRequestBuilder<CycleCountDeterminations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CycleCountDeterminations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CycleCountDeterminations`.
   */
  update(
    entity: CycleCountDeterminations<T>
  ): UpdateRequestBuilder<CycleCountDeterminations<T>, T> {
    return new UpdateRequestBuilder<CycleCountDeterminations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CycleCountDeterminations`.
   * @param warehouseCode Key property. See {@link CycleCountDeterminations.warehouseCode}.
   * @returns A request builder for creating requests that delete an entity of type `CycleCountDeterminations`.
   */
  delete(
    warehouseCode: string
  ): DeleteRequestBuilder<CycleCountDeterminations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CycleCountDeterminations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CycleCountDeterminations` by taking the entity as a parameter.
   */
  delete(
    entity: CycleCountDeterminations<T>
  ): DeleteRequestBuilder<CycleCountDeterminations<T>, T>;
  delete(
    warehouseCodeOrEntity: any
  ): DeleteRequestBuilder<CycleCountDeterminations<T>, T> {
    return new DeleteRequestBuilder<CycleCountDeterminations<T>, T>(
      this.entityApi,
      warehouseCodeOrEntity instanceof CycleCountDeterminations
        ? warehouseCodeOrEntity
        : { WarehouseCode: warehouseCodeOrEntity! }
    );
  }
}
