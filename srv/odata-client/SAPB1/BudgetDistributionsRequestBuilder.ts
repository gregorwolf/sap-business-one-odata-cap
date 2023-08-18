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
import { BudgetDistributions } from './BudgetDistributions';

/**
 * Request builder class for operations supported on the {@link BudgetDistributions} entity.
 */
export class BudgetDistributionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetDistributions<T>, T> {
  /**
   * Returns a request builder for retrieving one `BudgetDistributions` entity based on its keys.
   * @param divisionCode Key property. See {@link BudgetDistributions.divisionCode}.
   * @returns A request builder for creating requests to retrieve one `BudgetDistributions` entity based on its keys.
   */
  getByKey(
    divisionCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BudgetDistributions<T>, T> {
    return new GetByKeyRequestBuilder<BudgetDistributions<T>, T>(
      this.entityApi,
      { DivisionCode: divisionCode }
    );
  }

  /**
   * Returns a request builder for querying all `BudgetDistributions` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetDistributions` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetDistributions<T>, T> {
    return new GetAllRequestBuilder<BudgetDistributions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetDistributions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetDistributions`.
   */
  create(
    entity: BudgetDistributions<T>
  ): CreateRequestBuilder<BudgetDistributions<T>, T> {
    return new CreateRequestBuilder<BudgetDistributions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetDistributions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetDistributions`.
   */
  update(
    entity: BudgetDistributions<T>
  ): UpdateRequestBuilder<BudgetDistributions<T>, T> {
    return new UpdateRequestBuilder<BudgetDistributions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetDistributions`.
   * @param divisionCode Key property. See {@link BudgetDistributions.divisionCode}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetDistributions`.
   */
  delete(divisionCode: number): DeleteRequestBuilder<BudgetDistributions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetDistributions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetDistributions` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetDistributions<T>
  ): DeleteRequestBuilder<BudgetDistributions<T>, T>;
  delete(
    divisionCodeOrEntity: any
  ): DeleteRequestBuilder<BudgetDistributions<T>, T> {
    return new DeleteRequestBuilder<BudgetDistributions<T>, T>(
      this.entityApi,
      divisionCodeOrEntity instanceof BudgetDistributions
        ? divisionCodeOrEntity
        : { DivisionCode: divisionCodeOrEntity! }
    );
  }
}
