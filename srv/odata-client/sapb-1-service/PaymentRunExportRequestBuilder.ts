/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(absoluteEntry: number): GetByKeyRequestBuilder<PaymentRunExport> {
    return new GetByKeyRequestBuilder(PaymentRunExport, { AbsoluteEntry: absoluteEntry });
  }

  /**
   * Returns a request builder for querying all `PaymentRunExport` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentRunExport` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentRunExport> {
    return new GetAllRequestBuilder(PaymentRunExport);
  }

  /**
   * Returns a request builder for creating a `PaymentRunExport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentRunExport`.
   */
  create(entity: PaymentRunExport): CreateRequestBuilder<PaymentRunExport> {
    return new CreateRequestBuilder(PaymentRunExport, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentRunExport`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentRunExport`.
   */
  update(entity: PaymentRunExport): UpdateRequestBuilder<PaymentRunExport> {
    return new UpdateRequestBuilder(PaymentRunExport, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentRunExport`.
   * @param absoluteEntry Key property. See [[PaymentRunExport.absoluteEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentRunExport`.
   */
  delete(absoluteEntry: number): DeleteRequestBuilder<PaymentRunExport>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentRunExport`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentRunExport` by taking the entity as a parameter.
   */
  delete(entity: PaymentRunExport): DeleteRequestBuilder<PaymentRunExport>;
  delete(absoluteEntryOrEntity: any): DeleteRequestBuilder<PaymentRunExport> {
    return new DeleteRequestBuilder(PaymentRunExport, absoluteEntryOrEntity instanceof PaymentRunExport ? absoluteEntryOrEntity : { AbsoluteEntry: absoluteEntryOrEntity! });
  }
}
