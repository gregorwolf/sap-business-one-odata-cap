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
import { DeliveryNotes } from './DeliveryNotes';

/**
 * Request builder class for operations supported on the {@link DeliveryNotes} entity.
 */
export class DeliveryNotesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeliveryNotes<T>, T> {
  /**
   * Returns a request builder for retrieving one `DeliveryNotes` entity based on its keys.
   * @param docEntry Key property. See {@link DeliveryNotes.docEntry}.
   * @returns A request builder for creating requests to retrieve one `DeliveryNotes` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DeliveryNotes<T>, T> {
    return new GetByKeyRequestBuilder<DeliveryNotes<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `DeliveryNotes` entities.
   * @returns A request builder for creating requests to retrieve all `DeliveryNotes` entities.
   */
  getAll(): GetAllRequestBuilder<DeliveryNotes<T>, T> {
    return new GetAllRequestBuilder<DeliveryNotes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DeliveryNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeliveryNotes`.
   */
  create(entity: DeliveryNotes<T>): CreateRequestBuilder<DeliveryNotes<T>, T> {
    return new CreateRequestBuilder<DeliveryNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DeliveryNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeliveryNotes`.
   */
  update(entity: DeliveryNotes<T>): UpdateRequestBuilder<DeliveryNotes<T>, T> {
    return new UpdateRequestBuilder<DeliveryNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeliveryNotes`.
   * @param docEntry Key property. See {@link DeliveryNotes.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryNotes`.
   */
  delete(docEntry: number): DeleteRequestBuilder<DeliveryNotes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeliveryNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryNotes` by taking the entity as a parameter.
   */
  delete(entity: DeliveryNotes<T>): DeleteRequestBuilder<DeliveryNotes<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<DeliveryNotes<T>, T> {
    return new DeleteRequestBuilder<DeliveryNotes<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof DeliveryNotes
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
