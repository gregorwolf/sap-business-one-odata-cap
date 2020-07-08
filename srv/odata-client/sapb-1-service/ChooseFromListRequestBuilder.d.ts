import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ChooseFromList } from './ChooseFromList';
/**
 * Request builder class for operations supported on the [[ChooseFromList]] entity.
 */
export declare class ChooseFromListRequestBuilder extends RequestBuilder<ChooseFromList> {
    /**
     * Returns a request builder for retrieving one `ChooseFromList` entity based on its keys.
     * @param objectName Key property. See [[ChooseFromList.objectName]].
     * @returns A request builder for creating requests to retrieve one `ChooseFromList` entity based on its keys.
     */
    getByKey(objectName: string): GetByKeyRequestBuilder<ChooseFromList>;
    /**
     * Returns a request builder for querying all `ChooseFromList` entities.
     * @returns A request builder for creating requests to retrieve all `ChooseFromList` entities.
     */
    getAll(): GetAllRequestBuilder<ChooseFromList>;
    /**
     * Returns a request builder for creating a `ChooseFromList` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ChooseFromList`.
     */
    create(entity: ChooseFromList): CreateRequestBuilder<ChooseFromList>;
    /**
     * Returns a request builder for updating an entity of type `ChooseFromList`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ChooseFromList`.
     */
    update(entity: ChooseFromList): UpdateRequestBuilder<ChooseFromList>;
    /**
     * Returns a request builder for deleting an entity of type `ChooseFromList`.
     * @param objectName Key property. See [[ChooseFromList.objectName]].
     * @returns A request builder for creating requests that delete an entity of type `ChooseFromList`.
     */
    delete(objectName: string): DeleteRequestBuilder<ChooseFromList>;
    /**
     * Returns a request builder for deleting an entity of type `ChooseFromList`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ChooseFromList` by taking the entity as a parameter.
     */
    delete(entity: ChooseFromList): DeleteRequestBuilder<ChooseFromList>;
}
//# sourceMappingURL=ChooseFromListRequestBuilder.d.ts.map