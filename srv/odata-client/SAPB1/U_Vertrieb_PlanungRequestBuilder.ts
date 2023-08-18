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
import { U_Vertrieb_Planung } from './U_Vertrieb_Planung';

/**
 * Request builder class for operations supported on the {@link U_Vertrieb_Planung} entity.
 */
export class U_Vertrieb_PlanungRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Vertrieb_Planung<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Vertrieb_Planung` entity based on its keys.
   * @param code Key property. See {@link U_Vertrieb_Planung.code}.
   * @returns A request builder for creating requests to retrieve one `U_Vertrieb_Planung` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Vertrieb_Planung<T>, T> {
    return new GetByKeyRequestBuilder<U_Vertrieb_Planung<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `U_Vertrieb_Planung` entities.
   * @returns A request builder for creating requests to retrieve all `U_Vertrieb_Planung` entities.
   */
  getAll(): GetAllRequestBuilder<U_Vertrieb_Planung<T>, T> {
    return new GetAllRequestBuilder<U_Vertrieb_Planung<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Vertrieb_Planung` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Vertrieb_Planung`.
   */
  create(
    entity: U_Vertrieb_Planung<T>
  ): CreateRequestBuilder<U_Vertrieb_Planung<T>, T> {
    return new CreateRequestBuilder<U_Vertrieb_Planung<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `U_Vertrieb_Planung`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Vertrieb_Planung`.
   */
  update(
    entity: U_Vertrieb_Planung<T>
  ): UpdateRequestBuilder<U_Vertrieb_Planung<T>, T> {
    return new UpdateRequestBuilder<U_Vertrieb_Planung<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Vertrieb_Planung`.
   * @param code Key property. See {@link U_Vertrieb_Planung.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Vertrieb_Planung`.
   */
  delete(code: string): DeleteRequestBuilder<U_Vertrieb_Planung<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Vertrieb_Planung`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Vertrieb_Planung` by taking the entity as a parameter.
   */
  delete(
    entity: U_Vertrieb_Planung<T>
  ): DeleteRequestBuilder<U_Vertrieb_Planung<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Vertrieb_Planung<T>, T> {
    return new DeleteRequestBuilder<U_Vertrieb_Planung<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Vertrieb_Planung
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
