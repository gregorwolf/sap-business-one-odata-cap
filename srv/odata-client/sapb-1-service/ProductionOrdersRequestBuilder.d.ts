import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ProductionOrders } from './ProductionOrders';
/**
 * Request builder class for operations supported on the [[ProductionOrders]] entity.
 */
export declare class ProductionOrdersRequestBuilder extends RequestBuilder<ProductionOrders> {
    /**
     * Returns a request builder for retrieving one `ProductionOrders` entity based on its keys.
     * @param absoluteEntry Key property. See [[ProductionOrders.absoluteEntry]].
     * @returns A request builder for creating requests to retrieve one `ProductionOrders` entity based on its keys.
     */
    getByKey(absoluteEntry: number): GetByKeyRequestBuilderV4<ProductionOrders>;
    /**
     * Returns a request builder for querying all `ProductionOrders` entities.
     * @returns A request builder for creating requests to retrieve all `ProductionOrders` entities.
     */
    getAll(): GetAllRequestBuilderV4<ProductionOrders>;
    /**
     * Returns a request builder for creating a `ProductionOrders` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductionOrders`.
     */
    create(entity: ProductionOrders): CreateRequestBuilderV4<ProductionOrders>;
    /**
     * Returns a request builder for updating an entity of type `ProductionOrders`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductionOrders`.
     */
    update(entity: ProductionOrders): UpdateRequestBuilderV4<ProductionOrders>;
    /**
     * Returns a request builder for deleting an entity of type `ProductionOrders`.
     * @param absoluteEntry Key property. See [[ProductionOrders.absoluteEntry]].
     * @returns A request builder for creating requests that delete an entity of type `ProductionOrders`.
     */
    delete(absoluteEntry: number): DeleteRequestBuilderV4<ProductionOrders>;
    /**
     * Returns a request builder for deleting an entity of type `ProductionOrders`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ProductionOrders` by taking the entity as a parameter.
     */
    delete(entity: ProductionOrders): DeleteRequestBuilderV4<ProductionOrders>;
}
//# sourceMappingURL=ProductionOrdersRequestBuilder.d.ts.map