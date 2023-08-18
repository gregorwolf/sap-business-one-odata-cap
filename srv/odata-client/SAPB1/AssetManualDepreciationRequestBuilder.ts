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
import { AssetManualDepreciation } from './AssetManualDepreciation';

/**
 * Request builder class for operations supported on the {@link AssetManualDepreciation} entity.
 */
export class AssetManualDepreciationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetManualDepreciation<T>, T> {
  /**
   * Returns a request builder for retrieving one `AssetManualDepreciation` entity based on its keys.
   * @param docEntry Key property. See {@link AssetManualDepreciation.docEntry}.
   * @returns A request builder for creating requests to retrieve one `AssetManualDepreciation` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AssetManualDepreciation<T>, T> {
    return new GetByKeyRequestBuilder<AssetManualDepreciation<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `AssetManualDepreciation` entities.
   * @returns A request builder for creating requests to retrieve all `AssetManualDepreciation` entities.
   */
  getAll(): GetAllRequestBuilder<AssetManualDepreciation<T>, T> {
    return new GetAllRequestBuilder<AssetManualDepreciation<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetManualDepreciation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetManualDepreciation`.
   */
  create(
    entity: AssetManualDepreciation<T>
  ): CreateRequestBuilder<AssetManualDepreciation<T>, T> {
    return new CreateRequestBuilder<AssetManualDepreciation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetManualDepreciation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetManualDepreciation`.
   */
  update(
    entity: AssetManualDepreciation<T>
  ): UpdateRequestBuilder<AssetManualDepreciation<T>, T> {
    return new UpdateRequestBuilder<AssetManualDepreciation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetManualDepreciation`.
   * @param docEntry Key property. See {@link AssetManualDepreciation.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `AssetManualDepreciation`.
   */
  delete(docEntry: number): DeleteRequestBuilder<AssetManualDepreciation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetManualDepreciation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetManualDepreciation` by taking the entity as a parameter.
   */
  delete(
    entity: AssetManualDepreciation<T>
  ): DeleteRequestBuilder<AssetManualDepreciation<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<AssetManualDepreciation<T>, T> {
    return new DeleteRequestBuilder<AssetManualDepreciation<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof AssetManualDepreciation
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
