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
import { U_Bs_Aufmonitor } from './U_Bs_Aufmonitor';

/**
 * Request builder class for operations supported on the {@link U_Bs_Aufmonitor} entity.
 */
export class U_Bs_AufmonitorRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bs_Aufmonitor<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bs_Aufmonitor` entity based on its keys.
   * @param code Key property. See {@link U_Bs_Aufmonitor.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bs_Aufmonitor` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bs_Aufmonitor<T>, T> {
    return new GetByKeyRequestBuilder<U_Bs_Aufmonitor<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bs_Aufmonitor` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bs_Aufmonitor` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bs_Aufmonitor<T>, T> {
    return new GetAllRequestBuilder<U_Bs_Aufmonitor<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bs_Aufmonitor` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bs_Aufmonitor`.
   */
  create(
    entity: U_Bs_Aufmonitor<T>
  ): CreateRequestBuilder<U_Bs_Aufmonitor<T>, T> {
    return new CreateRequestBuilder<U_Bs_Aufmonitor<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bs_Aufmonitor`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bs_Aufmonitor`.
   */
  update(
    entity: U_Bs_Aufmonitor<T>
  ): UpdateRequestBuilder<U_Bs_Aufmonitor<T>, T> {
    return new UpdateRequestBuilder<U_Bs_Aufmonitor<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bs_Aufmonitor`.
   * @param code Key property. See {@link U_Bs_Aufmonitor.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bs_Aufmonitor`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bs_Aufmonitor<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bs_Aufmonitor`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bs_Aufmonitor` by taking the entity as a parameter.
   */
  delete(
    entity: U_Bs_Aufmonitor<T>
  ): DeleteRequestBuilder<U_Bs_Aufmonitor<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bs_Aufmonitor<T>, T> {
    return new DeleteRequestBuilder<U_Bs_Aufmonitor<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bs_Aufmonitor
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
