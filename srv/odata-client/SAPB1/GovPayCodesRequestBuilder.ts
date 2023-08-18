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
import { GovPayCodes } from './GovPayCodes';

/**
 * Request builder class for operations supported on the {@link GovPayCodes} entity.
 */
export class GovPayCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GovPayCodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `GovPayCodes` entity based on its keys.
   * @param absId Key property. See {@link GovPayCodes.absId}.
   * @returns A request builder for creating requests to retrieve one `GovPayCodes` entity based on its keys.
   */
  getByKey(
    absId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<GovPayCodes<T>, T> {
    return new GetByKeyRequestBuilder<GovPayCodes<T>, T>(this.entityApi, {
      AbsId: absId
    });
  }

  /**
   * Returns a request builder for querying all `GovPayCodes` entities.
   * @returns A request builder for creating requests to retrieve all `GovPayCodes` entities.
   */
  getAll(): GetAllRequestBuilder<GovPayCodes<T>, T> {
    return new GetAllRequestBuilder<GovPayCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GovPayCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GovPayCodes`.
   */
  create(entity: GovPayCodes<T>): CreateRequestBuilder<GovPayCodes<T>, T> {
    return new CreateRequestBuilder<GovPayCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `GovPayCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GovPayCodes`.
   */
  update(entity: GovPayCodes<T>): UpdateRequestBuilder<GovPayCodes<T>, T> {
    return new UpdateRequestBuilder<GovPayCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GovPayCodes`.
   * @param absId Key property. See {@link GovPayCodes.absId}.
   * @returns A request builder for creating requests that delete an entity of type `GovPayCodes`.
   */
  delete(absId: number): DeleteRequestBuilder<GovPayCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GovPayCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GovPayCodes` by taking the entity as a parameter.
   */
  delete(entity: GovPayCodes<T>): DeleteRequestBuilder<GovPayCodes<T>, T>;
  delete(absIdOrEntity: any): DeleteRequestBuilder<GovPayCodes<T>, T> {
    return new DeleteRequestBuilder<GovPayCodes<T>, T>(
      this.entityApi,
      absIdOrEntity instanceof GovPayCodes
        ? absIdOrEntity
        : { AbsId: absIdOrEntity! }
    );
  }
}
