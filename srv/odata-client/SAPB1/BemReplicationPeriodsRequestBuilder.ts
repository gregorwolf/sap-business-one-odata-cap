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
import { BemReplicationPeriods } from './BemReplicationPeriods';

/**
 * Request builder class for operations supported on the {@link BemReplicationPeriods} entity.
 */
export class BemReplicationPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BemReplicationPeriods<T>, T> {
  /**
   * Returns a request builder for retrieving one `BemReplicationPeriods` entity based on its keys.
   * @param absEntry Key property. See {@link BemReplicationPeriods.absEntry}.
   * @returns A request builder for creating requests to retrieve one `BemReplicationPeriods` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BemReplicationPeriods<T>, T> {
    return new GetByKeyRequestBuilder<BemReplicationPeriods<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `BemReplicationPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `BemReplicationPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<BemReplicationPeriods<T>, T> {
    return new GetAllRequestBuilder<BemReplicationPeriods<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BemReplicationPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BemReplicationPeriods`.
   */
  create(
    entity: BemReplicationPeriods<T>
  ): CreateRequestBuilder<BemReplicationPeriods<T>, T> {
    return new CreateRequestBuilder<BemReplicationPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BemReplicationPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BemReplicationPeriods`.
   */
  update(
    entity: BemReplicationPeriods<T>
  ): UpdateRequestBuilder<BemReplicationPeriods<T>, T> {
    return new UpdateRequestBuilder<BemReplicationPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BemReplicationPeriods`.
   * @param absEntry Key property. See {@link BemReplicationPeriods.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `BemReplicationPeriods`.
   */
  delete(absEntry: number): DeleteRequestBuilder<BemReplicationPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BemReplicationPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BemReplicationPeriods` by taking the entity as a parameter.
   */
  delete(
    entity: BemReplicationPeriods<T>
  ): DeleteRequestBuilder<BemReplicationPeriods<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<BemReplicationPeriods<T>, T> {
    return new DeleteRequestBuilder<BemReplicationPeriods<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof BemReplicationPeriods
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
