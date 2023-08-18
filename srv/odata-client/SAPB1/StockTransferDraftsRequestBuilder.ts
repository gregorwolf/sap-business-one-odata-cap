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
import { StockTransferDrafts } from './StockTransferDrafts';

/**
 * Request builder class for operations supported on the {@link StockTransferDrafts} entity.
 */
export class StockTransferDraftsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StockTransferDrafts<T>, T> {
  /**
   * Returns a request builder for retrieving one `StockTransferDrafts` entity based on its keys.
   * @param docEntry Key property. See {@link StockTransferDrafts.docEntry}.
   * @returns A request builder for creating requests to retrieve one `StockTransferDrafts` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<StockTransferDrafts<T>, T> {
    return new GetByKeyRequestBuilder<StockTransferDrafts<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `StockTransferDrafts` entities.
   * @returns A request builder for creating requests to retrieve all `StockTransferDrafts` entities.
   */
  getAll(): GetAllRequestBuilder<StockTransferDrafts<T>, T> {
    return new GetAllRequestBuilder<StockTransferDrafts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StockTransferDrafts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StockTransferDrafts`.
   */
  create(
    entity: StockTransferDrafts<T>
  ): CreateRequestBuilder<StockTransferDrafts<T>, T> {
    return new CreateRequestBuilder<StockTransferDrafts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `StockTransferDrafts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StockTransferDrafts`.
   */
  update(
    entity: StockTransferDrafts<T>
  ): UpdateRequestBuilder<StockTransferDrafts<T>, T> {
    return new UpdateRequestBuilder<StockTransferDrafts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StockTransferDrafts`.
   * @param docEntry Key property. See {@link StockTransferDrafts.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `StockTransferDrafts`.
   */
  delete(docEntry: number): DeleteRequestBuilder<StockTransferDrafts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StockTransferDrafts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StockTransferDrafts` by taking the entity as a parameter.
   */
  delete(
    entity: StockTransferDrafts<T>
  ): DeleteRequestBuilder<StockTransferDrafts<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<StockTransferDrafts<T>, T> {
    return new DeleteRequestBuilder<StockTransferDrafts<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof StockTransferDrafts
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
