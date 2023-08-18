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
import { BusinessPartnerProperties } from './BusinessPartnerProperties';

/**
 * Request builder class for operations supported on the {@link BusinessPartnerProperties} entity.
 */
export class BusinessPartnerPropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessPartnerProperties<T>, T> {
  /**
   * Returns a request builder for retrieving one `BusinessPartnerProperties` entity based on its keys.
   * @param propertyCode Key property. See {@link BusinessPartnerProperties.propertyCode}.
   * @returns A request builder for creating requests to retrieve one `BusinessPartnerProperties` entity based on its keys.
   */
  getByKey(
    propertyCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BusinessPartnerProperties<T>, T> {
    return new GetByKeyRequestBuilder<BusinessPartnerProperties<T>, T>(
      this.entityApi,
      { PropertyCode: propertyCode }
    );
  }

  /**
   * Returns a request builder for querying all `BusinessPartnerProperties` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartnerProperties` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessPartnerProperties<T>, T> {
    return new GetAllRequestBuilder<BusinessPartnerProperties<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessPartnerProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartnerProperties`.
   */
  create(
    entity: BusinessPartnerProperties<T>
  ): CreateRequestBuilder<BusinessPartnerProperties<T>, T> {
    return new CreateRequestBuilder<BusinessPartnerProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartnerProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartnerProperties`.
   */
  update(
    entity: BusinessPartnerProperties<T>
  ): UpdateRequestBuilder<BusinessPartnerProperties<T>, T> {
    return new UpdateRequestBuilder<BusinessPartnerProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerProperties`.
   * @param propertyCode Key property. See {@link BusinessPartnerProperties.propertyCode}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerProperties`.
   */
  delete(
    propertyCode: number
  ): DeleteRequestBuilder<BusinessPartnerProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerProperties` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessPartnerProperties<T>
  ): DeleteRequestBuilder<BusinessPartnerProperties<T>, T>;
  delete(
    propertyCodeOrEntity: any
  ): DeleteRequestBuilder<BusinessPartnerProperties<T>, T> {
    return new DeleteRequestBuilder<BusinessPartnerProperties<T>, T>(
      this.entityApi,
      propertyCodeOrEntity instanceof BusinessPartnerProperties
        ? propertyCodeOrEntity
        : { PropertyCode: propertyCodeOrEntity! }
    );
  }
}
