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
import { SalesOpportunityInterestsSetup } from './SalesOpportunityInterestsSetup';

/**
 * Request builder class for operations supported on the {@link SalesOpportunityInterestsSetup} entity.
 */
export class SalesOpportunityInterestsSetupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOpportunityInterestsSetup<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOpportunityInterestsSetup` entity based on its keys.
   * @param sequenceNo Key property. See {@link SalesOpportunityInterestsSetup.sequenceNo}.
   * @returns A request builder for creating requests to retrieve one `SalesOpportunityInterestsSetup` entity based on its keys.
   */
  getByKey(
    sequenceNo: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesOpportunityInterestsSetup<T>, T> {
    return new GetByKeyRequestBuilder<SalesOpportunityInterestsSetup<T>, T>(
      this.entityApi,
      { SequenceNo: sequenceNo }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOpportunityInterestsSetup` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOpportunityInterestsSetup` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOpportunityInterestsSetup<T>, T> {
    return new GetAllRequestBuilder<SalesOpportunityInterestsSetup<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOpportunityInterestsSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOpportunityInterestsSetup`.
   */
  create(
    entity: SalesOpportunityInterestsSetup<T>
  ): CreateRequestBuilder<SalesOpportunityInterestsSetup<T>, T> {
    return new CreateRequestBuilder<SalesOpportunityInterestsSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOpportunityInterestsSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOpportunityInterestsSetup`.
   */
  update(
    entity: SalesOpportunityInterestsSetup<T>
  ): UpdateRequestBuilder<SalesOpportunityInterestsSetup<T>, T> {
    return new UpdateRequestBuilder<SalesOpportunityInterestsSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityInterestsSetup`.
   * @param sequenceNo Key property. See {@link SalesOpportunityInterestsSetup.sequenceNo}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityInterestsSetup`.
   */
  delete(
    sequenceNo: number
  ): DeleteRequestBuilder<SalesOpportunityInterestsSetup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityInterestsSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityInterestsSetup` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOpportunityInterestsSetup<T>
  ): DeleteRequestBuilder<SalesOpportunityInterestsSetup<T>, T>;
  delete(
    sequenceNoOrEntity: any
  ): DeleteRequestBuilder<SalesOpportunityInterestsSetup<T>, T> {
    return new DeleteRequestBuilder<SalesOpportunityInterestsSetup<T>, T>(
      this.entityApi,
      sequenceNoOrEntity instanceof SalesOpportunityInterestsSetup
        ? sequenceNoOrEntity
        : { SequenceNo: sequenceNoOrEntity! }
    );
  }
}
