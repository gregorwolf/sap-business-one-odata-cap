import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { AssetGroups } from './AssetGroups';
/**
 * Request builder class for operations supported on the [[AssetGroups]] entity.
 */
export declare class AssetGroupsRequestBuilder extends RequestBuilder<AssetGroups> {
    /**
     * Returns a request builder for retrieving one `AssetGroups` entity based on its keys.
     * @param code Key property. See [[AssetGroups.code]].
     * @returns A request builder for creating requests to retrieve one `AssetGroups` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilderV4<AssetGroups>;
    /**
     * Returns a request builder for querying all `AssetGroups` entities.
     * @returns A request builder for creating requests to retrieve all `AssetGroups` entities.
     */
    getAll(): GetAllRequestBuilderV4<AssetGroups>;
    /**
     * Returns a request builder for creating a `AssetGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetGroups`.
     */
    create(entity: AssetGroups): CreateRequestBuilderV4<AssetGroups>;
    /**
     * Returns a request builder for updating an entity of type `AssetGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetGroups`.
     */
    update(entity: AssetGroups): UpdateRequestBuilderV4<AssetGroups>;
    /**
     * Returns a request builder for deleting an entity of type `AssetGroups`.
     * @param code Key property. See [[AssetGroups.code]].
     * @returns A request builder for creating requests that delete an entity of type `AssetGroups`.
     */
    delete(code: string): DeleteRequestBuilderV4<AssetGroups>;
    /**
     * Returns a request builder for deleting an entity of type `AssetGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AssetGroups` by taking the entity as a parameter.
     */
    delete(entity: AssetGroups): DeleteRequestBuilderV4<AssetGroups>;
}
//# sourceMappingURL=AssetGroupsRequestBuilder.d.ts.map