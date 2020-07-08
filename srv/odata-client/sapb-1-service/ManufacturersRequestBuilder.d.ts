import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Manufacturers } from './Manufacturers';
/**
 * Request builder class for operations supported on the [[Manufacturers]] entity.
 */
export declare class ManufacturersRequestBuilder extends RequestBuilder<Manufacturers> {
    /**
     * Returns a request builder for retrieving one `Manufacturers` entity based on its keys.
     * @param code Key property. See [[Manufacturers.code]].
     * @returns A request builder for creating requests to retrieve one `Manufacturers` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilder<Manufacturers>;
    /**
     * Returns a request builder for querying all `Manufacturers` entities.
     * @returns A request builder for creating requests to retrieve all `Manufacturers` entities.
     */
    getAll(): GetAllRequestBuilder<Manufacturers>;
    /**
     * Returns a request builder for creating a `Manufacturers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Manufacturers`.
     */
    create(entity: Manufacturers): CreateRequestBuilder<Manufacturers>;
    /**
     * Returns a request builder for updating an entity of type `Manufacturers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Manufacturers`.
     */
    update(entity: Manufacturers): UpdateRequestBuilder<Manufacturers>;
    /**
     * Returns a request builder for deleting an entity of type `Manufacturers`.
     * @param code Key property. See [[Manufacturers.code]].
     * @returns A request builder for creating requests that delete an entity of type `Manufacturers`.
     */
    delete(code: number): DeleteRequestBuilder<Manufacturers>;
    /**
     * Returns a request builder for deleting an entity of type `Manufacturers`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Manufacturers` by taking the entity as a parameter.
     */
    delete(entity: Manufacturers): DeleteRequestBuilder<Manufacturers>;
}
//# sourceMappingURL=ManufacturersRequestBuilder.d.ts.map