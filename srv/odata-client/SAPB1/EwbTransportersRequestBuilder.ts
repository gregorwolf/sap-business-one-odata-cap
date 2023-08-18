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
import { EwbTransporters } from './EwbTransporters';

/**
 * Request builder class for operations supported on the {@link EwbTransporters} entity.
 */
export class EwbTransportersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EwbTransporters<T>, T> {
  /**
   * Returns a request builder for retrieving one `EwbTransporters` entity based on its keys.
   * @param absEntry Key property. See {@link EwbTransporters.absEntry}.
   * @returns A request builder for creating requests to retrieve one `EwbTransporters` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EwbTransporters<T>, T> {
    return new GetByKeyRequestBuilder<EwbTransporters<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `EwbTransporters` entities.
   * @returns A request builder for creating requests to retrieve all `EwbTransporters` entities.
   */
  getAll(): GetAllRequestBuilder<EwbTransporters<T>, T> {
    return new GetAllRequestBuilder<EwbTransporters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EwbTransporters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EwbTransporters`.
   */
  create(
    entity: EwbTransporters<T>
  ): CreateRequestBuilder<EwbTransporters<T>, T> {
    return new CreateRequestBuilder<EwbTransporters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EwbTransporters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EwbTransporters`.
   */
  update(
    entity: EwbTransporters<T>
  ): UpdateRequestBuilder<EwbTransporters<T>, T> {
    return new UpdateRequestBuilder<EwbTransporters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EwbTransporters`.
   * @param absEntry Key property. See {@link EwbTransporters.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `EwbTransporters`.
   */
  delete(absEntry: number): DeleteRequestBuilder<EwbTransporters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EwbTransporters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EwbTransporters` by taking the entity as a parameter.
   */
  delete(
    entity: EwbTransporters<T>
  ): DeleteRequestBuilder<EwbTransporters<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<EwbTransporters<T>, T> {
    return new DeleteRequestBuilder<EwbTransporters<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof EwbTransporters
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
