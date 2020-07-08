import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BpPriorities } from './BpPriorities';
/**
 * Request builder class for operations supported on the [[BpPriorities]] entity.
 */
export declare class BpPrioritiesRequestBuilder extends RequestBuilder<BpPriorities> {
    /**
     * Returns a request builder for retrieving one `BpPriorities` entity based on its keys.
     * @param priority Key property. See [[BpPriorities.priority]].
     * @returns A request builder for creating requests to retrieve one `BpPriorities` entity based on its keys.
     */
    getByKey(priority: number): GetByKeyRequestBuilder<BpPriorities>;
    /**
     * Returns a request builder for querying all `BpPriorities` entities.
     * @returns A request builder for creating requests to retrieve all `BpPriorities` entities.
     */
    getAll(): GetAllRequestBuilder<BpPriorities>;
    /**
     * Returns a request builder for creating a `BpPriorities` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpPriorities`.
     */
    create(entity: BpPriorities): CreateRequestBuilder<BpPriorities>;
    /**
     * Returns a request builder for updating an entity of type `BpPriorities`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpPriorities`.
     */
    update(entity: BpPriorities): UpdateRequestBuilder<BpPriorities>;
    /**
     * Returns a request builder for deleting an entity of type `BpPriorities`.
     * @param priority Key property. See [[BpPriorities.priority]].
     * @returns A request builder for creating requests that delete an entity of type `BpPriorities`.
     */
    delete(priority: number): DeleteRequestBuilder<BpPriorities>;
    /**
     * Returns a request builder for deleting an entity of type `BpPriorities`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BpPriorities` by taking the entity as a parameter.
     */
    delete(entity: BpPriorities): DeleteRequestBuilder<BpPriorities>;
}
//# sourceMappingURL=BpPrioritiesRequestBuilder.d.ts.map