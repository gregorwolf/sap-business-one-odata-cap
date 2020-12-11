/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { GovPayCodes } from './GovPayCodes';

/**
 * Request builder class for operations supported on the [[GovPayCodes]] entity.
 */
export class GovPayCodesRequestBuilder extends RequestBuilder<GovPayCodes> {
  /**
   * Returns a request builder for retrieving one `GovPayCodes` entity based on its keys.
   * @param absId Key property. See [[GovPayCodes.absId]].
   * @returns A request builder for creating requests to retrieve one `GovPayCodes` entity based on its keys.
   */
  getByKey(absId: number): GetByKeyRequestBuilderV4<GovPayCodes> {
    return new GetByKeyRequestBuilderV4(GovPayCodes, { AbsId: absId });
  }

  /**
   * Returns a request builder for querying all `GovPayCodes` entities.
   * @returns A request builder for creating requests to retrieve all `GovPayCodes` entities.
   */
  getAll(): GetAllRequestBuilderV4<GovPayCodes> {
    return new GetAllRequestBuilderV4(GovPayCodes);
  }

  /**
   * Returns a request builder for creating a `GovPayCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GovPayCodes`.
   */
  create(entity: GovPayCodes): CreateRequestBuilderV4<GovPayCodes> {
    return new CreateRequestBuilderV4(GovPayCodes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `GovPayCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GovPayCodes`.
   */
  update(entity: GovPayCodes): UpdateRequestBuilderV4<GovPayCodes> {
    return new UpdateRequestBuilderV4(GovPayCodes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GovPayCodes`.
   * @param absId Key property. See [[GovPayCodes.absId]].
   * @returns A request builder for creating requests that delete an entity of type `GovPayCodes`.
   */
  delete(absId: number): DeleteRequestBuilderV4<GovPayCodes>;
  /**
   * Returns a request builder for deleting an entity of type `GovPayCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GovPayCodes` by taking the entity as a parameter.
   */
  delete(entity: GovPayCodes): DeleteRequestBuilderV4<GovPayCodes>;
  delete(absIdOrEntity: any): DeleteRequestBuilderV4<GovPayCodes> {
    return new DeleteRequestBuilderV4(GovPayCodes, absIdOrEntity instanceof GovPayCodes ? absIdOrEntity : { AbsId: absIdOrEntity! });
  }
}
