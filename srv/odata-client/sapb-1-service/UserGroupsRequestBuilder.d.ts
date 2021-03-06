import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { UserGroups } from './UserGroups';
/**
 * Request builder class for operations supported on the [[UserGroups]] entity.
 */
export declare class UserGroupsRequestBuilder extends RequestBuilder<UserGroups> {
    /**
     * Returns a request builder for retrieving one `UserGroups` entity based on its keys.
     * @param userGroupId Key property. See [[UserGroups.userGroupId]].
     * @returns A request builder for creating requests to retrieve one `UserGroups` entity based on its keys.
     */
    getByKey(userGroupId: number): GetByKeyRequestBuilderV4<UserGroups>;
    /**
     * Returns a request builder for querying all `UserGroups` entities.
     * @returns A request builder for creating requests to retrieve all `UserGroups` entities.
     */
    getAll(): GetAllRequestBuilderV4<UserGroups>;
    /**
     * Returns a request builder for creating a `UserGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserGroups`.
     */
    create(entity: UserGroups): CreateRequestBuilderV4<UserGroups>;
    /**
     * Returns a request builder for updating an entity of type `UserGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserGroups`.
     */
    update(entity: UserGroups): UpdateRequestBuilderV4<UserGroups>;
    /**
     * Returns a request builder for deleting an entity of type `UserGroups`.
     * @param userGroupId Key property. See [[UserGroups.userGroupId]].
     * @returns A request builder for creating requests that delete an entity of type `UserGroups`.
     */
    delete(userGroupId: number): DeleteRequestBuilderV4<UserGroups>;
    /**
     * Returns a request builder for deleting an entity of type `UserGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `UserGroups` by taking the entity as a parameter.
     */
    delete(entity: UserGroups): DeleteRequestBuilderV4<UserGroups>;
}
//# sourceMappingURL=UserGroupsRequestBuilder.d.ts.map