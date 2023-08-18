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
import { BrazilStringIndexers } from './BrazilStringIndexers';

/**
 * Request builder class for operations supported on the {@link BrazilStringIndexers} entity.
 */
export class BrazilStringIndexersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BrazilStringIndexers<T>, T> {
  /**
   * Returns a request builder for retrieving one `BrazilStringIndexers` entity based on its keys.
   * @param id Key property. See {@link BrazilStringIndexers.id}.
   * @returns A request builder for creating requests to retrieve one `BrazilStringIndexers` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BrazilStringIndexers<T>, T> {
    return new GetByKeyRequestBuilder<BrazilStringIndexers<T>, T>(
      this.entityApi,
      { ID: id }
    );
  }

  /**
   * Returns a request builder for querying all `BrazilStringIndexers` entities.
   * @returns A request builder for creating requests to retrieve all `BrazilStringIndexers` entities.
   */
  getAll(): GetAllRequestBuilder<BrazilStringIndexers<T>, T> {
    return new GetAllRequestBuilder<BrazilStringIndexers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BrazilStringIndexers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrazilStringIndexers`.
   */
  create(
    entity: BrazilStringIndexers<T>
  ): CreateRequestBuilder<BrazilStringIndexers<T>, T> {
    return new CreateRequestBuilder<BrazilStringIndexers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BrazilStringIndexers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrazilStringIndexers`.
   */
  update(
    entity: BrazilStringIndexers<T>
  ): UpdateRequestBuilder<BrazilStringIndexers<T>, T> {
    return new UpdateRequestBuilder<BrazilStringIndexers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BrazilStringIndexers`.
   * @param id Key property. See {@link BrazilStringIndexers.id}.
   * @returns A request builder for creating requests that delete an entity of type `BrazilStringIndexers`.
   */
  delete(id: number): DeleteRequestBuilder<BrazilStringIndexers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BrazilStringIndexers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrazilStringIndexers` by taking the entity as a parameter.
   */
  delete(
    entity: BrazilStringIndexers<T>
  ): DeleteRequestBuilder<BrazilStringIndexers<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<BrazilStringIndexers<T>, T> {
    return new DeleteRequestBuilder<BrazilStringIndexers<T>, T>(
      this.entityApi,
      idOrEntity instanceof BrazilStringIndexers
        ? idOrEntity
        : { ID: idOrEntity! }
    );
  }
}
