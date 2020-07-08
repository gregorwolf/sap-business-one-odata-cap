import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { JournalEntryDocumentTypes } from './JournalEntryDocumentTypes';
/**
 * Request builder class for operations supported on the [[JournalEntryDocumentTypes]] entity.
 */
export declare class JournalEntryDocumentTypesRequestBuilder extends RequestBuilder<JournalEntryDocumentTypes> {
    /**
     * Returns a request builder for retrieving one `JournalEntryDocumentTypes` entity based on its keys.
     * @param journalEntryType Key property. See [[JournalEntryDocumentTypes.journalEntryType]].
     * @returns A request builder for creating requests to retrieve one `JournalEntryDocumentTypes` entity based on its keys.
     */
    getByKey(journalEntryType: string): GetByKeyRequestBuilder<JournalEntryDocumentTypes>;
    /**
     * Returns a request builder for querying all `JournalEntryDocumentTypes` entities.
     * @returns A request builder for creating requests to retrieve all `JournalEntryDocumentTypes` entities.
     */
    getAll(): GetAllRequestBuilder<JournalEntryDocumentTypes>;
    /**
     * Returns a request builder for creating a `JournalEntryDocumentTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JournalEntryDocumentTypes`.
     */
    create(entity: JournalEntryDocumentTypes): CreateRequestBuilder<JournalEntryDocumentTypes>;
    /**
     * Returns a request builder for updating an entity of type `JournalEntryDocumentTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JournalEntryDocumentTypes`.
     */
    update(entity: JournalEntryDocumentTypes): UpdateRequestBuilder<JournalEntryDocumentTypes>;
    /**
     * Returns a request builder for deleting an entity of type `JournalEntryDocumentTypes`.
     * @param journalEntryType Key property. See [[JournalEntryDocumentTypes.journalEntryType]].
     * @returns A request builder for creating requests that delete an entity of type `JournalEntryDocumentTypes`.
     */
    delete(journalEntryType: string): DeleteRequestBuilder<JournalEntryDocumentTypes>;
    /**
     * Returns a request builder for deleting an entity of type `JournalEntryDocumentTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JournalEntryDocumentTypes` by taking the entity as a parameter.
     */
    delete(entity: JournalEntryDocumentTypes): DeleteRequestBuilder<JournalEntryDocumentTypes>;
}
//# sourceMappingURL=JournalEntryDocumentTypesRequestBuilder.d.ts.map