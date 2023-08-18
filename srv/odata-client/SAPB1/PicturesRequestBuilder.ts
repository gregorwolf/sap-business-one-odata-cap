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
import { Pictures } from './Pictures';

/**
 * Request builder class for operations supported on the {@link Pictures} entity.
 */
export class PicturesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Pictures<T>, T> {
  /**
   * Returns a request builder for retrieving one `Pictures` entity based on its keys.
   * @param pictureName Key property. See {@link Pictures.pictureName}.
   * @returns A request builder for creating requests to retrieve one `Pictures` entity based on its keys.
   */
  getByKey(
    pictureName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Pictures<T>, T> {
    return new GetByKeyRequestBuilder<Pictures<T>, T>(this.entityApi, {
      PictureName: pictureName
    });
  }

  /**
   * Returns a request builder for querying all `Pictures` entities.
   * @returns A request builder for creating requests to retrieve all `Pictures` entities.
   */
  getAll(): GetAllRequestBuilder<Pictures<T>, T> {
    return new GetAllRequestBuilder<Pictures<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Pictures` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Pictures`.
   */
  create(entity: Pictures<T>): CreateRequestBuilder<Pictures<T>, T> {
    return new CreateRequestBuilder<Pictures<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Pictures`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Pictures`.
   */
  update(entity: Pictures<T>): UpdateRequestBuilder<Pictures<T>, T> {
    return new UpdateRequestBuilder<Pictures<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Pictures`.
   * @param pictureName Key property. See {@link Pictures.pictureName}.
   * @returns A request builder for creating requests that delete an entity of type `Pictures`.
   */
  delete(pictureName: string): DeleteRequestBuilder<Pictures<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Pictures`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Pictures` by taking the entity as a parameter.
   */
  delete(entity: Pictures<T>): DeleteRequestBuilder<Pictures<T>, T>;
  delete(pictureNameOrEntity: any): DeleteRequestBuilder<Pictures<T>, T> {
    return new DeleteRequestBuilder<Pictures<T>, T>(
      this.entityApi,
      pictureNameOrEntity instanceof Pictures
        ? pictureNameOrEntity
        : { PictureName: pictureNameOrEntity! }
    );
  }
}
