import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { KnowledgeBaseSolutions } from './KnowledgeBaseSolutions';
/**
 * Request builder class for operations supported on the [[KnowledgeBaseSolutions]] entity.
 */
export declare class KnowledgeBaseSolutionsRequestBuilder extends RequestBuilder<KnowledgeBaseSolutions> {
    /**
     * Returns a request builder for retrieving one `KnowledgeBaseSolutions` entity based on its keys.
     * @param solutionCode Key property. See [[KnowledgeBaseSolutions.solutionCode]].
     * @returns A request builder for creating requests to retrieve one `KnowledgeBaseSolutions` entity based on its keys.
     */
    getByKey(solutionCode: number): GetByKeyRequestBuilderV4<KnowledgeBaseSolutions>;
    /**
     * Returns a request builder for querying all `KnowledgeBaseSolutions` entities.
     * @returns A request builder for creating requests to retrieve all `KnowledgeBaseSolutions` entities.
     */
    getAll(): GetAllRequestBuilderV4<KnowledgeBaseSolutions>;
    /**
     * Returns a request builder for creating a `KnowledgeBaseSolutions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `KnowledgeBaseSolutions`.
     */
    create(entity: KnowledgeBaseSolutions): CreateRequestBuilderV4<KnowledgeBaseSolutions>;
    /**
     * Returns a request builder for updating an entity of type `KnowledgeBaseSolutions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `KnowledgeBaseSolutions`.
     */
    update(entity: KnowledgeBaseSolutions): UpdateRequestBuilderV4<KnowledgeBaseSolutions>;
    /**
     * Returns a request builder for deleting an entity of type `KnowledgeBaseSolutions`.
     * @param solutionCode Key property. See [[KnowledgeBaseSolutions.solutionCode]].
     * @returns A request builder for creating requests that delete an entity of type `KnowledgeBaseSolutions`.
     */
    delete(solutionCode: number): DeleteRequestBuilderV4<KnowledgeBaseSolutions>;
    /**
     * Returns a request builder for deleting an entity of type `KnowledgeBaseSolutions`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `KnowledgeBaseSolutions` by taking the entity as a parameter.
     */
    delete(entity: KnowledgeBaseSolutions): DeleteRequestBuilderV4<KnowledgeBaseSolutions>;
}
//# sourceMappingURL=KnowledgeBaseSolutionsRequestBuilder.d.ts.map