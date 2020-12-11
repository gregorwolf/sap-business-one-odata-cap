import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { WithholdingTaxCodes } from './WithholdingTaxCodes';
/**
 * Request builder class for operations supported on the [[WithholdingTaxCodes]] entity.
 */
export declare class WithholdingTaxCodesRequestBuilder extends RequestBuilder<WithholdingTaxCodes> {
    /**
     * Returns a request builder for retrieving one `WithholdingTaxCodes` entity based on its keys.
     * @param wtCode Key property. See [[WithholdingTaxCodes.wtCode]].
     * @returns A request builder for creating requests to retrieve one `WithholdingTaxCodes` entity based on its keys.
     */
    getByKey(wtCode: string): GetByKeyRequestBuilderV4<WithholdingTaxCodes>;
    /**
     * Returns a request builder for querying all `WithholdingTaxCodes` entities.
     * @returns A request builder for creating requests to retrieve all `WithholdingTaxCodes` entities.
     */
    getAll(): GetAllRequestBuilderV4<WithholdingTaxCodes>;
    /**
     * Returns a request builder for creating a `WithholdingTaxCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WithholdingTaxCodes`.
     */
    create(entity: WithholdingTaxCodes): CreateRequestBuilderV4<WithholdingTaxCodes>;
    /**
     * Returns a request builder for updating an entity of type `WithholdingTaxCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WithholdingTaxCodes`.
     */
    update(entity: WithholdingTaxCodes): UpdateRequestBuilderV4<WithholdingTaxCodes>;
    /**
     * Returns a request builder for deleting an entity of type `WithholdingTaxCodes`.
     * @param wtCode Key property. See [[WithholdingTaxCodes.wtCode]].
     * @returns A request builder for creating requests that delete an entity of type `WithholdingTaxCodes`.
     */
    delete(wtCode: string): DeleteRequestBuilderV4<WithholdingTaxCodes>;
    /**
     * Returns a request builder for deleting an entity of type `WithholdingTaxCodes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `WithholdingTaxCodes` by taking the entity as a parameter.
     */
    delete(entity: WithholdingTaxCodes): DeleteRequestBuilderV4<WithholdingTaxCodes>;
}
//# sourceMappingURL=WithholdingTaxCodesRequestBuilder.d.ts.map