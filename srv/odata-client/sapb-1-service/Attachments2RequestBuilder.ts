/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Attachments2 } from './Attachments2';

/**
 * Request builder class for operations supported on the [[Attachments2]] entity.
 */
export class Attachments2RequestBuilder extends RequestBuilder<Attachments2> {
  /**
   * Returns a request builder for retrieving one `Attachments2` entity based on its keys.
   * @param absoluteEntry Key property. See [[Attachments2.absoluteEntry]].
   * @returns A request builder for creating requests to retrieve one `Attachments2` entity based on its keys.
   */
  getByKey(absoluteEntry: number): GetByKeyRequestBuilder<Attachments2> {
    return new GetByKeyRequestBuilder(Attachments2, { AbsoluteEntry: absoluteEntry });
  }

  /**
   * Returns a request builder for querying all `Attachments2` entities.
   * @returns A request builder for creating requests to retrieve all `Attachments2` entities.
   */
  getAll(): GetAllRequestBuilder<Attachments2> {
    return new GetAllRequestBuilder(Attachments2);
  }

  /**
   * Returns a request builder for creating a `Attachments2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Attachments2`.
   */
  create(entity: Attachments2): CreateRequestBuilder<Attachments2> {
    return new CreateRequestBuilder(Attachments2, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Attachments2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Attachments2`.
   */
  update(entity: Attachments2): UpdateRequestBuilder<Attachments2> {
    return new UpdateRequestBuilder(Attachments2, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Attachments2`.
   * @param absoluteEntry Key property. See [[Attachments2.absoluteEntry]].
   * @returns A request builder for creating requests that delete an entity of type `Attachments2`.
   */
  delete(absoluteEntry: number): DeleteRequestBuilder<Attachments2>;
  /**
   * Returns a request builder for deleting an entity of type `Attachments2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Attachments2` by taking the entity as a parameter.
   */
  delete(entity: Attachments2): DeleteRequestBuilder<Attachments2>;
  delete(absoluteEntryOrEntity: any): DeleteRequestBuilder<Attachments2> {
    return new DeleteRequestBuilder(Attachments2, absoluteEntryOrEntity instanceof Attachments2 ? absoluteEntryOrEntity : { AbsoluteEntry: absoluteEntryOrEntity! });
  }
}
