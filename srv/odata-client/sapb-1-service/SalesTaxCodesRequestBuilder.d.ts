import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { SalesTaxCodes } from './SalesTaxCodes';
/**
 * Request builder class for operations supported on the [[SalesTaxCodes]] entity.
 */
export declare class SalesTaxCodesRequestBuilder extends RequestBuilder<SalesTaxCodes> {
    /**
     * Returns a request builder for retrieving one `SalesTaxCodes` entity based on its keys.
     * @param code Key property. See [[SalesTaxCodes.code]].
     * @returns A request builder for creating requests to retrieve one `SalesTaxCodes` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilder<SalesTaxCodes>;
    /**
     * Returns a request builder for querying all `SalesTaxCodes` entities.
     * @returns A request builder for creating requests to retrieve all `SalesTaxCodes` entities.
     */
    getAll(): GetAllRequestBuilder<SalesTaxCodes>;
    /**
     * Returns a request builder for creating a `SalesTaxCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesTaxCodes`.
     */
    create(entity: SalesTaxCodes): CreateRequestBuilder<SalesTaxCodes>;
    /**
     * Returns a request builder for updating an entity of type `SalesTaxCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesTaxCodes`.
     */
    update(entity: SalesTaxCodes): UpdateRequestBuilder<SalesTaxCodes>;
    /**
     * Returns a request builder for deleting an entity of type `SalesTaxCodes`.
     * @param code Key property. See [[SalesTaxCodes.code]].
     * @returns A request builder for creating requests that delete an entity of type `SalesTaxCodes`.
     */
    delete(code: string): DeleteRequestBuilder<SalesTaxCodes>;
    /**
     * Returns a request builder for deleting an entity of type `SalesTaxCodes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SalesTaxCodes` by taking the entity as a parameter.
     */
    delete(entity: SalesTaxCodes): DeleteRequestBuilder<SalesTaxCodes>;
}
//# sourceMappingURL=SalesTaxCodesRequestBuilder.d.ts.map