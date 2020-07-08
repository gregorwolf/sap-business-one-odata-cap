import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { AssetTransfer } from './AssetTransfer';
/**
 * Request builder class for operations supported on the [[AssetTransfer]] entity.
 */
export declare class AssetTransferRequestBuilder extends RequestBuilder<AssetTransfer> {
    /**
     * Returns a request builder for retrieving one `AssetTransfer` entity based on its keys.
     * @param docEntry Key property. See [[AssetTransfer.docEntry]].
     * @returns A request builder for creating requests to retrieve one `AssetTransfer` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<AssetTransfer>;
    /**
     * Returns a request builder for querying all `AssetTransfer` entities.
     * @returns A request builder for creating requests to retrieve all `AssetTransfer` entities.
     */
    getAll(): GetAllRequestBuilder<AssetTransfer>;
    /**
     * Returns a request builder for creating a `AssetTransfer` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetTransfer`.
     */
    create(entity: AssetTransfer): CreateRequestBuilder<AssetTransfer>;
    /**
     * Returns a request builder for updating an entity of type `AssetTransfer`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetTransfer`.
     */
    update(entity: AssetTransfer): UpdateRequestBuilder<AssetTransfer>;
    /**
     * Returns a request builder for deleting an entity of type `AssetTransfer`.
     * @param docEntry Key property. See [[AssetTransfer.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `AssetTransfer`.
     */
    delete(docEntry: number): DeleteRequestBuilder<AssetTransfer>;
    /**
     * Returns a request builder for deleting an entity of type `AssetTransfer`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AssetTransfer` by taking the entity as a parameter.
     */
    delete(entity: AssetTransfer): DeleteRequestBuilder<AssetTransfer>;
}
//# sourceMappingURL=AssetTransferRequestBuilder.d.ts.map