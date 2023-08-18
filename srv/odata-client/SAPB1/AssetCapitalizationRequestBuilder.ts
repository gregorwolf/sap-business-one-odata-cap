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
import { AssetCapitalization } from './AssetCapitalization';

/**
 * Request builder class for operations supported on the {@link AssetCapitalization} entity.
 */
export class AssetCapitalizationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetCapitalization<T>, T> {
  /**
   * Returns a request builder for retrieving one `AssetCapitalization` entity based on its keys.
   * @param docEntry Key property. See {@link AssetCapitalization.docEntry}.
   * @returns A request builder for creating requests to retrieve one `AssetCapitalization` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AssetCapitalization<T>, T> {
    return new GetByKeyRequestBuilder<AssetCapitalization<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `AssetCapitalization` entities.
   * @returns A request builder for creating requests to retrieve all `AssetCapitalization` entities.
   */
  getAll(): GetAllRequestBuilder<AssetCapitalization<T>, T> {
    return new GetAllRequestBuilder<AssetCapitalization<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetCapitalization` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetCapitalization`.
   */
  create(
    entity: AssetCapitalization<T>
  ): CreateRequestBuilder<AssetCapitalization<T>, T> {
    return new CreateRequestBuilder<AssetCapitalization<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetCapitalization`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetCapitalization`.
   */
  update(
    entity: AssetCapitalization<T>
  ): UpdateRequestBuilder<AssetCapitalization<T>, T> {
    return new UpdateRequestBuilder<AssetCapitalization<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetCapitalization`.
   * @param docEntry Key property. See {@link AssetCapitalization.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `AssetCapitalization`.
   */
  delete(docEntry: number): DeleteRequestBuilder<AssetCapitalization<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetCapitalization`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetCapitalization` by taking the entity as a parameter.
   */
  delete(
    entity: AssetCapitalization<T>
  ): DeleteRequestBuilder<AssetCapitalization<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<AssetCapitalization<T>, T> {
    return new DeleteRequestBuilder<AssetCapitalization<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof AssetCapitalization
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
