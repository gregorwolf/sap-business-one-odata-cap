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
import { IdentificationCodes } from './IdentificationCodes';

/**
 * Request builder class for operations supported on the {@link IdentificationCodes} entity.
 */
export class IdentificationCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IdentificationCodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `IdentificationCodes` entity based on its keys.
   * @param absEntry Key property. See {@link IdentificationCodes.absEntry}.
   * @returns A request builder for creating requests to retrieve one `IdentificationCodes` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<IdentificationCodes<T>, T> {
    return new GetByKeyRequestBuilder<IdentificationCodes<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `IdentificationCodes` entities.
   * @returns A request builder for creating requests to retrieve all `IdentificationCodes` entities.
   */
  getAll(): GetAllRequestBuilder<IdentificationCodes<T>, T> {
    return new GetAllRequestBuilder<IdentificationCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IdentificationCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IdentificationCodes`.
   */
  create(
    entity: IdentificationCodes<T>
  ): CreateRequestBuilder<IdentificationCodes<T>, T> {
    return new CreateRequestBuilder<IdentificationCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IdentificationCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IdentificationCodes`.
   */
  update(
    entity: IdentificationCodes<T>
  ): UpdateRequestBuilder<IdentificationCodes<T>, T> {
    return new UpdateRequestBuilder<IdentificationCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IdentificationCodes`.
   * @param absEntry Key property. See {@link IdentificationCodes.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `IdentificationCodes`.
   */
  delete(absEntry: number): DeleteRequestBuilder<IdentificationCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IdentificationCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IdentificationCodes` by taking the entity as a parameter.
   */
  delete(
    entity: IdentificationCodes<T>
  ): DeleteRequestBuilder<IdentificationCodes<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<IdentificationCodes<T>, T> {
    return new DeleteRequestBuilder<IdentificationCodes<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof IdentificationCodes
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
