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
import { ImportDeterminations } from './ImportDeterminations';

/**
 * Request builder class for operations supported on the {@link ImportDeterminations} entity.
 */
export class ImportDeterminationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ImportDeterminations<T>, T> {
  /**
   * Returns a request builder for retrieving one `ImportDeterminations` entity based on its keys.
   * @param absEntry Key property. See {@link ImportDeterminations.absEntry}.
   * @returns A request builder for creating requests to retrieve one `ImportDeterminations` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ImportDeterminations<T>, T> {
    return new GetByKeyRequestBuilder<ImportDeterminations<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `ImportDeterminations` entities.
   * @returns A request builder for creating requests to retrieve all `ImportDeterminations` entities.
   */
  getAll(): GetAllRequestBuilder<ImportDeterminations<T>, T> {
    return new GetAllRequestBuilder<ImportDeterminations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ImportDeterminations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ImportDeterminations`.
   */
  create(
    entity: ImportDeterminations<T>
  ): CreateRequestBuilder<ImportDeterminations<T>, T> {
    return new CreateRequestBuilder<ImportDeterminations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ImportDeterminations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ImportDeterminations`.
   */
  update(
    entity: ImportDeterminations<T>
  ): UpdateRequestBuilder<ImportDeterminations<T>, T> {
    return new UpdateRequestBuilder<ImportDeterminations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ImportDeterminations`.
   * @param absEntry Key property. See {@link ImportDeterminations.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `ImportDeterminations`.
   */
  delete(absEntry: number): DeleteRequestBuilder<ImportDeterminations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ImportDeterminations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ImportDeterminations` by taking the entity as a parameter.
   */
  delete(
    entity: ImportDeterminations<T>
  ): DeleteRequestBuilder<ImportDeterminations<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<ImportDeterminations<T>, T> {
    return new DeleteRequestBuilder<ImportDeterminations<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof ImportDeterminations
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
