/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SalesOpportunities } from './SalesOpportunities';

/**
 * Request builder class for operations supported on the [[SalesOpportunities]] entity.
 */
export class SalesOpportunitiesRequestBuilder extends RequestBuilder<SalesOpportunities> {
  /**
   * Returns a request builder for retrieving one `SalesOpportunities` entity based on its keys.
   * @param sequentialNo Key property. See [[SalesOpportunities.sequentialNo]].
   * @returns A request builder for creating requests to retrieve one `SalesOpportunities` entity based on its keys.
   */
  getByKey(sequentialNo: number): GetByKeyRequestBuilderV4<SalesOpportunities> {
    return new GetByKeyRequestBuilderV4(SalesOpportunities, { SequentialNo: sequentialNo });
  }

  /**
   * Returns a request builder for querying all `SalesOpportunities` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOpportunities` entities.
   */
  getAll(): GetAllRequestBuilderV4<SalesOpportunities> {
    return new GetAllRequestBuilderV4(SalesOpportunities);
  }

  /**
   * Returns a request builder for creating a `SalesOpportunities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOpportunities`.
   */
  create(entity: SalesOpportunities): CreateRequestBuilderV4<SalesOpportunities> {
    return new CreateRequestBuilderV4(SalesOpportunities, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOpportunities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOpportunities`.
   */
  update(entity: SalesOpportunities): UpdateRequestBuilderV4<SalesOpportunities> {
    return new UpdateRequestBuilderV4(SalesOpportunities, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunities`.
   * @param sequentialNo Key property. See [[SalesOpportunities.sequentialNo]].
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunities`.
   */
  delete(sequentialNo: number): DeleteRequestBuilderV4<SalesOpportunities>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOpportunities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOpportunities` by taking the entity as a parameter.
   */
  delete(entity: SalesOpportunities): DeleteRequestBuilderV4<SalesOpportunities>;
  delete(sequentialNoOrEntity: any): DeleteRequestBuilderV4<SalesOpportunities> {
    return new DeleteRequestBuilderV4(SalesOpportunities, sequentialNoOrEntity instanceof SalesOpportunities ? sequentialNoOrEntity : { SequentialNo: sequentialNoOrEntity! });
  }
}
