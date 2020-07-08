import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { InventoryCycles } from './InventoryCycles';
/**
 * Request builder class for operations supported on the [[InventoryCycles]] entity.
 */
export declare class InventoryCyclesRequestBuilder extends RequestBuilder<InventoryCycles> {
    /**
     * Returns a request builder for retrieving one `InventoryCycles` entity based on its keys.
     * @param cycleCode Key property. See [[InventoryCycles.cycleCode]].
     * @returns A request builder for creating requests to retrieve one `InventoryCycles` entity based on its keys.
     */
    getByKey(cycleCode: number): GetByKeyRequestBuilder<InventoryCycles>;
    /**
     * Returns a request builder for querying all `InventoryCycles` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryCycles` entities.
     */
    getAll(): GetAllRequestBuilder<InventoryCycles>;
    /**
     * Returns a request builder for creating a `InventoryCycles` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryCycles`.
     */
    create(entity: InventoryCycles): CreateRequestBuilder<InventoryCycles>;
    /**
     * Returns a request builder for updating an entity of type `InventoryCycles`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryCycles`.
     */
    update(entity: InventoryCycles): UpdateRequestBuilder<InventoryCycles>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryCycles`.
     * @param cycleCode Key property. See [[InventoryCycles.cycleCode]].
     * @returns A request builder for creating requests that delete an entity of type `InventoryCycles`.
     */
    delete(cycleCode: number): DeleteRequestBuilder<InventoryCycles>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryCycles`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InventoryCycles` by taking the entity as a parameter.
     */
    delete(entity: InventoryCycles): DeleteRequestBuilder<InventoryCycles>;
}
//# sourceMappingURL=InventoryCyclesRequestBuilder.d.ts.map