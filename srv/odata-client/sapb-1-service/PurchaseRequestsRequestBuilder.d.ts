import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
    getByKey(docEntry: number): GetByKeyRequestBuilder<PurchaseRequests>;
    /**
     * Returns a request builder for querying all `PurchaseRequests` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseRequests` entities.
     */
    getAll(): GetAllRequestBuilder<PurchaseRequests>;
    /**
     * Returns a request builder for creating a `PurchaseRequests` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseRequests`.
     */
    create(entity: PurchaseRequests): CreateRequestBuilder<PurchaseRequests>;
    /**
     * Returns a request builder for updating an entity of type `PurchaseRequests`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseRequests`.
     */
    update(entity: PurchaseRequests): UpdateRequestBuilder<PurchaseRequests>;
    /**
     * Returns a request builder for deleting an entity of type `PurchaseRequests`.
     * @param docEntry Key property. See [[PurchaseRequests.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `PurchaseRequests`.
     */
    delete(docEntry: number): DeleteRequestBuilder<PurchaseRequests>;
    /**
     * Returns a request builder for deleting an entity of type `PurchaseRequests`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PurchaseRequests` by taking the entity as a parameter.
     */
    delete(entity: PurchaseRequests): DeleteRequestBuilder<PurchaseRequests>;
}
//# sourceMappingURL=PurchaseRequestsRequestBuilder.d.ts.map