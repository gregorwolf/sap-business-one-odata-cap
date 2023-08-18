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
import { PackagesTypes } from './PackagesTypes';

/**
 * Request builder class for operations supported on the {@link PackagesTypes} entity.
 */
export class PackagesTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PackagesTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `PackagesTypes` entity based on its keys.
   * @param code Key property. See {@link PackagesTypes.code}.
   * @returns A request builder for creating requests to retrieve one `PackagesTypes` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PackagesTypes<T>, T> {
    return new GetByKeyRequestBuilder<PackagesTypes<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `PackagesTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PackagesTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PackagesTypes<T>, T> {
    return new GetAllRequestBuilder<PackagesTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PackagesTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PackagesTypes`.
   */
  create(entity: PackagesTypes<T>): CreateRequestBuilder<PackagesTypes<T>, T> {
    return new CreateRequestBuilder<PackagesTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PackagesTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PackagesTypes`.
   */
  update(entity: PackagesTypes<T>): UpdateRequestBuilder<PackagesTypes<T>, T> {
    return new UpdateRequestBuilder<PackagesTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PackagesTypes`.
   * @param code Key property. See {@link PackagesTypes.code}.
   * @returns A request builder for creating requests that delete an entity of type `PackagesTypes`.
   */
  delete(code: number): DeleteRequestBuilder<PackagesTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PackagesTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PackagesTypes` by taking the entity as a parameter.
   */
  delete(entity: PackagesTypes<T>): DeleteRequestBuilder<PackagesTypes<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<PackagesTypes<T>, T> {
    return new DeleteRequestBuilder<PackagesTypes<T>, T>(
      this.entityApi,
      codeOrEntity instanceof PackagesTypes
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
