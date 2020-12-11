import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
    getByKey(code: number): GetByKeyRequestBuilderV4<Manufacturers>;
    /**
     * Returns a request builder for querying all `Manufacturers` entities.
     * @returns A request builder for creating requests to retrieve all `Manufacturers` entities.
     */
    getAll(): GetAllRequestBuilderV4<Manufacturers>;
    /**
     * Returns a request builder for creating a `Manufacturers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Manufacturers`.
     */
    create(entity: Manufacturers): CreateRequestBuilderV4<Manufacturers>;
    /**
     * Returns a request builder for updating an entity of type `Manufacturers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Manufacturers`.
     */
    update(entity: Manufacturers): UpdateRequestBuilderV4<Manufacturers>;
    /**
     * Returns a request builder for deleting an entity of type `Manufacturers`.
     * @param code Key property. See [[Manufacturers.code]].
     * @returns A request builder for creating requests that delete an entity of type `Manufacturers`.
     */
    delete(code: number): DeleteRequestBuilderV4<Manufacturers>;
    /**
     * Returns a request builder for deleting an entity of type `Manufacturers`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Manufacturers` by taking the entity as a parameter.
     */
    delete(entity: Manufacturers): DeleteRequestBuilderV4<Manufacturers>;
}
//# sourceMappingURL=ManufacturersRequestBuilder.d.ts.map