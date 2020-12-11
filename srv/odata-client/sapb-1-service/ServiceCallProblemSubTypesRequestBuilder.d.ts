import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ServiceCallProblemSubTypes } from './ServiceCallProblemSubTypes';
/**
 * Request builder class for operations supported on the [[ServiceCallProblemSubTypes]] entity.
 */
export declare class ServiceCallProblemSubTypesRequestBuilder extends RequestBuilder<ServiceCallProblemSubTypes> {
    /**
     * Returns a request builder for retrieving one `ServiceCallProblemSubTypes` entity based on its keys.
     * @param problemSubTypeId Key property. See [[ServiceCallProblemSubTypes.problemSubTypeId]].
     * @returns A request builder for creating requests to retrieve one `ServiceCallProblemSubTypes` entity based on its keys.
     */
    getByKey(problemSubTypeId: number): GetByKeyRequestBuilderV4<ServiceCallProblemSubTypes>;
    /**
     * Returns a request builder for querying all `ServiceCallProblemSubTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceCallProblemSubTypes` entities.
     */
    getAll(): GetAllRequestBuilderV4<ServiceCallProblemSubTypes>;
    /**
     * Returns a request builder for creating a `ServiceCallProblemSubTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceCallProblemSubTypes`.
     */
    create(entity: ServiceCallProblemSubTypes): CreateRequestBuilderV4<ServiceCallProblemSubTypes>;
    /**
     * Returns a request builder for updating an entity of type `ServiceCallProblemSubTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceCallProblemSubTypes`.
     */
    update(entity: ServiceCallProblemSubTypes): UpdateRequestBuilderV4<ServiceCallProblemSubTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceCallProblemSubTypes`.
     * @param problemSubTypeId Key property. See [[ServiceCallProblemSubTypes.problemSubTypeId]].
     * @returns A request builder for creating requests that delete an entity of type `ServiceCallProblemSubTypes`.
     */
    delete(problemSubTypeId: number): DeleteRequestBuilderV4<ServiceCallProblemSubTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceCallProblemSubTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ServiceCallProblemSubTypes` by taking the entity as a parameter.
     */
    delete(entity: ServiceCallProblemSubTypes): DeleteRequestBuilderV4<ServiceCallProblemSubTypes>;
}
//# sourceMappingURL=ServiceCallProblemSubTypesRequestBuilder.d.ts.map