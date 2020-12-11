/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(name: string): GetByKeyRequestBuilderV4<PartnersSetups> {
    return new GetByKeyRequestBuilderV4(PartnersSetups, { Name: name });
  }

  /**
   * Returns a request builder for querying all `PartnersSetups` entities.
   * @returns A request builder for creating requests to retrieve all `PartnersSetups` entities.
   */
  getAll(): GetAllRequestBuilderV4<PartnersSetups> {
    return new GetAllRequestBuilderV4(PartnersSetups);
  }

  /**
   * Returns a request builder for creating a `PartnersSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartnersSetups`.
   */
  create(entity: PartnersSetups): CreateRequestBuilderV4<PartnersSetups> {
    return new CreateRequestBuilderV4(PartnersSetups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PartnersSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartnersSetups`.
   */
  update(entity: PartnersSetups): UpdateRequestBuilderV4<PartnersSetups> {
    return new UpdateRequestBuilderV4(PartnersSetups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PartnersSetups`.
   * @param name Key property. See [[PartnersSetups.name]].
   * @returns A request builder for creating requests that delete an entity of type `PartnersSetups`.
   */
  delete(name: string): DeleteRequestBuilderV4<PartnersSetups>;
  /**
   * Returns a request builder for deleting an entity of type `PartnersSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartnersSetups` by taking the entity as a parameter.
   */
  delete(entity: PartnersSetups): DeleteRequestBuilderV4<PartnersSetups>;
  delete(nameOrEntity: any): DeleteRequestBuilderV4<PartnersSetups> {
    return new DeleteRequestBuilderV4(PartnersSetups, nameOrEntity instanceof PartnersSetups ? nameOrEntity : { Name: nameOrEntity! });
  }
}
