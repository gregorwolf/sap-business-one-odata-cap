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
import { ReturnRequest } from './ReturnRequest';

/**
 * Request builder class for operations supported on the {@link ReturnRequest} entity.
 */
export class ReturnRequestRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnRequest<T>, T> {
  /**
   * Returns a request builder for retrieving one `ReturnRequest` entity based on its keys.
   * @param docEntry Key property. See {@link ReturnRequest.docEntry}.
   * @returns A request builder for creating requests to retrieve one `ReturnRequest` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ReturnRequest<T>, T> {
    return new GetByKeyRequestBuilder<ReturnRequest<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `ReturnRequest` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnRequest` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnRequest<T>, T> {
    return new GetAllRequestBuilder<ReturnRequest<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReturnRequest` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnRequest`.
   */
  create(entity: ReturnRequest<T>): CreateRequestBuilder<ReturnRequest<T>, T> {
    return new CreateRequestBuilder<ReturnRequest<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnRequest`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnRequest`.
   */
  update(entity: ReturnRequest<T>): UpdateRequestBuilder<ReturnRequest<T>, T> {
    return new UpdateRequestBuilder<ReturnRequest<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnRequest`.
   * @param docEntry Key property. See {@link ReturnRequest.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnRequest`.
   */
  delete(docEntry: number): DeleteRequestBuilder<ReturnRequest<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnRequest`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnRequest` by taking the entity as a parameter.
   */
  delete(entity: ReturnRequest<T>): DeleteRequestBuilder<ReturnRequest<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<ReturnRequest<T>, T> {
    return new DeleteRequestBuilder<ReturnRequest<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof ReturnRequest
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
