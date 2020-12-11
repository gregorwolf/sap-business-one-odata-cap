import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { EmployeeIdType } from './EmployeeIdType';
/**
 * Request builder class for operations supported on the [[EmployeeIdType]] entity.
 */
export declare class EmployeeIdTypeRequestBuilder extends RequestBuilder<EmployeeIdType> {
    /**
     * Returns a request builder for retrieving one `EmployeeIdType` entity based on its keys.
     * @param idType Key property. See [[EmployeeIdType.idType]].
     * @returns A request builder for creating requests to retrieve one `EmployeeIdType` entity based on its keys.
     */
    getByKey(idType: string): GetByKeyRequestBuilderV4<EmployeeIdType>;
    /**
     * Returns a request builder for querying all `EmployeeIdType` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeIdType` entities.
     */
    getAll(): GetAllRequestBuilderV4<EmployeeIdType>;
    /**
     * Returns a request builder for creating a `EmployeeIdType` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeIdType`.
     */
    create(entity: EmployeeIdType): CreateRequestBuilderV4<EmployeeIdType>;
    /**
     * Returns a request builder for updating an entity of type `EmployeeIdType`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeIdType`.
     */
    update(entity: EmployeeIdType): UpdateRequestBuilderV4<EmployeeIdType>;
    /**
     * Returns a request builder for deleting an entity of type `EmployeeIdType`.
     * @param idType Key property. See [[EmployeeIdType.idType]].
     * @returns A request builder for creating requests that delete an entity of type `EmployeeIdType`.
     */
    delete(idType: string): DeleteRequestBuilderV4<EmployeeIdType>;
    /**
     * Returns a request builder for deleting an entity of type `EmployeeIdType`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `EmployeeIdType` by taking the entity as a parameter.
     */
    delete(entity: EmployeeIdType): DeleteRequestBuilderV4<EmployeeIdType>;
}
//# sourceMappingURL=EmployeeIdTypeRequestBuilder.d.ts.map