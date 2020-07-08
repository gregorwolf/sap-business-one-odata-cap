import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { SalesOpportunitySourcesSetup } from './SalesOpportunitySourcesSetup';
/**
 * Request builder class for operations supported on the [[SalesOpportunitySourcesSetup]] entity.
 */
export declare class SalesOpportunitySourcesSetupRequestBuilder extends RequestBuilder<SalesOpportunitySourcesSetup> {
    /**
     * Returns a request builder for retrieving one `SalesOpportunitySourcesSetup` entity based on its keys.
     * @param sequenceNo Key property. See [[SalesOpportunitySourcesSetup.sequenceNo]].
     * @returns A request builder for creating requests to retrieve one `SalesOpportunitySourcesSetup` entity based on its keys.
     */
    getByKey(sequenceNo: number): GetByKeyRequestBuilder<SalesOpportunitySourcesSetup>;
    /**
     * Returns a request builder for querying all `SalesOpportunitySourcesSetup` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOpportunitySourcesSetup` entities.
     */
    getAll(): GetAllRequestBuilder<SalesOpportunitySourcesSetup>;
    /**
     * Returns a request builder for creating a `SalesOpportunitySourcesSetup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOpportunitySourcesSetup`.
     */
    create(entity: SalesOpportunitySourcesSetup): CreateRequestBuilder<SalesOpportunitySourcesSetup>;
    /**
     * Returns a request builder for updating an entity of type `SalesOpportunitySourcesSetup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOpportunitySourcesSetup`.
     */
    update(entity: SalesOpportunitySourcesSetup): UpdateRequestBuilder<SalesOpportunitySourcesSetup>;
    /**
     * Returns a request builder for deleting an entity of type `SalesOpportunitySourcesSetup`.
     * @param sequenceNo Key property. See [[SalesOpportunitySourcesSetup.sequenceNo]].
     * @returns A request builder for creating requests that delete an entity of type `SalesOpportunitySourcesSetup`.
     */
    delete(sequenceNo: number): DeleteRequestBuilder<SalesOpportunitySourcesSetup>;
    /**
     * Returns a request builder for deleting an entity of type `SalesOpportunitySourcesSetup`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SalesOpportunitySourcesSetup` by taking the entity as a parameter.
     */
    delete(entity: SalesOpportunitySourcesSetup): DeleteRequestBuilder<SalesOpportunitySourcesSetup>;
}
//# sourceMappingURL=SalesOpportunitySourcesSetupRequestBuilder.d.ts.map