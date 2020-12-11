/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(code: string): GetByKeyRequestBuilderV4<AssetClasses> {
    return new GetByKeyRequestBuilderV4(AssetClasses, { Code: code });
  }

  /**
   * Returns a request builder for querying all `AssetClasses` entities.
   * @returns A request builder for creating requests to retrieve all `AssetClasses` entities.
   */
  getAll(): GetAllRequestBuilderV4<AssetClasses> {
    return new GetAllRequestBuilderV4(AssetClasses);
  }

  /**
   * Returns a request builder for creating a `AssetClasses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetClasses`.
   */
  create(entity: AssetClasses): CreateRequestBuilderV4<AssetClasses> {
    return new CreateRequestBuilderV4(AssetClasses, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AssetClasses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetClasses`.
   */
  update(entity: AssetClasses): UpdateRequestBuilderV4<AssetClasses> {
    return new UpdateRequestBuilderV4(AssetClasses, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetClasses`.
   * @param code Key property. See [[AssetClasses.code]].
   * @returns A request builder for creating requests that delete an entity of type `AssetClasses`.
   */
  delete(code: string): DeleteRequestBuilderV4<AssetClasses>;
  /**
   * Returns a request builder for deleting an entity of type `AssetClasses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetClasses` by taking the entity as a parameter.
   */
  delete(entity: AssetClasses): DeleteRequestBuilderV4<AssetClasses>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<AssetClasses> {
    return new DeleteRequestBuilderV4(AssetClasses, codeOrEntity instanceof AssetClasses ? codeOrEntity : { Code: codeOrEntity! });
  }
}
