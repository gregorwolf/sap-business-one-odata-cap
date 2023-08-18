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
import { WebClientVariants } from './WebClientVariants';

/**
 * Request builder class for operations supported on the {@link WebClientVariants} entity.
 */
export class WebClientVariantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WebClientVariants<T>, T> {
  /**
   * Returns a request builder for retrieving one `WebClientVariants` entity based on its keys.
   * @param guid Key property. See {@link WebClientVariants.guid}.
   * @returns A request builder for creating requests to retrieve one `WebClientVariants` entity based on its keys.
   */
  getByKey(
    guid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WebClientVariants<T>, T> {
    return new GetByKeyRequestBuilder<WebClientVariants<T>, T>(this.entityApi, {
      Guid: guid
    });
  }

  /**
   * Returns a request builder for querying all `WebClientVariants` entities.
   * @returns A request builder for creating requests to retrieve all `WebClientVariants` entities.
   */
  getAll(): GetAllRequestBuilder<WebClientVariants<T>, T> {
    return new GetAllRequestBuilder<WebClientVariants<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WebClientVariants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WebClientVariants`.
   */
  create(
    entity: WebClientVariants<T>
  ): CreateRequestBuilder<WebClientVariants<T>, T> {
    return new CreateRequestBuilder<WebClientVariants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WebClientVariants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WebClientVariants`.
   */
  update(
    entity: WebClientVariants<T>
  ): UpdateRequestBuilder<WebClientVariants<T>, T> {
    return new UpdateRequestBuilder<WebClientVariants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WebClientVariants`.
   * @param guid Key property. See {@link WebClientVariants.guid}.
   * @returns A request builder for creating requests that delete an entity of type `WebClientVariants`.
   */
  delete(guid: string): DeleteRequestBuilder<WebClientVariants<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WebClientVariants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WebClientVariants` by taking the entity as a parameter.
   */
  delete(
    entity: WebClientVariants<T>
  ): DeleteRequestBuilder<WebClientVariants<T>, T>;
  delete(guidOrEntity: any): DeleteRequestBuilder<WebClientVariants<T>, T> {
    return new DeleteRequestBuilder<WebClientVariants<T>, T>(
      this.entityApi,
      guidOrEntity instanceof WebClientVariants
        ? guidOrEntity
        : { Guid: guidOrEntity! }
    );
  }
}
