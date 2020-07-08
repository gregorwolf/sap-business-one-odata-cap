/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(numerator: number): GetByKeyRequestBuilder<BudgetScenarios> {
    return new GetByKeyRequestBuilder(BudgetScenarios, { Numerator: numerator });
  }

  /**
   * Returns a request builder for querying all `BudgetScenarios` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetScenarios` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetScenarios> {
    return new GetAllRequestBuilder(BudgetScenarios);
  }

  /**
   * Returns a request builder for creating a `BudgetScenarios` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetScenarios`.
   */
  create(entity: BudgetScenarios): CreateRequestBuilder<BudgetScenarios> {
    return new CreateRequestBuilder(BudgetScenarios, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetScenarios`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetScenarios`.
   */
  update(entity: BudgetScenarios): UpdateRequestBuilder<BudgetScenarios> {
    return new UpdateRequestBuilder(BudgetScenarios, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetScenarios`.
   * @param numerator Key property. See [[BudgetScenarios.numerator]].
   * @returns A request builder for creating requests that delete an entity of type `BudgetScenarios`.
   */
  delete(numerator: number): DeleteRequestBuilder<BudgetScenarios>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetScenarios`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetScenarios` by taking the entity as a parameter.
   */
  delete(entity: BudgetScenarios): DeleteRequestBuilder<BudgetScenarios>;
  delete(numeratorOrEntity: any): DeleteRequestBuilder<BudgetScenarios> {
    return new DeleteRequestBuilder(BudgetScenarios, numeratorOrEntity instanceof BudgetScenarios ? numeratorOrEntity : { Numerator: numeratorOrEntity! });
  }
}
