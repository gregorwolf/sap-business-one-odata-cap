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
import { InventoryGenExits } from './InventoryGenExits';

/**
 * Request builder class for operations supported on the {@link InventoryGenExits} entity.
 */
export class InventoryGenExitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryGenExits<T>, T> {
  /**
   * Returns a request builder for retrieving one `InventoryGenExits` entity based on its keys.
   * @param docEntry Key property. See {@link InventoryGenExits.docEntry}.
   * @returns A request builder for creating requests to retrieve one `InventoryGenExits` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<InventoryGenExits<T>, T> {
    return new GetByKeyRequestBuilder<InventoryGenExits<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `InventoryGenExits` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryGenExits` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryGenExits<T>, T> {
    return new GetAllRequestBuilder<InventoryGenExits<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryGenExits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryGenExits`.
   */
  create(
    entity: InventoryGenExits<T>
  ): CreateRequestBuilder<InventoryGenExits<T>, T> {
    return new CreateRequestBuilder<InventoryGenExits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryGenExits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryGenExits`.
   */
  update(
    entity: InventoryGenExits<T>
  ): UpdateRequestBuilder<InventoryGenExits<T>, T> {
    return new UpdateRequestBuilder<InventoryGenExits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryGenExits`.
   * @param docEntry Key property. See {@link InventoryGenExits.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryGenExits`.
   */
  delete(docEntry: number): DeleteRequestBuilder<InventoryGenExits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryGenExits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryGenExits` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryGenExits<T>
  ): DeleteRequestBuilder<InventoryGenExits<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<InventoryGenExits<T>, T> {
    return new DeleteRequestBuilder<InventoryGenExits<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof InventoryGenExits
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
