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
import { GoodsReturnRequest } from './GoodsReturnRequest';

/**
 * Request builder class for operations supported on the {@link GoodsReturnRequest} entity.
 */
export class GoodsReturnRequestRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GoodsReturnRequest<T>, T> {
  /**
   * Returns a request builder for retrieving one `GoodsReturnRequest` entity based on its keys.
   * @param docEntry Key property. See {@link GoodsReturnRequest.docEntry}.
   * @returns A request builder for creating requests to retrieve one `GoodsReturnRequest` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<GoodsReturnRequest<T>, T> {
    return new GetByKeyRequestBuilder<GoodsReturnRequest<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `GoodsReturnRequest` entities.
   * @returns A request builder for creating requests to retrieve all `GoodsReturnRequest` entities.
   */
  getAll(): GetAllRequestBuilder<GoodsReturnRequest<T>, T> {
    return new GetAllRequestBuilder<GoodsReturnRequest<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GoodsReturnRequest` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GoodsReturnRequest`.
   */
  create(
    entity: GoodsReturnRequest<T>
  ): CreateRequestBuilder<GoodsReturnRequest<T>, T> {
    return new CreateRequestBuilder<GoodsReturnRequest<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GoodsReturnRequest`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GoodsReturnRequest`.
   */
  update(
    entity: GoodsReturnRequest<T>
  ): UpdateRequestBuilder<GoodsReturnRequest<T>, T> {
    return new UpdateRequestBuilder<GoodsReturnRequest<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GoodsReturnRequest`.
   * @param docEntry Key property. See {@link GoodsReturnRequest.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `GoodsReturnRequest`.
   */
  delete(docEntry: number): DeleteRequestBuilder<GoodsReturnRequest<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GoodsReturnRequest`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GoodsReturnRequest` by taking the entity as a parameter.
   */
  delete(
    entity: GoodsReturnRequest<T>
  ): DeleteRequestBuilder<GoodsReturnRequest<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<GoodsReturnRequest<T>, T> {
    return new DeleteRequestBuilder<GoodsReturnRequest<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof GoodsReturnRequest
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
