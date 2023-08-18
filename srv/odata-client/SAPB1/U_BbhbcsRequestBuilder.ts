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
import { U_Bbhbcs } from './U_Bbhbcs';

/**
 * Request builder class for operations supported on the {@link U_Bbhbcs} entity.
 */
export class U_BbhbcsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bbhbcs<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bbhbcs` entity based on its keys.
   * @param code Key property. See {@link U_Bbhbcs.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bbhbcs` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bbhbcs<T>, T> {
    return new GetByKeyRequestBuilder<U_Bbhbcs<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bbhbcs` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bbhbcs` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bbhbcs<T>, T> {
    return new GetAllRequestBuilder<U_Bbhbcs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bbhbcs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bbhbcs`.
   */
  create(entity: U_Bbhbcs<T>): CreateRequestBuilder<U_Bbhbcs<T>, T> {
    return new CreateRequestBuilder<U_Bbhbcs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bbhbcs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bbhbcs`.
   */
  update(entity: U_Bbhbcs<T>): UpdateRequestBuilder<U_Bbhbcs<T>, T> {
    return new UpdateRequestBuilder<U_Bbhbcs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bbhbcs`.
   * @param code Key property. See {@link U_Bbhbcs.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bbhbcs`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bbhbcs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bbhbcs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bbhbcs` by taking the entity as a parameter.
   */
  delete(entity: U_Bbhbcs<T>): DeleteRequestBuilder<U_Bbhbcs<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bbhbcs<T>, T> {
    return new DeleteRequestBuilder<U_Bbhbcs<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bbhbcs ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
