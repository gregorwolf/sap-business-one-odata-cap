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
import { ReportTypes } from './ReportTypes';

/**
 * Request builder class for operations supported on the {@link ReportTypes} entity.
 */
export class ReportTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReportTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `ReportTypes` entity based on its keys.
   * @param typeCode Key property. See {@link ReportTypes.typeCode}.
   * @returns A request builder for creating requests to retrieve one `ReportTypes` entity based on its keys.
   */
  getByKey(
    typeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReportTypes<T>, T> {
    return new GetByKeyRequestBuilder<ReportTypes<T>, T>(this.entityApi, {
      TypeCode: typeCode
    });
  }

  /**
   * Returns a request builder for querying all `ReportTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ReportTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ReportTypes<T>, T> {
    return new GetAllRequestBuilder<ReportTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReportTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReportTypes`.
   */
  create(entity: ReportTypes<T>): CreateRequestBuilder<ReportTypes<T>, T> {
    return new CreateRequestBuilder<ReportTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ReportTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReportTypes`.
   */
  update(entity: ReportTypes<T>): UpdateRequestBuilder<ReportTypes<T>, T> {
    return new UpdateRequestBuilder<ReportTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReportTypes`.
   * @param typeCode Key property. See {@link ReportTypes.typeCode}.
   * @returns A request builder for creating requests that delete an entity of type `ReportTypes`.
   */
  delete(typeCode: string): DeleteRequestBuilder<ReportTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReportTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReportTypes` by taking the entity as a parameter.
   */
  delete(entity: ReportTypes<T>): DeleteRequestBuilder<ReportTypes<T>, T>;
  delete(typeCodeOrEntity: any): DeleteRequestBuilder<ReportTypes<T>, T> {
    return new DeleteRequestBuilder<ReportTypes<T>, T>(
      this.entityApi,
      typeCodeOrEntity instanceof ReportTypes
        ? typeCodeOrEntity
        : { TypeCode: typeCodeOrEntity! }
    );
  }
}
