/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ItemProperties } from './ItemProperties';

/**
 * Request builder class for operations supported on the [[ItemProperties]] entity.
 */
export class ItemPropertiesRequestBuilder extends RequestBuilder<ItemProperties> {
  /**
   * Returns a request builder for retrieving one `ItemProperties` entity based on its keys.
   * @param number Key property. See [[ItemProperties.number]].
   * @returns A request builder for creating requests to retrieve one `ItemProperties` entity based on its keys.
   */
  getByKey(number: number): GetByKeyRequestBuilderV4<ItemProperties> {
    return new GetByKeyRequestBuilderV4(ItemProperties, { Number: number });
  }

  /**
   * Returns a request builder for querying all `ItemProperties` entities.
   * @returns A request builder for creating requests to retrieve all `ItemProperties` entities.
   */
  getAll(): GetAllRequestBuilderV4<ItemProperties> {
    return new GetAllRequestBuilderV4(ItemProperties);
  }

  /**
   * Returns a request builder for creating a `ItemProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemProperties`.
   */
  create(entity: ItemProperties): CreateRequestBuilderV4<ItemProperties> {
    return new CreateRequestBuilderV4(ItemProperties, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ItemProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemProperties`.
   */
  update(entity: ItemProperties): UpdateRequestBuilderV4<ItemProperties> {
    return new UpdateRequestBuilderV4(ItemProperties, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemProperties`.
   * @param number Key property. See [[ItemProperties.number]].
   * @returns A request builder for creating requests that delete an entity of type `ItemProperties`.
   */
  delete(number: number): DeleteRequestBuilderV4<ItemProperties>;
  /**
   * Returns a request builder for deleting an entity of type `ItemProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemProperties` by taking the entity as a parameter.
   */
  delete(entity: ItemProperties): DeleteRequestBuilderV4<ItemProperties>;
  delete(numberOrEntity: any): DeleteRequestBuilderV4<ItemProperties> {
    return new DeleteRequestBuilderV4(ItemProperties, numberOrEntity instanceof ItemProperties ? numberOrEntity : { Number: numberOrEntity! });
  }
}
