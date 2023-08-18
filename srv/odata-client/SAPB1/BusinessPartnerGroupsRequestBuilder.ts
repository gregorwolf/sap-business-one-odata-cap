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
import { BusinessPartnerGroups } from './BusinessPartnerGroups';

/**
 * Request builder class for operations supported on the {@link BusinessPartnerGroups} entity.
 */
export class BusinessPartnerGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessPartnerGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `BusinessPartnerGroups` entity based on its keys.
   * @param code Key property. See {@link BusinessPartnerGroups.code}.
   * @returns A request builder for creating requests to retrieve one `BusinessPartnerGroups` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BusinessPartnerGroups<T>, T> {
    return new GetByKeyRequestBuilder<BusinessPartnerGroups<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `BusinessPartnerGroups` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartnerGroups` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessPartnerGroups<T>, T> {
    return new GetAllRequestBuilder<BusinessPartnerGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessPartnerGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartnerGroups`.
   */
  create(
    entity: BusinessPartnerGroups<T>
  ): CreateRequestBuilder<BusinessPartnerGroups<T>, T> {
    return new CreateRequestBuilder<BusinessPartnerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartnerGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartnerGroups`.
   */
  update(
    entity: BusinessPartnerGroups<T>
  ): UpdateRequestBuilder<BusinessPartnerGroups<T>, T> {
    return new UpdateRequestBuilder<BusinessPartnerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerGroups`.
   * @param code Key property. See {@link BusinessPartnerGroups.code}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerGroups`.
   */
  delete(code: number): DeleteRequestBuilder<BusinessPartnerGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerGroups` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessPartnerGroups<T>
  ): DeleteRequestBuilder<BusinessPartnerGroups<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<BusinessPartnerGroups<T>, T> {
    return new DeleteRequestBuilder<BusinessPartnerGroups<T>, T>(
      this.entityApi,
      codeOrEntity instanceof BusinessPartnerGroups
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
