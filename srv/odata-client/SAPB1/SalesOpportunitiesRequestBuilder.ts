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
import { SalesOpportunities } from './SalesOpportunities';

/**
 * Request builder class for operations supported on the {@link SalesOpportunities} entity.
 */
export class SalesOpportunitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOpportunities<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOpportunities` entity based on its keys.
   * @param sequentialNo Key property. See {@link SalesOpportunities.sequentialNo}.
   * @returns A request builder for creating requests to retrieve one `SalesOpportunities` entity based on its keys.
   */
  getByKey(
    sequentialNo: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesOpportunities<T>, T> {
    return new GetByKeyRequestBuilder<SalesOpportunities<T>, T>(
      this.entityApi,
      { SequentialNo: sequentialNo }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOpportunities` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOpportunities` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOpportunities<T>, T> {
    return new GetAllRequestBuilder<SalesOpportunities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesOpportunities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOpportunities`.
   */
  create(
    entity: SalesOpportunities<T>
  ): CreateRequestBuilder<SalesOpportunities<T>, T> {
    return new CreateRequestBuilder<SalesOpportunities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOpportunities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOpportunities`.
   */
  update(
    entity: SalesOpportunities<T>
  ): UpdateRequestBuilder<SalesOpportunities<T>, T> {
    return new UpdateRequestBuilder<SalesOpportunities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunities`.
   * @param sequentialNo Key property. See {@link SalesOpportunities.sequentialNo}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunities`.
   */
  delete(sequentialNo: number): DeleteRequestBuilder<SalesOpportunities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunities` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOpportunities<T>
  ): DeleteRequestBuilder<SalesOpportunities<T>, T>;
  delete(
    sequentialNoOrEntity: any
  ): DeleteRequestBuilder<SalesOpportunities<T>, T> {
    return new DeleteRequestBuilder<SalesOpportunities<T>, T>(
      this.entityApi,
      sequentialNoOrEntity instanceof SalesOpportunities
        ? sequentialNoOrEntity
        : { SequentialNo: sequentialNoOrEntity! }
    );
  }
}
