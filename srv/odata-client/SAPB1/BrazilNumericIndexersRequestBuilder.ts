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
import { BrazilNumericIndexers } from './BrazilNumericIndexers';

/**
 * Request builder class for operations supported on the {@link BrazilNumericIndexers} entity.
 */
export class BrazilNumericIndexersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BrazilNumericIndexers<T>, T> {
  /**
   * Returns a request builder for retrieving one `BrazilNumericIndexers` entity based on its keys.
   * @param id Key property. See {@link BrazilNumericIndexers.id}.
   * @returns A request builder for creating requests to retrieve one `BrazilNumericIndexers` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BrazilNumericIndexers<T>, T> {
    return new GetByKeyRequestBuilder<BrazilNumericIndexers<T>, T>(
      this.entityApi,
      { ID: id }
    );
  }

  /**
   * Returns a request builder for querying all `BrazilNumericIndexers` entities.
   * @returns A request builder for creating requests to retrieve all `BrazilNumericIndexers` entities.
   */
  getAll(): GetAllRequestBuilder<BrazilNumericIndexers<T>, T> {
    return new GetAllRequestBuilder<BrazilNumericIndexers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BrazilNumericIndexers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrazilNumericIndexers`.
   */
  create(
    entity: BrazilNumericIndexers<T>
  ): CreateRequestBuilder<BrazilNumericIndexers<T>, T> {
    return new CreateRequestBuilder<BrazilNumericIndexers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BrazilNumericIndexers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrazilNumericIndexers`.
   */
  update(
    entity: BrazilNumericIndexers<T>
  ): UpdateRequestBuilder<BrazilNumericIndexers<T>, T> {
    return new UpdateRequestBuilder<BrazilNumericIndexers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BrazilNumericIndexers`.
   * @param id Key property. See {@link BrazilNumericIndexers.id}.
   * @returns A request builder for creating requests that delete an entity of type `BrazilNumericIndexers`.
   */
  delete(id: number): DeleteRequestBuilder<BrazilNumericIndexers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BrazilNumericIndexers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrazilNumericIndexers` by taking the entity as a parameter.
   */
  delete(
    entity: BrazilNumericIndexers<T>
  ): DeleteRequestBuilder<BrazilNumericIndexers<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<BrazilNumericIndexers<T>, T> {
    return new DeleteRequestBuilder<BrazilNumericIndexers<T>, T>(
      this.entityApi,
      idOrEntity instanceof BrazilNumericIndexers
        ? idOrEntity
        : { ID: idOrEntity! }
    );
  }
}
