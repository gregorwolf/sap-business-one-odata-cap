import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { StockTakings } from './StockTakings';
/**
 * Request builder class for operations supported on the [[StockTakings]] entity.
 */
export declare class StockTakingsRequestBuilder extends RequestBuilder<StockTakings> {
    /**
     * Returns a request builder for retrieving one `StockTakings` entity based on its keys.
     * @param itemCode Key property. See [[StockTakings.itemCode]].
     * @param warehouseCode Key property. See [[StockTakings.warehouseCode]].
     * @returns A request builder for creating requests to retrieve one `StockTakings` entity based on its keys.
     */
    getByKey(itemCode: string, warehouseCode: string): GetByKeyRequestBuilder<StockTakings>;
    /**
     * Returns a request builder for querying all `StockTakings` entities.
     * @returns A request builder for creating requests to retrieve all `StockTakings` entities.
     */
    getAll(): GetAllRequestBuilder<StockTakings>;
    /**
     * Returns a request builder for creating a `StockTakings` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `StockTakings`.
     */
    create(entity: StockTakings): CreateRequestBuilder<StockTakings>;
    /**
     * Returns a request builder for updating an entity of type `StockTakings`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `StockTakings`.
     */
    update(entity: StockTakings): UpdateRequestBuilder<StockTakings>;
    /**
     * Returns a request builder for deleting an entity of type `StockTakings`.
     * @param itemCode Key property. See [[StockTakings.itemCode]].
     * @param warehouseCode Key property. See [[StockTakings.warehouseCode]].
     * @returns A request builder for creating requests that delete an entity of type `StockTakings`.
     */
    delete(itemCode: string, warehouseCode: string): DeleteRequestBuilder<StockTakings>;
    /**
     * Returns a request builder for deleting an entity of type `StockTakings`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `StockTakings` by taking the entity as a parameter.
     */
    delete(entity: StockTakings): DeleteRequestBuilder<StockTakings>;
}
//# sourceMappingURL=StockTakingsRequestBuilder.d.ts.map