/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PaymentRunExport } from './PaymentRunExport';

/**
 * Request builder class for operations supported on the [[PaymentRunExport]] entity.
 */
export class PaymentRunExportRequestBuilder extends RequestBuilder<PaymentRunExport> {
  /**
   * Returns a request builder for retrieving one `PaymentRunExport` entity based on its keys.
   * @param absoluteEntry Key property. See [[PaymentRunExport.absoluteEntry]].
   * @returns A request builder for creating requests to retrieve one `PaymentRunExport` entity based on its keys.
   */
  getByKey(absoluteEntry: number): GetByKeyRequestBuilderV4<PaymentRunExport> {
    return new GetByKeyRequestBuilderV4(PaymentRunExport, { AbsoluteEntry: absoluteEntry });
  }

  /**
   * Returns a request builder for querying all `PaymentRunExport` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentRunExport` entities.
   */
  getAll(): GetAllRequestBuilderV4<PaymentRunExport> {
    return new GetAllRequestBuilderV4(PaymentRunExport);
  }

  /**
   * Returns a request builder for creating a `PaymentRunExport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentRunExport`.
   */
  create(entity: PaymentRunExport): CreateRequestBuilderV4<PaymentRunExport> {
    return new CreateRequestBuilderV4(PaymentRunExport, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentRunExport`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentRunExport`.
   */
  update(entity: PaymentRunExport): UpdateRequestBuilderV4<PaymentRunExport> {
    return new UpdateRequestBuilderV4(PaymentRunExport, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentRunExport`.
   * @param absoluteEntry Key property. See [[PaymentRunExport.absoluteEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentRunExport`.
   */
  delete(absoluteEntry: number): DeleteRequestBuilderV4<PaymentRunExport>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentRunExport`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentRunExport` by taking the entity as a parameter.
   */
  delete(entity: PaymentRunExport): DeleteRequestBuilderV4<PaymentRunExport>;
  delete(absoluteEntryOrEntity: any): DeleteRequestBuilderV4<PaymentRunExport> {
    return new DeleteRequestBuilderV4(PaymentRunExport, absoluteEntryOrEntity instanceof PaymentRunExport ? absoluteEntryOrEntity : { AbsoluteEntry: absoluteEntryOrEntity! });
  }
}
