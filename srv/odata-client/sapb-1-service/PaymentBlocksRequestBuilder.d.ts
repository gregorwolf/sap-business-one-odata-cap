import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PaymentBlocks } from './PaymentBlocks';
/**
 * Request builder class for operations supported on the [[PaymentBlocks]] entity.
 */
export declare class PaymentBlocksRequestBuilder extends RequestBuilder<PaymentBlocks> {
    /**
     * Returns a request builder for retrieving one `PaymentBlocks` entity based on its keys.
     * @param absEntry Key property. See [[PaymentBlocks.absEntry]].
     * @returns A request builder for creating requests to retrieve one `PaymentBlocks` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilderV4<PaymentBlocks>;
    /**
     * Returns a request builder for querying all `PaymentBlocks` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentBlocks` entities.
     */
    getAll(): GetAllRequestBuilderV4<PaymentBlocks>;
    /**
     * Returns a request builder for creating a `PaymentBlocks` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentBlocks`.
     */
    create(entity: PaymentBlocks): CreateRequestBuilderV4<PaymentBlocks>;
    /**
     * Returns a request builder for updating an entity of type `PaymentBlocks`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentBlocks`.
     */
    update(entity: PaymentBlocks): UpdateRequestBuilderV4<PaymentBlocks>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentBlocks`.
     * @param absEntry Key property. See [[PaymentBlocks.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentBlocks`.
     */
    delete(absEntry: number): DeleteRequestBuilderV4<PaymentBlocks>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentBlocks`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentBlocks` by taking the entity as a parameter.
     */
    delete(entity: PaymentBlocks): DeleteRequestBuilderV4<PaymentBlocks>;
}
//# sourceMappingURL=PaymentBlocksRequestBuilder.d.ts.map