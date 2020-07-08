import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
    getByKey(documentEntry: number): GetByKeyRequestBuilder<InventoryPostings>;
    /**
     * Returns a request builder for querying all `InventoryPostings` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryPostings` entities.
     */
    getAll(): GetAllRequestBuilder<InventoryPostings>;
    /**
     * Returns a request builder for creating a `InventoryPostings` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryPostings`.
     */
    create(entity: InventoryPostings): CreateRequestBuilder<InventoryPostings>;
    /**
     * Returns a request builder for updating an entity of type `InventoryPostings`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryPostings`.
     */
    update(entity: InventoryPostings): UpdateRequestBuilder<InventoryPostings>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryPostings`.
     * @param documentEntry Key property. See [[InventoryPostings.documentEntry]].
     * @returns A request builder for creating requests that delete an entity of type `InventoryPostings`.
     */
    delete(documentEntry: number): DeleteRequestBuilder<InventoryPostings>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryPostings`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InventoryPostings` by taking the entity as a parameter.
     */
    delete(entity: InventoryPostings): DeleteRequestBuilder<InventoryPostings>;
}
//# sourceMappingURL=InventoryPostingsRequestBuilder.d.ts.map