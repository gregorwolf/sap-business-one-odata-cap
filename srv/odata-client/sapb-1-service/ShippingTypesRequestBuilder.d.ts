import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ShippingTypes } from './ShippingTypes';
/**
 * Request builder class for operations supported on the [[ShippingTypes]] entity.
 */
export declare class ShippingTypesRequestBuilder extends RequestBuilder<ShippingTypes> {
    /**
     * Returns a request builder for retrieving one `ShippingTypes` entity based on its keys.
     * @param code Key property. See [[ShippingTypes.code]].
     * @returns A request builder for creating requests to retrieve one `ShippingTypes` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilderV4<ShippingTypes>;
    /**
     * Returns a request builder for querying all `ShippingTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ShippingTypes` entities.
     */
    getAll(): GetAllRequestBuilderV4<ShippingTypes>;
    /**
     * Returns a request builder for creating a `ShippingTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ShippingTypes`.
     */
    create(entity: ShippingTypes): CreateRequestBuilderV4<ShippingTypes>;
    /**
     * Returns a request builder for updating an entity of type `ShippingTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ShippingTypes`.
     */
    update(entity: ShippingTypes): UpdateRequestBuilderV4<ShippingTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ShippingTypes`.
     * @param code Key property. See [[ShippingTypes.code]].
     * @returns A request builder for creating requests that delete an entity of type `ShippingTypes`.
     */
    delete(code: number): DeleteRequestBuilderV4<ShippingTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ShippingTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ShippingTypes` by taking the entity as a parameter.
     */
    delete(entity: ShippingTypes): DeleteRequestBuilderV4<ShippingTypes>;
}
//# sourceMappingURL=ShippingTypesRequestBuilder.d.ts.map