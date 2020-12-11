/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { GoodsReturnRequest } from './GoodsReturnRequest';

/**
 * Request builder class for operations supported on the [[GoodsReturnRequest]] entity.
 */
export class GoodsReturnRequestRequestBuilder extends RequestBuilder<GoodsReturnRequest> {
  /**
   * Returns a request builder for retrieving one `GoodsReturnRequest` entity based on its keys.
   * @param docEntry Key property. See [[GoodsReturnRequest.docEntry]].
   * @returns A request builder for creating requests to retrieve one `GoodsReturnRequest` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<GoodsReturnRequest> {
    return new GetByKeyRequestBuilderV4(GoodsReturnRequest, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `GoodsReturnRequest` entities.
   * @returns A request builder for creating requests to retrieve all `GoodsReturnRequest` entities.
   */
  getAll(): GetAllRequestBuilderV4<GoodsReturnRequest> {
    return new GetAllRequestBuilderV4(GoodsReturnRequest);
  }

  /**
   * Returns a request builder for creating a `GoodsReturnRequest` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GoodsReturnRequest`.
   */
  create(entity: GoodsReturnRequest): CreateRequestBuilderV4<GoodsReturnRequest> {
    return new CreateRequestBuilderV4(GoodsReturnRequest, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `GoodsReturnRequest`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GoodsReturnRequest`.
   */
  update(entity: GoodsReturnRequest): UpdateRequestBuilderV4<GoodsReturnRequest> {
    return new UpdateRequestBuilderV4(GoodsReturnRequest, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GoodsReturnRequest`.
   * @param docEntry Key property. See [[GoodsReturnRequest.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `GoodsReturnRequest`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<GoodsReturnRequest>;
  /**
   * Returns a request builder for deleting an entity of type `GoodsReturnRequest`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GoodsReturnRequest` by taking the entity as a parameter.
   */
  delete(entity: GoodsReturnRequest): DeleteRequestBuilderV4<GoodsReturnRequest>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<GoodsReturnRequest> {
    return new DeleteRequestBuilderV4(GoodsReturnRequest, docEntryOrEntity instanceof GoodsReturnRequest ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
