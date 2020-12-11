import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { IntrastatConfiguration } from './IntrastatConfiguration';
/**
 * Request builder class for operations supported on the [[IntrastatConfiguration]] entity.
 */
export declare class IntrastatConfigurationRequestBuilder extends RequestBuilder<IntrastatConfiguration> {
    /**
     * Returns a request builder for retrieving one `IntrastatConfiguration` entity based on its keys.
     * @param absEntry Key property. See [[IntrastatConfiguration.absEntry]].
     * @returns A request builder for creating requests to retrieve one `IntrastatConfiguration` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilderV4<IntrastatConfiguration>;
    /**
     * Returns a request builder for querying all `IntrastatConfiguration` entities.
     * @returns A request builder for creating requests to retrieve all `IntrastatConfiguration` entities.
     */
    getAll(): GetAllRequestBuilderV4<IntrastatConfiguration>;
    /**
     * Returns a request builder for creating a `IntrastatConfiguration` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IntrastatConfiguration`.
     */
    create(entity: IntrastatConfiguration): CreateRequestBuilderV4<IntrastatConfiguration>;
    /**
     * Returns a request builder for updating an entity of type `IntrastatConfiguration`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IntrastatConfiguration`.
     */
    update(entity: IntrastatConfiguration): UpdateRequestBuilderV4<IntrastatConfiguration>;
    /**
     * Returns a request builder for deleting an entity of type `IntrastatConfiguration`.
     * @param absEntry Key property. See [[IntrastatConfiguration.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `IntrastatConfiguration`.
     */
    delete(absEntry: number): DeleteRequestBuilderV4<IntrastatConfiguration>;
    /**
     * Returns a request builder for deleting an entity of type `IntrastatConfiguration`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `IntrastatConfiguration` by taking the entity as a parameter.
     */
    delete(entity: IntrastatConfiguration): DeleteRequestBuilderV4<IntrastatConfiguration>;
}
//# sourceMappingURL=IntrastatConfigurationRequestBuilder.d.ts.map