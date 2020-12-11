import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Teams } from './Teams';
/**
 * Request builder class for operations supported on the [[Teams]] entity.
 */
export declare class TeamsRequestBuilder extends RequestBuilder<Teams> {
    /**
     * Returns a request builder for retrieving one `Teams` entity based on its keys.
     * @param teamId Key property. See [[Teams.teamId]].
     * @returns A request builder for creating requests to retrieve one `Teams` entity based on its keys.
     */
    getByKey(teamId: number): GetByKeyRequestBuilderV4<Teams>;
    /**
     * Returns a request builder for querying all `Teams` entities.
     * @returns A request builder for creating requests to retrieve all `Teams` entities.
     */
    getAll(): GetAllRequestBuilderV4<Teams>;
    /**
     * Returns a request builder for creating a `Teams` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Teams`.
     */
    create(entity: Teams): CreateRequestBuilderV4<Teams>;
    /**
     * Returns a request builder for updating an entity of type `Teams`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Teams`.
     */
    update(entity: Teams): UpdateRequestBuilderV4<Teams>;
    /**
     * Returns a request builder for deleting an entity of type `Teams`.
     * @param teamId Key property. See [[Teams.teamId]].
     * @returns A request builder for creating requests that delete an entity of type `Teams`.
     */
    delete(teamId: number): DeleteRequestBuilderV4<Teams>;
    /**
     * Returns a request builder for deleting an entity of type `Teams`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Teams` by taking the entity as a parameter.
     */
    delete(entity: Teams): DeleteRequestBuilderV4<Teams>;
}
//# sourceMappingURL=TeamsRequestBuilder.d.ts.map