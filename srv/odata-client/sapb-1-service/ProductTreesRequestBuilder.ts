/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ProductTrees } from './ProductTrees';

/**
 * Request builder class for operations supported on the [[ProductTrees]] entity.
 */
export class ProductTreesRequestBuilder extends RequestBuilder<ProductTrees> {
  /**
   * Returns a request builder for retrieving one `ProductTrees` entity based on its keys.
   * @param treeCode Key property. See [[ProductTrees.treeCode]].
   * @returns A request builder for creating requests to retrieve one `ProductTrees` entity based on its keys.
   */
  getByKey(treeCode: string): GetByKeyRequestBuilder<ProductTrees> {
    return new GetByKeyRequestBuilder(ProductTrees, { TreeCode: treeCode });
  }

  /**
   * Returns a request builder for querying all `ProductTrees` entities.
   * @returns A request builder for creating requests to retrieve all `ProductTrees` entities.
   */
  getAll(): GetAllRequestBuilder<ProductTrees> {
    return new GetAllRequestBuilder(ProductTrees);
  }

  /**
   * Returns a request builder for creating a `ProductTrees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductTrees`.
   */
  create(entity: ProductTrees): CreateRequestBuilder<ProductTrees> {
    return new CreateRequestBuilder(ProductTrees, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ProductTrees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductTrees`.
   */
  update(entity: ProductTrees): UpdateRequestBuilder<ProductTrees> {
    return new UpdateRequestBuilder(ProductTrees, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductTrees`.
   * @param treeCode Key property. See [[ProductTrees.treeCode]].
   * @returns A request builder for creating requests that delete an entity of type `ProductTrees`.
   */
  delete(treeCode: string): DeleteRequestBuilder<ProductTrees>;
  /**
   * Returns a request builder for deleting an entity of type `ProductTrees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductTrees` by taking the entity as a parameter.
   */
  delete(entity: ProductTrees): DeleteRequestBuilder<ProductTrees>;
  delete(treeCodeOrEntity: any): DeleteRequestBuilder<ProductTrees> {
    return new DeleteRequestBuilder(ProductTrees, treeCodeOrEntity instanceof ProductTrees ? treeCodeOrEntity : { TreeCode: treeCodeOrEntity! });
  }
}
