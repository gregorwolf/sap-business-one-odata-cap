/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BoeInstructions } from './BoeInstructions';

/**
 * Request builder class for operations supported on the [[BoeInstructions]] entity.
 */
export class BoeInstructionsRequestBuilder extends RequestBuilder<BoeInstructions> {
  /**
   * Returns a request builder for retrieving one `BoeInstructions` entity based on its keys.
   * @param instructionEntry Key property. See [[BoeInstructions.instructionEntry]].
   * @returns A request builder for creating requests to retrieve one `BoeInstructions` entity based on its keys.
   */
  getByKey(instructionEntry: number): GetByKeyRequestBuilder<BoeInstructions> {
    return new GetByKeyRequestBuilder(BoeInstructions, { InstructionEntry: instructionEntry });
  }

  /**
   * Returns a request builder for querying all `BoeInstructions` entities.
   * @returns A request builder for creating requests to retrieve all `BoeInstructions` entities.
   */
  getAll(): GetAllRequestBuilder<BoeInstructions> {
    return new GetAllRequestBuilder(BoeInstructions);
  }

  /**
   * Returns a request builder for creating a `BoeInstructions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BoeInstructions`.
   */
  create(entity: BoeInstructions): CreateRequestBuilder<BoeInstructions> {
    return new CreateRequestBuilder(BoeInstructions, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BoeInstructions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BoeInstructions`.
   */
  update(entity: BoeInstructions): UpdateRequestBuilder<BoeInstructions> {
    return new UpdateRequestBuilder(BoeInstructions, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BoeInstructions`.
   * @param instructionEntry Key property. See [[BoeInstructions.instructionEntry]].
   * @returns A request builder for creating requests that delete an entity of type `BoeInstructions`.
   */
  delete(instructionEntry: number): DeleteRequestBuilder<BoeInstructions>;
  /**
   * Returns a request builder for deleting an entity of type `BoeInstructions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BoeInstructions` by taking the entity as a parameter.
   */
  delete(entity: BoeInstructions): DeleteRequestBuilder<BoeInstructions>;
  delete(instructionEntryOrEntity: any): DeleteRequestBuilder<BoeInstructions> {
    return new DeleteRequestBuilder(BoeInstructions, instructionEntryOrEntity instanceof BoeInstructions ? instructionEntryOrEntity : { InstructionEntry: instructionEntryOrEntity! });
  }
}
