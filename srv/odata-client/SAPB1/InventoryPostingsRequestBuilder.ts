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
import { InventoryPostings } from './InventoryPostings';

/**
 * Request builder class for operations supported on the {@link InventoryPostings} entity.
 */
export class InventoryPostingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryPostings<T>, T> {
  /**
   * Returns a request builder for retrieving one `InventoryPostings` entity based on its keys.
   * @param documentEntry Key property. See {@link InventoryPostings.documentEntry}.
   * @returns A request builder for creating requests to retrieve one `InventoryPostings` entity based on its keys.
   */
  getByKey(
    documentEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<InventoryPostings<T>, T> {
    return new GetByKeyRequestBuilder<InventoryPostings<T>, T>(this.entityApi, {
      DocumentEntry: documentEntry
    });
  }

  /**
   * Returns a request builder for querying all `InventoryPostings` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryPostings` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryPostings<T>, T> {
    return new GetAllRequestBuilder<InventoryPostings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryPostings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryPostings`.
   */
  create(
    entity: InventoryPostings<T>
  ): CreateRequestBuilder<InventoryPostings<T>, T> {
    return new CreateRequestBuilder<InventoryPostings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryPostings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryPostings`.
   */
  update(
    entity: InventoryPostings<T>
  ): UpdateRequestBuilder<InventoryPostings<T>, T> {
    return new UpdateRequestBuilder<InventoryPostings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryPostings`.
   * @param documentEntry Key property. See {@link InventoryPostings.documentEntry}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryPostings`.
   */
  delete(documentEntry: number): DeleteRequestBuilder<InventoryPostings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryPostings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryPostings` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryPostings<T>
  ): DeleteRequestBuilder<InventoryPostings<T>, T>;
  delete(
    documentEntryOrEntity: any
  ): DeleteRequestBuilder<InventoryPostings<T>, T> {
    return new DeleteRequestBuilder<InventoryPostings<T>, T>(
      this.entityApi,
      documentEntryOrEntity instanceof InventoryPostings
        ? documentEntryOrEntity
        : { DocumentEntry: documentEntryOrEntity! }
    );
  }
}
