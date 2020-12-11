import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { InventoryPostings } from './InventoryPostings';
/**
 * Request builder class for operations supported on the [[InventoryPostings]] entity.
 */
export declare class InventoryPostingsRequestBuilder extends RequestBuilder<InventoryPostings> {
    /**
     * Returns a request builder for retrieving one `InventoryPostings` entity based on its keys.
     * @param documentEntry Key property. See [[InventoryPostings.documentEntry]].
     * @returns A request builder for creating requests to retrieve one `InventoryPostings` entity based on its keys.
     */
    getByKey(documentEntry: number): GetByKeyRequestBuilderV4<InventoryPostings>;
    /**
     * Returns a request builder for querying all `InventoryPostings` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryPostings` entities.
     */
    getAll(): GetAllRequestBuilderV4<InventoryPostings>;
    /**
     * Returns a request builder for creating a `InventoryPostings` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryPostings`.
     */
    create(entity: InventoryPostings): CreateRequestBuilderV4<InventoryPostings>;
    /**
     * Returns a request builder for updating an entity of type `InventoryPostings`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryPostings`.
     */
    update(entity: InventoryPostings): UpdateRequestBuilderV4<InventoryPostings>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryPostings`.
     * @param documentEntry Key property. See [[InventoryPostings.documentEntry]].
     * @returns A request builder for creating requests that delete an entity of type `InventoryPostings`.
     */
    delete(documentEntry: number): DeleteRequestBuilderV4<InventoryPostings>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryPostings`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InventoryPostings` by taking the entity as a parameter.
     */
    delete(entity: InventoryPostings): DeleteRequestBuilderV4<InventoryPostings>;
}
//# sourceMappingURL=InventoryPostingsRequestBuilder.d.ts.map