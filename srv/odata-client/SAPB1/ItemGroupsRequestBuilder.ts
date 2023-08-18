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
import { ItemGroups } from './ItemGroups';

/**
 * Request builder class for operations supported on the {@link ItemGroups} entity.
 */
export class ItemGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `ItemGroups` entity based on its keys.
   * @param number Key property. See {@link ItemGroups.number}.
   * @returns A request builder for creating requests to retrieve one `ItemGroups` entity based on its keys.
   */
  getByKey(
    number: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ItemGroups<T>, T> {
    return new GetByKeyRequestBuilder<ItemGroups<T>, T>(this.entityApi, {
      Number: number
    });
  }

  /**
   * Returns a request builder for querying all `ItemGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ItemGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ItemGroups<T>, T> {
    return new GetAllRequestBuilder<ItemGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItemGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemGroups`.
   */
  create(entity: ItemGroups<T>): CreateRequestBuilder<ItemGroups<T>, T> {
    return new CreateRequestBuilder<ItemGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ItemGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemGroups`.
   */
  update(entity: ItemGroups<T>): UpdateRequestBuilder<ItemGroups<T>, T> {
    return new UpdateRequestBuilder<ItemGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemGroups`.
   * @param number Key property. See {@link ItemGroups.number}.
   * @returns A request builder for creating requests that delete an entity of type `ItemGroups`.
   */
  delete(number: number): DeleteRequestBuilder<ItemGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemGroups` by taking the entity as a parameter.
   */
  delete(entity: ItemGroups<T>): DeleteRequestBuilder<ItemGroups<T>, T>;
  delete(numberOrEntity: any): DeleteRequestBuilder<ItemGroups<T>, T> {
    return new DeleteRequestBuilder<ItemGroups<T>, T>(
      this.entityApi,
      numberOrEntity instanceof ItemGroups
        ? numberOrEntity
        : { Number: numberOrEntity! }
    );
  }
}
