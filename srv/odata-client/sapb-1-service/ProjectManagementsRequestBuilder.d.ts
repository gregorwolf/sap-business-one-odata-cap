import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ProjectManagements } from './ProjectManagements';
/**
 * Request builder class for operations supported on the [[ProjectManagements]] entity.
 */
export declare class ProjectManagementsRequestBuilder extends RequestBuilder<ProjectManagements> {
    /**
     * Returns a request builder for retrieving one `ProjectManagements` entity based on its keys.
     * @param absEntry Key property. See [[ProjectManagements.absEntry]].
     * @returns A request builder for creating requests to retrieve one `ProjectManagements` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilderV4<ProjectManagements>;
    /**
     * Returns a request builder for querying all `ProjectManagements` entities.
     * @returns A request builder for creating requests to retrieve all `ProjectManagements` entities.
     */
    getAll(): GetAllRequestBuilderV4<ProjectManagements>;
    /**
     * Returns a request builder for creating a `ProjectManagements` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProjectManagements`.
     */
    create(entity: ProjectManagements): CreateRequestBuilderV4<ProjectManagements>;
    /**
     * Returns a request builder for updating an entity of type `ProjectManagements`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProjectManagements`.
     */
    update(entity: ProjectManagements): UpdateRequestBuilderV4<ProjectManagements>;
    /**
     * Returns a request builder for deleting an entity of type `ProjectManagements`.
     * @param absEntry Key property. See [[ProjectManagements.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `ProjectManagements`.
     */
    delete(absEntry: number): DeleteRequestBuilderV4<ProjectManagements>;
    /**
     * Returns a request builder for deleting an entity of type `ProjectManagements`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ProjectManagements` by taking the entity as a parameter.
     */
    delete(entity: ProjectManagements): DeleteRequestBuilderV4<ProjectManagements>;
}
//# sourceMappingURL=ProjectManagementsRequestBuilder.d.ts.map