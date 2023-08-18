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
import { InventoryCountings } from './InventoryCountings';

/**
 * Request builder class for operations supported on the {@link InventoryCountings} entity.
 */
export class InventoryCountingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryCountings<T>, T> {
  /**
   * Returns a request builder for retrieving one `InventoryCountings` entity based on its keys.
   * @param documentEntry Key property. See {@link InventoryCountings.documentEntry}.
   * @returns A request builder for creating requests to retrieve one `InventoryCountings` entity based on its keys.
   */
  getByKey(
    documentEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<InventoryCountings<T>, T> {
    return new GetByKeyRequestBuilder<InventoryCountings<T>, T>(
      this.entityApi,
      { DocumentEntry: documentEntry }
    );
  }

  /**
   * Returns a request builder for querying all `InventoryCountings` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryCountings` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryCountings<T>, T> {
    return new GetAllRequestBuilder<InventoryCountings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryCountings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryCountings`.
   */
  create(
    entity: InventoryCountings<T>
  ): CreateRequestBuilder<InventoryCountings<T>, T> {
    return new CreateRequestBuilder<InventoryCountings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryCountings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryCountings`.
   */
  update(
    entity: InventoryCountings<T>
  ): UpdateRequestBuilder<InventoryCountings<T>, T> {
    return new UpdateRequestBuilder<InventoryCountings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryCountings`.
   * @param documentEntry Key property. See {@link InventoryCountings.documentEntry}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountings`.
   */
  delete(documentEntry: number): DeleteRequestBuilder<InventoryCountings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryCountings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountings` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryCountings<T>
  ): DeleteRequestBuilder<InventoryCountings<T>, T>;
  delete(
    documentEntryOrEntity: any
  ): DeleteRequestBuilder<InventoryCountings<T>, T> {
    return new DeleteRequestBuilder<InventoryCountings<T>, T>(
      this.entityApi,
      documentEntryOrEntity instanceof InventoryCountings
        ? documentEntryOrEntity
        : { DocumentEntry: documentEntryOrEntity! }
    );
  }
}
