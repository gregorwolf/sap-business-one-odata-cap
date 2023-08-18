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
import { ExpenseTypes } from './ExpenseTypes';

/**
 * Request builder class for operations supported on the {@link ExpenseTypes} entity.
 */
export class ExpenseTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExpenseTypes` entity based on its keys.
   * @param expenseType Key property. See {@link ExpenseTypes.expenseType}.
   * @returns A request builder for creating requests to retrieve one `ExpenseTypes` entity based on its keys.
   */
  getByKey(
    expenseType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseTypes<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseTypes<T>, T>(this.entityApi, {
      ExpenseType: expenseType
    });
  }

  /**
   * Returns a request builder for querying all `ExpenseTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseTypes<T>, T> {
    return new GetAllRequestBuilder<ExpenseTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpenseTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseTypes`.
   */
  create(entity: ExpenseTypes<T>): CreateRequestBuilder<ExpenseTypes<T>, T> {
    return new CreateRequestBuilder<ExpenseTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseTypes`.
   */
  update(entity: ExpenseTypes<T>): UpdateRequestBuilder<ExpenseTypes<T>, T> {
    return new UpdateRequestBuilder<ExpenseTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseTypes`.
   * @param expenseType Key property. See {@link ExpenseTypes.expenseType}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseTypes`.
   */
  delete(expenseType: string): DeleteRequestBuilder<ExpenseTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseTypes` by taking the entity as a parameter.
   */
  delete(entity: ExpenseTypes<T>): DeleteRequestBuilder<ExpenseTypes<T>, T>;
  delete(expenseTypeOrEntity: any): DeleteRequestBuilder<ExpenseTypes<T>, T> {
    return new DeleteRequestBuilder<ExpenseTypes<T>, T>(
      this.entityApi,
      expenseTypeOrEntity instanceof ExpenseTypes
        ? expenseTypeOrEntity
        : { ExpenseType: expenseTypeOrEntity! }
    );
  }
}
