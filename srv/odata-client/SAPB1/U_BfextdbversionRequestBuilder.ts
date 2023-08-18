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
import { U_Bfextdbversion } from './U_Bfextdbversion';

/**
 * Request builder class for operations supported on the {@link U_Bfextdbversion} entity.
 */
export class U_BfextdbversionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bfextdbversion<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bfextdbversion` entity based on its keys.
   * @param code Key property. See {@link U_Bfextdbversion.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bfextdbversion` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bfextdbversion<T>, T> {
    return new GetByKeyRequestBuilder<U_Bfextdbversion<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bfextdbversion` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bfextdbversion` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bfextdbversion<T>, T> {
    return new GetAllRequestBuilder<U_Bfextdbversion<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bfextdbversion` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bfextdbversion`.
   */
  create(
    entity: U_Bfextdbversion<T>
  ): CreateRequestBuilder<U_Bfextdbversion<T>, T> {
    return new CreateRequestBuilder<U_Bfextdbversion<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bfextdbversion`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bfextdbversion`.
   */
  update(
    entity: U_Bfextdbversion<T>
  ): UpdateRequestBuilder<U_Bfextdbversion<T>, T> {
    return new UpdateRequestBuilder<U_Bfextdbversion<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bfextdbversion`.
   * @param code Key property. See {@link U_Bfextdbversion.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bfextdbversion`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bfextdbversion<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bfextdbversion`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bfextdbversion` by taking the entity as a parameter.
   */
  delete(
    entity: U_Bfextdbversion<T>
  ): DeleteRequestBuilder<U_Bfextdbversion<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bfextdbversion<T>, T> {
    return new DeleteRequestBuilder<U_Bfextdbversion<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bfextdbversion
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
