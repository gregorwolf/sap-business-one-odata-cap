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
import { AdditionalExpenses } from './AdditionalExpenses';

/**
 * Request builder class for operations supported on the {@link AdditionalExpenses} entity.
 */
export class AdditionalExpensesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AdditionalExpenses<T>, T> {
  /**
   * Returns a request builder for retrieving one `AdditionalExpenses` entity based on its keys.
   * @param expensCode Key property. See {@link AdditionalExpenses.expensCode}.
   * @returns A request builder for creating requests to retrieve one `AdditionalExpenses` entity based on its keys.
   */
  getByKey(
    expensCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AdditionalExpenses<T>, T> {
    return new GetByKeyRequestBuilder<AdditionalExpenses<T>, T>(
      this.entityApi,
      { ExpensCode: expensCode }
    );
  }

  /**
   * Returns a request builder for querying all `AdditionalExpenses` entities.
   * @returns A request builder for creating requests to retrieve all `AdditionalExpenses` entities.
   */
  getAll(): GetAllRequestBuilder<AdditionalExpenses<T>, T> {
    return new GetAllRequestBuilder<AdditionalExpenses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AdditionalExpenses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdditionalExpenses`.
   */
  create(
    entity: AdditionalExpenses<T>
  ): CreateRequestBuilder<AdditionalExpenses<T>, T> {
    return new CreateRequestBuilder<AdditionalExpenses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AdditionalExpenses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdditionalExpenses`.
   */
  update(
    entity: AdditionalExpenses<T>
  ): UpdateRequestBuilder<AdditionalExpenses<T>, T> {
    return new UpdateRequestBuilder<AdditionalExpenses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AdditionalExpenses`.
   * @param expensCode Key property. See {@link AdditionalExpenses.expensCode}.
   * @returns A request builder for creating requests that delete an entity of type `AdditionalExpenses`.
   */
  delete(expensCode: number): DeleteRequestBuilder<AdditionalExpenses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AdditionalExpenses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdditionalExpenses` by taking the entity as a parameter.
   */
  delete(
    entity: AdditionalExpenses<T>
  ): DeleteRequestBuilder<AdditionalExpenses<T>, T>;
  delete(
    expensCodeOrEntity: any
  ): DeleteRequestBuilder<AdditionalExpenses<T>, T> {
    return new DeleteRequestBuilder<AdditionalExpenses<T>, T>(
      this.entityApi,
      expensCodeOrEntity instanceof AdditionalExpenses
        ? expensCodeOrEntity
        : { ExpensCode: expensCodeOrEntity! }
    );
  }
}
