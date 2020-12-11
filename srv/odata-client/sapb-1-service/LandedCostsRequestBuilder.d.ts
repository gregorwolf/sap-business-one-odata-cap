import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { LandedCosts } from './LandedCosts';
/**
 * Request builder class for operations supported on the [[LandedCosts]] entity.
 */
export declare class LandedCostsRequestBuilder extends RequestBuilder<LandedCosts> {
    /**
     * Returns a request builder for retrieving one `LandedCosts` entity based on its keys.
     * @param docEntry Key property. See [[LandedCosts.docEntry]].
     * @returns A request builder for creating requests to retrieve one `LandedCosts` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<LandedCosts>;
    /**
     * Returns a request builder for querying all `LandedCosts` entities.
     * @returns A request builder for creating requests to retrieve all `LandedCosts` entities.
     */
    getAll(): GetAllRequestBuilderV4<LandedCosts>;
    /**
     * Returns a request builder for creating a `LandedCosts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LandedCosts`.
     */
    create(entity: LandedCosts): CreateRequestBuilderV4<LandedCosts>;
    /**
     * Returns a request builder for updating an entity of type `LandedCosts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LandedCosts`.
     */
    update(entity: LandedCosts): UpdateRequestBuilderV4<LandedCosts>;
    /**
     * Returns a request builder for deleting an entity of type `LandedCosts`.
     * @param docEntry Key property. See [[LandedCosts.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `LandedCosts`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<LandedCosts>;
    /**
     * Returns a request builder for deleting an entity of type `LandedCosts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `LandedCosts` by taking the entity as a parameter.
     */
    delete(entity: LandedCosts): DeleteRequestBuilderV4<LandedCosts>;
}
//# sourceMappingURL=LandedCostsRequestBuilder.d.ts.map