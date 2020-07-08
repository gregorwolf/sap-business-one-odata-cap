import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { FiscalPrinter } from './FiscalPrinter';
/**
 * Request builder class for operations supported on the [[FiscalPrinter]] entity.
 */
export declare class FiscalPrinterRequestBuilder extends RequestBuilder<FiscalPrinter> {
    /**
     * Returns a request builder for retrieving one `FiscalPrinter` entity based on its keys.
     * @param equipmentNo Key property. See [[FiscalPrinter.equipmentNo]].
     * @returns A request builder for creating requests to retrieve one `FiscalPrinter` entity based on its keys.
     */
    getByKey(equipmentNo: string): GetByKeyRequestBuilder<FiscalPrinter>;
    /**
     * Returns a request builder for querying all `FiscalPrinter` entities.
     * @returns A request builder for creating requests to retrieve all `FiscalPrinter` entities.
     */
    getAll(): GetAllRequestBuilder<FiscalPrinter>;
    /**
     * Returns a request builder for creating a `FiscalPrinter` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FiscalPrinter`.
     */
    create(entity: FiscalPrinter): CreateRequestBuilder<FiscalPrinter>;
    /**
     * Returns a request builder for updating an entity of type `FiscalPrinter`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FiscalPrinter`.
     */
    update(entity: FiscalPrinter): UpdateRequestBuilder<FiscalPrinter>;
    /**
     * Returns a request builder for deleting an entity of type `FiscalPrinter`.
     * @param equipmentNo Key property. See [[FiscalPrinter.equipmentNo]].
     * @returns A request builder for creating requests that delete an entity of type `FiscalPrinter`.
     */
    delete(equipmentNo: string): DeleteRequestBuilder<FiscalPrinter>;
    /**
     * Returns a request builder for deleting an entity of type `FiscalPrinter`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FiscalPrinter` by taking the entity as a parameter.
     */
    delete(entity: FiscalPrinter): DeleteRequestBuilder<FiscalPrinter>;
}
//# sourceMappingURL=FiscalPrinterRequestBuilder.d.ts.map