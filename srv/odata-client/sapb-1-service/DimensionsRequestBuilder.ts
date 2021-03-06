/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(dimensionCode: number): GetByKeyRequestBuilderV4<Dimensions> {
    return new GetByKeyRequestBuilderV4(Dimensions, { DimensionCode: dimensionCode });
  }

  /**
   * Returns a request builder for querying all `Dimensions` entities.
   * @returns A request builder for creating requests to retrieve all `Dimensions` entities.
   */
  getAll(): GetAllRequestBuilderV4<Dimensions> {
    return new GetAllRequestBuilderV4(Dimensions);
  }

  /**
   * Returns a request builder for creating a `Dimensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Dimensions`.
   */
  create(entity: Dimensions): CreateRequestBuilderV4<Dimensions> {
    return new CreateRequestBuilderV4(Dimensions, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Dimensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Dimensions`.
   */
  update(entity: Dimensions): UpdateRequestBuilderV4<Dimensions> {
    return new UpdateRequestBuilderV4(Dimensions, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Dimensions`.
   * @param dimensionCode Key property. See [[Dimensions.dimensionCode]].
   * @returns A request builder for creating requests that delete an entity of type `Dimensions`.
   */
  delete(dimensionCode: number): DeleteRequestBuilderV4<Dimensions>;
  /**
   * Returns a request builder for deleting an entity of type `Dimensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Dimensions` by taking the entity as a parameter.
   */
  delete(entity: Dimensions): DeleteRequestBuilderV4<Dimensions>;
  delete(dimensionCodeOrEntity: any): DeleteRequestBuilderV4<Dimensions> {
    return new DeleteRequestBuilderV4(Dimensions, dimensionCodeOrEntity instanceof Dimensions ? dimensionCodeOrEntity : { DimensionCode: dimensionCodeOrEntity! });
  }
}
