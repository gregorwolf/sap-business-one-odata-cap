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
import { IncomingPayments } from './IncomingPayments';

/**
 * Request builder class for operations supported on the {@link IncomingPayments} entity.
 */
export class IncomingPaymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IncomingPayments<T>, T> {
  /**
   * Returns a request builder for retrieving one `IncomingPayments` entity based on its keys.
   * @param docEntry Key property. See {@link IncomingPayments.docEntry}.
   * @returns A request builder for creating requests to retrieve one `IncomingPayments` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<IncomingPayments<T>, T> {
    return new GetByKeyRequestBuilder<IncomingPayments<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `IncomingPayments` entities.
   * @returns A request builder for creating requests to retrieve all `IncomingPayments` entities.
   */
  getAll(): GetAllRequestBuilder<IncomingPayments<T>, T> {
    return new GetAllRequestBuilder<IncomingPayments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IncomingPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IncomingPayments`.
   */
  create(
    entity: IncomingPayments<T>
  ): CreateRequestBuilder<IncomingPayments<T>, T> {
    return new CreateRequestBuilder<IncomingPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IncomingPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IncomingPayments`.
   */
  update(
    entity: IncomingPayments<T>
  ): UpdateRequestBuilder<IncomingPayments<T>, T> {
    return new UpdateRequestBuilder<IncomingPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IncomingPayments`.
   * @param docEntry Key property. See {@link IncomingPayments.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `IncomingPayments`.
   */
  delete(docEntry: number): DeleteRequestBuilder<IncomingPayments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IncomingPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IncomingPayments` by taking the entity as a parameter.
   */
  delete(
    entity: IncomingPayments<T>
  ): DeleteRequestBuilder<IncomingPayments<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<IncomingPayments<T>, T> {
    return new DeleteRequestBuilder<IncomingPayments<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof IncomingPayments
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
