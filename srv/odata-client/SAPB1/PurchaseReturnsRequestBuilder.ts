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
import { PurchaseReturns } from './PurchaseReturns';

/**
 * Request builder class for operations supported on the {@link PurchaseReturns} entity.
 */
export class PurchaseReturnsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseReturns<T>, T> {
  /**
   * Returns a request builder for retrieving one `PurchaseReturns` entity based on its keys.
   * @param docEntry Key property. See {@link PurchaseReturns.docEntry}.
   * @returns A request builder for creating requests to retrieve one `PurchaseReturns` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PurchaseReturns<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseReturns<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `PurchaseReturns` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseReturns` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseReturns<T>, T> {
    return new GetAllRequestBuilder<PurchaseReturns<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseReturns` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseReturns`.
   */
  create(
    entity: PurchaseReturns<T>
  ): CreateRequestBuilder<PurchaseReturns<T>, T> {
    return new CreateRequestBuilder<PurchaseReturns<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseReturns`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseReturns`.
   */
  update(
    entity: PurchaseReturns<T>
  ): UpdateRequestBuilder<PurchaseReturns<T>, T> {
    return new UpdateRequestBuilder<PurchaseReturns<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseReturns`.
   * @param docEntry Key property. See {@link PurchaseReturns.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseReturns`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseReturns<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseReturns`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseReturns` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseReturns<T>
  ): DeleteRequestBuilder<PurchaseReturns<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<PurchaseReturns<T>, T> {
    return new DeleteRequestBuilder<PurchaseReturns<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof PurchaseReturns
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
