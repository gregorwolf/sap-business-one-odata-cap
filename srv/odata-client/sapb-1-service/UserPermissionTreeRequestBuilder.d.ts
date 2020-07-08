import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { UserPermissionTree } from './UserPermissionTree';
/**
 * Request builder class for operations supported on the [[UserPermissionTree]] entity.
 */
export declare class UserPermissionTreeRequestBuilder extends RequestBuilder<UserPermissionTree> {
    /**
     * Returns a request builder for retrieving one `UserPermissionTree` entity based on its keys.
     * @param permissionId Key property. See [[UserPermissionTree.permissionId]].
     * @returns A request builder for creating requests to retrieve one `UserPermissionTree` entity based on its keys.
     */
    getByKey(permissionId: string): GetByKeyRequestBuilder<UserPermissionTree>;
    /**
     * Returns a request builder for querying all `UserPermissionTree` entities.
     * @returns A request builder for creating requests to retrieve all `UserPermissionTree` entities.
     */
    getAll(): GetAllRequestBuilder<UserPermissionTree>;
    /**
     * Returns a request builder for creating a `UserPermissionTree` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserPermissionTree`.
     */
    create(entity: UserPermissionTree): CreateRequestBuilder<UserPermissionTree>;
    /**
     * Returns a request builder for updating an entity of type `UserPermissionTree`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserPermissionTree`.
     */
    update(entity: UserPermissionTree): UpdateRequestBuilder<UserPermissionTree>;
    /**
     * Returns a request builder for deleting an entity of type `UserPermissionTree`.
     * @param permissionId Key property. See [[UserPermissionTree.permissionId]].
     * @returns A request builder for creating requests that delete an entity of type `UserPermissionTree`.
     */
    delete(permissionId: string): DeleteRequestBuilder<UserPermissionTree>;
    /**
     * Returns a request builder for deleting an entity of type `UserPermissionTree`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `UserPermissionTree` by taking the entity as a parameter.
     */
    delete(entity: UserPermissionTree): DeleteRequestBuilder<UserPermissionTree>;
}
//# sourceMappingURL=UserPermissionTreeRequestBuilder.d.ts.map