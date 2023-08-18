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
import { JournalEntryDocumentTypes } from './JournalEntryDocumentTypes';

/**
 * Request builder class for operations supported on the {@link JournalEntryDocumentTypes} entity.
 */
export class JournalEntryDocumentTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JournalEntryDocumentTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `JournalEntryDocumentTypes` entity based on its keys.
   * @param journalEntryType Key property. See {@link JournalEntryDocumentTypes.journalEntryType}.
   * @returns A request builder for creating requests to retrieve one `JournalEntryDocumentTypes` entity based on its keys.
   */
  getByKey(
    journalEntryType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JournalEntryDocumentTypes<T>, T> {
    return new GetByKeyRequestBuilder<JournalEntryDocumentTypes<T>, T>(
      this.entityApi,
      { JournalEntryType: journalEntryType }
    );
  }

  /**
   * Returns a request builder for querying all `JournalEntryDocumentTypes` entities.
   * @returns A request builder for creating requests to retrieve all `JournalEntryDocumentTypes` entities.
   */
  getAll(): GetAllRequestBuilder<JournalEntryDocumentTypes<T>, T> {
    return new GetAllRequestBuilder<JournalEntryDocumentTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `JournalEntryDocumentTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JournalEntryDocumentTypes`.
   */
  create(
    entity: JournalEntryDocumentTypes<T>
  ): CreateRequestBuilder<JournalEntryDocumentTypes<T>, T> {
    return new CreateRequestBuilder<JournalEntryDocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JournalEntryDocumentTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JournalEntryDocumentTypes`.
   */
  update(
    entity: JournalEntryDocumentTypes<T>
  ): UpdateRequestBuilder<JournalEntryDocumentTypes<T>, T> {
    return new UpdateRequestBuilder<JournalEntryDocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JournalEntryDocumentTypes`.
   * @param journalEntryType Key property. See {@link JournalEntryDocumentTypes.journalEntryType}.
   * @returns A request builder for creating requests that delete an entity of type `JournalEntryDocumentTypes`.
   */
  delete(
    journalEntryType: string
  ): DeleteRequestBuilder<JournalEntryDocumentTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JournalEntryDocumentTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JournalEntryDocumentTypes` by taking the entity as a parameter.
   */
  delete(
    entity: JournalEntryDocumentTypes<T>
  ): DeleteRequestBuilder<JournalEntryDocumentTypes<T>, T>;
  delete(
    journalEntryTypeOrEntity: any
  ): DeleteRequestBuilder<JournalEntryDocumentTypes<T>, T> {
    return new DeleteRequestBuilder<JournalEntryDocumentTypes<T>, T>(
      this.entityApi,
      journalEntryTypeOrEntity instanceof JournalEntryDocumentTypes
        ? journalEntryTypeOrEntity
        : { JournalEntryType: journalEntryTypeOrEntity! }
    );
  }
}
