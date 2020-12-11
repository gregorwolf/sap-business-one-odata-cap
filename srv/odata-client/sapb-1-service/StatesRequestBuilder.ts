/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(code: string, country: string): GetByKeyRequestBuilderV4<States> {
    return new GetByKeyRequestBuilderV4(States, {
      Code: code,
      Country: country
    });
  }

  /**
   * Returns a request builder for querying all `States` entities.
   * @returns A request builder for creating requests to retrieve all `States` entities.
   */
  getAll(): GetAllRequestBuilderV4<States> {
    return new GetAllRequestBuilderV4(States);
  }

  /**
   * Returns a request builder for creating a `States` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `States`.
   */
  create(entity: States): CreateRequestBuilderV4<States> {
    return new CreateRequestBuilderV4(States, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `States`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `States`.
   */
  update(entity: States): UpdateRequestBuilderV4<States> {
    return new UpdateRequestBuilderV4(States, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `States`.
   * @param code Key property. See [[States.code]].
   * @param country Key property. See [[States.country]].
   * @returns A request builder for creating requests that delete an entity of type `States`.
   */
  delete(code: string, country: string): DeleteRequestBuilderV4<States>;
  /**
   * Returns a request builder for deleting an entity of type `States`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `States` by taking the entity as a parameter.
   */
  delete(entity: States): DeleteRequestBuilderV4<States>;
  delete(codeOrEntity: any, country?: string): DeleteRequestBuilderV4<States> {
    return new DeleteRequestBuilderV4(States, codeOrEntity instanceof States ? codeOrEntity : {
      Code: codeOrEntity!,
      Country: country!
    });
  }
}
