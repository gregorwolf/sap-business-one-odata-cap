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
import { AssetRetirement } from './AssetRetirement';

/**
 * Request builder class for operations supported on the {@link AssetRetirement} entity.
 */
export class AssetRetirementRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetRetirement<T>, T> {
  /**
   * Returns a request builder for retrieving one `AssetRetirement` entity based on its keys.
   * @param docEntry Key property. See {@link AssetRetirement.docEntry}.
   * @returns A request builder for creating requests to retrieve one `AssetRetirement` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AssetRetirement<T>, T> {
    return new GetByKeyRequestBuilder<AssetRetirement<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `AssetRetirement` entities.
   * @returns A request builder for creating requests to retrieve all `AssetRetirement` entities.
   */
  getAll(): GetAllRequestBuilder<AssetRetirement<T>, T> {
    return new GetAllRequestBuilder<AssetRetirement<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetRetirement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetRetirement`.
   */
  create(
    entity: AssetRetirement<T>
  ): CreateRequestBuilder<AssetRetirement<T>, T> {
    return new CreateRequestBuilder<AssetRetirement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetRetirement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetRetirement`.
   */
  update(
    entity: AssetRetirement<T>
  ): UpdateRequestBuilder<AssetRetirement<T>, T> {
    return new UpdateRequestBuilder<AssetRetirement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetRetirement`.
   * @param docEntry Key property. See {@link AssetRetirement.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `AssetRetirement`.
   */
  delete(docEntry: number): DeleteRequestBuilder<AssetRetirement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetRetirement`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetRetirement` by taking the entity as a parameter.
   */
  delete(
    entity: AssetRetirement<T>
  ): DeleteRequestBuilder<AssetRetirement<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<AssetRetirement<T>, T> {
    return new DeleteRequestBuilder<AssetRetirement<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof AssetRetirement
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
