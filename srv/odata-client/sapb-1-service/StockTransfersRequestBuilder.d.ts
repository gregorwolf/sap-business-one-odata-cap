import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { StockTransfers } from './StockTransfers';
/**
 * Request builder class for operations supported on the [[StockTransfers]] entity.
 */
export declare class StockTransfersRequestBuilder extends RequestBuilder<StockTransfers> {
    /**
     * Returns a request builder for retrieving one `StockTransfers` entity based on its keys.
     * @param docEntry Key property. See [[StockTransfers.docEntry]].
     * @returns A request builder for creating requests to retrieve one `StockTransfers` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<StockTransfers>;
    /**
     * Returns a request builder for querying all `StockTransfers` entities.
     * @returns A request builder for creating requests to retrieve all `StockTransfers` entities.
     */
    getAll(): GetAllRequestBuilder<StockTransfers>;
    /**
     * Returns a request builder for creating a `StockTransfers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `StockTransfers`.
     */
    create(entity: StockTransfers): CreateRequestBuilder<StockTransfers>;
    /**
     * Returns a request builder for updating an entity of type `StockTransfers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `StockTransfers`.
     */
    update(entity: StockTransfers): UpdateRequestBuilder<StockTransfers>;
    /**
     * Returns a request builder for deleting an entity of type `StockTransfers`.
     * @param docEntry Key property. See [[StockTransfers.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `StockTransfers`.
     */
    delete(docEntry: number): DeleteRequestBuilder<StockTransfers>;
    /**
     * Returns a request builder for deleting an entity of type `StockTransfers`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `StockTransfers` by taking the entity as a parameter.
     */
    delete(entity: StockTransfers): DeleteRequestBuilder<StockTransfers>;
}
//# sourceMappingURL=StockTransfersRequestBuilder.d.ts.map