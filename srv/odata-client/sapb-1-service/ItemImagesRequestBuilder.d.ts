import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ItemImages } from './ItemImages';
/**
 * Request builder class for operations supported on the [[ItemImages]] entity.
 */
export declare class ItemImagesRequestBuilder extends RequestBuilder<ItemImages> {
    /**
     * Returns a request builder for retrieving one `ItemImages` entity based on its keys.
     * @param itemCode Key property. See [[ItemImages.itemCode]].
     * @returns A request builder for creating requests to retrieve one `ItemImages` entity based on its keys.
     */
    getByKey(itemCode: string): GetByKeyRequestBuilder<ItemImages>;
    /**
     * Returns a request builder for querying all `ItemImages` entities.
     * @returns A request builder for creating requests to retrieve all `ItemImages` entities.
     */
    getAll(): GetAllRequestBuilder<ItemImages>;
    /**
     * Returns a request builder for creating a `ItemImages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ItemImages`.
     */
    create(entity: ItemImages): CreateRequestBuilder<ItemImages>;
    /**
     * Returns a request builder for updating an entity of type `ItemImages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ItemImages`.
     */
    update(entity: ItemImages): UpdateRequestBuilder<ItemImages>;
    /**
     * Returns a request builder for deleting an entity of type `ItemImages`.
     * @param itemCode Key property. See [[ItemImages.itemCode]].
     * @returns A request builder for creating requests that delete an entity of type `ItemImages`.
     */
    delete(itemCode: string): DeleteRequestBuilder<ItemImages>;
    /**
     * Returns a request builder for deleting an entity of type `ItemImages`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ItemImages` by taking the entity as a parameter.
     */
    delete(entity: ItemImages): DeleteRequestBuilder<ItemImages>;
}
//# sourceMappingURL=ItemImagesRequestBuilder.d.ts.map