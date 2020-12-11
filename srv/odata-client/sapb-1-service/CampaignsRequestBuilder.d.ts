import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Campaigns } from './Campaigns';
/**
 * Request builder class for operations supported on the [[Campaigns]] entity.
 */
export declare class CampaignsRequestBuilder extends RequestBuilder<Campaigns> {
    /**
     * Returns a request builder for retrieving one `Campaigns` entity based on its keys.
     * @param campaignNumber Key property. See [[Campaigns.campaignNumber]].
     * @returns A request builder for creating requests to retrieve one `Campaigns` entity based on its keys.
     */
    getByKey(campaignNumber: number): GetByKeyRequestBuilderV4<Campaigns>;
    /**
     * Returns a request builder for querying all `Campaigns` entities.
     * @returns A request builder for creating requests to retrieve all `Campaigns` entities.
     */
    getAll(): GetAllRequestBuilderV4<Campaigns>;
    /**
     * Returns a request builder for creating a `Campaigns` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Campaigns`.
     */
    create(entity: Campaigns): CreateRequestBuilderV4<Campaigns>;
    /**
     * Returns a request builder for updating an entity of type `Campaigns`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Campaigns`.
     */
    update(entity: Campaigns): UpdateRequestBuilderV4<Campaigns>;
    /**
     * Returns a request builder for deleting an entity of type `Campaigns`.
     * @param campaignNumber Key property. See [[Campaigns.campaignNumber]].
     * @returns A request builder for creating requests that delete an entity of type `Campaigns`.
     */
    delete(campaignNumber: number): DeleteRequestBuilderV4<Campaigns>;
    /**
     * Returns a request builder for deleting an entity of type `Campaigns`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Campaigns` by taking the entity as a parameter.
     */
    delete(entity: Campaigns): DeleteRequestBuilderV4<Campaigns>;
}
//# sourceMappingURL=CampaignsRequestBuilder.d.ts.map