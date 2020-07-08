import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { InventoryGenEntries } from './InventoryGenEntries';
/**
 * Request builder class for operations supported on the [[InventoryGenEntries]] entity.
 */
export declare class InventoryGenEntriesRequestBuilder extends RequestBuilder<InventoryGenEntries> {
    /**
     * Returns a request builder for retrieving one `InventoryGenEntries` entity based on its keys.
     * @param docEntry Key property. See [[InventoryGenEntries.docEntry]].
     * @returns A request builder for creating requests to retrieve one `InventoryGenEntries` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<InventoryGenEntries>;
    /**
     * Returns a request builder for querying all `InventoryGenEntries` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryGenEntries` entities.
     */
    getAll(): GetAllRequestBuilder<InventoryGenEntries>;
    /**
     * Returns a request builder for creating a `InventoryGenEntries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryGenEntries`.
     */
    create(entity: InventoryGenEntries): CreateRequestBuilder<InventoryGenEntries>;
    /**
     * Returns a request builder for updating an entity of type `InventoryGenEntries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryGenEntries`.
     */
    update(entity: InventoryGenEntries): UpdateRequestBuilder<InventoryGenEntries>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryGenEntries`.
     * @param docEntry Key property. See [[InventoryGenEntries.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `InventoryGenEntries`.
     */
    delete(docEntry: number): DeleteRequestBuilder<InventoryGenEntries>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryGenEntries`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InventoryGenEntries` by taking the entity as a parameter.
     */
    delete(entity: InventoryGenEntries): DeleteRequestBuilder<InventoryGenEntries>;
}
//# sourceMappingURL=InventoryGenEntriesRequestBuilder.d.ts.map