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
import { Manufacturers } from './Manufacturers';

/**
 * Request builder class for operations supported on the {@link Manufacturers} entity.
 */
export class ManufacturersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Manufacturers<T>, T> {
  /**
   * Returns a request builder for retrieving one `Manufacturers` entity based on its keys.
   * @param code Key property. See {@link Manufacturers.code}.
   * @returns A request builder for creating requests to retrieve one `Manufacturers` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Manufacturers<T>, T> {
    return new GetByKeyRequestBuilder<Manufacturers<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `Manufacturers` entities.
   * @returns A request builder for creating requests to retrieve all `Manufacturers` entities.
   */
  getAll(): GetAllRequestBuilder<Manufacturers<T>, T> {
    return new GetAllRequestBuilder<Manufacturers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Manufacturers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Manufacturers`.
   */
  create(entity: Manufacturers<T>): CreateRequestBuilder<Manufacturers<T>, T> {
    return new CreateRequestBuilder<Manufacturers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Manufacturers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Manufacturers`.
   */
  update(entity: Manufacturers<T>): UpdateRequestBuilder<Manufacturers<T>, T> {
    return new UpdateRequestBuilder<Manufacturers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Manufacturers`.
   * @param code Key property. See {@link Manufacturers.code}.
   * @returns A request builder for creating requests that delete an entity of type `Manufacturers`.
   */
  delete(code: number): DeleteRequestBuilder<Manufacturers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Manufacturers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Manufacturers` by taking the entity as a parameter.
   */
  delete(entity: Manufacturers<T>): DeleteRequestBuilder<Manufacturers<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<Manufacturers<T>, T> {
    return new DeleteRequestBuilder<Manufacturers<T>, T>(
      this.entityApi,
      codeOrEntity instanceof Manufacturers
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
