/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { EmployeeIdType } from './EmployeeIdType';

/**
 * Request builder class for operations supported on the [[EmployeeIdType]] entity.
 */
export class EmployeeIdTypeRequestBuilder extends RequestBuilder<EmployeeIdType> {
  /**
   * Returns a request builder for retrieving one `EmployeeIdType` entity based on its keys.
   * @param idType Key property. See [[EmployeeIdType.idType]].
   * @returns A request builder for creating requests to retrieve one `EmployeeIdType` entity based on its keys.
   */
  getByKey(idType: string): GetByKeyRequestBuilder<EmployeeIdType> {
    return new GetByKeyRequestBuilder(EmployeeIdType, { IDType: idType });
  }

  /**
   * Returns a request builder for querying all `EmployeeIdType` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeIdType` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeIdType> {
    return new GetAllRequestBuilder(EmployeeIdType);
  }

  /**
   * Returns a request builder for creating a `EmployeeIdType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeIdType`.
   */
  create(entity: EmployeeIdType): CreateRequestBuilder<EmployeeIdType> {
    return new CreateRequestBuilder(EmployeeIdType, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeIdType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeIdType`.
   */
  update(entity: EmployeeIdType): UpdateRequestBuilder<EmployeeIdType> {
    return new UpdateRequestBuilder(EmployeeIdType, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeIdType`.
   * @param idType Key property. See [[EmployeeIdType.idType]].
   * @returns A request builder for creating requests that delete an entity of type `EmployeeIdType`.
   */
  delete(idType: string): DeleteRequestBuilder<EmployeeIdType>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeIdType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeIdType` by taking the entity as a parameter.
   */
  delete(entity: EmployeeIdType): DeleteRequestBuilder<EmployeeIdType>;
  delete(idTypeOrEntity: any): DeleteRequestBuilder<EmployeeIdType> {
    return new DeleteRequestBuilder(EmployeeIdType, idTypeOrEntity instanceof EmployeeIdType ? idTypeOrEntity : { IDType: idTypeOrEntity! });
  }
}
