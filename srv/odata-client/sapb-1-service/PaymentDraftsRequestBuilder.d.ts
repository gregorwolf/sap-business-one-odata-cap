import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PaymentDrafts } from './PaymentDrafts';
/**
 * Request builder class for operations supported on the [[PaymentDrafts]] entity.
 */
export declare class PaymentDraftsRequestBuilder extends RequestBuilder<PaymentDrafts> {
    /**
     * Returns a request builder for retrieving one `PaymentDrafts` entity based on its keys.
     * @param docEntry Key property. See [[PaymentDrafts.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PaymentDrafts` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<PaymentDrafts>;
    /**
     * Returns a request builder for querying all `PaymentDrafts` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentDrafts` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentDrafts>;
    /**
     * Returns a request builder for creating a `PaymentDrafts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentDrafts`.
     */
    create(entity: PaymentDrafts): CreateRequestBuilder<PaymentDrafts>;
    /**
     * Returns a request builder for updating an entity of type `PaymentDrafts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentDrafts`.
     */
    update(entity: PaymentDrafts): UpdateRequestBuilder<PaymentDrafts>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentDrafts`.
     * @param docEntry Key property. See [[PaymentDrafts.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentDrafts`.
     */
    delete(docEntry: number): DeleteRequestBuilder<PaymentDrafts>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentDrafts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentDrafts` by taking the entity as a parameter.
     */
    delete(entity: PaymentDrafts): DeleteRequestBuilder<PaymentDrafts>;
}
//# sourceMappingURL=PaymentDraftsRequestBuilder.d.ts.map