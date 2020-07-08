import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BrazilFuelIndexers } from './BrazilFuelIndexers';
/**
 * Request builder class for operations supported on the [[BrazilFuelIndexers]] entity.
 */
export declare class BrazilFuelIndexersRequestBuilder extends RequestBuilder<BrazilFuelIndexers> {
    /**
     * Returns a request builder for retrieving one `BrazilFuelIndexers` entity based on its keys.
     * @param fuelId Key property. See [[BrazilFuelIndexers.fuelId]].
     * @returns A request builder for creating requests to retrieve one `BrazilFuelIndexers` entity based on its keys.
     */
    getByKey(fuelId: number): GetByKeyRequestBuilder<BrazilFuelIndexers>;
    /**
     * Returns a request builder for querying all `BrazilFuelIndexers` entities.
     * @returns A request builder for creating requests to retrieve all `BrazilFuelIndexers` entities.
     */
    getAll(): GetAllRequestBuilder<BrazilFuelIndexers>;
    /**
     * Returns a request builder for creating a `BrazilFuelIndexers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BrazilFuelIndexers`.
     */
    create(entity: BrazilFuelIndexers): CreateRequestBuilder<BrazilFuelIndexers>;
    /**
     * Returns a request builder for updating an entity of type `BrazilFuelIndexers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BrazilFuelIndexers`.
     */
    update(entity: BrazilFuelIndexers): UpdateRequestBuilder<BrazilFuelIndexers>;
    /**
     * Returns a request builder for deleting an entity of type `BrazilFuelIndexers`.
     * @param fuelId Key property. See [[BrazilFuelIndexers.fuelId]].
     * @returns A request builder for creating requests that delete an entity of type `BrazilFuelIndexers`.
     */
    delete(fuelId: number): DeleteRequestBuilder<BrazilFuelIndexers>;
    /**
     * Returns a request builder for deleting an entity of type `BrazilFuelIndexers`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BrazilFuelIndexers` by taking the entity as a parameter.
     */
    delete(entity: BrazilFuelIndexers): DeleteRequestBuilder<BrazilFuelIndexers>;
}
//# sourceMappingURL=BrazilFuelIndexersRequestBuilder.d.ts.map