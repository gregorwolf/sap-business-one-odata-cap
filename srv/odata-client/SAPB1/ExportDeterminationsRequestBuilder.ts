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
import { ExportDeterminations } from './ExportDeterminations';

/**
 * Request builder class for operations supported on the {@link ExportDeterminations} entity.
 */
export class ExportDeterminationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExportDeterminations<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExportDeterminations` entity based on its keys.
   * @param absEntry Key property. See {@link ExportDeterminations.absEntry}.
   * @returns A request builder for creating requests to retrieve one `ExportDeterminations` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ExportDeterminations<T>, T> {
    return new GetByKeyRequestBuilder<ExportDeterminations<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `ExportDeterminations` entities.
   * @returns A request builder for creating requests to retrieve all `ExportDeterminations` entities.
   */
  getAll(): GetAllRequestBuilder<ExportDeterminations<T>, T> {
    return new GetAllRequestBuilder<ExportDeterminations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExportDeterminations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExportDeterminations`.
   */
  create(
    entity: ExportDeterminations<T>
  ): CreateRequestBuilder<ExportDeterminations<T>, T> {
    return new CreateRequestBuilder<ExportDeterminations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExportDeterminations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExportDeterminations`.
   */
  update(
    entity: ExportDeterminations<T>
  ): UpdateRequestBuilder<ExportDeterminations<T>, T> {
    return new UpdateRequestBuilder<ExportDeterminations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExportDeterminations`.
   * @param absEntry Key property. See {@link ExportDeterminations.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `ExportDeterminations`.
   */
  delete(absEntry: number): DeleteRequestBuilder<ExportDeterminations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExportDeterminations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExportDeterminations` by taking the entity as a parameter.
   */
  delete(
    entity: ExportDeterminations<T>
  ): DeleteRequestBuilder<ExportDeterminations<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<ExportDeterminations<T>, T> {
    return new DeleteRequestBuilder<ExportDeterminations<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof ExportDeterminations
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
