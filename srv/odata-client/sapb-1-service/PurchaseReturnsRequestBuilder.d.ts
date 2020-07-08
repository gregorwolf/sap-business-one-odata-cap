import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PurchaseReturns } from './PurchaseReturns';
/**
 * Request builder class for operations supported on the [[PurchaseReturns]] entity.
 */
export declare class PurchaseReturnsRequestBuilder extends RequestBuilder<PurchaseReturns> {
    /**
     * Returns a request builder for retrieving one `PurchaseReturns` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseReturns.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseReturns` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<PurchaseReturns>;
    /**
     * Returns a request builder for querying all `PurchaseReturns` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseReturns` entities.
     */
    getAll(): GetAllRequestBuilder<PurchaseReturns>;
    /**
     * Returns a request builder for creating a `PurchaseReturns` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseReturns`.
     */
    create(entity: PurchaseReturns): CreateRequestBuilder<PurchaseReturns>;
    /**
     * Returns a request builder for updating an entity of type `PurchaseReturns`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseReturns`.
     */
    update(entity: PurchaseReturns): UpdateRequestBuilder<PurchaseReturns>;
    /**
     * Returns a request builder for deleting an entity of type `PurchaseReturns`.
     * @param docEntry Key property. See [[PurchaseReturns.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `PurchaseReturns`.
     */
    delete(docEntry: number): DeleteRequestBuilder<PurchaseReturns>;
    /**
     * Returns a request builder for deleting an entity of type `PurchaseReturns`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PurchaseReturns` by taking the entity as a parameter.
     */
    delete(entity: PurchaseReturns): DeleteRequestBuilder<PurchaseReturns>;
}
//# sourceMappingURL=PurchaseReturnsRequestBuilder.d.ts.map