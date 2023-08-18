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
import { LandedCosts } from './LandedCosts';

/**
 * Request builder class for operations supported on the {@link LandedCosts} entity.
 */
export class LandedCostsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LandedCosts<T>, T> {
  /**
   * Returns a request builder for retrieving one `LandedCosts` entity based on its keys.
   * @param docEntry Key property. See {@link LandedCosts.docEntry}.
   * @returns A request builder for creating requests to retrieve one `LandedCosts` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<LandedCosts<T>, T> {
    return new GetByKeyRequestBuilder<LandedCosts<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `LandedCosts` entities.
   * @returns A request builder for creating requests to retrieve all `LandedCosts` entities.
   */
  getAll(): GetAllRequestBuilder<LandedCosts<T>, T> {
    return new GetAllRequestBuilder<LandedCosts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LandedCosts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LandedCosts`.
   */
  create(entity: LandedCosts<T>): CreateRequestBuilder<LandedCosts<T>, T> {
    return new CreateRequestBuilder<LandedCosts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `LandedCosts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LandedCosts`.
   */
  update(entity: LandedCosts<T>): UpdateRequestBuilder<LandedCosts<T>, T> {
    return new UpdateRequestBuilder<LandedCosts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LandedCosts`.
   * @param docEntry Key property. See {@link LandedCosts.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `LandedCosts`.
   */
  delete(docEntry: number): DeleteRequestBuilder<LandedCosts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LandedCosts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LandedCosts` by taking the entity as a parameter.
   */
  delete(entity: LandedCosts<T>): DeleteRequestBuilder<LandedCosts<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<LandedCosts<T>, T> {
    return new DeleteRequestBuilder<LandedCosts<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof LandedCosts
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
