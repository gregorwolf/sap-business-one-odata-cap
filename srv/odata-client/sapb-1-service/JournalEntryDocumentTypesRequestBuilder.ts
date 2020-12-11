/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { JournalEntryDocumentTypes } from './JournalEntryDocumentTypes';

/**
 * Request builder class for operations supported on the [[JournalEntryDocumentTypes]] entity.
 */
export class JournalEntryDocumentTypesRequestBuilder extends RequestBuilder<JournalEntryDocumentTypes> {
  /**
   * Returns a request builder for retrieving one `JournalEntryDocumentTypes` entity based on its keys.
   * @param journalEntryType Key property. See [[JournalEntryDocumentTypes.journalEntryType]].
   * @returns A request builder for creating requests to retrieve one `JournalEntryDocumentTypes` entity based on its keys.
   */
  getByKey(journalEntryType: string): GetByKeyRequestBuilderV4<JournalEntryDocumentTypes> {
    return new GetByKeyRequestBuilderV4(JournalEntryDocumentTypes, { JournalEntryType: journalEntryType });
  }

  /**
   * Returns a request builder for querying all `JournalEntryDocumentTypes` entities.
   * @returns A request builder for creating requests to retrieve all `JournalEntryDocumentTypes` entities.
   */
  getAll(): GetAllRequestBuilderV4<JournalEntryDocumentTypes> {
    return new GetAllRequestBuilderV4(JournalEntryDocumentTypes);
  }

  /**
   * Returns a request builder for creating a `JournalEntryDocumentTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JournalEntryDocumentTypes`.
   */
  create(entity: JournalEntryDocumentTypes): CreateRequestBuilderV4<JournalEntryDocumentTypes> {
    return new CreateRequestBuilderV4(JournalEntryDocumentTypes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JournalEntryDocumentTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JournalEntryDocumentTypes`.
   */
  update(entity: JournalEntryDocumentTypes): UpdateRequestBuilderV4<JournalEntryDocumentTypes> {
    return new UpdateRequestBuilderV4(JournalEntryDocumentTypes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JournalEntryDocumentTypes`.
   * @param journalEntryType Key property. See [[JournalEntryDocumentTypes.journalEntryType]].
   * @returns A request builder for creating requests that delete an entity of type `JournalEntryDocumentTypes`.
   */
  delete(journalEntryType: string): DeleteRequestBuilderV4<JournalEntryDocumentTypes>;
  /**
   * Returns a request builder for deleting an entity of type `JournalEntryDocumentTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JournalEntryDocumentTypes` by taking the entity as a parameter.
   */
  delete(entity: JournalEntryDocumentTypes): DeleteRequestBuilderV4<JournalEntryDocumentTypes>;
  delete(journalEntryTypeOrEntity: any): DeleteRequestBuilderV4<JournalEntryDocumentTypes> {
    return new DeleteRequestBuilderV4(JournalEntryDocumentTypes, journalEntryTypeOrEntity instanceof JournalEntryDocumentTypes ? journalEntryTypeOrEntity : { JournalEntryType: journalEntryTypeOrEntity! });
  }
}
