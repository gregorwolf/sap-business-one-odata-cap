import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { AssetManualDepreciation } from './AssetManualDepreciation';
/**
 * Request builder class for operations supported on the [[AssetManualDepreciation]] entity.
 */
export declare class AssetManualDepreciationRequestBuilder extends RequestBuilder<AssetManualDepreciation> {
    /**
     * Returns a request builder for retrieving one `AssetManualDepreciation` entity based on its keys.
     * @param docEntry Key property. See [[AssetManualDepreciation.docEntry]].
     * @returns A request builder for creating requests to retrieve one `AssetManualDepreciation` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<AssetManualDepreciation>;
    /**
     * Returns a request builder for querying all `AssetManualDepreciation` entities.
     * @returns A request builder for creating requests to retrieve all `AssetManualDepreciation` entities.
     */
    getAll(): GetAllRequestBuilderV4<AssetManualDepreciation>;
    /**
     * Returns a request builder for creating a `AssetManualDepreciation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetManualDepreciation`.
     */
    create(entity: AssetManualDepreciation): CreateRequestBuilderV4<AssetManualDepreciation>;
    /**
     * Returns a request builder for updating an entity of type `AssetManualDepreciation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetManualDepreciation`.
     */
    update(entity: AssetManualDepreciation): UpdateRequestBuilderV4<AssetManualDepreciation>;
    /**
     * Returns a request builder for deleting an entity of type `AssetManualDepreciation`.
     * @param docEntry Key property. See [[AssetManualDepreciation.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `AssetManualDepreciation`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<AssetManualDepreciation>;
    /**
     * Returns a request builder for deleting an entity of type `AssetManualDepreciation`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AssetManualDepreciation` by taking the entity as a parameter.
     */
    delete(entity: AssetManualDepreciation): DeleteRequestBuilderV4<AssetManualDepreciation>;
}
//# sourceMappingURL=AssetManualDepreciationRequestBuilder.d.ts.map