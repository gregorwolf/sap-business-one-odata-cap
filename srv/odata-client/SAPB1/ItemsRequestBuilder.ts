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
import { Items } from './Items';

/**
 * Request builder class for operations supported on the {@link Items} entity.
 */
export class ItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Items<T>, T> {
  /**
   * Returns a request builder for retrieving one `Items` entity based on its keys.
   * @param itemCode Key property. See {@link Items.itemCode}.
   * @returns A request builder for creating requests to retrieve one `Items` entity based on its keys.
   */
  getByKey(
    itemCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Items<T>, T> {
    return new GetByKeyRequestBuilder<Items<T>, T>(this.entityApi, {
      ItemCode: itemCode
    });
  }

  /**
   * Returns a request builder for querying all `Items` entities.
   * @returns A request builder for creating requests to retrieve all `Items` entities.
   */
  getAll(): GetAllRequestBuilder<Items<T>, T> {
    return new GetAllRequestBuilder<Items<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Items` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Items`.
   */
  create(entity: Items<T>): CreateRequestBuilder<Items<T>, T> {
    return new CreateRequestBuilder<Items<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Items`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Items`.
   */
  update(entity: Items<T>): UpdateRequestBuilder<Items<T>, T> {
    return new UpdateRequestBuilder<Items<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Items`.
   * @param itemCode Key property. See {@link Items.itemCode}.
   * @returns A request builder for creating requests that delete an entity of type `Items`.
   */
  delete(itemCode: string): DeleteRequestBuilder<Items<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Items`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Items` by taking the entity as a parameter.
   */
  delete(entity: Items<T>): DeleteRequestBuilder<Items<T>, T>;
  delete(itemCodeOrEntity: any): DeleteRequestBuilder<Items<T>, T> {
    return new DeleteRequestBuilder<Items<T>, T>(
      this.entityApi,
      itemCodeOrEntity instanceof Items
        ? itemCodeOrEntity
        : { ItemCode: itemCodeOrEntity! }
    );
  }
}
