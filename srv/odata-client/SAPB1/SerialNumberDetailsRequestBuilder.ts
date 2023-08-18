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
import { SerialNumberDetails } from './SerialNumberDetails';

/**
 * Request builder class for operations supported on the {@link SerialNumberDetails} entity.
 */
export class SerialNumberDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SerialNumberDetails<T>, T> {
  /**
   * Returns a request builder for retrieving one `SerialNumberDetails` entity based on its keys.
   * @param docEntry Key property. See {@link SerialNumberDetails.docEntry}.
   * @returns A request builder for creating requests to retrieve one `SerialNumberDetails` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SerialNumberDetails<T>, T> {
    return new GetByKeyRequestBuilder<SerialNumberDetails<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `SerialNumberDetails` entities.
   * @returns A request builder for creating requests to retrieve all `SerialNumberDetails` entities.
   */
  getAll(): GetAllRequestBuilder<SerialNumberDetails<T>, T> {
    return new GetAllRequestBuilder<SerialNumberDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SerialNumberDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SerialNumberDetails`.
   */
  create(
    entity: SerialNumberDetails<T>
  ): CreateRequestBuilder<SerialNumberDetails<T>, T> {
    return new CreateRequestBuilder<SerialNumberDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SerialNumberDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SerialNumberDetails`.
   */
  update(
    entity: SerialNumberDetails<T>
  ): UpdateRequestBuilder<SerialNumberDetails<T>, T> {
    return new UpdateRequestBuilder<SerialNumberDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SerialNumberDetails`.
   * @param docEntry Key property. See {@link SerialNumberDetails.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `SerialNumberDetails`.
   */
  delete(docEntry: number): DeleteRequestBuilder<SerialNumberDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SerialNumberDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SerialNumberDetails` by taking the entity as a parameter.
   */
  delete(
    entity: SerialNumberDetails<T>
  ): DeleteRequestBuilder<SerialNumberDetails<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<SerialNumberDetails<T>, T> {
    return new DeleteRequestBuilder<SerialNumberDetails<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof SerialNumberDetails
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
