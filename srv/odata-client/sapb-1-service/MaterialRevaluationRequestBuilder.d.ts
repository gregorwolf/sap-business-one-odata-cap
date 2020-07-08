import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { MaterialRevaluation } from './MaterialRevaluation';
/**
 * Request builder class for operations supported on the [[MaterialRevaluation]] entity.
 */
export declare class MaterialRevaluationRequestBuilder extends RequestBuilder<MaterialRevaluation> {
    /**
     * Returns a request builder for retrieving one `MaterialRevaluation` entity based on its keys.
     * @param docEntry Key property. See [[MaterialRevaluation.docEntry]].
     * @returns A request builder for creating requests to retrieve one `MaterialRevaluation` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<MaterialRevaluation>;
    /**
     * Returns a request builder for querying all `MaterialRevaluation` entities.
     * @returns A request builder for creating requests to retrieve all `MaterialRevaluation` entities.
     */
    getAll(): GetAllRequestBuilder<MaterialRevaluation>;
    /**
     * Returns a request builder for creating a `MaterialRevaluation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MaterialRevaluation`.
     */
    create(entity: MaterialRevaluation): CreateRequestBuilder<MaterialRevaluation>;
    /**
     * Returns a request builder for updating an entity of type `MaterialRevaluation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MaterialRevaluation`.
     */
    update(entity: MaterialRevaluation): UpdateRequestBuilder<MaterialRevaluation>;
    /**
     * Returns a request builder for deleting an entity of type `MaterialRevaluation`.
     * @param docEntry Key property. See [[MaterialRevaluation.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `MaterialRevaluation`.
     */
    delete(docEntry: number): DeleteRequestBuilder<MaterialRevaluation>;
    /**
     * Returns a request builder for deleting an entity of type `MaterialRevaluation`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `MaterialRevaluation` by taking the entity as a parameter.
     */
    delete(entity: MaterialRevaluation): DeleteRequestBuilder<MaterialRevaluation>;
}
//# sourceMappingURL=MaterialRevaluationRequestBuilder.d.ts.map