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
import { CorrectionInvoiceReversal } from './CorrectionInvoiceReversal';

/**
 * Request builder class for operations supported on the {@link CorrectionInvoiceReversal} entity.
 */
export class CorrectionInvoiceReversalRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CorrectionInvoiceReversal<T>, T> {
  /**
   * Returns a request builder for retrieving one `CorrectionInvoiceReversal` entity based on its keys.
   * @param docEntry Key property. See {@link CorrectionInvoiceReversal.docEntry}.
   * @returns A request builder for creating requests to retrieve one `CorrectionInvoiceReversal` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CorrectionInvoiceReversal<T>, T> {
    return new GetByKeyRequestBuilder<CorrectionInvoiceReversal<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `CorrectionInvoiceReversal` entities.
   * @returns A request builder for creating requests to retrieve all `CorrectionInvoiceReversal` entities.
   */
  getAll(): GetAllRequestBuilder<CorrectionInvoiceReversal<T>, T> {
    return new GetAllRequestBuilder<CorrectionInvoiceReversal<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CorrectionInvoiceReversal` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CorrectionInvoiceReversal`.
   */
  create(
    entity: CorrectionInvoiceReversal<T>
  ): CreateRequestBuilder<CorrectionInvoiceReversal<T>, T> {
    return new CreateRequestBuilder<CorrectionInvoiceReversal<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CorrectionInvoiceReversal`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CorrectionInvoiceReversal`.
   */
  update(
    entity: CorrectionInvoiceReversal<T>
  ): UpdateRequestBuilder<CorrectionInvoiceReversal<T>, T> {
    return new UpdateRequestBuilder<CorrectionInvoiceReversal<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CorrectionInvoiceReversal`.
   * @param docEntry Key property. See {@link CorrectionInvoiceReversal.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionInvoiceReversal`.
   */
  delete(
    docEntry: number
  ): DeleteRequestBuilder<CorrectionInvoiceReversal<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CorrectionInvoiceReversal`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionInvoiceReversal` by taking the entity as a parameter.
   */
  delete(
    entity: CorrectionInvoiceReversal<T>
  ): DeleteRequestBuilder<CorrectionInvoiceReversal<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<CorrectionInvoiceReversal<T>, T> {
    return new DeleteRequestBuilder<CorrectionInvoiceReversal<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof CorrectionInvoiceReversal
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
