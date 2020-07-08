import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { AssetDepreciationGroups } from './AssetDepreciationGroups';
/**
 * Request builder class for operations supported on the [[AssetDepreciationGroups]] entity.
 */
export declare class AssetDepreciationGroupsRequestBuilder extends RequestBuilder<AssetDepreciationGroups> {
    /**
     * Returns a request builder for retrieving one `AssetDepreciationGroups` entity based on its keys.
     * @param code Key property. See [[AssetDepreciationGroups.code]].
     * @returns A request builder for creating requests to retrieve one `AssetDepreciationGroups` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilder<AssetDepreciationGroups>;
    /**
     * Returns a request builder for querying all `AssetDepreciationGroups` entities.
     * @returns A request builder for creating requests to retrieve all `AssetDepreciationGroups` entities.
     */
    getAll(): GetAllRequestBuilder<AssetDepreciationGroups>;
    /**
     * Returns a request builder for creating a `AssetDepreciationGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetDepreciationGroups`.
     */
    create(entity: AssetDepreciationGroups): CreateRequestBuilder<AssetDepreciationGroups>;
    /**
     * Returns a request builder for updating an entity of type `AssetDepreciationGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetDepreciationGroups`.
     */
    update(entity: AssetDepreciationGroups): UpdateRequestBuilder<AssetDepreciationGroups>;
    /**
     * Returns a request builder for deleting an entity of type `AssetDepreciationGroups`.
     * @param code Key property. See [[AssetDepreciationGroups.code]].
     * @returns A request builder for creating requests that delete an entity of type `AssetDepreciationGroups`.
     */
    delete(code: string): DeleteRequestBuilder<AssetDepreciationGroups>;
    /**
     * Returns a request builder for deleting an entity of type `AssetDepreciationGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AssetDepreciationGroups` by taking the entity as a parameter.
     */
    delete(entity: AssetDepreciationGroups): DeleteRequestBuilder<AssetDepreciationGroups>;
}
//# sourceMappingURL=AssetDepreciationGroupsRequestBuilder.d.ts.map