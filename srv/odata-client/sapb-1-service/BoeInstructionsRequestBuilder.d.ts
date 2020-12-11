import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BoeInstructions } from './BoeInstructions';
/**
 * Request builder class for operations supported on the [[BoeInstructions]] entity.
 */
export declare class BoeInstructionsRequestBuilder extends RequestBuilder<BoeInstructions> {
    /**
     * Returns a request builder for retrieving one `BoeInstructions` entity based on its keys.
     * @param instructionEntry Key property. See [[BoeInstructions.instructionEntry]].
     * @returns A request builder for creating requests to retrieve one `BoeInstructions` entity based on its keys.
     */
    getByKey(instructionEntry: number): GetByKeyRequestBuilderV4<BoeInstructions>;
    /**
     * Returns a request builder for querying all `BoeInstructions` entities.
     * @returns A request builder for creating requests to retrieve all `BoeInstructions` entities.
     */
    getAll(): GetAllRequestBuilderV4<BoeInstructions>;
    /**
     * Returns a request builder for creating a `BoeInstructions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BoeInstructions`.
     */
    create(entity: BoeInstructions): CreateRequestBuilderV4<BoeInstructions>;
    /**
     * Returns a request builder for updating an entity of type `BoeInstructions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BoeInstructions`.
     */
    update(entity: BoeInstructions): UpdateRequestBuilderV4<BoeInstructions>;
    /**
     * Returns a request builder for deleting an entity of type `BoeInstructions`.
     * @param instructionEntry Key property. See [[BoeInstructions.instructionEntry]].
     * @returns A request builder for creating requests that delete an entity of type `BoeInstructions`.
     */
    delete(instructionEntry: number): DeleteRequestBuilderV4<BoeInstructions>;
    /**
     * Returns a request builder for deleting an entity of type `BoeInstructions`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BoeInstructions` by taking the entity as a parameter.
     */
    delete(entity: BoeInstructions): DeleteRequestBuilderV4<BoeInstructions>;
}
//# sourceMappingURL=BoeInstructionsRequestBuilder.d.ts.map