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
import { CustomsDeclaration } from './CustomsDeclaration';

/**
 * Request builder class for operations supported on the {@link CustomsDeclaration} entity.
 */
export class CustomsDeclarationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomsDeclaration<T>, T> {
  /**
   * Returns a request builder for retrieving one `CustomsDeclaration` entity based on its keys.
   * @param ccdNum Key property. See {@link CustomsDeclaration.ccdNum}.
   * @returns A request builder for creating requests to retrieve one `CustomsDeclaration` entity based on its keys.
   */
  getByKey(
    ccdNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomsDeclaration<T>, T> {
    return new GetByKeyRequestBuilder<CustomsDeclaration<T>, T>(
      this.entityApi,
      { CCDNum: ccdNum }
    );
  }

  /**
   * Returns a request builder for querying all `CustomsDeclaration` entities.
   * @returns A request builder for creating requests to retrieve all `CustomsDeclaration` entities.
   */
  getAll(): GetAllRequestBuilder<CustomsDeclaration<T>, T> {
    return new GetAllRequestBuilder<CustomsDeclaration<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomsDeclaration` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomsDeclaration`.
   */
  create(
    entity: CustomsDeclaration<T>
  ): CreateRequestBuilder<CustomsDeclaration<T>, T> {
    return new CreateRequestBuilder<CustomsDeclaration<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomsDeclaration`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomsDeclaration`.
   */
  update(
    entity: CustomsDeclaration<T>
  ): UpdateRequestBuilder<CustomsDeclaration<T>, T> {
    return new UpdateRequestBuilder<CustomsDeclaration<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomsDeclaration`.
   * @param ccdNum Key property. See {@link CustomsDeclaration.ccdNum}.
   * @returns A request builder for creating requests that delete an entity of type `CustomsDeclaration`.
   */
  delete(ccdNum: string): DeleteRequestBuilder<CustomsDeclaration<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomsDeclaration`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomsDeclaration` by taking the entity as a parameter.
   */
  delete(
    entity: CustomsDeclaration<T>
  ): DeleteRequestBuilder<CustomsDeclaration<T>, T>;
  delete(ccdNumOrEntity: any): DeleteRequestBuilder<CustomsDeclaration<T>, T> {
    return new DeleteRequestBuilder<CustomsDeclaration<T>, T>(
      this.entityApi,
      ccdNumOrEntity instanceof CustomsDeclaration
        ? ccdNumOrEntity
        : { CCDNum: ccdNumOrEntity! }
    );
  }
}
