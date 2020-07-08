/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ReturnRequest } from './ReturnRequest';

/**
 * Request builder class for operations supported on the [[ReturnRequest]] entity.
 */
export class ReturnRequestRequestBuilder extends RequestBuilder<ReturnRequest> {
  /**
   * Returns a request builder for retrieving one `ReturnRequest` entity based on its keys.
   * @param docEntry Key property. See [[ReturnRequest.docEntry]].
   * @returns A request builder for creating requests to retrieve one `ReturnRequest` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<ReturnRequest> {
    return new GetByKeyRequestBuilder(ReturnRequest, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `ReturnRequest` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnRequest` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnRequest> {
    return new GetAllRequestBuilder(ReturnRequest);
  }

  /**
   * Returns a request builder for creating a `ReturnRequest` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnRequest`.
   */
  create(entity: ReturnRequest): CreateRequestBuilder<ReturnRequest> {
    return new CreateRequestBuilder(ReturnRequest, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnRequest`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnRequest`.
   */
  update(entity: ReturnRequest): UpdateRequestBuilder<ReturnRequest> {
    return new UpdateRequestBuilder(ReturnRequest, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnRequest`.
   * @param docEntry Key property. See [[ReturnRequest.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `ReturnRequest`.
   */
  delete(docEntry: number): DeleteRequestBuilder<ReturnRequest>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnRequest`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnRequest` by taking the entity as a parameter.
   */
  delete(entity: ReturnRequest): DeleteRequestBuilder<ReturnRequest>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<ReturnRequest> {
    return new DeleteRequestBuilder(ReturnRequest, docEntryOrEntity instanceof ReturnRequest ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
