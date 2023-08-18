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
import { ItemProperties } from './ItemProperties';

/**
 * Request builder class for operations supported on the {@link ItemProperties} entity.
 */
export class ItemPropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemProperties<T>, T> {
  /**
   * Returns a request builder for retrieving one `ItemProperties` entity based on its keys.
   * @param number Key property. See {@link ItemProperties.number}.
   * @returns A request builder for creating requests to retrieve one `ItemProperties` entity based on its keys.
   */
  getByKey(
    number: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ItemProperties<T>, T> {
    return new GetByKeyRequestBuilder<ItemProperties<T>, T>(this.entityApi, {
      Number: number
    });
  }

  /**
   * Returns a request builder for querying all `ItemProperties` entities.
   * @returns A request builder for creating requests to retrieve all `ItemProperties` entities.
   */
  getAll(): GetAllRequestBuilder<ItemProperties<T>, T> {
    return new GetAllRequestBuilder<ItemProperties<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItemProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemProperties`.
   */
  create(
    entity: ItemProperties<T>
  ): CreateRequestBuilder<ItemProperties<T>, T> {
    return new CreateRequestBuilder<ItemProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemProperties`.
   */
  update(
    entity: ItemProperties<T>
  ): UpdateRequestBuilder<ItemProperties<T>, T> {
    return new UpdateRequestBuilder<ItemProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemProperties`.
   * @param number Key property. See {@link ItemProperties.number}.
   * @returns A request builder for creating requests that delete an entity of type `ItemProperties`.
   */
  delete(number: number): DeleteRequestBuilder<ItemProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemProperties` by taking the entity as a parameter.
   */
  delete(entity: ItemProperties<T>): DeleteRequestBuilder<ItemProperties<T>, T>;
  delete(numberOrEntity: any): DeleteRequestBuilder<ItemProperties<T>, T> {
    return new DeleteRequestBuilder<ItemProperties<T>, T>(
      this.entityApi,
      numberOrEntity instanceof ItemProperties
        ? numberOrEntity
        : { Number: numberOrEntity! }
    );
  }
}
