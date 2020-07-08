import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CashDiscounts } from './CashDiscounts';
/**
 * Request builder class for operations supported on the [[CashDiscounts]] entity.
 */
export declare class CashDiscountsRequestBuilder extends RequestBuilder<CashDiscounts> {
    /**
     * Returns a request builder for retrieving one `CashDiscounts` entity based on its keys.
     * @param code Key property. See [[CashDiscounts.code]].
     * @returns A request builder for creating requests to retrieve one `CashDiscounts` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilder<CashDiscounts>;
    /**
     * Returns a request builder for querying all `CashDiscounts` entities.
     * @returns A request builder for creating requests to retrieve all `CashDiscounts` entities.
     */
    getAll(): GetAllRequestBuilder<CashDiscounts>;
    /**
     * Returns a request builder for creating a `CashDiscounts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CashDiscounts`.
     */
    create(entity: CashDiscounts): CreateRequestBuilder<CashDiscounts>;
    /**
     * Returns a request builder for updating an entity of type `CashDiscounts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CashDiscounts`.
     */
    update(entity: CashDiscounts): UpdateRequestBuilder<CashDiscounts>;
    /**
     * Returns a request builder for deleting an entity of type `CashDiscounts`.
     * @param code Key property. See [[CashDiscounts.code]].
     * @returns A request builder for creating requests that delete an entity of type `CashDiscounts`.
     */
    delete(code: string): DeleteRequestBuilder<CashDiscounts>;
    /**
     * Returns a request builder for deleting an entity of type `CashDiscounts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CashDiscounts` by taking the entity as a parameter.
     */
    delete(entity: CashDiscounts): DeleteRequestBuilder<CashDiscounts>;
}
//# sourceMappingURL=CashDiscountsRequestBuilder.d.ts.map