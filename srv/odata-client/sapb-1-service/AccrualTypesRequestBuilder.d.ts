import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { AccrualTypes } from './AccrualTypes';
/**
 * Request builder class for operations supported on the [[AccrualTypes]] entity.
 */
export declare class AccrualTypesRequestBuilder extends RequestBuilder<AccrualTypes> {
    /**
     * Returns a request builder for retrieving one `AccrualTypes` entity based on its keys.
     * @param code Key property. See [[AccrualTypes.code]].
     * @returns A request builder for creating requests to retrieve one `AccrualTypes` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilder<AccrualTypes>;
    /**
     * Returns a request builder for querying all `AccrualTypes` entities.
     * @returns A request builder for creating requests to retrieve all `AccrualTypes` entities.
     */
    getAll(): GetAllRequestBuilder<AccrualTypes>;
    /**
     * Returns a request builder for creating a `AccrualTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AccrualTypes`.
     */
    create(entity: AccrualTypes): CreateRequestBuilder<AccrualTypes>;
    /**
     * Returns a request builder for updating an entity of type `AccrualTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AccrualTypes`.
     */
    update(entity: AccrualTypes): UpdateRequestBuilder<AccrualTypes>;
    /**
     * Returns a request builder for deleting an entity of type `AccrualTypes`.
     * @param code Key property. See [[AccrualTypes.code]].
     * @returns A request builder for creating requests that delete an entity of type `AccrualTypes`.
     */
    delete(code: string): DeleteRequestBuilder<AccrualTypes>;
    /**
     * Returns a request builder for deleting an entity of type `AccrualTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AccrualTypes` by taking the entity as a parameter.
     */
    delete(entity: AccrualTypes): DeleteRequestBuilder<AccrualTypes>;
}
//# sourceMappingURL=AccrualTypesRequestBuilder.d.ts.map