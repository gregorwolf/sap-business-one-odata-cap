import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { DunningLetters } from './DunningLetters';
/**
 * Request builder class for operations supported on the [[DunningLetters]] entity.
 */
export declare class DunningLettersRequestBuilder extends RequestBuilder<DunningLetters> {
    /**
     * Returns a request builder for retrieving one `DunningLetters` entity based on its keys.
     * @param rowNumber Key property. See [[DunningLetters.rowNumber]].
     * @returns A request builder for creating requests to retrieve one `DunningLetters` entity based on its keys.
     */
    getByKey(rowNumber: number): GetByKeyRequestBuilder<DunningLetters>;
    /**
     * Returns a request builder for querying all `DunningLetters` entities.
     * @returns A request builder for creating requests to retrieve all `DunningLetters` entities.
     */
    getAll(): GetAllRequestBuilder<DunningLetters>;
    /**
     * Returns a request builder for creating a `DunningLetters` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DunningLetters`.
     */
    create(entity: DunningLetters): CreateRequestBuilder<DunningLetters>;
    /**
     * Returns a request builder for updating an entity of type `DunningLetters`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DunningLetters`.
     */
    update(entity: DunningLetters): UpdateRequestBuilder<DunningLetters>;
    /**
     * Returns a request builder for deleting an entity of type `DunningLetters`.
     * @param rowNumber Key property. See [[DunningLetters.rowNumber]].
     * @returns A request builder for creating requests that delete an entity of type `DunningLetters`.
     */
    delete(rowNumber: number): DeleteRequestBuilder<DunningLetters>;
    /**
     * Returns a request builder for deleting an entity of type `DunningLetters`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `DunningLetters` by taking the entity as a parameter.
     */
    delete(entity: DunningLetters): DeleteRequestBuilder<DunningLetters>;
}
//# sourceMappingURL=DunningLettersRequestBuilder.d.ts.map