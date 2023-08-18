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
import { ElectronicFileFormats } from './ElectronicFileFormats';

/**
 * Request builder class for operations supported on the {@link ElectronicFileFormats} entity.
 */
export class ElectronicFileFormatsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicFileFormats<T>, T> {
  /**
   * Returns a request builder for retrieving one `ElectronicFileFormats` entity based on its keys.
   * @param formatId Key property. See {@link ElectronicFileFormats.formatId}.
   * @returns A request builder for creating requests to retrieve one `ElectronicFileFormats` entity based on its keys.
   */
  getByKey(
    formatId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ElectronicFileFormats<T>, T> {
    return new GetByKeyRequestBuilder<ElectronicFileFormats<T>, T>(
      this.entityApi,
      { FormatID: formatId }
    );
  }

  /**
   * Returns a request builder for querying all `ElectronicFileFormats` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicFileFormats` entities.
   */
  getAll(): GetAllRequestBuilder<ElectronicFileFormats<T>, T> {
    return new GetAllRequestBuilder<ElectronicFileFormats<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ElectronicFileFormats` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicFileFormats`.
   */
  create(
    entity: ElectronicFileFormats<T>
  ): CreateRequestBuilder<ElectronicFileFormats<T>, T> {
    return new CreateRequestBuilder<ElectronicFileFormats<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicFileFormats`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicFileFormats`.
   */
  update(
    entity: ElectronicFileFormats<T>
  ): UpdateRequestBuilder<ElectronicFileFormats<T>, T> {
    return new UpdateRequestBuilder<ElectronicFileFormats<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicFileFormats`.
   * @param formatId Key property. See {@link ElectronicFileFormats.formatId}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicFileFormats`.
   */
  delete(formatId: number): DeleteRequestBuilder<ElectronicFileFormats<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicFileFormats`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicFileFormats` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicFileFormats<T>
  ): DeleteRequestBuilder<ElectronicFileFormats<T>, T>;
  delete(
    formatIdOrEntity: any
  ): DeleteRequestBuilder<ElectronicFileFormats<T>, T> {
    return new DeleteRequestBuilder<ElectronicFileFormats<T>, T>(
      this.entityApi,
      formatIdOrEntity instanceof ElectronicFileFormats
        ? formatIdOrEntity
        : { FormatID: formatIdOrEntity! }
    );
  }
}
