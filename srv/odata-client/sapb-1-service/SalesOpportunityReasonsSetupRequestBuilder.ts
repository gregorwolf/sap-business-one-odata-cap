/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { SalesOpportunityReasonsSetup } from './SalesOpportunityReasonsSetup';

/**
 * Request builder class for operations supported on the [[SalesOpportunityReasonsSetup]] entity.
 */
export class SalesOpportunityReasonsSetupRequestBuilder extends RequestBuilder<SalesOpportunityReasonsSetup> {
  /**
   * Returns a request builder for retrieving one `SalesOpportunityReasonsSetup` entity based on its keys.
   * @param sequenceNo Key property. See [[SalesOpportunityReasonsSetup.sequenceNo]].
   * @returns A request builder for creating requests to retrieve one `SalesOpportunityReasonsSetup` entity based on its keys.
   */
  getByKey(sequenceNo: number): GetByKeyRequestBuilder<SalesOpportunityReasonsSetup> {
    return new GetByKeyRequestBuilder(SalesOpportunityReasonsSetup, { SequenceNo: sequenceNo });
  }

  /**
   * Returns a request builder for querying all `SalesOpportunityReasonsSetup` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOpportunityReasonsSetup` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOpportunityReasonsSetup> {
    return new GetAllRequestBuilder(SalesOpportunityReasonsSetup);
  }

  /**
   * Returns a request builder for creating a `SalesOpportunityReasonsSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOpportunityReasonsSetup`.
   */
  create(entity: SalesOpportunityReasonsSetup): CreateRequestBuilder<SalesOpportunityReasonsSetup> {
    return new CreateRequestBuilder(SalesOpportunityReasonsSetup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOpportunityReasonsSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOpportunityReasonsSetup`.
   */
  update(entity: SalesOpportunityReasonsSetup): UpdateRequestBuilder<SalesOpportunityReasonsSetup> {
    return new UpdateRequestBuilder(SalesOpportunityReasonsSetup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityReasonsSetup`.
   * @param sequenceNo Key property. See [[SalesOpportunityReasonsSetup.sequenceNo]].
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityReasonsSetup`.
   */
  delete(sequenceNo: number): DeleteRequestBuilder<SalesOpportunityReasonsSetup>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityReasonsSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityReasonsSetup` by taking the entity as a parameter.
   */
  delete(entity: SalesOpportunityReasonsSetup): DeleteRequestBuilder<SalesOpportunityReasonsSetup>;
  delete(sequenceNoOrEntity: any): DeleteRequestBuilder<SalesOpportunityReasonsSetup> {
    return new DeleteRequestBuilder(SalesOpportunityReasonsSetup, sequenceNoOrEntity instanceof SalesOpportunityReasonsSetup ? sequenceNoOrEntity : { SequenceNo: sequenceNoOrEntity! });
  }
}
