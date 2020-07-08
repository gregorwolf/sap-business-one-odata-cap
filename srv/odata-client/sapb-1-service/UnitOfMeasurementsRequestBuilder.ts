/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { UnitOfMeasurements } from './UnitOfMeasurements';

/**
 * Request builder class for operations supported on the [[UnitOfMeasurements]] entity.
 */
export class UnitOfMeasurementsRequestBuilder extends RequestBuilder<UnitOfMeasurements> {
  /**
   * Returns a request builder for retrieving one `UnitOfMeasurements` entity based on its keys.
   * @param absEntry Key property. See [[UnitOfMeasurements.absEntry]].
   * @returns A request builder for creating requests to retrieve one `UnitOfMeasurements` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<UnitOfMeasurements> {
    return new GetByKeyRequestBuilder(UnitOfMeasurements, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `UnitOfMeasurements` entities.
   * @returns A request builder for creating requests to retrieve all `UnitOfMeasurements` entities.
   */
  getAll(): GetAllRequestBuilder<UnitOfMeasurements> {
    return new GetAllRequestBuilder(UnitOfMeasurements);
  }

  /**
   * Returns a request builder for creating a `UnitOfMeasurements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UnitOfMeasurements`.
   */
  create(entity: UnitOfMeasurements): CreateRequestBuilder<UnitOfMeasurements> {
    return new CreateRequestBuilder(UnitOfMeasurements, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UnitOfMeasurements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UnitOfMeasurements`.
   */
  update(entity: UnitOfMeasurements): UpdateRequestBuilder<UnitOfMeasurements> {
    return new UpdateRequestBuilder(UnitOfMeasurements, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasurements`.
   * @param absEntry Key property. See [[UnitOfMeasurements.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasurements`.
   */
  delete(absEntry: number): DeleteRequestBuilder<UnitOfMeasurements>;
  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasurements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasurements` by taking the entity as a parameter.
   */
  delete(entity: UnitOfMeasurements): DeleteRequestBuilder<UnitOfMeasurements>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<UnitOfMeasurements> {
    return new DeleteRequestBuilder(UnitOfMeasurements, absEntryOrEntity instanceof UnitOfMeasurements ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
