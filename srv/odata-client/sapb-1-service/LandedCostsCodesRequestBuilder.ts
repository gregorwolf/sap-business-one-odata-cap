/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(code: string): GetByKeyRequestBuilder<LandedCostsCodes> {
    return new GetByKeyRequestBuilder(LandedCostsCodes, { Code: code });
  }

  /**
   * Returns a request builder for querying all `LandedCostsCodes` entities.
   * @returns A request builder for creating requests to retrieve all `LandedCostsCodes` entities.
   */
  getAll(): GetAllRequestBuilder<LandedCostsCodes> {
    return new GetAllRequestBuilder(LandedCostsCodes);
  }

  /**
   * Returns a request builder for creating a `LandedCostsCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LandedCostsCodes`.
   */
  create(entity: LandedCostsCodes): CreateRequestBuilder<LandedCostsCodes> {
    return new CreateRequestBuilder(LandedCostsCodes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `LandedCostsCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LandedCostsCodes`.
   */
  update(entity: LandedCostsCodes): UpdateRequestBuilder<LandedCostsCodes> {
    return new UpdateRequestBuilder(LandedCostsCodes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LandedCostsCodes`.
   * @param code Key property. See [[LandedCostsCodes.code]].
   * @returns A request builder for creating requests that delete an entity of type `LandedCostsCodes`.
   */
  delete(code: string): DeleteRequestBuilder<LandedCostsCodes>;
  /**
   * Returns a request builder for deleting an entity of type `LandedCostsCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostsCodes` by taking the entity as a parameter.
   */
  delete(entity: LandedCostsCodes): DeleteRequestBuilder<LandedCostsCodes>;
  delete(codeOrEntity: any): DeleteRequestBuilder<LandedCostsCodes> {
    return new DeleteRequestBuilder(LandedCostsCodes, codeOrEntity instanceof LandedCostsCodes ? codeOrEntity : { Code: codeOrEntity! });
  }
}
