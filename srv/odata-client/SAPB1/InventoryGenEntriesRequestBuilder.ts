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
import { InventoryGenEntries } from './InventoryGenEntries';

/**
 * Request builder class for operations supported on the {@link InventoryGenEntries} entity.
 */
export class InventoryGenEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryGenEntries<T>, T> {
  /**
   * Returns a request builder for retrieving one `InventoryGenEntries` entity based on its keys.
   * @param docEntry Key property. See {@link InventoryGenEntries.docEntry}.
   * @returns A request builder for creating requests to retrieve one `InventoryGenEntries` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<InventoryGenEntries<T>, T> {
    return new GetByKeyRequestBuilder<InventoryGenEntries<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `InventoryGenEntries` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryGenEntries` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryGenEntries<T>, T> {
    return new GetAllRequestBuilder<InventoryGenEntries<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryGenEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryGenEntries`.
   */
  create(
    entity: InventoryGenEntries<T>
  ): CreateRequestBuilder<InventoryGenEntries<T>, T> {
    return new CreateRequestBuilder<InventoryGenEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryGenEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryGenEntries`.
   */
  update(
    entity: InventoryGenEntries<T>
  ): UpdateRequestBuilder<InventoryGenEntries<T>, T> {
    return new UpdateRequestBuilder<InventoryGenEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryGenEntries`.
   * @param docEntry Key property. See {@link InventoryGenEntries.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryGenEntries`.
   */
  delete(docEntry: number): DeleteRequestBuilder<InventoryGenEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryGenEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryGenEntries` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryGenEntries<T>
  ): DeleteRequestBuilder<InventoryGenEntries<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<InventoryGenEntries<T>, T> {
    return new DeleteRequestBuilder<InventoryGenEntries<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof InventoryGenEntries
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
