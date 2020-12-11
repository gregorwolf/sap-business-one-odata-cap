/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BusinessPlaces } from './BusinessPlaces';

/**
 * Request builder class for operations supported on the [[BusinessPlaces]] entity.
 */
export class BusinessPlacesRequestBuilder extends RequestBuilder<BusinessPlaces> {
  /**
   * Returns a request builder for retrieving one `BusinessPlaces` entity based on its keys.
   * @param bplid Key property. See [[BusinessPlaces.bplid]].
   * @returns A request builder for creating requests to retrieve one `BusinessPlaces` entity based on its keys.
   */
  getByKey(bplid: number): GetByKeyRequestBuilderV4<BusinessPlaces> {
    return new GetByKeyRequestBuilderV4(BusinessPlaces, { BPLID: bplid });
  }

  /**
   * Returns a request builder for querying all `BusinessPlaces` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPlaces` entities.
   */
  getAll(): GetAllRequestBuilderV4<BusinessPlaces> {
    return new GetAllRequestBuilderV4(BusinessPlaces);
  }

  /**
   * Returns a request builder for creating a `BusinessPlaces` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPlaces`.
   */
  create(entity: BusinessPlaces): CreateRequestBuilderV4<BusinessPlaces> {
    return new CreateRequestBuilderV4(BusinessPlaces, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPlaces`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPlaces`.
   */
  update(entity: BusinessPlaces): UpdateRequestBuilderV4<BusinessPlaces> {
    return new UpdateRequestBuilderV4(BusinessPlaces, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPlaces`.
   * @param bplid Key property. See [[BusinessPlaces.bplid]].
   * @returns A request builder for creating requests that delete an entity of type `BusinessPlaces`.
   */
  delete(bplid: number): DeleteRequestBuilderV4<BusinessPlaces>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPlaces`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPlaces` by taking the entity as a parameter.
   */
  delete(entity: BusinessPlaces): DeleteRequestBuilderV4<BusinessPlaces>;
  delete(bplidOrEntity: any): DeleteRequestBuilderV4<BusinessPlaces> {
    return new DeleteRequestBuilderV4(BusinessPlaces, bplidOrEntity instanceof BusinessPlaces ? bplidOrEntity : { BPLID: bplidOrEntity! });
  }
}
