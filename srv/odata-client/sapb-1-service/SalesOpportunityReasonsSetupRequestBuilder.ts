/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(sequenceNo: number): GetByKeyRequestBuilderV4<SalesOpportunityReasonsSetup> {
    return new GetByKeyRequestBuilderV4(SalesOpportunityReasonsSetup, { SequenceNo: sequenceNo });
  }

  /**
   * Returns a request builder for querying all `SalesOpportunityReasonsSetup` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOpportunityReasonsSetup` entities.
   */
  getAll(): GetAllRequestBuilderV4<SalesOpportunityReasonsSetup> {
    return new GetAllRequestBuilderV4(SalesOpportunityReasonsSetup);
  }

  /**
   * Returns a request builder for creating a `SalesOpportunityReasonsSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOpportunityReasonsSetup`.
   */
  create(entity: SalesOpportunityReasonsSetup): CreateRequestBuilderV4<SalesOpportunityReasonsSetup> {
    return new CreateRequestBuilderV4(SalesOpportunityReasonsSetup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOpportunityReasonsSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOpportunityReasonsSetup`.
   */
  update(entity: SalesOpportunityReasonsSetup): UpdateRequestBuilderV4<SalesOpportunityReasonsSetup> {
    return new UpdateRequestBuilderV4(SalesOpportunityReasonsSetup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityReasonsSetup`.
   * @param sequenceNo Key property. See [[SalesOpportunityReasonsSetup.sequenceNo]].
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityReasonsSetup`.
   */
  delete(sequenceNo: number): DeleteRequestBuilderV4<SalesOpportunityReasonsSetup>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunityReasonsSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityReasonsSetup` by taking the entity as a parameter.
   */
  delete(entity: SalesOpportunityReasonsSetup): DeleteRequestBuilderV4<SalesOpportunityReasonsSetup>;
  delete(sequenceNoOrEntity: any): DeleteRequestBuilderV4<SalesOpportunityReasonsSetup> {
    return new DeleteRequestBuilderV4(SalesOpportunityReasonsSetup, sequenceNoOrEntity instanceof SalesOpportunityReasonsSetup ? sequenceNoOrEntity : { SequenceNo: sequenceNoOrEntity! });
  }
}
