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
import { EmployeeRolesSetup } from './EmployeeRolesSetup';

/**
 * Request builder class for operations supported on the {@link EmployeeRolesSetup} entity.
 */
export class EmployeeRolesSetupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeRolesSetup<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeRolesSetup` entity based on its keys.
   * @param typeId Key property. See {@link EmployeeRolesSetup.typeId}.
   * @returns A request builder for creating requests to retrieve one `EmployeeRolesSetup` entity based on its keys.
   */
  getByKey(
    typeId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EmployeeRolesSetup<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeRolesSetup<T>, T>(
      this.entityApi,
      { TypeID: typeId }
    );
  }

  /**
   * Returns a request builder for querying all `EmployeeRolesSetup` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeRolesSetup` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeRolesSetup<T>, T> {
    return new GetAllRequestBuilder<EmployeeRolesSetup<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeRolesSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeRolesSetup`.
   */
  create(
    entity: EmployeeRolesSetup<T>
  ): CreateRequestBuilder<EmployeeRolesSetup<T>, T> {
    return new CreateRequestBuilder<EmployeeRolesSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeRolesSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeRolesSetup`.
   */
  update(
    entity: EmployeeRolesSetup<T>
  ): UpdateRequestBuilder<EmployeeRolesSetup<T>, T> {
    return new UpdateRequestBuilder<EmployeeRolesSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeRolesSetup`.
   * @param typeId Key property. See {@link EmployeeRolesSetup.typeId}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeRolesSetup`.
   */
  delete(typeId: number): DeleteRequestBuilder<EmployeeRolesSetup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeRolesSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeRolesSetup` by taking the entity as a parameter.
   */
  delete(
    entity: EmployeeRolesSetup<T>
  ): DeleteRequestBuilder<EmployeeRolesSetup<T>, T>;
  delete(typeIdOrEntity: any): DeleteRequestBuilder<EmployeeRolesSetup<T>, T> {
    return new DeleteRequestBuilder<EmployeeRolesSetup<T>, T>(
      this.entityApi,
      typeIdOrEntity instanceof EmployeeRolesSetup
        ? typeIdOrEntity
        : { TypeID: typeIdOrEntity! }
    );
  }
}
