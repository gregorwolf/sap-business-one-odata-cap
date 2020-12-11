/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<VendorPayments> {
    return new GetByKeyRequestBuilderV4(VendorPayments, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `VendorPayments` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPayments` entities.
   */
  getAll(): GetAllRequestBuilderV4<VendorPayments> {
    return new GetAllRequestBuilderV4(VendorPayments);
  }

  /**
   * Returns a request builder for creating a `VendorPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPayments`.
   */
  create(entity: VendorPayments): CreateRequestBuilderV4<VendorPayments> {
    return new CreateRequestBuilderV4(VendorPayments, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `VendorPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPayments`.
   */
  update(entity: VendorPayments): UpdateRequestBuilderV4<VendorPayments> {
    return new UpdateRequestBuilderV4(VendorPayments, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPayments`.
   * @param docEntry Key property. See [[VendorPayments.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `VendorPayments`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<VendorPayments>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPayments` by taking the entity as a parameter.
   */
  delete(entity: VendorPayments): DeleteRequestBuilderV4<VendorPayments>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<VendorPayments> {
    return new DeleteRequestBuilderV4(VendorPayments, docEntryOrEntity instanceof VendorPayments ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
