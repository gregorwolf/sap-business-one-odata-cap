import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ServiceCallOrigins } from './ServiceCallOrigins';
/**
 * Request builder class for operations supported on the [[ServiceCallOrigins]] entity.
 */
export declare class ServiceCallOriginsRequestBuilder extends RequestBuilder<ServiceCallOrigins> {
    /**
     * Returns a request builder for retrieving one `ServiceCallOrigins` entity based on its keys.
     * @param originId Key property. See [[ServiceCallOrigins.originId]].
     * @returns A request builder for creating requests to retrieve one `ServiceCallOrigins` entity based on its keys.
     */
    getByKey(originId: number): GetByKeyRequestBuilder<ServiceCallOrigins>;
    /**
     * Returns a request builder for querying all `ServiceCallOrigins` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceCallOrigins` entities.
     */
    getAll(): GetAllRequestBuilder<ServiceCallOrigins>;
    /**
     * Returns a request builder for creating a `ServiceCallOrigins` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceCallOrigins`.
     */
    create(entity: ServiceCallOrigins): CreateRequestBuilder<ServiceCallOrigins>;
    /**
     * Returns a request builder for updating an entity of type `ServiceCallOrigins`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceCallOrigins`.
     */
    update(entity: ServiceCallOrigins): UpdateRequestBuilder<ServiceCallOrigins>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceCallOrigins`.
     * @param originId Key property. See [[ServiceCallOrigins.originId]].
     * @returns A request builder for creating requests that delete an entity of type `ServiceCallOrigins`.
     */
    delete(originId: number): DeleteRequestBuilder<ServiceCallOrigins>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceCallOrigins`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ServiceCallOrigins` by taking the entity as a parameter.
     */
    delete(entity: ServiceCallOrigins): DeleteRequestBuilder<ServiceCallOrigins>;
}
//# sourceMappingURL=ServiceCallOriginsRequestBuilder.d.ts.map