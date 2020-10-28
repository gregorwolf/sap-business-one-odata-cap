/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { VendorPayments } from './VendorPayments';

/**
 * Request builder class for operations supported on the [[VendorPayments]] entity.
 */
export class VendorPaymentsRequestBuilder extends RequestBuilder<VendorPayments> {
  /**
   * Returns a request builder for retrieving one `VendorPayments` entity based on its keys.
   * @param docEntry Key property. See [[VendorPayments.docEntry]].
   * @returns A request builder for creating requests to retrieve one `VendorPayments` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<VendorPayments> {
    return new GetByKeyRequestBuilder(VendorPayments, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `VendorPayments` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPayments` entities.
   */
  getAll(): GetAllRequestBuilder<VendorPayments> {
    return new GetAllRequestBuilder(VendorPayments);
  }

  /**
   * Returns a request builder for creating a `VendorPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPayments`.
   */
  create(entity: VendorPayments): CreateRequestBuilder<VendorPayments> {
    return new CreateRequestBuilder(VendorPayments, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `VendorPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPayments`.
   */
  update(entity: VendorPayments): UpdateRequestBuilder<VendorPayments> {
    return new UpdateRequestBuilder(VendorPayments, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPayments`.
   * @param docEntry Key property. See [[VendorPayments.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `VendorPayments`.
   */
  delete(docEntry: number): DeleteRequestBuilder<VendorPayments>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPayments` by taking the entity as a parameter.
   */
  delete(entity: VendorPayments): DeleteRequestBuilder<VendorPayments>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<VendorPayments> {
    return new DeleteRequestBuilder(VendorPayments, docEntryOrEntity instanceof VendorPayments ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}