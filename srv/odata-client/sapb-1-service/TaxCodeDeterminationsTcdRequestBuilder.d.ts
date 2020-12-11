import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { TaxCodeDeterminationsTcd } from './TaxCodeDeterminationsTcd';
/**
 * Request builder class for operations supported on the [[TaxCodeDeterminationsTcd]] entity.
 */
export declare class TaxCodeDeterminationsTcdRequestBuilder extends RequestBuilder<TaxCodeDeterminationsTcd> {
    /**
     * Returns a request builder for retrieving one `TaxCodeDeterminationsTcd` entity based on its keys.
     * @param absId Key property. See [[TaxCodeDeterminationsTcd.absId]].
     * @returns A request builder for creating requests to retrieve one `TaxCodeDeterminationsTcd` entity based on its keys.
     */
    getByKey(absId: number): GetByKeyRequestBuilderV4<TaxCodeDeterminationsTcd>;
    /**
     * Returns a request builder for querying all `TaxCodeDeterminationsTcd` entities.
     * @returns A request builder for creating requests to retrieve all `TaxCodeDeterminationsTcd` entities.
     */
    getAll(): GetAllRequestBuilderV4<TaxCodeDeterminationsTcd>;
    /**
     * Returns a request builder for creating a `TaxCodeDeterminationsTcd` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TaxCodeDeterminationsTcd`.
     */
    create(entity: TaxCodeDeterminationsTcd): CreateRequestBuilderV4<TaxCodeDeterminationsTcd>;
    /**
     * Returns a request builder for updating an entity of type `TaxCodeDeterminationsTcd`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TaxCodeDeterminationsTcd`.
     */
    update(entity: TaxCodeDeterminationsTcd): UpdateRequestBuilderV4<TaxCodeDeterminationsTcd>;
    /**
     * Returns a request builder for deleting an entity of type `TaxCodeDeterminationsTcd`.
     * @param absId Key property. See [[TaxCodeDeterminationsTcd.absId]].
     * @returns A request builder for creating requests that delete an entity of type `TaxCodeDeterminationsTcd`.
     */
    delete(absId: number): DeleteRequestBuilderV4<TaxCodeDeterminationsTcd>;
    /**
     * Returns a request builder for deleting an entity of type `TaxCodeDeterminationsTcd`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TaxCodeDeterminationsTcd` by taking the entity as a parameter.
     */
    delete(entity: TaxCodeDeterminationsTcd): DeleteRequestBuilderV4<TaxCodeDeterminationsTcd>;
}
//# sourceMappingURL=TaxCodeDeterminationsTcdRequestBuilder.d.ts.map