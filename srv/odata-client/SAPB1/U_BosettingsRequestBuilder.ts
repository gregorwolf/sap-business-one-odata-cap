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
import { U_Bosettings } from './U_Bosettings';

/**
 * Request builder class for operations supported on the {@link U_Bosettings} entity.
 */
export class U_BosettingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bosettings<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bosettings` entity based on its keys.
   * @param code Key property. See {@link U_Bosettings.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bosettings` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bosettings<T>, T> {
    return new GetByKeyRequestBuilder<U_Bosettings<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bosettings` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bosettings` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bosettings<T>, T> {
    return new GetAllRequestBuilder<U_Bosettings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bosettings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bosettings`.
   */
  create(entity: U_Bosettings<T>): CreateRequestBuilder<U_Bosettings<T>, T> {
    return new CreateRequestBuilder<U_Bosettings<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bosettings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bosettings`.
   */
  update(entity: U_Bosettings<T>): UpdateRequestBuilder<U_Bosettings<T>, T> {
    return new UpdateRequestBuilder<U_Bosettings<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bosettings`.
   * @param code Key property. See {@link U_Bosettings.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bosettings`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bosettings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bosettings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bosettings` by taking the entity as a parameter.
   */
  delete(entity: U_Bosettings<T>): DeleteRequestBuilder<U_Bosettings<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bosettings<T>, T> {
    return new DeleteRequestBuilder<U_Bosettings<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bosettings
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
