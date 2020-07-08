import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ServiceCallStatus } from './ServiceCallStatus';
/**
 * Request builder class for operations supported on the [[ServiceCallStatus]] entity.
 */
export declare class ServiceCallStatusRequestBuilder extends RequestBuilder<ServiceCallStatus> {
    /**
     * Returns a request builder for retrieving one `ServiceCallStatus` entity based on its keys.
     * @param statusId Key property. See [[ServiceCallStatus.statusId]].
     * @returns A request builder for creating requests to retrieve one `ServiceCallStatus` entity based on its keys.
     */
    getByKey(statusId: number): GetByKeyRequestBuilder<ServiceCallStatus>;
    /**
     * Returns a request builder for querying all `ServiceCallStatus` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceCallStatus` entities.
     */
    getAll(): GetAllRequestBuilder<ServiceCallStatus>;
    /**
     * Returns a request builder for creating a `ServiceCallStatus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceCallStatus`.
     */
    create(entity: ServiceCallStatus): CreateRequestBuilder<ServiceCallStatus>;
    /**
     * Returns a request builder for updating an entity of type `ServiceCallStatus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceCallStatus`.
     */
    update(entity: ServiceCallStatus): UpdateRequestBuilder<ServiceCallStatus>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceCallStatus`.
     * @param statusId Key property. See [[ServiceCallStatus.statusId]].
     * @returns A request builder for creating requests that delete an entity of type `ServiceCallStatus`.
     */
    delete(statusId: number): DeleteRequestBuilder<ServiceCallStatus>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceCallStatus`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ServiceCallStatus` by taking the entity as a parameter.
     */
    delete(entity: ServiceCallStatus): DeleteRequestBuilder<ServiceCallStatus>;
}
//# sourceMappingURL=ServiceCallStatusRequestBuilder.d.ts.map