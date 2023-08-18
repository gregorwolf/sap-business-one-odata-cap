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
import { U_Bncstp } from './U_Bncstp';

/**
 * Request builder class for operations supported on the {@link U_Bncstp} entity.
 */
export class U_BncstpRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bncstp<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bncstp` entity based on its keys.
   * @param code Key property. See {@link U_Bncstp.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bncstp` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bncstp<T>, T> {
    return new GetByKeyRequestBuilder<U_Bncstp<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bncstp` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bncstp` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bncstp<T>, T> {
    return new GetAllRequestBuilder<U_Bncstp<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bncstp` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bncstp`.
   */
  create(entity: U_Bncstp<T>): CreateRequestBuilder<U_Bncstp<T>, T> {
    return new CreateRequestBuilder<U_Bncstp<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bncstp`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bncstp`.
   */
  update(entity: U_Bncstp<T>): UpdateRequestBuilder<U_Bncstp<T>, T> {
    return new UpdateRequestBuilder<U_Bncstp<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bncstp`.
   * @param code Key property. See {@link U_Bncstp.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bncstp`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bncstp<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bncstp`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bncstp` by taking the entity as a parameter.
   */
  delete(entity: U_Bncstp<T>): DeleteRequestBuilder<U_Bncstp<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bncstp<T>, T> {
    return new DeleteRequestBuilder<U_Bncstp<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bncstp ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
