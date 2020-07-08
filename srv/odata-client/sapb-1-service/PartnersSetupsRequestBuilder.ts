/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PartnersSetups } from './PartnersSetups';

/**
 * Request builder class for operations supported on the [[PartnersSetups]] entity.
 */
export class PartnersSetupsRequestBuilder extends RequestBuilder<PartnersSetups> {
  /**
   * Returns a request builder for retrieving one `PartnersSetups` entity based on its keys.
   * @param name Key property. See [[PartnersSetups.name]].
   * @returns A request builder for creating requests to retrieve one `PartnersSetups` entity based on its keys.
   */
  getByKey(name: string): GetByKeyRequestBuilder<PartnersSetups> {
    return new GetByKeyRequestBuilder(PartnersSetups, { Name: name });
  }

  /**
   * Returns a request builder for querying all `PartnersSetups` entities.
   * @returns A request builder for creating requests to retrieve all `PartnersSetups` entities.
   */
  getAll(): GetAllRequestBuilder<PartnersSetups> {
    return new GetAllRequestBuilder(PartnersSetups);
  }

  /**
   * Returns a request builder for creating a `PartnersSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartnersSetups`.
   */
  create(entity: PartnersSetups): CreateRequestBuilder<PartnersSetups> {
    return new CreateRequestBuilder(PartnersSetups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PartnersSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartnersSetups`.
   */
  update(entity: PartnersSetups): UpdateRequestBuilder<PartnersSetups> {
    return new UpdateRequestBuilder(PartnersSetups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PartnersSetups`.
   * @param name Key property. See [[PartnersSetups.name]].
   * @returns A request builder for creating requests that delete an entity of type `PartnersSetups`.
   */
  delete(name: string): DeleteRequestBuilder<PartnersSetups>;
  /**
   * Returns a request builder for deleting an entity of type `PartnersSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartnersSetups` by taking the entity as a parameter.
   */
  delete(entity: PartnersSetups): DeleteRequestBuilder<PartnersSetups>;
  delete(nameOrEntity: any): DeleteRequestBuilder<PartnersSetups> {
    return new DeleteRequestBuilder(PartnersSetups, nameOrEntity instanceof PartnersSetups ? nameOrEntity : { Name: nameOrEntity! });
  }
}
