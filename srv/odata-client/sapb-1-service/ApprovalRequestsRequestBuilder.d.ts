import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ApprovalRequests } from './ApprovalRequests';
/**
 * Request builder class for operations supported on the [[ApprovalRequests]] entity.
 */
export declare class ApprovalRequestsRequestBuilder extends RequestBuilder<ApprovalRequests> {
    /**
     * Returns a request builder for retrieving one `ApprovalRequests` entity based on its keys.
     * @param code Key property. See [[ApprovalRequests.code]].
     * @returns A request builder for creating requests to retrieve one `ApprovalRequests` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilderV4<ApprovalRequests>;
    /**
     * Returns a request builder for querying all `ApprovalRequests` entities.
     * @returns A request builder for creating requests to retrieve all `ApprovalRequests` entities.
     */
    getAll(): GetAllRequestBuilderV4<ApprovalRequests>;
    /**
     * Returns a request builder for creating a `ApprovalRequests` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ApprovalRequests`.
     */
    create(entity: ApprovalRequests): CreateRequestBuilderV4<ApprovalRequests>;
    /**
     * Returns a request builder for updating an entity of type `ApprovalRequests`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ApprovalRequests`.
     */
    update(entity: ApprovalRequests): UpdateRequestBuilderV4<ApprovalRequests>;
    /**
     * Returns a request builder for deleting an entity of type `ApprovalRequests`.
     * @param code Key property. See [[ApprovalRequests.code]].
     * @returns A request builder for creating requests that delete an entity of type `ApprovalRequests`.
     */
    delete(code: number): DeleteRequestBuilderV4<ApprovalRequests>;
    /**
     * Returns a request builder for deleting an entity of type `ApprovalRequests`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ApprovalRequests` by taking the entity as a parameter.
     */
    delete(entity: ApprovalRequests): DeleteRequestBuilderV4<ApprovalRequests>;
}
//# sourceMappingURL=ApprovalRequestsRequestBuilder.d.ts.map