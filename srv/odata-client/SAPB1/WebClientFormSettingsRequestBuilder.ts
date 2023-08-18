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
import { WebClientFormSettings } from './WebClientFormSettings';

/**
 * Request builder class for operations supported on the {@link WebClientFormSettings} entity.
 */
export class WebClientFormSettingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WebClientFormSettings<T>, T> {
  /**
   * Returns a request builder for retrieving one `WebClientFormSettings` entity based on its keys.
   * @param guid Key property. See {@link WebClientFormSettings.guid}.
   * @returns A request builder for creating requests to retrieve one `WebClientFormSettings` entity based on its keys.
   */
  getByKey(
    guid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WebClientFormSettings<T>, T> {
    return new GetByKeyRequestBuilder<WebClientFormSettings<T>, T>(
      this.entityApi,
      { Guid: guid }
    );
  }

  /**
   * Returns a request builder for querying all `WebClientFormSettings` entities.
   * @returns A request builder for creating requests to retrieve all `WebClientFormSettings` entities.
   */
  getAll(): GetAllRequestBuilder<WebClientFormSettings<T>, T> {
    return new GetAllRequestBuilder<WebClientFormSettings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WebClientFormSettings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WebClientFormSettings`.
   */
  create(
    entity: WebClientFormSettings<T>
  ): CreateRequestBuilder<WebClientFormSettings<T>, T> {
    return new CreateRequestBuilder<WebClientFormSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WebClientFormSettings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WebClientFormSettings`.
   */
  update(
    entity: WebClientFormSettings<T>
  ): UpdateRequestBuilder<WebClientFormSettings<T>, T> {
    return new UpdateRequestBuilder<WebClientFormSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WebClientFormSettings`.
   * @param guid Key property. See {@link WebClientFormSettings.guid}.
   * @returns A request builder for creating requests that delete an entity of type `WebClientFormSettings`.
   */
  delete(guid: string): DeleteRequestBuilder<WebClientFormSettings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WebClientFormSettings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WebClientFormSettings` by taking the entity as a parameter.
   */
  delete(
    entity: WebClientFormSettings<T>
  ): DeleteRequestBuilder<WebClientFormSettings<T>, T>;
  delete(guidOrEntity: any): DeleteRequestBuilder<WebClientFormSettings<T>, T> {
    return new DeleteRequestBuilder<WebClientFormSettings<T>, T>(
      this.entityApi,
      guidOrEntity instanceof WebClientFormSettings
        ? guidOrEntity
        : { Guid: guidOrEntity! }
    );
  }
}
