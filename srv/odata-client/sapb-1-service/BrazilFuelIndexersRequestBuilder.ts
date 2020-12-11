/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BrazilFuelIndexers } from './BrazilFuelIndexers';

/**
 * Request builder class for operations supported on the [[BrazilFuelIndexers]] entity.
 */
export class BrazilFuelIndexersRequestBuilder extends RequestBuilder<BrazilFuelIndexers> {
  /**
   * Returns a request builder for retrieving one `BrazilFuelIndexers` entity based on its keys.
   * @param fuelId Key property. See [[BrazilFuelIndexers.fuelId]].
   * @returns A request builder for creating requests to retrieve one `BrazilFuelIndexers` entity based on its keys.
   */
  getByKey(fuelId: number): GetByKeyRequestBuilderV4<BrazilFuelIndexers> {
    return new GetByKeyRequestBuilderV4(BrazilFuelIndexers, { FuelID: fuelId });
  }

  /**
   * Returns a request builder for querying all `BrazilFuelIndexers` entities.
   * @returns A request builder for creating requests to retrieve all `BrazilFuelIndexers` entities.
   */
  getAll(): GetAllRequestBuilderV4<BrazilFuelIndexers> {
    return new GetAllRequestBuilderV4(BrazilFuelIndexers);
  }

  /**
   * Returns a request builder for creating a `BrazilFuelIndexers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrazilFuelIndexers`.
   */
  create(entity: BrazilFuelIndexers): CreateRequestBuilderV4<BrazilFuelIndexers> {
    return new CreateRequestBuilderV4(BrazilFuelIndexers, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BrazilFuelIndexers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrazilFuelIndexers`.
   */
  update(entity: BrazilFuelIndexers): UpdateRequestBuilderV4<BrazilFuelIndexers> {
    return new UpdateRequestBuilderV4(BrazilFuelIndexers, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BrazilFuelIndexers`.
   * @param fuelId Key property. See [[BrazilFuelIndexers.fuelId]].
   * @returns A request builder for creating requests that delete an entity of type `BrazilFuelIndexers`.
   */
  delete(fuelId: number): DeleteRequestBuilderV4<BrazilFuelIndexers>;
  /**
   * Returns a request builder for deleting an entity of type `BrazilFuelIndexers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrazilFuelIndexers` by taking the entity as a parameter.
   */
  delete(entity: BrazilFuelIndexers): DeleteRequestBuilderV4<BrazilFuelIndexers>;
  delete(fuelIdOrEntity: any): DeleteRequestBuilderV4<BrazilFuelIndexers> {
    return new DeleteRequestBuilderV4(BrazilFuelIndexers, fuelIdOrEntity instanceof BrazilFuelIndexers ? fuelIdOrEntity : { FuelID: fuelIdOrEntity! });
  }
}
