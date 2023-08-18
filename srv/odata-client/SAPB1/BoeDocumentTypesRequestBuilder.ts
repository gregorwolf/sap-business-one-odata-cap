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
import { BoeDocumentTypes } from './BoeDocumentTypes';

/**
 * Request builder class for operations supported on the {@link BoeDocumentTypes} entity.
 */
export class BoeDocumentTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BoeDocumentTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `BoeDocumentTypes` entity based on its keys.
   * @param docEntry Key property. See {@link BoeDocumentTypes.docEntry}.
   * @returns A request builder for creating requests to retrieve one `BoeDocumentTypes` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BoeDocumentTypes<T>, T> {
    return new GetByKeyRequestBuilder<BoeDocumentTypes<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `BoeDocumentTypes` entities.
   * @returns A request builder for creating requests to retrieve all `BoeDocumentTypes` entities.
   */
  getAll(): GetAllRequestBuilder<BoeDocumentTypes<T>, T> {
    return new GetAllRequestBuilder<BoeDocumentTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BoeDocumentTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BoeDocumentTypes`.
   */
  create(
    entity: BoeDocumentTypes<T>
  ): CreateRequestBuilder<BoeDocumentTypes<T>, T> {
    return new CreateRequestBuilder<BoeDocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BoeDocumentTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BoeDocumentTypes`.
   */
  update(
    entity: BoeDocumentTypes<T>
  ): UpdateRequestBuilder<BoeDocumentTypes<T>, T> {
    return new UpdateRequestBuilder<BoeDocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BoeDocumentTypes`.
   * @param docEntry Key property. See {@link BoeDocumentTypes.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `BoeDocumentTypes`.
   */
  delete(docEntry: number): DeleteRequestBuilder<BoeDocumentTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BoeDocumentTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BoeDocumentTypes` by taking the entity as a parameter.
   */
  delete(
    entity: BoeDocumentTypes<T>
  ): DeleteRequestBuilder<BoeDocumentTypes<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<BoeDocumentTypes<T>, T> {
    return new DeleteRequestBuilder<BoeDocumentTypes<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof BoeDocumentTypes
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
