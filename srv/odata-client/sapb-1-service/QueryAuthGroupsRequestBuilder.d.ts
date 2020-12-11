import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { QueryAuthGroups } from './QueryAuthGroups';
/**
 * Request builder class for operations supported on the [[QueryAuthGroups]] entity.
 */
export declare class QueryAuthGroupsRequestBuilder extends RequestBuilder<QueryAuthGroups> {
    /**
     * Returns a request builder for retrieving one `QueryAuthGroups` entity based on its keys.
     * @param authGroupId Key property. See [[QueryAuthGroups.authGroupId]].
     * @returns A request builder for creating requests to retrieve one `QueryAuthGroups` entity based on its keys.
     */
    getByKey(authGroupId: number): GetByKeyRequestBuilderV4<QueryAuthGroups>;
    /**
     * Returns a request builder for querying all `QueryAuthGroups` entities.
     * @returns A request builder for creating requests to retrieve all `QueryAuthGroups` entities.
     */
    getAll(): GetAllRequestBuilderV4<QueryAuthGroups>;
    /**
     * Returns a request builder for creating a `QueryAuthGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `QueryAuthGroups`.
     */
    create(entity: QueryAuthGroups): CreateRequestBuilderV4<QueryAuthGroups>;
    /**
     * Returns a request builder for updating an entity of type `QueryAuthGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `QueryAuthGroups`.
     */
    update(entity: QueryAuthGroups): UpdateRequestBuilderV4<QueryAuthGroups>;
    /**
     * Returns a request builder for deleting an entity of type `QueryAuthGroups`.
     * @param authGroupId Key property. See [[QueryAuthGroups.authGroupId]].
     * @returns A request builder for creating requests that delete an entity of type `QueryAuthGroups`.
     */
    delete(authGroupId: number): DeleteRequestBuilderV4<QueryAuthGroups>;
    /**
     * Returns a request builder for deleting an entity of type `QueryAuthGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `QueryAuthGroups` by taking the entity as a parameter.
     */
    delete(entity: QueryAuthGroups): DeleteRequestBuilderV4<QueryAuthGroups>;
}
//# sourceMappingURL=QueryAuthGroupsRequestBuilder.d.ts.map