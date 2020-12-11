import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { CashFlowLineItems } from './CashFlowLineItems';
/**
 * Request builder class for operations supported on the [[CashFlowLineItems]] entity.
 */
export declare class CashFlowLineItemsRequestBuilder extends RequestBuilder<CashFlowLineItems> {
    /**
     * Returns a request builder for retrieving one `CashFlowLineItems` entity based on its keys.
     * @param lineItemId Key property. See [[CashFlowLineItems.lineItemId]].
     * @returns A request builder for creating requests to retrieve one `CashFlowLineItems` entity based on its keys.
     */
    getByKey(lineItemId: number): GetByKeyRequestBuilderV4<CashFlowLineItems>;
    /**
     * Returns a request builder for querying all `CashFlowLineItems` entities.
     * @returns A request builder for creating requests to retrieve all `CashFlowLineItems` entities.
     */
    getAll(): GetAllRequestBuilderV4<CashFlowLineItems>;
    /**
     * Returns a request builder for creating a `CashFlowLineItems` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CashFlowLineItems`.
     */
    create(entity: CashFlowLineItems): CreateRequestBuilderV4<CashFlowLineItems>;
    /**
     * Returns a request builder for updating an entity of type `CashFlowLineItems`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CashFlowLineItems`.
     */
    update(entity: CashFlowLineItems): UpdateRequestBuilderV4<CashFlowLineItems>;
    /**
     * Returns a request builder for deleting an entity of type `CashFlowLineItems`.
     * @param lineItemId Key property. See [[CashFlowLineItems.lineItemId]].
     * @returns A request builder for creating requests that delete an entity of type `CashFlowLineItems`.
     */
    delete(lineItemId: number): DeleteRequestBuilderV4<CashFlowLineItems>;
    /**
     * Returns a request builder for deleting an entity of type `CashFlowLineItems`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CashFlowLineItems` by taking the entity as a parameter.
     */
    delete(entity: CashFlowLineItems): DeleteRequestBuilderV4<CashFlowLineItems>;
}
//# sourceMappingURL=CashFlowLineItemsRequestBuilder.d.ts.map