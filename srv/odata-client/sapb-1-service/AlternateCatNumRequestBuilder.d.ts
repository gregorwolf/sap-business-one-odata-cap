import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { AlternateCatNum } from './AlternateCatNum';
/**
 * Request builder class for operations supported on the [[AlternateCatNum]] entity.
 */
export declare class AlternateCatNumRequestBuilder extends RequestBuilder<AlternateCatNum> {
    /**
     * Returns a request builder for retrieving one `AlternateCatNum` entity based on its keys.
     * @param itemCode Key property. See [[AlternateCatNum.itemCode]].
     * @param cardCode Key property. See [[AlternateCatNum.cardCode]].
     * @param substitute Key property. See [[AlternateCatNum.substitute]].
     * @returns A request builder for creating requests to retrieve one `AlternateCatNum` entity based on its keys.
     */
    getByKey(itemCode: string, cardCode: string, substitute: string): GetByKeyRequestBuilderV4<AlternateCatNum>;
    /**
     * Returns a request builder for querying all `AlternateCatNum` entities.
     * @returns A request builder for creating requests to retrieve all `AlternateCatNum` entities.
     */
    getAll(): GetAllRequestBuilderV4<AlternateCatNum>;
    /**
     * Returns a request builder for creating a `AlternateCatNum` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AlternateCatNum`.
     */
    create(entity: AlternateCatNum): CreateRequestBuilderV4<AlternateCatNum>;
    /**
     * Returns a request builder for updating an entity of type `AlternateCatNum`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AlternateCatNum`.
     */
    update(entity: AlternateCatNum): UpdateRequestBuilderV4<AlternateCatNum>;
    /**
     * Returns a request builder for deleting an entity of type `AlternateCatNum`.
     * @param itemCode Key property. See [[AlternateCatNum.itemCode]].
     * @param cardCode Key property. See [[AlternateCatNum.cardCode]].
     * @param substitute Key property. See [[AlternateCatNum.substitute]].
     * @returns A request builder for creating requests that delete an entity of type `AlternateCatNum`.
     */
    delete(itemCode: string, cardCode: string, substitute: string): DeleteRequestBuilderV4<AlternateCatNum>;
    /**
     * Returns a request builder for deleting an entity of type `AlternateCatNum`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AlternateCatNum` by taking the entity as a parameter.
     */
    delete(entity: AlternateCatNum): DeleteRequestBuilderV4<AlternateCatNum>;
}
//# sourceMappingURL=AlternateCatNumRequestBuilder.d.ts.map