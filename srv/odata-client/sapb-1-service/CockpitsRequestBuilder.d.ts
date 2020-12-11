import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Cockpits } from './Cockpits';
/**
 * Request builder class for operations supported on the [[Cockpits]] entity.
 */
export declare class CockpitsRequestBuilder extends RequestBuilder<Cockpits> {
    /**
     * Returns a request builder for retrieving one `Cockpits` entity based on its keys.
     * @param absEntry Key property. See [[Cockpits.absEntry]].
     * @returns A request builder for creating requests to retrieve one `Cockpits` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilderV4<Cockpits>;
    /**
     * Returns a request builder for querying all `Cockpits` entities.
     * @returns A request builder for creating requests to retrieve all `Cockpits` entities.
     */
    getAll(): GetAllRequestBuilderV4<Cockpits>;
    /**
     * Returns a request builder for creating a `Cockpits` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Cockpits`.
     */
    create(entity: Cockpits): CreateRequestBuilderV4<Cockpits>;
    /**
     * Returns a request builder for updating an entity of type `Cockpits`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Cockpits`.
     */
    update(entity: Cockpits): UpdateRequestBuilderV4<Cockpits>;
    /**
     * Returns a request builder for deleting an entity of type `Cockpits`.
     * @param absEntry Key property. See [[Cockpits.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `Cockpits`.
     */
    delete(absEntry: number): DeleteRequestBuilderV4<Cockpits>;
    /**
     * Returns a request builder for deleting an entity of type `Cockpits`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Cockpits` by taking the entity as a parameter.
     */
    delete(entity: Cockpits): DeleteRequestBuilderV4<Cockpits>;
}
//# sourceMappingURL=CockpitsRequestBuilder.d.ts.map