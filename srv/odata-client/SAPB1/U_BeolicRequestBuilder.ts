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
import { U_Beolic } from './U_Beolic';

/**
 * Request builder class for operations supported on the {@link U_Beolic} entity.
 */
export class U_BeolicRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Beolic<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Beolic` entity based on its keys.
   * @param code Key property. See {@link U_Beolic.code}.
   * @returns A request builder for creating requests to retrieve one `U_Beolic` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Beolic<T>, T> {
    return new GetByKeyRequestBuilder<U_Beolic<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Beolic` entities.
   * @returns A request builder for creating requests to retrieve all `U_Beolic` entities.
   */
  getAll(): GetAllRequestBuilder<U_Beolic<T>, T> {
    return new GetAllRequestBuilder<U_Beolic<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Beolic` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Beolic`.
   */
  create(entity: U_Beolic<T>): CreateRequestBuilder<U_Beolic<T>, T> {
    return new CreateRequestBuilder<U_Beolic<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Beolic`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Beolic`.
   */
  update(entity: U_Beolic<T>): UpdateRequestBuilder<U_Beolic<T>, T> {
    return new UpdateRequestBuilder<U_Beolic<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Beolic`.
   * @param code Key property. See {@link U_Beolic.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Beolic`.
   */
  delete(code: string): DeleteRequestBuilder<U_Beolic<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Beolic`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Beolic` by taking the entity as a parameter.
   */
  delete(entity: U_Beolic<T>): DeleteRequestBuilder<U_Beolic<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Beolic<T>, T> {
    return new DeleteRequestBuilder<U_Beolic<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Beolic ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
