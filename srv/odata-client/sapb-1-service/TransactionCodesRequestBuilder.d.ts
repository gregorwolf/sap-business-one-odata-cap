import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { TransactionCodes } from './TransactionCodes';
/**
 * Request builder class for operations supported on the [[TransactionCodes]] entity.
 */
export declare class TransactionCodesRequestBuilder extends RequestBuilder<TransactionCodes> {
    /**
     * Returns a request builder for retrieving one `TransactionCodes` entity based on its keys.
     * @param code Key property. See [[TransactionCodes.code]].
     * @returns A request builder for creating requests to retrieve one `TransactionCodes` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilderV4<TransactionCodes>;
    /**
     * Returns a request builder for querying all `TransactionCodes` entities.
     * @returns A request builder for creating requests to retrieve all `TransactionCodes` entities.
     */
    getAll(): GetAllRequestBuilderV4<TransactionCodes>;
    /**
     * Returns a request builder for creating a `TransactionCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TransactionCodes`.
     */
    create(entity: TransactionCodes): CreateRequestBuilderV4<TransactionCodes>;
    /**
     * Returns a request builder for updating an entity of type `TransactionCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TransactionCodes`.
     */
    update(entity: TransactionCodes): UpdateRequestBuilderV4<TransactionCodes>;
    /**
     * Returns a request builder for deleting an entity of type `TransactionCodes`.
     * @param code Key property. See [[TransactionCodes.code]].
     * @returns A request builder for creating requests that delete an entity of type `TransactionCodes`.
     */
    delete(code: string): DeleteRequestBuilderV4<TransactionCodes>;
    /**
     * Returns a request builder for deleting an entity of type `TransactionCodes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TransactionCodes` by taking the entity as a parameter.
     */
    delete(entity: TransactionCodes): DeleteRequestBuilderV4<TransactionCodes>;
}
//# sourceMappingURL=TransactionCodesRequestBuilder.d.ts.map