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
import { ProductionOrders } from './ProductionOrders';

/**
 * Request builder class for operations supported on the {@link ProductionOrders} entity.
 */
export class ProductionOrdersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductionOrders<T>, T> {
  /**
   * Returns a request builder for retrieving one `ProductionOrders` entity based on its keys.
   * @param absoluteEntry Key property. See {@link ProductionOrders.absoluteEntry}.
   * @returns A request builder for creating requests to retrieve one `ProductionOrders` entity based on its keys.
   */
  getByKey(
    absoluteEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ProductionOrders<T>, T> {
    return new GetByKeyRequestBuilder<ProductionOrders<T>, T>(this.entityApi, {
      AbsoluteEntry: absoluteEntry
    });
  }

  /**
   * Returns a request builder for querying all `ProductionOrders` entities.
   * @returns A request builder for creating requests to retrieve all `ProductionOrders` entities.
   */
  getAll(): GetAllRequestBuilder<ProductionOrders<T>, T> {
    return new GetAllRequestBuilder<ProductionOrders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductionOrders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductionOrders`.
   */
  create(
    entity: ProductionOrders<T>
  ): CreateRequestBuilder<ProductionOrders<T>, T> {
    return new CreateRequestBuilder<ProductionOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductionOrders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductionOrders`.
   */
  update(
    entity: ProductionOrders<T>
  ): UpdateRequestBuilder<ProductionOrders<T>, T> {
    return new UpdateRequestBuilder<ProductionOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductionOrders`.
   * @param absoluteEntry Key property. See {@link ProductionOrders.absoluteEntry}.
   * @returns A request builder for creating requests that delete an entity of type `ProductionOrders`.
   */
  delete(absoluteEntry: number): DeleteRequestBuilder<ProductionOrders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductionOrders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductionOrders` by taking the entity as a parameter.
   */
  delete(
    entity: ProductionOrders<T>
  ): DeleteRequestBuilder<ProductionOrders<T>, T>;
  delete(
    absoluteEntryOrEntity: any
  ): DeleteRequestBuilder<ProductionOrders<T>, T> {
    return new DeleteRequestBuilder<ProductionOrders<T>, T>(
      this.entityApi,
      absoluteEntryOrEntity instanceof ProductionOrders
        ? absoluteEntryOrEntity
        : { AbsoluteEntry: absoluteEntryOrEntity! }
    );
  }
}
