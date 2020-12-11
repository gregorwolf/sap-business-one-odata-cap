/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Items } from './Items';

/**
 * Request builder class for operations supported on the [[Items]] entity.
 */
export class ItemsRequestBuilder extends RequestBuilder<Items> {
  /**
   * Returns a request builder for retrieving one `Items` entity based on its keys.
   * @param itemCode Key property. See [[Items.itemCode]].
   * @returns A request builder for creating requests to retrieve one `Items` entity based on its keys.
   */
  getByKey(itemCode: string): GetByKeyRequestBuilderV4<Items> {
    return new GetByKeyRequestBuilderV4(Items, { ItemCode: itemCode });
  }

  /**
   * Returns a request builder for querying all `Items` entities.
   * @returns A request builder for creating requests to retrieve all `Items` entities.
   */
  getAll(): GetAllRequestBuilderV4<Items> {
    return new GetAllRequestBuilderV4(Items);
  }

  /**
   * Returns a request builder for creating a `Items` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Items`.
   */
  create(entity: Items): CreateRequestBuilderV4<Items> {
    return new CreateRequestBuilderV4(Items, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Items`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Items`.
   */
  update(entity: Items): UpdateRequestBuilderV4<Items> {
    return new UpdateRequestBuilderV4(Items, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Items`.
   * @param itemCode Key property. See [[Items.itemCode]].
   * @returns A request builder for creating requests that delete an entity of type `Items`.
   */
  delete(itemCode: string): DeleteRequestBuilderV4<Items>;
  /**
   * Returns a request builder for deleting an entity of type `Items`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Items` by taking the entity as a parameter.
   */
  delete(entity: Items): DeleteRequestBuilderV4<Items>;
  delete(itemCodeOrEntity: any): DeleteRequestBuilderV4<Items> {
    return new DeleteRequestBuilderV4(Items, itemCodeOrEntity instanceof Items ? itemCodeOrEntity : { ItemCode: itemCodeOrEntity! });
  }
}
