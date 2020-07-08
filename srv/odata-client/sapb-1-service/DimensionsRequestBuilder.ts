/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Dimensions } from './Dimensions';

/**
 * Request builder class for operations supported on the [[Dimensions]] entity.
 */
export class DimensionsRequestBuilder extends RequestBuilder<Dimensions> {
  /**
   * Returns a request builder for retrieving one `Dimensions` entity based on its keys.
   * @param dimensionCode Key property. See [[Dimensions.dimensionCode]].
   * @returns A request builder for creating requests to retrieve one `Dimensions` entity based on its keys.
   */
  getByKey(dimensionCode: number): GetByKeyRequestBuilder<Dimensions> {
    return new GetByKeyRequestBuilder(Dimensions, { DimensionCode: dimensionCode });
  }

  /**
   * Returns a request builder for querying all `Dimensions` entities.
   * @returns A request builder for creating requests to retrieve all `Dimensions` entities.
   */
  getAll(): GetAllRequestBuilder<Dimensions> {
    return new GetAllRequestBuilder(Dimensions);
  }

  /**
   * Returns a request builder for creating a `Dimensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Dimensions`.
   */
  create(entity: Dimensions): CreateRequestBuilder<Dimensions> {
    return new CreateRequestBuilder(Dimensions, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Dimensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Dimensions`.
   */
  update(entity: Dimensions): UpdateRequestBuilder<Dimensions> {
    return new UpdateRequestBuilder(Dimensions, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Dimensions`.
   * @param dimensionCode Key property. See [[Dimensions.dimensionCode]].
   * @returns A request builder for creating requests that delete an entity of type `Dimensions`.
   */
  delete(dimensionCode: number): DeleteRequestBuilder<Dimensions>;
  /**
   * Returns a request builder for deleting an entity of type `Dimensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Dimensions` by taking the entity as a parameter.
   */
  delete(entity: Dimensions): DeleteRequestBuilder<Dimensions>;
  delete(dimensionCodeOrEntity: any): DeleteRequestBuilder<Dimensions> {
    return new DeleteRequestBuilder(Dimensions, dimensionCodeOrEntity instanceof Dimensions ? dimensionCodeOrEntity : { DimensionCode: dimensionCodeOrEntity! });
  }
}
