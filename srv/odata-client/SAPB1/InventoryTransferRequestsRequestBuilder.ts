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
import { InventoryTransferRequests } from './InventoryTransferRequests';

/**
 * Request builder class for operations supported on the {@link InventoryTransferRequests} entity.
 */
export class InventoryTransferRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryTransferRequests<T>, T> {
  /**
   * Returns a request builder for retrieving one `InventoryTransferRequests` entity based on its keys.
   * @param docEntry Key property. See {@link InventoryTransferRequests.docEntry}.
   * @returns A request builder for creating requests to retrieve one `InventoryTransferRequests` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<InventoryTransferRequests<T>, T> {
    return new GetByKeyRequestBuilder<InventoryTransferRequests<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `InventoryTransferRequests` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryTransferRequests` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryTransferRequests<T>, T> {
    return new GetAllRequestBuilder<InventoryTransferRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryTransferRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryTransferRequests`.
   */
  create(
    entity: InventoryTransferRequests<T>
  ): CreateRequestBuilder<InventoryTransferRequests<T>, T> {
    return new CreateRequestBuilder<InventoryTransferRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryTransferRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryTransferRequests`.
   */
  update(
    entity: InventoryTransferRequests<T>
  ): UpdateRequestBuilder<InventoryTransferRequests<T>, T> {
    return new UpdateRequestBuilder<InventoryTransferRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryTransferRequests`.
   * @param docEntry Key property. See {@link InventoryTransferRequests.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryTransferRequests`.
   */
  delete(
    docEntry: number
  ): DeleteRequestBuilder<InventoryTransferRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryTransferRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryTransferRequests` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryTransferRequests<T>
  ): DeleteRequestBuilder<InventoryTransferRequests<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<InventoryTransferRequests<T>, T> {
    return new DeleteRequestBuilder<InventoryTransferRequests<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof InventoryTransferRequests
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
