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
import { States } from './States';

/**
 * Request builder class for operations supported on the {@link States} entity.
 */
export class StatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<States<T>, T> {
  /**
   * Returns a request builder for retrieving one `States` entity based on its keys.
   * @param code Key property. See {@link States.code}.
   * @param country Key property. See {@link States.country}.
   * @returns A request builder for creating requests to retrieve one `States` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>,
    country: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<States<T>, T> {
    return new GetByKeyRequestBuilder<States<T>, T>(this.entityApi, {
      Code: code,
      Country: country
    });
  }

  /**
   * Returns a request builder for querying all `States` entities.
   * @returns A request builder for creating requests to retrieve all `States` entities.
   */
  getAll(): GetAllRequestBuilder<States<T>, T> {
    return new GetAllRequestBuilder<States<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `States` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `States`.
   */
  create(entity: States<T>): CreateRequestBuilder<States<T>, T> {
    return new CreateRequestBuilder<States<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `States`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `States`.
   */
  update(entity: States<T>): UpdateRequestBuilder<States<T>, T> {
    return new UpdateRequestBuilder<States<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `States`.
   * @param code Key property. See {@link States.code}.
   * @param country Key property. See {@link States.country}.
   * @returns A request builder for creating requests that delete an entity of type `States`.
   */
  delete(code: string, country: string): DeleteRequestBuilder<States<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `States`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `States` by taking the entity as a parameter.
   */
  delete(entity: States<T>): DeleteRequestBuilder<States<T>, T>;
  delete(
    codeOrEntity: any,
    country?: string
  ): DeleteRequestBuilder<States<T>, T> {
    return new DeleteRequestBuilder<States<T>, T>(
      this.entityApi,
      codeOrEntity instanceof States
        ? codeOrEntity
        : {
            Code: codeOrEntity!,
            Country: country!
          }
    );
  }
}
