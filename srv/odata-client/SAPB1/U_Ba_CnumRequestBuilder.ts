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
import { U_Ba_Cnum } from './U_Ba_Cnum';

/**
 * Request builder class for operations supported on the {@link U_Ba_Cnum} entity.
 */
export class U_Ba_CnumRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Ba_Cnum<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Ba_Cnum` entity based on its keys.
   * @param code Key property. See {@link U_Ba_Cnum.code}.
   * @returns A request builder for creating requests to retrieve one `U_Ba_Cnum` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Ba_Cnum<T>, T> {
    return new GetByKeyRequestBuilder<U_Ba_Cnum<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Ba_Cnum` entities.
   * @returns A request builder for creating requests to retrieve all `U_Ba_Cnum` entities.
   */
  getAll(): GetAllRequestBuilder<U_Ba_Cnum<T>, T> {
    return new GetAllRequestBuilder<U_Ba_Cnum<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Ba_Cnum` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Ba_Cnum`.
   */
  create(entity: U_Ba_Cnum<T>): CreateRequestBuilder<U_Ba_Cnum<T>, T> {
    return new CreateRequestBuilder<U_Ba_Cnum<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Ba_Cnum`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Ba_Cnum`.
   */
  update(entity: U_Ba_Cnum<T>): UpdateRequestBuilder<U_Ba_Cnum<T>, T> {
    return new UpdateRequestBuilder<U_Ba_Cnum<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Ba_Cnum`.
   * @param code Key property. See {@link U_Ba_Cnum.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Ba_Cnum`.
   */
  delete(code: string): DeleteRequestBuilder<U_Ba_Cnum<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Ba_Cnum`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Ba_Cnum` by taking the entity as a parameter.
   */
  delete(entity: U_Ba_Cnum<T>): DeleteRequestBuilder<U_Ba_Cnum<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Ba_Cnum<T>, T> {
    return new DeleteRequestBuilder<U_Ba_Cnum<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Ba_Cnum ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
