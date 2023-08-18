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
import { CampaignResponseType } from './CampaignResponseType';

/**
 * Request builder class for operations supported on the {@link CampaignResponseType} entity.
 */
export class CampaignResponseTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CampaignResponseType<T>, T> {
  /**
   * Returns a request builder for retrieving one `CampaignResponseType` entity based on its keys.
   * @param responseType Key property. See {@link CampaignResponseType.responseType}.
   * @returns A request builder for creating requests to retrieve one `CampaignResponseType` entity based on its keys.
   */
  getByKey(
    responseType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CampaignResponseType<T>, T> {
    return new GetByKeyRequestBuilder<CampaignResponseType<T>, T>(
      this.entityApi,
      { ResponseType: responseType }
    );
  }

  /**
   * Returns a request builder for querying all `CampaignResponseType` entities.
   * @returns A request builder for creating requests to retrieve all `CampaignResponseType` entities.
   */
  getAll(): GetAllRequestBuilder<CampaignResponseType<T>, T> {
    return new GetAllRequestBuilder<CampaignResponseType<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CampaignResponseType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CampaignResponseType`.
   */
  create(
    entity: CampaignResponseType<T>
  ): CreateRequestBuilder<CampaignResponseType<T>, T> {
    return new CreateRequestBuilder<CampaignResponseType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CampaignResponseType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CampaignResponseType`.
   */
  update(
    entity: CampaignResponseType<T>
  ): UpdateRequestBuilder<CampaignResponseType<T>, T> {
    return new UpdateRequestBuilder<CampaignResponseType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CampaignResponseType`.
   * @param responseType Key property. See {@link CampaignResponseType.responseType}.
   * @returns A request builder for creating requests that delete an entity of type `CampaignResponseType`.
   */
  delete(
    responseType: string
  ): DeleteRequestBuilder<CampaignResponseType<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CampaignResponseType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CampaignResponseType` by taking the entity as a parameter.
   */
  delete(
    entity: CampaignResponseType<T>
  ): DeleteRequestBuilder<CampaignResponseType<T>, T>;
  delete(
    responseTypeOrEntity: any
  ): DeleteRequestBuilder<CampaignResponseType<T>, T> {
    return new DeleteRequestBuilder<CampaignResponseType<T>, T>(
      this.entityApi,
      responseTypeOrEntity instanceof CampaignResponseType
        ? responseTypeOrEntity
        : { ResponseType: responseTypeOrEntity! }
    );
  }
}
