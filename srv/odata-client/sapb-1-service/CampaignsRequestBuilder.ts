/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Campaigns } from './Campaigns';

/**
 * Request builder class for operations supported on the [[Campaigns]] entity.
 */
export class CampaignsRequestBuilder extends RequestBuilder<Campaigns> {
  /**
   * Returns a request builder for retrieving one `Campaigns` entity based on its keys.
   * @param campaignNumber Key property. See [[Campaigns.campaignNumber]].
   * @returns A request builder for creating requests to retrieve one `Campaigns` entity based on its keys.
   */
  getByKey(campaignNumber: number): GetByKeyRequestBuilder<Campaigns> {
    return new GetByKeyRequestBuilder(Campaigns, { CampaignNumber: campaignNumber });
  }

  /**
   * Returns a request builder for querying all `Campaigns` entities.
   * @returns A request builder for creating requests to retrieve all `Campaigns` entities.
   */
  getAll(): GetAllRequestBuilder<Campaigns> {
    return new GetAllRequestBuilder(Campaigns);
  }

  /**
   * Returns a request builder for creating a `Campaigns` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Campaigns`.
   */
  create(entity: Campaigns): CreateRequestBuilder<Campaigns> {
    return new CreateRequestBuilder(Campaigns, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Campaigns`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Campaigns`.
   */
  update(entity: Campaigns): UpdateRequestBuilder<Campaigns> {
    return new UpdateRequestBuilder(Campaigns, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Campaigns`.
   * @param campaignNumber Key property. See [[Campaigns.campaignNumber]].
   * @returns A request builder for creating requests that delete an entity of type `Campaigns`.
   */
  delete(campaignNumber: number): DeleteRequestBuilder<Campaigns>;
  /**
   * Returns a request builder for deleting an entity of type `Campaigns`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Campaigns` by taking the entity as a parameter.
   */
  delete(entity: Campaigns): DeleteRequestBuilder<Campaigns>;
  delete(campaignNumberOrEntity: any): DeleteRequestBuilder<Campaigns> {
    return new DeleteRequestBuilder(Campaigns, campaignNumberOrEntity instanceof Campaigns ? campaignNumberOrEntity : { CampaignNumber: campaignNumberOrEntity! });
  }
}
