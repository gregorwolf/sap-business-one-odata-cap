/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { BudgetScenarios } from './BudgetScenarios';

/**
 * Request builder class for operations supported on the {@link BudgetScenarios} entity.
 */
export class BudgetScenariosRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetScenarios<T>, T> {
  /**
   * Returns a request builder for retrieving one `BudgetScenarios` entity based on its keys.
   * @param numerator Key property. See {@link BudgetScenarios.numerator}.
   * @returns A request builder for creating requests to retrieve one `BudgetScenarios` entity based on its keys.
   */
  getByKey(
    numerator: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BudgetScenarios<T>, T> {
    return new GetByKeyRequestBuilder<BudgetScenarios<T>, T>(this.entityApi, {
      Numerator: numerator
    });
  }

  /**
   * Returns a request builder for querying all `BudgetScenarios` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetScenarios` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetScenarios<T>, T> {
    return new GetAllRequestBuilder<BudgetScenarios<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetScenarios` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetScenarios`.
   */
  create(
    entity: BudgetScenarios<T>
  ): CreateRequestBuilder<BudgetScenarios<T>, T> {
    return new CreateRequestBuilder<BudgetScenarios<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetScenarios`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetScenarios`.
   */
  update(
    entity: BudgetScenarios<T>
  ): UpdateRequestBuilder<BudgetScenarios<T>, T> {
    return new UpdateRequestBuilder<BudgetScenarios<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetScenarios`.
   * @param numerator Key property. See {@link BudgetScenarios.numerator}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetScenarios`.
   */
  delete(numerator: number): DeleteRequestBuilder<BudgetScenarios<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetScenarios`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetScenarios` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetScenarios<T>
  ): DeleteRequestBuilder<BudgetScenarios<T>, T>;
  delete(numeratorOrEntity: any): DeleteRequestBuilder<BudgetScenarios<T>, T> {
    return new DeleteRequestBuilder<BudgetScenarios<T>, T>(
      this.entityApi,
      numeratorOrEntity instanceof BudgetScenarios
        ? numeratorOrEntity
        : { Numerator: numeratorOrEntity! }
    );
  }
}