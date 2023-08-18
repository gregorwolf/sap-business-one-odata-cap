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
import { U_Bprstrt } from './U_Bprstrt';

/**
 * Request builder class for operations supported on the {@link U_Bprstrt} entity.
 */
export class U_BprstrtRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bprstrt<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bprstrt` entity based on its keys.
   * @param code Key property. See {@link U_Bprstrt.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bprstrt` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bprstrt<T>, T> {
    return new GetByKeyRequestBuilder<U_Bprstrt<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bprstrt` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bprstrt` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bprstrt<T>, T> {
    return new GetAllRequestBuilder<U_Bprstrt<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bprstrt` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bprstrt`.
   */
  create(entity: U_Bprstrt<T>): CreateRequestBuilder<U_Bprstrt<T>, T> {
    return new CreateRequestBuilder<U_Bprstrt<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bprstrt`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bprstrt`.
   */
  update(entity: U_Bprstrt<T>): UpdateRequestBuilder<U_Bprstrt<T>, T> {
    return new UpdateRequestBuilder<U_Bprstrt<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bprstrt`.
   * @param code Key property. See {@link U_Bprstrt.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bprstrt`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bprstrt<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bprstrt`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bprstrt` by taking the entity as a parameter.
   */
  delete(entity: U_Bprstrt<T>): DeleteRequestBuilder<U_Bprstrt<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bprstrt<T>, T> {
    return new DeleteRequestBuilder<U_Bprstrt<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bprstrt ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
