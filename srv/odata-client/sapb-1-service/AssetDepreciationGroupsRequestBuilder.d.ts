import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
    getByKey(code: string): GetByKeyRequestBuilderV4<AssetDepreciationGroups>;
    /**
     * Returns a request builder for querying all `AssetDepreciationGroups` entities.
     * @returns A request builder for creating requests to retrieve all `AssetDepreciationGroups` entities.
     */
    getAll(): GetAllRequestBuilderV4<AssetDepreciationGroups>;
    /**
     * Returns a request builder for creating a `AssetDepreciationGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetDepreciationGroups`.
     */
    create(entity: AssetDepreciationGroups): CreateRequestBuilderV4<AssetDepreciationGroups>;
    /**
     * Returns a request builder for updating an entity of type `AssetDepreciationGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetDepreciationGroups`.
     */
    update(entity: AssetDepreciationGroups): UpdateRequestBuilderV4<AssetDepreciationGroups>;
    /**
     * Returns a request builder for deleting an entity of type `AssetDepreciationGroups`.
     * @param code Key property. See [[AssetDepreciationGroups.code]].
     * @returns A request builder for creating requests that delete an entity of type `AssetDepreciationGroups`.
     */
    delete(code: string): DeleteRequestBuilderV4<AssetDepreciationGroups>;
    /**
     * Returns a request builder for deleting an entity of type `AssetDepreciationGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AssetDepreciationGroups` by taking the entity as a parameter.
     */
    delete(entity: AssetDepreciationGroups): DeleteRequestBuilderV4<AssetDepreciationGroups>;
}
//# sourceMappingURL=AssetDepreciationGroupsRequestBuilder.d.ts.map