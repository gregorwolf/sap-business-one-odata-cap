import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { AssetCapitalization } from './AssetCapitalization';
/**
 * Request builder class for operations supported on the [[AssetCapitalization]] entity.
 */
export declare class AssetCapitalizationRequestBuilder extends RequestBuilder<AssetCapitalization> {
    /**
     * Returns a request builder for retrieving one `AssetCapitalization` entity based on its keys.
     * @param docEntry Key property. See [[AssetCapitalization.docEntry]].
     * @returns A request builder for creating requests to retrieve one `AssetCapitalization` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<AssetCapitalization>;
    /**
     * Returns a request builder for querying all `AssetCapitalization` entities.
     * @returns A request builder for creating requests to retrieve all `AssetCapitalization` entities.
     */
    getAll(): GetAllRequestBuilderV4<AssetCapitalization>;
    /**
     * Returns a request builder for creating a `AssetCapitalization` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetCapitalization`.
     */
    create(entity: AssetCapitalization): CreateRequestBuilderV4<AssetCapitalization>;
    /**
     * Returns a request builder for updating an entity of type `AssetCapitalization`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetCapitalization`.
     */
    update(entity: AssetCapitalization): UpdateRequestBuilderV4<AssetCapitalization>;
    /**
     * Returns a request builder for deleting an entity of type `AssetCapitalization`.
     * @param docEntry Key property. See [[AssetCapitalization.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `AssetCapitalization`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<AssetCapitalization>;
    /**
     * Returns a request builder for deleting an entity of type `AssetCapitalization`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AssetCapitalization` by taking the entity as a parameter.
     */
    delete(entity: AssetCapitalization): DeleteRequestBuilderV4<AssetCapitalization>;
}
//# sourceMappingURL=AssetCapitalizationRequestBuilder.d.ts.map