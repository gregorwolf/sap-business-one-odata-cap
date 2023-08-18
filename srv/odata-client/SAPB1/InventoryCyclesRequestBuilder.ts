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
import { InventoryCycles } from './InventoryCycles';

/**
 * Request builder class for operations supported on the {@link InventoryCycles} entity.
 */
export class InventoryCyclesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryCycles<T>, T> {
  /**
   * Returns a request builder for retrieving one `InventoryCycles` entity based on its keys.
   * @param cycleCode Key property. See {@link InventoryCycles.cycleCode}.
   * @returns A request builder for creating requests to retrieve one `InventoryCycles` entity based on its keys.
   */
  getByKey(
    cycleCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<InventoryCycles<T>, T> {
    return new GetByKeyRequestBuilder<InventoryCycles<T>, T>(this.entityApi, {
      CycleCode: cycleCode
    });
  }

  /**
   * Returns a request builder for querying all `InventoryCycles` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryCycles` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryCycles<T>, T> {
    return new GetAllRequestBuilder<InventoryCycles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryCycles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryCycles`.
   */
  create(
    entity: InventoryCycles<T>
  ): CreateRequestBuilder<InventoryCycles<T>, T> {
    return new CreateRequestBuilder<InventoryCycles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryCycles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryCycles`.
   */
  update(
    entity: InventoryCycles<T>
  ): UpdateRequestBuilder<InventoryCycles<T>, T> {
    return new UpdateRequestBuilder<InventoryCycles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryCycles`.
   * @param cycleCode Key property. See {@link InventoryCycles.cycleCode}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCycles`.
   */
  delete(cycleCode: number): DeleteRequestBuilder<InventoryCycles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryCycles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCycles` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryCycles<T>
  ): DeleteRequestBuilder<InventoryCycles<T>, T>;
  delete(cycleCodeOrEntity: any): DeleteRequestBuilder<InventoryCycles<T>, T> {
    return new DeleteRequestBuilder<InventoryCycles<T>, T>(
      this.entityApi,
      cycleCodeOrEntity instanceof InventoryCycles
        ? cycleCodeOrEntity
        : { CycleCode: cycleCodeOrEntity! }
    );
  }
}
