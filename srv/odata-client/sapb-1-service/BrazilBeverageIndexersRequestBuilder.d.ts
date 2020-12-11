import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BrazilBeverageIndexers } from './BrazilBeverageIndexers';
/**
 * Request builder class for operations supported on the [[BrazilBeverageIndexers]] entity.
 */
export declare class BrazilBeverageIndexersRequestBuilder extends RequestBuilder<BrazilBeverageIndexers> {
    /**
     * Returns a request builder for retrieving one `BrazilBeverageIndexers` entity based on its keys.
     * @param beverageId Key property. See [[BrazilBeverageIndexers.beverageId]].
     * @returns A request builder for creating requests to retrieve one `BrazilBeverageIndexers` entity based on its keys.
     */
    getByKey(beverageId: number): GetByKeyRequestBuilderV4<BrazilBeverageIndexers>;
    /**
     * Returns a request builder for querying all `BrazilBeverageIndexers` entities.
     * @returns A request builder for creating requests to retrieve all `BrazilBeverageIndexers` entities.
     */
    getAll(): GetAllRequestBuilderV4<BrazilBeverageIndexers>;
    /**
     * Returns a request builder for creating a `BrazilBeverageIndexers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BrazilBeverageIndexers`.
     */
    create(entity: BrazilBeverageIndexers): CreateRequestBuilderV4<BrazilBeverageIndexers>;
    /**
     * Returns a request builder for updating an entity of type `BrazilBeverageIndexers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BrazilBeverageIndexers`.
     */
    update(entity: BrazilBeverageIndexers): UpdateRequestBuilderV4<BrazilBeverageIndexers>;
    /**
     * Returns a request builder for deleting an entity of type `BrazilBeverageIndexers`.
     * @param beverageId Key property. See [[BrazilBeverageIndexers.beverageId]].
     * @returns A request builder for creating requests that delete an entity of type `BrazilBeverageIndexers`.
     */
    delete(beverageId: number): DeleteRequestBuilderV4<BrazilBeverageIndexers>;
    /**
     * Returns a request builder for deleting an entity of type `BrazilBeverageIndexers`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BrazilBeverageIndexers` by taking the entity as a parameter.
     */
    delete(entity: BrazilBeverageIndexers): DeleteRequestBuilderV4<BrazilBeverageIndexers>;
}
//# sourceMappingURL=BrazilBeverageIndexersRequestBuilder.d.ts.map