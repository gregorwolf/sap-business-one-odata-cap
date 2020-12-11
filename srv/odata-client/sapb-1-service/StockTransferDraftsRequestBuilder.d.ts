import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { StockTransferDrafts } from './StockTransferDrafts';
/**
 * Request builder class for operations supported on the [[StockTransferDrafts]] entity.
 */
export declare class StockTransferDraftsRequestBuilder extends RequestBuilder<StockTransferDrafts> {
    /**
     * Returns a request builder for retrieving one `StockTransferDrafts` entity based on its keys.
     * @param docEntry Key property. See [[StockTransferDrafts.docEntry]].
     * @returns A request builder for creating requests to retrieve one `StockTransferDrafts` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<StockTransferDrafts>;
    /**
     * Returns a request builder for querying all `StockTransferDrafts` entities.
     * @returns A request builder for creating requests to retrieve all `StockTransferDrafts` entities.
     */
    getAll(): GetAllRequestBuilderV4<StockTransferDrafts>;
    /**
     * Returns a request builder for creating a `StockTransferDrafts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `StockTransferDrafts`.
     */
    create(entity: StockTransferDrafts): CreateRequestBuilderV4<StockTransferDrafts>;
    /**
     * Returns a request builder for updating an entity of type `StockTransferDrafts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `StockTransferDrafts`.
     */
    update(entity: StockTransferDrafts): UpdateRequestBuilderV4<StockTransferDrafts>;
    /**
     * Returns a request builder for deleting an entity of type `StockTransferDrafts`.
     * @param docEntry Key property. See [[StockTransferDrafts.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `StockTransferDrafts`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<StockTransferDrafts>;
    /**
     * Returns a request builder for deleting an entity of type `StockTransferDrafts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `StockTransferDrafts` by taking the entity as a parameter.
     */
    delete(entity: StockTransferDrafts): DeleteRequestBuilderV4<StockTransferDrafts>;
}
//# sourceMappingURL=StockTransferDraftsRequestBuilder.d.ts.map