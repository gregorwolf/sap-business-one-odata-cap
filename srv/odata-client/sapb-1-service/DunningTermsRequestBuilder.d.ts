import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { DunningTerms } from './DunningTerms';
/**
 * Request builder class for operations supported on the [[DunningTerms]] entity.
 */
export declare class DunningTermsRequestBuilder extends RequestBuilder<DunningTerms> {
    /**
     * Returns a request builder for retrieving one `DunningTerms` entity based on its keys.
     * @param code Key property. See [[DunningTerms.code]].
     * @returns A request builder for creating requests to retrieve one `DunningTerms` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilderV4<DunningTerms>;
    /**
     * Returns a request builder for querying all `DunningTerms` entities.
     * @returns A request builder for creating requests to retrieve all `DunningTerms` entities.
     */
    getAll(): GetAllRequestBuilderV4<DunningTerms>;
    /**
     * Returns a request builder for creating a `DunningTerms` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DunningTerms`.
     */
    create(entity: DunningTerms): CreateRequestBuilderV4<DunningTerms>;
    /**
     * Returns a request builder for updating an entity of type `DunningTerms`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DunningTerms`.
     */
    update(entity: DunningTerms): UpdateRequestBuilderV4<DunningTerms>;
    /**
     * Returns a request builder for deleting an entity of type `DunningTerms`.
     * @param code Key property. See [[DunningTerms.code]].
     * @returns A request builder for creating requests that delete an entity of type `DunningTerms`.
     */
    delete(code: string): DeleteRequestBuilderV4<DunningTerms>;
    /**
     * Returns a request builder for deleting an entity of type `DunningTerms`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `DunningTerms` by taking the entity as a parameter.
     */
    delete(entity: DunningTerms): DeleteRequestBuilderV4<DunningTerms>;
}
//# sourceMappingURL=DunningTermsRequestBuilder.d.ts.map