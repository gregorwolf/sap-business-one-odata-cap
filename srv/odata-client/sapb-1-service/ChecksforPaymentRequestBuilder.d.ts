import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ChecksforPayment } from './ChecksforPayment';
/**
 * Request builder class for operations supported on the [[ChecksforPayment]] entity.
 */
export declare class ChecksforPaymentRequestBuilder extends RequestBuilder<ChecksforPayment> {
    /**
     * Returns a request builder for retrieving one `ChecksforPayment` entity based on its keys.
     * @param checkKey Key property. See [[ChecksforPayment.checkKey]].
     * @returns A request builder for creating requests to retrieve one `ChecksforPayment` entity based on its keys.
     */
    getByKey(checkKey: number): GetByKeyRequestBuilder<ChecksforPayment>;
    /**
     * Returns a request builder for querying all `ChecksforPayment` entities.
     * @returns A request builder for creating requests to retrieve all `ChecksforPayment` entities.
     */
    getAll(): GetAllRequestBuilder<ChecksforPayment>;
    /**
     * Returns a request builder for creating a `ChecksforPayment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ChecksforPayment`.
     */
    create(entity: ChecksforPayment): CreateRequestBuilder<ChecksforPayment>;
    /**
     * Returns a request builder for updating an entity of type `ChecksforPayment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ChecksforPayment`.
     */
    update(entity: ChecksforPayment): UpdateRequestBuilder<ChecksforPayment>;
    /**
     * Returns a request builder for deleting an entity of type `ChecksforPayment`.
     * @param checkKey Key property. See [[ChecksforPayment.checkKey]].
     * @returns A request builder for creating requests that delete an entity of type `ChecksforPayment`.
     */
    delete(checkKey: number): DeleteRequestBuilder<ChecksforPayment>;
    /**
     * Returns a request builder for deleting an entity of type `ChecksforPayment`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ChecksforPayment` by taking the entity as a parameter.
     */
    delete(entity: ChecksforPayment): DeleteRequestBuilder<ChecksforPayment>;
}
//# sourceMappingURL=ChecksforPaymentRequestBuilder.d.ts.map