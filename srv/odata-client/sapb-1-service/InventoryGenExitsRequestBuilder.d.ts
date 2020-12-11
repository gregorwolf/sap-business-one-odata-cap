import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { InventoryGenExits } from './InventoryGenExits';
/**
 * Request builder class for operations supported on the [[InventoryGenExits]] entity.
 */
export declare class InventoryGenExitsRequestBuilder extends RequestBuilder<InventoryGenExits> {
    /**
     * Returns a request builder for retrieving one `InventoryGenExits` entity based on its keys.
     * @param docEntry Key property. See [[InventoryGenExits.docEntry]].
     * @returns A request builder for creating requests to retrieve one `InventoryGenExits` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<InventoryGenExits>;
    /**
     * Returns a request builder for querying all `InventoryGenExits` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryGenExits` entities.
     */
    getAll(): GetAllRequestBuilderV4<InventoryGenExits>;
    /**
     * Returns a request builder for creating a `InventoryGenExits` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryGenExits`.
     */
    create(entity: InventoryGenExits): CreateRequestBuilderV4<InventoryGenExits>;
    /**
     * Returns a request builder for updating an entity of type `InventoryGenExits`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryGenExits`.
     */
    update(entity: InventoryGenExits): UpdateRequestBuilderV4<InventoryGenExits>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryGenExits`.
     * @param docEntry Key property. See [[InventoryGenExits.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `InventoryGenExits`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<InventoryGenExits>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryGenExits`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InventoryGenExits` by taking the entity as a parameter.
     */
    delete(entity: InventoryGenExits): DeleteRequestBuilderV4<InventoryGenExits>;
}
//# sourceMappingURL=InventoryGenExitsRequestBuilder.d.ts.map