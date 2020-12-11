/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SalesStages } from './SalesStages';

/**
 * Request builder class for operations supported on the [[SalesStages]] entity.
 */
export class SalesStagesRequestBuilder extends RequestBuilder<SalesStages> {
  /**
   * Returns a request builder for retrieving one `SalesStages` entity based on its keys.
   * @param sequenceNo Key property. See [[SalesStages.sequenceNo]].
   * @returns A request builder for creating requests to retrieve one `SalesStages` entity based on its keys.
   */
  getByKey(sequenceNo: number): GetByKeyRequestBuilderV4<SalesStages> {
    return new GetByKeyRequestBuilderV4(SalesStages, { SequenceNo: sequenceNo });
  }

  /**
   * Returns a request builder for querying all `SalesStages` entities.
   * @returns A request builder for creating requests to retrieve all `SalesStages` entities.
   */
  getAll(): GetAllRequestBuilderV4<SalesStages> {
    return new GetAllRequestBuilderV4(SalesStages);
  }

  /**
   * Returns a request builder for creating a `SalesStages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesStages`.
   */
  create(entity: SalesStages): CreateRequestBuilderV4<SalesStages> {
    return new CreateRequestBuilderV4(SalesStages, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesStages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesStages`.
   */
  update(entity: SalesStages): UpdateRequestBuilderV4<SalesStages> {
    return new UpdateRequestBuilderV4(SalesStages, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesStages`.
   * @param sequenceNo Key property. See [[SalesStages.sequenceNo]].
   * @returns A request builder for creating requests that delete an entity of type `SalesStages`.
   */
  delete(sequenceNo: number): DeleteRequestBuilderV4<SalesStages>;
  /**
   * Returns a request builder for deleting an entity of type `SalesStages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesStages` by taking the entity as a parameter.
   */
  delete(entity: SalesStages): DeleteRequestBuilderV4<SalesStages>;
  delete(sequenceNoOrEntity: any): DeleteRequestBuilderV4<SalesStages> {
    return new DeleteRequestBuilderV4(SalesStages, sequenceNoOrEntity instanceof SalesStages ? sequenceNoOrEntity : { SequenceNo: sequenceNoOrEntity! });
  }
}
