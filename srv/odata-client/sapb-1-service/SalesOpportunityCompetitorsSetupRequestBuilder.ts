/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { SalesOpportunityCompetitorsSetup } from './SalesOpportunityCompetitorsSetup';

/**
 * Request builder class for operations supported on the [[SalesOpportunityCompetitorsSetup]] entity.
 */
export class SalesOpportunityCompetitorsSetupRequestBuilder extends RequestBuilder<SalesOpportunityCompetitorsSetup> {
  /**
   * Returns a request builder for retrieving one `SalesOpportunityCompetitorsSetup` entity based on its keys.
   * @param sequenceNo Key property. See [[SalesOpportunityCompetitorsSetup.sequenceNo]].
   * @returns A request builder for creating requests to retrieve one `SalesOpportunityCompetitorsSetup` entity based on its keys.
   */
  getByKey(sequenceNo: number): GetByKeyRequestBuilder<SalesOpportunityCompetitorsSetup> {
    return new GetByKeyRequestBuilder(SalesOpportunityCompetitorsSetup, { SequenceNo: sequenceNo });
  }

  /**
   * Returns a request builder for querying all `SalesOpportunityCompetitorsSetup` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOpportunityCompetitorsSetup` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOpportunityCompetitorsSetup> {
    return new GetAllRequestBuilder(SalesOpportunityCompetitorsSetup);
  }

  /**
   * Returns a request builder for creating a `SalesOpportunityCompetitorsSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOpportunityCompetitorsSetup`.
   */
  create(entity: SalesOpportunityCompetitorsSetup): CreateRequestBuilder<SalesOpportunityCompetitorsSetup> {
    return new CreateRequestBuilder(SalesOpportunityCompetitorsSetup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOpportunityCompetitorsSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOpportunityCompetitorsSetup`.
   */
  update(entity: SalesOpportunityCompetitorsSetup): UpdateRequestBuilder<SalesOpportunityCompetitorsSetup> {
    return new UpdateRequestBuilder(SalesOpportunityCompetitorsSetup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityCompetitorsSetup`.
   * @param sequenceNo Key property. See [[SalesOpportunityCompetitorsSetup.sequenceNo]].
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityCompetitorsSetup`.
   */
  delete(sequenceNo: number): DeleteRequestBuilder<SalesOpportunityCompetitorsSetup>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityCompetitorsSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityCompetitorsSetup` by taking the entity as a parameter.
   */
  delete(entity: SalesOpportunityCompetitorsSetup): DeleteRequestBuilder<SalesOpportunityCompetitorsSetup>;
  delete(sequenceNoOrEntity: any): DeleteRequestBuilder<SalesOpportunityCompetitorsSetup> {
    return new DeleteRequestBuilder(SalesOpportunityCompetitorsSetup, sequenceNoOrEntity instanceof SalesOpportunityCompetitorsSetup ? sequenceNoOrEntity : { SequenceNo: sequenceNoOrEntity! });
  }
}
