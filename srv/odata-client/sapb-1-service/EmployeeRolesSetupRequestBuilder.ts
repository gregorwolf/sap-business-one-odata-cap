/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { EmployeeRolesSetup } from './EmployeeRolesSetup';

/**
 * Request builder class for operations supported on the [[EmployeeRolesSetup]] entity.
 */
export class EmployeeRolesSetupRequestBuilder extends RequestBuilder<EmployeeRolesSetup> {
  /**
   * Returns a request builder for retrieving one `EmployeeRolesSetup` entity based on its keys.
   * @param typeId Key property. See [[EmployeeRolesSetup.typeId]].
   * @returns A request builder for creating requests to retrieve one `EmployeeRolesSetup` entity based on its keys.
   */
  getByKey(typeId: number): GetByKeyRequestBuilder<EmployeeRolesSetup> {
    return new GetByKeyRequestBuilder(EmployeeRolesSetup, { TypeID: typeId });
  }

  /**
   * Returns a request builder for querying all `EmployeeRolesSetup` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeRolesSetup` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeRolesSetup> {
    return new GetAllRequestBuilder(EmployeeRolesSetup);
  }

  /**
   * Returns a request builder for creating a `EmployeeRolesSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeRolesSetup`.
   */
  create(entity: EmployeeRolesSetup): CreateRequestBuilder<EmployeeRolesSetup> {
    return new CreateRequestBuilder(EmployeeRolesSetup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeRolesSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeRolesSetup`.
   */
  update(entity: EmployeeRolesSetup): UpdateRequestBuilder<EmployeeRolesSetup> {
    return new UpdateRequestBuilder(EmployeeRolesSetup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeRolesSetup`.
   * @param typeId Key property. See [[EmployeeRolesSetup.typeId]].
   * @returns A request builder for creating requests that delete an entity of type `EmployeeRolesSetup`.
   */
  delete(typeId: number): DeleteRequestBuilder<EmployeeRolesSetup>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeRolesSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeRolesSetup` by taking the entity as a parameter.
   */
  delete(entity: EmployeeRolesSetup): DeleteRequestBuilder<EmployeeRolesSetup>;
  delete(typeIdOrEntity: any): DeleteRequestBuilder<EmployeeRolesSetup> {
    return new DeleteRequestBuilder(EmployeeRolesSetup, typeIdOrEntity instanceof EmployeeRolesSetup ? typeIdOrEntity : { TypeID: typeIdOrEntity! });
  }
}
