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
import { PartnersSetups } from './PartnersSetups';

/**
 * Request builder class for operations supported on the {@link PartnersSetups} entity.
 */
export class PartnersSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PartnersSetups<T>, T> {
  /**
   * Returns a request builder for retrieving one `PartnersSetups` entity based on its keys.
   * @param partnerId Key property. See {@link PartnersSetups.partnerId}.
   * @returns A request builder for creating requests to retrieve one `PartnersSetups` entity based on its keys.
   */
  getByKey(
    partnerId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PartnersSetups<T>, T> {
    return new GetByKeyRequestBuilder<PartnersSetups<T>, T>(this.entityApi, {
      PartnerID: partnerId
    });
  }

  /**
   * Returns a request builder for querying all `PartnersSetups` entities.
   * @returns A request builder for creating requests to retrieve all `PartnersSetups` entities.
   */
  getAll(): GetAllRequestBuilder<PartnersSetups<T>, T> {
    return new GetAllRequestBuilder<PartnersSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PartnersSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartnersSetups`.
   */
  create(
    entity: PartnersSetups<T>
  ): CreateRequestBuilder<PartnersSetups<T>, T> {
    return new CreateRequestBuilder<PartnersSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PartnersSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartnersSetups`.
   */
  update(
    entity: PartnersSetups<T>
  ): UpdateRequestBuilder<PartnersSetups<T>, T> {
    return new UpdateRequestBuilder<PartnersSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PartnersSetups`.
   * @param partnerId Key property. See {@link PartnersSetups.partnerId}.
   * @returns A request builder for creating requests that delete an entity of type `PartnersSetups`.
   */
  delete(partnerId: number): DeleteRequestBuilder<PartnersSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PartnersSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartnersSetups` by taking the entity as a parameter.
   */
  delete(entity: PartnersSetups<T>): DeleteRequestBuilder<PartnersSetups<T>, T>;
  delete(partnerIdOrEntity: any): DeleteRequestBuilder<PartnersSetups<T>, T> {
    return new DeleteRequestBuilder<PartnersSetups<T>, T>(
      this.entityApi,
      partnerIdOrEntity instanceof PartnersSetups
        ? partnerIdOrEntity
        : { PartnerID: partnerIdOrEntity! }
    );
  }
}
