/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { MultiLanguageTranslations } from './MultiLanguageTranslations';

/**
 * Request builder class for operations supported on the [[MultiLanguageTranslations]] entity.
 */
export class MultiLanguageTranslationsRequestBuilder extends RequestBuilder<MultiLanguageTranslations> {
  /**
   * Returns a request builder for retrieving one `MultiLanguageTranslations` entity based on its keys.
   * @param numerator Key property. See [[MultiLanguageTranslations.numerator]].
   * @returns A request builder for creating requests to retrieve one `MultiLanguageTranslations` entity based on its keys.
   */
  getByKey(numerator: number): GetByKeyRequestBuilderV4<MultiLanguageTranslations> {
    return new GetByKeyRequestBuilderV4(MultiLanguageTranslations, { Numerator: numerator });
  }

  /**
   * Returns a request builder for querying all `MultiLanguageTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `MultiLanguageTranslations` entities.
   */
  getAll(): GetAllRequestBuilderV4<MultiLanguageTranslations> {
    return new GetAllRequestBuilderV4(MultiLanguageTranslations);
  }

  /**
   * Returns a request builder for creating a `MultiLanguageTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MultiLanguageTranslations`.
   */
  create(entity: MultiLanguageTranslations): CreateRequestBuilderV4<MultiLanguageTranslations> {
    return new CreateRequestBuilderV4(MultiLanguageTranslations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `MultiLanguageTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MultiLanguageTranslations`.
   */
  update(entity: MultiLanguageTranslations): UpdateRequestBuilderV4<MultiLanguageTranslations> {
    return new UpdateRequestBuilderV4(MultiLanguageTranslations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MultiLanguageTranslations`.
   * @param numerator Key property. See [[MultiLanguageTranslations.numerator]].
   * @returns A request builder for creating requests that delete an entity of type `MultiLanguageTranslations`.
   */
  delete(numerator: number): DeleteRequestBuilderV4<MultiLanguageTranslations>;
  /**
   * Returns a request builder for deleting an entity of type `MultiLanguageTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MultiLanguageTranslations` by taking the entity as a parameter.
   */
  delete(entity: MultiLanguageTranslations): DeleteRequestBuilderV4<MultiLanguageTranslations>;
  delete(numeratorOrEntity: any): DeleteRequestBuilderV4<MultiLanguageTranslations> {
    return new DeleteRequestBuilderV4(MultiLanguageTranslations, numeratorOrEntity instanceof MultiLanguageTranslations ? numeratorOrEntity : { Numerator: numeratorOrEntity! });
  }
}
