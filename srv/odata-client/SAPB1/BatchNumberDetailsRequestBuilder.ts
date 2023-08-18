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
import { BatchNumberDetails } from './BatchNumberDetails';

/**
 * Request builder class for operations supported on the {@link BatchNumberDetails} entity.
 */
export class BatchNumberDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BatchNumberDetails<T>, T> {
  /**
   * Returns a request builder for retrieving one `BatchNumberDetails` entity based on its keys.
   * @param docEntry Key property. See {@link BatchNumberDetails.docEntry}.
   * @returns A request builder for creating requests to retrieve one `BatchNumberDetails` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BatchNumberDetails<T>, T> {
    return new GetByKeyRequestBuilder<BatchNumberDetails<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `BatchNumberDetails` entities.
   * @returns A request builder for creating requests to retrieve all `BatchNumberDetails` entities.
   */
  getAll(): GetAllRequestBuilder<BatchNumberDetails<T>, T> {
    return new GetAllRequestBuilder<BatchNumberDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BatchNumberDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BatchNumberDetails`.
   */
  create(
    entity: BatchNumberDetails<T>
  ): CreateRequestBuilder<BatchNumberDetails<T>, T> {
    return new CreateRequestBuilder<BatchNumberDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BatchNumberDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BatchNumberDetails`.
   */
  update(
    entity: BatchNumberDetails<T>
  ): UpdateRequestBuilder<BatchNumberDetails<T>, T> {
    return new UpdateRequestBuilder<BatchNumberDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BatchNumberDetails`.
   * @param docEntry Key property. See {@link BatchNumberDetails.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `BatchNumberDetails`.
   */
  delete(docEntry: number): DeleteRequestBuilder<BatchNumberDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BatchNumberDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BatchNumberDetails` by taking the entity as a parameter.
   */
  delete(
    entity: BatchNumberDetails<T>
  ): DeleteRequestBuilder<BatchNumberDetails<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<BatchNumberDetails<T>, T> {
    return new DeleteRequestBuilder<BatchNumberDetails<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof BatchNumberDetails
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
