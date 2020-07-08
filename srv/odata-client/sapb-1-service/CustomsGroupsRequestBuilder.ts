/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CustomsGroups } from './CustomsGroups';

/**
 * Request builder class for operations supported on the [[CustomsGroups]] entity.
 */
export class CustomsGroupsRequestBuilder extends RequestBuilder<CustomsGroups> {
  /**
   * Returns a request builder for retrieving one `CustomsGroups` entity based on its keys.
   * @param code Key property. See [[CustomsGroups.code]].
   * @returns A request builder for creating requests to retrieve one `CustomsGroups` entity based on its keys.
   */
  getByKey(code: number): GetByKeyRequestBuilder<CustomsGroups> {
    return new GetByKeyRequestBuilder(CustomsGroups, { Code: code });
  }

  /**
   * Returns a request builder for querying all `CustomsGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CustomsGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CustomsGroups> {
    return new GetAllRequestBuilder(CustomsGroups);
  }

  /**
   * Returns a request builder for creating a `CustomsGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomsGroups`.
   */
  create(entity: CustomsGroups): CreateRequestBuilder<CustomsGroups> {
    return new CreateRequestBuilder(CustomsGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomsGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomsGroups`.
   */
  update(entity: CustomsGroups): UpdateRequestBuilder<CustomsGroups> {
    return new UpdateRequestBuilder(CustomsGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomsGroups`.
   * @param code Key property. See [[CustomsGroups.code]].
   * @returns A request builder for creating requests that delete an entity of type `CustomsGroups`.
   */
  delete(code: number): DeleteRequestBuilder<CustomsGroups>;
  /**
   * Returns a request builder for deleting an entity of type `CustomsGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomsGroups` by taking the entity as a parameter.
   */
  delete(entity: CustomsGroups): DeleteRequestBuilder<CustomsGroups>;
  delete(codeOrEntity: any): DeleteRequestBuilder<CustomsGroups> {
    return new DeleteRequestBuilder(CustomsGroups, codeOrEntity instanceof CustomsGroups ? codeOrEntity : { Code: codeOrEntity! });
  }
}
