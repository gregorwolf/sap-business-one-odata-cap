/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BudgetDistributions } from './BudgetDistributions';

/**
 * Request builder class for operations supported on the [[BudgetDistributions]] entity.
 */
export class BudgetDistributionsRequestBuilder extends RequestBuilder<BudgetDistributions> {
  /**
   * Returns a request builder for retrieving one `BudgetDistributions` entity based on its keys.
   * @param divisionCode Key property. See [[BudgetDistributions.divisionCode]].
   * @returns A request builder for creating requests to retrieve one `BudgetDistributions` entity based on its keys.
   */
  getByKey(divisionCode: number): GetByKeyRequestBuilder<BudgetDistributions> {
    return new GetByKeyRequestBuilder(BudgetDistributions, { DivisionCode: divisionCode });
  }

  /**
   * Returns a request builder for querying all `BudgetDistributions` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetDistributions` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetDistributions> {
    return new GetAllRequestBuilder(BudgetDistributions);
  }

  /**
   * Returns a request builder for creating a `BudgetDistributions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetDistributions`.
   */
  create(entity: BudgetDistributions): CreateRequestBuilder<BudgetDistributions> {
    return new CreateRequestBuilder(BudgetDistributions, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetDistributions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetDistributions`.
   */
  update(entity: BudgetDistributions): UpdateRequestBuilder<BudgetDistributions> {
    return new UpdateRequestBuilder(BudgetDistributions, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetDistributions`.
   * @param divisionCode Key property. See [[BudgetDistributions.divisionCode]].
   * @returns A request builder for creating requests that delete an entity of type `BudgetDistributions`.
   */
  delete(divisionCode: number): DeleteRequestBuilder<BudgetDistributions>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetDistributions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetDistributions` by taking the entity as a parameter.
   */
  delete(entity: BudgetDistributions): DeleteRequestBuilder<BudgetDistributions>;
  delete(divisionCodeOrEntity: any): DeleteRequestBuilder<BudgetDistributions> {
    return new DeleteRequestBuilder(BudgetDistributions, divisionCodeOrEntity instanceof BudgetDistributions ? divisionCodeOrEntity : { DivisionCode: divisionCodeOrEntity! });
  }
}
