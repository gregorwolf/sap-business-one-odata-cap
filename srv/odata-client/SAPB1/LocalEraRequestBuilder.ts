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
import { LocalEra } from './LocalEra';

/**
 * Request builder class for operations supported on the {@link LocalEra} entity.
 */
export class LocalEraRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LocalEra<T>, T> {
  /**
   * Returns a request builder for retrieving one `LocalEra` entity based on its keys.
   * @param code Key property. See {@link LocalEra.code}.
   * @returns A request builder for creating requests to retrieve one `LocalEra` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LocalEra<T>, T> {
    return new GetByKeyRequestBuilder<LocalEra<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `LocalEra` entities.
   * @returns A request builder for creating requests to retrieve all `LocalEra` entities.
   */
  getAll(): GetAllRequestBuilder<LocalEra<T>, T> {
    return new GetAllRequestBuilder<LocalEra<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LocalEra` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LocalEra`.
   */
  create(entity: LocalEra<T>): CreateRequestBuilder<LocalEra<T>, T> {
    return new CreateRequestBuilder<LocalEra<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `LocalEra`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LocalEra`.
   */
  update(entity: LocalEra<T>): UpdateRequestBuilder<LocalEra<T>, T> {
    return new UpdateRequestBuilder<LocalEra<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LocalEra`.
   * @param code Key property. See {@link LocalEra.code}.
   * @returns A request builder for creating requests that delete an entity of type `LocalEra`.
   */
  delete(code: string): DeleteRequestBuilder<LocalEra<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LocalEra`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LocalEra` by taking the entity as a parameter.
   */
  delete(entity: LocalEra<T>): DeleteRequestBuilder<LocalEra<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<LocalEra<T>, T> {
    return new DeleteRequestBuilder<LocalEra<T>, T>(
      this.entityApi,
      codeOrEntity instanceof LocalEra ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
