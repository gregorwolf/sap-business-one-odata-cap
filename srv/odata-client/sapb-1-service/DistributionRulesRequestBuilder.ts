/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { DistributionRules } from './DistributionRules';

/**
 * Request builder class for operations supported on the [[DistributionRules]] entity.
 */
export class DistributionRulesRequestBuilder extends RequestBuilder<DistributionRules> {
  /**
   * Returns a request builder for retrieving one `DistributionRules` entity based on its keys.
   * @param factorCode Key property. See [[DistributionRules.factorCode]].
   * @returns A request builder for creating requests to retrieve one `DistributionRules` entity based on its keys.
   */
  getByKey(factorCode: string): GetByKeyRequestBuilderV4<DistributionRules> {
    return new GetByKeyRequestBuilderV4(DistributionRules, { FactorCode: factorCode });
  }

  /**
   * Returns a request builder for querying all `DistributionRules` entities.
   * @returns A request builder for creating requests to retrieve all `DistributionRules` entities.
   */
  getAll(): GetAllRequestBuilderV4<DistributionRules> {
    return new GetAllRequestBuilderV4(DistributionRules);
  }

  /**
   * Returns a request builder for creating a `DistributionRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DistributionRules`.
   */
  create(entity: DistributionRules): CreateRequestBuilderV4<DistributionRules> {
    return new CreateRequestBuilderV4(DistributionRules, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DistributionRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DistributionRules`.
   */
  update(entity: DistributionRules): UpdateRequestBuilderV4<DistributionRules> {
    return new UpdateRequestBuilderV4(DistributionRules, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DistributionRules`.
   * @param factorCode Key property. See [[DistributionRules.factorCode]].
   * @returns A request builder for creating requests that delete an entity of type `DistributionRules`.
   */
  delete(factorCode: string): DeleteRequestBuilderV4<DistributionRules>;
  /**
   * Returns a request builder for deleting an entity of type `DistributionRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DistributionRules` by taking the entity as a parameter.
   */
  delete(entity: DistributionRules): DeleteRequestBuilderV4<DistributionRules>;
  delete(factorCodeOrEntity: any): DeleteRequestBuilderV4<DistributionRules> {
    return new DeleteRequestBuilderV4(DistributionRules, factorCodeOrEntity instanceof DistributionRules ? factorCodeOrEntity : { FactorCode: factorCodeOrEntity! });
  }
}
