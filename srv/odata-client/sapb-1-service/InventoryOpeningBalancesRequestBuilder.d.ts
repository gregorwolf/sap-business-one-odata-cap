import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { InventoryOpeningBalances } from './InventoryOpeningBalances';
/**
 * Request builder class for operations supported on the [[InventoryOpeningBalances]] entity.
 */
export declare class InventoryOpeningBalancesRequestBuilder extends RequestBuilder<InventoryOpeningBalances> {
    /**
     * Returns a request builder for retrieving one `InventoryOpeningBalances` entity based on its keys.
     * @param documentEntry Key property. See [[InventoryOpeningBalances.documentEntry]].
     * @returns A request builder for creating requests to retrieve one `InventoryOpeningBalances` entity based on its keys.
     */
    getByKey(documentEntry: number): GetByKeyRequestBuilder<InventoryOpeningBalances>;
    /**
     * Returns a request builder for querying all `InventoryOpeningBalances` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryOpeningBalances` entities.
     */
    getAll(): GetAllRequestBuilder<InventoryOpeningBalances>;
    /**
     * Returns a request builder for creating a `InventoryOpeningBalances` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryOpeningBalances`.
     */
    create(entity: InventoryOpeningBalances): CreateRequestBuilder<InventoryOpeningBalances>;
    /**
     * Returns a request builder for updating an entity of type `InventoryOpeningBalances`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryOpeningBalances`.
     */
    update(entity: InventoryOpeningBalances): UpdateRequestBuilder<InventoryOpeningBalances>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryOpeningBalances`.
     * @param documentEntry Key property. See [[InventoryOpeningBalances.documentEntry]].
     * @returns A request builder for creating requests that delete an entity of type `InventoryOpeningBalances`.
     */
    delete(documentEntry: number): DeleteRequestBuilder<InventoryOpeningBalances>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryOpeningBalances`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InventoryOpeningBalances` by taking the entity as a parameter.
     */
    delete(entity: InventoryOpeningBalances): DeleteRequestBuilder<InventoryOpeningBalances>;
}
//# sourceMappingURL=InventoryOpeningBalancesRequestBuilder.d.ts.map