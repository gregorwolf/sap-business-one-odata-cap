import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { TerminationReason } from './TerminationReason';
/**
 * Request builder class for operations supported on the [[TerminationReason]] entity.
 */
export declare class TerminationReasonRequestBuilder extends RequestBuilder<TerminationReason> {
    /**
     * Returns a request builder for retrieving one `TerminationReason` entity based on its keys.
     * @param reasonId Key property. See [[TerminationReason.reasonId]].
     * @returns A request builder for creating requests to retrieve one `TerminationReason` entity based on its keys.
     */
    getByKey(reasonId: number): GetByKeyRequestBuilderV4<TerminationReason>;
    /**
     * Returns a request builder for querying all `TerminationReason` entities.
     * @returns A request builder for creating requests to retrieve all `TerminationReason` entities.
     */
    getAll(): GetAllRequestBuilderV4<TerminationReason>;
    /**
     * Returns a request builder for creating a `TerminationReason` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TerminationReason`.
     */
    create(entity: TerminationReason): CreateRequestBuilderV4<TerminationReason>;
    /**
     * Returns a request builder for updating an entity of type `TerminationReason`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TerminationReason`.
     */
    update(entity: TerminationReason): UpdateRequestBuilderV4<TerminationReason>;
    /**
     * Returns a request builder for deleting an entity of type `TerminationReason`.
     * @param reasonId Key property. See [[TerminationReason.reasonId]].
     * @returns A request builder for creating requests that delete an entity of type `TerminationReason`.
     */
    delete(reasonId: number): DeleteRequestBuilderV4<TerminationReason>;
    /**
     * Returns a request builder for deleting an entity of type `TerminationReason`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TerminationReason` by taking the entity as a parameter.
     */
    delete(entity: TerminationReason): DeleteRequestBuilderV4<TerminationReason>;
}
//# sourceMappingURL=TerminationReasonRequestBuilder.d.ts.map