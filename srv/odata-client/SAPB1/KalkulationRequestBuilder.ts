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
import { Kalkulation } from './Kalkulation';

/**
 * Request builder class for operations supported on the {@link Kalkulation} entity.
 */
export class KalkulationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Kalkulation<T>, T> {
  /**
   * Returns a request builder for retrieving one `Kalkulation` entity based on its keys.
   * @param code Key property. See {@link Kalkulation.code}.
   * @returns A request builder for creating requests to retrieve one `Kalkulation` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Kalkulation<T>, T> {
    return new GetByKeyRequestBuilder<Kalkulation<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `Kalkulation` entities.
   * @returns A request builder for creating requests to retrieve all `Kalkulation` entities.
   */
  getAll(): GetAllRequestBuilder<Kalkulation<T>, T> {
    return new GetAllRequestBuilder<Kalkulation<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Kalkulation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Kalkulation`.
   */
  create(entity: Kalkulation<T>): CreateRequestBuilder<Kalkulation<T>, T> {
    return new CreateRequestBuilder<Kalkulation<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Kalkulation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Kalkulation`.
   */
  update(entity: Kalkulation<T>): UpdateRequestBuilder<Kalkulation<T>, T> {
    return new UpdateRequestBuilder<Kalkulation<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Kalkulation`.
   * @param code Key property. See {@link Kalkulation.code}.
   * @returns A request builder for creating requests that delete an entity of type `Kalkulation`.
   */
  delete(code: string): DeleteRequestBuilder<Kalkulation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Kalkulation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Kalkulation` by taking the entity as a parameter.
   */
  delete(entity: Kalkulation<T>): DeleteRequestBuilder<Kalkulation<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<Kalkulation<T>, T> {
    return new DeleteRequestBuilder<Kalkulation<T>, T>(
      this.entityApi,
      codeOrEntity instanceof Kalkulation
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
