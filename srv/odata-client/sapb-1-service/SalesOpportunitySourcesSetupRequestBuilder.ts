/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SalesOpportunitySourcesSetup } from './SalesOpportunitySourcesSetup';

/**
 * Request builder class for operations supported on the [[SalesOpportunitySourcesSetup]] entity.
 */
export class SalesOpportunitySourcesSetupRequestBuilder extends RequestBuilder<SalesOpportunitySourcesSetup> {
  /**
   * Returns a request builder for retrieving one `SalesOpportunitySourcesSetup` entity based on its keys.
   * @param sequenceNo Key property. See [[SalesOpportunitySourcesSetup.sequenceNo]].
   * @returns A request builder for creating requests to retrieve one `SalesOpportunitySourcesSetup` entity based on its keys.
   */
  getByKey(sequenceNo: number): GetByKeyRequestBuilderV4<SalesOpportunitySourcesSetup> {
    return new GetByKeyRequestBuilderV4(SalesOpportunitySourcesSetup, { SequenceNo: sequenceNo });
  }

  /**
   * Returns a request builder for querying all `SalesOpportunitySourcesSetup` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOpportunitySourcesSetup` entities.
   */
  getAll(): GetAllRequestBuilderV4<SalesOpportunitySourcesSetup> {
    return new GetAllRequestBuilderV4(SalesOpportunitySourcesSetup);
  }

  /**
   * Returns a request builder for creating a `SalesOpportunitySourcesSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOpportunitySourcesSetup`.
   */
  create(entity: SalesOpportunitySourcesSetup): CreateRequestBuilderV4<SalesOpportunitySourcesSetup> {
    return new CreateRequestBuilderV4(SalesOpportunitySourcesSetup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOpportunitySourcesSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOpportunitySourcesSetup`.
   */
  update(entity: SalesOpportunitySourcesSetup): UpdateRequestBuilderV4<SalesOpportunitySourcesSetup> {
    return new UpdateRequestBuilderV4(SalesOpportunitySourcesSetup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunitySourcesSetup`.
   * @param sequenceNo Key property. See [[SalesOpportunitySourcesSetup.sequenceNo]].
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunitySourcesSetup`.
   */
  delete(sequenceNo: number): DeleteRequestBuilderV4<SalesOpportunitySourcesSetup>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunitySourcesSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunitySourcesSetup` by taking the entity as a parameter.
   */
  delete(entity: SalesOpportunitySourcesSetup): DeleteRequestBuilderV4<SalesOpportunitySourcesSetup>;
  delete(sequenceNoOrEntity: any): DeleteRequestBuilderV4<SalesOpportunitySourcesSetup> {
    return new DeleteRequestBuilderV4(SalesOpportunitySourcesSetup, sequenceNoOrEntity instanceof SalesOpportunitySourcesSetup ? sequenceNoOrEntity : { SequenceNo: sequenceNoOrEntity! });
  }
}
