import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { NatureOfAssessees } from './NatureOfAssessees';
/**
 * Request builder class for operations supported on the [[NatureOfAssessees]] entity.
 */
export declare class NatureOfAssesseesRequestBuilder extends RequestBuilder<NatureOfAssessees> {
    /**
     * Returns a request builder for retrieving one `NatureOfAssessees` entity based on its keys.
     * @param absEntry Key property. See [[NatureOfAssessees.absEntry]].
     * @returns A request builder for creating requests to retrieve one `NatureOfAssessees` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilder<NatureOfAssessees>;
    /**
     * Returns a request builder for querying all `NatureOfAssessees` entities.
     * @returns A request builder for creating requests to retrieve all `NatureOfAssessees` entities.
     */
    getAll(): GetAllRequestBuilder<NatureOfAssessees>;
    /**
     * Returns a request builder for creating a `NatureOfAssessees` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `NatureOfAssessees`.
     */
    create(entity: NatureOfAssessees): CreateRequestBuilder<NatureOfAssessees>;
    /**
     * Returns a request builder for updating an entity of type `NatureOfAssessees`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `NatureOfAssessees`.
     */
    update(entity: NatureOfAssessees): UpdateRequestBuilder<NatureOfAssessees>;
    /**
     * Returns a request builder for deleting an entity of type `NatureOfAssessees`.
     * @param absEntry Key property. See [[NatureOfAssessees.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `NatureOfAssessees`.
     */
    delete(absEntry: number): DeleteRequestBuilder<NatureOfAssessees>;
    /**
     * Returns a request builder for deleting an entity of type `NatureOfAssessees`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `NatureOfAssessees` by taking the entity as a parameter.
     */
    delete(entity: NatureOfAssessees): DeleteRequestBuilder<NatureOfAssessees>;
}
//# sourceMappingURL=NatureOfAssesseesRequestBuilder.d.ts.map