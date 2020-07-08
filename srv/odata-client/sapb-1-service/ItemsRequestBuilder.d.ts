import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Items } from './Items';
/**
 * Request builder class for operations supported on the [[Items]] entity.
 */
export declare class ItemsRequestBuilder extends RequestBuilder<Items> {
    /**
     * Returns a request builder for retrieving one `Items` entity based on its keys.
     * @param itemCode Key property. See [[Items.itemCode]].
     * @returns A request builder for creating requests to retrieve one `Items` entity based on its keys.
     */
    getByKey(itemCode: string): GetByKeyRequestBuilder<Items>;
    /**
     * Returns a request builder for querying all `Items` entities.
     * @returns A request builder for creating requests to retrieve all `Items` entities.
     */
    getAll(): GetAllRequestBuilder<Items>;
    /**
     * Returns a request builder for creating a `Items` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Items`.
     */
    create(entity: Items): CreateRequestBuilder<Items>;
    /**
     * Returns a request builder for updating an entity of type `Items`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Items`.
     */
    update(entity: Items): UpdateRequestBuilder<Items>;
    /**
     * Returns a request builder for deleting an entity of type `Items`.
     * @param itemCode Key property. See [[Items.itemCode]].
     * @returns A request builder for creating requests that delete an entity of type `Items`.
     */
    delete(itemCode: string): DeleteRequestBuilder<Items>;
    /**
     * Returns a request builder for deleting an entity of type `Items`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Items` by taking the entity as a parameter.
     */
    delete(entity: Items): DeleteRequestBuilder<Items>;
}
//# sourceMappingURL=ItemsRequestBuilder.d.ts.map