import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
    getByKey(authGroupId: number): GetByKeyRequestBuilder<QueryAuthGroups>;
    /**
     * Returns a request builder for querying all `QueryAuthGroups` entities.
     * @returns A request builder for creating requests to retrieve all `QueryAuthGroups` entities.
     */
    getAll(): GetAllRequestBuilder<QueryAuthGroups>;
    /**
     * Returns a request builder for creating a `QueryAuthGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `QueryAuthGroups`.
     */
    create(entity: QueryAuthGroups): CreateRequestBuilder<QueryAuthGroups>;
    /**
     * Returns a request builder for updating an entity of type `QueryAuthGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `QueryAuthGroups`.
     */
    update(entity: QueryAuthGroups): UpdateRequestBuilder<QueryAuthGroups>;
    /**
     * Returns a request builder for deleting an entity of type `QueryAuthGroups`.
     * @param authGroupId Key property. See [[QueryAuthGroups.authGroupId]].
     * @returns A request builder for creating requests that delete an entity of type `QueryAuthGroups`.
     */
    delete(authGroupId: number): DeleteRequestBuilder<QueryAuthGroups>;
    /**
     * Returns a request builder for deleting an entity of type `QueryAuthGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `QueryAuthGroups` by taking the entity as a parameter.
     */
    delete(entity: QueryAuthGroups): DeleteRequestBuilder<QueryAuthGroups>;
}
//# sourceMappingURL=QueryAuthGroupsRequestBuilder.d.ts.map