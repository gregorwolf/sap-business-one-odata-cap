/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { AssetClasses } from './AssetClasses';

/**
 * Request builder class for operations supported on the [[AssetClasses]] entity.
 */
export class AssetClassesRequestBuilder extends RequestBuilder<AssetClasses> {
  /**
   * Returns a request builder for retrieving one `AssetClasses` entity based on its keys.
   * @param code Key property. See [[AssetClasses.code]].
   * @returns A request builder for creating requests to retrieve one `AssetClasses` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<AssetClasses> {
    return new GetByKeyRequestBuilder(AssetClasses, { Code: code });
  }

  /**
   * Returns a request builder for querying all `AssetClasses` entities.
   * @returns A request builder for creating requests to retrieve all `AssetClasses` entities.
   */
  getAll(): GetAllRequestBuilder<AssetClasses> {
    return new GetAllRequestBuilder(AssetClasses);
  }

  /**
   * Returns a request builder for creating a `AssetClasses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetClasses`.
   */
  create(entity: AssetClasses): CreateRequestBuilder<AssetClasses> {
    return new CreateRequestBuilder(AssetClasses, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AssetClasses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetClasses`.
   */
  update(entity: AssetClasses): UpdateRequestBuilder<AssetClasses> {
    return new UpdateRequestBuilder(AssetClasses, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetClasses`.
   * @param code Key property. See [[AssetClasses.code]].
   * @returns A request builder for creating requests that delete an entity of type `AssetClasses`.
   */
  delete(code: string): DeleteRequestBuilder<AssetClasses>;
  /**
   * Returns a request builder for deleting an entity of type `AssetClasses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetClasses` by taking the entity as a parameter.
   */
  delete(entity: AssetClasses): DeleteRequestBuilder<AssetClasses>;
  delete(codeOrEntity: any): DeleteRequestBuilder<AssetClasses> {
    return new DeleteRequestBuilder(AssetClasses, codeOrEntity instanceof AssetClasses ? codeOrEntity : { Code: codeOrEntity! });
  }
}
