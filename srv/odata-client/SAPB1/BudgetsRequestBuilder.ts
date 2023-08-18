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
import { Budgets } from './Budgets';

/**
 * Request builder class for operations supported on the {@link Budgets} entity.
 */
export class BudgetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Budgets<T>, T> {
  /**
   * Returns a request builder for retrieving one `Budgets` entity based on its keys.
   * @param numerator Key property. See {@link Budgets.numerator}.
   * @returns A request builder for creating requests to retrieve one `Budgets` entity based on its keys.
   */
  getByKey(
    numerator: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Budgets<T>, T> {
    return new GetByKeyRequestBuilder<Budgets<T>, T>(this.entityApi, {
      Numerator: numerator
    });
  }

  /**
   * Returns a request builder for querying all `Budgets` entities.
   * @returns A request builder for creating requests to retrieve all `Budgets` entities.
   */
  getAll(): GetAllRequestBuilder<Budgets<T>, T> {
    return new GetAllRequestBuilder<Budgets<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Budgets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Budgets`.
   */
  create(entity: Budgets<T>): CreateRequestBuilder<Budgets<T>, T> {
    return new CreateRequestBuilder<Budgets<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Budgets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Budgets`.
   */
  update(entity: Budgets<T>): UpdateRequestBuilder<Budgets<T>, T> {
    return new UpdateRequestBuilder<Budgets<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Budgets`.
   * @param numerator Key property. See {@link Budgets.numerator}.
   * @returns A request builder for creating requests that delete an entity of type `Budgets`.
   */
  delete(numerator: number): DeleteRequestBuilder<Budgets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Budgets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Budgets` by taking the entity as a parameter.
   */
  delete(entity: Budgets<T>): DeleteRequestBuilder<Budgets<T>, T>;
  delete(numeratorOrEntity: any): DeleteRequestBuilder<Budgets<T>, T> {
    return new DeleteRequestBuilder<Budgets<T>, T>(
      this.entityApi,
      numeratorOrEntity instanceof Budgets
        ? numeratorOrEntity
        : { Numerator: numeratorOrEntity! }
    );
  }
}
