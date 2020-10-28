import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { AssetRetirement } from './AssetRetirement';
/**
 * Request builder class for operations supported on the [[AssetRetirement]] entity.
 */
export declare class AssetRetirementRequestBuilder extends RequestBuilder<AssetRetirement> {
    /**
     * Returns a request builder for retrieving one `AssetRetirement` entity based on its keys.
     * @param docEntry Key property. See [[AssetRetirement.docEntry]].
     * @returns A request builder for creating requests to retrieve one `AssetRetirement` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<AssetRetirement>;
    /**
     * Returns a request builder for querying all `AssetRetirement` entities.
     * @returns A request builder for creating requests to retrieve all `AssetRetirement` entities.
     */
    getAll(): GetAllRequestBuilder<AssetRetirement>;
    /**
     * Returns a request builder for creating a `AssetRetirement` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetRetirement`.
     */
    create(entity: AssetRetirement): CreateRequestBuilder<AssetRetirement>;
    /**
     * Returns a request builder for updating an entity of type `AssetRetirement`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetRetirement`.
     */
    update(entity: AssetRetirement): UpdateRequestBuilder<AssetRetirement>;
    /**
     * Returns a request builder for deleting an entity of type `AssetRetirement`.
     * @param docEntry Key property. See [[AssetRetirement.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `AssetRetirement`.
     */
    delete(docEntry: number): DeleteRequestBuilder<AssetRetirement>;
    /**
     * Returns a request builder for deleting an entity of type `AssetRetirement`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AssetRetirement` by taking the entity as a parameter.
     */
    delete(entity: AssetRetirement): DeleteRequestBuilder<AssetRetirement>;
}
//# sourceMappingURL=AssetRetirementRequestBuilder.d.ts.map