/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { BoeInstructions } from './BoeInstructions';

/**
 * Request builder class for operations supported on the {@link BoeInstructions} entity.
 */
export class BoeInstructionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BoeInstructions<T>, T> {
  /**
   * Returns a request builder for retrieving one `BoeInstructions` entity based on its keys.
   * @param instructionEntry Key property. See {@link BoeInstructions.instructionEntry}.
   * @returns A request builder for creating requests to retrieve one `BoeInstructions` entity based on its keys.
   */
  getByKey(
    instructionEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BoeInstructions<T>, T> {
    return new GetByKeyRequestBuilder<BoeInstructions<T>, T>(this.entityApi, {
      InstructionEntry: instructionEntry
    });
  }

  /**
   * Returns a request builder for querying all `BoeInstructions` entities.
   * @returns A request builder for creating requests to retrieve all `BoeInstructions` entities.
   */
  getAll(): GetAllRequestBuilder<BoeInstructions<T>, T> {
    return new GetAllRequestBuilder<BoeInstructions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BoeInstructions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BoeInstructions`.
   */
  create(
    entity: BoeInstructions<T>
  ): CreateRequestBuilder<BoeInstructions<T>, T> {
    return new CreateRequestBuilder<BoeInstructions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BoeInstructions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BoeInstructions`.
   */
  update(
    entity: BoeInstructions<T>
  ): UpdateRequestBuilder<BoeInstructions<T>, T> {
    return new UpdateRequestBuilder<BoeInstructions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BoeInstructions`.
   * @param instructionEntry Key property. See {@link BoeInstructions.instructionEntry}.
   * @returns A request builder for creating requests that delete an entity of type `BoeInstructions`.
   */
  delete(instructionEntry: number): DeleteRequestBuilder<BoeInstructions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BoeInstructions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BoeInstructions` by taking the entity as a parameter.
   */
  delete(
    entity: BoeInstructions<T>
  ): DeleteRequestBuilder<BoeInstructions<T>, T>;
  delete(
    instructionEntryOrEntity: any
  ): DeleteRequestBuilder<BoeInstructions<T>, T> {
    return new DeleteRequestBuilder<BoeInstructions<T>, T>(
      this.entityApi,
      instructionEntryOrEntity instanceof BoeInstructions
        ? instructionEntryOrEntity
        : { InstructionEntry: instructionEntryOrEntity! }
    );
  }
}
