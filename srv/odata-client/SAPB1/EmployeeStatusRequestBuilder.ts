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
import { EmployeeStatus } from './EmployeeStatus';

/**
 * Request builder class for operations supported on the {@link EmployeeStatus} entity.
 */
export class EmployeeStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeStatus<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeStatus` entity based on its keys.
   * @param statusId Key property. See {@link EmployeeStatus.statusId}.
   * @returns A request builder for creating requests to retrieve one `EmployeeStatus` entity based on its keys.
   */
  getByKey(
    statusId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EmployeeStatus<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeStatus<T>, T>(this.entityApi, {
      StatusId: statusId
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeStatus` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeStatus` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeStatus<T>, T> {
    return new GetAllRequestBuilder<EmployeeStatus<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeStatus`.
   */
  create(
    entity: EmployeeStatus<T>
  ): CreateRequestBuilder<EmployeeStatus<T>, T> {
    return new CreateRequestBuilder<EmployeeStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeStatus`.
   */
  update(
    entity: EmployeeStatus<T>
  ): UpdateRequestBuilder<EmployeeStatus<T>, T> {
    return new UpdateRequestBuilder<EmployeeStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeStatus`.
   * @param statusId Key property. See {@link EmployeeStatus.statusId}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeStatus`.
   */
  delete(statusId: number): DeleteRequestBuilder<EmployeeStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeStatus` by taking the entity as a parameter.
   */
  delete(entity: EmployeeStatus<T>): DeleteRequestBuilder<EmployeeStatus<T>, T>;
  delete(statusIdOrEntity: any): DeleteRequestBuilder<EmployeeStatus<T>, T> {
    return new DeleteRequestBuilder<EmployeeStatus<T>, T>(
      this.entityApi,
      statusIdOrEntity instanceof EmployeeStatus
        ? statusIdOrEntity
        : { StatusId: statusIdOrEntity! }
    );
  }
}
