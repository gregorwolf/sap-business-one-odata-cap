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
import { MultiLanguageTranslations } from './MultiLanguageTranslations';

/**
 * Request builder class for operations supported on the {@link MultiLanguageTranslations} entity.
 */
export class MultiLanguageTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MultiLanguageTranslations<T>, T> {
  /**
   * Returns a request builder for retrieving one `MultiLanguageTranslations` entity based on its keys.
   * @param numerator Key property. See {@link MultiLanguageTranslations.numerator}.
   * @returns A request builder for creating requests to retrieve one `MultiLanguageTranslations` entity based on its keys.
   */
  getByKey(
    numerator: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<MultiLanguageTranslations<T>, T> {
    return new GetByKeyRequestBuilder<MultiLanguageTranslations<T>, T>(
      this.entityApi,
      { Numerator: numerator }
    );
  }

  /**
   * Returns a request builder for querying all `MultiLanguageTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `MultiLanguageTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<MultiLanguageTranslations<T>, T> {
    return new GetAllRequestBuilder<MultiLanguageTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MultiLanguageTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MultiLanguageTranslations`.
   */
  create(
    entity: MultiLanguageTranslations<T>
  ): CreateRequestBuilder<MultiLanguageTranslations<T>, T> {
    return new CreateRequestBuilder<MultiLanguageTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MultiLanguageTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MultiLanguageTranslations`.
   */
  update(
    entity: MultiLanguageTranslations<T>
  ): UpdateRequestBuilder<MultiLanguageTranslations<T>, T> {
    return new UpdateRequestBuilder<MultiLanguageTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MultiLanguageTranslations`.
   * @param numerator Key property. See {@link MultiLanguageTranslations.numerator}.
   * @returns A request builder for creating requests that delete an entity of type `MultiLanguageTranslations`.
   */
  delete(
    numerator: number
  ): DeleteRequestBuilder<MultiLanguageTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MultiLanguageTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MultiLanguageTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: MultiLanguageTranslations<T>
  ): DeleteRequestBuilder<MultiLanguageTranslations<T>, T>;
  delete(
    numeratorOrEntity: any
  ): DeleteRequestBuilder<MultiLanguageTranslations<T>, T> {
    return new DeleteRequestBuilder<MultiLanguageTranslations<T>, T>(
      this.entityApi,
      numeratorOrEntity instanceof MultiLanguageTranslations
        ? numeratorOrEntity
        : { Numerator: numeratorOrEntity! }
    );
  }
}
