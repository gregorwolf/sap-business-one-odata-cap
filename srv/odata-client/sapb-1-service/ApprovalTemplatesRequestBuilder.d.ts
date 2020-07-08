import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ApprovalTemplates } from './ApprovalTemplates';
/**
 * Request builder class for operations supported on the [[ApprovalTemplates]] entity.
 */
export declare class ApprovalTemplatesRequestBuilder extends RequestBuilder<ApprovalTemplates> {
    /**
     * Returns a request builder for retrieving one `ApprovalTemplates` entity based on its keys.
     * @param code Key property. See [[ApprovalTemplates.code]].
     * @returns A request builder for creating requests to retrieve one `ApprovalTemplates` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilder<ApprovalTemplates>;
    /**
     * Returns a request builder for querying all `ApprovalTemplates` entities.
     * @returns A request builder for creating requests to retrieve all `ApprovalTemplates` entities.
     */
    getAll(): GetAllRequestBuilder<ApprovalTemplates>;
    /**
     * Returns a request builder for creating a `ApprovalTemplates` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ApprovalTemplates`.
     */
    create(entity: ApprovalTemplates): CreateRequestBuilder<ApprovalTemplates>;
    /**
     * Returns a request builder for updating an entity of type `ApprovalTemplates`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ApprovalTemplates`.
     */
    update(entity: ApprovalTemplates): UpdateRequestBuilder<ApprovalTemplates>;
    /**
     * Returns a request builder for deleting an entity of type `ApprovalTemplates`.
     * @param code Key property. See [[ApprovalTemplates.code]].
     * @returns A request builder for creating requests that delete an entity of type `ApprovalTemplates`.
     */
    delete(code: number): DeleteRequestBuilder<ApprovalTemplates>;
    /**
     * Returns a request builder for deleting an entity of type `ApprovalTemplates`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ApprovalTemplates` by taking the entity as a parameter.
     */
    delete(entity: ApprovalTemplates): DeleteRequestBuilder<ApprovalTemplates>;
}
//# sourceMappingURL=ApprovalTemplatesRequestBuilder.d.ts.map