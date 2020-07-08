import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BusinessPartners } from './BusinessPartners';
/**
 * Request builder class for operations supported on the [[BusinessPartners]] entity.
 */
export declare class BusinessPartnersRequestBuilder extends RequestBuilder<BusinessPartners> {
    /**
     * Returns a request builder for retrieving one `BusinessPartners` entity based on its keys.
     * @param cardCode Key property. See [[BusinessPartners.cardCode]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartners` entity based on its keys.
     */
    getByKey(cardCode: string): GetByKeyRequestBuilder<BusinessPartners>;
    /**
     * Returns a request builder for querying all `BusinessPartners` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartners` entities.
     */
    getAll(): GetAllRequestBuilder<BusinessPartners>;
    /**
     * Returns a request builder for creating a `BusinessPartners` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartners`.
     */
    create(entity: BusinessPartners): CreateRequestBuilder<BusinessPartners>;
    /**
     * Returns a request builder for updating an entity of type `BusinessPartners`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartners`.
     */
    update(entity: BusinessPartners): UpdateRequestBuilder<BusinessPartners>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartners`.
     * @param cardCode Key property. See [[BusinessPartners.cardCode]].
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartners`.
     */
    delete(cardCode: string): DeleteRequestBuilder<BusinessPartners>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartners`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartners` by taking the entity as a parameter.
     */
    delete(entity: BusinessPartners): DeleteRequestBuilder<BusinessPartners>;
}
//# sourceMappingURL=BusinessPartnersRequestBuilder.d.ts.map