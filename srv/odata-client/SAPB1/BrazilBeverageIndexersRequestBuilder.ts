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
import { BrazilBeverageIndexers } from './BrazilBeverageIndexers';

/**
 * Request builder class for operations supported on the {@link BrazilBeverageIndexers} entity.
 */
export class BrazilBeverageIndexersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BrazilBeverageIndexers<T>, T> {
  /**
   * Returns a request builder for retrieving one `BrazilBeverageIndexers` entity based on its keys.
   * @param beverageId Key property. See {@link BrazilBeverageIndexers.beverageId}.
   * @returns A request builder for creating requests to retrieve one `BrazilBeverageIndexers` entity based on its keys.
   */
  getByKey(
    beverageId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BrazilBeverageIndexers<T>, T> {
    return new GetByKeyRequestBuilder<BrazilBeverageIndexers<T>, T>(
      this.entityApi,
      { BeverageID: beverageId }
    );
  }

  /**
   * Returns a request builder for querying all `BrazilBeverageIndexers` entities.
   * @returns A request builder for creating requests to retrieve all `BrazilBeverageIndexers` entities.
   */
  getAll(): GetAllRequestBuilder<BrazilBeverageIndexers<T>, T> {
    return new GetAllRequestBuilder<BrazilBeverageIndexers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BrazilBeverageIndexers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrazilBeverageIndexers`.
   */
  create(
    entity: BrazilBeverageIndexers<T>
  ): CreateRequestBuilder<BrazilBeverageIndexers<T>, T> {
    return new CreateRequestBuilder<BrazilBeverageIndexers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BrazilBeverageIndexers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrazilBeverageIndexers`.
   */
  update(
    entity: BrazilBeverageIndexers<T>
  ): UpdateRequestBuilder<BrazilBeverageIndexers<T>, T> {
    return new UpdateRequestBuilder<BrazilBeverageIndexers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BrazilBeverageIndexers`.
   * @param beverageId Key property. See {@link BrazilBeverageIndexers.beverageId}.
   * @returns A request builder for creating requests that delete an entity of type `BrazilBeverageIndexers`.
   */
  delete(
    beverageId: number
  ): DeleteRequestBuilder<BrazilBeverageIndexers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BrazilBeverageIndexers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrazilBeverageIndexers` by taking the entity as a parameter.
   */
  delete(
    entity: BrazilBeverageIndexers<T>
  ): DeleteRequestBuilder<BrazilBeverageIndexers<T>, T>;
  delete(
    beverageIdOrEntity: any
  ): DeleteRequestBuilder<BrazilBeverageIndexers<T>, T> {
    return new DeleteRequestBuilder<BrazilBeverageIndexers<T>, T>(
      this.entityApi,
      beverageIdOrEntity instanceof BrazilBeverageIndexers
        ? beverageIdOrEntity
        : { BeverageID: beverageIdOrEntity! }
    );
  }
}
