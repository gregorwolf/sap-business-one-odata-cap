import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { TaxCodeDeterminations } from './TaxCodeDeterminations';
/**
 * Request builder class for operations supported on the [[TaxCodeDeterminations]] entity.
 */
export declare class TaxCodeDeterminationsRequestBuilder extends RequestBuilder<TaxCodeDeterminations> {
    /**
     * Returns a request builder for retrieving one `TaxCodeDeterminations` entity based on its keys.
     * @param docEntry Key property. See [[TaxCodeDeterminations.docEntry]].
     * @returns A request builder for creating requests to retrieve one `TaxCodeDeterminations` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<TaxCodeDeterminations>;
    /**
     * Returns a request builder for querying all `TaxCodeDeterminations` entities.
     * @returns A request builder for creating requests to retrieve all `TaxCodeDeterminations` entities.
     */
    getAll(): GetAllRequestBuilderV4<TaxCodeDeterminations>;
    /**
     * Returns a request builder for creating a `TaxCodeDeterminations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TaxCodeDeterminations`.
     */
    create(entity: TaxCodeDeterminations): CreateRequestBuilderV4<TaxCodeDeterminations>;
    /**
     * Returns a request builder for updating an entity of type `TaxCodeDeterminations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TaxCodeDeterminations`.
     */
    update(entity: TaxCodeDeterminations): UpdateRequestBuilderV4<TaxCodeDeterminations>;
    /**
     * Returns a request builder for deleting an entity of type `TaxCodeDeterminations`.
     * @param docEntry Key property. See [[TaxCodeDeterminations.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `TaxCodeDeterminations`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<TaxCodeDeterminations>;
    /**
     * Returns a request builder for deleting an entity of type `TaxCodeDeterminations`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TaxCodeDeterminations` by taking the entity as a parameter.
     */
    delete(entity: TaxCodeDeterminations): DeleteRequestBuilderV4<TaxCodeDeterminations>;
}
//# sourceMappingURL=TaxCodeDeterminationsRequestBuilder.d.ts.map