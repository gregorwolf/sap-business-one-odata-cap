import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<PaymentDrafts>;
    /**
     * Returns a request builder for querying all `PaymentDrafts` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentDrafts` entities.
     */
    getAll(): GetAllRequestBuilderV4<PaymentDrafts>;
    /**
     * Returns a request builder for creating a `PaymentDrafts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentDrafts`.
     */
    create(entity: PaymentDrafts): CreateRequestBuilderV4<PaymentDrafts>;
    /**
     * Returns a request builder for updating an entity of type `PaymentDrafts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentDrafts`.
     */
    update(entity: PaymentDrafts): UpdateRequestBuilderV4<PaymentDrafts>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentDrafts`.
     * @param docEntry Key property. See [[PaymentDrafts.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentDrafts`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<PaymentDrafts>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentDrafts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentDrafts` by taking the entity as a parameter.
     */
    delete(entity: PaymentDrafts): DeleteRequestBuilderV4<PaymentDrafts>;
}
//# sourceMappingURL=PaymentDraftsRequestBuilder.d.ts.map