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
import { SalesOpportunityCompetitorsSetup } from './SalesOpportunityCompetitorsSetup';

/**
 * Request builder class for operations supported on the {@link SalesOpportunityCompetitorsSetup} entity.
 */
export class SalesOpportunityCompetitorsSetupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOpportunityCompetitorsSetup<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesOpportunityCompetitorsSetup` entity based on its keys.
   * @param sequenceNo Key property. See {@link SalesOpportunityCompetitorsSetup.sequenceNo}.
   * @returns A request builder for creating requests to retrieve one `SalesOpportunityCompetitorsSetup` entity based on its keys.
   */
  getByKey(
    sequenceNo: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesOpportunityCompetitorsSetup<T>, T> {
    return new GetByKeyRequestBuilder<SalesOpportunityCompetitorsSetup<T>, T>(
      this.entityApi,
      { SequenceNo: sequenceNo }
    );
  }

  /**
   * Returns a request builder for querying all `SalesOpportunityCompetitorsSetup` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOpportunityCompetitorsSetup` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOpportunityCompetitorsSetup<T>, T> {
    return new GetAllRequestBuilder<SalesOpportunityCompetitorsSetup<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOpportunityCompetitorsSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOpportunityCompetitorsSetup`.
   */
  create(
    entity: SalesOpportunityCompetitorsSetup<T>
  ): CreateRequestBuilder<SalesOpportunityCompetitorsSetup<T>, T> {
    return new CreateRequestBuilder<SalesOpportunityCompetitorsSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOpportunityCompetitorsSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOpportunityCompetitorsSetup`.
   */
  update(
    entity: SalesOpportunityCompetitorsSetup<T>
  ): UpdateRequestBuilder<SalesOpportunityCompetitorsSetup<T>, T> {
    return new UpdateRequestBuilder<SalesOpportunityCompetitorsSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityCompetitorsSetup`.
   * @param sequenceNo Key property. See {@link SalesOpportunityCompetitorsSetup.sequenceNo}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityCompetitorsSetup`.
   */
  delete(
    sequenceNo: number
  ): DeleteRequestBuilder<SalesOpportunityCompetitorsSetup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityCompetitorsSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityCompetitorsSetup` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOpportunityCompetitorsSetup<T>
  ): DeleteRequestBuilder<SalesOpportunityCompetitorsSetup<T>, T>;
  delete(
    sequenceNoOrEntity: any
  ): DeleteRequestBuilder<SalesOpportunityCompetitorsSetup<T>, T> {
    return new DeleteRequestBuilder<SalesOpportunityCompetitorsSetup<T>, T>(
      this.entityApi,
      sequenceNoOrEntity instanceof SalesOpportunityCompetitorsSetup
        ? sequenceNoOrEntity
        : { SequenceNo: sequenceNoOrEntity! }
    );
  }
}
