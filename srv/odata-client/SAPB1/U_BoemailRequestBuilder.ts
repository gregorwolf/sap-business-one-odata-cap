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
import { U_Boemail } from './U_Boemail';

/**
 * Request builder class for operations supported on the {@link U_Boemail} entity.
 */
export class U_BoemailRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Boemail<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Boemail` entity based on its keys.
   * @param code Key property. See {@link U_Boemail.code}.
   * @returns A request builder for creating requests to retrieve one `U_Boemail` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Boemail<T>, T> {
    return new GetByKeyRequestBuilder<U_Boemail<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Boemail` entities.
   * @returns A request builder for creating requests to retrieve all `U_Boemail` entities.
   */
  getAll(): GetAllRequestBuilder<U_Boemail<T>, T> {
    return new GetAllRequestBuilder<U_Boemail<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Boemail` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Boemail`.
   */
  create(entity: U_Boemail<T>): CreateRequestBuilder<U_Boemail<T>, T> {
    return new CreateRequestBuilder<U_Boemail<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Boemail`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Boemail`.
   */
  update(entity: U_Boemail<T>): UpdateRequestBuilder<U_Boemail<T>, T> {
    return new UpdateRequestBuilder<U_Boemail<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Boemail`.
   * @param code Key property. See {@link U_Boemail.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Boemail`.
   */
  delete(code: string): DeleteRequestBuilder<U_Boemail<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Boemail`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Boemail` by taking the entity as a parameter.
   */
  delete(entity: U_Boemail<T>): DeleteRequestBuilder<U_Boemail<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Boemail<T>, T> {
    return new DeleteRequestBuilder<U_Boemail<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Boemail ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
