/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(typeId: number): GetByKeyRequestBuilderV4<EmployeeRolesSetup> {
    return new GetByKeyRequestBuilderV4(EmployeeRolesSetup, { TypeID: typeId });
  }

  /**
   * Returns a request builder for querying all `EmployeeRolesSetup` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeRolesSetup` entities.
   */
  getAll(): GetAllRequestBuilderV4<EmployeeRolesSetup> {
    return new GetAllRequestBuilderV4(EmployeeRolesSetup);
  }

  /**
   * Returns a request builder for creating a `EmployeeRolesSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeRolesSetup`.
   */
  create(entity: EmployeeRolesSetup): CreateRequestBuilderV4<EmployeeRolesSetup> {
    return new CreateRequestBuilderV4(EmployeeRolesSetup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeRolesSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeRolesSetup`.
   */
  update(entity: EmployeeRolesSetup): UpdateRequestBuilderV4<EmployeeRolesSetup> {
    return new UpdateRequestBuilderV4(EmployeeRolesSetup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeRolesSetup`.
   * @param typeId Key property. See [[EmployeeRolesSetup.typeId]].
   * @returns A request builder for creating requests that delete an entity of type `EmployeeRolesSetup`.
   */
  delete(typeId: number): DeleteRequestBuilderV4<EmployeeRolesSetup>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeRolesSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeRolesSetup` by taking the entity as a parameter.
   */
  delete(entity: EmployeeRolesSetup): DeleteRequestBuilderV4<EmployeeRolesSetup>;
  delete(typeIdOrEntity: any): DeleteRequestBuilderV4<EmployeeRolesSetup> {
    return new DeleteRequestBuilderV4(EmployeeRolesSetup, typeIdOrEntity instanceof EmployeeRolesSetup ? typeIdOrEntity : { TypeID: typeIdOrEntity! });
  }
}
