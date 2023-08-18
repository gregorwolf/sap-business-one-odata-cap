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
import { CorrectionPurchaseInvoiceReversal } from './CorrectionPurchaseInvoiceReversal';

/**
 * Request builder class for operations supported on the {@link CorrectionPurchaseInvoiceReversal} entity.
 */
export class CorrectionPurchaseInvoiceReversalRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CorrectionPurchaseInvoiceReversal<T>, T> {
  /**
   * Returns a request builder for retrieving one `CorrectionPurchaseInvoiceReversal` entity based on its keys.
   * @param docEntry Key property. See {@link CorrectionPurchaseInvoiceReversal.docEntry}.
   * @returns A request builder for creating requests to retrieve one `CorrectionPurchaseInvoiceReversal` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CorrectionPurchaseInvoiceReversal<T>, T> {
    return new GetByKeyRequestBuilder<CorrectionPurchaseInvoiceReversal<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `CorrectionPurchaseInvoiceReversal` entities.
   * @returns A request builder for creating requests to retrieve all `CorrectionPurchaseInvoiceReversal` entities.
   */
  getAll(): GetAllRequestBuilder<CorrectionPurchaseInvoiceReversal<T>, T> {
    return new GetAllRequestBuilder<CorrectionPurchaseInvoiceReversal<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CorrectionPurchaseInvoiceReversal` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CorrectionPurchaseInvoiceReversal`.
   */
  create(
    entity: CorrectionPurchaseInvoiceReversal<T>
  ): CreateRequestBuilder<CorrectionPurchaseInvoiceReversal<T>, T> {
    return new CreateRequestBuilder<CorrectionPurchaseInvoiceReversal<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CorrectionPurchaseInvoiceReversal`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CorrectionPurchaseInvoiceReversal`.
   */
  update(
    entity: CorrectionPurchaseInvoiceReversal<T>
  ): UpdateRequestBuilder<CorrectionPurchaseInvoiceReversal<T>, T> {
    return new UpdateRequestBuilder<CorrectionPurchaseInvoiceReversal<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CorrectionPurchaseInvoiceReversal`.
   * @param docEntry Key property. See {@link CorrectionPurchaseInvoiceReversal.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionPurchaseInvoiceReversal`.
   */
  delete(
    docEntry: number
  ): DeleteRequestBuilder<CorrectionPurchaseInvoiceReversal<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CorrectionPurchaseInvoiceReversal`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionPurchaseInvoiceReversal` by taking the entity as a parameter.
   */
  delete(
    entity: CorrectionPurchaseInvoiceReversal<T>
  ): DeleteRequestBuilder<CorrectionPurchaseInvoiceReversal<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<CorrectionPurchaseInvoiceReversal<T>, T> {
    return new DeleteRequestBuilder<CorrectionPurchaseInvoiceReversal<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof CorrectionPurchaseInvoiceReversal
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
