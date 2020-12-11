import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { AssetCapitalizationCreditMemo } from './AssetCapitalizationCreditMemo';
/**
 * Request builder class for operations supported on the [[AssetCapitalizationCreditMemo]] entity.
 */
export declare class AssetCapitalizationCreditMemoRequestBuilder extends RequestBuilder<AssetCapitalizationCreditMemo> {
    /**
     * Returns a request builder for retrieving one `AssetCapitalizationCreditMemo` entity based on its keys.
     * @param docEntry Key property. See [[AssetCapitalizationCreditMemo.docEntry]].
     * @returns A request builder for creating requests to retrieve one `AssetCapitalizationCreditMemo` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<AssetCapitalizationCreditMemo>;
    /**
     * Returns a request builder for querying all `AssetCapitalizationCreditMemo` entities.
     * @returns A request builder for creating requests to retrieve all `AssetCapitalizationCreditMemo` entities.
     */
    getAll(): GetAllRequestBuilderV4<AssetCapitalizationCreditMemo>;
    /**
     * Returns a request builder for creating a `AssetCapitalizationCreditMemo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetCapitalizationCreditMemo`.
     */
    create(entity: AssetCapitalizationCreditMemo): CreateRequestBuilderV4<AssetCapitalizationCreditMemo>;
    /**
     * Returns a request builder for updating an entity of type `AssetCapitalizationCreditMemo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetCapitalizationCreditMemo`.
     */
    update(entity: AssetCapitalizationCreditMemo): UpdateRequestBuilderV4<AssetCapitalizationCreditMemo>;
    /**
     * Returns a request builder for deleting an entity of type `AssetCapitalizationCreditMemo`.
     * @param docEntry Key property. See [[AssetCapitalizationCreditMemo.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `AssetCapitalizationCreditMemo`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<AssetCapitalizationCreditMemo>;
    /**
     * Returns a request builder for deleting an entity of type `AssetCapitalizationCreditMemo`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AssetCapitalizationCreditMemo` by taking the entity as a parameter.
     */
    delete(entity: AssetCapitalizationCreditMemo): DeleteRequestBuilderV4<AssetCapitalizationCreditMemo>;
}
//# sourceMappingURL=AssetCapitalizationCreditMemoRequestBuilder.d.ts.map