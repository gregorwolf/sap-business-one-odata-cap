import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SalesOpportunities } from './SalesOpportunities';
/**
 * Request builder class for operations supported on the [[SalesOpportunities]] entity.
 */
export declare class SalesOpportunitiesRequestBuilder extends RequestBuilder<SalesOpportunities> {
    /**
     * Returns a request builder for retrieving one `SalesOpportunities` entity based on its keys.
     * @param sequentialNo Key property. See [[SalesOpportunities.sequentialNo]].
     * @returns A request builder for creating requests to retrieve one `SalesOpportunities` entity based on its keys.
     */
    getByKey(sequentialNo: number): GetByKeyRequestBuilderV4<SalesOpportunities>;
    /**
     * Returns a request builder for querying all `SalesOpportunities` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOpportunities` entities.
     */
    getAll(): GetAllRequestBuilderV4<SalesOpportunities>;
    /**
     * Returns a request builder for creating a `SalesOpportunities` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOpportunities`.
     */
    create(entity: SalesOpportunities): CreateRequestBuilderV4<SalesOpportunities>;
    /**
     * Returns a request builder for updating an entity of type `SalesOpportunities`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOpportunities`.
     */
    update(entity: SalesOpportunities): UpdateRequestBuilderV4<SalesOpportunities>;
    /**
     * Returns a request builder for deleting an entity of type `SalesOpportunities`.
     * @param sequentialNo Key property. See [[SalesOpportunities.sequentialNo]].
     * @returns A request builder for creating requests that delete an entity of type `SalesOpportunities`.
     */
    delete(sequentialNo: number): DeleteRequestBuilderV4<SalesOpportunities>;
    /**
     * Returns a request builder for deleting an entity of type `SalesOpportunities`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SalesOpportunities` by taking the entity as a parameter.
     */
    delete(entity: SalesOpportunities): DeleteRequestBuilderV4<SalesOpportunities>;
}
//# sourceMappingURL=SalesOpportunitiesRequestBuilder.d.ts.map