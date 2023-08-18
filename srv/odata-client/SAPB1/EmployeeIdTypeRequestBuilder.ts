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
import { EmployeeIdType } from './EmployeeIdType';

/**
 * Request builder class for operations supported on the {@link EmployeeIdType} entity.
 */
export class EmployeeIdTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeIdType<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeIdType` entity based on its keys.
   * @param idType Key property. See {@link EmployeeIdType.idType}.
   * @returns A request builder for creating requests to retrieve one `EmployeeIdType` entity based on its keys.
   */
  getByKey(
    idType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmployeeIdType<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeIdType<T>, T>(this.entityApi, {
      IDType: idType
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeIdType` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeIdType` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeIdType<T>, T> {
    return new GetAllRequestBuilder<EmployeeIdType<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeIdType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeIdType`.
   */
  create(
    entity: EmployeeIdType<T>
  ): CreateRequestBuilder<EmployeeIdType<T>, T> {
    return new CreateRequestBuilder<EmployeeIdType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeIdType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeIdType`.
   */
  update(
    entity: EmployeeIdType<T>
  ): UpdateRequestBuilder<EmployeeIdType<T>, T> {
    return new UpdateRequestBuilder<EmployeeIdType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeIdType`.
   * @param idType Key property. See {@link EmployeeIdType.idType}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeIdType`.
   */
  delete(idType: string): DeleteRequestBuilder<EmployeeIdType<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeIdType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeIdType` by taking the entity as a parameter.
   */
  delete(entity: EmployeeIdType<T>): DeleteRequestBuilder<EmployeeIdType<T>, T>;
  delete(idTypeOrEntity: any): DeleteRequestBuilder<EmployeeIdType<T>, T> {
    return new DeleteRequestBuilder<EmployeeIdType<T>, T>(
      this.entityApi,
      idTypeOrEntity instanceof EmployeeIdType
        ? idTypeOrEntity
        : { IDType: idTypeOrEntity! }
    );
  }
}
