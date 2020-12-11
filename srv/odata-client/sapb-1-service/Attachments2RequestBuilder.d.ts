import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Attachments2 } from './Attachments2';
/**
 * Request builder class for operations supported on the [[Attachments2]] entity.
 */
export declare class Attachments2RequestBuilder extends RequestBuilder<Attachments2> {
    /**
     * Returns a request builder for retrieving one `Attachments2` entity based on its keys.
     * @param absoluteEntry Key property. See [[Attachments2.absoluteEntry]].
     * @returns A request builder for creating requests to retrieve one `Attachments2` entity based on its keys.
     */
    getByKey(absoluteEntry: number): GetByKeyRequestBuilderV4<Attachments2>;
    /**
     * Returns a request builder for querying all `Attachments2` entities.
     * @returns A request builder for creating requests to retrieve all `Attachments2` entities.
     */
    getAll(): GetAllRequestBuilderV4<Attachments2>;
    /**
     * Returns a request builder for creating a `Attachments2` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Attachments2`.
     */
    create(entity: Attachments2): CreateRequestBuilderV4<Attachments2>;
    /**
     * Returns a request builder for updating an entity of type `Attachments2`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Attachments2`.
     */
    update(entity: Attachments2): UpdateRequestBuilderV4<Attachments2>;
    /**
     * Returns a request builder for deleting an entity of type `Attachments2`.
     * @param absoluteEntry Key property. See [[Attachments2.absoluteEntry]].
     * @returns A request builder for creating requests that delete an entity of type `Attachments2`.
     */
    delete(absoluteEntry: number): DeleteRequestBuilderV4<Attachments2>;
    /**
     * Returns a request builder for deleting an entity of type `Attachments2`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Attachments2` by taking the entity as a parameter.
     */
    delete(entity: Attachments2): DeleteRequestBuilderV4<Attachments2>;
}
//# sourceMappingURL=Attachments2RequestBuilder.d.ts.map