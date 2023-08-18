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
import { U_Beprefs } from './U_Beprefs';

/**
 * Request builder class for operations supported on the {@link U_Beprefs} entity.
 */
export class U_BeprefsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Beprefs<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Beprefs` entity based on its keys.
   * @param code Key property. See {@link U_Beprefs.code}.
   * @returns A request builder for creating requests to retrieve one `U_Beprefs` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Beprefs<T>, T> {
    return new GetByKeyRequestBuilder<U_Beprefs<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Beprefs` entities.
   * @returns A request builder for creating requests to retrieve all `U_Beprefs` entities.
   */
  getAll(): GetAllRequestBuilder<U_Beprefs<T>, T> {
    return new GetAllRequestBuilder<U_Beprefs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Beprefs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Beprefs`.
   */
  create(entity: U_Beprefs<T>): CreateRequestBuilder<U_Beprefs<T>, T> {
    return new CreateRequestBuilder<U_Beprefs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Beprefs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Beprefs`.
   */
  update(entity: U_Beprefs<T>): UpdateRequestBuilder<U_Beprefs<T>, T> {
    return new UpdateRequestBuilder<U_Beprefs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Beprefs`.
   * @param code Key property. See {@link U_Beprefs.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Beprefs`.
   */
  delete(code: string): DeleteRequestBuilder<U_Beprefs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Beprefs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Beprefs` by taking the entity as a parameter.
   */
  delete(entity: U_Beprefs<T>): DeleteRequestBuilder<U_Beprefs<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Beprefs<T>, T> {
    return new DeleteRequestBuilder<U_Beprefs<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Beprefs ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
