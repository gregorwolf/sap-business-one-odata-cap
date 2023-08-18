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
import { ExtendedTranslations } from './ExtendedTranslations';

/**
 * Request builder class for operations supported on the {@link ExtendedTranslations} entity.
 */
export class ExtendedTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExtendedTranslations<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExtendedTranslations` entity based on its keys.
   * @param docEntry Key property. See {@link ExtendedTranslations.docEntry}.
   * @returns A request builder for creating requests to retrieve one `ExtendedTranslations` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ExtendedTranslations<T>, T> {
    return new GetByKeyRequestBuilder<ExtendedTranslations<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `ExtendedTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ExtendedTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<ExtendedTranslations<T>, T> {
    return new GetAllRequestBuilder<ExtendedTranslations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExtendedTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExtendedTranslations`.
   */
  create(
    entity: ExtendedTranslations<T>
  ): CreateRequestBuilder<ExtendedTranslations<T>, T> {
    return new CreateRequestBuilder<ExtendedTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExtendedTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExtendedTranslations`.
   */
  update(
    entity: ExtendedTranslations<T>
  ): UpdateRequestBuilder<ExtendedTranslations<T>, T> {
    return new UpdateRequestBuilder<ExtendedTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExtendedTranslations`.
   * @param docEntry Key property. See {@link ExtendedTranslations.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `ExtendedTranslations`.
   */
  delete(docEntry: number): DeleteRequestBuilder<ExtendedTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExtendedTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExtendedTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: ExtendedTranslations<T>
  ): DeleteRequestBuilder<ExtendedTranslations<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<ExtendedTranslations<T>, T> {
    return new DeleteRequestBuilder<ExtendedTranslations<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof ExtendedTranslations
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
