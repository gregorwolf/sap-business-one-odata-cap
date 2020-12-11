import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SalesOpportunityInterestsSetup } from './SalesOpportunityInterestsSetup';
/**
 * Request builder class for operations supported on the [[SalesOpportunityInterestsSetup]] entity.
 */
export declare class SalesOpportunityInterestsSetupRequestBuilder extends RequestBuilder<SalesOpportunityInterestsSetup> {
    /**
     * Returns a request builder for retrieving one `SalesOpportunityInterestsSetup` entity based on its keys.
     * @param sequenceNo Key property. See [[SalesOpportunityInterestsSetup.sequenceNo]].
     * @returns A request builder for creating requests to retrieve one `SalesOpportunityInterestsSetup` entity based on its keys.
     */
    getByKey(sequenceNo: number): GetByKeyRequestBuilderV4<SalesOpportunityInterestsSetup>;
    /**
     * Returns a request builder for querying all `SalesOpportunityInterestsSetup` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOpportunityInterestsSetup` entities.
     */
    getAll(): GetAllRequestBuilderV4<SalesOpportunityInterestsSetup>;
    /**
     * Returns a request builder for creating a `SalesOpportunityInterestsSetup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOpportunityInterestsSetup`.
     */
    create(entity: SalesOpportunityInterestsSetup): CreateRequestBuilderV4<SalesOpportunityInterestsSetup>;
    /**
     * Returns a request builder for updating an entity of type `SalesOpportunityInterestsSetup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOpportunityInterestsSetup`.
     */
    update(entity: SalesOpportunityInterestsSetup): UpdateRequestBuilderV4<SalesOpportunityInterestsSetup>;
    /**
     * Returns a request builder for deleting an entity of type `SalesOpportunityInterestsSetup`.
     * @param sequenceNo Key property. See [[SalesOpportunityInterestsSetup.sequenceNo]].
     * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityInterestsSetup`.
     */
    delete(sequenceNo: number): DeleteRequestBuilderV4<SalesOpportunityInterestsSetup>;
    /**
     * Returns a request builder for deleting an entity of type `SalesOpportunityInterestsSetup`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SalesOpportunityInterestsSetup` by taking the entity as a parameter.
     */
    delete(entity: SalesOpportunityInterestsSetup): DeleteRequestBuilderV4<SalesOpportunityInterestsSetup>;
}
//# sourceMappingURL=SalesOpportunityInterestsSetupRequestBuilder.d.ts.map