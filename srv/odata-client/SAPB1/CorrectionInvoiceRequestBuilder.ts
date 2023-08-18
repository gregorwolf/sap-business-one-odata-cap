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
import { CorrectionInvoice } from './CorrectionInvoice';

/**
 * Request builder class for operations supported on the {@link CorrectionInvoice} entity.
 */
export class CorrectionInvoiceRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CorrectionInvoice<T>, T> {
  /**
   * Returns a request builder for retrieving one `CorrectionInvoice` entity based on its keys.
   * @param docEntry Key property. See {@link CorrectionInvoice.docEntry}.
   * @returns A request builder for creating requests to retrieve one `CorrectionInvoice` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CorrectionInvoice<T>, T> {
    return new GetByKeyRequestBuilder<CorrectionInvoice<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `CorrectionInvoice` entities.
   * @returns A request builder for creating requests to retrieve all `CorrectionInvoice` entities.
   */
  getAll(): GetAllRequestBuilder<CorrectionInvoice<T>, T> {
    return new GetAllRequestBuilder<CorrectionInvoice<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CorrectionInvoice` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CorrectionInvoice`.
   */
  create(
    entity: CorrectionInvoice<T>
  ): CreateRequestBuilder<CorrectionInvoice<T>, T> {
    return new CreateRequestBuilder<CorrectionInvoice<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CorrectionInvoice`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CorrectionInvoice`.
   */
  update(
    entity: CorrectionInvoice<T>
  ): UpdateRequestBuilder<CorrectionInvoice<T>, T> {
    return new UpdateRequestBuilder<CorrectionInvoice<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CorrectionInvoice`.
   * @param docEntry Key property. See {@link CorrectionInvoice.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionInvoice`.
   */
  delete(docEntry: number): DeleteRequestBuilder<CorrectionInvoice<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CorrectionInvoice`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionInvoice` by taking the entity as a parameter.
   */
  delete(
    entity: CorrectionInvoice<T>
  ): DeleteRequestBuilder<CorrectionInvoice<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<CorrectionInvoice<T>, T> {
    return new DeleteRequestBuilder<CorrectionInvoice<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof CorrectionInvoice
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
