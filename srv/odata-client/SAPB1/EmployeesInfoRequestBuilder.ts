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
import { EmployeesInfo } from './EmployeesInfo';

/**
 * Request builder class for operations supported on the {@link EmployeesInfo} entity.
 */
export class EmployeesInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeesInfo<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeesInfo` entity based on its keys.
   * @param employeeId Key property. See {@link EmployeesInfo.employeeId}.
   * @returns A request builder for creating requests to retrieve one `EmployeesInfo` entity based on its keys.
   */
  getByKey(
    employeeId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EmployeesInfo<T>, T> {
    return new GetByKeyRequestBuilder<EmployeesInfo<T>, T>(this.entityApi, {
      EmployeeID: employeeId
    });
  }

  /**
   * Returns a request builder for querying all `EmployeesInfo` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeesInfo` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeesInfo<T>, T> {
    return new GetAllRequestBuilder<EmployeesInfo<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeesInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeesInfo`.
   */
  create(entity: EmployeesInfo<T>): CreateRequestBuilder<EmployeesInfo<T>, T> {
    return new CreateRequestBuilder<EmployeesInfo<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeesInfo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeesInfo`.
   */
  update(entity: EmployeesInfo<T>): UpdateRequestBuilder<EmployeesInfo<T>, T> {
    return new UpdateRequestBuilder<EmployeesInfo<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeesInfo`.
   * @param employeeId Key property. See {@link EmployeesInfo.employeeId}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeesInfo`.
   */
  delete(employeeId: number): DeleteRequestBuilder<EmployeesInfo<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeesInfo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeesInfo` by taking the entity as a parameter.
   */
  delete(entity: EmployeesInfo<T>): DeleteRequestBuilder<EmployeesInfo<T>, T>;
  delete(employeeIdOrEntity: any): DeleteRequestBuilder<EmployeesInfo<T>, T> {
    return new DeleteRequestBuilder<EmployeesInfo<T>, T>(
      this.entityApi,
      employeeIdOrEntity instanceof EmployeesInfo
        ? employeeIdOrEntity
        : { EmployeeID: employeeIdOrEntity! }
    );
  }
}
