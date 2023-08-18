/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { BusinessPlaces } from './BusinessPlaces';

/**
 * Request builder class for operations supported on the {@link BusinessPlaces} entity.
 */
export class BusinessPlacesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessPlaces<T>, T> {
  /**
   * Returns a request builder for retrieving one `BusinessPlaces` entity based on its keys.
   * @param bplid Key property. See {@link BusinessPlaces.bplid}.
   * @returns A request builder for creating requests to retrieve one `BusinessPlaces` entity based on its keys.
   */
  getByKey(
    bplid: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BusinessPlaces<T>, T> {
    return new GetByKeyRequestBuilder<BusinessPlaces<T>, T>(this.entityApi, {
      BPLID: bplid
    });
  }

  /**
   * Returns a request builder for querying all `BusinessPlaces` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPlaces` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessPlaces<T>, T> {
    return new GetAllRequestBuilder<BusinessPlaces<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessPlaces` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPlaces`.
   */
  create(
    entity: BusinessPlaces<T>
  ): CreateRequestBuilder<BusinessPlaces<T>, T> {
    return new CreateRequestBuilder<BusinessPlaces<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPlaces`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPlaces`.
   */
  update(
    entity: BusinessPlaces<T>
  ): UpdateRequestBuilder<BusinessPlaces<T>, T> {
    return new UpdateRequestBuilder<BusinessPlaces<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPlaces`.
   * @param bplid Key property. See {@link BusinessPlaces.bplid}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPlaces`.
   */
  delete(bplid: number): DeleteRequestBuilder<BusinessPlaces<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPlaces`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPlaces` by taking the entity as a parameter.
   */
  delete(entity: BusinessPlaces<T>): DeleteRequestBuilder<BusinessPlaces<T>, T>;
  delete(bplidOrEntity: any): DeleteRequestBuilder<BusinessPlaces<T>, T> {
    return new DeleteRequestBuilder<BusinessPlaces<T>, T>(
      this.entityApi,
      bplidOrEntity instanceof BusinessPlaces
        ? bplidOrEntity
        : { BPLID: bplidOrEntity! }
    );
  }
}
