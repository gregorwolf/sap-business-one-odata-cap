/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ItemGroups } from './ItemGroups';

/**
 * Request builder class for operations supported on the [[ItemGroups]] entity.
 */
export class ItemGroupsRequestBuilder extends RequestBuilder<ItemGroups> {
  /**
   * Returns a request builder for retrieving one `ItemGroups` entity based on its keys.
   * @param number Key property. See [[ItemGroups.number]].
   * @returns A request builder for creating requests to retrieve one `ItemGroups` entity based on its keys.
   */
  getByKey(number: number): GetByKeyRequestBuilderV4<ItemGroups> {
    return new GetByKeyRequestBuilderV4(ItemGroups, { Number: number });
  }

  /**
   * Returns a request builder for querying all `ItemGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ItemGroups` entities.
   */
  getAll(): GetAllRequestBuilderV4<ItemGroups> {
    return new GetAllRequestBuilderV4(ItemGroups);
  }

  /**
   * Returns a request builder for creating a `ItemGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemGroups`.
   */
  create(entity: ItemGroups): CreateRequestBuilderV4<ItemGroups> {
    return new CreateRequestBuilderV4(ItemGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ItemGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemGroups`.
   */
  update(entity: ItemGroups): UpdateRequestBuilderV4<ItemGroups> {
    return new UpdateRequestBuilderV4(ItemGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemGroups`.
   * @param number Key property. See [[ItemGroups.number]].
   * @returns A request builder for creating requests that delete an entity of type `ItemGroups`.
   */
  delete(number: number): DeleteRequestBuilderV4<ItemGroups>;
  /**
   * Returns a request builder for deleting an entity of type `ItemGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemGroups` by taking the entity as a parameter.
   */
  delete(entity: ItemGroups): DeleteRequestBuilderV4<ItemGroups>;
  delete(numberOrEntity: any): DeleteRequestBuilderV4<ItemGroups> {
    return new DeleteRequestBuilderV4(ItemGroups, numberOrEntity instanceof ItemGroups ? numberOrEntity : { Number: numberOrEntity! });
  }
}
