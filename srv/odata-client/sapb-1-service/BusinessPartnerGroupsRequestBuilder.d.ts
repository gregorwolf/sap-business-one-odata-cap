import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BusinessPartnerGroups } from './BusinessPartnerGroups';
/**
 * Request builder class for operations supported on the [[BusinessPartnerGroups]] entity.
 */
export declare class BusinessPartnerGroupsRequestBuilder extends RequestBuilder<BusinessPartnerGroups> {
    /**
     * Returns a request builder for retrieving one `BusinessPartnerGroups` entity based on its keys.
     * @param code Key property. See [[BusinessPartnerGroups.code]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerGroups` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilder<BusinessPartnerGroups>;
    /**
     * Returns a request builder for querying all `BusinessPartnerGroups` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerGroups` entities.
     */
    getAll(): GetAllRequestBuilder<BusinessPartnerGroups>;
    /**
     * Returns a request builder for creating a `BusinessPartnerGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerGroups`.
     */
    create(entity: BusinessPartnerGroups): CreateRequestBuilder<BusinessPartnerGroups>;
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerGroups`.
     */
    update(entity: BusinessPartnerGroups): UpdateRequestBuilder<BusinessPartnerGroups>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerGroups`.
     * @param code Key property. See [[BusinessPartnerGroups.code]].
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerGroups`.
     */
    delete(code: number): DeleteRequestBuilder<BusinessPartnerGroups>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerGroups` by taking the entity as a parameter.
     */
    delete(entity: BusinessPartnerGroups): DeleteRequestBuilder<BusinessPartnerGroups>;
}
//# sourceMappingURL=BusinessPartnerGroupsRequestBuilder.d.ts.map