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
import { FaAccountDeterminations } from './FaAccountDeterminations';

/**
 * Request builder class for operations supported on the {@link FaAccountDeterminations} entity.
 */
export class FaAccountDeterminationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FaAccountDeterminations<T>, T> {
  /**
   * Returns a request builder for retrieving one `FaAccountDeterminations` entity based on its keys.
   * @param code Key property. See {@link FaAccountDeterminations.code}.
   * @returns A request builder for creating requests to retrieve one `FaAccountDeterminations` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FaAccountDeterminations<T>, T> {
    return new GetByKeyRequestBuilder<FaAccountDeterminations<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `FaAccountDeterminations` entities.
   * @returns A request builder for creating requests to retrieve all `FaAccountDeterminations` entities.
   */
  getAll(): GetAllRequestBuilder<FaAccountDeterminations<T>, T> {
    return new GetAllRequestBuilder<FaAccountDeterminations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FaAccountDeterminations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FaAccountDeterminations`.
   */
  create(
    entity: FaAccountDeterminations<T>
  ): CreateRequestBuilder<FaAccountDeterminations<T>, T> {
    return new CreateRequestBuilder<FaAccountDeterminations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FaAccountDeterminations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FaAccountDeterminations`.
   */
  update(
    entity: FaAccountDeterminations<T>
  ): UpdateRequestBuilder<FaAccountDeterminations<T>, T> {
    return new UpdateRequestBuilder<FaAccountDeterminations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FaAccountDeterminations`.
   * @param code Key property. See {@link FaAccountDeterminations.code}.
   * @returns A request builder for creating requests that delete an entity of type `FaAccountDeterminations`.
   */
  delete(code: string): DeleteRequestBuilder<FaAccountDeterminations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FaAccountDeterminations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FaAccountDeterminations` by taking the entity as a parameter.
   */
  delete(
    entity: FaAccountDeterminations<T>
  ): DeleteRequestBuilder<FaAccountDeterminations<T>, T>;
  delete(
    codeOrEntity: any
  ): DeleteRequestBuilder<FaAccountDeterminations<T>, T> {
    return new DeleteRequestBuilder<FaAccountDeterminations<T>, T>(
      this.entityApi,
      codeOrEntity instanceof FaAccountDeterminations
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
