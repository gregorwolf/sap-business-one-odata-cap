/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Budgets } from './Budgets';

/**
 * Request builder class for operations supported on the [[Budgets]] entity.
 */
export class BudgetsRequestBuilder extends RequestBuilder<Budgets> {
  /**
   * Returns a request builder for retrieving one `Budgets` entity based on its keys.
   * @param numerator Key property. See [[Budgets.numerator]].
   * @returns A request builder for creating requests to retrieve one `Budgets` entity based on its keys.
   */
  getByKey(numerator: number): GetByKeyRequestBuilder<Budgets> {
    return new GetByKeyRequestBuilder(Budgets, { Numerator: numerator });
  }

  /**
   * Returns a request builder for querying all `Budgets` entities.
   * @returns A request builder for creating requests to retrieve all `Budgets` entities.
   */
  getAll(): GetAllRequestBuilder<Budgets> {
    return new GetAllRequestBuilder(Budgets);
  }

  /**
   * Returns a request builder for creating a `Budgets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Budgets`.
   */
  create(entity: Budgets): CreateRequestBuilder<Budgets> {
    return new CreateRequestBuilder(Budgets, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Budgets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Budgets`.
   */
  update(entity: Budgets): UpdateRequestBuilder<Budgets> {
    return new UpdateRequestBuilder(Budgets, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Budgets`.
   * @param numerator Key property. See [[Budgets.numerator]].
   * @returns A request builder for creating requests that delete an entity of type `Budgets`.
   */
  delete(numerator: number): DeleteRequestBuilder<Budgets>;
  /**
   * Returns a request builder for deleting an entity of type `Budgets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Budgets` by taking the entity as a parameter.
   */
  delete(entity: Budgets): DeleteRequestBuilder<Budgets>;
  delete(numeratorOrEntity: any): DeleteRequestBuilder<Budgets> {
    return new DeleteRequestBuilder(Budgets, numeratorOrEntity instanceof Budgets ? numeratorOrEntity : { Numerator: numeratorOrEntity! });
  }
}
