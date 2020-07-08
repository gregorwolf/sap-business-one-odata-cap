import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BusinessPartnerProperties } from './BusinessPartnerProperties';
/**
 * Request builder class for operations supported on the [[BusinessPartnerProperties]] entity.
 */
export declare class BusinessPartnerPropertiesRequestBuilder extends RequestBuilder<BusinessPartnerProperties> {
    /**
     * Returns a request builder for retrieving one `BusinessPartnerProperties` entity based on its keys.
     * @param propertyCode Key property. See [[BusinessPartnerProperties.propertyCode]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerProperties` entity based on its keys.
     */
    getByKey(propertyCode: number): GetByKeyRequestBuilder<BusinessPartnerProperties>;
    /**
     * Returns a request builder for querying all `BusinessPartnerProperties` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerProperties` entities.
     */
    getAll(): GetAllRequestBuilder<BusinessPartnerProperties>;
    /**
     * Returns a request builder for creating a `BusinessPartnerProperties` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerProperties`.
     */
    create(entity: BusinessPartnerProperties): CreateRequestBuilder<BusinessPartnerProperties>;
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerProperties`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerProperties`.
     */
    update(entity: BusinessPartnerProperties): UpdateRequestBuilder<BusinessPartnerProperties>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerProperties`.
     * @param propertyCode Key property. See [[BusinessPartnerProperties.propertyCode]].
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerProperties`.
     */
    delete(propertyCode: number): DeleteRequestBuilder<BusinessPartnerProperties>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerProperties`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerProperties` by taking the entity as a parameter.
     */
    delete(entity: BusinessPartnerProperties): DeleteRequestBuilder<BusinessPartnerProperties>;
}
//# sourceMappingURL=BusinessPartnerPropertiesRequestBuilder.d.ts.map