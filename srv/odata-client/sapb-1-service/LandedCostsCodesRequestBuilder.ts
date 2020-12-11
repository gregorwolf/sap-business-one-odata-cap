/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { LandedCostsCodes } from './LandedCostsCodes';

/**
 * Request builder class for operations supported on the [[LandedCostsCodes]] entity.
 */
export class LandedCostsCodesRequestBuilder extends RequestBuilder<LandedCostsCodes> {
  /**
   * Returns a request builder for retrieving one `LandedCostsCodes` entity based on its keys.
   * @param code Key property. See [[LandedCostsCodes.code]].
   * @returns A request builder for creating requests to retrieve one `LandedCostsCodes` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilderV4<LandedCostsCodes> {
    return new GetByKeyRequestBuilderV4(LandedCostsCodes, { Code: code });
  }

  /**
   * Returns a request builder for querying all `LandedCostsCodes` entities.
   * @returns A request builder for creating requests to retrieve all `LandedCostsCodes` entities.
   */
  getAll(): GetAllRequestBuilderV4<LandedCostsCodes> {
    return new GetAllRequestBuilderV4(LandedCostsCodes);
  }

  /**
   * Returns a request builder for creating a `LandedCostsCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LandedCostsCodes`.
   */
  create(entity: LandedCostsCodes): CreateRequestBuilderV4<LandedCostsCodes> {
    return new CreateRequestBuilderV4(LandedCostsCodes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `LandedCostsCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LandedCostsCodes`.
   */
  update(entity: LandedCostsCodes): UpdateRequestBuilderV4<LandedCostsCodes> {
    return new UpdateRequestBuilderV4(LandedCostsCodes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LandedCostsCodes`.
   * @param code Key property. See [[LandedCostsCodes.code]].
   * @returns A request builder for creating requests that delete an entity of type `LandedCostsCodes`.
   */
  delete(code: string): DeleteRequestBuilderV4<LandedCostsCodes>;
  /**
   * Returns a request builder for deleting an entity of type `LandedCostsCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostsCodes` by taking the entity as a parameter.
   */
  delete(entity: LandedCostsCodes): DeleteRequestBuilderV4<LandedCostsCodes>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<LandedCostsCodes> {
    return new DeleteRequestBuilderV4(LandedCostsCodes, codeOrEntity instanceof LandedCostsCodes ? codeOrEntity : { Code: codeOrEntity! });
  }
}
