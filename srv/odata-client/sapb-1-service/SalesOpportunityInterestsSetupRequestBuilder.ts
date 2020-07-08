/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { SalesOpportunityInterestsSetup } from './SalesOpportunityInterestsSetup';

/**
 * Request builder class for operations supported on the [[SalesOpportunityInterestsSetup]] entity.
 */
export class SalesOpportunityInterestsSetupRequestBuilder extends RequestBuilder<SalesOpportunityInterestsSetup> {
  /**
   * Returns a request builder for retrieving one `SalesOpportunityInterestsSetup` entity based on its keys.
   * @param sequenceNo Key property. See [[SalesOpportunityInterestsSetup.sequenceNo]].
   * @returns A request builder for creating requests to retrieve one `SalesOpportunityInterestsSetup` entity based on its keys.
   */
  getByKey(sequenceNo: number): GetByKeyRequestBuilder<SalesOpportunityInterestsSetup> {
    return new GetByKeyRequestBuilder(SalesOpportunityInterestsSetup, { SequenceNo: sequenceNo });
  }

  /**
   * Returns a request builder for querying all `SalesOpportunityInterestsSetup` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOpportunityInterestsSetup` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOpportunityInterestsSetup> {
    return new GetAllRequestBuilder(SalesOpportunityInterestsSetup);
  }

  /**
   * Returns a request builder for creating a `SalesOpportunityInterestsSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOpportunityInterestsSetup`.
   */
  create(entity: SalesOpportunityInterestsSetup): CreateRequestBuilder<SalesOpportunityInterestsSetup> {
    return new CreateRequestBuilder(SalesOpportunityInterestsSetup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOpportunityInterestsSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOpportunityInterestsSetup`.
   */
  update(entity: SalesOpportunityInterestsSetup): UpdateRequestBuilder<SalesOpportunityInterestsSetup> {
    return new UpdateRequestBuilder(SalesOpportunityInterestsSetup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityInterestsSetup`.
   * @param sequenceNo Key property. See [[SalesOpportunityInterestsSetup.sequenceNo]].
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityInterestsSetup`.
   */
  delete(sequenceNo: number): DeleteRequestBuilder<SalesOpportunityInterestsSetup>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityInterestsSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityInterestsSetup` by taking the entity as a parameter.
   */
  delete(entity: SalesOpportunityInterestsSetup): DeleteRequestBuilder<SalesOpportunityInterestsSetup>;
  delete(sequenceNoOrEntity: any): DeleteRequestBuilder<SalesOpportunityInterestsSetup> {
    return new DeleteRequestBuilder(SalesOpportunityInterestsSetup, sequenceNoOrEntity instanceof SalesOpportunityInterestsSetup ? sequenceNoOrEntity : { SequenceNo: sequenceNoOrEntity! });
  }
}
