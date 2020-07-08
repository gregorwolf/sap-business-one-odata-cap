import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { AttributeGroups } from './AttributeGroups';
/**
 * Request builder class for operations supported on the [[AttributeGroups]] entity.
 */
export declare class AttributeGroupsRequestBuilder extends RequestBuilder<AttributeGroups> {
    /**
     * Returns a request builder for retrieving one `AttributeGroups` entity based on its keys.
     * @param code Key property. See [[AttributeGroups.code]].
     * @returns A request builder for creating requests to retrieve one `AttributeGroups` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilder<AttributeGroups>;
    /**
     * Returns a request builder for querying all `AttributeGroups` entities.
     * @returns A request builder for creating requests to retrieve all `AttributeGroups` entities.
     */
    getAll(): GetAllRequestBuilder<AttributeGroups>;
    /**
     * Returns a request builder for creating a `AttributeGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AttributeGroups`.
     */
    create(entity: AttributeGroups): CreateRequestBuilder<AttributeGroups>;
    /**
     * Returns a request builder for updating an entity of type `AttributeGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AttributeGroups`.
     */
    update(entity: AttributeGroups): UpdateRequestBuilder<AttributeGroups>;
    /**
     * Returns a request builder for deleting an entity of type `AttributeGroups`.
     * @param code Key property. See [[AttributeGroups.code]].
     * @returns A request builder for creating requests that delete an entity of type `AttributeGroups`.
     */
    delete(code: number): DeleteRequestBuilder<AttributeGroups>;
    /**
     * Returns a request builder for deleting an entity of type `AttributeGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AttributeGroups` by taking the entity as a parameter.
     */
    delete(entity: AttributeGroups): DeleteRequestBuilder<AttributeGroups>;
}
//# sourceMappingURL=AttributeGroupsRequestBuilder.d.ts.map