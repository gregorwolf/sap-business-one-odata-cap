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
import { Currencies } from './Currencies';

/**
 * Request builder class for operations supported on the {@link Currencies} entity.
 */
export class CurrenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Currencies<T>, T> {
  /**
   * Returns a request builder for retrieving one `Currencies` entity based on its keys.
   * @param code Key property. See {@link Currencies.code}.
   * @returns A request builder for creating requests to retrieve one `Currencies` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Currencies<T>, T> {
    return new GetByKeyRequestBuilder<Currencies<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `Currencies` entities.
   * @returns A request builder for creating requests to retrieve all `Currencies` entities.
   */
  getAll(): GetAllRequestBuilder<Currencies<T>, T> {
    return new GetAllRequestBuilder<Currencies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Currencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Currencies`.
   */
  create(entity: Currencies<T>): CreateRequestBuilder<Currencies<T>, T> {
    return new CreateRequestBuilder<Currencies<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Currencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Currencies`.
   */
  update(entity: Currencies<T>): UpdateRequestBuilder<Currencies<T>, T> {
    return new UpdateRequestBuilder<Currencies<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Currencies`.
   * @param code Key property. See {@link Currencies.code}.
   * @returns A request builder for creating requests that delete an entity of type `Currencies`.
   */
  delete(code: string): DeleteRequestBuilder<Currencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Currencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Currencies` by taking the entity as a parameter.
   */
  delete(entity: Currencies<T>): DeleteRequestBuilder<Currencies<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<Currencies<T>, T> {
    return new DeleteRequestBuilder<Currencies<T>, T>(
      this.entityApi,
      codeOrEntity instanceof Currencies
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
