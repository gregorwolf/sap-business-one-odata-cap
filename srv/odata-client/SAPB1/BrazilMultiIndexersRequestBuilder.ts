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
import { BrazilMultiIndexers } from './BrazilMultiIndexers';

/**
 * Request builder class for operations supported on the {@link BrazilMultiIndexers} entity.
 */
export class BrazilMultiIndexersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BrazilMultiIndexers<T>, T> {
  /**
   * Returns a request builder for retrieving one `BrazilMultiIndexers` entity based on its keys.
   * @param id Key property. See {@link BrazilMultiIndexers.id}.
   * @returns A request builder for creating requests to retrieve one `BrazilMultiIndexers` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BrazilMultiIndexers<T>, T> {
    return new GetByKeyRequestBuilder<BrazilMultiIndexers<T>, T>(
      this.entityApi,
      { ID: id }
    );
  }

  /**
   * Returns a request builder for querying all `BrazilMultiIndexers` entities.
   * @returns A request builder for creating requests to retrieve all `BrazilMultiIndexers` entities.
   */
  getAll(): GetAllRequestBuilder<BrazilMultiIndexers<T>, T> {
    return new GetAllRequestBuilder<BrazilMultiIndexers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BrazilMultiIndexers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrazilMultiIndexers`.
   */
  create(
    entity: BrazilMultiIndexers<T>
  ): CreateRequestBuilder<BrazilMultiIndexers<T>, T> {
    return new CreateRequestBuilder<BrazilMultiIndexers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BrazilMultiIndexers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrazilMultiIndexers`.
   */
  update(
    entity: BrazilMultiIndexers<T>
  ): UpdateRequestBuilder<BrazilMultiIndexers<T>, T> {
    return new UpdateRequestBuilder<BrazilMultiIndexers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BrazilMultiIndexers`.
   * @param id Key property. See {@link BrazilMultiIndexers.id}.
   * @returns A request builder for creating requests that delete an entity of type `BrazilMultiIndexers`.
   */
  delete(id: number): DeleteRequestBuilder<BrazilMultiIndexers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BrazilMultiIndexers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrazilMultiIndexers` by taking the entity as a parameter.
   */
  delete(
    entity: BrazilMultiIndexers<T>
  ): DeleteRequestBuilder<BrazilMultiIndexers<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<BrazilMultiIndexers<T>, T> {
    return new DeleteRequestBuilder<BrazilMultiIndexers<T>, T>(
      this.entityApi,
      idOrEntity instanceof BrazilMultiIndexers
        ? idOrEntity
        : { ID: idOrEntity! }
    );
  }
}
