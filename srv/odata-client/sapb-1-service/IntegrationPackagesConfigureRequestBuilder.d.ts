import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { IntegrationPackagesConfigure } from './IntegrationPackagesConfigure';
/**
 * Request builder class for operations supported on the [[IntegrationPackagesConfigure]] entity.
 */
export declare class IntegrationPackagesConfigureRequestBuilder extends RequestBuilder<IntegrationPackagesConfigure> {
    /**
     * Returns a request builder for retrieving one `IntegrationPackagesConfigure` entity based on its keys.
     * @param absEntry Key property. See [[IntegrationPackagesConfigure.absEntry]].
     * @returns A request builder for creating requests to retrieve one `IntegrationPackagesConfigure` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilderV4<IntegrationPackagesConfigure>;
    /**
     * Returns a request builder for querying all `IntegrationPackagesConfigure` entities.
     * @returns A request builder for creating requests to retrieve all `IntegrationPackagesConfigure` entities.
     */
    getAll(): GetAllRequestBuilderV4<IntegrationPackagesConfigure>;
    /**
     * Returns a request builder for creating a `IntegrationPackagesConfigure` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IntegrationPackagesConfigure`.
     */
    create(entity: IntegrationPackagesConfigure): CreateRequestBuilderV4<IntegrationPackagesConfigure>;
    /**
     * Returns a request builder for updating an entity of type `IntegrationPackagesConfigure`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IntegrationPackagesConfigure`.
     */
    update(entity: IntegrationPackagesConfigure): UpdateRequestBuilderV4<IntegrationPackagesConfigure>;
    /**
     * Returns a request builder for deleting an entity of type `IntegrationPackagesConfigure`.
     * @param absEntry Key property. See [[IntegrationPackagesConfigure.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `IntegrationPackagesConfigure`.
     */
    delete(absEntry: number): DeleteRequestBuilderV4<IntegrationPackagesConfigure>;
    /**
     * Returns a request builder for deleting an entity of type `IntegrationPackagesConfigure`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `IntegrationPackagesConfigure` by taking the entity as a parameter.
     */
    delete(entity: IntegrationPackagesConfigure): DeleteRequestBuilderV4<IntegrationPackagesConfigure>;
}
//# sourceMappingURL=IntegrationPackagesConfigureRequestBuilder.d.ts.map