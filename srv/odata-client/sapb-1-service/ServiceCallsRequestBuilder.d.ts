import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ServiceCalls } from './ServiceCalls';
/**
 * Request builder class for operations supported on the [[ServiceCalls]] entity.
 */
export declare class ServiceCallsRequestBuilder extends RequestBuilder<ServiceCalls> {
    /**
     * Returns a request builder for retrieving one `ServiceCalls` entity based on its keys.
     * @param serviceCallId Key property. See [[ServiceCalls.serviceCallId]].
     * @returns A request builder for creating requests to retrieve one `ServiceCalls` entity based on its keys.
     */
    getByKey(serviceCallId: number): GetByKeyRequestBuilder<ServiceCalls>;
    /**
     * Returns a request builder for querying all `ServiceCalls` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceCalls` entities.
     */
    getAll(): GetAllRequestBuilder<ServiceCalls>;
    /**
     * Returns a request builder for creating a `ServiceCalls` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceCalls`.
     */
    create(entity: ServiceCalls): CreateRequestBuilder<ServiceCalls>;
    /**
     * Returns a request builder for updating an entity of type `ServiceCalls`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceCalls`.
     */
    update(entity: ServiceCalls): UpdateRequestBuilder<ServiceCalls>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceCalls`.
     * @param serviceCallId Key property. See [[ServiceCalls.serviceCallId]].
     * @returns A request builder for creating requests that delete an entity of type `ServiceCalls`.
     */
    delete(serviceCallId: number): DeleteRequestBuilder<ServiceCalls>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceCalls`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ServiceCalls` by taking the entity as a parameter.
     */
    delete(entity: ServiceCalls): DeleteRequestBuilder<ServiceCalls>;
}
//# sourceMappingURL=ServiceCallsRequestBuilder.d.ts.map