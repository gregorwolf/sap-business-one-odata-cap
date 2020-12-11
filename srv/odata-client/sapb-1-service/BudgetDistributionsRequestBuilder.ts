/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(divisionCode: number): GetByKeyRequestBuilderV4<BudgetDistributions> {
    return new GetByKeyRequestBuilderV4(BudgetDistributions, { DivisionCode: divisionCode });
  }

  /**
   * Returns a request builder for querying all `BudgetDistributions` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetDistributions` entities.
   */
  getAll(): GetAllRequestBuilderV4<BudgetDistributions> {
    return new GetAllRequestBuilderV4(BudgetDistributions);
  }

  /**
   * Returns a request builder for creating a `BudgetDistributions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetDistributions`.
   */
  create(entity: BudgetDistributions): CreateRequestBuilderV4<BudgetDistributions> {
    return new CreateRequestBuilderV4(BudgetDistributions, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetDistributions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetDistributions`.
   */
  update(entity: BudgetDistributions): UpdateRequestBuilderV4<BudgetDistributions> {
    return new UpdateRequestBuilderV4(BudgetDistributions, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetDistributions`.
   * @param divisionCode Key property. See [[BudgetDistributions.divisionCode]].
   * @returns A request builder for creating requests that delete an entity of type `BudgetDistributions`.
   */
  delete(divisionCode: number): DeleteRequestBuilderV4<BudgetDistributions>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetDistributions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetDistributions` by taking the entity as a parameter.
   */
  delete(entity: BudgetDistributions): DeleteRequestBuilderV4<BudgetDistributions>;
  delete(divisionCodeOrEntity: any): DeleteRequestBuilderV4<BudgetDistributions> {
    return new DeleteRequestBuilderV4(BudgetDistributions, divisionCodeOrEntity instanceof BudgetDistributions ? divisionCodeOrEntity : { DivisionCode: divisionCodeOrEntity! });
  }
}
