import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Departments } from './Departments';
/**
 * Request builder class for operations supported on the [[Departments]] entity.
 */
export declare class DepartmentsRequestBuilder extends RequestBuilder<Departments> {
    /**
     * Returns a request builder for retrieving one `Departments` entity based on its keys.
     * @param code Key property. See [[Departments.code]].
     * @returns A request builder for creating requests to retrieve one `Departments` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilderV4<Departments>;
    /**
     * Returns a request builder for querying all `Departments` entities.
     * @returns A request builder for creating requests to retrieve all `Departments` entities.
     */
    getAll(): GetAllRequestBuilderV4<Departments>;
    /**
     * Returns a request builder for creating a `Departments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Departments`.
     */
    create(entity: Departments): CreateRequestBuilderV4<Departments>;
    /**
     * Returns a request builder for updating an entity of type `Departments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Departments`.
     */
    update(entity: Departments): UpdateRequestBuilderV4<Departments>;
    /**
     * Returns a request builder for deleting an entity of type `Departments`.
     * @param code Key property. See [[Departments.code]].
     * @returns A request builder for creating requests that delete an entity of type `Departments`.
     */
    delete(code: number): DeleteRequestBuilderV4<Departments>;
    /**
     * Returns a request builder for deleting an entity of type `Departments`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Departments` by taking the entity as a parameter.
     */
    delete(entity: Departments): DeleteRequestBuilderV4<Departments>;
}
//# sourceMappingURL=DepartmentsRequestBuilder.d.ts.map