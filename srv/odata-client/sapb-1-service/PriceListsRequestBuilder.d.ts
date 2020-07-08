import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PriceLists } from './PriceLists';
/**
 * Request builder class for operations supported on the [[PriceLists]] entity.
 */
export declare class PriceListsRequestBuilder extends RequestBuilder<PriceLists> {
    /**
     * Returns a request builder for retrieving one `PriceLists` entity based on its keys.
     * @param priceListNo Key property. See [[PriceLists.priceListNo]].
     * @returns A request builder for creating requests to retrieve one `PriceLists` entity based on its keys.
     */
    getByKey(priceListNo: number): GetByKeyRequestBuilder<PriceLists>;
    /**
     * Returns a request builder for querying all `PriceLists` entities.
     * @returns A request builder for creating requests to retrieve all `PriceLists` entities.
     */
    getAll(): GetAllRequestBuilder<PriceLists>;
    /**
     * Returns a request builder for creating a `PriceLists` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PriceLists`.
     */
    create(entity: PriceLists): CreateRequestBuilder<PriceLists>;
    /**
     * Returns a request builder for updating an entity of type `PriceLists`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PriceLists`.
     */
    update(entity: PriceLists): UpdateRequestBuilder<PriceLists>;
    /**
     * Returns a request builder for deleting an entity of type `PriceLists`.
     * @param priceListNo Key property. See [[PriceLists.priceListNo]].
     * @returns A request builder for creating requests that delete an entity of type `PriceLists`.
     */
    delete(priceListNo: number): DeleteRequestBuilder<PriceLists>;
    /**
     * Returns a request builder for deleting an entity of type `PriceLists`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PriceLists` by taking the entity as a parameter.
     */
    delete(entity: PriceLists): DeleteRequestBuilder<PriceLists>;
}
//# sourceMappingURL=PriceListsRequestBuilder.d.ts.map