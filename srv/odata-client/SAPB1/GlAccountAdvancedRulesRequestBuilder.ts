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
import { GlAccountAdvancedRules } from './GlAccountAdvancedRules';

/**
 * Request builder class for operations supported on the {@link GlAccountAdvancedRules} entity.
 */
export class GlAccountAdvancedRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GlAccountAdvancedRules<T>, T> {
  /**
   * Returns a request builder for retrieving one `GlAccountAdvancedRules` entity based on its keys.
   * @param absoluteEntry Key property. See {@link GlAccountAdvancedRules.absoluteEntry}.
   * @returns A request builder for creating requests to retrieve one `GlAccountAdvancedRules` entity based on its keys.
   */
  getByKey(
    absoluteEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<GlAccountAdvancedRules<T>, T> {
    return new GetByKeyRequestBuilder<GlAccountAdvancedRules<T>, T>(
      this.entityApi,
      { AbsoluteEntry: absoluteEntry }
    );
  }

  /**
   * Returns a request builder for querying all `GlAccountAdvancedRules` entities.
   * @returns A request builder for creating requests to retrieve all `GlAccountAdvancedRules` entities.
   */
  getAll(): GetAllRequestBuilder<GlAccountAdvancedRules<T>, T> {
    return new GetAllRequestBuilder<GlAccountAdvancedRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GlAccountAdvancedRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GlAccountAdvancedRules`.
   */
  create(
    entity: GlAccountAdvancedRules<T>
  ): CreateRequestBuilder<GlAccountAdvancedRules<T>, T> {
    return new CreateRequestBuilder<GlAccountAdvancedRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GlAccountAdvancedRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GlAccountAdvancedRules`.
   */
  update(
    entity: GlAccountAdvancedRules<T>
  ): UpdateRequestBuilder<GlAccountAdvancedRules<T>, T> {
    return new UpdateRequestBuilder<GlAccountAdvancedRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GlAccountAdvancedRules`.
   * @param absoluteEntry Key property. See {@link GlAccountAdvancedRules.absoluteEntry}.
   * @returns A request builder for creating requests that delete an entity of type `GlAccountAdvancedRules`.
   */
  delete(
    absoluteEntry: number
  ): DeleteRequestBuilder<GlAccountAdvancedRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GlAccountAdvancedRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GlAccountAdvancedRules` by taking the entity as a parameter.
   */
  delete(
    entity: GlAccountAdvancedRules<T>
  ): DeleteRequestBuilder<GlAccountAdvancedRules<T>, T>;
  delete(
    absoluteEntryOrEntity: any
  ): DeleteRequestBuilder<GlAccountAdvancedRules<T>, T> {
    return new DeleteRequestBuilder<GlAccountAdvancedRules<T>, T>(
      this.entityApi,
      absoluteEntryOrEntity instanceof GlAccountAdvancedRules
        ? absoluteEntryOrEntity
        : { AbsoluteEntry: absoluteEntryOrEntity! }
    );
  }
}
