import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ServiceContracts } from './ServiceContracts';
/**
 * Request builder class for operations supported on the [[ServiceContracts]] entity.
 */
export declare class ServiceContractsRequestBuilder extends RequestBuilder<ServiceContracts> {
    /**
     * Returns a request builder for retrieving one `ServiceContracts` entity based on its keys.
     * @param contractId Key property. See [[ServiceContracts.contractId]].
     * @returns A request builder for creating requests to retrieve one `ServiceContracts` entity based on its keys.
     */
    getByKey(contractId: number): GetByKeyRequestBuilderV4<ServiceContracts>;
    /**
     * Returns a request builder for querying all `ServiceContracts` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceContracts` entities.
     */
    getAll(): GetAllRequestBuilderV4<ServiceContracts>;
    /**
     * Returns a request builder for creating a `ServiceContracts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceContracts`.
     */
    create(entity: ServiceContracts): CreateRequestBuilderV4<ServiceContracts>;
    /**
     * Returns a request builder for updating an entity of type `ServiceContracts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceContracts`.
     */
    update(entity: ServiceContracts): UpdateRequestBuilderV4<ServiceContracts>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceContracts`.
     * @param contractId Key property. See [[ServiceContracts.contractId]].
     * @returns A request builder for creating requests that delete an entity of type `ServiceContracts`.
     */
    delete(contractId: number): DeleteRequestBuilderV4<ServiceContracts>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceContracts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ServiceContracts` by taking the entity as a parameter.
     */
    delete(entity: ServiceContracts): DeleteRequestBuilderV4<ServiceContracts>;
}
//# sourceMappingURL=ServiceContractsRequestBuilder.d.ts.map