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
import { SalesPersons } from './SalesPersons';

/**
 * Request builder class for operations supported on the {@link SalesPersons} entity.
 */
export class SalesPersonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesPersons<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesPersons` entity based on its keys.
   * @param salesEmployeeCode Key property. See {@link SalesPersons.salesEmployeeCode}.
   * @returns A request builder for creating requests to retrieve one `SalesPersons` entity based on its keys.
   */
  getByKey(
    salesEmployeeCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesPersons<T>, T> {
    return new GetByKeyRequestBuilder<SalesPersons<T>, T>(this.entityApi, {
      SalesEmployeeCode: salesEmployeeCode
    });
  }

  /**
   * Returns a request builder for querying all `SalesPersons` entities.
   * @returns A request builder for creating requests to retrieve all `SalesPersons` entities.
   */
  getAll(): GetAllRequestBuilder<SalesPersons<T>, T> {
    return new GetAllRequestBuilder<SalesPersons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesPersons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesPersons`.
   */
  create(entity: SalesPersons<T>): CreateRequestBuilder<SalesPersons<T>, T> {
    return new CreateRequestBuilder<SalesPersons<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesPersons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesPersons`.
   */
  update(entity: SalesPersons<T>): UpdateRequestBuilder<SalesPersons<T>, T> {
    return new UpdateRequestBuilder<SalesPersons<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesPersons`.
   * @param salesEmployeeCode Key property. See {@link SalesPersons.salesEmployeeCode}.
   * @returns A request builder for creating requests that delete an entity of type `SalesPersons`.
   */
  delete(salesEmployeeCode: number): DeleteRequestBuilder<SalesPersons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesPersons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesPersons` by taking the entity as a parameter.
   */
  delete(entity: SalesPersons<T>): DeleteRequestBuilder<SalesPersons<T>, T>;
  delete(
    salesEmployeeCodeOrEntity: any
  ): DeleteRequestBuilder<SalesPersons<T>, T> {
    return new DeleteRequestBuilder<SalesPersons<T>, T>(
      this.entityApi,
      salesEmployeeCodeOrEntity instanceof SalesPersons
        ? salesEmployeeCodeOrEntity
        : { SalesEmployeeCode: salesEmployeeCodeOrEntity! }
    );
  }
}
