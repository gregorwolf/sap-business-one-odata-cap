import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ProfitCenters } from './ProfitCenters';
/**
 * Request builder class for operations supported on the [[ProfitCenters]] entity.
 */
export declare class ProfitCentersRequestBuilder extends RequestBuilder<ProfitCenters> {
    /**
     * Returns a request builder for retrieving one `ProfitCenters` entity based on its keys.
     * @param centerCode Key property. See [[ProfitCenters.centerCode]].
     * @returns A request builder for creating requests to retrieve one `ProfitCenters` entity based on its keys.
     */
    getByKey(centerCode: string): GetByKeyRequestBuilderV4<ProfitCenters>;
    /**
     * Returns a request builder for querying all `ProfitCenters` entities.
     * @returns A request builder for creating requests to retrieve all `ProfitCenters` entities.
     */
    getAll(): GetAllRequestBuilderV4<ProfitCenters>;
    /**
     * Returns a request builder for creating a `ProfitCenters` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProfitCenters`.
     */
    create(entity: ProfitCenters): CreateRequestBuilderV4<ProfitCenters>;
    /**
     * Returns a request builder for updating an entity of type `ProfitCenters`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProfitCenters`.
     */
    update(entity: ProfitCenters): UpdateRequestBuilderV4<ProfitCenters>;
    /**
     * Returns a request builder for deleting an entity of type `ProfitCenters`.
     * @param centerCode Key property. See [[ProfitCenters.centerCode]].
     * @returns A request builder for creating requests that delete an entity of type `ProfitCenters`.
     */
    delete(centerCode: string): DeleteRequestBuilderV4<ProfitCenters>;
    /**
     * Returns a request builder for deleting an entity of type `ProfitCenters`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ProfitCenters` by taking the entity as a parameter.
     */
    delete(entity: ProfitCenters): DeleteRequestBuilderV4<ProfitCenters>;
}
//# sourceMappingURL=ProfitCentersRequestBuilder.d.ts.map