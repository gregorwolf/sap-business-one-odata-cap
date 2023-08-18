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
import { ValueMappingCommunication } from './ValueMappingCommunication';

/**
 * Request builder class for operations supported on the {@link ValueMappingCommunication} entity.
 */
export class ValueMappingCommunicationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValueMappingCommunication<T>, T> {
  /**
   * Returns a request builder for retrieving one `ValueMappingCommunication` entity based on its keys.
   * @param absEntry Key property. See {@link ValueMappingCommunication.absEntry}.
   * @returns A request builder for creating requests to retrieve one `ValueMappingCommunication` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ValueMappingCommunication<T>, T> {
    return new GetByKeyRequestBuilder<ValueMappingCommunication<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `ValueMappingCommunication` entities.
   * @returns A request builder for creating requests to retrieve all `ValueMappingCommunication` entities.
   */
  getAll(): GetAllRequestBuilder<ValueMappingCommunication<T>, T> {
    return new GetAllRequestBuilder<ValueMappingCommunication<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ValueMappingCommunication` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValueMappingCommunication`.
   */
  create(
    entity: ValueMappingCommunication<T>
  ): CreateRequestBuilder<ValueMappingCommunication<T>, T> {
    return new CreateRequestBuilder<ValueMappingCommunication<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ValueMappingCommunication`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValueMappingCommunication`.
   */
  update(
    entity: ValueMappingCommunication<T>
  ): UpdateRequestBuilder<ValueMappingCommunication<T>, T> {
    return new UpdateRequestBuilder<ValueMappingCommunication<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ValueMappingCommunication`.
   * @param absEntry Key property. See {@link ValueMappingCommunication.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `ValueMappingCommunication`.
   */
  delete(
    absEntry: number
  ): DeleteRequestBuilder<ValueMappingCommunication<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValueMappingCommunication`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValueMappingCommunication` by taking the entity as a parameter.
   */
  delete(
    entity: ValueMappingCommunication<T>
  ): DeleteRequestBuilder<ValueMappingCommunication<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<ValueMappingCommunication<T>, T> {
    return new DeleteRequestBuilder<ValueMappingCommunication<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof ValueMappingCommunication
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
