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
import { ProductTrees } from './ProductTrees';

/**
 * Request builder class for operations supported on the {@link ProductTrees} entity.
 */
export class ProductTreesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductTrees<T>, T> {
  /**
   * Returns a request builder for retrieving one `ProductTrees` entity based on its keys.
   * @param treeCode Key property. See {@link ProductTrees.treeCode}.
   * @returns A request builder for creating requests to retrieve one `ProductTrees` entity based on its keys.
   */
  getByKey(
    treeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductTrees<T>, T> {
    return new GetByKeyRequestBuilder<ProductTrees<T>, T>(this.entityApi, {
      TreeCode: treeCode
    });
  }

  /**
   * Returns a request builder for querying all `ProductTrees` entities.
   * @returns A request builder for creating requests to retrieve all `ProductTrees` entities.
   */
  getAll(): GetAllRequestBuilder<ProductTrees<T>, T> {
    return new GetAllRequestBuilder<ProductTrees<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductTrees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductTrees`.
   */
  create(entity: ProductTrees<T>): CreateRequestBuilder<ProductTrees<T>, T> {
    return new CreateRequestBuilder<ProductTrees<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ProductTrees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductTrees`.
   */
  update(entity: ProductTrees<T>): UpdateRequestBuilder<ProductTrees<T>, T> {
    return new UpdateRequestBuilder<ProductTrees<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductTrees`.
   * @param treeCode Key property. See {@link ProductTrees.treeCode}.
   * @returns A request builder for creating requests that delete an entity of type `ProductTrees`.
   */
  delete(treeCode: string): DeleteRequestBuilder<ProductTrees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductTrees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductTrees` by taking the entity as a parameter.
   */
  delete(entity: ProductTrees<T>): DeleteRequestBuilder<ProductTrees<T>, T>;
  delete(treeCodeOrEntity: any): DeleteRequestBuilder<ProductTrees<T>, T> {
    return new DeleteRequestBuilder<ProductTrees<T>, T>(
      this.entityApi,
      treeCodeOrEntity instanceof ProductTrees
        ? treeCodeOrEntity
        : { TreeCode: treeCodeOrEntity! }
    );
  }
}
