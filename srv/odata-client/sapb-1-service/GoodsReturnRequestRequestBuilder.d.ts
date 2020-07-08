import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { GoodsReturnRequest } from './GoodsReturnRequest';
/**
 * Request builder class for operations supported on the [[GoodsReturnRequest]] entity.
 */
export declare class GoodsReturnRequestRequestBuilder extends RequestBuilder<GoodsReturnRequest> {
    /**
     * Returns a request builder for retrieving one `GoodsReturnRequest` entity based on its keys.
     * @param docEntry Key property. See [[GoodsReturnRequest.docEntry]].
     * @returns A request builder for creating requests to retrieve one `GoodsReturnRequest` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<GoodsReturnRequest>;
    /**
     * Returns a request builder for querying all `GoodsReturnRequest` entities.
     * @returns A request builder for creating requests to retrieve all `GoodsReturnRequest` entities.
     */
    getAll(): GetAllRequestBuilder<GoodsReturnRequest>;
    /**
     * Returns a request builder for creating a `GoodsReturnRequest` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `GoodsReturnRequest`.
     */
    create(entity: GoodsReturnRequest): CreateRequestBuilder<GoodsReturnRequest>;
    /**
     * Returns a request builder for updating an entity of type `GoodsReturnRequest`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `GoodsReturnRequest`.
     */
    update(entity: GoodsReturnRequest): UpdateRequestBuilder<GoodsReturnRequest>;
    /**
     * Returns a request builder for deleting an entity of type `GoodsReturnRequest`.
     * @param docEntry Key property. See [[GoodsReturnRequest.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `GoodsReturnRequest`.
     */
    delete(docEntry: number): DeleteRequestBuilder<GoodsReturnRequest>;
    /**
     * Returns a request builder for deleting an entity of type `GoodsReturnRequest`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `GoodsReturnRequest` by taking the entity as a parameter.
     */
    delete(entity: GoodsReturnRequest): DeleteRequestBuilder<GoodsReturnRequest>;
}
//# sourceMappingURL=GoodsReturnRequestRequestBuilder.d.ts.map