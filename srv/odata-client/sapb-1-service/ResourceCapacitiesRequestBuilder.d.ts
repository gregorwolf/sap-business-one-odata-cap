import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ResourceCapacities } from './ResourceCapacities';
/**
 * Request builder class for operations supported on the [[ResourceCapacities]] entity.
 */
export declare class ResourceCapacitiesRequestBuilder extends RequestBuilder<ResourceCapacities> {
    /**
     * Returns a request builder for retrieving one `ResourceCapacities` entity based on its keys.
     * @param id Key property. See [[ResourceCapacities.id]].
     * @returns A request builder for creating requests to retrieve one `ResourceCapacities` entity based on its keys.
     */
    getByKey(id: number): GetByKeyRequestBuilderV4<ResourceCapacities>;
    /**
     * Returns a request builder for querying all `ResourceCapacities` entities.
     * @returns A request builder for creating requests to retrieve all `ResourceCapacities` entities.
     */
    getAll(): GetAllRequestBuilderV4<ResourceCapacities>;
    /**
     * Returns a request builder for creating a `ResourceCapacities` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ResourceCapacities`.
     */
    create(entity: ResourceCapacities): CreateRequestBuilderV4<ResourceCapacities>;
    /**
     * Returns a request builder for updating an entity of type `ResourceCapacities`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ResourceCapacities`.
     */
    update(entity: ResourceCapacities): UpdateRequestBuilderV4<ResourceCapacities>;
    /**
     * Returns a request builder for deleting an entity of type `ResourceCapacities`.
     * @param id Key property. See [[ResourceCapacities.id]].
     * @returns A request builder for creating requests that delete an entity of type `ResourceCapacities`.
     */
    delete(id: number): DeleteRequestBuilderV4<ResourceCapacities>;
    /**
     * Returns a request builder for deleting an entity of type `ResourceCapacities`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ResourceCapacities` by taking the entity as a parameter.
     */
    delete(entity: ResourceCapacities): DeleteRequestBuilderV4<ResourceCapacities>;
}
//# sourceMappingURL=ResourceCapacitiesRequestBuilder.d.ts.map