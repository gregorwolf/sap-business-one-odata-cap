import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ReturnRequest } from './ReturnRequest';
/**
 * Request builder class for operations supported on the [[ReturnRequest]] entity.
 */
export declare class ReturnRequestRequestBuilder extends RequestBuilder<ReturnRequest> {
    /**
     * Returns a request builder for retrieving one `ReturnRequest` entity based on its keys.
     * @param docEntry Key property. See [[ReturnRequest.docEntry]].
     * @returns A request builder for creating requests to retrieve one `ReturnRequest` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<ReturnRequest>;
    /**
     * Returns a request builder for querying all `ReturnRequest` entities.
     * @returns A request builder for creating requests to retrieve all `ReturnRequest` entities.
     */
    getAll(): GetAllRequestBuilderV4<ReturnRequest>;
    /**
     * Returns a request builder for creating a `ReturnRequest` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ReturnRequest`.
     */
    create(entity: ReturnRequest): CreateRequestBuilderV4<ReturnRequest>;
    /**
     * Returns a request builder for updating an entity of type `ReturnRequest`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ReturnRequest`.
     */
    update(entity: ReturnRequest): UpdateRequestBuilderV4<ReturnRequest>;
    /**
     * Returns a request builder for deleting an entity of type `ReturnRequest`.
     * @param docEntry Key property. See [[ReturnRequest.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `ReturnRequest`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<ReturnRequest>;
    /**
     * Returns a request builder for deleting an entity of type `ReturnRequest`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ReturnRequest` by taking the entity as a parameter.
     */
    delete(entity: ReturnRequest): DeleteRequestBuilderV4<ReturnRequest>;
}
//# sourceMappingURL=ReturnRequestRequestBuilder.d.ts.map