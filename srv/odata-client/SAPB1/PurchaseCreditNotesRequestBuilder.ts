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
import { PurchaseCreditNotes } from './PurchaseCreditNotes';

/**
 * Request builder class for operations supported on the {@link PurchaseCreditNotes} entity.
 */
export class PurchaseCreditNotesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseCreditNotes<T>, T> {
  /**
   * Returns a request builder for retrieving one `PurchaseCreditNotes` entity based on its keys.
   * @param docEntry Key property. See {@link PurchaseCreditNotes.docEntry}.
   * @returns A request builder for creating requests to retrieve one `PurchaseCreditNotes` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PurchaseCreditNotes<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseCreditNotes<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `PurchaseCreditNotes` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseCreditNotes` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseCreditNotes<T>, T> {
    return new GetAllRequestBuilder<PurchaseCreditNotes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseCreditNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseCreditNotes`.
   */
  create(
    entity: PurchaseCreditNotes<T>
  ): CreateRequestBuilder<PurchaseCreditNotes<T>, T> {
    return new CreateRequestBuilder<PurchaseCreditNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseCreditNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseCreditNotes`.
   */
  update(
    entity: PurchaseCreditNotes<T>
  ): UpdateRequestBuilder<PurchaseCreditNotes<T>, T> {
    return new UpdateRequestBuilder<PurchaseCreditNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseCreditNotes`.
   * @param docEntry Key property. See {@link PurchaseCreditNotes.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseCreditNotes`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseCreditNotes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseCreditNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseCreditNotes` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseCreditNotes<T>
  ): DeleteRequestBuilder<PurchaseCreditNotes<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<PurchaseCreditNotes<T>, T> {
    return new DeleteRequestBuilder<PurchaseCreditNotes<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof PurchaseCreditNotes
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
