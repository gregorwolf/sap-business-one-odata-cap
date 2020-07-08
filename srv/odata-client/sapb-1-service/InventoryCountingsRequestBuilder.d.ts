import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { InventoryCountings } from './InventoryCountings';
/**
 * Request builder class for operations supported on the [[InventoryCountings]] entity.
 */
export declare class InventoryCountingsRequestBuilder extends RequestBuilder<InventoryCountings> {
    /**
     * Returns a request builder for retrieving one `InventoryCountings` entity based on its keys.
     * @param documentEntry Key property. See [[InventoryCountings.documentEntry]].
     * @returns A request builder for creating requests to retrieve one `InventoryCountings` entity based on its keys.
     */
    getByKey(documentEntry: number): GetByKeyRequestBuilder<InventoryCountings>;
    /**
     * Returns a request builder for querying all `InventoryCountings` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryCountings` entities.
     */
    getAll(): GetAllRequestBuilder<InventoryCountings>;
    /**
     * Returns a request builder for creating a `InventoryCountings` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryCountings`.
     */
    create(entity: InventoryCountings): CreateRequestBuilder<InventoryCountings>;
    /**
     * Returns a request builder for updating an entity of type `InventoryCountings`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryCountings`.
     */
    update(entity: InventoryCountings): UpdateRequestBuilder<InventoryCountings>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryCountings`.
     * @param documentEntry Key property. See [[InventoryCountings.documentEntry]].
     * @returns A request builder for creating requests that delete an entity of type `InventoryCountings`.
     */
    delete(documentEntry: number): DeleteRequestBuilder<InventoryCountings>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryCountings`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InventoryCountings` by taking the entity as a parameter.
     */
    delete(entity: InventoryCountings): DeleteRequestBuilder<InventoryCountings>;
}
//# sourceMappingURL=InventoryCountingsRequestBuilder.d.ts.map