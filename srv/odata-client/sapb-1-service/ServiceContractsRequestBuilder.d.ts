import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
    getByKey(contractId: number): GetByKeyRequestBuilder<ServiceContracts>;
    /**
     * Returns a request builder for querying all `ServiceContracts` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceContracts` entities.
     */
    getAll(): GetAllRequestBuilder<ServiceContracts>;
    /**
     * Returns a request builder for creating a `ServiceContracts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceContracts`.
     */
    create(entity: ServiceContracts): CreateRequestBuilder<ServiceContracts>;
    /**
     * Returns a request builder for updating an entity of type `ServiceContracts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceContracts`.
     */
    update(entity: ServiceContracts): UpdateRequestBuilder<ServiceContracts>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceContracts`.
     * @param contractId Key property. See [[ServiceContracts.contractId]].
     * @returns A request builder for creating requests that delete an entity of type `ServiceContracts`.
     */
    delete(contractId: number): DeleteRequestBuilder<ServiceContracts>;
    /**
     * Returns a request builder for deleting an entity of type `ServiceContracts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ServiceContracts` by taking the entity as a parameter.
     */
    delete(entity: ServiceContracts): DeleteRequestBuilder<ServiceContracts>;
}
//# sourceMappingURL=ServiceContractsRequestBuilder.d.ts.map