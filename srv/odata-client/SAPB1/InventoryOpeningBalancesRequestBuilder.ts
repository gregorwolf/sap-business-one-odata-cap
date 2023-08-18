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
import { InventoryOpeningBalances } from './InventoryOpeningBalances';

/**
 * Request builder class for operations supported on the {@link InventoryOpeningBalances} entity.
 */
export class InventoryOpeningBalancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryOpeningBalances<T>, T> {
  /**
   * Returns a request builder for retrieving one `InventoryOpeningBalances` entity based on its keys.
   * @param documentEntry Key property. See {@link InventoryOpeningBalances.documentEntry}.
   * @returns A request builder for creating requests to retrieve one `InventoryOpeningBalances` entity based on its keys.
   */
  getByKey(
    documentEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<InventoryOpeningBalances<T>, T> {
    return new GetByKeyRequestBuilder<InventoryOpeningBalances<T>, T>(
      this.entityApi,
      { DocumentEntry: documentEntry }
    );
  }

  /**
   * Returns a request builder for querying all `InventoryOpeningBalances` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryOpeningBalances` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryOpeningBalances<T>, T> {
    return new GetAllRequestBuilder<InventoryOpeningBalances<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryOpeningBalances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryOpeningBalances`.
   */
  create(
    entity: InventoryOpeningBalances<T>
  ): CreateRequestBuilder<InventoryOpeningBalances<T>, T> {
    return new CreateRequestBuilder<InventoryOpeningBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryOpeningBalances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryOpeningBalances`.
   */
  update(
    entity: InventoryOpeningBalances<T>
  ): UpdateRequestBuilder<InventoryOpeningBalances<T>, T> {
    return new UpdateRequestBuilder<InventoryOpeningBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryOpeningBalances`.
   * @param documentEntry Key property. See {@link InventoryOpeningBalances.documentEntry}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryOpeningBalances`.
   */
  delete(
    documentEntry: number
  ): DeleteRequestBuilder<InventoryOpeningBalances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryOpeningBalances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryOpeningBalances` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryOpeningBalances<T>
  ): DeleteRequestBuilder<InventoryOpeningBalances<T>, T>;
  delete(
    documentEntryOrEntity: any
  ): DeleteRequestBuilder<InventoryOpeningBalances<T>, T> {
    return new DeleteRequestBuilder<InventoryOpeningBalances<T>, T>(
      this.entityApi,
      documentEntryOrEntity instanceof InventoryOpeningBalances
        ? documentEntryOrEntity
        : { DocumentEntry: documentEntryOrEntity! }
    );
  }
}
