import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BillOfExchangeTransactions } from './BillOfExchangeTransactions';
/**
 * Request builder class for operations supported on the [[BillOfExchangeTransactions]] entity.
 */
export declare class BillOfExchangeTransactionsRequestBuilder extends RequestBuilder<BillOfExchangeTransactions> {
    /**
     * Returns a request builder for retrieving one `BillOfExchangeTransactions` entity based on its keys.
     * @param boeTransactionkey Key property. See [[BillOfExchangeTransactions.boeTransactionkey]].
     * @returns A request builder for creating requests to retrieve one `BillOfExchangeTransactions` entity based on its keys.
     */
    getByKey(boeTransactionkey: number): GetByKeyRequestBuilder<BillOfExchangeTransactions>;
    /**
     * Returns a request builder for querying all `BillOfExchangeTransactions` entities.
     * @returns A request builder for creating requests to retrieve all `BillOfExchangeTransactions` entities.
     */
    getAll(): GetAllRequestBuilder<BillOfExchangeTransactions>;
    /**
     * Returns a request builder for creating a `BillOfExchangeTransactions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BillOfExchangeTransactions`.
     */
    create(entity: BillOfExchangeTransactions): CreateRequestBuilder<BillOfExchangeTransactions>;
    /**
     * Returns a request builder for updating an entity of type `BillOfExchangeTransactions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BillOfExchangeTransactions`.
     */
    update(entity: BillOfExchangeTransactions): UpdateRequestBuilder<BillOfExchangeTransactions>;
    /**
     * Returns a request builder for deleting an entity of type `BillOfExchangeTransactions`.
     * @param boeTransactionkey Key property. See [[BillOfExchangeTransactions.boeTransactionkey]].
     * @returns A request builder for creating requests that delete an entity of type `BillOfExchangeTransactions`.
     */
    delete(boeTransactionkey: number): DeleteRequestBuilder<BillOfExchangeTransactions>;
    /**
     * Returns a request builder for deleting an entity of type `BillOfExchangeTransactions`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BillOfExchangeTransactions` by taking the entity as a parameter.
     */
    delete(entity: BillOfExchangeTransactions): DeleteRequestBuilder<BillOfExchangeTransactions>;
}
//# sourceMappingURL=BillOfExchangeTransactionsRequestBuilder.d.ts.map