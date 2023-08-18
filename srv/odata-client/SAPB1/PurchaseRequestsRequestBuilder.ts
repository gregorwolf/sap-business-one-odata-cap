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
import { PurchaseRequests } from './PurchaseRequests';

/**
 * Request builder class for operations supported on the {@link PurchaseRequests} entity.
 */
export class PurchaseRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseRequests<T>, T> {
  /**
   * Returns a request builder for retrieving one `PurchaseRequests` entity based on its keys.
   * @param docEntry Key property. See {@link PurchaseRequests.docEntry}.
   * @returns A request builder for creating requests to retrieve one `PurchaseRequests` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PurchaseRequests<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseRequests<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `PurchaseRequests` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseRequests` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseRequests<T>, T> {
    return new GetAllRequestBuilder<PurchaseRequests<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseRequests`.
   */
  create(
    entity: PurchaseRequests<T>
  ): CreateRequestBuilder<PurchaseRequests<T>, T> {
    return new CreateRequestBuilder<PurchaseRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseRequests`.
   */
  update(
    entity: PurchaseRequests<T>
  ): UpdateRequestBuilder<PurchaseRequests<T>, T> {
    return new UpdateRequestBuilder<PurchaseRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequests`.
   * @param docEntry Key property. See {@link PurchaseRequests.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequests`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequests` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseRequests<T>
  ): DeleteRequestBuilder<PurchaseRequests<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<PurchaseRequests<T>, T> {
    return new DeleteRequestBuilder<PurchaseRequests<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof PurchaseRequests
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
