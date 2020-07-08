/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ReportFilter } from './ReportFilter';

/**
 * Request builder class for operations supported on the [[ReportFilter]] entity.
 */
export class ReportFilterRequestBuilder extends RequestBuilder<ReportFilter> {
  /**
   * Returns a request builder for retrieving one `ReportFilter` entity based on its keys.
   * @param code Key property. See [[ReportFilter.code]].
   * @returns A request builder for creating requests to retrieve one `ReportFilter` entity based on its keys.
   */
  getByKey(code: number): GetByKeyRequestBuilder<ReportFilter> {
    return new GetByKeyRequestBuilder(ReportFilter, { Code: code });
  }

  /**
   * Returns a request builder for querying all `ReportFilter` entities.
   * @returns A request builder for creating requests to retrieve all `ReportFilter` entities.
   */
  getAll(): GetAllRequestBuilder<ReportFilter> {
    return new GetAllRequestBuilder(ReportFilter);
  }

  /**
   * Returns a request builder for creating a `ReportFilter` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReportFilter`.
   */
  create(entity: ReportFilter): CreateRequestBuilder<ReportFilter> {
    return new CreateRequestBuilder(ReportFilter, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ReportFilter`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReportFilter`.
   */
  update(entity: ReportFilter): UpdateRequestBuilder<ReportFilter> {
    return new UpdateRequestBuilder(ReportFilter, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReportFilter`.
   * @param code Key property. See [[ReportFilter.code]].
   * @returns A request builder for creating requests that delete an entity of type `ReportFilter`.
   */
  delete(code: number): DeleteRequestBuilder<ReportFilter>;
  /**
   * Returns a request builder for deleting an entity of type `ReportFilter`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReportFilter` by taking the entity as a parameter.
   */
  delete(entity: ReportFilter): DeleteRequestBuilder<ReportFilter>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ReportFilter> {
    return new DeleteRequestBuilder(ReportFilter, codeOrEntity instanceof ReportFilter ? codeOrEntity : { Code: codeOrEntity! });
  }
}
