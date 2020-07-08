/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PredefinedTexts } from './PredefinedTexts';

/**
 * Request builder class for operations supported on the [[PredefinedTexts]] entity.
 */
export class PredefinedTextsRequestBuilder extends RequestBuilder<PredefinedTexts> {
  /**
   * Returns a request builder for retrieving one `PredefinedTexts` entity based on its keys.
   * @param numerator Key property. See [[PredefinedTexts.numerator]].
   * @returns A request builder for creating requests to retrieve one `PredefinedTexts` entity based on its keys.
   */
  getByKey(numerator: number): GetByKeyRequestBuilder<PredefinedTexts> {
    return new GetByKeyRequestBuilder(PredefinedTexts, { Numerator: numerator });
  }

  /**
   * Returns a request builder for querying all `PredefinedTexts` entities.
   * @returns A request builder for creating requests to retrieve all `PredefinedTexts` entities.
   */
  getAll(): GetAllRequestBuilder<PredefinedTexts> {
    return new GetAllRequestBuilder(PredefinedTexts);
  }

  /**
   * Returns a request builder for creating a `PredefinedTexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PredefinedTexts`.
   */
  create(entity: PredefinedTexts): CreateRequestBuilder<PredefinedTexts> {
    return new CreateRequestBuilder(PredefinedTexts, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PredefinedTexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PredefinedTexts`.
   */
  update(entity: PredefinedTexts): UpdateRequestBuilder<PredefinedTexts> {
    return new UpdateRequestBuilder(PredefinedTexts, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PredefinedTexts`.
   * @param numerator Key property. See [[PredefinedTexts.numerator]].
   * @returns A request builder for creating requests that delete an entity of type `PredefinedTexts`.
   */
  delete(numerator: number): DeleteRequestBuilder<PredefinedTexts>;
  /**
   * Returns a request builder for deleting an entity of type `PredefinedTexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PredefinedTexts` by taking the entity as a parameter.
   */
  delete(entity: PredefinedTexts): DeleteRequestBuilder<PredefinedTexts>;
  delete(numeratorOrEntity: any): DeleteRequestBuilder<PredefinedTexts> {
    return new DeleteRequestBuilder(PredefinedTexts, numeratorOrEntity instanceof PredefinedTexts ? numeratorOrEntity : { Numerator: numeratorOrEntity! });
  }
}
