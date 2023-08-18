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
import { U_Bnoint } from './U_Bnoint';

/**
 * Request builder class for operations supported on the {@link U_Bnoint} entity.
 */
export class U_BnointRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bnoint<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bnoint` entity based on its keys.
   * @param code Key property. See {@link U_Bnoint.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bnoint` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bnoint<T>, T> {
    return new GetByKeyRequestBuilder<U_Bnoint<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bnoint` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bnoint` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bnoint<T>, T> {
    return new GetAllRequestBuilder<U_Bnoint<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bnoint` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bnoint`.
   */
  create(entity: U_Bnoint<T>): CreateRequestBuilder<U_Bnoint<T>, T> {
    return new CreateRequestBuilder<U_Bnoint<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bnoint`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bnoint`.
   */
  update(entity: U_Bnoint<T>): UpdateRequestBuilder<U_Bnoint<T>, T> {
    return new UpdateRequestBuilder<U_Bnoint<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bnoint`.
   * @param code Key property. See {@link U_Bnoint.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bnoint`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bnoint<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bnoint`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bnoint` by taking the entity as a parameter.
   */
  delete(entity: U_Bnoint<T>): DeleteRequestBuilder<U_Bnoint<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bnoint<T>, T> {
    return new DeleteRequestBuilder<U_Bnoint<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bnoint ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
