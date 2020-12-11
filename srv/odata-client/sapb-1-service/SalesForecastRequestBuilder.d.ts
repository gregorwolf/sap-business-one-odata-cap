import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SalesForecast } from './SalesForecast';
/**
 * Request builder class for operations supported on the [[SalesForecast]] entity.
 */
export declare class SalesForecastRequestBuilder extends RequestBuilder<SalesForecast> {
    /**
     * Returns a request builder for retrieving one `SalesForecast` entity based on its keys.
     * @param numerator Key property. See [[SalesForecast.numerator]].
     * @returns A request builder for creating requests to retrieve one `SalesForecast` entity based on its keys.
     */
    getByKey(numerator: number): GetByKeyRequestBuilderV4<SalesForecast>;
    /**
     * Returns a request builder for querying all `SalesForecast` entities.
     * @returns A request builder for creating requests to retrieve all `SalesForecast` entities.
     */
    getAll(): GetAllRequestBuilderV4<SalesForecast>;
    /**
     * Returns a request builder for creating a `SalesForecast` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesForecast`.
     */
    create(entity: SalesForecast): CreateRequestBuilderV4<SalesForecast>;
    /**
     * Returns a request builder for updating an entity of type `SalesForecast`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesForecast`.
     */
    update(entity: SalesForecast): UpdateRequestBuilderV4<SalesForecast>;
    /**
     * Returns a request builder for deleting an entity of type `SalesForecast`.
     * @param numerator Key property. See [[SalesForecast.numerator]].
     * @returns A request builder for creating requests that delete an entity of type `SalesForecast`.
     */
    delete(numerator: number): DeleteRequestBuilderV4<SalesForecast>;
    /**
     * Returns a request builder for deleting an entity of type `SalesForecast`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SalesForecast` by taking the entity as a parameter.
     */
    delete(entity: SalesForecast): DeleteRequestBuilderV4<SalesForecast>;
}
//# sourceMappingURL=SalesForecastRequestBuilder.d.ts.map