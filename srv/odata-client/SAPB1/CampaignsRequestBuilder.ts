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
import { Campaigns } from './Campaigns';

/**
 * Request builder class for operations supported on the {@link Campaigns} entity.
 */
export class CampaignsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Campaigns<T>, T> {
  /**
   * Returns a request builder for retrieving one `Campaigns` entity based on its keys.
   * @param campaignNumber Key property. See {@link Campaigns.campaignNumber}.
   * @returns A request builder for creating requests to retrieve one `Campaigns` entity based on its keys.
   */
  getByKey(
    campaignNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Campaigns<T>, T> {
    return new GetByKeyRequestBuilder<Campaigns<T>, T>(this.entityApi, {
      CampaignNumber: campaignNumber
    });
  }

  /**
   * Returns a request builder for querying all `Campaigns` entities.
   * @returns A request builder for creating requests to retrieve all `Campaigns` entities.
   */
  getAll(): GetAllRequestBuilder<Campaigns<T>, T> {
    return new GetAllRequestBuilder<Campaigns<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Campaigns` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Campaigns`.
   */
  create(entity: Campaigns<T>): CreateRequestBuilder<Campaigns<T>, T> {
    return new CreateRequestBuilder<Campaigns<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Campaigns`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Campaigns`.
   */
  update(entity: Campaigns<T>): UpdateRequestBuilder<Campaigns<T>, T> {
    return new UpdateRequestBuilder<Campaigns<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Campaigns`.
   * @param campaignNumber Key property. See {@link Campaigns.campaignNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Campaigns`.
   */
  delete(campaignNumber: number): DeleteRequestBuilder<Campaigns<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Campaigns`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Campaigns` by taking the entity as a parameter.
   */
  delete(entity: Campaigns<T>): DeleteRequestBuilder<Campaigns<T>, T>;
  delete(campaignNumberOrEntity: any): DeleteRequestBuilder<Campaigns<T>, T> {
    return new DeleteRequestBuilder<Campaigns<T>, T>(
      this.entityApi,
      campaignNumberOrEntity instanceof Campaigns
        ? campaignNumberOrEntity
        : { CampaignNumber: campaignNumberOrEntity! }
    );
  }
}
