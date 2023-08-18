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
import { Attachments2 } from './Attachments2';

/**
 * Request builder class for operations supported on the {@link Attachments2} entity.
 */
export class Attachments2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Attachments2<T>, T> {
  /**
   * Returns a request builder for retrieving one `Attachments2` entity based on its keys.
   * @param absoluteEntry Key property. See {@link Attachments2.absoluteEntry}.
   * @returns A request builder for creating requests to retrieve one `Attachments2` entity based on its keys.
   */
  getByKey(
    absoluteEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Attachments2<T>, T> {
    return new GetByKeyRequestBuilder<Attachments2<T>, T>(this.entityApi, {
      AbsoluteEntry: absoluteEntry
    });
  }

  /**
   * Returns a request builder for querying all `Attachments2` entities.
   * @returns A request builder for creating requests to retrieve all `Attachments2` entities.
   */
  getAll(): GetAllRequestBuilder<Attachments2<T>, T> {
    return new GetAllRequestBuilder<Attachments2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Attachments2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Attachments2`.
   */
  create(entity: Attachments2<T>): CreateRequestBuilder<Attachments2<T>, T> {
    return new CreateRequestBuilder<Attachments2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Attachments2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Attachments2`.
   */
  update(entity: Attachments2<T>): UpdateRequestBuilder<Attachments2<T>, T> {
    return new UpdateRequestBuilder<Attachments2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Attachments2`.
   * @param absoluteEntry Key property. See {@link Attachments2.absoluteEntry}.
   * @returns A request builder for creating requests that delete an entity of type `Attachments2`.
   */
  delete(absoluteEntry: number): DeleteRequestBuilder<Attachments2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Attachments2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Attachments2` by taking the entity as a parameter.
   */
  delete(entity: Attachments2<T>): DeleteRequestBuilder<Attachments2<T>, T>;
  delete(absoluteEntryOrEntity: any): DeleteRequestBuilder<Attachments2<T>, T> {
    return new DeleteRequestBuilder<Attachments2<T>, T>(
      this.entityApi,
      absoluteEntryOrEntity instanceof Attachments2
        ? absoluteEntryOrEntity
        : { AbsoluteEntry: absoluteEntryOrEntity! }
    );
  }
}
