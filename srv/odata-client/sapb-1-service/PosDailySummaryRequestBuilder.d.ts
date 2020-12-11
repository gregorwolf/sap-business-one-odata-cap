import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PosDailySummary } from './PosDailySummary';
/**
 * Request builder class for operations supported on the [[PosDailySummary]] entity.
 */
export declare class PosDailySummaryRequestBuilder extends RequestBuilder<PosDailySummary> {
    /**
     * Returns a request builder for retrieving one `PosDailySummary` entity based on its keys.
     * @param absEntry Key property. See [[PosDailySummary.absEntry]].
     * @returns A request builder for creating requests to retrieve one `PosDailySummary` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilderV4<PosDailySummary>;
    /**
     * Returns a request builder for querying all `PosDailySummary` entities.
     * @returns A request builder for creating requests to retrieve all `PosDailySummary` entities.
     */
    getAll(): GetAllRequestBuilderV4<PosDailySummary>;
    /**
     * Returns a request builder for creating a `PosDailySummary` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PosDailySummary`.
     */
    create(entity: PosDailySummary): CreateRequestBuilderV4<PosDailySummary>;
    /**
     * Returns a request builder for updating an entity of type `PosDailySummary`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PosDailySummary`.
     */
    update(entity: PosDailySummary): UpdateRequestBuilderV4<PosDailySummary>;
    /**
     * Returns a request builder for deleting an entity of type `PosDailySummary`.
     * @param absEntry Key property. See [[PosDailySummary.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `PosDailySummary`.
     */
    delete(absEntry: number): DeleteRequestBuilderV4<PosDailySummary>;
    /**
     * Returns a request builder for deleting an entity of type `PosDailySummary`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PosDailySummary` by taking the entity as a parameter.
     */
    delete(entity: PosDailySummary): DeleteRequestBuilderV4<PosDailySummary>;
}
//# sourceMappingURL=PosDailySummaryRequestBuilder.d.ts.map