/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ExtendedTranslations } from './ExtendedTranslations';

/**
 * Request builder class for operations supported on the [[ExtendedTranslations]] entity.
 */
export class ExtendedTranslationsRequestBuilder extends RequestBuilder<ExtendedTranslations> {
  /**
   * Returns a request builder for retrieving one `ExtendedTranslations` entity based on its keys.
   * @param docEntry Key property. See [[ExtendedTranslations.docEntry]].
   * @returns A request builder for creating requests to retrieve one `ExtendedTranslations` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<ExtendedTranslations> {
    return new GetByKeyRequestBuilderV4(ExtendedTranslations, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `ExtendedTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ExtendedTranslations` entities.
   */
  getAll(): GetAllRequestBuilderV4<ExtendedTranslations> {
    return new GetAllRequestBuilderV4(ExtendedTranslations);
  }

  /**
   * Returns a request builder for creating a `ExtendedTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExtendedTranslations`.
   */
  create(entity: ExtendedTranslations): CreateRequestBuilderV4<ExtendedTranslations> {
    return new CreateRequestBuilderV4(ExtendedTranslations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ExtendedTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExtendedTranslations`.
   */
  update(entity: ExtendedTranslations): UpdateRequestBuilderV4<ExtendedTranslations> {
    return new UpdateRequestBuilderV4(ExtendedTranslations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExtendedTranslations`.
   * @param docEntry Key property. See [[ExtendedTranslations.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `ExtendedTranslations`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<ExtendedTranslations>;
  /**
   * Returns a request builder for deleting an entity of type `ExtendedTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExtendedTranslations` by taking the entity as a parameter.
   */
  delete(entity: ExtendedTranslations): DeleteRequestBuilderV4<ExtendedTranslations>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<ExtendedTranslations> {
    return new DeleteRequestBuilderV4(ExtendedTranslations, docEntryOrEntity instanceof ExtendedTranslations ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
