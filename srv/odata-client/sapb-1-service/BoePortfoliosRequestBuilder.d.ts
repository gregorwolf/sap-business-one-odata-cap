import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BoePortfolios } from './BoePortfolios';
/**
 * Request builder class for operations supported on the [[BoePortfolios]] entity.
 */
export declare class BoePortfoliosRequestBuilder extends RequestBuilder<BoePortfolios> {
    /**
     * Returns a request builder for retrieving one `BoePortfolios` entity based on its keys.
     * @param portfolioEntry Key property. See [[BoePortfolios.portfolioEntry]].
     * @returns A request builder for creating requests to retrieve one `BoePortfolios` entity based on its keys.
     */
    getByKey(portfolioEntry: number): GetByKeyRequestBuilderV4<BoePortfolios>;
    /**
     * Returns a request builder for querying all `BoePortfolios` entities.
     * @returns A request builder for creating requests to retrieve all `BoePortfolios` entities.
     */
    getAll(): GetAllRequestBuilderV4<BoePortfolios>;
    /**
     * Returns a request builder for creating a `BoePortfolios` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BoePortfolios`.
     */
    create(entity: BoePortfolios): CreateRequestBuilderV4<BoePortfolios>;
    /**
     * Returns a request builder for updating an entity of type `BoePortfolios`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BoePortfolios`.
     */
    update(entity: BoePortfolios): UpdateRequestBuilderV4<BoePortfolios>;
    /**
     * Returns a request builder for deleting an entity of type `BoePortfolios`.
     * @param portfolioEntry Key property. See [[BoePortfolios.portfolioEntry]].
     * @returns A request builder for creating requests that delete an entity of type `BoePortfolios`.
     */
    delete(portfolioEntry: number): DeleteRequestBuilderV4<BoePortfolios>;
    /**
     * Returns a request builder for deleting an entity of type `BoePortfolios`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BoePortfolios` by taking the entity as a parameter.
     */
    delete(entity: BoePortfolios): DeleteRequestBuilderV4<BoePortfolios>;
}
//# sourceMappingURL=BoePortfoliosRequestBuilder.d.ts.map