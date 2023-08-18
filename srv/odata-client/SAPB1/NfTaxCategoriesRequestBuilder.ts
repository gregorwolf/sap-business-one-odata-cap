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
import { NfTaxCategories } from './NfTaxCategories';

/**
 * Request builder class for operations supported on the {@link NfTaxCategories} entity.
 */
export class NfTaxCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NfTaxCategories<T>, T> {
  /**
   * Returns a request builder for retrieving one `NfTaxCategories` entity based on its keys.
   * @param absId Key property. See {@link NfTaxCategories.absId}.
   * @returns A request builder for creating requests to retrieve one `NfTaxCategories` entity based on its keys.
   */
  getByKey(
    absId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<NfTaxCategories<T>, T> {
    return new GetByKeyRequestBuilder<NfTaxCategories<T>, T>(this.entityApi, {
      AbsId: absId
    });
  }

  /**
   * Returns a request builder for querying all `NfTaxCategories` entities.
   * @returns A request builder for creating requests to retrieve all `NfTaxCategories` entities.
   */
  getAll(): GetAllRequestBuilder<NfTaxCategories<T>, T> {
    return new GetAllRequestBuilder<NfTaxCategories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NfTaxCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NfTaxCategories`.
   */
  create(
    entity: NfTaxCategories<T>
  ): CreateRequestBuilder<NfTaxCategories<T>, T> {
    return new CreateRequestBuilder<NfTaxCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `NfTaxCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NfTaxCategories`.
   */
  update(
    entity: NfTaxCategories<T>
  ): UpdateRequestBuilder<NfTaxCategories<T>, T> {
    return new UpdateRequestBuilder<NfTaxCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NfTaxCategories`.
   * @param absId Key property. See {@link NfTaxCategories.absId}.
   * @returns A request builder for creating requests that delete an entity of type `NfTaxCategories`.
   */
  delete(absId: number): DeleteRequestBuilder<NfTaxCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NfTaxCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NfTaxCategories` by taking the entity as a parameter.
   */
  delete(
    entity: NfTaxCategories<T>
  ): DeleteRequestBuilder<NfTaxCategories<T>, T>;
  delete(absIdOrEntity: any): DeleteRequestBuilder<NfTaxCategories<T>, T> {
    return new DeleteRequestBuilder<NfTaxCategories<T>, T>(
      this.entityApi,
      absIdOrEntity instanceof NfTaxCategories
        ? absIdOrEntity
        : { AbsId: absIdOrEntity! }
    );
  }
}
