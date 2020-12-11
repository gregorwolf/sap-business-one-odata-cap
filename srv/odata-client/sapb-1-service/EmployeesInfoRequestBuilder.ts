/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { EmployeesInfo } from './EmployeesInfo';

/**
 * Request builder class for operations supported on the [[EmployeesInfo]] entity.
 */
export class EmployeesInfoRequestBuilder extends RequestBuilder<EmployeesInfo> {
  /**
   * Returns a request builder for retrieving one `EmployeesInfo` entity based on its keys.
   * @param employeeId Key property. See [[EmployeesInfo.employeeId]].
   * @returns A request builder for creating requests to retrieve one `EmployeesInfo` entity based on its keys.
   */
  getByKey(employeeId: number): GetByKeyRequestBuilderV4<EmployeesInfo> {
    return new GetByKeyRequestBuilderV4(EmployeesInfo, { EmployeeID: employeeId });
  }

  /**
   * Returns a request builder for querying all `EmployeesInfo` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeesInfo` entities.
   */
  getAll(): GetAllRequestBuilderV4<EmployeesInfo> {
    return new GetAllRequestBuilderV4(EmployeesInfo);
  }

  /**
   * Returns a request builder for creating a `EmployeesInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeesInfo`.
   */
  create(entity: EmployeesInfo): CreateRequestBuilderV4<EmployeesInfo> {
    return new CreateRequestBuilderV4(EmployeesInfo, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeesInfo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeesInfo`.
   */
  update(entity: EmployeesInfo): UpdateRequestBuilderV4<EmployeesInfo> {
    return new UpdateRequestBuilderV4(EmployeesInfo, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeesInfo`.
   * @param employeeId Key property. See [[EmployeesInfo.employeeId]].
   * @returns A request builder for creating requests that delete an entity of type `EmployeesInfo`.
   */
  delete(employeeId: number): DeleteRequestBuilderV4<EmployeesInfo>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeesInfo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeesInfo` by taking the entity as a parameter.
   */
  delete(entity: EmployeesInfo): DeleteRequestBuilderV4<EmployeesInfo>;
  delete(employeeIdOrEntity: any): DeleteRequestBuilderV4<EmployeesInfo> {
    return new DeleteRequestBuilderV4(EmployeesInfo, employeeIdOrEntity instanceof EmployeesInfo ? employeeIdOrEntity : { EmployeeID: employeeIdOrEntity! });
  }
}
