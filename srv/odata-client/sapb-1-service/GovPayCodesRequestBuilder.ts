/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(absId: number): GetByKeyRequestBuilder<GovPayCodes> {
    return new GetByKeyRequestBuilder(GovPayCodes, { AbsId: absId });
  }

  /**
   * Returns a request builder for querying all `GovPayCodes` entities.
   * @returns A request builder for creating requests to retrieve all `GovPayCodes` entities.
   */
  getAll(): GetAllRequestBuilder<GovPayCodes> {
    return new GetAllRequestBuilder(GovPayCodes);
  }

  /**
   * Returns a request builder for creating a `GovPayCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GovPayCodes`.
   */
  create(entity: GovPayCodes): CreateRequestBuilder<GovPayCodes> {
    return new CreateRequestBuilder(GovPayCodes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `GovPayCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GovPayCodes`.
   */
  update(entity: GovPayCodes): UpdateRequestBuilder<GovPayCodes> {
    return new UpdateRequestBuilder(GovPayCodes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GovPayCodes`.
   * @param absId Key property. See [[GovPayCodes.absId]].
   * @returns A request builder for creating requests that delete an entity of type `GovPayCodes`.
   */
  delete(absId: number): DeleteRequestBuilder<GovPayCodes>;
  /**
   * Returns a request builder for deleting an entity of type `GovPayCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GovPayCodes` by taking the entity as a parameter.
   */
  delete(entity: GovPayCodes): DeleteRequestBuilder<GovPayCodes>;
  delete(absIdOrEntity: any): DeleteRequestBuilder<GovPayCodes> {
    return new DeleteRequestBuilder(GovPayCodes, absIdOrEntity instanceof GovPayCodes ? absIdOrEntity : { AbsId: absIdOrEntity! });
  }
}
