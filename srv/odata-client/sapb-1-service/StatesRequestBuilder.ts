/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { States } from './States';

/**
 * Request builder class for operations supported on the [[States]] entity.
 */
export class StatesRequestBuilder extends RequestBuilder<States> {
  /**
   * Returns a request builder for retrieving one `States` entity based on its keys.
   * @param code Key property. See [[States.code]].
   * @param country Key property. See [[States.country]].
   * @returns A request builder for creating requests to retrieve one `States` entity based on its keys.
   */
  getByKey(code: string, country: string): GetByKeyRequestBuilder<States> {
    return new GetByKeyRequestBuilder(States, {
      Code: code,
      Country: country
    });
  }

  /**
   * Returns a request builder for querying all `States` entities.
   * @returns A request builder for creating requests to retrieve all `States` entities.
   */
  getAll(): GetAllRequestBuilder<States> {
    return new GetAllRequestBuilder(States);
  }

  /**
   * Returns a request builder for creating a `States` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `States`.
   */
  create(entity: States): CreateRequestBuilder<States> {
    return new CreateRequestBuilder(States, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `States`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `States`.
   */
  update(entity: States): UpdateRequestBuilder<States> {
    return new UpdateRequestBuilder(States, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `States`.
   * @param code Key property. See [[States.code]].
   * @param country Key property. See [[States.country]].
   * @returns A request builder for creating requests that delete an entity of type `States`.
   */
  delete(code: string, country: string): DeleteRequestBuilder<States>;
  /**
   * Returns a request builder for deleting an entity of type `States`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `States` by taking the entity as a parameter.
   */
  delete(entity: States): DeleteRequestBuilder<States>;
  delete(codeOrEntity: any, country?: string): DeleteRequestBuilder<States> {
    return new DeleteRequestBuilder(States, codeOrEntity instanceof States ? codeOrEntity : {
      Code: codeOrEntity!,
      Country: country!
    });
  }
}
