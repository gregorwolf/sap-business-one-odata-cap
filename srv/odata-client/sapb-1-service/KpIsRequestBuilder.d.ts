import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { KpIs } from './KpIs';
/**
 * Request builder class for operations supported on the [[KpIs]] entity.
 */
export declare class KpIsRequestBuilder extends RequestBuilder<KpIs> {
    /**
     * Returns a request builder for retrieving one `KpIs` entity based on its keys.
     * @param kpiCode Key property. See [[KpIs.kpiCode]].
     * @returns A request builder for creating requests to retrieve one `KpIs` entity based on its keys.
     */
    getByKey(kpiCode: string): GetByKeyRequestBuilderV4<KpIs>;
    /**
     * Returns a request builder for querying all `KpIs` entities.
     * @returns A request builder for creating requests to retrieve all `KpIs` entities.
     */
    getAll(): GetAllRequestBuilderV4<KpIs>;
    /**
     * Returns a request builder for creating a `KpIs` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `KpIs`.
     */
    create(entity: KpIs): CreateRequestBuilderV4<KpIs>;
    /**
     * Returns a request builder for updating an entity of type `KpIs`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `KpIs`.
     */
    update(entity: KpIs): UpdateRequestBuilderV4<KpIs>;
    /**
     * Returns a request builder for deleting an entity of type `KpIs`.
     * @param kpiCode Key property. See [[KpIs.kpiCode]].
     * @returns A request builder for creating requests that delete an entity of type `KpIs`.
     */
    delete(kpiCode: string): DeleteRequestBuilderV4<KpIs>;
    /**
     * Returns a request builder for deleting an entity of type `KpIs`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `KpIs` by taking the entity as a parameter.
     */
    delete(entity: KpIs): DeleteRequestBuilderV4<KpIs>;
}
//# sourceMappingURL=KpIsRequestBuilder.d.ts.map