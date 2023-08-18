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
import { PostingTemplates } from './PostingTemplates';

/**
 * Request builder class for operations supported on the {@link PostingTemplates} entity.
 */
export class PostingTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PostingTemplates<T>, T> {
  /**
   * Returns a request builder for retrieving one `PostingTemplates` entity based on its keys.
   * @param code Key property. See {@link PostingTemplates.code}.
   * @returns A request builder for creating requests to retrieve one `PostingTemplates` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PostingTemplates<T>, T> {
    return new GetByKeyRequestBuilder<PostingTemplates<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `PostingTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `PostingTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<PostingTemplates<T>, T> {
    return new GetAllRequestBuilder<PostingTemplates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PostingTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PostingTemplates`.
   */
  create(
    entity: PostingTemplates<T>
  ): CreateRequestBuilder<PostingTemplates<T>, T> {
    return new CreateRequestBuilder<PostingTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PostingTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PostingTemplates`.
   */
  update(
    entity: PostingTemplates<T>
  ): UpdateRequestBuilder<PostingTemplates<T>, T> {
    return new UpdateRequestBuilder<PostingTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PostingTemplates`.
   * @param code Key property. See {@link PostingTemplates.code}.
   * @returns A request builder for creating requests that delete an entity of type `PostingTemplates`.
   */
  delete(code: string): DeleteRequestBuilder<PostingTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PostingTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PostingTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: PostingTemplates<T>
  ): DeleteRequestBuilder<PostingTemplates<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<PostingTemplates<T>, T> {
    return new DeleteRequestBuilder<PostingTemplates<T>, T>(
      this.entityApi,
      codeOrEntity instanceof PostingTemplates
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
