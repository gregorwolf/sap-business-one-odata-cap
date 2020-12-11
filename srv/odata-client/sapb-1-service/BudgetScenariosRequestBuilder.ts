/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BudgetScenarios } from './BudgetScenarios';

/**
 * Request builder class for operations supported on the [[BudgetScenarios]] entity.
 */
export class BudgetScenariosRequestBuilder extends RequestBuilder<BudgetScenarios> {
  /**
   * Returns a request builder for retrieving one `BudgetScenarios` entity based on its keys.
   * @param numerator Key property. See [[BudgetScenarios.numerator]].
   * @returns A request builder for creating requests to retrieve one `BudgetScenarios` entity based on its keys.
   */
  getByKey(numerator: number): GetByKeyRequestBuilderV4<BudgetScenarios> {
    return new GetByKeyRequestBuilderV4(BudgetScenarios, { Numerator: numerator });
  }

  /**
   * Returns a request builder for querying all `BudgetScenarios` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetScenarios` entities.
   */
  getAll(): GetAllRequestBuilderV4<BudgetScenarios> {
    return new GetAllRequestBuilderV4(BudgetScenarios);
  }

  /**
   * Returns a request builder for creating a `BudgetScenarios` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetScenarios`.
   */
  create(entity: BudgetScenarios): CreateRequestBuilderV4<BudgetScenarios> {
    return new CreateRequestBuilderV4(BudgetScenarios, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetScenarios`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetScenarios`.
   */
  update(entity: BudgetScenarios): UpdateRequestBuilderV4<BudgetScenarios> {
    return new UpdateRequestBuilderV4(BudgetScenarios, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetScenarios`.
   * @param numerator Key property. See [[BudgetScenarios.numerator]].
   * @returns A request builder for creating requests that delete an entity of type `BudgetScenarios`.
   */
  delete(numerator: number): DeleteRequestBuilderV4<BudgetScenarios>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetScenarios`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetScenarios` by taking the entity as a parameter.
   */
  delete(entity: BudgetScenarios): DeleteRequestBuilderV4<BudgetScenarios>;
  delete(numeratorOrEntity: any): DeleteRequestBuilderV4<BudgetScenarios> {
    return new DeleteRequestBuilderV4(BudgetScenarios, numeratorOrEntity instanceof BudgetScenarios ? numeratorOrEntity : { Numerator: numeratorOrEntity! });
  }
}
