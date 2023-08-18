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
import { ReportFilter } from './ReportFilter';

/**
 * Request builder class for operations supported on the {@link ReportFilter} entity.
 */
export class ReportFilterRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReportFilter<T>, T> {
  /**
   * Returns a request builder for retrieving one `ReportFilter` entity based on its keys.
   * @param code Key property. See {@link ReportFilter.code}.
   * @returns A request builder for creating requests to retrieve one `ReportFilter` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ReportFilter<T>, T> {
    return new GetByKeyRequestBuilder<ReportFilter<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `ReportFilter` entities.
   * @returns A request builder for creating requests to retrieve all `ReportFilter` entities.
   */
  getAll(): GetAllRequestBuilder<ReportFilter<T>, T> {
    return new GetAllRequestBuilder<ReportFilter<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReportFilter` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReportFilter`.
   */
  create(entity: ReportFilter<T>): CreateRequestBuilder<ReportFilter<T>, T> {
    return new CreateRequestBuilder<ReportFilter<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ReportFilter`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReportFilter`.
   */
  update(entity: ReportFilter<T>): UpdateRequestBuilder<ReportFilter<T>, T> {
    return new UpdateRequestBuilder<ReportFilter<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReportFilter`.
   * @param code Key property. See {@link ReportFilter.code}.
   * @returns A request builder for creating requests that delete an entity of type `ReportFilter`.
   */
  delete(code: number): DeleteRequestBuilder<ReportFilter<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReportFilter`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReportFilter` by taking the entity as a parameter.
   */
  delete(entity: ReportFilter<T>): DeleteRequestBuilder<ReportFilter<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ReportFilter<T>, T> {
    return new DeleteRequestBuilder<ReportFilter<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ReportFilter
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
