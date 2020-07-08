import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { InternalReconciliations } from './InternalReconciliations';
/**
 * Request builder class for operations supported on the [[InternalReconciliations]] entity.
 */
export declare class InternalReconciliationsRequestBuilder extends RequestBuilder<InternalReconciliations> {
    /**
     * Returns a request builder for retrieving one `InternalReconciliations` entity based on its keys.
     * @param reconNum Key property. See [[InternalReconciliations.reconNum]].
     * @returns A request builder for creating requests to retrieve one `InternalReconciliations` entity based on its keys.
     */
    getByKey(reconNum: number): GetByKeyRequestBuilder<InternalReconciliations>;
    /**
     * Returns a request builder for querying all `InternalReconciliations` entities.
     * @returns A request builder for creating requests to retrieve all `InternalReconciliations` entities.
     */
    getAll(): GetAllRequestBuilder<InternalReconciliations>;
    /**
     * Returns a request builder for creating a `InternalReconciliations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InternalReconciliations`.
     */
    create(entity: InternalReconciliations): CreateRequestBuilder<InternalReconciliations>;
    /**
     * Returns a request builder for updating an entity of type `InternalReconciliations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InternalReconciliations`.
     */
    update(entity: InternalReconciliations): UpdateRequestBuilder<InternalReconciliations>;
    /**
     * Returns a request builder for deleting an entity of type `InternalReconciliations`.
     * @param reconNum Key property. See [[InternalReconciliations.reconNum]].
     * @returns A request builder for creating requests that delete an entity of type `InternalReconciliations`.
     */
    delete(reconNum: number): DeleteRequestBuilder<InternalReconciliations>;
    /**
     * Returns a request builder for deleting an entity of type `InternalReconciliations`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InternalReconciliations` by taking the entity as a parameter.
     */
    delete(entity: InternalReconciliations): DeleteRequestBuilder<InternalReconciliations>;
}
//# sourceMappingURL=InternalReconciliationsRequestBuilder.d.ts.map