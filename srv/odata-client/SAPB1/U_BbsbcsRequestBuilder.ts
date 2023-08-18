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
import { U_Bbsbcs } from './U_Bbsbcs';

/**
 * Request builder class for operations supported on the {@link U_Bbsbcs} entity.
 */
export class U_BbsbcsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bbsbcs<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bbsbcs` entity based on its keys.
   * @param code Key property. See {@link U_Bbsbcs.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bbsbcs` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bbsbcs<T>, T> {
    return new GetByKeyRequestBuilder<U_Bbsbcs<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bbsbcs` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bbsbcs` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bbsbcs<T>, T> {
    return new GetAllRequestBuilder<U_Bbsbcs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bbsbcs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bbsbcs`.
   */
  create(entity: U_Bbsbcs<T>): CreateRequestBuilder<U_Bbsbcs<T>, T> {
    return new CreateRequestBuilder<U_Bbsbcs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bbsbcs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bbsbcs`.
   */
  update(entity: U_Bbsbcs<T>): UpdateRequestBuilder<U_Bbsbcs<T>, T> {
    return new UpdateRequestBuilder<U_Bbsbcs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bbsbcs`.
   * @param code Key property. See {@link U_Bbsbcs.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bbsbcs`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bbsbcs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bbsbcs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bbsbcs` by taking the entity as a parameter.
   */
  delete(entity: U_Bbsbcs<T>): DeleteRequestBuilder<U_Bbsbcs<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bbsbcs<T>, T> {
    return new DeleteRequestBuilder<U_Bbsbcs<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bbsbcs ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
