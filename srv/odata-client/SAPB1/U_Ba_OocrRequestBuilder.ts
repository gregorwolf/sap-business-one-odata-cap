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
import { U_Ba_Oocr } from './U_Ba_Oocr';

/**
 * Request builder class for operations supported on the {@link U_Ba_Oocr} entity.
 */
export class U_Ba_OocrRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Ba_Oocr<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Ba_Oocr` entity based on its keys.
   * @param code Key property. See {@link U_Ba_Oocr.code}.
   * @returns A request builder for creating requests to retrieve one `U_Ba_Oocr` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Ba_Oocr<T>, T> {
    return new GetByKeyRequestBuilder<U_Ba_Oocr<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Ba_Oocr` entities.
   * @returns A request builder for creating requests to retrieve all `U_Ba_Oocr` entities.
   */
  getAll(): GetAllRequestBuilder<U_Ba_Oocr<T>, T> {
    return new GetAllRequestBuilder<U_Ba_Oocr<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Ba_Oocr` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Ba_Oocr`.
   */
  create(entity: U_Ba_Oocr<T>): CreateRequestBuilder<U_Ba_Oocr<T>, T> {
    return new CreateRequestBuilder<U_Ba_Oocr<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Ba_Oocr`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Ba_Oocr`.
   */
  update(entity: U_Ba_Oocr<T>): UpdateRequestBuilder<U_Ba_Oocr<T>, T> {
    return new UpdateRequestBuilder<U_Ba_Oocr<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Ba_Oocr`.
   * @param code Key property. See {@link U_Ba_Oocr.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Ba_Oocr`.
   */
  delete(code: string): DeleteRequestBuilder<U_Ba_Oocr<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Ba_Oocr`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Ba_Oocr` by taking the entity as a parameter.
   */
  delete(entity: U_Ba_Oocr<T>): DeleteRequestBuilder<U_Ba_Oocr<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Ba_Oocr<T>, T> {
    return new DeleteRequestBuilder<U_Ba_Oocr<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Ba_Oocr ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
