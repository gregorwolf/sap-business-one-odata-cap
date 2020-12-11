/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(code: number): GetByKeyRequestBuilderV4<CustomsGroups> {
    return new GetByKeyRequestBuilderV4(CustomsGroups, { Code: code });
  }

  /**
   * Returns a request builder for querying all `CustomsGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CustomsGroups` entities.
   */
  getAll(): GetAllRequestBuilderV4<CustomsGroups> {
    return new GetAllRequestBuilderV4(CustomsGroups);
  }

  /**
   * Returns a request builder for creating a `CustomsGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomsGroups`.
   */
  create(entity: CustomsGroups): CreateRequestBuilderV4<CustomsGroups> {
    return new CreateRequestBuilderV4(CustomsGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomsGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomsGroups`.
   */
  update(entity: CustomsGroups): UpdateRequestBuilderV4<CustomsGroups> {
    return new UpdateRequestBuilderV4(CustomsGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomsGroups`.
   * @param code Key property. See [[CustomsGroups.code]].
   * @returns A request builder for creating requests that delete an entity of type `CustomsGroups`.
   */
  delete(code: number): DeleteRequestBuilderV4<CustomsGroups>;
  /**
   * Returns a request builder for deleting an entity of type `CustomsGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomsGroups` by taking the entity as a parameter.
   */
  delete(entity: CustomsGroups): DeleteRequestBuilderV4<CustomsGroups>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<CustomsGroups> {
    return new DeleteRequestBuilderV4(CustomsGroups, codeOrEntity instanceof CustomsGroups ? codeOrEntity : { Code: codeOrEntity! });
  }
}
