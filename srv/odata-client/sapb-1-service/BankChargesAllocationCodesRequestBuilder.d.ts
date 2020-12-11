import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BankChargesAllocationCodes } from './BankChargesAllocationCodes';
/**
 * Request builder class for operations supported on the [[BankChargesAllocationCodes]] entity.
 */
export declare class BankChargesAllocationCodesRequestBuilder extends RequestBuilder<BankChargesAllocationCodes> {
    /**
     * Returns a request builder for retrieving one `BankChargesAllocationCodes` entity based on its keys.
     * @param code Key property. See [[BankChargesAllocationCodes.code]].
     * @returns A request builder for creating requests to retrieve one `BankChargesAllocationCodes` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilderV4<BankChargesAllocationCodes>;
    /**
     * Returns a request builder for querying all `BankChargesAllocationCodes` entities.
     * @returns A request builder for creating requests to retrieve all `BankChargesAllocationCodes` entities.
     */
    getAll(): GetAllRequestBuilderV4<BankChargesAllocationCodes>;
    /**
     * Returns a request builder for creating a `BankChargesAllocationCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BankChargesAllocationCodes`.
     */
    create(entity: BankChargesAllocationCodes): CreateRequestBuilderV4<BankChargesAllocationCodes>;
    /**
     * Returns a request builder for updating an entity of type `BankChargesAllocationCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BankChargesAllocationCodes`.
     */
    update(entity: BankChargesAllocationCodes): UpdateRequestBuilderV4<BankChargesAllocationCodes>;
    /**
     * Returns a request builder for deleting an entity of type `BankChargesAllocationCodes`.
     * @param code Key property. See [[BankChargesAllocationCodes.code]].
     * @returns A request builder for creating requests that delete an entity of type `BankChargesAllocationCodes`.
     */
    delete(code: string): DeleteRequestBuilderV4<BankChargesAllocationCodes>;
    /**
     * Returns a request builder for deleting an entity of type `BankChargesAllocationCodes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BankChargesAllocationCodes` by taking the entity as a parameter.
     */
    delete(entity: BankChargesAllocationCodes): DeleteRequestBuilderV4<BankChargesAllocationCodes>;
}
//# sourceMappingURL=BankChargesAllocationCodesRequestBuilder.d.ts.map