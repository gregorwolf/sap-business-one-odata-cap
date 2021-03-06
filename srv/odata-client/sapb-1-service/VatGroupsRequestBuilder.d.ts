import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { VatGroups } from './VatGroups';
/**
 * Request builder class for operations supported on the [[VatGroups]] entity.
 */
export declare class VatGroupsRequestBuilder extends RequestBuilder<VatGroups> {
    /**
     * Returns a request builder for retrieving one `VatGroups` entity based on its keys.
     * @param code Key property. See [[VatGroups.code]].
     * @returns A request builder for creating requests to retrieve one `VatGroups` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilderV4<VatGroups>;
    /**
     * Returns a request builder for querying all `VatGroups` entities.
     * @returns A request builder for creating requests to retrieve all `VatGroups` entities.
     */
    getAll(): GetAllRequestBuilderV4<VatGroups>;
    /**
     * Returns a request builder for creating a `VatGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `VatGroups`.
     */
    create(entity: VatGroups): CreateRequestBuilderV4<VatGroups>;
    /**
     * Returns a request builder for updating an entity of type `VatGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `VatGroups`.
     */
    update(entity: VatGroups): UpdateRequestBuilderV4<VatGroups>;
    /**
     * Returns a request builder for deleting an entity of type `VatGroups`.
     * @param code Key property. See [[VatGroups.code]].
     * @returns A request builder for creating requests that delete an entity of type `VatGroups`.
     */
    delete(code: string): DeleteRequestBuilderV4<VatGroups>;
    /**
     * Returns a request builder for deleting an entity of type `VatGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `VatGroups` by taking the entity as a parameter.
     */
    delete(entity: VatGroups): DeleteRequestBuilderV4<VatGroups>;
}
//# sourceMappingURL=VatGroupsRequestBuilder.d.ts.map