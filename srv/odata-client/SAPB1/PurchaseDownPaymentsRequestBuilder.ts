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
import { PurchaseDownPayments } from './PurchaseDownPayments';

/**
 * Request builder class for operations supported on the {@link PurchaseDownPayments} entity.
 */
export class PurchaseDownPaymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseDownPayments<T>, T> {
  /**
   * Returns a request builder for retrieving one `PurchaseDownPayments` entity based on its keys.
   * @param docEntry Key property. See {@link PurchaseDownPayments.docEntry}.
   * @returns A request builder for creating requests to retrieve one `PurchaseDownPayments` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PurchaseDownPayments<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseDownPayments<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `PurchaseDownPayments` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseDownPayments` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseDownPayments<T>, T> {
    return new GetAllRequestBuilder<PurchaseDownPayments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseDownPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseDownPayments`.
   */
  create(
    entity: PurchaseDownPayments<T>
  ): CreateRequestBuilder<PurchaseDownPayments<T>, T> {
    return new CreateRequestBuilder<PurchaseDownPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseDownPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseDownPayments`.
   */
  update(
    entity: PurchaseDownPayments<T>
  ): UpdateRequestBuilder<PurchaseDownPayments<T>, T> {
    return new UpdateRequestBuilder<PurchaseDownPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseDownPayments`.
   * @param docEntry Key property. See {@link PurchaseDownPayments.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseDownPayments`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseDownPayments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseDownPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseDownPayments` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseDownPayments<T>
  ): DeleteRequestBuilder<PurchaseDownPayments<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<PurchaseDownPayments<T>, T> {
    return new DeleteRequestBuilder<PurchaseDownPayments<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof PurchaseDownPayments
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
