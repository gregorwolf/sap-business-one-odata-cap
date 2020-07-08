import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Relationships } from './Relationships';
/**
 * Request builder class for operations supported on the [[Relationships]] entity.
 */
export declare class RelationshipsRequestBuilder extends RequestBuilder<Relationships> {
    /**
     * Returns a request builder for retrieving one `Relationships` entity based on its keys.
     * @param relationshipCode Key property. See [[Relationships.relationshipCode]].
     * @returns A request builder for creating requests to retrieve one `Relationships` entity based on its keys.
     */
    getByKey(relationshipCode: number): GetByKeyRequestBuilder<Relationships>;
    /**
     * Returns a request builder for querying all `Relationships` entities.
     * @returns A request builder for creating requests to retrieve all `Relationships` entities.
     */
    getAll(): GetAllRequestBuilder<Relationships>;
    /**
     * Returns a request builder for creating a `Relationships` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Relationships`.
     */
    create(entity: Relationships): CreateRequestBuilder<Relationships>;
    /**
     * Returns a request builder for updating an entity of type `Relationships`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Relationships`.
     */
    update(entity: Relationships): UpdateRequestBuilder<Relationships>;
    /**
     * Returns a request builder for deleting an entity of type `Relationships`.
     * @param relationshipCode Key property. See [[Relationships.relationshipCode]].
     * @returns A request builder for creating requests that delete an entity of type `Relationships`.
     */
    delete(relationshipCode: number): DeleteRequestBuilder<Relationships>;
    /**
     * Returns a request builder for deleting an entity of type `Relationships`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Relationships` by taking the entity as a parameter.
     */
    delete(entity: Relationships): DeleteRequestBuilder<Relationships>;
}
//# sourceMappingURL=RelationshipsRequestBuilder.d.ts.map