import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { EmployeeStatus } from './EmployeeStatus';
/**
 * Request builder class for operations supported on the [[EmployeeStatus]] entity.
 */
export declare class EmployeeStatusRequestBuilder extends RequestBuilder<EmployeeStatus> {
    /**
     * Returns a request builder for retrieving one `EmployeeStatus` entity based on its keys.
     * @param statusId Key property. See [[EmployeeStatus.statusId]].
     * @returns A request builder for creating requests to retrieve one `EmployeeStatus` entity based on its keys.
     */
    getByKey(statusId: number): GetByKeyRequestBuilder<EmployeeStatus>;
    /**
     * Returns a request builder for querying all `EmployeeStatus` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeStatus` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeStatus>;
    /**
     * Returns a request builder for creating a `EmployeeStatus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeStatus`.
     */
    create(entity: EmployeeStatus): CreateRequestBuilder<EmployeeStatus>;
    /**
     * Returns a request builder for updating an entity of type `EmployeeStatus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeStatus`.
     */
    update(entity: EmployeeStatus): UpdateRequestBuilder<EmployeeStatus>;
    /**
     * Returns a request builder for deleting an entity of type `EmployeeStatus`.
     * @param statusId Key property. See [[EmployeeStatus.statusId]].
     * @returns A request builder for creating requests that delete an entity of type `EmployeeStatus`.
     */
    delete(statusId: number): DeleteRequestBuilder<EmployeeStatus>;
    /**
     * Returns a request builder for deleting an entity of type `EmployeeStatus`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `EmployeeStatus` by taking the entity as a parameter.
     */
    delete(entity: EmployeeStatus): DeleteRequestBuilder<EmployeeStatus>;
}
//# sourceMappingURL=EmployeeStatusRequestBuilder.d.ts.map