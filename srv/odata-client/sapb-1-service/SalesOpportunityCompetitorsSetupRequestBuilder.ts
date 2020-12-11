/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(sequenceNo: number): GetByKeyRequestBuilderV4<SalesOpportunityCompetitorsSetup> {
    return new GetByKeyRequestBuilderV4(SalesOpportunityCompetitorsSetup, { SequenceNo: sequenceNo });
  }

  /**
   * Returns a request builder for querying all `SalesOpportunityCompetitorsSetup` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOpportunityCompetitorsSetup` entities.
   */
  getAll(): GetAllRequestBuilderV4<SalesOpportunityCompetitorsSetup> {
    return new GetAllRequestBuilderV4(SalesOpportunityCompetitorsSetup);
  }

  /**
   * Returns a request builder for creating a `SalesOpportunityCompetitorsSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOpportunityCompetitorsSetup`.
   */
  create(entity: SalesOpportunityCompetitorsSetup): CreateRequestBuilderV4<SalesOpportunityCompetitorsSetup> {
    return new CreateRequestBuilderV4(SalesOpportunityCompetitorsSetup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOpportunityCompetitorsSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOpportunityCompetitorsSetup`.
   */
  update(entity: SalesOpportunityCompetitorsSetup): UpdateRequestBuilderV4<SalesOpportunityCompetitorsSetup> {
    return new UpdateRequestBuilderV4(SalesOpportunityCompetitorsSetup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityCompetitorsSetup`.
   * @param sequenceNo Key property. See [[SalesOpportunityCompetitorsSetup.sequenceNo]].
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityCompetitorsSetup`.
   */
  delete(sequenceNo: number): DeleteRequestBuilderV4<SalesOpportunityCompetitorsSetup>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityCompetitorsSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityCompetitorsSetup` by taking the entity as a parameter.
   */
  delete(entity: SalesOpportunityCompetitorsSetup): DeleteRequestBuilderV4<SalesOpportunityCompetitorsSetup>;
  delete(sequenceNoOrEntity: any): DeleteRequestBuilderV4<SalesOpportunityCompetitorsSetup> {
    return new DeleteRequestBuilderV4(SalesOpportunityCompetitorsSetup, sequenceNoOrEntity instanceof SalesOpportunityCompetitorsSetup ? sequenceNoOrEntity : { SequenceNo: sequenceNoOrEntity! });
  }
}
