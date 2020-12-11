/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Banks } from './Banks';

/**
 * Request builder class for operations supported on the [[Banks]] entity.
 */
export class BanksRequestBuilder extends RequestBuilder<Banks> {
  /**
   * Returns a request builder for retrieving one `Banks` entity based on its keys.
   * @param absoluteEntry Key property. See [[Banks.absoluteEntry]].
   * @returns A request builder for creating requests to retrieve one `Banks` entity based on its keys.
   */
  getByKey(absoluteEntry: number): GetByKeyRequestBuilderV4<Banks> {
    return new GetByKeyRequestBuilderV4(Banks, { AbsoluteEntry: absoluteEntry });
  }

  /**
   * Returns a request builder for querying all `Banks` entities.
   * @returns A request builder for creating requests to retrieve all `Banks` entities.
   */
  getAll(): GetAllRequestBuilderV4<Banks> {
    return new GetAllRequestBuilderV4(Banks);
  }

  /**
   * Returns a request builder for creating a `Banks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Banks`.
   */
  create(entity: Banks): CreateRequestBuilderV4<Banks> {
    return new CreateRequestBuilderV4(Banks, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Banks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Banks`.
   */
  update(entity: Banks): UpdateRequestBuilderV4<Banks> {
    return new UpdateRequestBuilderV4(Banks, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Banks`.
   * @param absoluteEntry Key property. See [[Banks.absoluteEntry]].
   * @returns A request builder for creating requests that delete an entity of type `Banks`.
   */
  delete(absoluteEntry: number): DeleteRequestBuilderV4<Banks>;
  /**
   * Returns a request builder for deleting an entity of type `Banks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Banks` by taking the entity as a parameter.
   */
  delete(entity: Banks): DeleteRequestBuilderV4<Banks>;
  delete(absoluteEntryOrEntity: any): DeleteRequestBuilderV4<Banks> {
    return new DeleteRequestBuilderV4(Banks, absoluteEntryOrEntity instanceof Banks ? absoluteEntryOrEntity : { AbsoluteEntry: absoluteEntryOrEntity! });
  }
}
