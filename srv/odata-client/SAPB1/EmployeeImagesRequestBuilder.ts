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
import { EmployeeImages } from './EmployeeImages';

/**
 * Request builder class for operations supported on the {@link EmployeeImages} entity.
 */
export class EmployeeImagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeImages<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeImages` entity based on its keys.
   * @param employeeNo Key property. See {@link EmployeeImages.employeeNo}.
   * @returns A request builder for creating requests to retrieve one `EmployeeImages` entity based on its keys.
   */
  getByKey(
    employeeNo: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EmployeeImages<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeImages<T>, T>(this.entityApi, {
      EmployeeNo: employeeNo
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeImages` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeImages` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeImages<T>, T> {
    return new GetAllRequestBuilder<EmployeeImages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeImages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeImages`.
   */
  create(
    entity: EmployeeImages<T>
  ): CreateRequestBuilder<EmployeeImages<T>, T> {
    return new CreateRequestBuilder<EmployeeImages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeImages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeImages`.
   */
  update(
    entity: EmployeeImages<T>
  ): UpdateRequestBuilder<EmployeeImages<T>, T> {
    return new UpdateRequestBuilder<EmployeeImages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeImages`.
   * @param employeeNo Key property. See {@link EmployeeImages.employeeNo}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeImages`.
   */
  delete(employeeNo: number): DeleteRequestBuilder<EmployeeImages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeImages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeImages` by taking the entity as a parameter.
   */
  delete(entity: EmployeeImages<T>): DeleteRequestBuilder<EmployeeImages<T>, T>;
  delete(employeeNoOrEntity: any): DeleteRequestBuilder<EmployeeImages<T>, T> {
    return new DeleteRequestBuilder<EmployeeImages<T>, T>(
      this.entityApi,
      employeeNoOrEntity instanceof EmployeeImages
        ? employeeNoOrEntity
        : { EmployeeNo: employeeNoOrEntity! }
    );
  }
}
