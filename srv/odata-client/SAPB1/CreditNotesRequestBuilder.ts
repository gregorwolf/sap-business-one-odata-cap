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
import { CreditNotes } from './CreditNotes';

/**
 * Request builder class for operations supported on the {@link CreditNotes} entity.
 */
export class CreditNotesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditNotes<T>, T> {
  /**
   * Returns a request builder for retrieving one `CreditNotes` entity based on its keys.
   * @param docEntry Key property. See {@link CreditNotes.docEntry}.
   * @returns A request builder for creating requests to retrieve one `CreditNotes` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CreditNotes<T>, T> {
    return new GetByKeyRequestBuilder<CreditNotes<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `CreditNotes` entities.
   * @returns A request builder for creating requests to retrieve all `CreditNotes` entities.
   */
  getAll(): GetAllRequestBuilder<CreditNotes<T>, T> {
    return new GetAllRequestBuilder<CreditNotes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CreditNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditNotes`.
   */
  create(entity: CreditNotes<T>): CreateRequestBuilder<CreditNotes<T>, T> {
    return new CreateRequestBuilder<CreditNotes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CreditNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditNotes`.
   */
  update(entity: CreditNotes<T>): UpdateRequestBuilder<CreditNotes<T>, T> {
    return new UpdateRequestBuilder<CreditNotes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditNotes`.
   * @param docEntry Key property. See {@link CreditNotes.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `CreditNotes`.
   */
  delete(docEntry: number): DeleteRequestBuilder<CreditNotes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditNotes` by taking the entity as a parameter.
   */
  delete(entity: CreditNotes<T>): DeleteRequestBuilder<CreditNotes<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<CreditNotes<T>, T> {
    return new DeleteRequestBuilder<CreditNotes<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof CreditNotes
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
