import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { InventoryTransferRequests } from './InventoryTransferRequests';
/**
 * Request builder class for operations supported on the [[InventoryTransferRequests]] entity.
 */
export declare class InventoryTransferRequestsRequestBuilder extends RequestBuilder<InventoryTransferRequests> {
    /**
     * Returns a request builder for retrieving one `InventoryTransferRequests` entity based on its keys.
     * @param docEntry Key property. See [[InventoryTransferRequests.docEntry]].
     * @returns A request builder for creating requests to retrieve one `InventoryTransferRequests` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<InventoryTransferRequests>;
    /**
     * Returns a request builder for querying all `InventoryTransferRequests` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryTransferRequests` entities.
     */
    getAll(): GetAllRequestBuilder<InventoryTransferRequests>;
    /**
     * Returns a request builder for creating a `InventoryTransferRequests` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryTransferRequests`.
     */
    create(entity: InventoryTransferRequests): CreateRequestBuilder<InventoryTransferRequests>;
    /**
     * Returns a request builder for updating an entity of type `InventoryTransferRequests`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryTransferRequests`.
     */
    update(entity: InventoryTransferRequests): UpdateRequestBuilder<InventoryTransferRequests>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryTransferRequests`.
     * @param docEntry Key property. See [[InventoryTransferRequests.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `InventoryTransferRequests`.
     */
    delete(docEntry: number): DeleteRequestBuilder<InventoryTransferRequests>;
    /**
     * Returns a request builder for deleting an entity of type `InventoryTransferRequests`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InventoryTransferRequests` by taking the entity as a parameter.
     */
    delete(entity: InventoryTransferRequests): DeleteRequestBuilder<InventoryTransferRequests>;
}
//# sourceMappingURL=InventoryTransferRequestsRequestBuilder.d.ts.map