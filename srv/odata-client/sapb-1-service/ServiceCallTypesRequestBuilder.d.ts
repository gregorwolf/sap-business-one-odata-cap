import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ServiceCallTypes } from './ServiceCallTypes';
/**
 * Request builder class for operations supported on the [[ServiceCallTypes]] entity.
 */
export declare class ServiceCallTypesRequestBuilder extends RequestBuilder<ServiceCallTypes> {
    /**
     * Returns a request builder for retrieving one `ServiceCallTypes` entity based on its keys.
     * @param callTypeId Key property. See [[ServiceCallTypes.callTypeId]].
     * @returns A request builder for creating requests to retrieve one `ServiceCallTypes` entity based on its keys.
     */
    getByKey(callTypeId: number): GetByKeyRequestBuilder<ServiceCallTypes>;
    /**
     * Returns a request builder for querying all `ServiceCallTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceCallTypes` entities.
     */
    getAll(): GetAllRequestBuilder<ServiceCallTypes>;
    /**
     * Returns a request builder for creating a `ServiceCallTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceCallTypes`.
     */
    create(entity: ServiceCallTypes): CreateRequestBuilder<ServiceCallTypes>;
    /**
     * Returns a request builder for updating an entity of type `ServiceCallTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceCallTypes`.
     */
    update(entity: ServiceCallTypes): UpdateRequestBuilder<ServiceCallTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceCallTypes`.
     * @param callTypeId Key property. See [[ServiceCallTypes.callTypeId]].
     * @returns A request builder for creating requests that delete an entity of type `ServiceCallTypes`.
     */
    delete(callTypeId: number): DeleteRequestBuilder<ServiceCallTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceCallTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ServiceCallTypes` by taking the entity as a parameter.
     */
    delete(entity: ServiceCallTypes): DeleteRequestBuilder<ServiceCallTypes>;
}
//# sourceMappingURL=ServiceCallTypesRequestBuilder.d.ts.map