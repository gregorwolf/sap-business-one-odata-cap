/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PickLists } from './PickLists';

/**
 * Request builder class for operations supported on the [[PickLists]] entity.
 */
export class PickListsRequestBuilder extends RequestBuilder<PickLists> {
  /**
   * Returns a request builder for retrieving one `PickLists` entity based on its keys.
   * @param absoluteentry Key property. See [[PickLists.absoluteentry]].
   * @returns A request builder for creating requests to retrieve one `PickLists` entity based on its keys.
   */
  getByKey(absoluteentry: number): GetByKeyRequestBuilderV4<PickLists> {
    return new GetByKeyRequestBuilderV4(PickLists, { Absoluteentry: absoluteentry });
  }

  /**
   * Returns a request builder for querying all `PickLists` entities.
   * @returns A request builder for creating requests to retrieve all `PickLists` entities.
   */
  getAll(): GetAllRequestBuilderV4<PickLists> {
    return new GetAllRequestBuilderV4(PickLists);
  }

  /**
   * Returns a request builder for creating a `PickLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PickLists`.
   */
  create(entity: PickLists): CreateRequestBuilderV4<PickLists> {
    return new CreateRequestBuilderV4(PickLists, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PickLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PickLists`.
   */
  update(entity: PickLists): UpdateRequestBuilderV4<PickLists> {
    return new UpdateRequestBuilderV4(PickLists, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PickLists`.
   * @param absoluteentry Key property. See [[PickLists.absoluteentry]].
   * @returns A request builder for creating requests that delete an entity of type `PickLists`.
   */
  delete(absoluteentry: number): DeleteRequestBuilderV4<PickLists>;
  /**
   * Returns a request builder for deleting an entity of type `PickLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PickLists` by taking the entity as a parameter.
   */
  delete(entity: PickLists): DeleteRequestBuilderV4<PickLists>;
  delete(absoluteentryOrEntity: any): DeleteRequestBuilderV4<PickLists> {
    return new DeleteRequestBuilderV4(PickLists, absoluteentryOrEntity instanceof PickLists ? absoluteentryOrEntity : { Absoluteentry: absoluteentryOrEntity! });
  }
}
