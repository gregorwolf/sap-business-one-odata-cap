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
import { Countries } from './Countries';

/**
 * Request builder class for operations supported on the {@link Countries} entity.
 */
export class CountriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Countries<T>, T> {
  /**
   * Returns a request builder for retrieving one `Countries` entity based on its keys.
   * @param code Key property. See {@link Countries.code}.
   * @returns A request builder for creating requests to retrieve one `Countries` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Countries<T>, T> {
    return new GetByKeyRequestBuilder<Countries<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `Countries` entities.
   * @returns A request builder for creating requests to retrieve all `Countries` entities.
   */
  getAll(): GetAllRequestBuilder<Countries<T>, T> {
    return new GetAllRequestBuilder<Countries<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Countries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Countries`.
   */
  create(entity: Countries<T>): CreateRequestBuilder<Countries<T>, T> {
    return new CreateRequestBuilder<Countries<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Countries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Countries`.
   */
  update(entity: Countries<T>): UpdateRequestBuilder<Countries<T>, T> {
    return new UpdateRequestBuilder<Countries<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Countries`.
   * @param code Key property. See {@link Countries.code}.
   * @returns A request builder for creating requests that delete an entity of type `Countries`.
   */
  delete(code: string): DeleteRequestBuilder<Countries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Countries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Countries` by taking the entity as a parameter.
   */
  delete(entity: Countries<T>): DeleteRequestBuilder<Countries<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<Countries<T>, T> {
    return new DeleteRequestBuilder<Countries<T>, T>(
      this.entityApi,
      codeOrEntity instanceof Countries ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
