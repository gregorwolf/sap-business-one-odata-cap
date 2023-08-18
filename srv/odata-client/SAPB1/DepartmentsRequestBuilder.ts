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
import { Departments } from './Departments';

/**
 * Request builder class for operations supported on the {@link Departments} entity.
 */
export class DepartmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Departments<T>, T> {
  /**
   * Returns a request builder for retrieving one `Departments` entity based on its keys.
   * @param code Key property. See {@link Departments.code}.
   * @returns A request builder for creating requests to retrieve one `Departments` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Departments<T>, T> {
    return new GetByKeyRequestBuilder<Departments<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `Departments` entities.
   * @returns A request builder for creating requests to retrieve all `Departments` entities.
   */
  getAll(): GetAllRequestBuilder<Departments<T>, T> {
    return new GetAllRequestBuilder<Departments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Departments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Departments`.
   */
  create(entity: Departments<T>): CreateRequestBuilder<Departments<T>, T> {
    return new CreateRequestBuilder<Departments<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Departments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Departments`.
   */
  update(entity: Departments<T>): UpdateRequestBuilder<Departments<T>, T> {
    return new UpdateRequestBuilder<Departments<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Departments`.
   * @param code Key property. See {@link Departments.code}.
   * @returns A request builder for creating requests that delete an entity of type `Departments`.
   */
  delete(code: number): DeleteRequestBuilder<Departments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Departments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Departments` by taking the entity as a parameter.
   */
  delete(entity: Departments<T>): DeleteRequestBuilder<Departments<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<Departments<T>, T> {
    return new DeleteRequestBuilder<Departments<T>, T>(
      this.entityApi,
      codeOrEntity instanceof Departments
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
