/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { FormattedSearches } from './FormattedSearches';

/**
 * Request builder class for operations supported on the [[FormattedSearches]] entity.
 */
export class FormattedSearchesRequestBuilder extends RequestBuilder<FormattedSearches> {
  /**
   * Returns a request builder for retrieving one `FormattedSearches` entity based on its keys.
   * @param index Key property. See [[FormattedSearches.index]].
   * @returns A request builder for creating requests to retrieve one `FormattedSearches` entity based on its keys.
   */
  getByKey(index: number): GetByKeyRequestBuilderV4<FormattedSearches> {
    return new GetByKeyRequestBuilderV4(FormattedSearches, { Index: index });
  }

  /**
   * Returns a request builder for querying all `FormattedSearches` entities.
   * @returns A request builder for creating requests to retrieve all `FormattedSearches` entities.
   */
  getAll(): GetAllRequestBuilderV4<FormattedSearches> {
    return new GetAllRequestBuilderV4(FormattedSearches);
  }

  /**
   * Returns a request builder for creating a `FormattedSearches` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FormattedSearches`.
   */
  create(entity: FormattedSearches): CreateRequestBuilderV4<FormattedSearches> {
    return new CreateRequestBuilderV4(FormattedSearches, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `FormattedSearches`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FormattedSearches`.
   */
  update(entity: FormattedSearches): UpdateRequestBuilderV4<FormattedSearches> {
    return new UpdateRequestBuilderV4(FormattedSearches, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FormattedSearches`.
   * @param index Key property. See [[FormattedSearches.index]].
   * @returns A request builder for creating requests that delete an entity of type `FormattedSearches`.
   */
  delete(index: number): DeleteRequestBuilderV4<FormattedSearches>;
  /**
   * Returns a request builder for deleting an entity of type `FormattedSearches`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FormattedSearches` by taking the entity as a parameter.
   */
  delete(entity: FormattedSearches): DeleteRequestBuilderV4<FormattedSearches>;
  delete(indexOrEntity: any): DeleteRequestBuilderV4<FormattedSearches> {
    return new DeleteRequestBuilderV4(FormattedSearches, indexOrEntity instanceof FormattedSearches ? indexOrEntity : { Index: indexOrEntity! });
  }
}
