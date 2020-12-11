import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PurchaseRequests } from './PurchaseRequests';
/**
 * Request builder class for operations supported on the [[PurchaseRequests]] entity.
 */
export declare class PurchaseRequestsRequestBuilder extends RequestBuilder<PurchaseRequests> {
    /**
     * Returns a request builder for retrieving one `PurchaseRequests` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseRequests.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseRequests` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<PurchaseRequests>;
    /**
     * Returns a request builder for querying all `PurchaseRequests` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseRequests` entities.
     */
    getAll(): GetAllRequestBuilderV4<PurchaseRequests>;
    /**
     * Returns a request builder for creating a `PurchaseRequests` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseRequests`.
     */
    create(entity: PurchaseRequests): CreateRequestBuilderV4<PurchaseRequests>;
    /**
     * Returns a request builder for updating an entity of type `PurchaseRequests`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseRequests`.
     */
    update(entity: PurchaseRequests): UpdateRequestBuilderV4<PurchaseRequests>;
    /**
     * Returns a request builder for deleting an entity of type `PurchaseRequests`.
     * @param docEntry Key property. See [[PurchaseRequests.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `PurchaseRequests`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<PurchaseRequests>;
    /**
     * Returns a request builder for deleting an entity of type `PurchaseRequests`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PurchaseRequests` by taking the entity as a parameter.
     */
    delete(entity: PurchaseRequests): DeleteRequestBuilderV4<PurchaseRequests>;
}
//# sourceMappingURL=PurchaseRequestsRequestBuilder.d.ts.map