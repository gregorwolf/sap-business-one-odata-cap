import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { CycleCountDeterminations } from './CycleCountDeterminations';
/**
 * Request builder class for operations supported on the [[CycleCountDeterminations]] entity.
 */
export declare class CycleCountDeterminationsRequestBuilder extends RequestBuilder<CycleCountDeterminations> {
    /**
     * Returns a request builder for retrieving one `CycleCountDeterminations` entity based on its keys.
     * @param warehouseCode Key property. See [[CycleCountDeterminations.warehouseCode]].
     * @returns A request builder for creating requests to retrieve one `CycleCountDeterminations` entity based on its keys.
     */
    getByKey(warehouseCode: string): GetByKeyRequestBuilderV4<CycleCountDeterminations>;
    /**
     * Returns a request builder for querying all `CycleCountDeterminations` entities.
     * @returns A request builder for creating requests to retrieve all `CycleCountDeterminations` entities.
     */
    getAll(): GetAllRequestBuilderV4<CycleCountDeterminations>;
    /**
     * Returns a request builder for creating a `CycleCountDeterminations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CycleCountDeterminations`.
     */
    create(entity: CycleCountDeterminations): CreateRequestBuilderV4<CycleCountDeterminations>;
    /**
     * Returns a request builder for updating an entity of type `CycleCountDeterminations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CycleCountDeterminations`.
     */
    update(entity: CycleCountDeterminations): UpdateRequestBuilderV4<CycleCountDeterminations>;
    /**
     * Returns a request builder for deleting an entity of type `CycleCountDeterminations`.
     * @param warehouseCode Key property. See [[CycleCountDeterminations.warehouseCode]].
     * @returns A request builder for creating requests that delete an entity of type `CycleCountDeterminations`.
     */
    delete(warehouseCode: string): DeleteRequestBuilderV4<CycleCountDeterminations>;
    /**
     * Returns a request builder for deleting an entity of type `CycleCountDeterminations`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CycleCountDeterminations` by taking the entity as a parameter.
     */
    delete(entity: CycleCountDeterminations): DeleteRequestBuilderV4<CycleCountDeterminations>;
}
//# sourceMappingURL=CycleCountDeterminationsRequestBuilder.d.ts.map