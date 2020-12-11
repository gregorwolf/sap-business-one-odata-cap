import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { WorkOrders } from './WorkOrders';
/**
 * Request builder class for operations supported on the [[WorkOrders]] entity.
 */
export declare class WorkOrdersRequestBuilder extends RequestBuilder<WorkOrders> {
    /**
     * Returns a request builder for retrieving one `WorkOrders` entity based on its keys.
     * @param orderNum Key property. See [[WorkOrders.orderNum]].
     * @returns A request builder for creating requests to retrieve one `WorkOrders` entity based on its keys.
     */
    getByKey(orderNum: number): GetByKeyRequestBuilderV4<WorkOrders>;
    /**
     * Returns a request builder for querying all `WorkOrders` entities.
     * @returns A request builder for creating requests to retrieve all `WorkOrders` entities.
     */
    getAll(): GetAllRequestBuilderV4<WorkOrders>;
    /**
     * Returns a request builder for creating a `WorkOrders` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkOrders`.
     */
    create(entity: WorkOrders): CreateRequestBuilderV4<WorkOrders>;
    /**
     * Returns a request builder for updating an entity of type `WorkOrders`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkOrders`.
     */
    update(entity: WorkOrders): UpdateRequestBuilderV4<WorkOrders>;
    /**
     * Returns a request builder for deleting an entity of type `WorkOrders`.
     * @param orderNum Key property. See [[WorkOrders.orderNum]].
     * @returns A request builder for creating requests that delete an entity of type `WorkOrders`.
     */
    delete(orderNum: number): DeleteRequestBuilderV4<WorkOrders>;
    /**
     * Returns a request builder for deleting an entity of type `WorkOrders`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `WorkOrders` by taking the entity as a parameter.
     */
    delete(entity: WorkOrders): DeleteRequestBuilderV4<WorkOrders>;
}
//# sourceMappingURL=WorkOrdersRequestBuilder.d.ts.map