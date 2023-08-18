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
import { CorrectionPurchaseInvoice } from './CorrectionPurchaseInvoice';

/**
 * Request builder class for operations supported on the {@link CorrectionPurchaseInvoice} entity.
 */
export class CorrectionPurchaseInvoiceRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CorrectionPurchaseInvoice<T>, T> {
  /**
   * Returns a request builder for retrieving one `CorrectionPurchaseInvoice` entity based on its keys.
   * @param docEntry Key property. See {@link CorrectionPurchaseInvoice.docEntry}.
   * @returns A request builder for creating requests to retrieve one `CorrectionPurchaseInvoice` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CorrectionPurchaseInvoice<T>, T> {
    return new GetByKeyRequestBuilder<CorrectionPurchaseInvoice<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `CorrectionPurchaseInvoice` entities.
   * @returns A request builder for creating requests to retrieve all `CorrectionPurchaseInvoice` entities.
   */
  getAll(): GetAllRequestBuilder<CorrectionPurchaseInvoice<T>, T> {
    return new GetAllRequestBuilder<CorrectionPurchaseInvoice<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CorrectionPurchaseInvoice` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CorrectionPurchaseInvoice`.
   */
  create(
    entity: CorrectionPurchaseInvoice<T>
  ): CreateRequestBuilder<CorrectionPurchaseInvoice<T>, T> {
    return new CreateRequestBuilder<CorrectionPurchaseInvoice<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CorrectionPurchaseInvoice`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CorrectionPurchaseInvoice`.
   */
  update(
    entity: CorrectionPurchaseInvoice<T>
  ): UpdateRequestBuilder<CorrectionPurchaseInvoice<T>, T> {
    return new UpdateRequestBuilder<CorrectionPurchaseInvoice<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CorrectionPurchaseInvoice`.
   * @param docEntry Key property. See {@link CorrectionPurchaseInvoice.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionPurchaseInvoice`.
   */
  delete(
    docEntry: number
  ): DeleteRequestBuilder<CorrectionPurchaseInvoice<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CorrectionPurchaseInvoice`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionPurchaseInvoice` by taking the entity as a parameter.
   */
  delete(
    entity: CorrectionPurchaseInvoice<T>
  ): DeleteRequestBuilder<CorrectionPurchaseInvoice<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<CorrectionPurchaseInvoice<T>, T> {
    return new DeleteRequestBuilder<CorrectionPurchaseInvoice<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof CorrectionPurchaseInvoice
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
