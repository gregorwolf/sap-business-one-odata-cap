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
import { AssetTransfer } from './AssetTransfer';

/**
 * Request builder class for operations supported on the {@link AssetTransfer} entity.
 */
export class AssetTransferRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetTransfer<T>, T> {
  /**
   * Returns a request builder for retrieving one `AssetTransfer` entity based on its keys.
   * @param docEntry Key property. See {@link AssetTransfer.docEntry}.
   * @returns A request builder for creating requests to retrieve one `AssetTransfer` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AssetTransfer<T>, T> {
    return new GetByKeyRequestBuilder<AssetTransfer<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `AssetTransfer` entities.
   * @returns A request builder for creating requests to retrieve all `AssetTransfer` entities.
   */
  getAll(): GetAllRequestBuilder<AssetTransfer<T>, T> {
    return new GetAllRequestBuilder<AssetTransfer<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetTransfer` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetTransfer`.
   */
  create(entity: AssetTransfer<T>): CreateRequestBuilder<AssetTransfer<T>, T> {
    return new CreateRequestBuilder<AssetTransfer<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetTransfer`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetTransfer`.
   */
  update(entity: AssetTransfer<T>): UpdateRequestBuilder<AssetTransfer<T>, T> {
    return new UpdateRequestBuilder<AssetTransfer<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetTransfer`.
   * @param docEntry Key property. See {@link AssetTransfer.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `AssetTransfer`.
   */
  delete(docEntry: number): DeleteRequestBuilder<AssetTransfer<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetTransfer`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetTransfer` by taking the entity as a parameter.
   */
  delete(entity: AssetTransfer<T>): DeleteRequestBuilder<AssetTransfer<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<AssetTransfer<T>, T> {
    return new DeleteRequestBuilder<AssetTransfer<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof AssetTransfer
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
