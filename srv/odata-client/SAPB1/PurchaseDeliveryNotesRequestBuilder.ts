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
import { PurchaseDeliveryNotes } from './PurchaseDeliveryNotes';

/**
 * Request builder class for operations supported on the {@link PurchaseDeliveryNotes} entity.
 */
export class PurchaseDeliveryNotesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseDeliveryNotes<T>, T> {
  /**
   * Returns a request builder for retrieving one `PurchaseDeliveryNotes` entity based on its keys.
   * @param docEntry Key property. See {@link PurchaseDeliveryNotes.docEntry}.
   * @returns A request builder for creating requests to retrieve one `PurchaseDeliveryNotes` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PurchaseDeliveryNotes<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseDeliveryNotes<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `PurchaseDeliveryNotes` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseDeliveryNotes` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseDeliveryNotes<T>, T> {
    return new GetAllRequestBuilder<PurchaseDeliveryNotes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseDeliveryNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseDeliveryNotes`.
   */
  create(
    entity: PurchaseDeliveryNotes<T>
  ): CreateRequestBuilder<PurchaseDeliveryNotes<T>, T> {
    return new CreateRequestBuilder<PurchaseDeliveryNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseDeliveryNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseDeliveryNotes`.
   */
  update(
    entity: PurchaseDeliveryNotes<T>
  ): UpdateRequestBuilder<PurchaseDeliveryNotes<T>, T> {
    return new UpdateRequestBuilder<PurchaseDeliveryNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseDeliveryNotes`.
   * @param docEntry Key property. See {@link PurchaseDeliveryNotes.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseDeliveryNotes`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseDeliveryNotes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseDeliveryNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseDeliveryNotes` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseDeliveryNotes<T>
  ): DeleteRequestBuilder<PurchaseDeliveryNotes<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<PurchaseDeliveryNotes<T>, T> {
    return new DeleteRequestBuilder<PurchaseDeliveryNotes<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof PurchaseDeliveryNotes
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
