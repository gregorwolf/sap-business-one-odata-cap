/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { SalesPersons } from './SalesPersons';

/**
 * Request builder class for operations supported on the [[SalesPersons]] entity.
 */
export class SalesPersonsRequestBuilder extends RequestBuilder<SalesPersons> {
  /**
   * Returns a request builder for retrieving one `SalesPersons` entity based on its keys.
   * @param salesEmployeeCode Key property. See [[SalesPersons.salesEmployeeCode]].
   * @returns A request builder for creating requests to retrieve one `SalesPersons` entity based on its keys.
   */
  getByKey(salesEmployeeCode: number): GetByKeyRequestBuilder<SalesPersons> {
    return new GetByKeyRequestBuilder(SalesPersons, { SalesEmployeeCode: salesEmployeeCode });
  }

  /**
   * Returns a request builder for querying all `SalesPersons` entities.
   * @returns A request builder for creating requests to retrieve all `SalesPersons` entities.
   */
  getAll(): GetAllRequestBuilder<SalesPersons> {
    return new GetAllRequestBuilder(SalesPersons);
  }

  /**
   * Returns a request builder for creating a `SalesPersons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesPersons`.
   */
  create(entity: SalesPersons): CreateRequestBuilder<SalesPersons> {
    return new CreateRequestBuilder(SalesPersons, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesPersons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesPersons`.
   */
  update(entity: SalesPersons): UpdateRequestBuilder<SalesPersons> {
    return new UpdateRequestBuilder(SalesPersons, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesPersons`.
   * @param salesEmployeeCode Key property. See [[SalesPersons.salesEmployeeCode]].
   * @returns A request builder for creating requests that delete an entity of type `SalesPersons`.
   */
  delete(salesEmployeeCode: number): DeleteRequestBuilder<SalesPersons>;
  /**
   * Returns a request builder for deleting an entity of type `SalesPersons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesPersons` by taking the entity as a parameter.
   */
  delete(entity: SalesPersons): DeleteRequestBuilder<SalesPersons>;
  delete(salesEmployeeCodeOrEntity: any): DeleteRequestBuilder<SalesPersons> {
    return new DeleteRequestBuilder(SalesPersons, salesEmployeeCodeOrEntity instanceof SalesPersons ? salesEmployeeCodeOrEntity : { SalesEmployeeCode: salesEmployeeCodeOrEntity! });
  }
}
