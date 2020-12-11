import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { EmployeeTransfers } from './EmployeeTransfers';
/**
 * Request builder class for operations supported on the [[EmployeeTransfers]] entity.
 */
export declare class EmployeeTransfersRequestBuilder extends RequestBuilder<EmployeeTransfers> {
    /**
     * Returns a request builder for retrieving one `EmployeeTransfers` entity based on its keys.
     * @param transferId Key property. See [[EmployeeTransfers.transferId]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTransfers` entity based on its keys.
     */
    getByKey(transferId: number): GetByKeyRequestBuilderV4<EmployeeTransfers>;
    /**
     * Returns a request builder for querying all `EmployeeTransfers` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTransfers` entities.
     */
    getAll(): GetAllRequestBuilderV4<EmployeeTransfers>;
    /**
     * Returns a request builder for creating a `EmployeeTransfers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTransfers`.
     */
    create(entity: EmployeeTransfers): CreateRequestBuilderV4<EmployeeTransfers>;
    /**
     * Returns a request builder for updating an entity of type `EmployeeTransfers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTransfers`.
     */
    update(entity: EmployeeTransfers): UpdateRequestBuilderV4<EmployeeTransfers>;
    /**
     * Returns a request builder for deleting an entity of type `EmployeeTransfers`.
     * @param transferId Key property. See [[EmployeeTransfers.transferId]].
     * @returns A request builder for creating requests that delete an entity of type `EmployeeTransfers`.
     */
    delete(transferId: number): DeleteRequestBuilderV4<EmployeeTransfers>;
    /**
     * Returns a request builder for deleting an entity of type `EmployeeTransfers`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `EmployeeTransfers` by taking the entity as a parameter.
     */
    delete(entity: EmployeeTransfers): DeleteRequestBuilderV4<EmployeeTransfers>;
}
//# sourceMappingURL=EmployeeTransfersRequestBuilder.d.ts.map