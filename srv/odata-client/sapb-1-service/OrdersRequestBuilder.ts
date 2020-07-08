/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Orders } from './Orders';

/**
 * Request builder class for operations supported on the [[Orders]] entity.
 */
export class OrdersRequestBuilder extends RequestBuilder<Orders> {
  /**
   * Returns a request builder for retrieving one `Orders` entity based on its keys.
   * @param docEntry Key property. See [[Orders.docEntry]].
   * @returns A request builder for creating requests to retrieve one `Orders` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<Orders> {
    return new GetByKeyRequestBuilder(Orders, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `Orders` entities.
   * @returns A request builder for creating requests to retrieve all `Orders` entities.
   */
  getAll(): GetAllRequestBuilder<Orders> {
    return new GetAllRequestBuilder(Orders);
  }

  /**
   * Returns a request builder for creating a `Orders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Orders`.
   */
  create(entity: Orders): CreateRequestBuilder<Orders> {
    return new CreateRequestBuilder(Orders, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Orders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Orders`.
   */
  update(entity: Orders): UpdateRequestBuilder<Orders> {
    return new UpdateRequestBuilder(Orders, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Orders`.
   * @param docEntry Key property. See [[Orders.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `Orders`.
   */
  delete(docEntry: number): DeleteRequestBuilder<Orders>;
  /**
   * Returns a request builder for deleting an entity of type `Orders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Orders` by taking the entity as a parameter.
   */
  delete(entity: Orders): DeleteRequestBuilder<Orders>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<Orders> {
    return new DeleteRequestBuilder(Orders, docEntryOrEntity instanceof Orders ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
