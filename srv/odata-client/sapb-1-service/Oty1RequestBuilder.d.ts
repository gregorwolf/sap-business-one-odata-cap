import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Oty1 } from './Oty1';
/**
 * Request builder class for operations supported on the [[Oty1]] entity.
 */
export declare class Oty1RequestBuilder extends RequestBuilder<Oty1> {
    /**
     * Returns a request builder for retrieving one `Oty1` entity based on its keys.
     * @param code Key property. See [[Oty1.code]].
     * @returns A request builder for creating requests to retrieve one `Oty1` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilder<Oty1>;
    /**
     * Returns a request builder for querying all `Oty1` entities.
     * @returns A request builder for creating requests to retrieve all `Oty1` entities.
     */
    getAll(): GetAllRequestBuilder<Oty1>;
    /**
     * Returns a request builder for creating a `Oty1` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Oty1`.
     */
    create(entity: Oty1): CreateRequestBuilder<Oty1>;
    /**
     * Returns a request builder for updating an entity of type `Oty1`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Oty1`.
     */
    update(entity: Oty1): UpdateRequestBuilder<Oty1>;
    /**
     * Returns a request builder for deleting an entity of type `Oty1`.
     * @param code Key property. See [[Oty1.code]].
     * @returns A request builder for creating requests that delete an entity of type `Oty1`.
     */
    delete(code: string): DeleteRequestBuilder<Oty1>;
    /**
     * Returns a request builder for deleting an entity of type `Oty1`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Oty1` by taking the entity as a parameter.
     */
    delete(entity: Oty1): DeleteRequestBuilder<Oty1>;
}
//# sourceMappingURL=Oty1RequestBuilder.d.ts.map