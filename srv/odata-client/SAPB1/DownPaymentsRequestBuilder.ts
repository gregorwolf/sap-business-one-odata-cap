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
import { DownPayments } from './DownPayments';

/**
 * Request builder class for operations supported on the {@link DownPayments} entity.
 */
export class DownPaymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DownPayments<T>, T> {
  /**
   * Returns a request builder for retrieving one `DownPayments` entity based on its keys.
   * @param docEntry Key property. See {@link DownPayments.docEntry}.
   * @returns A request builder for creating requests to retrieve one `DownPayments` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DownPayments<T>, T> {
    return new GetByKeyRequestBuilder<DownPayments<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `DownPayments` entities.
   * @returns A request builder for creating requests to retrieve all `DownPayments` entities.
   */
  getAll(): GetAllRequestBuilder<DownPayments<T>, T> {
    return new GetAllRequestBuilder<DownPayments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DownPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DownPayments`.
   */
  create(entity: DownPayments<T>): CreateRequestBuilder<DownPayments<T>, T> {
    return new CreateRequestBuilder<DownPayments<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DownPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DownPayments`.
   */
  update(entity: DownPayments<T>): UpdateRequestBuilder<DownPayments<T>, T> {
    return new UpdateRequestBuilder<DownPayments<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DownPayments`.
   * @param docEntry Key property. See {@link DownPayments.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `DownPayments`.
   */
  delete(docEntry: number): DeleteRequestBuilder<DownPayments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DownPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DownPayments` by taking the entity as a parameter.
   */
  delete(entity: DownPayments<T>): DeleteRequestBuilder<DownPayments<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<DownPayments<T>, T> {
    return new DeleteRequestBuilder<DownPayments<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof DownPayments
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
