/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BatchNumberDetails } from './BatchNumberDetails';

/**
 * Request builder class for operations supported on the [[BatchNumberDetails]] entity.
 */
export class BatchNumberDetailsRequestBuilder extends RequestBuilder<BatchNumberDetails> {
  /**
   * Returns a request builder for retrieving one `BatchNumberDetails` entity based on its keys.
   * @param docEntry Key property. See [[BatchNumberDetails.docEntry]].
   * @returns A request builder for creating requests to retrieve one `BatchNumberDetails` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<BatchNumberDetails> {
    return new GetByKeyRequestBuilder(BatchNumberDetails, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `BatchNumberDetails` entities.
   * @returns A request builder for creating requests to retrieve all `BatchNumberDetails` entities.
   */
  getAll(): GetAllRequestBuilder<BatchNumberDetails> {
    return new GetAllRequestBuilder(BatchNumberDetails);
  }

  /**
   * Returns a request builder for creating a `BatchNumberDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BatchNumberDetails`.
   */
  create(entity: BatchNumberDetails): CreateRequestBuilder<BatchNumberDetails> {
    return new CreateRequestBuilder(BatchNumberDetails, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BatchNumberDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BatchNumberDetails`.
   */
  update(entity: BatchNumberDetails): UpdateRequestBuilder<BatchNumberDetails> {
    return new UpdateRequestBuilder(BatchNumberDetails, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BatchNumberDetails`.
   * @param docEntry Key property. See [[BatchNumberDetails.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `BatchNumberDetails`.
   */
  delete(docEntry: number): DeleteRequestBuilder<BatchNumberDetails>;
  /**
   * Returns a request builder for deleting an entity of type `BatchNumberDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BatchNumberDetails` by taking the entity as a parameter.
   */
  delete(entity: BatchNumberDetails): DeleteRequestBuilder<BatchNumberDetails>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<BatchNumberDetails> {
    return new DeleteRequestBuilder(BatchNumberDetails, docEntryOrEntity instanceof BatchNumberDetails ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
