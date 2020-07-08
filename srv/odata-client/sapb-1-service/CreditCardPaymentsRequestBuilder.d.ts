import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CreditCardPayments } from './CreditCardPayments';
/**
 * Request builder class for operations supported on the [[CreditCardPayments]] entity.
 */
export declare class CreditCardPaymentsRequestBuilder extends RequestBuilder<CreditCardPayments> {
    /**
     * Returns a request builder for retrieving one `CreditCardPayments` entity based on its keys.
     * @param dueDateCode Key property. See [[CreditCardPayments.dueDateCode]].
     * @returns A request builder for creating requests to retrieve one `CreditCardPayments` entity based on its keys.
     */
    getByKey(dueDateCode: string): GetByKeyRequestBuilder<CreditCardPayments>;
    /**
     * Returns a request builder for querying all `CreditCardPayments` entities.
     * @returns A request builder for creating requests to retrieve all `CreditCardPayments` entities.
     */
    getAll(): GetAllRequestBuilder<CreditCardPayments>;
    /**
     * Returns a request builder for creating a `CreditCardPayments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CreditCardPayments`.
     */
    create(entity: CreditCardPayments): CreateRequestBuilder<CreditCardPayments>;
    /**
     * Returns a request builder for updating an entity of type `CreditCardPayments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CreditCardPayments`.
     */
    update(entity: CreditCardPayments): UpdateRequestBuilder<CreditCardPayments>;
    /**
     * Returns a request builder for deleting an entity of type `CreditCardPayments`.
     * @param dueDateCode Key property. See [[CreditCardPayments.dueDateCode]].
     * @returns A request builder for creating requests that delete an entity of type `CreditCardPayments`.
     */
    delete(dueDateCode: string): DeleteRequestBuilder<CreditCardPayments>;
    /**
     * Returns a request builder for deleting an entity of type `CreditCardPayments`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CreditCardPayments` by taking the entity as a parameter.
     */
    delete(entity: CreditCardPayments): DeleteRequestBuilder<CreditCardPayments>;
}
//# sourceMappingURL=CreditCardPaymentsRequestBuilder.d.ts.map