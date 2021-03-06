import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { FaAccountDeterminations } from './FaAccountDeterminations';
/**
 * Request builder class for operations supported on the [[FaAccountDeterminations]] entity.
 */
export declare class FaAccountDeterminationsRequestBuilder extends RequestBuilder<FaAccountDeterminations> {
    /**
     * Returns a request builder for retrieving one `FaAccountDeterminations` entity based on its keys.
     * @param code Key property. See [[FaAccountDeterminations.code]].
     * @returns A request builder for creating requests to retrieve one `FaAccountDeterminations` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilderV4<FaAccountDeterminations>;
    /**
     * Returns a request builder for querying all `FaAccountDeterminations` entities.
     * @returns A request builder for creating requests to retrieve all `FaAccountDeterminations` entities.
     */
    getAll(): GetAllRequestBuilderV4<FaAccountDeterminations>;
    /**
     * Returns a request builder for creating a `FaAccountDeterminations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FaAccountDeterminations`.
     */
    create(entity: FaAccountDeterminations): CreateRequestBuilderV4<FaAccountDeterminations>;
    /**
     * Returns a request builder for updating an entity of type `FaAccountDeterminations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FaAccountDeterminations`.
     */
    update(entity: FaAccountDeterminations): UpdateRequestBuilderV4<FaAccountDeterminations>;
    /**
     * Returns a request builder for deleting an entity of type `FaAccountDeterminations`.
     * @param code Key property. See [[FaAccountDeterminations.code]].
     * @returns A request builder for creating requests that delete an entity of type `FaAccountDeterminations`.
     */
    delete(code: string): DeleteRequestBuilderV4<FaAccountDeterminations>;
    /**
     * Returns a request builder for deleting an entity of type `FaAccountDeterminations`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FaAccountDeterminations` by taking the entity as a parameter.
     */
    delete(entity: FaAccountDeterminations): DeleteRequestBuilderV4<FaAccountDeterminations>;
}
//# sourceMappingURL=FaAccountDeterminationsRequestBuilder.d.ts.map