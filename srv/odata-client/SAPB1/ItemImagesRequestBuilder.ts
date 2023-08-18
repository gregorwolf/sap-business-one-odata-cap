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
import { ItemImages } from './ItemImages';

/**
 * Request builder class for operations supported on the {@link ItemImages} entity.
 */
export class ItemImagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemImages<T>, T> {
  /**
   * Returns a request builder for retrieving one `ItemImages` entity based on its keys.
   * @param itemCode Key property. See {@link ItemImages.itemCode}.
   * @returns A request builder for creating requests to retrieve one `ItemImages` entity based on its keys.
   */
  getByKey(
    itemCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemImages<T>, T> {
    return new GetByKeyRequestBuilder<ItemImages<T>, T>(this.entityApi, {
      ItemCode: itemCode
    });
  }

  /**
   * Returns a request builder for querying all `ItemImages` entities.
   * @returns A request builder for creating requests to retrieve all `ItemImages` entities.
   */
  getAll(): GetAllRequestBuilder<ItemImages<T>, T> {
    return new GetAllRequestBuilder<ItemImages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItemImages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemImages`.
   */
  create(entity: ItemImages<T>): CreateRequestBuilder<ItemImages<T>, T> {
    return new CreateRequestBuilder<ItemImages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ItemImages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemImages`.
   */
  update(entity: ItemImages<T>): UpdateRequestBuilder<ItemImages<T>, T> {
    return new UpdateRequestBuilder<ItemImages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemImages`.
   * @param itemCode Key property. See {@link ItemImages.itemCode}.
   * @returns A request builder for creating requests that delete an entity of type `ItemImages`.
   */
  delete(itemCode: string): DeleteRequestBuilder<ItemImages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemImages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemImages` by taking the entity as a parameter.
   */
  delete(entity: ItemImages<T>): DeleteRequestBuilder<ItemImages<T>, T>;
  delete(itemCodeOrEntity: any): DeleteRequestBuilder<ItemImages<T>, T> {
    return new DeleteRequestBuilder<ItemImages<T>, T>(
      this.entityApi,
      itemCodeOrEntity instanceof ItemImages
        ? itemCodeOrEntity
        : { ItemCode: itemCodeOrEntity! }
    );
  }
}
