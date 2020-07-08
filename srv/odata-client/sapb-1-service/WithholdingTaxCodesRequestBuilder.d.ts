import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
    getByKey(wtCode: string): GetByKeyRequestBuilder<WithholdingTaxCodes>;
    /**
     * Returns a request builder for querying all `WithholdingTaxCodes` entities.
     * @returns A request builder for creating requests to retrieve all `WithholdingTaxCodes` entities.
     */
    getAll(): GetAllRequestBuilder<WithholdingTaxCodes>;
    /**
     * Returns a request builder for creating a `WithholdingTaxCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WithholdingTaxCodes`.
     */
    create(entity: WithholdingTaxCodes): CreateRequestBuilder<WithholdingTaxCodes>;
    /**
     * Returns a request builder for updating an entity of type `WithholdingTaxCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WithholdingTaxCodes`.
     */
    update(entity: WithholdingTaxCodes): UpdateRequestBuilder<WithholdingTaxCodes>;
    /**
     * Returns a request builder for deleting an entity of type `WithholdingTaxCodes`.
     * @param wtCode Key property. See [[WithholdingTaxCodes.wtCode]].
     * @returns A request builder for creating requests that delete an entity of type `WithholdingTaxCodes`.
     */
    delete(wtCode: string): DeleteRequestBuilder<WithholdingTaxCodes>;
    /**
     * Returns a request builder for deleting an entity of type `WithholdingTaxCodes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `WithholdingTaxCodes` by taking the entity as a parameter.
     */
    delete(entity: WithholdingTaxCodes): DeleteRequestBuilder<WithholdingTaxCodes>;
}
//# sourceMappingURL=WithholdingTaxCodesRequestBuilder.d.ts.map