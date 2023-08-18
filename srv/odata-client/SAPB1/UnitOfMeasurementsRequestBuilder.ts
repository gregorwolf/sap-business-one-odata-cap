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
import { UnitOfMeasurements } from './UnitOfMeasurements';

/**
 * Request builder class for operations supported on the {@link UnitOfMeasurements} entity.
 */
export class UnitOfMeasurementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UnitOfMeasurements<T>, T> {
  /**
   * Returns a request builder for retrieving one `UnitOfMeasurements` entity based on its keys.
   * @param absEntry Key property. See {@link UnitOfMeasurements.absEntry}.
   * @returns A request builder for creating requests to retrieve one `UnitOfMeasurements` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<UnitOfMeasurements<T>, T> {
    return new GetByKeyRequestBuilder<UnitOfMeasurements<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `UnitOfMeasurements` entities.
   * @returns A request builder for creating requests to retrieve all `UnitOfMeasurements` entities.
   */
  getAll(): GetAllRequestBuilder<UnitOfMeasurements<T>, T> {
    return new GetAllRequestBuilder<UnitOfMeasurements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UnitOfMeasurements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UnitOfMeasurements`.
   */
  create(
    entity: UnitOfMeasurements<T>
  ): CreateRequestBuilder<UnitOfMeasurements<T>, T> {
    return new CreateRequestBuilder<UnitOfMeasurements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UnitOfMeasurements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UnitOfMeasurements`.
   */
  update(
    entity: UnitOfMeasurements<T>
  ): UpdateRequestBuilder<UnitOfMeasurements<T>, T> {
    return new UpdateRequestBuilder<UnitOfMeasurements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasurements`.
   * @param absEntry Key property. See {@link UnitOfMeasurements.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasurements`.
   */
  delete(absEntry: number): DeleteRequestBuilder<UnitOfMeasurements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasurements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasurements` by taking the entity as a parameter.
   */
  delete(
    entity: UnitOfMeasurements<T>
  ): DeleteRequestBuilder<UnitOfMeasurements<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<UnitOfMeasurements<T>, T> {
    return new DeleteRequestBuilder<UnitOfMeasurements<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof UnitOfMeasurements
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
