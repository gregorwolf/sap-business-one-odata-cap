import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
    getByKey(lineItemId: number): GetByKeyRequestBuilder<CashFlowLineItems>;
    /**
     * Returns a request builder for querying all `CashFlowLineItems` entities.
     * @returns A request builder for creating requests to retrieve all `CashFlowLineItems` entities.
     */
    getAll(): GetAllRequestBuilder<CashFlowLineItems>;
    /**
     * Returns a request builder for creating a `CashFlowLineItems` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CashFlowLineItems`.
     */
    create(entity: CashFlowLineItems): CreateRequestBuilder<CashFlowLineItems>;
    /**
     * Returns a request builder for updating an entity of type `CashFlowLineItems`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CashFlowLineItems`.
     */
    update(entity: CashFlowLineItems): UpdateRequestBuilder<CashFlowLineItems>;
    /**
     * Returns a request builder for deleting an entity of type `CashFlowLineItems`.
     * @param lineItemId Key property. See [[CashFlowLineItems.lineItemId]].
     * @returns A request builder for creating requests that delete an entity of type `CashFlowLineItems`.
     */
    delete(lineItemId: number): DeleteRequestBuilder<CashFlowLineItems>;
    /**
     * Returns a request builder for deleting an entity of type `CashFlowLineItems`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CashFlowLineItems` by taking the entity as a parameter.
     */
    delete(entity: CashFlowLineItems): DeleteRequestBuilder<CashFlowLineItems>;
}
//# sourceMappingURL=CashFlowLineItemsRequestBuilder.d.ts.map