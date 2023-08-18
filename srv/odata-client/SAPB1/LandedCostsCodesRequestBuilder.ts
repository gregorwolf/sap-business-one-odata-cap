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
import { LandedCostsCodes } from './LandedCostsCodes';

/**
 * Request builder class for operations supported on the {@link LandedCostsCodes} entity.
 */
export class LandedCostsCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LandedCostsCodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `LandedCostsCodes` entity based on its keys.
   * @param code Key property. See {@link LandedCostsCodes.code}.
   * @returns A request builder for creating requests to retrieve one `LandedCostsCodes` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LandedCostsCodes<T>, T> {
    return new GetByKeyRequestBuilder<LandedCostsCodes<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `LandedCostsCodes` entities.
   * @returns A request builder for creating requests to retrieve all `LandedCostsCodes` entities.
   */
  getAll(): GetAllRequestBuilder<LandedCostsCodes<T>, T> {
    return new GetAllRequestBuilder<LandedCostsCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LandedCostsCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LandedCostsCodes`.
   */
  create(
    entity: LandedCostsCodes<T>
  ): CreateRequestBuilder<LandedCostsCodes<T>, T> {
    return new CreateRequestBuilder<LandedCostsCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LandedCostsCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LandedCostsCodes`.
   */
  update(
    entity: LandedCostsCodes<T>
  ): UpdateRequestBuilder<LandedCostsCodes<T>, T> {
    return new UpdateRequestBuilder<LandedCostsCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LandedCostsCodes`.
   * @param code Key property. See {@link LandedCostsCodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostsCodes`.
   */
  delete(code: string): DeleteRequestBuilder<LandedCostsCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LandedCostsCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostsCodes` by taking the entity as a parameter.
   */
  delete(
    entity: LandedCostsCodes<T>
  ): DeleteRequestBuilder<LandedCostsCodes<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<LandedCostsCodes<T>, T> {
    return new DeleteRequestBuilder<LandedCostsCodes<T>, T>(
      this.entityApi,
      codeOrEntity instanceof LandedCostsCodes
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
