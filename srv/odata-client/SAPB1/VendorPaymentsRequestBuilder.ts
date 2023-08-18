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
import { VendorPayments } from './VendorPayments';

/**
 * Request builder class for operations supported on the {@link VendorPayments} entity.
 */
export class VendorPaymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorPayments<T>, T> {
  /**
   * Returns a request builder for retrieving one `VendorPayments` entity based on its keys.
   * @param docEntry Key property. See {@link VendorPayments.docEntry}.
   * @returns A request builder for creating requests to retrieve one `VendorPayments` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<VendorPayments<T>, T> {
    return new GetByKeyRequestBuilder<VendorPayments<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `VendorPayments` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPayments` entities.
   */
  getAll(): GetAllRequestBuilder<VendorPayments<T>, T> {
    return new GetAllRequestBuilder<VendorPayments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPayments`.
   */
  create(
    entity: VendorPayments<T>
  ): CreateRequestBuilder<VendorPayments<T>, T> {
    return new CreateRequestBuilder<VendorPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPayments`.
   */
  update(
    entity: VendorPayments<T>
  ): UpdateRequestBuilder<VendorPayments<T>, T> {
    return new UpdateRequestBuilder<VendorPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPayments`.
   * @param docEntry Key property. See {@link VendorPayments.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `VendorPayments`.
   */
  delete(docEntry: number): DeleteRequestBuilder<VendorPayments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPayments` by taking the entity as a parameter.
   */
  delete(entity: VendorPayments<T>): DeleteRequestBuilder<VendorPayments<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<VendorPayments<T>, T> {
    return new DeleteRequestBuilder<VendorPayments<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof VendorPayments
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
