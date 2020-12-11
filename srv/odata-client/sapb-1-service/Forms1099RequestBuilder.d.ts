import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Forms1099 } from './Forms1099';
/**
 * Request builder class for operations supported on the [[Forms1099]] entity.
 */
export declare class Forms1099RequestBuilder extends RequestBuilder<Forms1099> {
    /**
     * Returns a request builder for retrieving one `Forms1099` entity based on its keys.
     * @param formCode Key property. See [[Forms1099.formCode]].
     * @returns A request builder for creating requests to retrieve one `Forms1099` entity based on its keys.
     */
    getByKey(formCode: number): GetByKeyRequestBuilderV4<Forms1099>;
    /**
     * Returns a request builder for querying all `Forms1099` entities.
     * @returns A request builder for creating requests to retrieve all `Forms1099` entities.
     */
    getAll(): GetAllRequestBuilderV4<Forms1099>;
    /**
     * Returns a request builder for creating a `Forms1099` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Forms1099`.
     */
    create(entity: Forms1099): CreateRequestBuilderV4<Forms1099>;
    /**
     * Returns a request builder for updating an entity of type `Forms1099`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Forms1099`.
     */
    update(entity: Forms1099): UpdateRequestBuilderV4<Forms1099>;
    /**
     * Returns a request builder for deleting an entity of type `Forms1099`.
     * @param formCode Key property. See [[Forms1099.formCode]].
     * @returns A request builder for creating requests that delete an entity of type `Forms1099`.
     */
    delete(formCode: number): DeleteRequestBuilderV4<Forms1099>;
    /**
     * Returns a request builder for deleting an entity of type `Forms1099`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Forms1099` by taking the entity as a parameter.
     */
    delete(entity: Forms1099): DeleteRequestBuilderV4<Forms1099>;
}
//# sourceMappingURL=Forms1099RequestBuilder.d.ts.map