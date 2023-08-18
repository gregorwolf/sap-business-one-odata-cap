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
import { U_Bd_Ctax } from './U_Bd_Ctax';

/**
 * Request builder class for operations supported on the {@link U_Bd_Ctax} entity.
 */
export class U_Bd_CtaxRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bd_Ctax<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bd_Ctax` entity based on its keys.
   * @param code Key property. See {@link U_Bd_Ctax.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bd_Ctax` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bd_Ctax<T>, T> {
    return new GetByKeyRequestBuilder<U_Bd_Ctax<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bd_Ctax` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bd_Ctax` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bd_Ctax<T>, T> {
    return new GetAllRequestBuilder<U_Bd_Ctax<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bd_Ctax` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bd_Ctax`.
   */
  create(entity: U_Bd_Ctax<T>): CreateRequestBuilder<U_Bd_Ctax<T>, T> {
    return new CreateRequestBuilder<U_Bd_Ctax<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bd_Ctax`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bd_Ctax`.
   */
  update(entity: U_Bd_Ctax<T>): UpdateRequestBuilder<U_Bd_Ctax<T>, T> {
    return new UpdateRequestBuilder<U_Bd_Ctax<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bd_Ctax`.
   * @param code Key property. See {@link U_Bd_Ctax.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bd_Ctax`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bd_Ctax<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bd_Ctax`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bd_Ctax` by taking the entity as a parameter.
   */
  delete(entity: U_Bd_Ctax<T>): DeleteRequestBuilder<U_Bd_Ctax<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bd_Ctax<T>, T> {
    return new DeleteRequestBuilder<U_Bd_Ctax<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bd_Ctax ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
