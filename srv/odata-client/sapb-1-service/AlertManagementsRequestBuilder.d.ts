import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { AlertManagements } from './AlertManagements';
/**
 * Request builder class for operations supported on the [[AlertManagements]] entity.
 */
export declare class AlertManagementsRequestBuilder extends RequestBuilder<AlertManagements> {
    /**
     * Returns a request builder for retrieving one `AlertManagements` entity based on its keys.
     * @param code Key property. See [[AlertManagements.code]].
     * @returns A request builder for creating requests to retrieve one `AlertManagements` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilderV4<AlertManagements>;
    /**
     * Returns a request builder for querying all `AlertManagements` entities.
     * @returns A request builder for creating requests to retrieve all `AlertManagements` entities.
     */
    getAll(): GetAllRequestBuilderV4<AlertManagements>;
    /**
     * Returns a request builder for creating a `AlertManagements` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AlertManagements`.
     */
    create(entity: AlertManagements): CreateRequestBuilderV4<AlertManagements>;
    /**
     * Returns a request builder for updating an entity of type `AlertManagements`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AlertManagements`.
     */
    update(entity: AlertManagements): UpdateRequestBuilderV4<AlertManagements>;
    /**
     * Returns a request builder for deleting an entity of type `AlertManagements`.
     * @param code Key property. See [[AlertManagements.code]].
     * @returns A request builder for creating requests that delete an entity of type `AlertManagements`.
     */
    delete(code: number): DeleteRequestBuilderV4<AlertManagements>;
    /**
     * Returns a request builder for deleting an entity of type `AlertManagements`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AlertManagements` by taking the entity as a parameter.
     */
    delete(entity: AlertManagements): DeleteRequestBuilderV4<AlertManagements>;
}
//# sourceMappingURL=AlertManagementsRequestBuilder.d.ts.map