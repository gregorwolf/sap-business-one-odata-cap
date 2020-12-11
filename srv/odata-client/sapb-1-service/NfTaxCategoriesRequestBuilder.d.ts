import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { NfTaxCategories } from './NfTaxCategories';
/**
 * Request builder class for operations supported on the [[NfTaxCategories]] entity.
 */
export declare class NfTaxCategoriesRequestBuilder extends RequestBuilder<NfTaxCategories> {
    /**
     * Returns a request builder for retrieving one `NfTaxCategories` entity based on its keys.
     * @param absId Key property. See [[NfTaxCategories.absId]].
     * @returns A request builder for creating requests to retrieve one `NfTaxCategories` entity based on its keys.
     */
    getByKey(absId: number): GetByKeyRequestBuilderV4<NfTaxCategories>;
    /**
     * Returns a request builder for querying all `NfTaxCategories` entities.
     * @returns A request builder for creating requests to retrieve all `NfTaxCategories` entities.
     */
    getAll(): GetAllRequestBuilderV4<NfTaxCategories>;
    /**
     * Returns a request builder for creating a `NfTaxCategories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `NfTaxCategories`.
     */
    create(entity: NfTaxCategories): CreateRequestBuilderV4<NfTaxCategories>;
    /**
     * Returns a request builder for updating an entity of type `NfTaxCategories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `NfTaxCategories`.
     */
    update(entity: NfTaxCategories): UpdateRequestBuilderV4<NfTaxCategories>;
    /**
     * Returns a request builder for deleting an entity of type `NfTaxCategories`.
     * @param absId Key property. See [[NfTaxCategories.absId]].
     * @returns A request builder for creating requests that delete an entity of type `NfTaxCategories`.
     */
    delete(absId: number): DeleteRequestBuilderV4<NfTaxCategories>;
    /**
     * Returns a request builder for deleting an entity of type `NfTaxCategories`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `NfTaxCategories` by taking the entity as a parameter.
     */
    delete(entity: NfTaxCategories): DeleteRequestBuilderV4<NfTaxCategories>;
}
//# sourceMappingURL=NfTaxCategoriesRequestBuilder.d.ts.map