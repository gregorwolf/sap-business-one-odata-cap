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
import { U_Bd_Spath } from './U_Bd_Spath';

/**
 * Request builder class for operations supported on the {@link U_Bd_Spath} entity.
 */
export class U_Bd_SpathRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bd_Spath<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bd_Spath` entity based on its keys.
   * @param code Key property. See {@link U_Bd_Spath.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bd_Spath` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bd_Spath<T>, T> {
    return new GetByKeyRequestBuilder<U_Bd_Spath<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bd_Spath` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bd_Spath` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bd_Spath<T>, T> {
    return new GetAllRequestBuilder<U_Bd_Spath<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bd_Spath` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bd_Spath`.
   */
  create(entity: U_Bd_Spath<T>): CreateRequestBuilder<U_Bd_Spath<T>, T> {
    return new CreateRequestBuilder<U_Bd_Spath<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bd_Spath`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bd_Spath`.
   */
  update(entity: U_Bd_Spath<T>): UpdateRequestBuilder<U_Bd_Spath<T>, T> {
    return new UpdateRequestBuilder<U_Bd_Spath<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bd_Spath`.
   * @param code Key property. See {@link U_Bd_Spath.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bd_Spath`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bd_Spath<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bd_Spath`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bd_Spath` by taking the entity as a parameter.
   */
  delete(entity: U_Bd_Spath<T>): DeleteRequestBuilder<U_Bd_Spath<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bd_Spath<T>, T> {
    return new DeleteRequestBuilder<U_Bd_Spath<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bd_Spath
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
