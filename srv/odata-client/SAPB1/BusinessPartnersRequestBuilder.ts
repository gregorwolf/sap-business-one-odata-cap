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
import { BusinessPartners } from './BusinessPartners';

/**
 * Request builder class for operations supported on the {@link BusinessPartners} entity.
 */
export class BusinessPartnersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessPartners<T>, T> {
  /**
   * Returns a request builder for retrieving one `BusinessPartners` entity based on its keys.
   * @param cardCode Key property. See {@link BusinessPartners.cardCode}.
   * @returns A request builder for creating requests to retrieve one `BusinessPartners` entity based on its keys.
   */
  getByKey(
    cardCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessPartners<T>, T> {
    return new GetByKeyRequestBuilder<BusinessPartners<T>, T>(this.entityApi, {
      CardCode: cardCode
    });
  }

  /**
   * Returns a request builder for querying all `BusinessPartners` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartners` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessPartners<T>, T> {
    return new GetAllRequestBuilder<BusinessPartners<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessPartners` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartners`.
   */
  create(
    entity: BusinessPartners<T>
  ): CreateRequestBuilder<BusinessPartners<T>, T> {
    return new CreateRequestBuilder<BusinessPartners<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartners`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartners`.
   */
  update(
    entity: BusinessPartners<T>
  ): UpdateRequestBuilder<BusinessPartners<T>, T> {
    return new UpdateRequestBuilder<BusinessPartners<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPartners`.
   * @param cardCode Key property. See {@link BusinessPartners.cardCode}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartners`.
   */
  delete(cardCode: string): DeleteRequestBuilder<BusinessPartners<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPartners`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartners` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessPartners<T>
  ): DeleteRequestBuilder<BusinessPartners<T>, T>;
  delete(cardCodeOrEntity: any): DeleteRequestBuilder<BusinessPartners<T>, T> {
    return new DeleteRequestBuilder<BusinessPartners<T>, T>(
      this.entityApi,
      cardCodeOrEntity instanceof BusinessPartners
        ? cardCodeOrEntity
        : { CardCode: cardCodeOrEntity! }
    );
  }
}
