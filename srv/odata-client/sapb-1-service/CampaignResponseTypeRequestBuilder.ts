/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CampaignResponseType } from './CampaignResponseType';

/**
 * Request builder class for operations supported on the [[CampaignResponseType]] entity.
 */
export class CampaignResponseTypeRequestBuilder extends RequestBuilder<CampaignResponseType> {
  /**
   * Returns a request builder for retrieving one `CampaignResponseType` entity based on its keys.
   * @param responseType Key property. See [[CampaignResponseType.responseType]].
   * @returns A request builder for creating requests to retrieve one `CampaignResponseType` entity based on its keys.
   */
  getByKey(responseType: string): GetByKeyRequestBuilder<CampaignResponseType> {
    return new GetByKeyRequestBuilder(CampaignResponseType, { ResponseType: responseType });
  }

  /**
   * Returns a request builder for querying all `CampaignResponseType` entities.
   * @returns A request builder for creating requests to retrieve all `CampaignResponseType` entities.
   */
  getAll(): GetAllRequestBuilder<CampaignResponseType> {
    return new GetAllRequestBuilder(CampaignResponseType);
  }

  /**
   * Returns a request builder for creating a `CampaignResponseType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CampaignResponseType`.
   */
  create(entity: CampaignResponseType): CreateRequestBuilder<CampaignResponseType> {
    return new CreateRequestBuilder(CampaignResponseType, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CampaignResponseType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CampaignResponseType`.
   */
  update(entity: CampaignResponseType): UpdateRequestBuilder<CampaignResponseType> {
    return new UpdateRequestBuilder(CampaignResponseType, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CampaignResponseType`.
   * @param responseType Key property. See [[CampaignResponseType.responseType]].
   * @returns A request builder for creating requests that delete an entity of type `CampaignResponseType`.
   */
  delete(responseType: string): DeleteRequestBuilder<CampaignResponseType>;
  /**
   * Returns a request builder for deleting an entity of type `CampaignResponseType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CampaignResponseType` by taking the entity as a parameter.
   */
  delete(entity: CampaignResponseType): DeleteRequestBuilder<CampaignResponseType>;
  delete(responseTypeOrEntity: any): DeleteRequestBuilder<CampaignResponseType> {
    return new DeleteRequestBuilder(CampaignResponseType, responseTypeOrEntity instanceof CampaignResponseType ? responseTypeOrEntity : { ResponseType: responseTypeOrEntity! });
  }
}
