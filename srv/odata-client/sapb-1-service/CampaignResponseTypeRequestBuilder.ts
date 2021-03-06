/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(responseType: string): GetByKeyRequestBuilderV4<CampaignResponseType> {
    return new GetByKeyRequestBuilderV4(CampaignResponseType, { ResponseType: responseType });
  }

  /**
   * Returns a request builder for querying all `CampaignResponseType` entities.
   * @returns A request builder for creating requests to retrieve all `CampaignResponseType` entities.
   */
  getAll(): GetAllRequestBuilderV4<CampaignResponseType> {
    return new GetAllRequestBuilderV4(CampaignResponseType);
  }

  /**
   * Returns a request builder for creating a `CampaignResponseType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CampaignResponseType`.
   */
  create(entity: CampaignResponseType): CreateRequestBuilderV4<CampaignResponseType> {
    return new CreateRequestBuilderV4(CampaignResponseType, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CampaignResponseType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CampaignResponseType`.
   */
  update(entity: CampaignResponseType): UpdateRequestBuilderV4<CampaignResponseType> {
    return new UpdateRequestBuilderV4(CampaignResponseType, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CampaignResponseType`.
   * @param responseType Key property. See [[CampaignResponseType.responseType]].
   * @returns A request builder for creating requests that delete an entity of type `CampaignResponseType`.
   */
  delete(responseType: string): DeleteRequestBuilderV4<CampaignResponseType>;
  /**
   * Returns a request builder for deleting an entity of type `CampaignResponseType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CampaignResponseType` by taking the entity as a parameter.
   */
  delete(entity: CampaignResponseType): DeleteRequestBuilderV4<CampaignResponseType>;
  delete(responseTypeOrEntity: any): DeleteRequestBuilderV4<CampaignResponseType> {
    return new DeleteRequestBuilderV4(CampaignResponseType, responseTypeOrEntity instanceof CampaignResponseType ? responseTypeOrEntity : { ResponseType: responseTypeOrEntity! });
  }
}
