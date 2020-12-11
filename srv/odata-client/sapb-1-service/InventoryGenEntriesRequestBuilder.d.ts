import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<InventoryGenEntries>;
    /**
     * Returns a request builder for querying all `InventoryGenEntries` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryGenEntries` entities.
     */
    getAll(): GetAllRequestBuilderV4<InventoryGenEntries>;
    /**
     * Returns a request builder for creating a `InventoryGenEntries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryGenEntries`.
     */
    create(entity: InventoryGenEntries): CreateRequestBuilderV4<InventoryGenEntries>;
    /**
     * Returns a request builder for updating an entity of type `InventoryGenEntries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryGenEntries`.
     */
    update(entity: InventoryGenEntries): UpdateRequestBuilderV4<InventoryGenEntries>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryGenEntries`.
     * @param docEntry Key property. See [[InventoryGenEntries.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `InventoryGenEntries`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<InventoryGenEntries>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryGenEntries`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InventoryGenEntries` by taking the entity as a parameter.
     */
    delete(entity: InventoryGenEntries): DeleteRequestBuilderV4<InventoryGenEntries>;
}
//# sourceMappingURL=InventoryGenEntriesRequestBuilder.d.ts.map