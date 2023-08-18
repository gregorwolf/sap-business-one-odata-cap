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
import { SalesOpportunityReasonsSetup } from './SalesOpportunityReasonsSetup';

/**
 * Request builder class for operations supported on the {@link SalesOpportunityReasonsSetup} entity.
 */
export class SalesOpportunityReasonsSetupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOpportunityReasonsSetup<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOpportunityReasonsSetup` entity based on its keys.
   * @param sequenceNo Key property. See {@link SalesOpportunityReasonsSetup.sequenceNo}.
   * @returns A request builder for creating requests to retrieve one `SalesOpportunityReasonsSetup` entity based on its keys.
   */
  getByKey(
    sequenceNo: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesOpportunityReasonsSetup<T>, T> {
    return new GetByKeyRequestBuilder<SalesOpportunityReasonsSetup<T>, T>(
      this.entityApi,
      { SequenceNo: sequenceNo }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOpportunityReasonsSetup` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOpportunityReasonsSetup` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOpportunityReasonsSetup<T>, T> {
    return new GetAllRequestBuilder<SalesOpportunityReasonsSetup<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOpportunityReasonsSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOpportunityReasonsSetup`.
   */
  create(
    entity: SalesOpportunityReasonsSetup<T>
  ): CreateRequestBuilder<SalesOpportunityReasonsSetup<T>, T> {
    return new CreateRequestBuilder<SalesOpportunityReasonsSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOpportunityReasonsSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOpportunityReasonsSetup`.
   */
  update(
    entity: SalesOpportunityReasonsSetup<T>
  ): UpdateRequestBuilder<SalesOpportunityReasonsSetup<T>, T> {
    return new UpdateRequestBuilder<SalesOpportunityReasonsSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityReasonsSetup`.
   * @param sequenceNo Key property. See {@link SalesOpportunityReasonsSetup.sequenceNo}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityReasonsSetup`.
   */
  delete(
    sequenceNo: number
  ): DeleteRequestBuilder<SalesOpportunityReasonsSetup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityReasonsSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityReasonsSetup` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOpportunityReasonsSetup<T>
  ): DeleteRequestBuilder<SalesOpportunityReasonsSetup<T>, T>;
  delete(
    sequenceNoOrEntity: any
  ): DeleteRequestBuilder<SalesOpportunityReasonsSetup<T>, T> {
    return new DeleteRequestBuilder<SalesOpportunityReasonsSetup<T>, T>(
      this.entityApi,
      sequenceNoOrEntity instanceof SalesOpportunityReasonsSetup
        ? sequenceNoOrEntity
        : { SequenceNo: sequenceNoOrEntity! }
    );
  }
}
