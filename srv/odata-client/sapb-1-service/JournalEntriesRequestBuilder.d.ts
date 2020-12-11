import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { JournalEntries } from './JournalEntries';
/**
 * Request builder class for operations supported on the [[JournalEntries]] entity.
 */
export declare class JournalEntriesRequestBuilder extends RequestBuilder<JournalEntries> {
    /**
     * Returns a request builder for retrieving one `JournalEntries` entity based on its keys.
     * @param jdtNum Key property. See [[JournalEntries.jdtNum]].
     * @returns A request builder for creating requests to retrieve one `JournalEntries` entity based on its keys.
     */
    getByKey(jdtNum: number): GetByKeyRequestBuilderV4<JournalEntries>;
    /**
     * Returns a request builder for querying all `JournalEntries` entities.
     * @returns A request builder for creating requests to retrieve all `JournalEntries` entities.
     */
    getAll(): GetAllRequestBuilderV4<JournalEntries>;
    /**
     * Returns a request builder for creating a `JournalEntries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JournalEntries`.
     */
    create(entity: JournalEntries): CreateRequestBuilderV4<JournalEntries>;
    /**
     * Returns a request builder for updating an entity of type `JournalEntries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JournalEntries`.
     */
    update(entity: JournalEntries): UpdateRequestBuilderV4<JournalEntries>;
    /**
     * Returns a request builder for deleting an entity of type `JournalEntries`.
     * @param jdtNum Key property. See [[JournalEntries.jdtNum]].
     * @returns A request builder for creating requests that delete an entity of type `JournalEntries`.
     */
    delete(jdtNum: number): DeleteRequestBuilderV4<JournalEntries>;
    /**
     * Returns a request builder for deleting an entity of type `JournalEntries`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JournalEntries` by taking the entity as a parameter.
     */
    delete(entity: JournalEntries): DeleteRequestBuilderV4<JournalEntries>;
}
//# sourceMappingURL=JournalEntriesRequestBuilder.d.ts.map