import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { CreditCards } from './CreditCards';
/**
 * Request builder class for operations supported on the [[CreditCards]] entity.
 */
export declare class CreditCardsRequestBuilder extends RequestBuilder<CreditCards> {
    /**
     * Returns a request builder for retrieving one `CreditCards` entity based on its keys.
     * @param creditCardCode Key property. See [[CreditCards.creditCardCode]].
     * @returns A request builder for creating requests to retrieve one `CreditCards` entity based on its keys.
     */
    getByKey(creditCardCode: number): GetByKeyRequestBuilderV4<CreditCards>;
    /**
     * Returns a request builder for querying all `CreditCards` entities.
     * @returns A request builder for creating requests to retrieve all `CreditCards` entities.
     */
    getAll(): GetAllRequestBuilderV4<CreditCards>;
    /**
     * Returns a request builder for creating a `CreditCards` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CreditCards`.
     */
    create(entity: CreditCards): CreateRequestBuilderV4<CreditCards>;
    /**
     * Returns a request builder for updating an entity of type `CreditCards`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CreditCards`.
     */
    update(entity: CreditCards): UpdateRequestBuilderV4<CreditCards>;
    /**
     * Returns a request builder for deleting an entity of type `CreditCards`.
     * @param creditCardCode Key property. See [[CreditCards.creditCardCode]].
     * @returns A request builder for creating requests that delete an entity of type `CreditCards`.
     */
    delete(creditCardCode: number): DeleteRequestBuilderV4<CreditCards>;
    /**
     * Returns a request builder for deleting an entity of type `CreditCards`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CreditCards` by taking the entity as a parameter.
     */
    delete(entity: CreditCards): DeleteRequestBuilderV4<CreditCards>;
}
//# sourceMappingURL=CreditCardsRequestBuilder.d.ts.map