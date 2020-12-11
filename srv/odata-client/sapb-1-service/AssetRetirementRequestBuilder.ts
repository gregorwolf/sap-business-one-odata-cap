/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { AssetRetirement } from './AssetRetirement';

/**
 * Request builder class for operations supported on the [[AssetRetirement]] entity.
 */
export class AssetRetirementRequestBuilder extends RequestBuilder<AssetRetirement> {
  /**
   * Returns a request builder for retrieving one `AssetRetirement` entity based on its keys.
   * @param docEntry Key property. See [[AssetRetirement.docEntry]].
   * @returns A request builder for creating requests to retrieve one `AssetRetirement` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<AssetRetirement> {
    return new GetByKeyRequestBuilderV4(AssetRetirement, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `AssetRetirement` entities.
   * @returns A request builder for creating requests to retrieve all `AssetRetirement` entities.
   */
  getAll(): GetAllRequestBuilderV4<AssetRetirement> {
    return new GetAllRequestBuilderV4(AssetRetirement);
  }

  /**
   * Returns a request builder for creating a `AssetRetirement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetRetirement`.
   */
  create(entity: AssetRetirement): CreateRequestBuilderV4<AssetRetirement> {
    return new CreateRequestBuilderV4(AssetRetirement, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AssetRetirement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetRetirement`.
   */
  update(entity: AssetRetirement): UpdateRequestBuilderV4<AssetRetirement> {
    return new UpdateRequestBuilderV4(AssetRetirement, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetRetirement`.
   * @param docEntry Key property. See [[AssetRetirement.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `AssetRetirement`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<AssetRetirement>;
  /**
   * Returns a request builder for deleting an entity of type `AssetRetirement`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetRetirement` by taking the entity as a parameter.
   */
  delete(entity: AssetRetirement): DeleteRequestBuilderV4<AssetRetirement>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<AssetRetirement> {
    return new DeleteRequestBuilderV4(AssetRetirement, docEntryOrEntity instanceof AssetRetirement ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
