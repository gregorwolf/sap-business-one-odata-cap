import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SalesPersons } from './SalesPersons';
/**
 * Request builder class for operations supported on the [[SalesPersons]] entity.
 */
export declare class SalesPersonsRequestBuilder extends RequestBuilder<SalesPersons> {
    /**
     * Returns a request builder for retrieving one `SalesPersons` entity based on its keys.
     * @param salesEmployeeCode Key property. See [[SalesPersons.salesEmployeeCode]].
     * @returns A request builder for creating requests to retrieve one `SalesPersons` entity based on its keys.
     */
    getByKey(salesEmployeeCode: number): GetByKeyRequestBuilderV4<SalesPersons>;
    /**
     * Returns a request builder for querying all `SalesPersons` entities.
     * @returns A request builder for creating requests to retrieve all `SalesPersons` entities.
     */
    getAll(): GetAllRequestBuilderV4<SalesPersons>;
    /**
     * Returns a request builder for creating a `SalesPersons` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesPersons`.
     */
    create(entity: SalesPersons): CreateRequestBuilderV4<SalesPersons>;
    /**
     * Returns a request builder for updating an entity of type `SalesPersons`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesPersons`.
     */
    update(entity: SalesPersons): UpdateRequestBuilderV4<SalesPersons>;
    /**
     * Returns a request builder for deleting an entity of type `SalesPersons`.
     * @param salesEmployeeCode Key property. See [[SalesPersons.salesEmployeeCode]].
     * @returns A request builder for creating requests that delete an entity of type `SalesPersons`.
     */
    delete(salesEmployeeCode: number): DeleteRequestBuilderV4<SalesPersons>;
    /**
     * Returns a request builder for deleting an entity of type `SalesPersons`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SalesPersons` by taking the entity as a parameter.
     */
    delete(entity: SalesPersons): DeleteRequestBuilderV4<SalesPersons>;
}
//# sourceMappingURL=SalesPersonsRequestBuilder.d.ts.map