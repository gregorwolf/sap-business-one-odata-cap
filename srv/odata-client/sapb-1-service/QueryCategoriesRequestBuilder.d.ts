import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { QueryCategories } from './QueryCategories';
/**
 * Request builder class for operations supported on the [[QueryCategories]] entity.
 */
export declare class QueryCategoriesRequestBuilder extends RequestBuilder<QueryCategories> {
    /**
     * Returns a request builder for retrieving one `QueryCategories` entity based on its keys.
     * @param code Key property. See [[QueryCategories.code]].
     * @returns A request builder for creating requests to retrieve one `QueryCategories` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilderV4<QueryCategories>;
    /**
     * Returns a request builder for querying all `QueryCategories` entities.
     * @returns A request builder for creating requests to retrieve all `QueryCategories` entities.
     */
    getAll(): GetAllRequestBuilderV4<QueryCategories>;
    /**
     * Returns a request builder for creating a `QueryCategories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `QueryCategories`.
     */
    create(entity: QueryCategories): CreateRequestBuilderV4<QueryCategories>;
    /**
     * Returns a request builder for updating an entity of type `QueryCategories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `QueryCategories`.
     */
    update(entity: QueryCategories): UpdateRequestBuilderV4<QueryCategories>;
    /**
     * Returns a request builder for deleting an entity of type `QueryCategories`.
     * @param code Key property. See [[QueryCategories.code]].
     * @returns A request builder for creating requests that delete an entity of type `QueryCategories`.
     */
    delete(code: number): DeleteRequestBuilderV4<QueryCategories>;
    /**
     * Returns a request builder for deleting an entity of type `QueryCategories`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `QueryCategories` by taking the entity as a parameter.
     */
    delete(entity: QueryCategories): DeleteRequestBuilderV4<QueryCategories>;
}
//# sourceMappingURL=QueryCategoriesRequestBuilder.d.ts.map