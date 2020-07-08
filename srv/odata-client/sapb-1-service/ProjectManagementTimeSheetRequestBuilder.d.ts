import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ProjectManagementTimeSheet } from './ProjectManagementTimeSheet';
/**
 * Request builder class for operations supported on the [[ProjectManagementTimeSheet]] entity.
 */
export declare class ProjectManagementTimeSheetRequestBuilder extends RequestBuilder<ProjectManagementTimeSheet> {
    /**
     * Returns a request builder for retrieving one `ProjectManagementTimeSheet` entity based on its keys.
     * @param absEntry Key property. See [[ProjectManagementTimeSheet.absEntry]].
     * @returns A request builder for creating requests to retrieve one `ProjectManagementTimeSheet` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilder<ProjectManagementTimeSheet>;
    /**
     * Returns a request builder for querying all `ProjectManagementTimeSheet` entities.
     * @returns A request builder for creating requests to retrieve all `ProjectManagementTimeSheet` entities.
     */
    getAll(): GetAllRequestBuilder<ProjectManagementTimeSheet>;
    /**
     * Returns a request builder for creating a `ProjectManagementTimeSheet` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProjectManagementTimeSheet`.
     */
    create(entity: ProjectManagementTimeSheet): CreateRequestBuilder<ProjectManagementTimeSheet>;
    /**
     * Returns a request builder for updating an entity of type `ProjectManagementTimeSheet`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProjectManagementTimeSheet`.
     */
    update(entity: ProjectManagementTimeSheet): UpdateRequestBuilder<ProjectManagementTimeSheet>;
    /**
     * Returns a request builder for deleting an entity of type `ProjectManagementTimeSheet`.
     * @param absEntry Key property. See [[ProjectManagementTimeSheet.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `ProjectManagementTimeSheet`.
     */
    delete(absEntry: number): DeleteRequestBuilder<ProjectManagementTimeSheet>;
    /**
     * Returns a request builder for deleting an entity of type `ProjectManagementTimeSheet`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ProjectManagementTimeSheet` by taking the entity as a parameter.
     */
    delete(entity: ProjectManagementTimeSheet): DeleteRequestBuilder<ProjectManagementTimeSheet>;
}
//# sourceMappingURL=ProjectManagementTimeSheetRequestBuilder.d.ts.map