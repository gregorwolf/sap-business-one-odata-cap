import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { CreditPaymentMethods } from './CreditPaymentMethods';
/**
 * Request builder class for operations supported on the [[CreditPaymentMethods]] entity.
 */
export declare class CreditPaymentMethodsRequestBuilder extends RequestBuilder<CreditPaymentMethods> {
    /**
     * Returns a request builder for retrieving one `CreditPaymentMethods` entity based on its keys.
     * @param paymentMethodCode Key property. See [[CreditPaymentMethods.paymentMethodCode]].
     * @returns A request builder for creating requests to retrieve one `CreditPaymentMethods` entity based on its keys.
     */
    getByKey(paymentMethodCode: number): GetByKeyRequestBuilderV4<CreditPaymentMethods>;
    /**
     * Returns a request builder for querying all `CreditPaymentMethods` entities.
     * @returns A request builder for creating requests to retrieve all `CreditPaymentMethods` entities.
     */
    getAll(): GetAllRequestBuilderV4<CreditPaymentMethods>;
    /**
     * Returns a request builder for creating a `CreditPaymentMethods` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CreditPaymentMethods`.
     */
    create(entity: CreditPaymentMethods): CreateRequestBuilderV4<CreditPaymentMethods>;
    /**
     * Returns a request builder for updating an entity of type `CreditPaymentMethods`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CreditPaymentMethods`.
     */
    update(entity: CreditPaymentMethods): UpdateRequestBuilderV4<CreditPaymentMethods>;
    /**
     * Returns a request builder for deleting an entity of type `CreditPaymentMethods`.
     * @param paymentMethodCode Key property. See [[CreditPaymentMethods.paymentMethodCode]].
     * @returns A request builder for creating requests that delete an entity of type `CreditPaymentMethods`.
     */
    delete(paymentMethodCode: number): DeleteRequestBuilderV4<CreditPaymentMethods>;
    /**
     * Returns a request builder for deleting an entity of type `CreditPaymentMethods`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CreditPaymentMethods` by taking the entity as a parameter.
     */
    delete(entity: CreditPaymentMethods): DeleteRequestBuilderV4<CreditPaymentMethods>;
}
//# sourceMappingURL=CreditPaymentMethodsRequestBuilder.d.ts.map