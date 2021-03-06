import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { WizardPaymentMethods } from './WizardPaymentMethods';
/**
 * Request builder class for operations supported on the [[WizardPaymentMethods]] entity.
 */
export declare class WizardPaymentMethodsRequestBuilder extends RequestBuilder<WizardPaymentMethods> {
    /**
     * Returns a request builder for retrieving one `WizardPaymentMethods` entity based on its keys.
     * @param paymentMethodCode Key property. See [[WizardPaymentMethods.paymentMethodCode]].
     * @returns A request builder for creating requests to retrieve one `WizardPaymentMethods` entity based on its keys.
     */
    getByKey(paymentMethodCode: string): GetByKeyRequestBuilderV4<WizardPaymentMethods>;
    /**
     * Returns a request builder for querying all `WizardPaymentMethods` entities.
     * @returns A request builder for creating requests to retrieve all `WizardPaymentMethods` entities.
     */
    getAll(): GetAllRequestBuilderV4<WizardPaymentMethods>;
    /**
     * Returns a request builder for creating a `WizardPaymentMethods` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WizardPaymentMethods`.
     */
    create(entity: WizardPaymentMethods): CreateRequestBuilderV4<WizardPaymentMethods>;
    /**
     * Returns a request builder for updating an entity of type `WizardPaymentMethods`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WizardPaymentMethods`.
     */
    update(entity: WizardPaymentMethods): UpdateRequestBuilderV4<WizardPaymentMethods>;
    /**
     * Returns a request builder for deleting an entity of type `WizardPaymentMethods`.
     * @param paymentMethodCode Key property. See [[WizardPaymentMethods.paymentMethodCode]].
     * @returns A request builder for creating requests that delete an entity of type `WizardPaymentMethods`.
     */
    delete(paymentMethodCode: string): DeleteRequestBuilderV4<WizardPaymentMethods>;
    /**
     * Returns a request builder for deleting an entity of type `WizardPaymentMethods`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `WizardPaymentMethods` by taking the entity as a parameter.
     */
    delete(entity: WizardPaymentMethods): DeleteRequestBuilderV4<WizardPaymentMethods>;
}
//# sourceMappingURL=WizardPaymentMethodsRequestBuilder.d.ts.map