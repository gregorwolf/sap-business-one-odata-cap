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
import { PurchaseOrders } from './PurchaseOrders';

/**
 * Request builder class for operations supported on the {@link PurchaseOrders} entity.
 */
export class PurchaseOrdersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrders<T>, T> {
  /**
   * Returns a request builder for retrieving one `PurchaseOrders` entity based on its keys.
   * @param docEntry Key property. See {@link PurchaseOrders.docEntry}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrders` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PurchaseOrders<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrders<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `PurchaseOrders` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrders` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrders<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseOrders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrders`.
   */
  create(
    entity: PurchaseOrders<T>
  ): CreateRequestBuilder<PurchaseOrders<T>, T> {
    return new CreateRequestBuilder<PurchaseOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrders`.
   */
  update(
    entity: PurchaseOrders<T>
  ): UpdateRequestBuilder<PurchaseOrders<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrders`.
   * @param docEntry Key property. See {@link PurchaseOrders.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrders`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseOrders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrders` by taking the entity as a parameter.
   */
  delete(entity: PurchaseOrders<T>): DeleteRequestBuilder<PurchaseOrders<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<PurchaseOrders<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrders<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof PurchaseOrders
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
