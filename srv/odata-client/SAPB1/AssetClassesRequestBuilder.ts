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
import { AssetClasses } from './AssetClasses';

/**
 * Request builder class for operations supported on the {@link AssetClasses} entity.
 */
export class AssetClassesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetClasses<T>, T> {
  /**
   * Returns a request builder for retrieving one `AssetClasses` entity based on its keys.
   * @param code Key property. See {@link AssetClasses.code}.
   * @returns A request builder for creating requests to retrieve one `AssetClasses` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetClasses<T>, T> {
    return new GetByKeyRequestBuilder<AssetClasses<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `AssetClasses` entities.
   * @returns A request builder for creating requests to retrieve all `AssetClasses` entities.
   */
  getAll(): GetAllRequestBuilder<AssetClasses<T>, T> {
    return new GetAllRequestBuilder<AssetClasses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetClasses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetClasses`.
   */
  create(entity: AssetClasses<T>): CreateRequestBuilder<AssetClasses<T>, T> {
    return new CreateRequestBuilder<AssetClasses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AssetClasses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetClasses`.
   */
  update(entity: AssetClasses<T>): UpdateRequestBuilder<AssetClasses<T>, T> {
    return new UpdateRequestBuilder<AssetClasses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetClasses`.
   * @param code Key property. See {@link AssetClasses.code}.
   * @returns A request builder for creating requests that delete an entity of type `AssetClasses`.
   */
  delete(code: string): DeleteRequestBuilder<AssetClasses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetClasses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetClasses` by taking the entity as a parameter.
   */
  delete(entity: AssetClasses<T>): DeleteRequestBuilder<AssetClasses<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<AssetClasses<T>, T> {
    return new DeleteRequestBuilder<AssetClasses<T>, T>(
      this.entityApi,
      codeOrEntity instanceof AssetClasses
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
