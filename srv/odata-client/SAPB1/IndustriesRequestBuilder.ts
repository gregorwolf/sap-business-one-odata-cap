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
import { Industries } from './Industries';

/**
 * Request builder class for operations supported on the {@link Industries} entity.
 */
export class IndustriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Industries<T>, T> {
  /**
   * Returns a request builder for retrieving one `Industries` entity based on its keys.
   * @param industryCode Key property. See {@link Industries.industryCode}.
   * @returns A request builder for creating requests to retrieve one `Industries` entity based on its keys.
   */
  getByKey(
    industryCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Industries<T>, T> {
    return new GetByKeyRequestBuilder<Industries<T>, T>(this.entityApi, {
      IndustryCode: industryCode
    });
  }

  /**
   * Returns a request builder for querying all `Industries` entities.
   * @returns A request builder for creating requests to retrieve all `Industries` entities.
   */
  getAll(): GetAllRequestBuilder<Industries<T>, T> {
    return new GetAllRequestBuilder<Industries<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Industries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Industries`.
   */
  create(entity: Industries<T>): CreateRequestBuilder<Industries<T>, T> {
    return new CreateRequestBuilder<Industries<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Industries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Industries`.
   */
  update(entity: Industries<T>): UpdateRequestBuilder<Industries<T>, T> {
    return new UpdateRequestBuilder<Industries<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Industries`.
   * @param industryCode Key property. See {@link Industries.industryCode}.
   * @returns A request builder for creating requests that delete an entity of type `Industries`.
   */
  delete(industryCode: number): DeleteRequestBuilder<Industries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Industries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Industries` by taking the entity as a parameter.
   */
  delete(entity: Industries<T>): DeleteRequestBuilder<Industries<T>, T>;
  delete(industryCodeOrEntity: any): DeleteRequestBuilder<Industries<T>, T> {
    return new DeleteRequestBuilder<Industries<T>, T>(
      this.entityApi,
      industryCodeOrEntity instanceof Industries
        ? industryCodeOrEntity
        : { IndustryCode: industryCodeOrEntity! }
    );
  }
}
