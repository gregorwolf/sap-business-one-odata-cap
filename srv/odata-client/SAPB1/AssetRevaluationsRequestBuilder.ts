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
import { AssetRevaluations } from './AssetRevaluations';

/**
 * Request builder class for operations supported on the {@link AssetRevaluations} entity.
 */
export class AssetRevaluationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetRevaluations<T>, T> {
  /**
   * Returns a request builder for retrieving one `AssetRevaluations` entity based on its keys.
   * @param docEntry Key property. See {@link AssetRevaluations.docEntry}.
   * @returns A request builder for creating requests to retrieve one `AssetRevaluations` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AssetRevaluations<T>, T> {
    return new GetByKeyRequestBuilder<AssetRevaluations<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `AssetRevaluations` entities.
   * @returns A request builder for creating requests to retrieve all `AssetRevaluations` entities.
   */
  getAll(): GetAllRequestBuilder<AssetRevaluations<T>, T> {
    return new GetAllRequestBuilder<AssetRevaluations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetRevaluations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetRevaluations`.
   */
  create(
    entity: AssetRevaluations<T>
  ): CreateRequestBuilder<AssetRevaluations<T>, T> {
    return new CreateRequestBuilder<AssetRevaluations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetRevaluations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetRevaluations`.
   */
  update(
    entity: AssetRevaluations<T>
  ): UpdateRequestBuilder<AssetRevaluations<T>, T> {
    return new UpdateRequestBuilder<AssetRevaluations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetRevaluations`.
   * @param docEntry Key property. See {@link AssetRevaluations.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `AssetRevaluations`.
   */
  delete(docEntry: number): DeleteRequestBuilder<AssetRevaluations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetRevaluations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetRevaluations` by taking the entity as a parameter.
   */
  delete(
    entity: AssetRevaluations<T>
  ): DeleteRequestBuilder<AssetRevaluations<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<AssetRevaluations<T>, T> {
    return new DeleteRequestBuilder<AssetRevaluations<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof AssetRevaluations
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
