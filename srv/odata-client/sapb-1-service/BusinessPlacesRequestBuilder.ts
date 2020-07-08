/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(bplid: number): GetByKeyRequestBuilder<BusinessPlaces> {
    return new GetByKeyRequestBuilder(BusinessPlaces, { BPLID: bplid });
  }

  /**
   * Returns a request builder for querying all `BusinessPlaces` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPlaces` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessPlaces> {
    return new GetAllRequestBuilder(BusinessPlaces);
  }

  /**
   * Returns a request builder for creating a `BusinessPlaces` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPlaces`.
   */
  create(entity: BusinessPlaces): CreateRequestBuilder<BusinessPlaces> {
    return new CreateRequestBuilder(BusinessPlaces, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPlaces`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPlaces`.
   */
  update(entity: BusinessPlaces): UpdateRequestBuilder<BusinessPlaces> {
    return new UpdateRequestBuilder(BusinessPlaces, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPlaces`.
   * @param bplid Key property. See [[BusinessPlaces.bplid]].
   * @returns A request builder for creating requests that delete an entity of type `BusinessPlaces`.
   */
  delete(bplid: number): DeleteRequestBuilder<BusinessPlaces>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPlaces`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPlaces` by taking the entity as a parameter.
   */
  delete(entity: BusinessPlaces): DeleteRequestBuilder<BusinessPlaces>;
  delete(bplidOrEntity: any): DeleteRequestBuilder<BusinessPlaces> {
    return new DeleteRequestBuilder(BusinessPlaces, bplidOrEntity instanceof BusinessPlaces ? bplidOrEntity : { BPLID: bplidOrEntity! });
  }
}
