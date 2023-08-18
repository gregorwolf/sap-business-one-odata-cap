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
import { StockTransfers } from './StockTransfers';

/**
 * Request builder class for operations supported on the {@link StockTransfers} entity.
 */
export class StockTransfersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StockTransfers<T>, T> {
  /**
   * Returns a request builder for retrieving one `StockTransfers` entity based on its keys.
   * @param docEntry Key property. See {@link StockTransfers.docEntry}.
   * @returns A request builder for creating requests to retrieve one `StockTransfers` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<StockTransfers<T>, T> {
    return new GetByKeyRequestBuilder<StockTransfers<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `StockTransfers` entities.
   * @returns A request builder for creating requests to retrieve all `StockTransfers` entities.
   */
  getAll(): GetAllRequestBuilder<StockTransfers<T>, T> {
    return new GetAllRequestBuilder<StockTransfers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StockTransfers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StockTransfers`.
   */
  create(
    entity: StockTransfers<T>
  ): CreateRequestBuilder<StockTransfers<T>, T> {
    return new CreateRequestBuilder<StockTransfers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `StockTransfers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StockTransfers`.
   */
  update(
    entity: StockTransfers<T>
  ): UpdateRequestBuilder<StockTransfers<T>, T> {
    return new UpdateRequestBuilder<StockTransfers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StockTransfers`.
   * @param docEntry Key property. See {@link StockTransfers.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `StockTransfers`.
   */
  delete(docEntry: number): DeleteRequestBuilder<StockTransfers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StockTransfers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StockTransfers` by taking the entity as a parameter.
   */
  delete(entity: StockTransfers<T>): DeleteRequestBuilder<StockTransfers<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<StockTransfers<T>, T> {
    return new DeleteRequestBuilder<StockTransfers<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof StockTransfers
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
