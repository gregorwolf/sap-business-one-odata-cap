/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(instructionEntry: number): GetByKeyRequestBuilderV4<BoeInstructions> {
    return new GetByKeyRequestBuilderV4(BoeInstructions, { InstructionEntry: instructionEntry });
  }

  /**
   * Returns a request builder for querying all `BoeInstructions` entities.
   * @returns A request builder for creating requests to retrieve all `BoeInstructions` entities.
   */
  getAll(): GetAllRequestBuilderV4<BoeInstructions> {
    return new GetAllRequestBuilderV4(BoeInstructions);
  }

  /**
   * Returns a request builder for creating a `BoeInstructions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BoeInstructions`.
   */
  create(entity: BoeInstructions): CreateRequestBuilderV4<BoeInstructions> {
    return new CreateRequestBuilderV4(BoeInstructions, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BoeInstructions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BoeInstructions`.
   */
  update(entity: BoeInstructions): UpdateRequestBuilderV4<BoeInstructions> {
    return new UpdateRequestBuilderV4(BoeInstructions, entity);
  }

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
  delete(instructionEntryOrEntity: any): DeleteRequestBuilderV4<BoeInstructions> {
    return new DeleteRequestBuilderV4(BoeInstructions, instructionEntryOrEntity instanceof BoeInstructions ? instructionEntryOrEntity : { InstructionEntry: instructionEntryOrEntity! });
  }
}
