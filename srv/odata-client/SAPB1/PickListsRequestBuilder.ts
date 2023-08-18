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
import { PickLists } from './PickLists';

/**
 * Request builder class for operations supported on the {@link PickLists} entity.
 */
export class PickListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PickLists<T>, T> {
  /**
   * Returns a request builder for retrieving one `PickLists` entity based on its keys.
   * @param absoluteentry Key property. See {@link PickLists.absoluteentry}.
   * @returns A request builder for creating requests to retrieve one `PickLists` entity based on its keys.
   */
  getByKey(
    absoluteentry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PickLists<T>, T> {
    return new GetByKeyRequestBuilder<PickLists<T>, T>(this.entityApi, {
      Absoluteentry: absoluteentry
    });
  }

  /**
   * Returns a request builder for querying all `PickLists` entities.
   * @returns A request builder for creating requests to retrieve all `PickLists` entities.
   */
  getAll(): GetAllRequestBuilder<PickLists<T>, T> {
    return new GetAllRequestBuilder<PickLists<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PickLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PickLists`.
   */
  create(entity: PickLists<T>): CreateRequestBuilder<PickLists<T>, T> {
    return new CreateRequestBuilder<PickLists<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PickLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PickLists`.
   */
  update(entity: PickLists<T>): UpdateRequestBuilder<PickLists<T>, T> {
    return new UpdateRequestBuilder<PickLists<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PickLists`.
   * @param absoluteentry Key property. See {@link PickLists.absoluteentry}.
   * @returns A request builder for creating requests that delete an entity of type `PickLists`.
   */
  delete(absoluteentry: number): DeleteRequestBuilder<PickLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PickLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PickLists` by taking the entity as a parameter.
   */
  delete(entity: PickLists<T>): DeleteRequestBuilder<PickLists<T>, T>;
  delete(absoluteentryOrEntity: any): DeleteRequestBuilder<PickLists<T>, T> {
    return new DeleteRequestBuilder<PickLists<T>, T>(
      this.entityApi,
      absoluteentryOrEntity instanceof PickLists
        ? absoluteentryOrEntity
        : { Absoluteentry: absoluteentryOrEntity! }
    );
  }
}
