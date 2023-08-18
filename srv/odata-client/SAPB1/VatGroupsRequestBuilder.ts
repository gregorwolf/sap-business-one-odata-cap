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
import { VatGroups } from './VatGroups';

/**
 * Request builder class for operations supported on the {@link VatGroups} entity.
 */
export class VatGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VatGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `VatGroups` entity based on its keys.
   * @param code Key property. See {@link VatGroups.code}.
   * @returns A request builder for creating requests to retrieve one `VatGroups` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VatGroups<T>, T> {
    return new GetByKeyRequestBuilder<VatGroups<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `VatGroups` entities.
   * @returns A request builder for creating requests to retrieve all `VatGroups` entities.
   */
  getAll(): GetAllRequestBuilder<VatGroups<T>, T> {
    return new GetAllRequestBuilder<VatGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VatGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VatGroups`.
   */
  create(entity: VatGroups<T>): CreateRequestBuilder<VatGroups<T>, T> {
    return new CreateRequestBuilder<VatGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `VatGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VatGroups`.
   */
  update(entity: VatGroups<T>): UpdateRequestBuilder<VatGroups<T>, T> {
    return new UpdateRequestBuilder<VatGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VatGroups`.
   * @param code Key property. See {@link VatGroups.code}.
   * @returns A request builder for creating requests that delete an entity of type `VatGroups`.
   */
  delete(code: string): DeleteRequestBuilder<VatGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VatGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VatGroups` by taking the entity as a parameter.
   */
  delete(entity: VatGroups<T>): DeleteRequestBuilder<VatGroups<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<VatGroups<T>, T> {
    return new DeleteRequestBuilder<VatGroups<T>, T>(
      this.entityApi,
      codeOrEntity instanceof VatGroups ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
