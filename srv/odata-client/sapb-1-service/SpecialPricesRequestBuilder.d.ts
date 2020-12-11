import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SpecialPrices } from './SpecialPrices';
/**
 * Request builder class for operations supported on the [[SpecialPrices]] entity.
 */
export declare class SpecialPricesRequestBuilder extends RequestBuilder<SpecialPrices> {
    /**
     * Returns a request builder for retrieving one `SpecialPrices` entity based on its keys.
     * @param itemCode Key property. See [[SpecialPrices.itemCode]].
     * @param cardCode Key property. See [[SpecialPrices.cardCode]].
     * @returns A request builder for creating requests to retrieve one `SpecialPrices` entity based on its keys.
     */
    getByKey(itemCode: string, cardCode: string): GetByKeyRequestBuilderV4<SpecialPrices>;
    /**
     * Returns a request builder for querying all `SpecialPrices` entities.
     * @returns A request builder for creating requests to retrieve all `SpecialPrices` entities.
     */
    getAll(): GetAllRequestBuilderV4<SpecialPrices>;
    /**
     * Returns a request builder for creating a `SpecialPrices` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpecialPrices`.
     */
    create(entity: SpecialPrices): CreateRequestBuilderV4<SpecialPrices>;
    /**
     * Returns a request builder for updating an entity of type `SpecialPrices`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpecialPrices`.
     */
    update(entity: SpecialPrices): UpdateRequestBuilderV4<SpecialPrices>;
    /**
     * Returns a request builder for deleting an entity of type `SpecialPrices`.
     * @param itemCode Key property. See [[SpecialPrices.itemCode]].
     * @param cardCode Key property. See [[SpecialPrices.cardCode]].
     * @returns A request builder for creating requests that delete an entity of type `SpecialPrices`.
     */
    delete(itemCode: string, cardCode: string): DeleteRequestBuilderV4<SpecialPrices>;
    /**
     * Returns a request builder for deleting an entity of type `SpecialPrices`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SpecialPrices` by taking the entity as a parameter.
     */
    delete(entity: SpecialPrices): DeleteRequestBuilderV4<SpecialPrices>;
}
//# sourceMappingURL=SpecialPricesRequestBuilder.d.ts.map