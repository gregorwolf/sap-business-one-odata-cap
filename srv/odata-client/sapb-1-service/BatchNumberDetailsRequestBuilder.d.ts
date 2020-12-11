import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BatchNumberDetails } from './BatchNumberDetails';
/**
 * Request builder class for operations supported on the [[BatchNumberDetails]] entity.
 */
export declare class BatchNumberDetailsRequestBuilder extends RequestBuilder<BatchNumberDetails> {
    /**
     * Returns a request builder for retrieving one `BatchNumberDetails` entity based on its keys.
     * @param docEntry Key property. See [[BatchNumberDetails.docEntry]].
     * @returns A request builder for creating requests to retrieve one `BatchNumberDetails` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<BatchNumberDetails>;
    /**
     * Returns a request builder for querying all `BatchNumberDetails` entities.
     * @returns A request builder for creating requests to retrieve all `BatchNumberDetails` entities.
     */
    getAll(): GetAllRequestBuilderV4<BatchNumberDetails>;
    /**
     * Returns a request builder for creating a `BatchNumberDetails` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BatchNumberDetails`.
     */
    create(entity: BatchNumberDetails): CreateRequestBuilderV4<BatchNumberDetails>;
    /**
     * Returns a request builder for updating an entity of type `BatchNumberDetails`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BatchNumberDetails`.
     */
    update(entity: BatchNumberDetails): UpdateRequestBuilderV4<BatchNumberDetails>;
    /**
     * Returns a request builder for deleting an entity of type `BatchNumberDetails`.
     * @param docEntry Key property. See [[BatchNumberDetails.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `BatchNumberDetails`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<BatchNumberDetails>;
    /**
     * Returns a request builder for deleting an entity of type `BatchNumberDetails`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BatchNumberDetails` by taking the entity as a parameter.
     */
    delete(entity: BatchNumberDetails): DeleteRequestBuilderV4<BatchNumberDetails>;
}
//# sourceMappingURL=BatchNumberDetailsRequestBuilder.d.ts.map