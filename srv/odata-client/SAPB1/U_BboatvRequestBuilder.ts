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
import { U_Bboatv } from './U_Bboatv';

/**
 * Request builder class for operations supported on the {@link U_Bboatv} entity.
 */
export class U_BboatvRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bboatv<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bboatv` entity based on its keys.
   * @param code Key property. See {@link U_Bboatv.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bboatv` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bboatv<T>, T> {
    return new GetByKeyRequestBuilder<U_Bboatv<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bboatv` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bboatv` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bboatv<T>, T> {
    return new GetAllRequestBuilder<U_Bboatv<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bboatv` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bboatv`.
   */
  create(entity: U_Bboatv<T>): CreateRequestBuilder<U_Bboatv<T>, T> {
    return new CreateRequestBuilder<U_Bboatv<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bboatv`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bboatv`.
   */
  update(entity: U_Bboatv<T>): UpdateRequestBuilder<U_Bboatv<T>, T> {
    return new UpdateRequestBuilder<U_Bboatv<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bboatv`.
   * @param code Key property. See {@link U_Bboatv.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bboatv`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bboatv<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bboatv`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bboatv` by taking the entity as a parameter.
   */
  delete(entity: U_Bboatv<T>): DeleteRequestBuilder<U_Bboatv<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bboatv<T>, T> {
    return new DeleteRequestBuilder<U_Bboatv<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bboatv ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
