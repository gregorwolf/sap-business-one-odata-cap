import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
    getByKey(itemCode: string): GetByKeyRequestBuilderV4<Items>;
    /**
     * Returns a request builder for querying all `Items` entities.
     * @returns A request builder for creating requests to retrieve all `Items` entities.
     */
    getAll(): GetAllRequestBuilderV4<Items>;
    /**
     * Returns a request builder for creating a `Items` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Items`.
     */
    create(entity: Items): CreateRequestBuilderV4<Items>;
    /**
     * Returns a request builder for updating an entity of type `Items`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Items`.
     */
    update(entity: Items): UpdateRequestBuilderV4<Items>;
    /**
     * Returns a request builder for deleting an entity of type `Items`.
     * @param itemCode Key property. See [[Items.itemCode]].
     * @returns A request builder for creating requests that delete an entity of type `Items`.
     */
    delete(itemCode: string): DeleteRequestBuilderV4<Items>;
    /**
     * Returns a request builder for deleting an entity of type `Items`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Items` by taking the entity as a parameter.
     */
    delete(entity: Items): DeleteRequestBuilderV4<Items>;
}
//# sourceMappingURL=ItemsRequestBuilder.d.ts.map