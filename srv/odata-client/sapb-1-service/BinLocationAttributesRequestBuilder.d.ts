import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BinLocationAttributes } from './BinLocationAttributes';
/**
 * Request builder class for operations supported on the [[BinLocationAttributes]] entity.
 */
export declare class BinLocationAttributesRequestBuilder extends RequestBuilder<BinLocationAttributes> {
    /**
     * Returns a request builder for retrieving one `BinLocationAttributes` entity based on its keys.
     * @param absEntry Key property. See [[BinLocationAttributes.absEntry]].
     * @returns A request builder for creating requests to retrieve one `BinLocationAttributes` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilderV4<BinLocationAttributes>;
    /**
     * Returns a request builder for querying all `BinLocationAttributes` entities.
     * @returns A request builder for creating requests to retrieve all `BinLocationAttributes` entities.
     */
    getAll(): GetAllRequestBuilderV4<BinLocationAttributes>;
    /**
     * Returns a request builder for creating a `BinLocationAttributes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BinLocationAttributes`.
     */
    create(entity: BinLocationAttributes): CreateRequestBuilderV4<BinLocationAttributes>;
    /**
     * Returns a request builder for updating an entity of type `BinLocationAttributes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BinLocationAttributes`.
     */
    update(entity: BinLocationAttributes): UpdateRequestBuilderV4<BinLocationAttributes>;
    /**
     * Returns a request builder for deleting an entity of type `BinLocationAttributes`.
     * @param absEntry Key property. See [[BinLocationAttributes.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `BinLocationAttributes`.
     */
    delete(absEntry: number): DeleteRequestBuilderV4<BinLocationAttributes>;
    /**
     * Returns a request builder for deleting an entity of type `BinLocationAttributes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BinLocationAttributes` by taking the entity as a parameter.
     */
    delete(entity: BinLocationAttributes): DeleteRequestBuilderV4<BinLocationAttributes>;
}
//# sourceMappingURL=BinLocationAttributesRequestBuilder.d.ts.map