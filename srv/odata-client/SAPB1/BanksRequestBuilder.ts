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
import { Banks } from './Banks';

/**
 * Request builder class for operations supported on the {@link Banks} entity.
 */
export class BanksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Banks<T>, T> {
  /**
   * Returns a request builder for retrieving one `Banks` entity based on its keys.
   * @param absoluteEntry Key property. See {@link Banks.absoluteEntry}.
   * @returns A request builder for creating requests to retrieve one `Banks` entity based on its keys.
   */
  getByKey(
    absoluteEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Banks<T>, T> {
    return new GetByKeyRequestBuilder<Banks<T>, T>(this.entityApi, {
      AbsoluteEntry: absoluteEntry
    });
  }

  /**
   * Returns a request builder for querying all `Banks` entities.
   * @returns A request builder for creating requests to retrieve all `Banks` entities.
   */
  getAll(): GetAllRequestBuilder<Banks<T>, T> {
    return new GetAllRequestBuilder<Banks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Banks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Banks`.
   */
  create(entity: Banks<T>): CreateRequestBuilder<Banks<T>, T> {
    return new CreateRequestBuilder<Banks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Banks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Banks`.
   */
  update(entity: Banks<T>): UpdateRequestBuilder<Banks<T>, T> {
    return new UpdateRequestBuilder<Banks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Banks`.
   * @param absoluteEntry Key property. See {@link Banks.absoluteEntry}.
   * @returns A request builder for creating requests that delete an entity of type `Banks`.
   */
  delete(absoluteEntry: number): DeleteRequestBuilder<Banks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Banks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Banks` by taking the entity as a parameter.
   */
  delete(entity: Banks<T>): DeleteRequestBuilder<Banks<T>, T>;
  delete(absoluteEntryOrEntity: any): DeleteRequestBuilder<Banks<T>, T> {
    return new DeleteRequestBuilder<Banks<T>, T>(
      this.entityApi,
      absoluteEntryOrEntity instanceof Banks
        ? absoluteEntryOrEntity
        : { AbsoluteEntry: absoluteEntryOrEntity! }
    );
  }
}
