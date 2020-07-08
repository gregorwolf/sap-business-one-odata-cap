/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Industries } from './Industries';

/**
 * Request builder class for operations supported on the [[Industries]] entity.
 */
export class IndustriesRequestBuilder extends RequestBuilder<Industries> {
  /**
   * Returns a request builder for retrieving one `Industries` entity based on its keys.
   * @param industryCode Key property. See [[Industries.industryCode]].
   * @returns A request builder for creating requests to retrieve one `Industries` entity based on its keys.
   */
  getByKey(industryCode: number): GetByKeyRequestBuilder<Industries> {
    return new GetByKeyRequestBuilder(Industries, { IndustryCode: industryCode });
  }

  /**
   * Returns a request builder for querying all `Industries` entities.
   * @returns A request builder for creating requests to retrieve all `Industries` entities.
   */
  getAll(): GetAllRequestBuilder<Industries> {
    return new GetAllRequestBuilder(Industries);
  }

  /**
   * Returns a request builder for creating a `Industries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Industries`.
   */
  create(entity: Industries): CreateRequestBuilder<Industries> {
    return new CreateRequestBuilder(Industries, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Industries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Industries`.
   */
  update(entity: Industries): UpdateRequestBuilder<Industries> {
    return new UpdateRequestBuilder(Industries, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Industries`.
   * @param industryCode Key property. See [[Industries.industryCode]].
   * @returns A request builder for creating requests that delete an entity of type `Industries`.
   */
  delete(industryCode: number): DeleteRequestBuilder<Industries>;
  /**
   * Returns a request builder for deleting an entity of type `Industries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Industries` by taking the entity as a parameter.
   */
  delete(entity: Industries): DeleteRequestBuilder<Industries>;
  delete(industryCodeOrEntity: any): DeleteRequestBuilder<Industries> {
    return new DeleteRequestBuilder(Industries, industryCodeOrEntity instanceof Industries ? industryCodeOrEntity : { IndustryCode: industryCodeOrEntity! });
  }
}
